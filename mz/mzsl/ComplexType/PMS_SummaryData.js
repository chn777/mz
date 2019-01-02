

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMS_SummaryData = function () {
}
SAPB1.PMS_SummaryData.prototype = new SAPB1.ComplexType();
SAPB1.PMS_SummaryData.prototype.constructor = SAPB1.PMS_SummaryData;
SAPB1.PMS_SummaryData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.SubprojectBudget = { valueOf: function(){return 'SubprojectBudget';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.SumOpenAmountPurchase = { valueOf: function(){return 'SumOpenAmountPurchase';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.SumInvoicedAmountPurchase = { valueOf: function(){return 'SumInvoicedAmountPurchase';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.TotalAmountPurchase = { valueOf: function(){return 'TotalAmountPurchase';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.TotalVariancePurchase = { valueOf: function(){return 'TotalVariancePurchase';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.VariancePerceptionPurchase = { valueOf: function(){return 'VariancePerceptionPurchase';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumSubprojectBudget = { valueOf: function(){return 'AccumSubprojectBudget';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumOpenAmountPurchase = { valueOf: function(){return 'AccumOpenAmountPurchase';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumInvoicedAmountPurchase = { valueOf: function(){return 'AccumInvoicedAmountPurchase';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumTotalPurchase = { valueOf: function(){return 'AccumTotalPurchase';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumTotalVariancePurchase = { valueOf: function(){return 'AccumTotalVariancePurchase';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumVariancePerceptionPurchase = { valueOf: function(){return 'AccumVariancePerceptionPurchase';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.PotentialSubprojectAmount = { valueOf: function(){return 'PotentialSubprojectAmount';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.SumOpenAmountSales = { valueOf: function(){return 'SumOpenAmountSales';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.SumInvoicedAmountSales = { valueOf: function(){return 'SumInvoicedAmountSales';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.TotalAmountSales = { valueOf: function(){return 'TotalAmountSales';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.TotalVarianceSales = { valueOf: function(){return 'TotalVarianceSales';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.VariancePerceptionSales = { valueOf: function(){return 'VariancePerceptionSales';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumPotentialSubprojectAmount = { valueOf: function(){return 'AccumPotentialSubprojectAmount';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumOpenAmountSales = { valueOf: function(){return 'AccumOpenAmountSales';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumInvoicedAmountSales = { valueOf: function(){return 'AccumInvoicedAmountSales';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumTotalSales = { valueOf: function(){return 'AccumTotalSales';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumTotalVarianceSales = { valueOf: function(){return 'AccumTotalVarianceSales';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.AccumVariancePerceptionSales = { valueOf: function(){return 'AccumVariancePerceptionSales';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualItemComponentCost = { valueOf: function(){return 'ActualItemComponentCost';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualResourceComponentCost = { valueOf: function(){return 'ActualResourceComponentCost';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualAdditionalCost = { valueOf: function(){return 'ActualAdditionalCost';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualProductCost = { valueOf: function(){return 'ActualProductCost';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualByProductCost = { valueOf: function(){return 'ActualByProductCost';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.TotalVariance = { valueOf: function(){return 'TotalVariance';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.ActualClosingDate = { valueOf: function(){return 'ActualClosingDate';}, Type: 'Edm.DateTime', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.Overdue = { valueOf: function(){return 'Overdue';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_SummaryData.prototype.LineID = new Number();
SAPB1.PMS_SummaryData.prototype.SubprojectBudget = new Number();
SAPB1.PMS_SummaryData.prototype.SumOpenAmountPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.SumInvoicedAmountPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.TotalAmountPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.TotalVariancePurchase = new Number();
SAPB1.PMS_SummaryData.prototype.VariancePerceptionPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.AccumSubprojectBudget = new Number();
SAPB1.PMS_SummaryData.prototype.AccumOpenAmountPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.AccumInvoicedAmountPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.AccumTotalPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.AccumTotalVariancePurchase = new Number();
SAPB1.PMS_SummaryData.prototype.AccumVariancePerceptionPurchase = new Number();
SAPB1.PMS_SummaryData.prototype.PotentialSubprojectAmount = new Number();
SAPB1.PMS_SummaryData.prototype.SumOpenAmountSales = new Number();
SAPB1.PMS_SummaryData.prototype.SumInvoicedAmountSales = new Number();
SAPB1.PMS_SummaryData.prototype.TotalAmountSales = new Number();
SAPB1.PMS_SummaryData.prototype.TotalVarianceSales = new Number();
SAPB1.PMS_SummaryData.prototype.VariancePerceptionSales = new Number();
SAPB1.PMS_SummaryData.prototype.AccumPotentialSubprojectAmount = new Number();
SAPB1.PMS_SummaryData.prototype.AccumOpenAmountSales = new Number();
SAPB1.PMS_SummaryData.prototype.AccumInvoicedAmountSales = new Number();
SAPB1.PMS_SummaryData.prototype.AccumTotalSales = new Number();
SAPB1.PMS_SummaryData.prototype.AccumTotalVarianceSales = new Number();
SAPB1.PMS_SummaryData.prototype.AccumVariancePerceptionSales = new Number();
SAPB1.PMS_SummaryData.prototype.ActualItemComponentCost = new Number();
SAPB1.PMS_SummaryData.prototype.ActualResourceComponentCost = new Number();
SAPB1.PMS_SummaryData.prototype.ActualAdditionalCost = new Number();
SAPB1.PMS_SummaryData.prototype.ActualProductCost = new Number();
SAPB1.PMS_SummaryData.prototype.ActualByProductCost = new Number();
SAPB1.PMS_SummaryData.prototype.TotalVariance = new Number();
SAPB1.PMS_SummaryData.prototype.DueDate = new String();
SAPB1.PMS_SummaryData.prototype.ActualClosingDate = new String();
SAPB1.PMS_SummaryData.prototype.Overdue = new Number();



SAPB1.PMS_SummaryData.create = function (rawObject) {
    var instance = new SAPB1.PMS_SummaryData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMS_SummaryData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMS_SummaryData;
