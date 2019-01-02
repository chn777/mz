
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var CreditOrDebitEnum = require('EnumType/CreditOrDebitEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliationOpenTransRow = function () {
}
SAPB1.InternalReconciliationOpenTransRow.prototype = new SAPB1.ComplexType();
SAPB1.InternalReconciliationOpenTransRow.prototype.constructor = SAPB1.InternalReconciliationOpenTransRow;
SAPB1.InternalReconciliationOpenTransRow.Selected = { valueOf: function(){return 'Selected';}, Type: 'BoYesNoEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.TransId = { valueOf: function(){return 'TransId';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.TransRowId = { valueOf: function(){return 'TransRowId';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.SrcObjTyp = { valueOf: function(){return 'SrcObjTyp';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.SrcObjAbs = { valueOf: function(){return 'SrcObjAbs';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.CreditOrDebit = { valueOf: function(){return 'CreditOrDebit';}, Type: 'CreditOrDebitEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.ReconcileAmount = { valueOf: function(){return 'ReconcileAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.CashDiscount = { valueOf: function(){return 'CashDiscount';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransRow.prototype.Selected = new String();
SAPB1.InternalReconciliationOpenTransRow.prototype.ShortName = new String();
SAPB1.InternalReconciliationOpenTransRow.prototype.TransId = new Number();
SAPB1.InternalReconciliationOpenTransRow.prototype.TransRowId = new Number();
SAPB1.InternalReconciliationOpenTransRow.prototype.SrcObjTyp = new String();
SAPB1.InternalReconciliationOpenTransRow.prototype.SrcObjAbs = new Number();
SAPB1.InternalReconciliationOpenTransRow.prototype.CreditOrDebit = new String();
SAPB1.InternalReconciliationOpenTransRow.prototype.ReconcileAmount = new Number();
SAPB1.InternalReconciliationOpenTransRow.prototype.CashDiscount = new Number();


SAPB1.InternalReconciliationOpenTransRow.BoYesNoEnum = BoYesNoEnum
SAPB1.InternalReconciliationOpenTransRow.CreditOrDebitEnum = CreditOrDebitEnum

SAPB1.InternalReconciliationOpenTransRow.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliationOpenTransRow();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliationOpenTransRow.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliationOpenTransRow;
