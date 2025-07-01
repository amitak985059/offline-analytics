const mongoose = require('mongoose')


const logSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  meta: {
    event_category: String,
    event_label: String,
    value: Number,
  },
  session_id: {
    type: String,
    required: true,
  },
  value: {
    type: Number

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });


const logModel = mongoose.model('log', logSchema);

module.exports = logModel;