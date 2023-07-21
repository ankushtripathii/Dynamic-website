const mongoose = require("mongoose");

const infosection = mongoose.Schema({
  title: String,
  infopage: String,
  imagUrl: String,
});
module.exports = mongoose.model("banner2", infosection);
