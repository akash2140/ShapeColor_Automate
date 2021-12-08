colorButton=document.getElementById("color");
outerdiv=document.getElementById("outer");
var cur = "inner";
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];
var color = ["red", "orange", "green", "maroon", "pink", "violet"];

colorButton.addEventListener('click',function() 
{
    var randomColor=color[Math.floor(Math.random() *  color.length)];
    outerdiv.style.backgroundColor=randomColor;
});



document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}





