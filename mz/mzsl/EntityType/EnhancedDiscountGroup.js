var DiscountGroupLine = require('ComplexType/DiscountGroupLine')
var DiscountGroupLineCollection = require('ComplexType/DiscountGroupLineCollection')

var DiscountGroupTypeEnum = require('EnumType/DiscountGroupTypeEnum')
var DiscountGroupRelationsEnum = require('EnumType/DiscountGroupRelationsEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EnhancedDiscountGroup = function () {
}
SAPB1.EnhancedDiscountGroup.prototype = new SAPB1.EntityType();
SAPB1.EnhancedDiscountGroup.prototype.constructor = SAPB1.EnhancedDiscountGroup;
SAPB1.EnhancedDiscountGroup.prototype.keys.push('AbsEntry');
SAPB1.EnhancedDiscountGroup.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.Type = { valueOf: function(){return 'Type';}, Type: 'DiscountGroupTypeEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.ObjectCode = { valueOf: function(){return 'ObjectCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.DiscountRelations = { valueOf: function(){return 'DiscountRelations';}, Type: 'DiscountGroupRelationsEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EnhancedDiscountGroup.DiscountGroupLineCollection = { valueOf: function(){return 'DiscountGroupLineCollection';}, Type: 'DiscountGroupLine', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.EnhancedDiscountGroup.prototype.AbsEntry = new Number();
SAPB1.EnhancedDiscountGroup.prototype.Type = new String();
SAPB1.EnhancedDiscountGroup.prototype.ObjectCode = new String();
SAPB1.EnhancedDiscountGroup.prototype.DiscountRelations = new String();
SAPB1.EnhancedDiscountGroup.prototype.Active = new String();
SAPB1.EnhancedDiscountGroup.prototype.ValidFrom = new String();
SAPB1.EnhancedDiscountGroup.prototype.ValidTo = new String();
SAPB1.EnhancedDiscountGroup.prototype.DiscountGroupLineCollection = new DiscountGroupLineCollection();

SAPB1.EnhancedDiscountGroup.DiscountGroupLine = DiscountGroupLine
SAPB1.EnhancedDiscountGroup.DiscountGroupLineCollection = DiscountGroupLineCollection

SAPB1.EnhancedDiscountGroup.DiscountGroupTypeEnum = DiscountGroupTypeEnum
SAPB1.EnhancedDiscountGroup.DiscountGroupRelationsEnum = DiscountGroupRelationsEnum
SAPB1.EnhancedDiscountGroup.BoYesNoEnum = BoYesNoEnum

SAPB1.EnhancedDiscountGroup.create = function (rawObject) {
    var instance = new SAPB1.EnhancedDiscountGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EnhancedDiscountGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EnhancedDiscountGroup;
