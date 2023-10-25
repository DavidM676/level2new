function initialize() {
    const canvas = document.selectElementbyId("mycanvas");
    const ctx = canvas.getContext("2d");
    const testImage = new Image(100,200)
    testImage.src = "images/bat.png"
    canvas.body.appendChild(testImage)
    document.body.appendChild(testImage);
    ctx.drawImage(testImage)
}