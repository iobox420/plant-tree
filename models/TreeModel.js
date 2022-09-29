const { Schema, model } = require("mongoose")

const TreeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    enum: ["Лиственное", "Хвойное"],
    default: "Хвойное",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  absorptionCo2: {
    type: Number,
    required: true,
  },
  lifeSpan: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  inStore: {
    type: Boolean,
    required: true,
  },
})

module.exports = model("Tree", TreeSchema)