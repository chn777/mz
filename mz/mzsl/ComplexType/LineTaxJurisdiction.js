

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LineTaxJurisdiction = function () {
}
SAPB1.LineTaxJurisdiction.prototype = new SAPB1.ComplexType();
SAPB1.LineTaxJurisdiction.prototype.constructor = SAPB1.LineTaxJurisdiction;
SAPB1.LineTaxJurisdiction.JurisdictionCode = { valueOf: function(){return 'JurisdictionCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.JurisdictionType = { valueOf: function(){return 'JurisdictionType';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.TaxAmountSC = { valueOf: function(){return 'TaxAmountSC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.TaxAmountFC = { valueOf: function(){return 'TaxAmountFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.TaxRate = { valueOf: function(){return 'TaxRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.RowSequence = { valueOf: function(){return 'RowSequence';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LineTaxJurisdiction.prototype.JurisdictionCode = new String();
SAPB1.LineTaxJurisdiction.prototype.JurisdictionType = new Number();
SAPB1.LineTaxJurisdiction.prototype.TaxAmount = new Number();
SAPB1.LineTaxJurisdiction.prototype.TaxAmountSC = new Number();
SAPB1.LineTaxJurisdiction.prototype.TaxAmountFC = new Number();
SAPB1.LineTaxJurisdiction.prototype.TaxRate = new Number();
SAPB1.LineTaxJurisdiction.prototype.DocEntry = new Number();
SAPB1.LineTaxJurisdiction.prototype.LineNumber = new Number();
SAPB1.LineTaxJurisdiction.prototype.RowSequence = new Number();



SAPB1.LineTaxJurisdiction.create = function (rawObject) {
    var instance = new SAPB1.LineTaxJurisdiction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LineTaxJurisdiction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LineTaxJurisdiction;
