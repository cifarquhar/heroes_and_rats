var Task = function(difficulty, urgency, reward){
this.difficulty = difficulty
this.urgency = urgency
this.reward = reward
this.completed = false
}

Task.prototype = {
getDifficulty: function(){
return this.difficulty
},

// getUrgency: function(){

// },

// getReward: function(){

// },

// isComplete: function(){

// }



}


module.exports = Task;