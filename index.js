const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const flash = require('express-flash');
const session = require('express-session');
const Greetings = require("./greet");
const app = express();
const greetings = Greetings();


app.use(session({

  secret : "somevalue",
  resave: false,
  saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handlebars
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`listen to server: http://localhost:${port}`);

// landing
app.get("/", (req, res) => {
 
  res.render("index", {
    userName: greetings.getGreet(),
    language: greetings.getGreet(),
  
    counter: greetings.counter(),
    // validation: greetings.setUserValidation(req.body.name,req.body.radioButn),
   
  });
});

// app.get('/addFlash', function (req, res) {
//   req.flash('info', 'This is a flash message');
//   res.redirect('/');
// });


app.post('/greet', (req,res) => {
  greetings.setGreet(req.body.name,req.body.radioButn);
  greetings.storingNames(req.body.name);
  req.flash('info', greetings.setGreet(req.body.name,req.body.radioButn));
  
  res.redirect('/');
})

// app.post("/greet", (req, res) => {
//   let name = req.body.name;  let language =  req.body.radioButn;
//   if(name  && language === true){
//  greetings.setGreet(name, language);
//  greetings.storingNames(name);
//   }else{
//     req.flash('info', greetings.setUserValidation(name, language));
//   }

//   res.redirect("/");
// });


