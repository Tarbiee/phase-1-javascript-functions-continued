// code your solution here
function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`;
}
saturdayFun();
saturdayFun('bathe my dog');

const mondayWork = function (stringg ='go to the office'){
    return `This Monday, I will ${stringg}.`;

}
mondayWork();
mondayWork('work from home');

function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  const asterisk = wrapAdjective('*');
  const doublePipe = wrapAdjective('||');
  console.log(asterisk('a dedicated programmer')); 
  console.log(doublePipe('a dedicated programmer')); 


