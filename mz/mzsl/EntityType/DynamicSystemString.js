
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DynamicSystemString = function () {
}
SAPB1.DynamicSystemString.prototype = new SAPB1.EntityType();
SAPB1.DynamicSystemString.prototype.constructor = SAPB1.DynamicSystemString;
SAPB1.DynamicSystemString.prototype.keys.push('FormID','ItemID','ColumnID');
SAPB1.DynamicSystemString.FormID = { valueOf: function(){return 'FormID';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.ItemID = { valueOf: function(){return 'ItemID';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.ColumnID = { valueOf: function(){return 'ColumnID';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.ItemString = { valueOf: function(){return 'ItemString';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.IsBold = { valueOf: function(){return 'IsBold';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.IsItalics = { valueOf: function(){return 'IsItalics';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemString.prototype.FormID = new String();
SAPB1.DynamicSystemString.prototype.ItemID = new String();
SAPB1.DynamicSystemString.prototype.ColumnID = new String();
SAPB1.DynamicSystemString.prototype.ItemString = new String();
SAPB1.DynamicSystemString.prototype.IsBold = new String();
SAPB1.DynamicSystemString.prototype.IsItalics = new String();


SAPB1.DynamicSystemString.BoYesNoEnum = BoYesNoEnum

SAPB1.DynamicSystemString.create = function (rawObject) {
    var instance = new SAPB1.DynamicSystemString();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DynamicSystemString.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DynamicSystemString;
