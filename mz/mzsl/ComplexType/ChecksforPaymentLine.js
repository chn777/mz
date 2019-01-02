

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChecksforPaymentLine = function () {
}
SAPB1.ChecksforPaymentLine.prototype = new SAPB1.ComplexType();
SAPB1.ChecksforPaymentLine.prototype.constructor = SAPB1.ChecksforPaymentLine;
SAPB1.ChecksforPaymentLine.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.RowDetails = { valueOf: function(){return 'RowDetails';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.RowTotal = { valueOf: function(){return 'RowTotal';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.RowCurrency = { valueOf: function(){return 'RowCurrency';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.TaxDefinition = { valueOf: function(){return 'TaxDefinition';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.TaxPercent = { valueOf: function(){return 'TaxPercent';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.CreditedAccount = { valueOf: function(){return 'CreditedAccount';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.LineTotal = { valueOf: function(){return 'LineTotal';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChecksforPaymentLine.prototype.RowNumber = new Number();
SAPB1.ChecksforPaymentLine.prototype.RowDetails = new String();
SAPB1.ChecksforPaymentLine.prototype.RowTotal = new Number();
SAPB1.ChecksforPaymentLine.prototype.RowCurrency = new String();
SAPB1.ChecksforPaymentLine.prototype.TaxDefinition = new String();
SAPB1.ChecksforPaymentLine.prototype.TaxPercent = new Number();
SAPB1.ChecksforPaymentLine.prototype.CreditedAccount = new String();
SAPB1.ChecksforPaymentLine.prototype.LineTotal = new Number();



SAPB1.ChecksforPaymentLine.create = function (rawObject) {
    var instance = new SAPB1.ChecksforPaymentLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChecksforPaymentLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChecksforPaymentLine;
