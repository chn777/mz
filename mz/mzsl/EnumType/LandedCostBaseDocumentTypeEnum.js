if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.LandedCostBaseDocumentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.LandedCostBaseDocumentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.LandedCostBaseDocumentTypeEnum.prototype.constructor = SAPB1.LandedCostBaseDocumentTypeEnum;
SAPB1.LandedCostBaseDocumentTypeEnum.asGoodsReceiptPO = new SAPB1.LandedCostBaseDocumentTypeEnum('asGoodsReceiptPO', 'asGoodsReceiptPO');
SAPB1.LandedCostBaseDocumentTypeEnum.asEmpty = new SAPB1.LandedCostBaseDocumentTypeEnum('asEmpty', 'asEmpty');
SAPB1.LandedCostBaseDocumentTypeEnum.asPurchaseInvoice = new SAPB1.LandedCostBaseDocumentTypeEnum('asPurchaseInvoice', 'asPurchaseInvoice');
SAPB1.LandedCostBaseDocumentTypeEnum.asLandedCosts = new SAPB1.LandedCostBaseDocumentTypeEnum('asLandedCosts', 'asLandedCosts');
SAPB1.LandedCostBaseDocumentTypeEnum.asDefault = new SAPB1.LandedCostBaseDocumentTypeEnum('asDefault', 'asDefault');

module.exports = SAPB1.LandedCostBaseDocumentTypeEnum;
