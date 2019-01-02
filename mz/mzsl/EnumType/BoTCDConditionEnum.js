if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTCDConditionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTCDConditionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTCDConditionEnum.prototype.constructor = SAPB1.BoTCDConditionEnum;
SAPB1.BoTCDConditionEnum.tcdcFreight = new SAPB1.BoTCDConditionEnum('tcdcFreight', 'tcdcFreight');
SAPB1.BoTCDConditionEnum.tcdcBranchNumber = new SAPB1.BoTCDConditionEnum('tcdcBranchNumber', 'tcdcBranchNumber');
SAPB1.BoTCDConditionEnum.tcdcShipToStreePOBox = new SAPB1.BoTCDConditionEnum('tcdcShipToStreePOBox', 'tcdcShipToStreePOBox');
SAPB1.BoTCDConditionEnum.tcdcShipToZipCode = new SAPB1.BoTCDConditionEnum('tcdcShipToZipCode', 'tcdcShipToZipCode');
SAPB1.BoTCDConditionEnum.tcdcShipToCountry = new SAPB1.BoTCDConditionEnum('tcdcShipToCountry', 'tcdcShipToCountry');
SAPB1.BoTCDConditionEnum.tcdcNone = new SAPB1.BoTCDConditionEnum('tcdcNone', 'tcdcNone');
SAPB1.BoTCDConditionEnum.tcdcItem = new SAPB1.BoTCDConditionEnum('tcdcItem', 'tcdcItem');
SAPB1.BoTCDConditionEnum.tcdcShipToState = new SAPB1.BoTCDConditionEnum('tcdcShipToState', 'tcdcShipToState');
SAPB1.BoTCDConditionEnum.tcdcFederalTaxID = new SAPB1.BoTCDConditionEnum('tcdcFederalTaxID', 'tcdcFederalTaxID');
SAPB1.BoTCDConditionEnum.tcdcCustomerEquTax = new SAPB1.BoTCDConditionEnum('tcdcCustomerEquTax', 'tcdcCustomerEquTax');
SAPB1.BoTCDConditionEnum.tcdcItemGroup = new SAPB1.BoTCDConditionEnum('tcdcItemGroup', 'tcdcItemGroup');
SAPB1.BoTCDConditionEnum.tcdcCustomerGroup = new SAPB1.BoTCDConditionEnum('tcdcCustomerGroup', 'tcdcCustomerGroup');
SAPB1.BoTCDConditionEnum.tcdcGLAccount = new SAPB1.BoTCDConditionEnum('tcdcGLAccount', 'tcdcGLAccount');
SAPB1.BoTCDConditionEnum.tcdcShipToCity = new SAPB1.BoTCDConditionEnum('tcdcShipToCity', 'tcdcShipToCity');
SAPB1.BoTCDConditionEnum.tcdcShipToAddress = new SAPB1.BoTCDConditionEnum('tcdcShipToAddress', 'tcdcShipToAddress');
SAPB1.BoTCDConditionEnum.tcdcBusinessPartner = new SAPB1.BoTCDConditionEnum('tcdcBusinessPartner', 'tcdcBusinessPartner');
SAPB1.BoTCDConditionEnum.tcdcWarehouse = new SAPB1.BoTCDConditionEnum('tcdcWarehouse', 'tcdcWarehouse');
SAPB1.BoTCDConditionEnum.tcdcUDF = new SAPB1.BoTCDConditionEnum('tcdcUDF', 'tcdcUDF');
SAPB1.BoTCDConditionEnum.tcdcTaxStatus = new SAPB1.BoTCDConditionEnum('tcdcTaxStatus', 'tcdcTaxStatus');
SAPB1.BoTCDConditionEnum.tcdcVendorGroup = new SAPB1.BoTCDConditionEnum('tcdcVendorGroup', 'tcdcVendorGroup');
SAPB1.BoTCDConditionEnum.tcdcShipToCounty = new SAPB1.BoTCDConditionEnum('tcdcShipToCounty', 'tcdcShipToCounty');

module.exports = SAPB1.BoTCDConditionEnum;
