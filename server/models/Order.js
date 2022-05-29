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
      type: String,
      default: Date.now
    },
    price: {
      type: String,
    },
    comments: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
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