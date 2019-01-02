if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoResponseUnit = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoResponseUnit.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoResponseUnit.prototype.constructor = SAPB1.BoResponseUnit;
SAPB1.BoResponseUnit.boru_Day = new SAPB1.BoResponseUnit('boru_Day', 'boru_Day');
SAPB1.BoResponseUnit.boru_Hour = new SAPB1.BoResponseUnit('boru_Hour', 'boru_Hour');

module.exports = SAPB1.BoResponseUnit;
