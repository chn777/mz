if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoContractTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoContractTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoContractTypes.prototype.constructor = SAPB1.BoContractTypes;
SAPB1.BoContractTypes.ct_Customer = new SAPB1.BoContractTypes('ct_Customer', 'ct_Customer');
SAPB1.BoContractTypes.ct_SerialNumber = new SAPB1.BoContractTypes('ct_SerialNumber', 'ct_SerialNumber');
SAPB1.BoContractTypes.ct_ItemGroup = new SAPB1.BoContractTypes('ct_ItemGroup', 'ct_ItemGroup');

module.exports = SAPB1.BoContractTypes;
