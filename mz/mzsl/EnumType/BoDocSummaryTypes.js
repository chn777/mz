if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocSummaryTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocSummaryTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocSummaryTypes.prototype.constructor = SAPB1.BoDocSummaryTypes;
SAPB1.BoDocSummaryTypes.dByItems = new SAPB1.BoDocSummaryTypes('dByItems', 'dByItems');
SAPB1.BoDocSummaryTypes.dNoSummary = new SAPB1.BoDocSummaryTypes('dNoSummary', 'dNoSummary');
SAPB1.BoDocSummaryTypes.dByDocuments = new SAPB1.BoDocSummaryTypes('dByDocuments', 'dByDocuments');

module.exports = SAPB1.BoDocSummaryTypes;
