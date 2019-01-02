

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage = function () {
}
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage;
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.UsageCode = { valueOf: function(){return 'UsageCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.ExpTaxCode = { valueOf: function(){return 'ExpTaxCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.PurTaxCode = { valueOf: function(){return 'PurTaxCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.UsageCode = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.TaxCode = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.ExpTaxCode = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.PurTaxCode = new String();



SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage;
