
var RclRecurringTransactionStatusEnum = require('EnumType/RclRecurringTransactionStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RclRecurringTransaction = function () {
}
SAPB1.RclRecurringTransaction.prototype = new SAPB1.ComplexType();
SAPB1.RclRecurringTransaction.prototype.constructor = SAPB1.RclRecurringTransaction;
SAPB1.RclRecurringTransaction.TransactionID = { valueOf: function(){return 'TransactionID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.TemplateID = { valueOf: function(){return 'TemplateID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.Instance = { valueOf: function(){return 'Instance';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.PlannedDate = { valueOf: function(){return 'PlannedDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.Status = { valueOf: function(){return 'Status';}, Type: 'RclRecurringTransactionStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RclRecurringTransaction.prototype.TransactionID = new Number();
SAPB1.RclRecurringTransaction.prototype.TemplateID = new Number();
SAPB1.RclRecurringTransaction.prototype.Instance = new Number();
SAPB1.RclRecurringTransaction.prototype.PlannedDate = new String();
SAPB1.RclRecurringTransaction.prototype.Status = new String();
SAPB1.RclRecurringTransaction.prototype.DocType = new String();
SAPB1.RclRecurringTransaction.prototype.DocEntry = new Number();


SAPB1.RclRecurringTransaction.RclRecurringTransactionStatusEnum = RclRecurringTransactionStatusEnum

SAPB1.RclRecurringTransaction.create = function (rawObject) {
    var instance = new SAPB1.RclRecurringTransaction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RclRecurringTransaction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RclRecurringTransaction;
