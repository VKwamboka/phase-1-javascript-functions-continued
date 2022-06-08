// code your solution here
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

