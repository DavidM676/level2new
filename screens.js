class Screens {

    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = document.getElementById("mycanvas");
        this.buttonTest = document.getElementById("buttonTest");
        buttonTest.addEventListener("click",startScreen())
    }

    startScreen() {
        this.canvas.style.backgroundColor = blue;
    }
}