var canvas=new fabric.Canvas("myCanvas");

p_x=10
p_y=10

b_width=30
b_height=30

var p_o="";
var b_o="";

//b=block p=player

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        p_o=Img;

        p_o.scaleToWidth(150);
        p_o.scaleToHeight(140);
        p_o.set({
            top:p_y,
            left:p_x
        });
        canvas.add(p_o);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        b_o=Img;

        b_o.scaleToWidth(b_width);
        b_o.scaleToHeight(b_height);
        b_o.set({
            top:p_y,
            left:p_x
        });
        canvas.add(b_o);

    });
}
window.addEventListener("keydown", My_keydown);
function My_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=="80"){
        console.log("p and shift are pressed together increasing width and height by 10");
        b_width = b_width+10;
        b_height=b_height+10;
        document.getElementById("current_width").innerHTML=b_width;
        document.getElementById("current_height").innerHTML=b_height;

    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("m and shift are pressed together increasing width and height by 10");
        b_width = b_width-10;
        b_height=b_height-10;
        document.getElementById("current_width").innerHTML=b_width;
        document.getElementById("current_height").innerHTML=b_height;

    }

    if(keypressed=="38"){
        up();
        console.log("up");
    }
    
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    
    if(keypressed=="39"){
        right();
        console.log("right");
    }
    
    if(keypressed=="40"){
        down();
        console.log("down");
    }

    
    if(keypressed=="67"){
        new_image("cloud.jpg");
        console.log("c");
    }
    if(keypressed=="68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keypressed=="71"){
        new_image("ground.png");
        console.log("g");
    }
    if(keypressed=="76"){
        new_image("light_green.png");
        console.log("l");
    }
    if(keypressed=="82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keypressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keypressed=="85"){
        new_image("unique.png");
        console.log("u");
    }
    if(keypressed=="87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keypressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
}
function up(){
    if(p_y>=0){
        p_y=p_y - b_height;
        console.log("b_height = "+b_height);
        console.log("when up arrow key is pressed, x = "+p_x+",y = "+p_y);
        canvas.remove(p_o);
        player_update();

    }
}
function down(){
    if(p_y<=550){
        p_y=p_y + b_height;
        console.log("b_height = "+b_height);
        console.log("when down arrow key is pressed, x = "+p_x+",y = "+p_y);
        canvas.remove(p_o);
        player_update();
        
    }
}
function left(){
    if(p_x>=0){
        p_x=p_x - b_height;
        console.log("b_height = "+b_height);
        console.log("when left arrow key is pressed, x = "+p_x+",y = "+p_y);
        canvas.remove(p_o);
        player_update();
        
    }
}
function right(){
    if(p_x<=930){
        p_x=p_x + b_height;
        console.log("b_height = "+b_height);
        console.log("when right arrow key is pressed, x = "+p_x+",y = "+p_y);
        canvas.remove(p_o);
        player_update();
        
    }
}