

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitySourceSetup = function () {
}
SAPB1.SalesOpportunitySourceSetup.prototype = new SAPB1.EntityType();
SAPB1.SalesOpportunitySourceSetup.prototype.constructor = SAPB1.SalesOpportunitySourceSetup;
SAPB1.SalesOpportunitySourceSetup.prototype.keys.push('SequenceNo');
SAPB1.SalesOpportunitySourceSetup.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitySourceSetup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitySourceSetup.Sort = { valueOf: function(){return 'Sort';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitySourceSetup.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunitySourceSetup.prototype.Description = new String();
SAPB1.SalesOpportunitySourceSetup.prototype.Sort = new Number();



SAPB1.SalesOpportunitySourceSetup.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitySourceSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitySourceSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitySourceSetup;
