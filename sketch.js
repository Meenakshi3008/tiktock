var hr, mn, sc, Bsc;
var hrAngle, mnAngle, scAngle, BscAngle; 
var Sblue, Sgreen, Syellow;
var Mblue, Mred, Myellow;
var Hgreen, Hred, Hyellow;
var sr=255, sg=0, sb=0; 
var mr=0, mg=255, mb=0;
var hr=0, hg=0, hb=255;

function setup(){
    createCanvas(400, 400); 

    //To use angle in Degrees
    angleMode(DEGREES);   

}

function draw(){
    background(0);

    //Texts
    /*textFont("Arial");
	textSize(60);
	textAlign(CENTER);
	fill("yellow");
    text("Seconds", displayWidth/2 + 150, displayHeight/2 );
    */

    //Translation and rotation 
    translate(200, 200);
    rotate(-90);


    //creating buttons to change second color 
    Sblue = createButton("Blue");
    Sblue.position(displayWidth/2 + 150, displayHeight/2 + 30);

    Sgreen = createButton("Green");
    Sgreen.position(displayWidth/2 + 145, displayHeight/2 + 70);

    Syellow = createButton("Yellow");
    Syellow.position(displayWidth/2 + 145, displayHeight/2 + 110);


    //creating buttons to change minute color 
    Mblue = createButton("Blue");
    Mblue.position(displayWidth/2 - 10, displayHeight/2 + 30);

    Mred = createButton("Red");
    Mred.position(displayWidth/2 - 10, displayHeight/2 + 70);

    Myellow = createButton("Yellow");
    Myellow.position(displayWidth/2 - 15, displayHeight/2 + 110);
    

    //creating buttons to change hour color
    Hgreen = createButton("Green");
    Hgreen.position(displayWidth/2 - 200, displayHeight/2 + 30);

    Hred = createButton("Red");
    Hred.position(displayWidth/2 - 195, displayHeight/2 + 70);

    Hyellow = createButton("Yellow");
    Hyellow.position(displayWidth/2 - 200, displayHeight/2 + 110);
    

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();


    //To create ab iterative rotation
    hrAngle = map(hr % 12, 0, 12, 0, 360);
    mnAngle = map(mn,0, 60, 0, 360);
    scAngle = map(sc, 0, 60, 0, 360);

    //drawing seconds hand
    push();
    rotate(scAngle);
    stroke(sr,sg,sb);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

 
    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(mr, mg, mb);
    strokeWeight(7);
    line(0, 0, 75, 0);
    pop();


    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(hr, hg, hb);
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop();

    stroke(255, 0, 255);
    point(0, 0);


    //drawing the arcs
    strokeWeight(10);
    noFill();


    //Seconds
    stroke(sr,sg,sb);
    arc(0, 0, 300, 300, 0, scAngle);


    //Minutes
    stroke(mr,mg,mb);
    arc(0, 0, 280, 280, 0, mnAngle);


    //Hour
    stroke(hr,hg,hb);
    arc(0, 0, 260, 260, 0, hrAngle);


    //using the second buttons
    Sblue.mousePressed(()=>{
    sr=0,sg=0,sb=255
    });

    Sgreen.mousePressed(()=>{
    sr=0, sg=255, sb=0
    });
    
    Syellow.mousePressed(()=>{
    sr=246, sg=246, sb=3
    });


    //using the minute buttons
    Mblue.mousePressed(()=>{
    mr=0,mg=0,mb=255
    });
    
    Mred.mousePressed(()=>{
    mr=255, mg=0, mb=0
    });
        
    Myellow.mousePressed(()=>{
    mr=246, mg=246, mb=3
    });


    //using the hour buttons
    Hgreen.mousePressed(()=>{
    hr=0, hg=255, hb=0
    });
        
    Hred.mousePressed(()=>{
        hr=255, hg=0, hb=0
    });
            
    Hyellow.mousePressed(()=>{
    hr=246, hg=246, hb=3
    });

}