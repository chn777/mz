

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocExpenseTaxJurisdiction = function () {
}
SAPB1.DocExpenseTaxJurisdiction.prototype = new SAPB1.ComplexType();
SAPB1.DocExpenseTaxJurisdiction.prototype.constructor = SAPB1.DocExpenseTaxJurisdiction;
SAPB1.DocExpenseTaxJurisdiction.JurisdictionCode = { valueOf: function(){return 'JurisdictionCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.JurisdictionType = { valueOf: function(){return 'JurisdictionType';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.TaxAmountSC = { valueOf: function(){return 'TaxAmountSC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.TaxAmountFC = { valueOf: function(){return 'TaxAmountFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.TaxRate = { valueOf: function(){return 'TaxRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.RowSequence = { valueOf: function(){return 'RowSequence';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocExpenseTaxJurisdiction.prototype.JurisdictionCode = new String();
SAPB1.DocExpenseTaxJurisdiction.prototype.JurisdictionType = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.TaxAmount = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.TaxAmountSC = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.TaxAmountFC = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.TaxRate = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.DocEntry = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.LineNumber = new Number();
SAPB1.DocExpenseTaxJurisdiction.prototype.RowSequence = new Number();



SAPB1.DocExpenseTaxJurisdiction.create = function (rawObject) {
    var instance = new SAPB1.DocExpenseTaxJurisdiction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocExpenseTaxJurisdiction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocExpenseTaxJurisdiction;
