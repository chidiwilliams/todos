const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = TodoSchema;
