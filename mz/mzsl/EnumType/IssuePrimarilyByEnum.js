if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.IssuePrimarilyByEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.IssuePrimarilyByEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.IssuePrimarilyByEnum.prototype.constructor = SAPB1.IssuePrimarilyByEnum;
SAPB1.IssuePrimarilyByEnum.ipbSerialAndBatchNumbers = new SAPB1.IssuePrimarilyByEnum('ipbSerialAndBatchNumbers', 'ipbSerialAndBatchNumbers');
SAPB1.IssuePrimarilyByEnum.ipbBinLocations = new SAPB1.IssuePrimarilyByEnum('ipbBinLocations', 'ipbBinLocations');

module.exports = SAPB1.IssuePrimarilyByEnum;
