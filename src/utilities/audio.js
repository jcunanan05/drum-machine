function playSound(audio) {
  if(audio) {
    //reset audio and play it again
    audio.currentTime = 0;
    audio.play();
  }
}

function soundIsPlaying(audio, callback) {
  //get and verify audio
  if(audio.tagName === 'AUDIO') {
    // add playing event listener
    // and do something with it
    audio.addEventListener('playing', () => { callback(audio) });
  } 
  // else throw error
}

function soundIsEnded(audio, callback) {
  //get and verify audio  
  if(audio.tagName === 'AUDIO') {
    // add ended event listener
    // and do something with it
    audio.addEventListener('ended', () => { callback(audio) });
  }
}

export {
  playSound,
  soundIsPlaying,
  soundIsEnded
};