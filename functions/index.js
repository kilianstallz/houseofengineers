const admin = require('firebase-admin')
const Stripe = require('stripe')
const bodyParser = require('body-parser')

var serviceAccount = require('./service.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://house-of-engineers.firebaseio.com'
})

// const stripe = new Stripe('sk_test_EzVhjZKuf0puuYqKoFCuPN0f002G8C6ehd')
const stripe = new Stripe(process.env.STRIPE_PRIV)

const express = require('express')
const app = express()

const port = process.env.PORT || 5000

// Body parser
// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`)
})

app.post('/', bodyParser.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature']
  let event
  try {
    event = JSON.parse(req.body)
  } catch (error) {
    console.log(error)
    return res.status(400).send(`Webhook Error: ${error.message}`)
  }
  console.log(event.type)
  // Charge the source
  if (event.type === 'source.chargeable') {
    console.log('--- Charge Source ---')
    console.log(event)
    return stripe.charges.create(
      {
        amount: parseInt(event.data.object.amount),
        currency: 'eur',
        source: `${event.data.object.id}`
      },
      (err, charge) => {
        if (err) {
          console.log(err)
          return res.status(400).send({errorCharge: err})
        }
        if (charge) {
          return admin
            .database()
            .ref(`payments/pending/${charge.id}`)
            .set({
              createdAt: Date.now(),
              shipping: event.data.object.metadata.shipping || null,
              anzahl: event.data.object.metadata.anzahl || null,
              amount: event.data.object.amount || null,
              name: event.data.object.owner.name || null,
              city: event.data.object.owner.city || null,
              country: event.data.object.owner.country || null,
              line1: event.data.object.owner.line1 || null,
              line2: event.data.object.owner.line2 || null,
              postal_code: event.data.object.owner.postal_code || null,
              phone: event.data.object.owner.phone || null,
              payment_complete: false,
              live: event.data.object.livemode
            })
            .then(() => {
              return res.send({
                recieved: true,
                charge
              })
            })
            .catch((err) => {
              console.log(err)
              return res.status(400).send({errorFB: err})
            })
        }
      }
    )
  }

  if (event.type === 'charge.pending') {
    console.log('--- Charge Pending ---')
    console.log(event)
  }

  if (event.type === 'charge.succeeded') {
    console.log('--- Charge Success ---')
    console.log(event)
    return admin
      .database()
      .ref(`payments/pending/${event.data.object.id}`)
      .update({payment_complete: true})
      .then((re) => {
        console.log(re)
        return res.json({recieved: true, event})
      })
      .catch((err) => {
        return res.status(400).json({fbError: err})
      })
  }

  return res.json({recieved: true})
})

app.get('/sources/:id', (req, res) => {
  stripe.sources.retrieve(req.params.id, (err, rs) => {
    if (rs) {
      return res.json({response: rs})
    }
    if (error) {
      return res.json({error: err})
    }
  })
})

// I've had a good look at your account and the pending test payments with SOFORT and I believe may have found the solution for you. When testing SOFORT payments, you'll want to create a test source with the values succeeding_charge or failing_charge for the owner[name] parameter, otherwise, they'll never transition to either 'failed' or 'succeeded'. Here's more information about this: https://stripe.com/docs/sources/sofort#testing-charge-success-and-failure
// A
// SOFORT test sources without this specific parameter will stay in pending indefinitely. To recreate the most realistic payment flow possible in test mode, test source with the values succeeding_charge or failing_charge parameter will also be listed as pending in the beginning but will eventually switch to the desired result. As the process is randomised, I can't give you a specific time frame for how long this will take exactly, but it's likely between hours and a few days - it's very unlikely to take the full 14 days. This will allow you to test your webhook setup at leisure.
