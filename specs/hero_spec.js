var assert = require("assert")
var Hero = require("../hero")

describe('Hero',function(){

var hero

beforeEach(function(){
  hero = new Hero("Mr Hero",100,"Cheese")
})

it("has a name",function(){
  assert.strictEqual("Mr Hero",hero.getName())
})







})