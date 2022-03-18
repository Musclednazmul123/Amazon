const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51KQ32zEizDf4tJhfzF5BIH2ou2Mh7L1YH9akKFiw37Zv1p16vX5ybRzbhW2Jd43ZidwzEFxyTF0Dls8DQpWoRxQ200O8zk4akU")


// API

// -App config 
const app = express();

// -Middlewares 
app.use(cors({origin: true}));
app.use(express.json());

// -API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request receved BOOM!!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    // ok Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint 
// http://localhost:5001/clone-5e595/us-central1/api