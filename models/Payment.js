const mongoose = require('mongoose');

// Schema
const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reference: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending',
    required: true
  },
  subscriptionPlan: {
    type: String,
    required: true
  },
  amountPaid: {
    type: Number,
    default: 0
  },
  monthlyRequestCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// compile to build model
const Payment = mongoose.mongo('Payment', paymentSchema);

module.exports = Payment;