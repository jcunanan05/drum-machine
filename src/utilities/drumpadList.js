const ASSET_URL = "sounds";

const drumpads = {
  keyList: [],

  addKey: function(charKey, fileName) {
    this.keyList.push({
      "key": charKey,
      "audioName": `${fileName}`,
      "audioSource": `${ASSET_URL}/${fileName}`
    });
  },

  getAllKeys: function() {
    return this.keyList;
  }
};

function getAudioSource (buttonKey) {
  const audioName = drumpads.getAllKeys()
    .filter(drumpad => (drumpad.key.toLowerCase() === buttonKey.toLowerCase())
  )[0];

  if(!audioName) return ''; //return empty string if the array is empty

  return removeFileExtension(audioName['audioName']);
}

function removeFileExtension(audioName) {
  return audioName ? audioName.replace(/\.mp3/, '') : '';
}

drumpads.addKey('Q', 'bubbles.mp3');
drumpads.addKey('W', 'clay.mp3');
drumpads.addKey('E', 'confetti.mp3');
drumpads.addKey('A', 'dotted-spiral.mp3');
drumpads.addKey('S', 'flash-1.mp3');
drumpads.addKey('D', 'glimmer.mp3');
drumpads.addKey('Z', 'moon.mp3');
drumpads.addKey('X', 'pinwheel.mp3');
drumpads.addKey('C', 'piston-1.mp3');


export { getAudioSource, removeFileExtension };
export default drumpads.getAllKeys();