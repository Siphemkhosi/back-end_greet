const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser  = require( 'body-parser')
const flash = require('express-flash')
const session  = require('express-session')
const Greetings  = require("./greet")
const app = express();
const pool = require("./db");
app.use(express.json())
const pgp = require('pg-promise')();


const DATABASE_URL= process.env.DATABASE_URL || "postgresql://localhost:5432/greetingsdatabase";

const config = { 
	connectionString : DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
	config.ssl = { 
		rejectUnauthorized : false
	}
}
const db = pgp(config);
// import pgPromise from "pg-promise";
// const pgp =  pgPromise({});

// const db = pgp('postgres://mrijrvdf:ic9Y4iLNKr3DjbMDfR94kE8kCD7Qfc9l@tyke.db.elephantsql.com/mrijrvdf');
// const bigData = await db.manyOrNone('select * from users');
// console.log(bigData);


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

const port = process.env.PORT || 3009;
app.listen(port);
console.log(`listen to server: http://localhost:${port}`);

// app.get("/user", async(req, res) =>{
//   try{
//     const{ name} = req.body
//     const newUser = await pool.query("SELECT * FROM users");
//         // console.log(req.body);
//         res.json(newUser);
//       }catch (err){
//         console.error(err.message);
//       }
// });

// db routes
app.post('/greetuser', async(req, res) => {
  console.log("siphe");
  try{
   
const{name} = req.body;
 console.log("name:" + name);
const{counter} = req.body;
const newUser = await pool.query(`INSERT INTO greetuser (username, count)
VALUES (${name}, ${counter})`);
    // console.log(req.body);
    res.json(newUser);
  }catch (err){
    console.error(err.message);
  };
});


// landing
app.get("/", (req, res) => {
 
  res.render("index", {
    userName: greetings.getGreet(greetings.firstName, greetings.languages),
    // userName: greetings.setGreet(),

    language: greetings.getGreet(),
  
    counter: greetings.counter(),
  // reset : greetings.reset(greetings.firstName, greetings.languages)
  
  });
});


// app.get('/addFlash', function (req, res) {
//   req.flash('info', 'This is a flash message');
//   res.redirect('/');
// });


// app.post('/greet', (req,res) => {
//   greetings.setGreet(req.body.name,req.body.radioButn);
//   greetings.storingNames(req.body.name);
//   req.flash('info', greetings.setUserValidation(req.body.name,req.body.radioButn));
  
//   res.redirect('/');
// })

app.post("/greet", async(req, res) => {
  


  let name = req.body.name;  let language =  req.body.radioButn;
  if(name  && language){
 greetings.setGreet(name, language);
 
  }else{
    req.flash('info', greetings.setUserValidation(name, language));
  }
 greetings.firstName = req.body.name
 greetings.languages = req.body.radioButn
 greetings.storingNames(greetings.firstName);

 try{


 const user = await pool.query(`SELECT * FROM greetuser WHERE (username = '${name}') `)

if(user.count){
  const newCounter = parseInt(user.count) + 1;
  await pool.query(`UPDATE greetuser SET count = '${newCounter}' WHERE (username = '${name}') `)
 }else{

 const counter = greetings.counter();
  await pool.query(`INSERT INTO greetuser (username, count)
 VALUES ('${name}', '${counter}')`);
     // console.log(req.body);
    
 } 
 res.redirect("/"); 
   }catch (err){
     console.error(err.message);
   };

});
app.get("/greetedNames", (req, res) => {
  // console.log(req.body)
  res.render("greetedNames", {
   nameList: greetings.listNames(),


  })
});

app.post("/greetedNames", (req, res)=> {
  greetings.firstName = req.body.name
  greetings.languages = req.body.radioButn
  greetings.storingNames(greetings.firstName);
  greetings.greetedNames();
   res.redirect("/");
});


app.get("/counter/:name", (req, res)=> {

  // greetings.firstName = req.body.name
  // greetings.languages = req.body.radioButn
  // greetings.storingNames(greetings.firstName);
  // greetings.greetedNames();
  // greetings.counter();
  
  let times = req.params.name;
  greetings.counterUser(times)
  res.render('counter',{ 
   userName: times,
   number: greetings.counterUser(times)
   
  
});

});

app.get("/clear", (req, res) => {
  greetings.reset()
 res.redirect("/");
});