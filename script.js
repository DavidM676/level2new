var i = 0;
var txt = ""
var speed = 50; /* The speed/duration of the effect in milliseconds */

function setTxt(text) {
    this.txt = text
}

function typeWriter(text) {
    setTxt(text)
  if (i < txt.length) {
    document.getElementById("instructions").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, text, speed);
  }
}

