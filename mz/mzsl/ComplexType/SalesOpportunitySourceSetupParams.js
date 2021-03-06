

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitySourceSetupParams = function () {
}
SAPB1.SalesOpportunitySourceSetupParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitySourceSetupParams.prototype.constructor = SAPB1.SalesOpportunitySourceSetupParams;
SAPB1.SalesOpportunitySourceSetupParams.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitySourceSetupParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitySourceSetupParams.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunitySourceSetupParams.prototype.Description = new String();



SAPB1.SalesOpportunitySourceSetupParams.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitySourceSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitySourceSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitySourceSetupParams;
