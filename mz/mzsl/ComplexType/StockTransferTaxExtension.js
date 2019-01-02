
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.StockTransferTaxExtension = function () {
}
SAPB1.StockTransferTaxExtension.prototype = new SAPB1.ComplexType();
SAPB1.StockTransferTaxExtension.prototype.constructor = SAPB1.StockTransferTaxExtension;
SAPB1.StockTransferTaxExtension.SupportVAT = { valueOf: function(){return 'SupportVAT';}, Type: 'BoYesNoEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferTaxExtension.FormNumber = { valueOf: function(){return 'FormNumber';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferTaxExtension.TransactionCategory = { valueOf: function(){return 'TransactionCategory';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferTaxExtension.prototype.SupportVAT = new String();
SAPB1.StockTransferTaxExtension.prototype.FormNumber = new String();
SAPB1.StockTransferTaxExtension.prototype.TransactionCategory = new String();


SAPB1.StockTransferTaxExtension.BoYesNoEnum = BoYesNoEnum

SAPB1.StockTransferTaxExtension.create = function (rawObject) {
    var instance = new SAPB1.StockTransferTaxExtension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.StockTransferTaxExtension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.StockTransferTaxExtension;
