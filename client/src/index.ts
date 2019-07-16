//navigator.getUserMedia=navigator.getUserMedia //|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


// Use constraint to ask for video and/or audio
const constraints={
  audio:true,
  video:true
}

const video = document.querySelector('video');

// Callback to be called in case of success...

function successCallback(stream:any){
  //window.stream=stream 
  console.log(stream);
  // Note: make the returned stream available to console for inspection
  if(window.URL){
    video.srcObject=stream;
  }else{
    video
  }
   
  video.play();
}

function errorCallback(error:any){
  console.log('navigator.getUserMedia error:',error)
}

navigator.getUserMedia(constraints,successCallback,errorCallback);
