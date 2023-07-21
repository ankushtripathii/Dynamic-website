const mongoose = require("mongoose");

const gallery = mongoose.Schema([
  {
    imgUrl: String,
  },
]);
module.exports = mongoose.model("gallery", gallery);
