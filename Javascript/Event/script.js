

// const handleClick = () => {
//     const heading = document.getElementById("heading");
//     heading.textContent = "Button Clicked!";
//     heading.style.color = "blue";
// }

// const handleDoubleClick = () => {
//     const heading = document.getElementById("heading");
//     heading.textContent = "Button Double Clicked!";
//     heading.style.color = "red";
// }

const button1 = document.getElementById("btn1");

button1.addEventListener("click", () => {
    const body = document.body;
    body.style.backgroundColor = "black";
    body.stylecolor = "white";
}
)

button1.addEventListener("dblclick", () => {
    const body = document.body;
    body.style.backgroundColor = "white";
    body.style.color = "black";
});
