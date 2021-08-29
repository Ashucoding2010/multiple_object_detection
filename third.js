status=""
objects=[]//since answers are going to be more than one so we are using array


img = ""
function preload(){

img = loadImage("img3.jpg")

}

function setup(){

Canvas = createCanvas(580,450)
Canvas.position(450,190)
//COCOSSD Model starts here
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML= "Model Loaded !!!"
}

function modelloaded() {
console.log("Model Loaded Sucessfully")
status=true
objectDetector.detect(img,gotResult)

}

function gotResult(error,results){

if(error){

    console.log(error)
}
else{

console.log(results)
objects = results
}
}

function draw(){

    image(img,0,0,580,450)
    if(status != ""){

for(i=0;i<objects.length;i++){

    document.getElementById("status").innerHTML="status:Object detected"
    obj_name=objects[i].label
    per=objects[i].confidence
    perR=floor(per*100)
    height=objects[i].height
    width=objects[i].width
    pose_x=objects[i].x
    pose_y=objects[i].y
    fill("red")
    textSize(20)
    stroke("yellow")
    text(obj_name+" "+perR+"%",pose_x+20,pose_y+20)
    strokeWeight(4)
    noFill()
    rect(pose_x,pose_y,width,height)
}

    }
    }

    function home(){

    window.location="index.html"

    }
    






