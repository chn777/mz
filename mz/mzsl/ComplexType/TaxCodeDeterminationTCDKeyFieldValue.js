var TaxCodeDeterminationTCDKeyFieldValuePeriod = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValuePeriod')
var TaxCodeDeterminationTCDKeyFieldValuePeriodCollection = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValuePeriodCollection')
var TaxCodeDeterminationTCDKeyFieldValueDefaultWT = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValueDefaultWT')
var TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValue = function () {
}
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValue;
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.DispOrder = { valueOf: function(){return 'DispOrder';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.KeyFld_1_V = { valueOf: function(){return 'KeyFld_1_V';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.KeyFld_2_V = { valueOf: function(){return 'KeyFld_2_V';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.KeyFld_3_V = { valueOf: function(){return 'KeyFld_3_V';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.KeyFld_4_V = { valueOf: function(){return 'KeyFld_4_V';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValuePeriods = { valueOf: function(){return 'TaxCodeDeterminationTCDKeyFieldValuePeriods';}, Type: 'TaxCodeDeterminationTCDKeyFieldValuePeriod', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValueDefaultWTs = { valueOf: function(){return 'TaxCodeDeterminationTCDKeyFieldValueDefaultWTs';}, Type: 'TaxCodeDeterminationTCDKeyFieldValueDefaultWT', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.DispOrder = new Number();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.KeyFld_1_V = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.KeyFld_2_V = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.KeyFld_3_V = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.KeyFld_4_V = new String();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.TaxCodeDeterminationTCDKeyFieldValuePeriods = new TaxCodeDeterminationTCDKeyFieldValuePeriodCollection();
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.TaxCodeDeterminationTCDKeyFieldValueDefaultWTs = new TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection();

SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValuePeriod = TaxCodeDeterminationTCDKeyFieldValuePeriod
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection = TaxCodeDeterminationTCDKeyFieldValuePeriodCollection
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValueDefaultWT = TaxCodeDeterminationTCDKeyFieldValueDefaultWT
SAPB1.TaxCodeDeterminationTCDKeyFieldValue.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection = TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection


SAPB1.TaxCodeDeterminationTCDKeyFieldValue.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDKeyFieldValue();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDKeyFieldValue.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValue;
