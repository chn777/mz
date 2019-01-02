

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PartnersSetupParams = function () {
}
SAPB1.PartnersSetupParams.prototype = new SAPB1.EntityType();
SAPB1.PartnersSetupParams.prototype.constructor = SAPB1.PartnersSetupParams;
SAPB1.PartnersSetupParams.prototype.keys.push('PartnerID');
SAPB1.PartnersSetupParams.PartnerID = { valueOf: function(){return 'PartnerID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PartnersSetupParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PartnersSetupParams.DefaultRelationship = { valueOf: function(){return 'DefaultRelationship';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetupParams.RelatedBP = { valueOf: function(){return 'RelatedBP';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetupParams.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetupParams.prototype.PartnerID = new Number();
SAPB1.PartnersSetupParams.prototype.Name = new String();
SAPB1.PartnersSetupParams.prototype.DefaultRelationship = new Number();
SAPB1.PartnersSetupParams.prototype.RelatedBP = new String();
SAPB1.PartnersSetupParams.prototype.Details = new String();



SAPB1.PartnersSetupParams.create = function (rawObject) {
    var instance = new SAPB1.PartnersSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PartnersSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PartnersSetupParams;
