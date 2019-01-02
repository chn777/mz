
var ResourceCapacityTypeEnum = require('EnumType/ResourceCapacityTypeEnum')
var ResourceCapacitySourceTypeEnum = require('EnumType/ResourceCapacitySourceTypeEnum')
var ResourceCapacityBaseTypeEnum = require('EnumType/ResourceCapacityBaseTypeEnum')
var ResourceCapacityActionEnum = require('EnumType/ResourceCapacityActionEnum')
var ResourceCapacityOwningTypeEnum = require('EnumType/ResourceCapacityOwningTypeEnum')
var ResourceCapacityRevertedTypeEnum = require('EnumType/ResourceCapacityRevertedTypeEnum')
var ResourceCapacityMemoSourceEnum = require('EnumType/ResourceCapacityMemoSourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceCapacityParams = function () {
}
SAPB1.ResourceCapacityParams.prototype = new SAPB1.ComplexType();
SAPB1.ResourceCapacityParams.prototype.constructor = SAPB1.ResourceCapacityParams;
SAPB1.ResourceCapacityParams.Id = { valueOf: function(){return 'Id';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Type = { valueOf: function(){return 'Type';}, Type: 'ResourceCapacityTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Capacity = { valueOf: function(){return 'Capacity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SourceType = { valueOf: function(){return 'SourceType';}, Type: 'ResourceCapacitySourceTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SourceEntry = { valueOf: function(){return 'SourceEntry';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SourceLineNum = { valueOf: function(){return 'SourceLineNum';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'ResourceCapacityBaseTypeEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.BaseLineNum = { valueOf: function(){return 'BaseLineNum';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Action = { valueOf: function(){return 'Action';}, Type: 'ResourceCapacityActionEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.OwningType = { valueOf: function(){return 'OwningType';}, Type: 'ResourceCapacityOwningTypeEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.OwningEntry = { valueOf: function(){return 'OwningEntry';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.OwningLineNum = { valueOf: function(){return 'OwningLineNum';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.RevertedType = { valueOf: function(){return 'RevertedType';}, Type: 'ResourceCapacityRevertedTypeEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.RevertedEntry = { valueOf: function(){return 'RevertedEntry';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.RevertedLineNum = { valueOf: function(){return 'RevertedLineNum';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.MemoSource = { valueOf: function(){return 'MemoSource';}, Type: 'ResourceCapacityMemoSourceEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.Memo = { valueOf: function(){return 'Memo';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SingleRunCapacity = { valueOf: function(){return 'SingleRunCapacity';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SingleRunMemoSource = { valueOf: function(){return 'SingleRunMemoSource';}, Type: 'ResourceCapacityMemoSourceEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.SingleRunMemo = { valueOf: function(){return 'SingleRunMemo';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityParams.prototype.Id = new Number();
SAPB1.ResourceCapacityParams.prototype.Code = new String();
SAPB1.ResourceCapacityParams.prototype.Warehouse = new String();
SAPB1.ResourceCapacityParams.prototype.Date = new String();
SAPB1.ResourceCapacityParams.prototype.Type = new String();
SAPB1.ResourceCapacityParams.prototype.Capacity = new Number();
SAPB1.ResourceCapacityParams.prototype.SourceType = new String();
SAPB1.ResourceCapacityParams.prototype.SourceEntry = new Number();
SAPB1.ResourceCapacityParams.prototype.SourceLineNum = new Number();
SAPB1.ResourceCapacityParams.prototype.BaseType = new String();
SAPB1.ResourceCapacityParams.prototype.BaseEntry = new Number();
SAPB1.ResourceCapacityParams.prototype.BaseLineNum = new Number();
SAPB1.ResourceCapacityParams.prototype.Action = new String();
SAPB1.ResourceCapacityParams.prototype.OwningType = new String();
SAPB1.ResourceCapacityParams.prototype.OwningEntry = new Number();
SAPB1.ResourceCapacityParams.prototype.OwningLineNum = new Number();
SAPB1.ResourceCapacityParams.prototype.RevertedType = new String();
SAPB1.ResourceCapacityParams.prototype.RevertedEntry = new Number();
SAPB1.ResourceCapacityParams.prototype.RevertedLineNum = new Number();
SAPB1.ResourceCapacityParams.prototype.MemoSource = new String();
SAPB1.ResourceCapacityParams.prototype.Memo = new String();
SAPB1.ResourceCapacityParams.prototype.SingleRunCapacity = new Number();
SAPB1.ResourceCapacityParams.prototype.SingleRunMemoSource = new String();
SAPB1.ResourceCapacityParams.prototype.SingleRunMemo = new String();


SAPB1.ResourceCapacityParams.ResourceCapacityTypeEnum = ResourceCapacityTypeEnum
SAPB1.ResourceCapacityParams.ResourceCapacitySourceTypeEnum = ResourceCapacitySourceTypeEnum
SAPB1.ResourceCapacityParams.ResourceCapacityBaseTypeEnum = ResourceCapacityBaseTypeEnum
SAPB1.ResourceCapacityParams.ResourceCapacityActionEnum = ResourceCapacityActionEnum
SAPB1.ResourceCapacityParams.ResourceCapacityOwningTypeEnum = ResourceCapacityOwningTypeEnum
SAPB1.ResourceCapacityParams.ResourceCapacityRevertedTypeEnum = ResourceCapacityRevertedTypeEnum
SAPB1.ResourceCapacityParams.ResourceCapacityMemoSourceEnum = ResourceCapacityMemoSourceEnum

SAPB1.ResourceCapacityParams.create = function (rawObject) {
    var instance = new SAPB1.ResourceCapacityParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceCapacityParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceCapacityParams;
