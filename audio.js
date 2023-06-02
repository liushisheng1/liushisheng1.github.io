
  var div = document.getElementById("test");
  var audio = document.getElementsByTagName("audio")[0];
  div.onmouseenter = function () {
  audio.src = "./石材切割声 纯音频.MP3";
  audio.play();
  };
  div.onmouseleave = function () {
  audio.pause();
  };