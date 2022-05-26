const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema(
  {
    orderType: {
      type: String,
      required: true,

    },
    orderTitle: {
      type: String,
      required: "You need to give your project a title!",
      minLength: 1,
      maxLength: 50
    },
    needByDate: {
      type: Date,
      default: Date.now
    },
    price: {
      type: Number,
    },
    comments: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;