if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoInventorySystem = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoInventorySystem.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoInventorySystem.prototype.constructor = SAPB1.BoInventorySystem;
SAPB1.BoInventorySystem.bis_SNB = new SAPB1.BoInventorySystem('bis_SNB', 'bis_SNB');
SAPB1.BoInventorySystem.bis_MovingAverage = new SAPB1.BoInventorySystem('bis_MovingAverage', 'bis_MovingAverage');
SAPB1.BoInventorySystem.bis_FIFO = new SAPB1.BoInventorySystem('bis_FIFO', 'bis_FIFO');
SAPB1.BoInventorySystem.bis_Standard = new SAPB1.BoInventorySystem('bis_Standard', 'bis_Standard');

module.exports = SAPB1.BoInventorySystem;
