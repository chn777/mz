var InternalReconciliationOpenTransRow = require('ComplexType/InternalReconciliationOpenTransRow')
var InternalReconciliationOpenTransRowCollection = require('ComplexType/InternalReconciliationOpenTransRowCollection')

var CardOrAccountEnum = require('EnumType/CardOrAccountEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliationOpenTrans = function () {
}
SAPB1.InternalReconciliationOpenTrans.prototype = new SAPB1.ComplexType();
SAPB1.InternalReconciliationOpenTrans.prototype.constructor = SAPB1.InternalReconciliationOpenTrans;
SAPB1.InternalReconciliationOpenTrans.ReconDate = { valueOf: function(){return 'ReconDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTrans.CardOrAccount = { valueOf: function(){return 'CardOrAccount';}, Type: 'CardOrAccountEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTrans.InternalReconciliationOpenTransRows = { valueOf: function(){return 'InternalReconciliationOpenTransRows';}, Type: 'InternalReconciliationOpenTransRow', Index: 2, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InternalReconciliationOpenTrans.prototype.ReconDate = new String();
SAPB1.InternalReconciliationOpenTrans.prototype.CardOrAccount = new String();
SAPB1.InternalReconciliationOpenTrans.prototype.InternalReconciliationOpenTransRows = new InternalReconciliationOpenTransRowCollection();

SAPB1.InternalReconciliationOpenTrans.InternalReconciliationOpenTransRow = InternalReconciliationOpenTransRow
SAPB1.InternalReconciliationOpenTrans.InternalReconciliationOpenTransRowCollection = InternalReconciliationOpenTransRowCollection

SAPB1.InternalReconciliationOpenTrans.CardOrAccountEnum = CardOrAccountEnum

SAPB1.InternalReconciliationOpenTrans.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliationOpenTrans();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliationOpenTrans.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliationOpenTrans;
