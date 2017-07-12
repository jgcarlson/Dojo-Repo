let myNum:number = 5;
let myString:string = 'Hello Universe';
let myArr:number[] = [1,2,3,4];
let myObj:any = {name: 'Bill'};
let anythingVariable:any = 'Hey';
anythingVariable = 25;
let arrayOne:boolean[] = [true, false, true, true];
let arrayTwo:any[] = [1,'abc',true,2];
myObj = {x:5, y:10};
let MyNode = (function() {
  function MyNode(val:number) {
    this.val = 0;
    this.val = val;
  }
  MyNode.prototype.doSomething = function() {
    this._priv = 10;
  }
  return MyNode;
})();
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
  console.log('Hello World');
  return;
}
function sendingErrors() {
  throw new Error('Error message');
}
