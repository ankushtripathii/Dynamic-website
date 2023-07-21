const mongoose = require("mongoose");
//make schema
const Detail = mongoose.Schema({
  brandName: String,
  brandIconURL: String,
  links: [
    {
      label: String,
      url: String,
    },
  ],
});
// export Schema
module.exports = mongoose.model("detail", Detail);
