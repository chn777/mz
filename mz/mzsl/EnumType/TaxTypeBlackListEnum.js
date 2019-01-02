if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxTypeBlackListEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxTypeBlackListEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxTypeBlackListEnum.prototype.constructor = SAPB1.TaxTypeBlackListEnum;
SAPB1.TaxTypeBlackListEnum.ttblNonSubject = new SAPB1.TaxTypeBlackListEnum('ttblNonSubject', 'ttblNonSubject');
SAPB1.TaxTypeBlackListEnum.ttblExcluded = new SAPB1.TaxTypeBlackListEnum('ttblExcluded', 'ttblExcluded');
SAPB1.TaxTypeBlackListEnum.ttblNotTaxable = new SAPB1.TaxTypeBlackListEnum('ttblNotTaxable', 'ttblNotTaxable');
SAPB1.TaxTypeBlackListEnum.ttblTaxable = new SAPB1.TaxTypeBlackListEnum('ttblTaxable', 'ttblTaxable');
SAPB1.TaxTypeBlackListEnum.ttblExempt = new SAPB1.TaxTypeBlackListEnum('ttblExempt', 'ttblExempt');

module.exports = SAPB1.TaxTypeBlackListEnum;
