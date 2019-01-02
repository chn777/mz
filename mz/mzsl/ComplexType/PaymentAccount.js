

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentAccount = function () {
}
SAPB1.PaymentAccount.prototype = new SAPB1.ComplexType();
SAPB1.PaymentAccount.prototype.constructor = SAPB1.PaymentAccount;
SAPB1.PaymentAccount.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.SumPaid = { valueOf: function(){return 'SumPaid';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.SumPaidFC = { valueOf: function(){return 'SumPaidFC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.Decription = { valueOf: function(){return 'Decription';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.GrossAmount = { valueOf: function(){return 'GrossAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProfitCenter = { valueOf: function(){return 'ProfitCenter';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.VatAmount = { valueOf: function(){return 'VatAmount';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProfitCenter2 = { valueOf: function(){return 'ProfitCenter2';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProfitCenter3 = { valueOf: function(){return 'ProfitCenter3';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProfitCenter4 = { valueOf: function(){return 'ProfitCenter4';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.ProfitCenter5 = { valueOf: function(){return 'ProfitCenter5';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.EqualizationVatAmount = { valueOf: function(){return 'EqualizationVatAmount';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentAccount.prototype.LineNum = new Number();
SAPB1.PaymentAccount.prototype.AccountCode = new String();
SAPB1.PaymentAccount.prototype.SumPaid = new Number();
SAPB1.PaymentAccount.prototype.SumPaidFC = new Number();
SAPB1.PaymentAccount.prototype.Decription = new String();
SAPB1.PaymentAccount.prototype.VatGroup = new String();
SAPB1.PaymentAccount.prototype.AccountName = new String();
SAPB1.PaymentAccount.prototype.GrossAmount = new Number();
SAPB1.PaymentAccount.prototype.ProfitCenter = new String();
SAPB1.PaymentAccount.prototype.ProjectCode = new String();
SAPB1.PaymentAccount.prototype.VatAmount = new Number();
SAPB1.PaymentAccount.prototype.ProfitCenter2 = new String();
SAPB1.PaymentAccount.prototype.ProfitCenter3 = new String();
SAPB1.PaymentAccount.prototype.ProfitCenter4 = new String();
SAPB1.PaymentAccount.prototype.ProfitCenter5 = new String();
SAPB1.PaymentAccount.prototype.LocationCode = new Number();
SAPB1.PaymentAccount.prototype.EqualizationVatAmount = new Number();



SAPB1.PaymentAccount.create = function (rawObject) {
    var instance = new SAPB1.PaymentAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentAccount;
