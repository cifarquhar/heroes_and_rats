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

it("has health",function(){
  assert.strictEqual(100,hero.getHealth())
})

it("has a favourite food",function(){
  assert.strictEqual("Cheese",hero.getFavFood())
})









})