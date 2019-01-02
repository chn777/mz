
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserObjectMD_FormColumn = function () {
}
SAPB1.UserObjectMD_FormColumn.prototype = new SAPB1.ComplexType();
SAPB1.UserObjectMD_FormColumn.prototype.constructor = SAPB1.UserObjectMD_FormColumn;
SAPB1.UserObjectMD_FormColumn.FormColumnAlias = { valueOf: function(){return 'FormColumnAlias';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.FormColumnDescription = { valueOf: function(){return 'FormColumnDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.FormColumnNumber = { valueOf: function(){return 'FormColumnNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.SonNumber = { valueOf: function(){return 'SonNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.Editable = { valueOf: function(){return 'Editable';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FormColumn.prototype.FormColumnAlias = new String();
SAPB1.UserObjectMD_FormColumn.prototype.FormColumnDescription = new String();
SAPB1.UserObjectMD_FormColumn.prototype.FormColumnNumber = new Number();
SAPB1.UserObjectMD_FormColumn.prototype.SonNumber = new Number();
SAPB1.UserObjectMD_FormColumn.prototype.Code = new String();
SAPB1.UserObjectMD_FormColumn.prototype.Editable = new String();


SAPB1.UserObjectMD_FormColumn.BoYesNoEnum = BoYesNoEnum

SAPB1.UserObjectMD_FormColumn.create = function (rawObject) {
    var instance = new SAPB1.UserObjectMD_FormColumn();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserObjectMD_FormColumn.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserObjectMD_FormColumn;
