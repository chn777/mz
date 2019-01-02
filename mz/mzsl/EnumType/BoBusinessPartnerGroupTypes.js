if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBusinessPartnerGroupTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBusinessPartnerGroupTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBusinessPartnerGroupTypes.prototype.constructor = SAPB1.BoBusinessPartnerGroupTypes;
SAPB1.BoBusinessPartnerGroupTypes.bbpgt_CustomerGroup = new SAPB1.BoBusinessPartnerGroupTypes('bbpgt_CustomerGroup', 'bbpgt_CustomerGroup');
SAPB1.BoBusinessPartnerGroupTypes.bbpgt_VendorGroup = new SAPB1.BoBusinessPartnerGroupTypes('bbpgt_VendorGroup', 'bbpgt_VendorGroup');

module.exports = SAPB1.BoBusinessPartnerGroupTypes;
