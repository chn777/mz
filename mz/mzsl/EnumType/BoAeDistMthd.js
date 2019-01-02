if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoAeDistMthd = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoAeDistMthd.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoAeDistMthd.prototype.constructor = SAPB1.BoAeDistMthd;
SAPB1.BoAeDistMthd.aed_Volume = new SAPB1.BoAeDistMthd('aed_Volume', 'aed_Volume');
SAPB1.BoAeDistMthd.aed_LineTotal = new SAPB1.BoAeDistMthd('aed_LineTotal', 'aed_LineTotal');
SAPB1.BoAeDistMthd.aed_Quantity = new SAPB1.BoAeDistMthd('aed_Quantity', 'aed_Quantity');
SAPB1.BoAeDistMthd.aed_Weight = new SAPB1.BoAeDistMthd('aed_Weight', 'aed_Weight');
SAPB1.BoAeDistMthd.aed_None = new SAPB1.BoAeDistMthd('aed_None', 'aed_None');
SAPB1.BoAeDistMthd.aed_Equally = new SAPB1.BoAeDistMthd('aed_Equally', 'aed_Equally');

module.exports = SAPB1.BoAeDistMthd;
