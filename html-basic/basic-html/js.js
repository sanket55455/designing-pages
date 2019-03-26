function init() {
    var h1Tag = document.getElementsByTagName('h1')
    h1Tag[0].onclick = changeColor;

}

function changeColor() {
    this.innerHTML = "Click Again";
    var randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log()
    this.style.color = randomcolor;
}
onload = init;

function myImg() {
    var img = document.getElementById("image");
    var visibleImg = img.style.visibility != "visible";
    img.style.visibility = visibleImg ? "visible" : "hidden";


}