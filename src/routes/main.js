const express = require("express");
const detail = require("../models/detail");
const slider = require("../models/slider");
const service = require("../models/service");
const contact = require("../models/contact");
const banners = require("../models/banner1");
const infosection = require("../models/banner2");
const gallery = require("../models/gallery");
const routes = express.Router();

routes.get("/", async (res, resp) => {
  const details = await detail.findOne({ _id: "64b83a6e32b623c7b9b9cba6" });
  const slides = await slider.find();
  const banner = await banners.find();

  const infoSection = await infosection.find();

  // console.log(details);
  // console.log(slides);
  const services = await service.find();
  resp.render("index", {
    details: details,
    slides: slides,
    services: services,
    banners: banner,
    infoSections: infoSection,
  });
});

routes.get("/gallery", async (req, resp) => {
  const gallerys = await gallery.find();
  resp.render("gallery", {
    gallerys: gallerys,
  });
});

//process contact form

routes.post("/process-contact-form", (req, resp) => {
  // console.log("form is submitted");
  // console.log(req.body);

  //save the data in database
  try {
    const data = contact.create(req.body);
    console.log(data);
    resp.redirect("/");
  } catch (e) {
    console.log(e);
    resp.redirect("/");
  }
});
module.exports = routes;
