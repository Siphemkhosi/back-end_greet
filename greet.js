module.exports = function Greetings() {
  let nameMapping = {};
  
  

  // let error = "";
  function setUserValidation(name, language) {
    let firstName = "";
    // let userVAlidation = /^[A-Za-z]+$/.test(name);
    if (!(/^[A-Za-z]+$/.test(name))) {
  
      return "name  should contain ony letters"
    } 

     if( language !== "" || name === "") {
     
      return "Please enter name";
     }else if(name === "" || language === "") {
     
      return 'Please enter a name and  select language';
    }
    else if (name !== "" || language === "") {
      console.log("no name no language");
      return "Please select language";
    }
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
    if(name){
      if(nameMapping[name] === undefined) {
        nameMapping[name] = 1;
      } else {
        nameMapping[name]++;
      }
    }
   
  }

  function getGreet() {
    return greetMessage;
  }

  function actions() {
    return names;
  }

  function counter() {
    let names = Object.keys(nameMapping);
    return names.length;
  }

  return {
    actions,
    setGreet,
    getGreet,
    setUserValidation,
    // getInput,
    // errorMessage,
    storingNames,

    counter,
  };
};
