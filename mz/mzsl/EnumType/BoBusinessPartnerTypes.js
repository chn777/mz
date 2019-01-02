if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBusinessPartnerTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBusinessPartnerTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBusinessPartnerTypes.prototype.constructor = SAPB1.BoBusinessPartnerTypes;
SAPB1.BoBusinessPartnerTypes.garPrivate = new SAPB1.BoBusinessPartnerTypes('garPrivate', 'garPrivate');
SAPB1.BoBusinessPartnerTypes.garCompany = new SAPB1.BoBusinessPartnerTypes('garCompany', 'garCompany');
SAPB1.BoBusinessPartnerTypes.garAll = new SAPB1.BoBusinessPartnerTypes('garAll', 'garAll');
SAPB1.BoBusinessPartnerTypes.garGovernment = new SAPB1.BoBusinessPartnerTypes('garGovernment', 'garGovernment');

module.exports = SAPB1.BoBusinessPartnerTypes;
