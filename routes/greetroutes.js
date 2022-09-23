module.exports = function GreetRoutes(GreetData, Greetings) {

  async function home(req, res, next) {
    try {
      res.render("index", {
        userName: Greetings.getGreet(Greetings.firstName, Greetings.languages),
        language: Greetings.getGreet(),
        counter: Greetings.counter(),
      });
    } catch (err) {
      next(err);
    }
  }

  async function greetUser(req, res, next) {
    try {
      let name = req.body.name;
      let language = req.body.radioButn;
      if (name && language) {
        Greetings.setGreet(name, language);
        await GreetData.storingData(name);
       Greetings.storingNames(name);
      } else {
        req.flash("info", Greetings.setUserValidation(name, language));
      }
      res.redirect("/"); 
   
    } catch (err) {
      next(err);
    }
    
  }

  async function greetedUser(req, res, next) {

    try {
        res.render("greetedNames", {
            nameList: Greetings.listNames(),
          });
      } catch (err) {
        next(err);
      }


  }

  async function greetedUsers(req, res, next) {
    try {
 Greetings.firstName = req.body.name;
  Greetings.languages = req.body.radioButn;
  Greetings.storingNames(Greetings.firstName);
  Greetings.greetedNames();
  res.redirect("/");
      } catch (err) {
        next(err);
      }


  }
  return {
    home,
    greetUser,
    greetedUser,
    greetedUsers,
  };
};
