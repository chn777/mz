
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPBlockSendingMarketingContent = function () {
}
SAPB1.BPBlockSendingMarketingContent.prototype = new SAPB1.ComplexType();
SAPB1.BPBlockSendingMarketingContent.prototype.constructor = SAPB1.BPBlockSendingMarketingContent;
SAPB1.BPBlockSendingMarketingContent.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPBlockSendingMarketingContent.CommunicationMediaId = { valueOf: function(){return 'CommunicationMediaId';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBlockSendingMarketingContent.Choose = { valueOf: function(){return 'Choose';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBlockSendingMarketingContent.prototype.CardCode = new String();
SAPB1.BPBlockSendingMarketingContent.prototype.CommunicationMediaId = new Number();
SAPB1.BPBlockSendingMarketingContent.prototype.Choose = new String();


SAPB1.BPBlockSendingMarketingContent.BoYesNoEnum = BoYesNoEnum

SAPB1.BPBlockSendingMarketingContent.create = function (rawObject) {
    var instance = new SAPB1.BPBlockSendingMarketingContent();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPBlockSendingMarketingContent.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPBlockSendingMarketingContent;
