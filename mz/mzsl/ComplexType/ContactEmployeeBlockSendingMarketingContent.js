
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ContactEmployeeBlockSendingMarketingContent = function () {
}
SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype = new SAPB1.ComplexType();
SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype.constructor = SAPB1.ContactEmployeeBlockSendingMarketingContent;
SAPB1.ContactEmployeeBlockSendingMarketingContent.ContactEmployeeAbsEntry = { valueOf: function(){return 'ContactEmployeeAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployeeBlockSendingMarketingContent.CommunicationMediaId = { valueOf: function(){return 'CommunicationMediaId';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployeeBlockSendingMarketingContent.Choose = { valueOf: function(){return 'Choose';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype.ContactEmployeeAbsEntry = new Number();
SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype.CommunicationMediaId = new Number();
SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype.Choose = new String();


SAPB1.ContactEmployeeBlockSendingMarketingContent.BoYesNoEnum = BoYesNoEnum

SAPB1.ContactEmployeeBlockSendingMarketingContent.create = function (rawObject) {
    var instance = new SAPB1.ContactEmployeeBlockSendingMarketingContent();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ContactEmployeeBlockSendingMarketingContent.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ContactEmployeeBlockSendingMarketingContent;
