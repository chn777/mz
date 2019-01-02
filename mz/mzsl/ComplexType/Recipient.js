
var BoMsgRcpTypes = require('EnumType/BoMsgRcpTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Recipient = function () {
}
SAPB1.Recipient.prototype = new SAPB1.ComplexType();
SAPB1.Recipient.prototype.constructor = SAPB1.Recipient;
SAPB1.Recipient.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.UserType = { valueOf: function(){return 'UserType';}, Type: 'BoMsgRcpTypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.NameTo = { valueOf: function(){return 'NameTo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.SendEmail = { valueOf: function(){return 'SendEmail';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.EmailAddress = { valueOf: function(){return 'EmailAddress';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.SendSMS = { valueOf: function(){return 'SendSMS';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.CellularNumber = { valueOf: function(){return 'CellularNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.SendFax = { valueOf: function(){return 'SendFax';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.FaxNumber = { valueOf: function(){return 'FaxNumber';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.SendInternal = { valueOf: function(){return 'SendInternal';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Recipient.prototype.UserCode = new String();
SAPB1.Recipient.prototype.UserType = new String();
SAPB1.Recipient.prototype.NameTo = new String();
SAPB1.Recipient.prototype.SendEmail = new String();
SAPB1.Recipient.prototype.EmailAddress = new String();
SAPB1.Recipient.prototype.SendSMS = new String();
SAPB1.Recipient.prototype.CellularNumber = new String();
SAPB1.Recipient.prototype.SendFax = new String();
SAPB1.Recipient.prototype.FaxNumber = new String();
SAPB1.Recipient.prototype.SendInternal = new String();


SAPB1.Recipient.BoMsgRcpTypes = BoMsgRcpTypes
SAPB1.Recipient.BoYesNoEnum = BoYesNoEnum

SAPB1.Recipient.create = function (rawObject) {
    var instance = new SAPB1.Recipient();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Recipient.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Recipient;
