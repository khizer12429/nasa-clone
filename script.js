const clicks = document.getElementById("flex");
const downs = document.getElementById("drop");
const moves = document.getElementById("move");
const click = document.getElementById("sdrop");
const edown = document.querySelector(".New-Events-drop")
const lefts = document.querySelector(".left")

clicks.addEventListener("mouseenter", () => {
    downs.style.maxHeight = "30vw";
    downs.style.opacity = "1"; 
    moves.classList.toggle('rotated');
    // downs.style.display="block";
});

downs.addEventListener("mouseleave", () => {
    downs.style.maxheight = "0";
    downs.style.opacity = "0";
    moves.classList.toggle('rotated');
});
lefts.addEventListener("mouseleave", () => {
    downs.style.maxheight = "0";
    downs.style.opacity = "0";
    moves.classList.toggle('rotated');
});
edown.addEventListener("mouseenter", () => {
    click.style.maxHeight = "30vw";
    click.style.opacity = "1"; 
    moves.classList.toggle('rotated');
});
click.addEventListener("mouseleave", () => {
    click.style.maxheight = "0";
    click.style.opacity = "0";
    moves.classList.toggle('rotated');
});
