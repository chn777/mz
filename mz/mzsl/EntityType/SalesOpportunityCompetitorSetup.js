
var ThreatLevelEnum = require('EnumType/ThreatLevelEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunityCompetitorSetup = function () {
}
SAPB1.SalesOpportunityCompetitorSetup.prototype = new SAPB1.EntityType();
SAPB1.SalesOpportunityCompetitorSetup.prototype.constructor = SAPB1.SalesOpportunityCompetitorSetup;
SAPB1.SalesOpportunityCompetitorSetup.prototype.keys.push('SequenceNo');
SAPB1.SalesOpportunityCompetitorSetup.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetup.ThreatLevel = { valueOf: function(){return 'ThreatLevel';}, Type: 'ThreatLevelEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetup.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetup.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunityCompetitorSetup.prototype.Name = new String();
SAPB1.SalesOpportunityCompetitorSetup.prototype.ThreatLevel = new String();
SAPB1.SalesOpportunityCompetitorSetup.prototype.Details = new String();


SAPB1.SalesOpportunityCompetitorSetup.ThreatLevelEnum = ThreatLevelEnum

SAPB1.SalesOpportunityCompetitorSetup.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunityCompetitorSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunityCompetitorSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunityCompetitorSetup;
