
var ResourceCapacityTypeEnum = require('EnumType/ResourceCapacityTypeEnum')
var ResourceCapacitySourceTypeEnum = require('EnumType/ResourceCapacitySourceTypeEnum')
var ResourceCapacityBaseTypeEnum = require('EnumType/ResourceCapacityBaseTypeEnum')
var ResourceCapacityActionEnum = require('EnumType/ResourceCapacityActionEnum')
var ResourceCapacityOwningTypeEnum = require('EnumType/ResourceCapacityOwningTypeEnum')
var ResourceCapacityRevertedTypeEnum = require('EnumType/ResourceCapacityRevertedTypeEnum')
var ResourceCapacityMemoSourceEnum = require('EnumType/ResourceCapacityMemoSourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceCapacity = function () {
}
SAPB1.ResourceCapacity.prototype = new SAPB1.EntityType();
SAPB1.ResourceCapacity.prototype.constructor = SAPB1.ResourceCapacity;
SAPB1.ResourceCapacity.prototype.keys.push('Id');
SAPB1.ResourceCapacity.Id = { valueOf: function(){return 'Id';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Type = { valueOf: function(){return 'Type';}, Type: 'ResourceCapacityTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Capacity = { valueOf: function(){return 'Capacity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SourceType = { valueOf: function(){return 'SourceType';}, Type: 'ResourceCapacitySourceTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SourceEntry = { valueOf: function(){return 'SourceEntry';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SourceLineNum = { valueOf: function(){return 'SourceLineNum';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'ResourceCapacityBaseTypeEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.BaseLineNum = { valueOf: function(){return 'BaseLineNum';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Action = { valueOf: function(){return 'Action';}, Type: 'ResourceCapacityActionEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.OwningType = { valueOf: function(){return 'OwningType';}, Type: 'ResourceCapacityOwningTypeEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.OwningEntry = { valueOf: function(){return 'OwningEntry';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.OwningLineNum = { valueOf: function(){return 'OwningLineNum';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.RevertedType = { valueOf: function(){return 'RevertedType';}, Type: 'ResourceCapacityRevertedTypeEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.RevertedEntry = { valueOf: function(){return 'RevertedEntry';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.RevertedLineNum = { valueOf: function(){return 'RevertedLineNum';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.MemoSource = { valueOf: function(){return 'MemoSource';}, Type: 'ResourceCapacityMemoSourceEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.Memo = { valueOf: function(){return 'Memo';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SingleRunCapacity = { valueOf: function(){return 'SingleRunCapacity';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SingleRunMemoSource = { valueOf: function(){return 'SingleRunMemoSource';}, Type: 'ResourceCapacityMemoSourceEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.SingleRunMemo = { valueOf: function(){return 'SingleRunMemo';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacity.prototype.Id = new Number();
SAPB1.ResourceCapacity.prototype.Code = new String();
SAPB1.ResourceCapacity.prototype.Warehouse = new String();
SAPB1.ResourceCapacity.prototype.Date = new String();
SAPB1.ResourceCapacity.prototype.Type = new String();
SAPB1.ResourceCapacity.prototype.Capacity = new Number();
SAPB1.ResourceCapacity.prototype.SourceType = new String();
SAPB1.ResourceCapacity.prototype.SourceEntry = new Number();
SAPB1.ResourceCapacity.prototype.SourceLineNum = new Number();
SAPB1.ResourceCapacity.prototype.BaseType = new String();
SAPB1.ResourceCapacity.prototype.BaseEntry = new Number();
SAPB1.ResourceCapacity.prototype.BaseLineNum = new Number();
SAPB1.ResourceCapacity.prototype.Action = new String();
SAPB1.ResourceCapacity.prototype.OwningType = new String();
SAPB1.ResourceCapacity.prototype.OwningEntry = new Number();
SAPB1.ResourceCapacity.prototype.OwningLineNum = new Number();
SAPB1.ResourceCapacity.prototype.RevertedType = new String();
SAPB1.ResourceCapacity.prototype.RevertedEntry = new Number();
SAPB1.ResourceCapacity.prototype.RevertedLineNum = new Number();
SAPB1.ResourceCapacity.prototype.MemoSource = new String();
SAPB1.ResourceCapacity.prototype.Memo = new String();
SAPB1.ResourceCapacity.prototype.SingleRunCapacity = new Number();
SAPB1.ResourceCapacity.prototype.SingleRunMemoSource = new String();
SAPB1.ResourceCapacity.prototype.SingleRunMemo = new String();


SAPB1.ResourceCapacity.ResourceCapacityTypeEnum = ResourceCapacityTypeEnum
SAPB1.ResourceCapacity.ResourceCapacitySourceTypeEnum = ResourceCapacitySourceTypeEnum
SAPB1.ResourceCapacity.ResourceCapacityBaseTypeEnum = ResourceCapacityBaseTypeEnum
SAPB1.ResourceCapacity.ResourceCapacityActionEnum = ResourceCapacityActionEnum
SAPB1.ResourceCapacity.ResourceCapacityOwningTypeEnum = ResourceCapacityOwningTypeEnum
SAPB1.ResourceCapacity.ResourceCapacityRevertedTypeEnum = ResourceCapacityRevertedTypeEnum
SAPB1.ResourceCapacity.ResourceCapacityMemoSourceEnum = ResourceCapacityMemoSourceEnum

SAPB1.ResourceCapacity.create = function (rawObject) {
    var instance = new SAPB1.ResourceCapacity();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceCapacity.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceCapacity;
