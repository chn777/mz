
var CreditOrDebitEnum = require('EnumType/CreditOrDebitEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliationRow = function () {
}
SAPB1.InternalReconciliationRow.prototype = new SAPB1.ComplexType();
SAPB1.InternalReconciliationRow.prototype.constructor = SAPB1.InternalReconciliationRow;
SAPB1.InternalReconciliationRow.LineSeq = { valueOf: function(){return 'LineSeq';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.TransId = { valueOf: function(){return 'TransId';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.TransRowId = { valueOf: function(){return 'TransRowId';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.SrcObjTyp = { valueOf: function(){return 'SrcObjTyp';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.SrcObjAbs = { valueOf: function(){return 'SrcObjAbs';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.CreditOrDebit = { valueOf: function(){return 'CreditOrDebit';}, Type: 'CreditOrDebitEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.ReconcileAmount = { valueOf: function(){return 'ReconcileAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.CashDiscount = { valueOf: function(){return 'CashDiscount';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationRow.prototype.LineSeq = new Number();
SAPB1.InternalReconciliationRow.prototype.ShortName = new String();
SAPB1.InternalReconciliationRow.prototype.TransId = new Number();
SAPB1.InternalReconciliationRow.prototype.TransRowId = new Number();
SAPB1.InternalReconciliationRow.prototype.SrcObjTyp = new String();
SAPB1.InternalReconciliationRow.prototype.SrcObjAbs = new Number();
SAPB1.InternalReconciliationRow.prototype.CreditOrDebit = new String();
SAPB1.InternalReconciliationRow.prototype.ReconcileAmount = new Number();
SAPB1.InternalReconciliationRow.prototype.CashDiscount = new Number();


SAPB1.InternalReconciliationRow.CreditOrDebitEnum = CreditOrDebitEnum

SAPB1.InternalReconciliationRow.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliationRow();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliationRow.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliationRow;
