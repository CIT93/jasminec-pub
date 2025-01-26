console.log("hello from inside the main.js file");

//let myVar;

const myVar = "string";
const myVarType = typeof(myVar);

console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {
    if(myVarType === "number") {
        console.log(`will this one run? 24`)
    } else {
        console.log(`will this one run?251`)
    }
}

runNow();
runNow();
