// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.

function sumTo(n){
  if (n != 1 ){
    return n + sumTo(n - 1);
  } else {
    return n;
  }
}

/*
sumTo(3) == 3 + sumTo(2); // 6
sumTo(2) == 2 + sumTo(1); // 3
sumTo(1) == 1;
*/

/* Подсказка: обратите внимание, что n! можно записать как n * (n-1)!. Например: 3! = 3*2! = 3*2*1! = 6
3! = 3 * 2 * 1 = 6
*/
function getFactorial(n){
  if (n == 1) return n;
  return n * getFactorial(n-1);
}

var num = 5;

/*
getFactorial(3) == 3 * getFactorial(2);
getFactorial(2) == 2 * getFactorial(1);
getFactorial(1) == 1;
*/

/* Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих. 

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
*/

function getFibonacciNumber(n){
 // debugger
  if ( -1 == n || n == 1 || n == 2 ) return 1;
  if ( n == 0 ) return 0;
  if (n > 2){
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
  }
  return getFibonacciNumber(n + 2) - getFibonacciNumber(n + 1);
}

/* 
8 число = (8) + (5 + 8) = 21
7 число = (5) + (3 + 5) = 13
6 число = (3) + (2 + 3) = 8
5 число = (2) + (1 + 2) = 5
4 число = (1) + (1 + 1) = 3
3 число = (1) + (1) = 2
2 число = (1)
*/

var app = new Vue({
  el: '#app',
  data: {
    message: '',
    title: 'Recursion train'
  },
  methods: {
    //changeTitle: function(){
    //  this.title += ' and Vue.js'
    //},
    clearResult: function(){
      this.message = '';
    },
    showFibonacciNumber3: function(){
      this.message = 'getFibonacciNumber(3) = ' + getFibonacciNumber(3);
      //changeTitle();
    },
    showFibonacciNumberMinus8: function(){
      this.message = 'getFibonacciNumber(-8) = ' + getFibonacciNumber(-8);
      //changeTitle();
    },
    showGetSum: function(){
      this.message = 'sumTo(3) = ' + sumTo(3);
      //changeTitle();
    },
    showGetFactorialFive: function(){
      this.message = 'Factorial by ' + num + ' is ' + getFactorial(num);
    }  
  }
})