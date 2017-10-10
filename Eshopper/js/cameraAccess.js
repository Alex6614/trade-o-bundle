 var video = document.querySelector("#videoElement");
 var overlayDetails = document.querySelector(".overlayDetails");
 var overlay = document.querySelector(".overlay");

 var MediaStream;

function showCamera(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
  overlay.style = "visibility:visible";
  if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, handleVideo, videoError);
  }
} 

function handleVideo(stream) {
  video.src = window.URL.createObjectURL(stream);
  MediaStream = stream.getTracks()[0];
  
  setTimeout(function(){ 
    MediaStream.stop();
    video.style = "visibility:hidden";
    overlayDetails.style = "visibility:visible";
  }, 5000);
}
 
function videoError(e) {
    // do something
}