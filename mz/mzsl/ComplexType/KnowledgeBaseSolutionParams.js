

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.KnowledgeBaseSolutionParams = function () {
}
SAPB1.KnowledgeBaseSolutionParams.prototype = new SAPB1.ComplexType();
SAPB1.KnowledgeBaseSolutionParams.prototype.constructor = SAPB1.KnowledgeBaseSolutionParams;
SAPB1.KnowledgeBaseSolutionParams.SolutionCode = { valueOf: function(){return 'SolutionCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolutionParams.prototype.SolutionCode = new Number();



SAPB1.KnowledgeBaseSolutionParams.create = function (rawObject) {
    var instance = new SAPB1.KnowledgeBaseSolutionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.KnowledgeBaseSolutionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.KnowledgeBaseSolutionParams;
