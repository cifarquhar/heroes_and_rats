var assert = require("assert")
var Task = require("../task")

describe("Task",function(){

var task

beforeEach(function(){
  task = new Task(8, 2, "chocolate")
})

it("task has a difficulty level", function(){
  assert.strictEqual(8, task.getDifficulty())
})

it("task has urgency level", function(){
  assert.strictEqual(2, task.getUrgency())
})















})