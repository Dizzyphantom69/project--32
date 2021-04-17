const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
     console.log(responseJSON);
    
    
     // write code slice the datetime
     var datetime = responseJSON.datetime;
     var hour = datetime.slice(11,13);



    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=6){
        bg = "sunrise1.png";
    }else if(hour>=6 && hour<=8){
        bg = "sunrise2.png";
    }else if(hour>=8 && hour<=10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }else if(hour>=12 && hour<=14){
        bg = "sunrise4.png";
    }else if(hour>=14 && hour<=16){
        bg = "sunrise4.png";
    }else if(hour>=16 && hour<=18){
        bg = "sunrise5.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
