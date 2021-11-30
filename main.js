function setup(){
    canvas=createCanvas(350,350);
    background("white");
    canvas.center();
}
function preload(){
    coin=ml5.imageClassifier("DoodleNet");
}
function clearcanvas(){
    background("white");
}