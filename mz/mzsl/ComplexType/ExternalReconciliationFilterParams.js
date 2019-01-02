
var ReconciliationAccountTypeEnum = require('EnumType/ReconciliationAccountTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExternalReconciliationFilterParams = function () {
}
SAPB1.ExternalReconciliationFilterParams.prototype = new SAPB1.ComplexType();
SAPB1.ExternalReconciliationFilterParams.prototype.constructor = SAPB1.ExternalReconciliationFilterParams;
SAPB1.ExternalReconciliationFilterParams.AccountCodeFrom = { valueOf: function(){return 'AccountCodeFrom';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.AccountCodeTo = { valueOf: function(){return 'AccountCodeTo';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.ReconciliationDateFrom = { valueOf: function(){return 'ReconciliationDateFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.ReconciliationDateTo = { valueOf: function(){return 'ReconciliationDateTo';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.ReconciliationNoFrom = { valueOf: function(){return 'ReconciliationNoFrom';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.ReconciliationNoTo = { valueOf: function(){return 'ReconciliationNoTo';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.ReconciliationAccountType = { valueOf: function(){return 'ReconciliationAccountType';}, Type: 'ReconciliationAccountTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalReconciliationFilterParams.prototype.AccountCodeFrom = new String();
SAPB1.ExternalReconciliationFilterParams.prototype.AccountCodeTo = new String();
SAPB1.ExternalReconciliationFilterParams.prototype.ReconciliationDateFrom = new String();
SAPB1.ExternalReconciliationFilterParams.prototype.ReconciliationDateTo = new String();
SAPB1.ExternalReconciliationFilterParams.prototype.ReconciliationNoFrom = new Number();
SAPB1.ExternalReconciliationFilterParams.prototype.ReconciliationNoTo = new Number();
SAPB1.ExternalReconciliationFilterParams.prototype.ReconciliationAccountType = new String();


SAPB1.ExternalReconciliationFilterParams.ReconciliationAccountTypeEnum = ReconciliationAccountTypeEnum

SAPB1.ExternalReconciliationFilterParams.create = function (rawObject) {
    var instance = new SAPB1.ExternalReconciliationFilterParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExternalReconciliationFilterParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExternalReconciliationFilterParams;
