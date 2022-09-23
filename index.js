const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const session = require("express-session");
const Greetings = require("./greet");
const DataBaseFunction = require("./greetdata");
const GreetData = require("./greetdata");
const GreetRoutes = require("./routes/greetroutes");


const app = express();
const pool = require("./db");
app.use(express.json());
const pgp = require("pg-promise")();

const DATABASE_URL =
  process.env.DATABASE_URL || "postgresql://coders:codex123@localhost:5432/greetingsdatabase";

const config = {
  connectionString: DATABASE_URL,
};

if (process.env.NODE_ENV == "production") {
  config.ssl = {
    rejectUnauthorized: false,
  };
}
const db = pgp(config);
// import pgPromise from "pg-promise";
// const pgp =  pgPromise({});

// const db = pgp('postgres://mrijrvdf:ic9Y4iLNKr3DjbMDfR94kE8kCD7Qfc9l@tyke.db.elephantsql.com/mrijrvdf');
// const bigData = await db.manyOrNone('select * from users');
// console.log(bigData);

const greetings = Greetings();


app.use(
  session({
    secret: "somevalue",
    resave: false,
    saveUninitialized: true,
  })
);

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

const port = process.env.PORT || 3010;
app.listen(port);
console.log(`listen to server: http://localhost:${port}`);

// db routes
const greetData = GreetData(db);
const greetRoutes = GreetRoutes(greetData, greetings);

app.get("/", greetRoutes.home);


app.post("/greet", greetRoutes.greetUser);


app.get("/greetedNames", greetRoutes.greetedUser);


app.post("/greetedNames", greetRoutes.greetedUsers);


app.get("/counter/:name", (req, res) => {
 
  let times = req.params.name;
  greetings.counterUser(times);
  res.render("counter", {
    userName: times,
    number: greetings.counterUser(times),
  });
});

app.get("/clear", (req, res) => {
  greetings.reset();
  res.redirect("/");
});
