module.exports = function Greetings() {
  let nameMapping = {};
 let firstName ="";
 let languages ="";


  function setUserValidation(name, language) {
    let message ="";
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


  let greetMessage = "";
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

  function listNames(){
    let names = Object.keys(nameMapping);
    return names;
  }
  function counter() {
    let names = Object.keys(nameMapping);
    return names.length;
  
  }
function greetedThisTimes(name){
  let names = Object.keys(nameMapping);
  var output = Object.values(names.reduce((nameMapping, { name }) => {
    if (nameMapping[name] === undefined)
       nameMapping[name] = { name: names, occurrences: 1 };
    else
       nameMapping[name].occurrences++;
    return nameMapping;
 }, {}));
 console.log(output);
}
function counterUser(name){
return nameMapping[name];
}

function reset(){
 
nameMapping = {};
}


  return {
 greetedNames,
    setGreet,
    getGreet,
    setUserValidation,
    // getInput,
    // errorMessage,
    listNames,
    reset,
    storingNames,
firstName,
languages,
    counter,
    greetedThisTimes,
    counterUser,
  }
};

