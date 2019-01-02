var AttributeGroupLine = require('ComplexType/AttributeGroupLine')
var AttributeGroupLineCollection = require('ComplexType/AttributeGroupLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AttributeGroup = function () {
}
SAPB1.AttributeGroup.prototype = new SAPB1.EntityType();
SAPB1.AttributeGroup.prototype.constructor = SAPB1.AttributeGroup;
SAPB1.AttributeGroup.prototype.keys.push('Code');
SAPB1.AttributeGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AttributeGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AttributeGroup.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroup.AttributeGroupCollection = { valueOf: function(){return 'AttributeGroupCollection';}, Type: 'AttributeGroupLine', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AttributeGroup.prototype.Code = new Number();
SAPB1.AttributeGroup.prototype.Name = new String();
SAPB1.AttributeGroup.prototype.Locked = new String();
SAPB1.AttributeGroup.prototype.AttributeGroupCollection = new AttributeGroupLineCollection();

SAPB1.AttributeGroup.AttributeGroupLine = AttributeGroupLine
SAPB1.AttributeGroup.AttributeGroupLineCollection = AttributeGroupLineCollection

SAPB1.AttributeGroup.BoYesNoEnum = BoYesNoEnum

SAPB1.AttributeGroup.create = function (rawObject) {
    var instance = new SAPB1.AttributeGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AttributeGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AttributeGroup;
