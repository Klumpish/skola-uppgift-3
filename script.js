
// getElementById lets me get the element with that id
const button = document.getElementById("button");
const h1 = document.getElementById("h1");

// function from onclick in button
function change(){
    // .innerText lets me change the text inside the <h1> tag.
    h1.innerText = "Goodbye World"
}