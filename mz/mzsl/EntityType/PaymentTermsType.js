
var BoPayTermDueTypes = require('EnumType/BoPayTermDueTypes')
var BoOpenIncPayment = require('EnumType/BoOpenIncPayment')
var BoBaselineDate = require('EnumType/BoBaselineDate')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentTermsType = function () {
}
SAPB1.PaymentTermsType.prototype = new SAPB1.EntityType();
SAPB1.PaymentTermsType.prototype.constructor = SAPB1.PaymentTermsType;
SAPB1.PaymentTermsType.prototype.keys.push('GroupNumber');
SAPB1.PaymentTermsType.GroupNumber = { valueOf: function(){return 'GroupNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.PaymentTermsGroupName = { valueOf: function(){return 'PaymentTermsGroupName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.StartFrom = { valueOf: function(){return 'StartFrom';}, Type: 'BoPayTermDueTypes', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.NumberOfAdditionalMonths = { valueOf: function(){return 'NumberOfAdditionalMonths';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.NumberOfAdditionalDays = { valueOf: function(){return 'NumberOfAdditionalDays';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.CreditLimit = { valueOf: function(){return 'CreditLimit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.GeneralDiscount = { valueOf: function(){return 'GeneralDiscount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.InterestOnArrears = { valueOf: function(){return 'InterestOnArrears';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.PriceListNo = { valueOf: function(){return 'PriceListNo';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.LoadLimit = { valueOf: function(){return 'LoadLimit';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.OpenReceipt = { valueOf: function(){return 'OpenReceipt';}, Type: 'BoOpenIncPayment', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.DiscountCode = { valueOf: function(){return 'DiscountCode';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.DunningCode = { valueOf: function(){return 'DunningCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.BaselineDate = { valueOf: function(){return 'BaselineDate';}, Type: 'BoBaselineDate', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.NumberOfInstallments = { valueOf: function(){return 'NumberOfInstallments';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.NumberOfToleranceDays = { valueOf: function(){return 'NumberOfToleranceDays';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentTermsType.prototype.GroupNumber = new Number();
SAPB1.PaymentTermsType.prototype.PaymentTermsGroupName = new String();
SAPB1.PaymentTermsType.prototype.StartFrom = new String();
SAPB1.PaymentTermsType.prototype.NumberOfAdditionalMonths = new Number();
SAPB1.PaymentTermsType.prototype.NumberOfAdditionalDays = new Number();
SAPB1.PaymentTermsType.prototype.CreditLimit = new Number();
SAPB1.PaymentTermsType.prototype.GeneralDiscount = new Number();
SAPB1.PaymentTermsType.prototype.InterestOnArrears = new Number();
SAPB1.PaymentTermsType.prototype.PriceListNo = new Number();
SAPB1.PaymentTermsType.prototype.LoadLimit = new Number();
SAPB1.PaymentTermsType.prototype.OpenReceipt = new String();
SAPB1.PaymentTermsType.prototype.DiscountCode = new String();
SAPB1.PaymentTermsType.prototype.DunningCode = new String();
SAPB1.PaymentTermsType.prototype.BaselineDate = new String();
SAPB1.PaymentTermsType.prototype.NumberOfInstallments = new Number();
SAPB1.PaymentTermsType.prototype.NumberOfToleranceDays = new Number();


SAPB1.PaymentTermsType.BoPayTermDueTypes = BoPayTermDueTypes
SAPB1.PaymentTermsType.BoOpenIncPayment = BoOpenIncPayment
SAPB1.PaymentTermsType.BoBaselineDate = BoBaselineDate

SAPB1.PaymentTermsType.create = function (rawObject) {
    var instance = new SAPB1.PaymentTermsType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentTermsType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentTermsType;
