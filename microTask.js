function display(data){console.log(data)}
function printHello(){console.log("hello")};
function blockFor300ms(){}

setTimeout(printHello,0);

const futureData = fetch("https://jsonplaceholder.typicode.com/todos/1")
futureData.then(display)

blockFor300ms();
console.log("Me First");
