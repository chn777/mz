if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ThreatLevelEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ThreatLevelEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ThreatLevelEnum.prototype.constructor = SAPB1.ThreatLevelEnum;
SAPB1.ThreatLevelEnum.tlMedium = new SAPB1.ThreatLevelEnum('tlMedium', 'tlMedium');
SAPB1.ThreatLevelEnum.tlLow = new SAPB1.ThreatLevelEnum('tlLow', 'tlLow');
SAPB1.ThreatLevelEnum.tlHigh = new SAPB1.ThreatLevelEnum('tlHigh', 'tlHigh');

module.exports = SAPB1.ThreatLevelEnum;
