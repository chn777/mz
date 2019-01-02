var ValidValueMD = require('ComplexType/ValidValueMD')
var ValidValueMDCollection = require('ComplexType/ValidValueMDCollection')

var BoFieldTypes = require('EnumType/BoFieldTypes')
var BoFldSubTypes = require('EnumType/BoFldSubTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var UDFLinkedSystemObjectTypesEnum = require('EnumType/UDFLinkedSystemObjectTypesEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserFieldMD = function () {
}
SAPB1.UserFieldMD.prototype = new SAPB1.EntityType();
SAPB1.UserFieldMD.prototype.constructor = SAPB1.UserFieldMD;
SAPB1.UserFieldMD.prototype.keys.push('TableName','FieldID');
SAPB1.UserFieldMD.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.Type = { valueOf: function(){return 'Type';}, Type: 'BoFieldTypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.Size = { valueOf: function(){return 'Size';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.SubType = { valueOf: function(){return 'SubType';}, Type: 'BoFldSubTypes', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.LinkedTable = { valueOf: function(){return 'LinkedTable';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.DefaultValue = { valueOf: function(){return 'DefaultValue';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 7, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.FieldID = { valueOf: function(){return 'FieldID';}, Type: 'Edm.Int32', Index: 8, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.EditSize = { valueOf: function(){return 'EditSize';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.Mandatory = { valueOf: function(){return 'Mandatory';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.LinkedUDO = { valueOf: function(){return 'LinkedUDO';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.LinkedSystemObject = { valueOf: function(){return 'LinkedSystemObject';}, Type: 'UDFLinkedSystemObjectTypesEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMD.ValidValuesMD = { valueOf: function(){return 'ValidValuesMD';}, Type: 'ValidValueMD', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserFieldMD.prototype.Name = new String();
SAPB1.UserFieldMD.prototype.Type = new String();
SAPB1.UserFieldMD.prototype.Size = new Number();
SAPB1.UserFieldMD.prototype.Description = new String();
SAPB1.UserFieldMD.prototype.SubType = new String();
SAPB1.UserFieldMD.prototype.LinkedTable = new String();
SAPB1.UserFieldMD.prototype.DefaultValue = new String();
SAPB1.UserFieldMD.prototype.TableName = new String();
SAPB1.UserFieldMD.prototype.FieldID = new Number();
SAPB1.UserFieldMD.prototype.EditSize = new Number();
SAPB1.UserFieldMD.prototype.Mandatory = new String();
SAPB1.UserFieldMD.prototype.LinkedUDO = new String();
SAPB1.UserFieldMD.prototype.LinkedSystemObject = new String();
SAPB1.UserFieldMD.prototype.ValidValuesMD = new ValidValueMDCollection();

SAPB1.UserFieldMD.ValidValueMD = ValidValueMD
SAPB1.UserFieldMD.ValidValueMDCollection = ValidValueMDCollection

SAPB1.UserFieldMD.BoFieldTypes = BoFieldTypes
SAPB1.UserFieldMD.BoFldSubTypes = BoFldSubTypes
SAPB1.UserFieldMD.BoYesNoEnum = BoYesNoEnum
SAPB1.UserFieldMD.UDFLinkedSystemObjectTypesEnum = UDFLinkedSystemObjectTypesEnum

SAPB1.UserFieldMD.create = function (rawObject) {
    var instance = new SAPB1.UserFieldMD();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserFieldMD.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserFieldMD;
