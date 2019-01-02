

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallSolution = function () {
}
SAPB1.ServiceCallSolution.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallSolution.prototype.constructor = SAPB1.ServiceCallSolution;
SAPB1.ServiceCallSolution.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolution.SolutionID = { valueOf: function(){return 'SolutionID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallSolution.prototype.LineNum = new Number();
SAPB1.ServiceCallSolution.prototype.SolutionID = new Number();



SAPB1.ServiceCallSolution.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallSolution();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallSolution.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallSolution;
