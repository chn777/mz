if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AutoAllocOnReceiptMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AutoAllocOnReceiptMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AutoAllocOnReceiptMethodEnum.prototype.constructor = SAPB1.AutoAllocOnReceiptMethodEnum;
SAPB1.AutoAllocOnReceiptMethodEnum.aaormItemCurrentBins = new SAPB1.AutoAllocOnReceiptMethodEnum('aaormItemCurrentBins', 'aaormItemCurrentBins');
SAPB1.AutoAllocOnReceiptMethodEnum.aaormLastBinReceivedItem = new SAPB1.AutoAllocOnReceiptMethodEnum('aaormLastBinReceivedItem', 'aaormLastBinReceivedItem');
SAPB1.AutoAllocOnReceiptMethodEnum.aaormItemCurrentAndHistoricalBins = new SAPB1.AutoAllocOnReceiptMethodEnum('aaormItemCurrentAndHistoricalBins', 'aaormItemCurrentAndHistoricalBins');
SAPB1.AutoAllocOnReceiptMethodEnum.aaormDefaultBin = new SAPB1.AutoAllocOnReceiptMethodEnum('aaormDefaultBin', 'aaormDefaultBin');

module.exports = SAPB1.AutoAllocOnReceiptMethodEnum;
