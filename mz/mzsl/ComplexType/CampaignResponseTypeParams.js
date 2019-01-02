
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CampaignResponseTypeParams = function () {
}
SAPB1.CampaignResponseTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.CampaignResponseTypeParams.prototype.constructor = SAPB1.CampaignResponseTypeParams;
SAPB1.CampaignResponseTypeParams.ResponseType = { valueOf: function(){return 'ResponseType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseTypeParams.ResponseTypeDescription = { valueOf: function(){return 'ResponseTypeDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseTypeParams.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignResponseTypeParams.prototype.ResponseType = new String();
SAPB1.CampaignResponseTypeParams.prototype.ResponseTypeDescription = new String();
SAPB1.CampaignResponseTypeParams.prototype.IsActive = new String();


SAPB1.CampaignResponseTypeParams.BoYesNoEnum = BoYesNoEnum

SAPB1.CampaignResponseTypeParams.create = function (rawObject) {
    var instance = new SAPB1.CampaignResponseTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CampaignResponseTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CampaignResponseTypeParams;
