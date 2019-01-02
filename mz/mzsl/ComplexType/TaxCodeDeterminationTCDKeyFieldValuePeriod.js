var TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage')
var TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod = function () {
}
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod;
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.EfctFrom = { valueOf: function(){return 'EfctFrom';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.EfctTo = { valueOf: function(){return 'EfctTo';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages = { valueOf: function(){return 'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages';}, Type: 'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.EfctFrom = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.EfctTo = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.TaxCode = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages = new TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection();

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage = TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection = TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection


SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod;
