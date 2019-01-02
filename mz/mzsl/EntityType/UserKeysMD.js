var UserKeysMD_Element = require('ComplexType/UserKeysMD_Element')
var UserKeysMD_ElementCollection = require('ComplexType/UserKeysMD_ElementCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserKeysMD = function () {
}
SAPB1.UserKeysMD.prototype = new SAPB1.EntityType();
SAPB1.UserKeysMD.prototype.constructor = SAPB1.UserKeysMD;
SAPB1.UserKeysMD.prototype.keys.push('TableName','KeyIndex');
SAPB1.UserKeysMD.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD.KeyIndex = { valueOf: function(){return 'KeyIndex';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD.KeyName = { valueOf: function(){return 'KeyName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD.Unique = { valueOf: function(){return 'Unique';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD.UserKeysMD_Elements = { valueOf: function(){return 'UserKeysMD_Elements';}, Type: 'UserKeysMD_Element', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserKeysMD.prototype.TableName = new String();
SAPB1.UserKeysMD.prototype.KeyIndex = new Number();
SAPB1.UserKeysMD.prototype.KeyName = new String();
SAPB1.UserKeysMD.prototype.Unique = new String();
SAPB1.UserKeysMD.prototype.UserKeysMD_Elements = new UserKeysMD_ElementCollection();

SAPB1.UserKeysMD.UserKeysMD_Element = UserKeysMD_Element
SAPB1.UserKeysMD.UserKeysMD_ElementCollection = UserKeysMD_ElementCollection

SAPB1.UserKeysMD.BoYesNoEnum = BoYesNoEnum

SAPB1.UserKeysMD.create = function (rawObject) {
    var instance = new SAPB1.UserKeysMD();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserKeysMD.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserKeysMD;
