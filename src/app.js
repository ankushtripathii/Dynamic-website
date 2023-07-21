const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const detail = require("./models/detail");
const slider = require("./models/slider");
const service = require("./models/service");
const banner = require("./models/banner1");
const infoSection = require("./models/banner2");
const gallery = require("./models/gallery");

const app = express();
const routes = require("./routes/main");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("", routes);

//static/css/style.css
app.use("/static", express.static("public"));

//template engine

app.set("view engine", "hbs");
//file hum rakh kaha rahe hai views jo hai views folder me hai
app.set("views", "views");

hbs.registerPartials("views/partials");

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/website_tut")
  .then(() => {
    console.log("connected sucessfully");
    // gallery.create([
    //   {
    //     imgUrl: "/static/images/img1.png",
    //   },
    //   {
    //     imgUrl: "/static/images/img2.jpg",
    //   },
    //   {
    //     imgUrl: "img3.jpg",
    //   },
    // ]);

    // infoSection.create({
    //   title: "We work for people , for money",
    //   infopage:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis amet nisi ut corporis cumque minima consectetur nobis, laudantium quasi!",
    //   imagUrl: "/static/images/graphic2.png",
    // });

    // banner.create({
    //   title: "Start Learning from here !!",
    //   descpage:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    // });

    // service.create([
    //   {
    //     icon: "fab fa-accusoft",
    //     title: "Provide best courses",
    //     description:
    //       "We provde courses that helps our student in learning and in placement.",
    //     linkText: "https://react.dev",
    //     link: "Learn more",
    //   },
    //   {
    //     icon: "fab fa-affiliatetheme",
    //     title: "Learn projects",
    //     description:
    //       "We provde courses that helps our student in learning and in placement.",
    //     linkText: "https://react.dev",
    //     link: "Learn more",
    //   },
    //   {
    //     icon: "fab fa-affiliatetheme",
    //     title: "Learn projects",
    //     description:
    //       "We provde courses that helps our student in learning and in placement.",
    //     linkText: "https://react.dev",
    //     link: "Learn more",
    //   },
    // ]);

    // slider.create([
    //   {
    //     title: "Java",
    //     subTitle: "java is one of the most popular programming language",
    //     imageUrl: "/static/images/s1.jpeg",
    //   },
    //   {
    //     title: "Python",
    //     subTitle:
    //       "Python is a high-level, general-purpose programming language",
    //     imageUrl: "/static/images/s2.jpeg",
    //   },
    //   {
    //     title: "JavaScript",
    //     subTitle:
    //       "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    //     imageUrl: "/static/images/s3.jpg",
    //   },
    // ]);

    // detail.create({
    //   brandName: "TechGeeks",
    //   brandIconURL:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFQXPEfW07sy5szOFLfm-Qn7ceQHB1HQyeQ&usqp=CAU",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(process.env.PORT | 5000, () => {
  console.log("server started");
});
