'use strict';

/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

/************* Model ***********/
const schema = new Schema({
    orderId: { type: String },
    referId: { type: String },
    referCount: Number,
    buyerEmail: { type: String },
    buyerFirstName: { type: String },
    buyerLastName: { type: String },
    buyerCity: { type: String },
    buyerState: { type: String },
    buyerPhoneNumber: { type: String },
    productDescription: { type: String },
    model: { type: String },
    variant: { type: String },
    colour: { type: String },
    pincode: { type: String },
    statusCode: { type: String }
}, { timestamps: true, versionKey: false, collection: "orders"});

module.exports = MONGOOSE.model("orders", schema);
