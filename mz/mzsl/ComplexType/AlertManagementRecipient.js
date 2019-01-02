
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlertManagementRecipient = function () {
}
SAPB1.AlertManagementRecipient.prototype = new SAPB1.ComplexType();
SAPB1.AlertManagementRecipient.prototype.constructor = SAPB1.AlertManagementRecipient;
SAPB1.AlertManagementRecipient.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementRecipient.SendEMail = { valueOf: function(){return 'SendEMail';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementRecipient.SendSMS = { valueOf: function(){return 'SendSMS';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementRecipient.SendFax = { valueOf: function(){return 'SendFax';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementRecipient.SendInternal = { valueOf: function(){return 'SendInternal';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementRecipient.prototype.UserCode = new Number();
SAPB1.AlertManagementRecipient.prototype.SendEMail = new String();
SAPB1.AlertManagementRecipient.prototype.SendSMS = new String();
SAPB1.AlertManagementRecipient.prototype.SendFax = new String();
SAPB1.AlertManagementRecipient.prototype.SendInternal = new String();


SAPB1.AlertManagementRecipient.BoYesNoEnum = BoYesNoEnum

SAPB1.AlertManagementRecipient.create = function (rawObject) {
    var instance = new SAPB1.AlertManagementRecipient();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlertManagementRecipient.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlertManagementRecipient;
