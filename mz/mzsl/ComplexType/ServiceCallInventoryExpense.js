
var BoSvcExpPartTypes = require('EnumType/BoSvcExpPartTypes')
var BoSvcEpxDocTypes = require('EnumType/BoSvcEpxDocTypes')
var BoStckTrnDir = require('EnumType/BoStckTrnDir')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallInventoryExpense = function () {
}
SAPB1.ServiceCallInventoryExpense.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallInventoryExpense.prototype.constructor = SAPB1.ServiceCallInventoryExpense;
SAPB1.ServiceCallInventoryExpense.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.PartType = { valueOf: function(){return 'PartType';}, Type: 'BoSvcExpPartTypes', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'BoSvcEpxDocTypes', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.DocumentPostingDate = { valueOf: function(){return 'DocumentPostingDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.StockTransferDirection = { valueOf: function(){return 'StockTransferDirection';}, Type: 'BoStckTrnDir', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallInventoryExpense.prototype.LineNum = new Number();
SAPB1.ServiceCallInventoryExpense.prototype.PartType = new String();
SAPB1.ServiceCallInventoryExpense.prototype.DocumentType = new String();
SAPB1.ServiceCallInventoryExpense.prototype.DocumentPostingDate = new String();
SAPB1.ServiceCallInventoryExpense.prototype.DocumentNumber = new Number();
SAPB1.ServiceCallInventoryExpense.prototype.StockTransferDirection = new String();
SAPB1.ServiceCallInventoryExpense.prototype.DocEntry = new Number();


SAPB1.ServiceCallInventoryExpense.BoSvcExpPartTypes = BoSvcExpPartTypes
SAPB1.ServiceCallInventoryExpense.BoSvcEpxDocTypes = BoSvcEpxDocTypes
SAPB1.ServiceCallInventoryExpense.BoStckTrnDir = BoStckTrnDir

SAPB1.ServiceCallInventoryExpense.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallInventoryExpense();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallInventoryExpense.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallInventoryExpense;
