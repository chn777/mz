
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BinRestrictItemEnum = require('EnumType/BinRestrictItemEnum')
var BinRestrictionBatchEnum = require('EnumType/BinRestrictionBatchEnum')
var BinRestrictTransactionEnum = require('EnumType/BinRestrictTransactionEnum')
var BinRestrictUoMEnum = require('EnumType/BinRestrictUoMEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BinLocation = function () {
}
SAPB1.BinLocation.prototype = new SAPB1.EntityType();
SAPB1.BinLocation.prototype.constructor = SAPB1.BinLocation;
SAPB1.BinLocation.prototype.keys.push('AbsEntry');
SAPB1.BinLocation.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Sublevel1 = { valueOf: function(){return 'Sublevel1';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Sublevel2 = { valueOf: function(){return 'Sublevel2';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Sublevel3 = { valueOf: function(){return 'Sublevel3';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Sublevel4 = { valueOf: function(){return 'Sublevel4';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.BinCode = { valueOf: function(){return 'BinCode';}, Type: 'Edm.String', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.AlternativeSortCode = { valueOf: function(){return 'AlternativeSortCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute1 = { valueOf: function(){return 'Attribute1';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute2 = { valueOf: function(){return 'Attribute2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute3 = { valueOf: function(){return 'Attribute3';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute4 = { valueOf: function(){return 'Attribute4';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute5 = { valueOf: function(){return 'Attribute5';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute6 = { valueOf: function(){return 'Attribute6';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute7 = { valueOf: function(){return 'Attribute7';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute8 = { valueOf: function(){return 'Attribute8';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute9 = { valueOf: function(){return 'Attribute9';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.Attribute10 = { valueOf: function(){return 'Attribute10';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.RestrictedItemType = { valueOf: function(){return 'RestrictedItemType';}, Type: 'BinRestrictItemEnum', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.SpecificItem = { valueOf: function(){return 'SpecificItem';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.SpecificItemGroup = { valueOf: function(){return 'SpecificItemGroup';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.BatchRestrictions = { valueOf: function(){return 'BatchRestrictions';}, Type: 'BinRestrictionBatchEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.RestrictedTransType = { valueOf: function(){return 'RestrictedTransType';}, Type: 'BinRestrictTransactionEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.RestrictionReason = { valueOf: function(){return 'RestrictionReason';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.DateRestrictionChanged = { valueOf: function(){return 'DateRestrictionChanged';}, Type: 'Edm.DateTime', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MinimumQty = { valueOf: function(){return 'MinimumQty';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MaximumQty = { valueOf: function(){return 'MaximumQty';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.IsSystemBin = { valueOf: function(){return 'IsSystemBin';}, Type: 'BoYesNoEnum', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.ReceivingBinLocation = { valueOf: function(){return 'ReceivingBinLocation';}, Type: 'BoYesNoEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.ExcludeAutoAllocOnIssue = { valueOf: function(){return 'ExcludeAutoAllocOnIssue';}, Type: 'BoYesNoEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MaximumWeight = { valueOf: function(){return 'MaximumWeight';}, Type: 'Edm.Double', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MaximumWeight1 = { valueOf: function(){return 'MaximumWeight1';}, Type: 'Edm.Double', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MaximumWeightUnit = { valueOf: function(){return 'MaximumWeightUnit';}, Type: 'Edm.Int32', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.MaximumWeightUnit1 = { valueOf: function(){return 'MaximumWeightUnit1';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.RestrictedUoMType = { valueOf: function(){return 'RestrictedUoMType';}, Type: 'BinRestrictUoMEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.SpecificUoM = { valueOf: function(){return 'SpecificUoM';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.SpecificUoMGroup = { valueOf: function(){return 'SpecificUoMGroup';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocation.prototype.AbsEntry = new Number();
SAPB1.BinLocation.prototype.Warehouse = new String();
SAPB1.BinLocation.prototype.Sublevel1 = new String();
SAPB1.BinLocation.prototype.Sublevel2 = new String();
SAPB1.BinLocation.prototype.Sublevel3 = new String();
SAPB1.BinLocation.prototype.Sublevel4 = new String();
SAPB1.BinLocation.prototype.BinCode = new String();
SAPB1.BinLocation.prototype.Inactive = new String();
SAPB1.BinLocation.prototype.Description = new String();
SAPB1.BinLocation.prototype.AlternativeSortCode = new String();
SAPB1.BinLocation.prototype.BarCode = new String();
SAPB1.BinLocation.prototype.Attribute1 = new String();
SAPB1.BinLocation.prototype.Attribute2 = new String();
SAPB1.BinLocation.prototype.Attribute3 = new String();
SAPB1.BinLocation.prototype.Attribute4 = new String();
SAPB1.BinLocation.prototype.Attribute5 = new String();
SAPB1.BinLocation.prototype.Attribute6 = new String();
SAPB1.BinLocation.prototype.Attribute7 = new String();
SAPB1.BinLocation.prototype.Attribute8 = new String();
SAPB1.BinLocation.prototype.Attribute9 = new String();
SAPB1.BinLocation.prototype.Attribute10 = new String();
SAPB1.BinLocation.prototype.RestrictedItemType = new String();
SAPB1.BinLocation.prototype.SpecificItem = new String();
SAPB1.BinLocation.prototype.SpecificItemGroup = new Number();
SAPB1.BinLocation.prototype.BatchRestrictions = new String();
SAPB1.BinLocation.prototype.RestrictedTransType = new String();
SAPB1.BinLocation.prototype.RestrictionReason = new String();
SAPB1.BinLocation.prototype.DateRestrictionChanged = new String();
SAPB1.BinLocation.prototype.MinimumQty = new Number();
SAPB1.BinLocation.prototype.MaximumQty = new Number();
SAPB1.BinLocation.prototype.IsSystemBin = new String();
SAPB1.BinLocation.prototype.ReceivingBinLocation = new String();
SAPB1.BinLocation.prototype.ExcludeAutoAllocOnIssue = new String();
SAPB1.BinLocation.prototype.MaximumWeight = new Number();
SAPB1.BinLocation.prototype.MaximumWeight1 = new Number();
SAPB1.BinLocation.prototype.MaximumWeightUnit = new Number();
SAPB1.BinLocation.prototype.MaximumWeightUnit1 = new Number();
SAPB1.BinLocation.prototype.RestrictedUoMType = new String();
SAPB1.BinLocation.prototype.SpecificUoM = new Number();
SAPB1.BinLocation.prototype.SpecificUoMGroup = new Number();


SAPB1.BinLocation.BoYesNoEnum = BoYesNoEnum
SAPB1.BinLocation.BinRestrictItemEnum = BinRestrictItemEnum
SAPB1.BinLocation.BinRestrictionBatchEnum = BinRestrictionBatchEnum
SAPB1.BinLocation.BinRestrictTransactionEnum = BinRestrictTransactionEnum
SAPB1.BinLocation.BinRestrictUoMEnum = BinRestrictUoMEnum

SAPB1.BinLocation.create = function (rawObject) {
    var instance = new SAPB1.BinLocation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BinLocation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BinLocation;
