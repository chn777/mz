

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitiesParams = function () {
}
SAPB1.SalesOpportunitiesParams.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitiesParams.prototype.constructor = SAPB1.SalesOpportunitiesParams;
SAPB1.SalesOpportunitiesParams.SequentialNo = { valueOf: function(){return 'SequentialNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesParams.prototype.SequentialNo = new Number();



SAPB1.SalesOpportunitiesParams.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitiesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitiesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitiesParams;
