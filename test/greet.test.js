const assert = require('assert');




const Greetings = require('../greet');

describe("The Greetings factory function", function () {


    it(' it should return an error message if a name with non-aplhabetic characters is entered', function () {
        let greetings = Greetings();
        assert.equal("Write name in the correct format", greetings.setUserValidation("Siphe7", "english"))

    });


    it('it should return an error message if there is no language selected', function () {

        let greetings = Greetings();
        assert.equal("Please select language", greetings.setUserValidation("Nela", null))

    });

    it('it should return an error message there is no name entered and language selected', function () {

        let greetings = Greetings();
        assert.equal("Please enter a name and  select language", greetings.setUserValidation("",))

    });

    


    it('it should count the greeted names', function () {

        let greetings = Greetings();
        greetings.storingNames(["siphe"])
        assert.equal(1, greetings.counter())
        greetings.storingNames(["siphe", "nela"])
        assert.equal(2, greetings.counter())
     
    });

    it('it should greet the input name in the specified language', function () {

        let greetings = Greetings();
       greetings.setGreet("Thabo", "xhosa")
       assert.equal("molo Thabo", greetings.getGreet("Thabo", "xhosa "))
        greetings.setGreet("siphe", "english")
        assert.equal("hello siphe", greetings.getGreet("siphe", "english "))
       greetings.setGreet("Grace", "sisotho")
       assert.equal("dumela Grace", greetings.getGreet("Grace", "sisotho "))
       

    });

});







