if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAdEpnsTaxTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAdEpnsTaxTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAdEpnsTaxTypes.prototype.constructor = SAPB1.BoAdEpnsTaxTypes;
SAPB1.BoAdEpnsTaxTypes.aext_NoTax = new SAPB1.BoAdEpnsTaxTypes('aext_NoTax', 'aext_NoTax');
SAPB1.BoAdEpnsTaxTypes.aext_NormalTax = new SAPB1.BoAdEpnsTaxTypes('aext_NormalTax', 'aext_NormalTax');
SAPB1.BoAdEpnsTaxTypes.aext_UseTax = new SAPB1.BoAdEpnsTaxTypes('aext_UseTax', 'aext_UseTax');

module.exports = SAPB1.BoAdEpnsTaxTypes;
