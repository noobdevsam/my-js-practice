// Using innerHTML
document.getElementById("demo").innerHTML = "Hello JavaScript! changed text";

document.getElementById("change-to-h3").innerHTML = "<h3>This is a heading</h3>";

document.getElementById("demo2").innerText = "This is a paragraph";

// Using document.write()
document.write("Hello World!\n");
document.write((5 + 6).toString());

// Using window.alert()
// Specifying the [window] object is optional
window.alert("Hello World!");

// Using console.log()
console.log("Hello World!");

// Using function
// Accessing a function without () returns the function and not the function result
function myFunction(a, b) {
    return a * b;
}

// Using function with parameters
document.getElementById("demo3").innerText = "4 * 3 = " + myFunction(4, 3);