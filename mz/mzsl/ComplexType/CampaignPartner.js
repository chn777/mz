

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CampaignPartner = function () {
}
SAPB1.CampaignPartner.prototype = new SAPB1.ComplexType();
SAPB1.CampaignPartner.prototype.constructor = SAPB1.CampaignPartner;
SAPB1.CampaignPartner.CampaignNumber = { valueOf: function(){return 'CampaignNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.CampaignLineNumber = { valueOf: function(){return 'CampaignLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.PartnerID = { valueOf: function(){return 'PartnerID';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.RelationshipCode = { valueOf: function(){return 'RelationshipCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.RelatedBP = { valueOf: function(){return 'RelatedBP';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignPartner.prototype.CampaignNumber = new Number();
SAPB1.CampaignPartner.prototype.CampaignLineNumber = new Number();
SAPB1.CampaignPartner.prototype.PartnerID = new Number();
SAPB1.CampaignPartner.prototype.RelationshipCode = new Number();
SAPB1.CampaignPartner.prototype.RelatedBP = new String();
SAPB1.CampaignPartner.prototype.Details = new String();



SAPB1.CampaignPartner.create = function (rawObject) {
    var instance = new SAPB1.CampaignPartner();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CampaignPartner.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CampaignPartner;
