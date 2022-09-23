
module.exports = function GreetData(db) {

async function storingData(name){
    try {
        const user = await db.manyOrNone(
          `SELECT * FROM greetuser WHERE username = $1`,[name] 
        );
        console.log(user);
        if (user.length > 0) {
          const newCounter = parseInt(user[0].count) + 1;
          await db.none(
            `UPDATE greetuser SET count = $1 WHERE username = $2 `, [newCounter, name]
          );
        } else{
        
          await db.none(`INSERT INTO greetuser (username, count)
     VALUES ($1, $2)`, [name, 1] )
         };
        
      } catch (err) {
        console.error(err.message);
      }
}

return{
    storingData,
}
}