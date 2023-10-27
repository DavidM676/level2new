

var keyhandler=new KeyHandler();
keyhandler.move();



function initialize() {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    const sprite = new Image(100,200)
    var test = new Screens(ctx);
    sprite.src = "images/sprite.png"
    sprite.onload = function() {
        ctx.drawImage(sprite, 10,10, 100, 100)
    }
}


