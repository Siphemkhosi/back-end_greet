module.exports = function Greetings() {
  let nameMapping = {};
 let firstName ="";
 let languages ="";
  // let error = "";
  function setUserValidation(name, language) {
    let message ="";
    // let userVAlidation = ;

    if (name === "" && !language ) {
    message = "Please enter a name and  select language";
    } else if (!(/^[A-Za-z]+$/.test(name) )) {
      message = "Write name in the correct format";
    } else if (!language) {
      message = "Please select language";
    } else if (name === "") {
      message = "Please enter name";
    }
  
    return message;
  }

  // function getInput(){
  //   return firstName;
  //   }

  let greetMessage = "";
  // let validation = setUserValidation();

  function setGreet(name, language) {
    if (language === "xhosa") {
      greetMessage = `molo ${name}`;
    }
    if (language === "english") {
      greetMessage = `hello ${name}`;
    }
    if (language === "sisotho") {
      greetMessage = `dumela ${name}`;
    }
  }

  function storingNames(name) {
    if (name) {
      if (nameMapping[name] === undefined) {
        nameMapping[name] = 1;
      } else {
        nameMapping[name]++;
      }
    }
  }

  function getGreet() {
    return greetMessage;
  }

  function greetedNames() {
    return nameMapping;
  }

  function counter() {
    let names = Object.keys(nameMapping);
    return names.length;
  }

  return {
 greetedNames,
    setGreet,
    getGreet,
    setUserValidation,
    // getInput,
    // errorMessage,
    storingNames,
firstName,
languages,
    counter,
  };
};
