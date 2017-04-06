var assert = require("assert")
var Food = require("../food")

describe("food",function(){

  var food

  beforeEach(function(){
    food = new Food("Cheese",10)
  })

  it("has a name",function(){
    assert.strictEqual("Cheese",food.getName())
  })







})