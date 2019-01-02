var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ServiceCallSolutionCollection = function () {
}

SAPB1.ServiceCallSolutionCollection.prototype = new SAPB1.Collection();
SAPB1.ServiceCallSolutionCollection.prototype.constructor = SAPB1.ServiceCallSolutionCollection;
//override the default one.    
SAPB1.ServiceCallSolutionCollection.get = function (index) {
    return SAPB1.ServiceCallSolution.create(this.array[index]);
}

SAPB1.ServiceCallSolutionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ServiceCallSolutionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ServiceCallSolution.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ServiceCallSolutionCollection;
