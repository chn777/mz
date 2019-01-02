if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoMeritalStatuses = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoMeritalStatuses.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoMeritalStatuses.prototype.constructor = SAPB1.BoMeritalStatuses;
SAPB1.BoMeritalStatuses.mts_Divorced = new SAPB1.BoMeritalStatuses('mts_Divorced', 'mts_Divorced');
SAPB1.BoMeritalStatuses.mts_Widowed = new SAPB1.BoMeritalStatuses('mts_Widowed', 'mts_Widowed');
SAPB1.BoMeritalStatuses.mts_Single = new SAPB1.BoMeritalStatuses('mts_Single', 'mts_Single');
SAPB1.BoMeritalStatuses.mts_Married = new SAPB1.BoMeritalStatuses('mts_Married', 'mts_Married');
SAPB1.BoMeritalStatuses.mts_NotSpecified = new SAPB1.BoMeritalStatuses('mts_NotSpecified', 'mts_NotSpecified');

module.exports = SAPB1.BoMeritalStatuses;
