const { model, Schema } = require("mongoose");

const thingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", thingSchema, "Tech");

module.exports = Thing;
