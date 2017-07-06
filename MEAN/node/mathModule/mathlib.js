module.exports = function (){
  return {
    add: function(num1, num2) {
      console.log('The sum is', num1 + num2);
    },
    multiply: function(num1, num2) {
      console.log('The product is', num1 * num2);
    },
    square: function(num) {
      console.log('The square of', num, 'is', num * num);
    },
    random: function(num1, num2) {
      if (num1 > num2) {
        var greater = num1;
        var lesser = num2;
      } else {
        var greater = num2;
        var lesser = num1
      }
      let range = greater - lesser;
      let random = Math.floor(Math.random() * (range + 1));
      console.log('The random number is', lesser + random);
    }
  }
};
