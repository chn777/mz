var InternalReconciliationBP = require('ComplexType/InternalReconciliationBP')
var InternalReconciliationBPCollection = require('ComplexType/InternalReconciliationBPCollection')

var CardOrAccountEnum = require('EnumType/CardOrAccountEnum')
var ReconSelectDateTypeEnum = require('EnumType/ReconSelectDateTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InternalReconciliationOpenTransParams = function () {
}
SAPB1.InternalReconciliationOpenTransParams.prototype = new SAPB1.ComplexType();
SAPB1.InternalReconciliationOpenTransParams.prototype.constructor = SAPB1.InternalReconciliationOpenTransParams;
SAPB1.InternalReconciliationOpenTransParams.ReconDate = { valueOf: function(){return 'ReconDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.CardOrAccount = { valueOf: function(){return 'CardOrAccount';}, Type: 'CardOrAccountEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.AccountNo = { valueOf: function(){return 'AccountNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.DateType = { valueOf: function(){return 'DateType';}, Type: 'ReconSelectDateTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InternalReconciliationOpenTransParams.InternalReconciliationBPs = { valueOf: function(){return 'InternalReconciliationBPs';}, Type: 'InternalReconciliationBP', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.InternalReconciliationOpenTransParams.prototype.ReconDate = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.CardOrAccount = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.AccountNo = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.DateType = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.FromDate = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.ToDate = new String();
SAPB1.InternalReconciliationOpenTransParams.prototype.InternalReconciliationBPs = new InternalReconciliationBPCollection();

SAPB1.InternalReconciliationOpenTransParams.InternalReconciliationBP = InternalReconciliationBP
SAPB1.InternalReconciliationOpenTransParams.InternalReconciliationBPCollection = InternalReconciliationBPCollection

SAPB1.InternalReconciliationOpenTransParams.CardOrAccountEnum = CardOrAccountEnum
SAPB1.InternalReconciliationOpenTransParams.ReconSelectDateTypeEnum = ReconSelectDateTypeEnum

SAPB1.InternalReconciliationOpenTransParams.create = function (rawObject) {
    var instance = new SAPB1.InternalReconciliationOpenTransParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InternalReconciliationOpenTransParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InternalReconciliationOpenTransParams;
