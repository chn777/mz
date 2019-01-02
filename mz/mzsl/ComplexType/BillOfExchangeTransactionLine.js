
var BoBOETypes = require('EnumType/BoBOETypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BillOfExchangeTransactionLine = function () {
}
SAPB1.BillOfExchangeTransactionLine.prototype = new SAPB1.ComplexType();
SAPB1.BillOfExchangeTransactionLine.prototype.constructor = SAPB1.BillOfExchangeTransactionLine;
SAPB1.BillOfExchangeTransactionLine.BillOfExchangeNo = { valueOf: function(){return 'BillOfExchangeNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransactionLine.BillOfExchangeType = { valueOf: function(){return 'BillOfExchangeType';}, Type: 'BoBOETypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransactionLine.BillOfExchangeDueDate = { valueOf: function(){return 'BillOfExchangeDueDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransactionLine.prototype.BillOfExchangeNo = new Number();
SAPB1.BillOfExchangeTransactionLine.prototype.BillOfExchangeType = new String();
SAPB1.BillOfExchangeTransactionLine.prototype.BillOfExchangeDueDate = new String();


SAPB1.BillOfExchangeTransactionLine.BoBOETypes = BoBOETypes

SAPB1.BillOfExchangeTransactionLine.create = function (rawObject) {
    var instance = new SAPB1.BillOfExchangeTransactionLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BillOfExchangeTransactionLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BillOfExchangeTransactionLine;
