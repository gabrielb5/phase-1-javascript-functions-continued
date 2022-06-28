// code your solution here
 function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`
 }

 function mondayWork(event = "go to the office") {
    return `This Monday, I will ${event}.`
 }

const wrapAdjective = function(style = "*") {
 return function(adjective = "special")  {
 return `You are ${style}${adjective}${style}!`} 
 } 
 