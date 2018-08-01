const drumpads = {
  keyList: [],

  addKey: function(charKey) {
    this.keyList.push({
      "key": charKey
    });
  },

  getAllKeys: function() {
    return this.keyList;
  }
};

drumpads.addKey('Q');
drumpads.addKey('W');
drumpads.addKey('E');
drumpads.addKey('A');
drumpads.addKey('S');
drumpads.addKey('D');
drumpads.addKey('Z');
drumpads.addKey('X');
drumpads.addKey('C');


export default drumpads.getAllKeys();