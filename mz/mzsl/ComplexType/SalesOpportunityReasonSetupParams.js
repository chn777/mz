

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunityReasonSetupParams = function () {
}
SAPB1.SalesOpportunityReasonSetupParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunityReasonSetupParams.prototype.constructor = SAPB1.SalesOpportunityReasonSetupParams;
SAPB1.SalesOpportunityReasonSetupParams.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityReasonSetupParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunityReasonSetupParams.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunityReasonSetupParams.prototype.Description = new String();



SAPB1.SalesOpportunityReasonSetupParams.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunityReasonSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunityReasonSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunityReasonSetupParams;
