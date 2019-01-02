
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BinActionTypeEnum = require('EnumType/BinActionTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.StockTransferLinesBinAllocation = function () {
}
SAPB1.StockTransferLinesBinAllocation.prototype = new SAPB1.ComplexType();
SAPB1.StockTransferLinesBinAllocation.prototype.constructor = SAPB1.StockTransferLinesBinAllocation;
SAPB1.StockTransferLinesBinAllocation.BinAbsEntry = { valueOf: function(){return 'BinAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.AllowNegativeQuantity = { valueOf: function(){return 'AllowNegativeQuantity';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.SerialAndBatchNumbersBaseLine = { valueOf: function(){return 'SerialAndBatchNumbersBaseLine';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.BinActionType = { valueOf: function(){return 'BinActionType';}, Type: 'BinActionTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransferLinesBinAllocation.prototype.BinAbsEntry = new Number();
SAPB1.StockTransferLinesBinAllocation.prototype.Quantity = new Number();
SAPB1.StockTransferLinesBinAllocation.prototype.AllowNegativeQuantity = new String();
SAPB1.StockTransferLinesBinAllocation.prototype.SerialAndBatchNumbersBaseLine = new Number();
SAPB1.StockTransferLinesBinAllocation.prototype.BinActionType = new String();
SAPB1.StockTransferLinesBinAllocation.prototype.BaseLineNumber = new Number();


SAPB1.StockTransferLinesBinAllocation.BoYesNoEnum = BoYesNoEnum
SAPB1.StockTransferLinesBinAllocation.BinActionTypeEnum = BinActionTypeEnum

SAPB1.StockTransferLinesBinAllocation.create = function (rawObject) {
    var instance = new SAPB1.StockTransferLinesBinAllocation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.StockTransferLinesBinAllocation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.StockTransferLinesBinAllocation;
