
var AttributeGroupFieldTypeEnum = require('EnumType/AttributeGroupFieldTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AttributeGroupLine = function () {
}
SAPB1.AttributeGroupLine.prototype = new SAPB1.ComplexType();
SAPB1.AttributeGroupLine.prototype.constructor = SAPB1.AttributeGroupLine;
SAPB1.AttributeGroupLine.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.SortNumber = { valueOf: function(){return 'SortNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.AttributeID = { valueOf: function(){return 'AttributeID';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.AttributeName = { valueOf: function(){return 'AttributeName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.FieldType = { valueOf: function(){return 'FieldType';}, Type: 'AttributeGroupFieldTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.DefaultValue = { valueOf: function(){return 'DefaultValue';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AttributeGroupLine.prototype.Code = new Number();
SAPB1.AttributeGroupLine.prototype.SortNumber = new Number();
SAPB1.AttributeGroupLine.prototype.AttributeID = new Number();
SAPB1.AttributeGroupLine.prototype.AttributeName = new String();
SAPB1.AttributeGroupLine.prototype.FieldType = new String();
SAPB1.AttributeGroupLine.prototype.DefaultValue = new String();


SAPB1.AttributeGroupLine.AttributeGroupFieldTypeEnum = AttributeGroupFieldTypeEnum

SAPB1.AttributeGroupLine.create = function (rawObject) {
    var instance = new SAPB1.AttributeGroupLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AttributeGroupLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AttributeGroupLine;
