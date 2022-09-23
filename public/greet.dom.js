// let theDom = Greetings();

// const buttonElem = document.querySelector("button");
// const inputElem = document.querySelector(".inputname");
// const paragraphElem = document.querySelector(".response");
// const theCounterElem = document.querySelector(".greeted_count");
// const list = document.querySelector(".list_names");



// if(localStorage["names"]){
//   let theArray = JSON.parse(localStorage.getItem("names"))
// }




// buttonElem.addEventListener("click", function (e) {
//   e.preventDefault();
// const myArr = theDom.getNames()
// const myJSON = JSON.stringify(myArr);
// localStorage.setItem("names", myJSON);

//   const radioButtonElem = document.querySelector(
//     'input[name="radioButn"]:checked'
//   ).value;
 

//   let userValidation = theDom.setUserValidation(inputElem.value);
//   if(!userValidation){
//     paragraphElem.innerHTML = "not compitable";
//     return 
//   }
//   if(userValidation){
//     if (radioButtonElem === "Xhosa") {
//       paragraphElem.innerHTML = theDom.Xhosa();
//       // allStorage();
     
//     }
    
  
//     if (radioButtonElem === "English") {
//       paragraphElem.innerHTML = theDom.English();
//       // allStorage();
     
//     }
  
//     if (radioButtonElem === "Sotho") {
//       paragraphElem.innerHTML = theDom.Sotho();
//       // allStorage();
 
//     }
//     theCounterElem.innerHTML = myArr.length;
//   }  
 
//   inputElem.value  = "";
//  let stringArray = JSON.stringify(theDom.getNames())
//   localStorage.setItem("names", stringArray );
 
// });

// const resetElem = document.querySelector(".reset");

// resetElem.addEventListener("click", function () {
//   localStorageNames = localStorage.clear();
//   list.innerHTML = "";
//   theCounterElem.innerHTML = 0;
//   paragraphElem.innerHTML = " ";
//   alert("greeted names have been reset")
// });
