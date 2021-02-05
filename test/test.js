const { expect } = require('chai');
const chai = require('chai')
const assert = require ('chai').assert;

//Cool import - destructuring
const { nikki, age, isCool, object, add, array, multiply} = require('../index') 

//describe what he test is

//how do I know what to test?
//what to look for when testing?




describe('nikki variable' , function(){
    it('should return a string as a type', function(){
        //typeOf will let me know what datatype I am testing
        assert.typeOf(nikki, 'string')
    })
    it('should return Nikki as a result', function(){
        //check to see what Nikki is equal to
        assert.equal(nikki, 'Nikki')
    })
    it('should have length of 4', function(){
        //check the length
        assert.lengthOf (nikki, 5)
    })
})

describe('age variable' ,function(){
    it ('should return a number as a type', function(){
        assert.typeOf(age, 'number')
    })
    it('should return 31 as a result', function() {
        assert.equal(31,31)
    })
})
describe('isCool variable' ,function(){
    it ('should return a Boolean', function(){
        assert.typeOf(isCool, "Boolean")
    })
    it('should return true', function() {
        assert.equal(isCool, true)
    })
})
describe('object variable' ,function(){
    it ('should return an object', function(){
        assert.typeOf(object, "object")
    })
    it('should equal SEI-111', function() {
        assert.equal(object.class, 'SEI-111' )
    })
})

describe('add function', function(){
    //when i have a function, what should i test?
    //1.make sure it is a function
    //2.make sure that it gives the right output
    //3. whatever the output is, it is the right datatype

    it('should be a function', function(){
        expect(add).to.be.a('function')
    })
    it('should return 4', function(){
        let myFavoriteNumber = add(1, 8);
        expect(add(2,2)).to.equal(4)
        expect (myFavoriteNumber).to.equal(9)
    })
    it('should have number type as output', function(){
        expect(add(2,2)).to.be.a('number')
    })
})

describe ('Array', function(){
    it('should be an array', function(){
        expect(array).to.be.a('array');
    })
    it('should have 4 different datatypes', function(){
        //set up a variable that will give me back a result
        let result = 0;
        //iterate through the array and check each datatype
        for (let i=0; i <array.length; i++){
            let ele = array[i]
            if(typeof ele === 'boolean'){
                result += 1;
            }else if (typeof ele === 'string'){
                result += 1
            }else if (typeof ele === 'number'){
                result += 1
            }else if (typeof ele === 'object'){
                result += 1
            }
        }
        //do my official chek
        expect(result).to.equal(5)
    })
})

//start TDD (Test Driven Development)

//write a function multiply return a number that's multiplied
//1. write the test
//2. go to the file where we want the actual code
//3. IMPORTANT: write the code in a way that passes the test
//4. Export that function
//5. import that function into my test module (file)
//6. Run that TEST (mocha) (npm run test)

describe('Multiply function', function(){
    it('should be a function', function(){
        assert.typeOf(multiply,'function')
    })
    it('should return 9', function(){
        expect(multiply(3,3)).to.equal(9)
        assert.equal(multiply(-1,3), -3)
    })
    it('should have output with a datatype of number', function(){
        expect(multiply(2,3)).to.be.a('number');
    })
})





