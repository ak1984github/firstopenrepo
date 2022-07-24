
let sum = 0;
function showMessage(a,b) {
   sum = a+b;
   console.log(sum);
   return a+b;

  }
module.exports.showMessage = {showMessage};