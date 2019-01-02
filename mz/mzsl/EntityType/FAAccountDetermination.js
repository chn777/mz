

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FAAccountDetermination = function () {
}
SAPB1.FAAccountDetermination.prototype = new SAPB1.EntityType();
SAPB1.FAAccountDetermination.prototype.constructor = SAPB1.FAAccountDetermination;
SAPB1.FAAccountDetermination.prototype.keys.push('Code');
SAPB1.FAAccountDetermination.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.AssetBalanceSheetAccount = { valueOf: function(){return 'AssetBalanceSheetAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.ClearingAccountAcquisition = { valueOf: function(){return 'ClearingAccountAcquisition';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RevaluationReserveAccount = { valueOf: function(){return 'RevaluationReserveAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RevaluationReserveClearing = { valueOf: function(){return 'RevaluationReserveClearing';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.OrdinaryDepreciation = { valueOf: function(){return 'OrdinaryDepreciation';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.AccumulatedOrdinaryDepr = { valueOf: function(){return 'AccumulatedOrdinaryDepr';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.UnplannedDepreciation = { valueOf: function(){return 'UnplannedDepreciation';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.AccumulatedUnplannedDepr = { valueOf: function(){return 'AccumulatedUnplannedDepr';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.SpecialDepreciation = { valueOf: function(){return 'SpecialDepreciation';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.AccumulatedSpecialDepr = { valueOf: function(){return 'AccumulatedSpecialDepr';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RevenuefromAssetSalesNet = { valueOf: function(){return 'RevenuefromAssetSalesNet';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RetirementwithExpenseNet = { valueOf: function(){return 'RetirementwithExpenseNet';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RetirementwithRevenueNet = { valueOf: function(){return 'RetirementwithRevenueNet';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.LeavewithExpenseNBVGross = { valueOf: function(){return 'LeavewithExpenseNBVGross';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.LeavewithRevenueNBVGross = { valueOf: function(){return 'LeavewithRevenueNBVGross';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RevenueAccountforRetirement = { valueOf: function(){return 'RevenueAccountforRetirement';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.RevenueClearingAccount = { valueOf: function(){return 'RevenueClearingAccount';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FAAccountDetermination.prototype.Code = new String();
SAPB1.FAAccountDetermination.prototype.Description = new String();
SAPB1.FAAccountDetermination.prototype.AssetBalanceSheetAccount = new String();
SAPB1.FAAccountDetermination.prototype.ClearingAccountAcquisition = new String();
SAPB1.FAAccountDetermination.prototype.RevaluationReserveAccount = new String();
SAPB1.FAAccountDetermination.prototype.RevaluationReserveClearing = new String();
SAPB1.FAAccountDetermination.prototype.OrdinaryDepreciation = new String();
SAPB1.FAAccountDetermination.prototype.AccumulatedOrdinaryDepr = new String();
SAPB1.FAAccountDetermination.prototype.UnplannedDepreciation = new String();
SAPB1.FAAccountDetermination.prototype.AccumulatedUnplannedDepr = new String();
SAPB1.FAAccountDetermination.prototype.SpecialDepreciation = new String();
SAPB1.FAAccountDetermination.prototype.AccumulatedSpecialDepr = new String();
SAPB1.FAAccountDetermination.prototype.RevenuefromAssetSalesNet = new String();
SAPB1.FAAccountDetermination.prototype.RetirementwithExpenseNet = new String();
SAPB1.FAAccountDetermination.prototype.RetirementwithRevenueNet = new String();
SAPB1.FAAccountDetermination.prototype.LeavewithExpenseNBVGross = new String();
SAPB1.FAAccountDetermination.prototype.LeavewithRevenueNBVGross = new String();
SAPB1.FAAccountDetermination.prototype.RevenueAccountforRetirement = new String();
SAPB1.FAAccountDetermination.prototype.RevenueClearingAccount = new String();



SAPB1.FAAccountDetermination.create = function (rawObject) {
    var instance = new SAPB1.FAAccountDetermination();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FAAccountDetermination.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FAAccountDetermination;
