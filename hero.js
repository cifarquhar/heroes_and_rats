var Hero = function(name,health,favFood){
  this.name = name
  this.health = health
  this.favFood = favFood
  this.tasks = []
}

Hero.prototype = {
  getName: function(){
    return this.name
  },
  getHealth: function(){
    return this.health
  },
  getFavFood: function(){
    return this.favFood
  },
  sayName: function(){
    return "My name is " + this.getName()
  }
}



module.exports = Hero