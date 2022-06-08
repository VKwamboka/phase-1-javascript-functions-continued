// code your solution here

// let wrapAdjective = function(style="*") {
//     return function(word="special") {
//       return `You are ${style}${word}${style}!`
//     }
//   }

const saturdayFun = function (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  };
  
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
   };
//    mondayWork();
const wrapAdjective = function (special = "*") {
    return function (adjective = amazing){
        return `You are ${special}${adjective}${special}!`
    }
   };

//    function wrapAdjective (greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   }