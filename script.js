window.onload = function() {
var HEAD_RADIUS=120;
var HEAD_SHADOW_RADIUS=122;

var BODY_WIDTH= HEAD_RADIUS*2;
var BODY_HEIGHT=150;

var BODY_SHADOW_WIDTH=HEAD_RADIUS*2+3.2;
var BODY_SHADOW_HEIGHT=152;

var BODY_COLOR=Color.brown;

var EAR_RADIUS=35;
var EAR_SHADOW_RADIUS=37;

var centerX=getWidth()/2;
var centerY=getHeight()/2;

function start(){
    // backGround();
    text();
    backShadow();
    back();
    earShadow();
    headShadow();
    ears();
    ears2();
    ears3();
    head();
    bodyShadow();
    body();
    eyeThingy();

}
function backGround(){
    var background= new Rectangle(392,472);
    background.setColor("#778899");
    background.setPosition(centerX/60,centerY/60);
    add(background);
}

function ears(){
    var leftEar= new Circle(EAR_RADIUS);
    leftEar.setColor("#8B4513");
    leftEar.setPosition(centerX/2,centerY);
    add(leftEar);
    
    var rightEar= new Circle(EAR_RADIUS);
    rightEar.setColor("#8B4513");
    rightEar.setPosition(centerX+HEAD_RADIUS-20,centerY);
    add(rightEar);
}

function ears2(){
    var leftEar= new Circle(EAR_RADIUS-7);
    leftEar.setColor("#A0522D");
    leftEar.setPosition(centerX/2,centerY);
    add(leftEar);
    
    var rightEar= new Circle(EAR_RADIUS-7);
    rightEar.setColor("#A0522D");
    rightEar.setPosition(centerX+HEAD_RADIUS-20,centerY);
    add(rightEar);
}

function ears3(){
    var leftEar= new Circle(EAR_RADIUS-20);
    leftEar.setColor("#CD853F");
    leftEar.setPosition(centerX/2+10,centerY+10);
    add(leftEar);
    
    var rightEar= new Circle(EAR_RADIUS-20);
    rightEar.setColor("#CD853F");
    rightEar.setPosition(centerX+HEAD_RADIUS-30,centerY+10);
    add(rightEar);
}

function earShadow(){
    var leftEar= new Circle(EAR_SHADOW_RADIUS);
    leftEar.setColor(Color.black);
    leftEar.setPosition(centerX/2,centerY);
    add(leftEar);
    
    var rightEar= new Circle(EAR_SHADOW_RADIUS);
    rightEar.setColor(Color.black);
    rightEar.setPosition(centerX+HEAD_RADIUS-20,centerY);
    add(rightEar);
}

function body(){
    var body= new Rectangle(BODY_WIDTH,BODY_HEIGHT);
    body.setColor("#8B4513");
    body.setPosition(centerX/2.5,centerY+100);
    add(body);
}

function bodyShadow(){
    var body= new Rectangle(BODY_SHADOW_WIDTH,BODY_SHADOW_HEIGHT);
    body.setColor(Color.black);
    body.setPosition(centerX/2.55,centerY+100);
    add(body);
}
function head(){
    var head= new Circle(HEAD_RADIUS);
    head.setColor("#8B4513");
    head.setPosition(centerX,centerY+100);
    add(head);
}

function headShadow(){
    var head= new Circle(HEAD_SHADOW_RADIUS);
    head.setColor(Color.black);
    head.setPosition(centerX,centerY+100);
    add(head);
}

function text(){
    var text = new Text("DUNNO MAN");
    text.setFont("");
    text.setColor(Color.black);
    text.setPosition(centerX/50+100,centerY-180);
    add(text);
    
    var text2= new Text("SEEMS KINDA SUS TO ME");
    text2.setFont("");
    text2.setColor(Color.black);
    text2.setPosition(centerX/50+20,centerY-130);
    add(text2);
}

function back(){
    var back = new Rectangle(110,200);
    back.setColor("#8B4513");
    back.setPosition(centerX-HEAD_RADIUS-50,centerY+80);
    add(back);
}

function backShadow(){
    var back = new Rectangle(115,205);
    back.setColor(Color.black);
    back.setPosition(centerX-HEAD_RADIUS-53,centerY+75);
    add(back);
}

function eyeThingy(){
    //shadow for big eye thingy(circle)
    var eyeCircle = new Circle(52);
    eyeCircle.setColor(Color.black);
    eyeCircle.setPosition(centerX*2-95,centerY+105);
    add(eyeCircle);
    
    var eyeCircle = new Circle(50);
    eyeCircle.setColor("#05394c");
    eyeCircle.setPosition(centerX*2-95,centerY+104);
    add(eyeCircle);
    
    //shadow for Big eye thingy(Rectangle)
    var eye = new Rectangle(174,105);
    eye.setColor(Color.black);
    eye.setPosition(centerX/2+38,centerY+EAR_RADIUS+18);
    add(eye);
    
    //big eye
    var eye = new Rectangle(173,100);
    eye.setColor("#05394c");
    eye.setPosition(centerX/2+40,centerY+EAR_RADIUS+20);
    add(eye);
    
    var eye2 = new Rectangle(153,60);
    eye2.setColor("#5F9EA0");
    eye2.setPosition(centerX/2+55,centerY+60);
    add(eye2);
    
    var eye2Circle = new Circle(30);
    eye2Circle.setColor("#5F9EA0");
    eye2Circle.setPosition(centerX*2-90,centerY+90);
    add(eye2Circle);
    
    var eye3=new Rectangle(140,20);
    eye3.setColor(Color.gray);
    eye3.setPosition(centerX-30,centerY+62);
    add(eye3);
    
    var eye3Circle = new Circle(10);
    eye3Circle.setColor(Color.gray);
    eye3Circle.setPosition(centerX+110,centerY+72);
    add(eye3Circle);
}


    if (typeof start === 'function') {
        start();
    }
};