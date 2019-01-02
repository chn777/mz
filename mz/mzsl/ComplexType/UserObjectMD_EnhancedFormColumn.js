
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserObjectMD_EnhancedFormColumn = function () {
}
SAPB1.UserObjectMD_EnhancedFormColumn.prototype = new SAPB1.ComplexType();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.constructor = SAPB1.UserObjectMD_EnhancedFormColumn;
SAPB1.UserObjectMD_EnhancedFormColumn.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.ColumnNumber = { valueOf: function(){return 'ColumnNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.ChildNumber = { valueOf: function(){return 'ChildNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.ColumnAlias = { valueOf: function(){return 'ColumnAlias';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.ColumnDescription = { valueOf: function(){return 'ColumnDescription';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.ColumnIsUsed = { valueOf: function(){return 'ColumnIsUsed';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.Editable = { valueOf: function(){return 'Editable';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.Code = new String();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.ColumnNumber = new Number();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.ChildNumber = new Number();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.ColumnAlias = new String();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.ColumnDescription = new String();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.ColumnIsUsed = new String();
SAPB1.UserObjectMD_EnhancedFormColumn.prototype.Editable = new String();


SAPB1.UserObjectMD_EnhancedFormColumn.BoYesNoEnum = BoYesNoEnum

SAPB1.UserObjectMD_EnhancedFormColumn.create = function (rawObject) {
    var instance = new SAPB1.UserObjectMD_EnhancedFormColumn();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserObjectMD_EnhancedFormColumn.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserObjectMD_EnhancedFormColumn;
