

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LineExpenseTaxJurisdiction = function () {
}
SAPB1.LineExpenseTaxJurisdiction.prototype = new SAPB1.ComplexType();
SAPB1.LineExpenseTaxJurisdiction.prototype.constructor = SAPB1.LineExpenseTaxJurisdiction;
SAPB1.LineExpenseTaxJurisdiction.JurisdictionCode = { valueOf: function(){return 'JurisdictionCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.JurisdictionType = { valueOf: function(){return 'JurisdictionType';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.TaxAmountSC = { valueOf: function(){return 'TaxAmountSC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.TaxAmountFC = { valueOf: function(){return 'TaxAmountFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.TaxRate = { valueOf: function(){return 'TaxRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.RowSequence = { valueOf: function(){return 'RowSequence';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LineExpenseTaxJurisdiction.prototype.JurisdictionCode = new String();
SAPB1.LineExpenseTaxJurisdiction.prototype.JurisdictionType = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.TaxAmount = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.TaxAmountSC = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.TaxAmountFC = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.TaxRate = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.DocEntry = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.LineNumber = new Number();
SAPB1.LineExpenseTaxJurisdiction.prototype.RowSequence = new Number();



SAPB1.LineExpenseTaxJurisdiction.create = function (rawObject) {
    var instance = new SAPB1.LineExpenseTaxJurisdiction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LineExpenseTaxJurisdiction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LineExpenseTaxJurisdiction;
