var i = 0;
var txt = "You have been kidnapped and put in some gloomy basement. Not knowing where you are, you must look for clues and uncover the mystery to this house. Will you be able to escape?"
var speed = 50; /* The speed/duration of the effect in milliseconds */



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("instructions").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

