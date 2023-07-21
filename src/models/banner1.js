const mongoose = require("mongoose");

const banner = mongoose.Schema({
  title: String,
  descpage: String,
});
module.exports = mongoose.model("banner1", banner);
