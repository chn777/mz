
var ElectronicDocProtocolCodeEnum = require('EnumType/ElectronicDocProtocolCodeEnum')
var ElectronicDocGenTypeEnum = require('EnumType/ElectronicDocGenTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ElectronicProtocol = function () {
}
SAPB1.ElectronicProtocol.prototype = new SAPB1.ComplexType();
SAPB1.ElectronicProtocol.prototype.constructor = SAPB1.ElectronicProtocol;
SAPB1.ElectronicProtocol.ProtocolCode = { valueOf: function(){return 'ProtocolCode';}, Type: 'ElectronicDocProtocolCodeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicProtocol.GenerationType = { valueOf: function(){return 'GenerationType';}, Type: 'ElectronicDocGenTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicProtocol.MappingID = { valueOf: function(){return 'MappingID';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicProtocol.TestingMode = { valueOf: function(){return 'TestingMode';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicProtocol.prototype.ProtocolCode = new String();
SAPB1.ElectronicProtocol.prototype.GenerationType = new String();
SAPB1.ElectronicProtocol.prototype.MappingID = new Number();
SAPB1.ElectronicProtocol.prototype.TestingMode = new String();


SAPB1.ElectronicProtocol.ElectronicDocProtocolCodeEnum = ElectronicDocProtocolCodeEnum
SAPB1.ElectronicProtocol.ElectronicDocGenTypeEnum = ElectronicDocGenTypeEnum
SAPB1.ElectronicProtocol.BoYesNoEnum = BoYesNoEnum

SAPB1.ElectronicProtocol.create = function (rawObject) {
    var instance = new SAPB1.ElectronicProtocol();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ElectronicProtocol.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ElectronicProtocol;
