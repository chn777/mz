if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoCardCompanyTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoCardCompanyTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoCardCompanyTypes.prototype.constructor = SAPB1.BoCardCompanyTypes;
SAPB1.BoCardCompanyTypes.cGovernment = new SAPB1.BoCardCompanyTypes('cGovernment', 'cGovernment');
SAPB1.BoCardCompanyTypes.cCompany = new SAPB1.BoCardCompanyTypes('cCompany', 'cCompany');
SAPB1.BoCardCompanyTypes.cPrivate = new SAPB1.BoCardCompanyTypes('cPrivate', 'cPrivate');

module.exports = SAPB1.BoCardCompanyTypes;
