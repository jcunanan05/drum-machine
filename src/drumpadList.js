const ASSET_URL = "sounds";

const drumpads = {
  keyList: [],

  addKey: function(charKey, fileName) {
    this.keyList.push({
      "key": charKey,
      "audioSource": `${ASSET_URL}/${fileName}`
    });
  },

  getAllKeys: function() {
    return this.keyList;
  }
};

drumpads.addKey('Q', 'bubbles.mp3');
drumpads.addKey('W', 'clay.mp3');
drumpads.addKey('E', 'confetti.mp3');
drumpads.addKey('A', 'dotted-spiral.mp3');
drumpads.addKey('S', 'flash-1.mp3');
drumpads.addKey('D', 'glimmer.mp3');
drumpads.addKey('Z', 'moon.mp3');
drumpads.addKey('X', 'pinwheel.mp3');
drumpads.addKey('C', 'piston-1.mp3');


export default drumpads.getAllKeys();