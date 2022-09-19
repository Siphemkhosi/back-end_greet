
// module.exports = function dataBaseFunction() {
// const Greetings = require("./greet")
// const pool = require("./db");

// const greetings  res.render("index", {
//     userName: greetings.getGreet(greetings.firstName, greetings.languages),
//     language: greetings.getGreet(),
//     counter: greetings.counter(),
//   });  res.render("index", {
//     userName: greetings.getGreet(greetings.firstName, greetings.languages),
//     language: greetings.getGreet(),
//     counter: greetings.counter(),
//   });  res.render("index", {
//     userName: greetings.getGreet(greetings.firstName, greetings.languages),
//     language: greetings.getGreet(),
//     counter: greetings.counter(),
//   });
//      async function data(){
//         let name = greetings.name;  
//         console.log(name);
//         let language = greetings.language;
//         try{
//             const user = await pool.query(`SELECT * FROM greetuser WHERE (username = '${name}') `)
//            if(user.rowCount !== 0){
//              const newCounter = parseInt(user.rows[0].count) + 1;
//              await pool.query(`UPDATE greetuser SET count = '${newCounter}' WHERE (username = '${name}') `)
//             }else{
//             const counter = greetings.counter();
//              await pool.query(`INSERT INTO greetuser (username, count)
//             VALUES ('${name}', '1')`);
              
               
//             }
//     }catch (err){
//         console.error(err.message);
//       };
//      }


//     async function reset(req, res){
//         await db.clear()
//         res.redirect('/')
//     }

//     return {
//         data, 
//         reset,


//     }
// }