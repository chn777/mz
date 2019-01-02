if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTimeTemplate = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTimeTemplate.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTimeTemplate.prototype.constructor = SAPB1.BoTimeTemplate;
SAPB1.BoTimeTemplate.tt_24H = new SAPB1.BoTimeTemplate('tt_24H', 'tt_24H');
SAPB1.BoTimeTemplate.tt_12H = new SAPB1.BoTimeTemplate('tt_12H', 'tt_12H');

module.exports = SAPB1.BoTimeTemplate;
