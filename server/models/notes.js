const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  lifeAspect: {
    type: [String],
    required: true
  },
  
  people: {
    type: Array,
    required: false
  },
  tags: {
    type: [String],
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Note", noteSchema);