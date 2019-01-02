
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoAeDistMthd = require('EnumType/BoAeDistMthd')
var DrawingMethodEnum = require('EnumType/DrawingMethodEnum')
var FreightTypeEnum = require('EnumType/FreightTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AdditionalExpense = function () {
}
SAPB1.AdditionalExpense.prototype = new SAPB1.EntityType();
SAPB1.AdditionalExpense.prototype.constructor = SAPB1.AdditionalExpense;
SAPB1.AdditionalExpense.prototype.keys.push('ExpensCode');
SAPB1.AdditionalExpense.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.RevenuesAccount = { valueOf: function(){return 'RevenuesAccount';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.ExpenseAccount = { valueOf: function(){return 'ExpenseAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.TaxLiable = { valueOf: function(){return 'TaxLiable';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.FixedAmountRevenues = { valueOf: function(){return 'FixedAmountRevenues';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.FixedAmountExpenses = { valueOf: function(){return 'FixedAmountExpenses';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.OutputVATGroup = { valueOf: function(){return 'OutputVATGroup';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.InputVATGroup = { valueOf: function(){return 'InputVATGroup';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionMethod = { valueOf: function(){return 'DistributionMethod';}, Type: 'BoAeDistMthd', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.Includein1099 = { valueOf: function(){return 'Includein1099';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.FreightOffsetAccount = { valueOf: function(){return 'FreightOffsetAccount';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.WTLiable = { valueOf: function(){return 'WTLiable';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.ExpensCode = { valueOf: function(){return 'ExpensCode';}, Type: 'Edm.Int32', Index: 12, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.ExpenseExemptedAccount = { valueOf: function(){return 'ExpenseExemptedAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.RevenuesExemptedAccount = { valueOf: function(){return 'RevenuesExemptedAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DrawingMethod = { valueOf: function(){return 'DrawingMethod';}, Type: 'DrawingMethodEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.FreightType = { valueOf: function(){return 'FreightType';}, Type: 'FreightTypeEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.Stock = { valueOf: function(){return 'Stock';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.LastPurchasePrice = { valueOf: function(){return 'LastPurchasePrice';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdditionalExpense.prototype.Name = new String();
SAPB1.AdditionalExpense.prototype.RevenuesAccount = new String();
SAPB1.AdditionalExpense.prototype.ExpenseAccount = new String();
SAPB1.AdditionalExpense.prototype.TaxLiable = new String();
SAPB1.AdditionalExpense.prototype.FixedAmountRevenues = new Number();
SAPB1.AdditionalExpense.prototype.FixedAmountExpenses = new Number();
SAPB1.AdditionalExpense.prototype.OutputVATGroup = new String();
SAPB1.AdditionalExpense.prototype.InputVATGroup = new String();
SAPB1.AdditionalExpense.prototype.DistributionMethod = new String();
SAPB1.AdditionalExpense.prototype.Includein1099 = new String();
SAPB1.AdditionalExpense.prototype.FreightOffsetAccount = new String();
SAPB1.AdditionalExpense.prototype.WTLiable = new String();
SAPB1.AdditionalExpense.prototype.ExpensCode = new Number();
SAPB1.AdditionalExpense.prototype.ExpenseExemptedAccount = new String();
SAPB1.AdditionalExpense.prototype.RevenuesExemptedAccount = new String();
SAPB1.AdditionalExpense.prototype.DistributionRule = new String();
SAPB1.AdditionalExpense.prototype.DrawingMethod = new String();
SAPB1.AdditionalExpense.prototype.FreightType = new String();
SAPB1.AdditionalExpense.prototype.Stock = new String();
SAPB1.AdditionalExpense.prototype.LastPurchasePrice = new String();
SAPB1.AdditionalExpense.prototype.Project = new String();
SAPB1.AdditionalExpense.prototype.DistributionRule2 = new String();
SAPB1.AdditionalExpense.prototype.DistributionRule3 = new String();
SAPB1.AdditionalExpense.prototype.DistributionRule4 = new String();
SAPB1.AdditionalExpense.prototype.DistributionRule5 = new String();


SAPB1.AdditionalExpense.BoYesNoEnum = BoYesNoEnum
SAPB1.AdditionalExpense.BoAeDistMthd = BoAeDistMthd
SAPB1.AdditionalExpense.DrawingMethodEnum = DrawingMethodEnum
SAPB1.AdditionalExpense.FreightTypeEnum = FreightTypeEnum

SAPB1.AdditionalExpense.create = function (rawObject) {
    var instance = new SAPB1.AdditionalExpense();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AdditionalExpense.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AdditionalExpense;
