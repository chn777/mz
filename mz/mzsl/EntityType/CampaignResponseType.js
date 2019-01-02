
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CampaignResponseType = function () {
}
SAPB1.CampaignResponseType.prototype = new SAPB1.EntityType();
SAPB1.CampaignResponseType.prototype.constructor = SAPB1.CampaignResponseType;
SAPB1.CampaignResponseType.prototype.keys.push('ResponseType');
SAPB1.CampaignResponseType.ResponseTypeDescription = { valueOf: function(){return 'ResponseTypeDescription';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseType.ResponseType = { valueOf: function(){return 'ResponseType';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseType.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseType.prototype.ResponseTypeDescription = new String();
SAPB1.CampaignResponseType.prototype.ResponseType = new String();
SAPB1.CampaignResponseType.prototype.IsActive = new String();


SAPB1.CampaignResponseType.BoYesNoEnum = BoYesNoEnum

SAPB1.CampaignResponseType.create = function (rawObject) {
    var instance = new SAPB1.CampaignResponseType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CampaignResponseType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CampaignResponseType;
