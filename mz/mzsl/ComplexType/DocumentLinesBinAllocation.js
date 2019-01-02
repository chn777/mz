
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentLinesBinAllocation = function () {
}
SAPB1.DocumentLinesBinAllocation.prototype = new SAPB1.ComplexType();
SAPB1.DocumentLinesBinAllocation.prototype.constructor = SAPB1.DocumentLinesBinAllocation;
SAPB1.DocumentLinesBinAllocation.BinAbsEntry = { valueOf: function(){return 'BinAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLinesBinAllocation.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLinesBinAllocation.AllowNegativeQuantity = { valueOf: function(){return 'AllowNegativeQuantity';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLinesBinAllocation.SerialAndBatchNumbersBaseLine = { valueOf: function(){return 'SerialAndBatchNumbersBaseLine';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLinesBinAllocation.BaseLineNumber = { valueOf: function(){return 'BaseLineNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentLinesBinAllocation.prototype.BinAbsEntry = new Number();
SAPB1.DocumentLinesBinAllocation.prototype.Quantity = new Number();
SAPB1.DocumentLinesBinAllocation.prototype.AllowNegativeQuantity = new String();
SAPB1.DocumentLinesBinAllocation.prototype.SerialAndBatchNumbersBaseLine = new Number();
SAPB1.DocumentLinesBinAllocation.prototype.BaseLineNumber = new Number();


SAPB1.DocumentLinesBinAllocation.BoYesNoEnum = BoYesNoEnum

SAPB1.DocumentLinesBinAllocation.create = function (rawObject) {
    var instance = new SAPB1.DocumentLinesBinAllocation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentLinesBinAllocation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentLinesBinAllocation;
