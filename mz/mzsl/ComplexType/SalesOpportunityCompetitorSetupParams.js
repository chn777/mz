
var ThreatLevelEnum = require('EnumType/ThreatLevelEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunityCompetitorSetupParams = function () {
}
SAPB1.SalesOpportunityCompetitorSetupParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunityCompetitorSetupParams.prototype.constructor = SAPB1.SalesOpportunityCompetitorSetupParams;
SAPB1.SalesOpportunityCompetitorSetupParams.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetupParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetupParams.ThreatLevel = { valueOf: function(){return 'ThreatLevel';}, Type: 'ThreatLevelEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityCompetitorSetupParams.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunityCompetitorSetupParams.prototype.Name = new String();
SAPB1.SalesOpportunityCompetitorSetupParams.prototype.ThreatLevel = new String();


SAPB1.SalesOpportunityCompetitorSetupParams.ThreatLevelEnum = ThreatLevelEnum

SAPB1.SalesOpportunityCompetitorSetupParams.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunityCompetitorSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunityCompetitorSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunityCompetitorSetupParams;
