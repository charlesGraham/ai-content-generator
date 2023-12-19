const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  trialPeriod: {
    type: Number,
    default: 3 // 3 days
  },
  trialActive: {
    type: Boolean,
    default: true
  },
  trialExpires: {
    type: Date
  },
  subscription: {
    type: String,
    enum: ['Trial', 'Free', 'Basic', 'Premium']
  },
  apiRequestCount: {
    type: Number,
    default: 0
  },
  monthlyRequestCount: {
    type: Number,
    default: 0
  },
  nextBillingDate: Date,
  payments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment'
    }
  ],
  history: [
    {
      ref: 'History'
    }
  ]
}, {
  timestamps: true
});

// compile to build model
const User = mongoose.mongo('User', userSchema);

module.exports = User;