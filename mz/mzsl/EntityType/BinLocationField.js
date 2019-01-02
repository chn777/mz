
var BinLocationFieldTypeEnum = require('EnumType/BinLocationFieldTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BinLocationField = function () {
}
SAPB1.BinLocationField.prototype = new SAPB1.EntityType();
SAPB1.BinLocationField.prototype.constructor = SAPB1.BinLocationField;
SAPB1.BinLocationField.prototype.keys.push('AbsEntry');
SAPB1.BinLocationField.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.FieldType = { valueOf: function(){return 'FieldType';}, Type: 'BinLocationFieldTypeEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.FieldNumber = { valueOf: function(){return 'FieldNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.Activated = { valueOf: function(){return 'Activated';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.DefaultFieldName = { valueOf: function(){return 'DefaultFieldName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationField.prototype.AbsEntry = new Number();
SAPB1.BinLocationField.prototype.FieldType = new String();
SAPB1.BinLocationField.prototype.FieldNumber = new Number();
SAPB1.BinLocationField.prototype.Name = new String();
SAPB1.BinLocationField.prototype.Activated = new String();
SAPB1.BinLocationField.prototype.DefaultFieldName = new String();


SAPB1.BinLocationField.BinLocationFieldTypeEnum = BinLocationFieldTypeEnum
SAPB1.BinLocationField.BoYesNoEnum = BoYesNoEnum

SAPB1.BinLocationField.create = function (rawObject) {
    var instance = new SAPB1.BinLocationField();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BinLocationField.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BinLocationField;
