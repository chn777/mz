var InternalReconciliationRow = require('ComplexType/InternalReconciliationRow')
var InternalReconciliationRowCollection = require('ComplexType/InternalReconciliationRowCollection')

var CardOrAccountEnum = require('EnumType/CardOrAccountEnum')
var ReconTypeEnum = require('EnumType/ReconTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliation = function () {
}
SAPB1.InternalReconciliation.prototype = new SAPB1.EntityType();
SAPB1.InternalReconciliation.prototype.constructor = SAPB1.InternalReconciliation;
SAPB1.InternalReconciliation.prototype.keys.push('ReconNum');
SAPB1.InternalReconciliation.ReconNum = { valueOf: function(){return 'ReconNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.ReconDate = { valueOf: function(){return 'ReconDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.CardOrAccount = { valueOf: function(){return 'CardOrAccount';}, Type: 'CardOrAccountEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.ReconType = { valueOf: function(){return 'ReconType';}, Type: 'ReconTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.CancelAbs = { valueOf: function(){return 'CancelAbs';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliation.InternalReconciliationRows = { valueOf: function(){return 'InternalReconciliationRows';}, Type: 'InternalReconciliationRow', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InternalReconciliation.prototype.ReconNum = new Number();
SAPB1.InternalReconciliation.prototype.ReconDate = new String();
SAPB1.InternalReconciliation.prototype.CardOrAccount = new String();
SAPB1.InternalReconciliation.prototype.ReconType = new String();
SAPB1.InternalReconciliation.prototype.Total = new Number();
SAPB1.InternalReconciliation.prototype.CancelAbs = new Number();
SAPB1.InternalReconciliation.prototype.InternalReconciliationRows = new InternalReconciliationRowCollection();

SAPB1.InternalReconciliation.InternalReconciliationRow = InternalReconciliationRow
SAPB1.InternalReconciliation.InternalReconciliationRowCollection = InternalReconciliationRowCollection

SAPB1.InternalReconciliation.CardOrAccountEnum = CardOrAccountEnum
SAPB1.InternalReconciliation.ReconTypeEnum = ReconTypeEnum

SAPB1.InternalReconciliation.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliation;
