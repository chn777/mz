var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UoMGroupDefinitionCollection = function () {
}

SAPB1.UoMGroupDefinitionCollection.prototype = new SAPB1.Collection();
SAPB1.UoMGroupDefinitionCollection.prototype.constructor = SAPB1.UoMGroupDefinitionCollection;
//override the default one.    
SAPB1.UoMGroupDefinitionCollection.get = function (index) {
    return SAPB1.UoMGroupDefinition.create(this.array[index]);
}

SAPB1.UoMGroupDefinitionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UoMGroupDefinitionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UoMGroupDefinition.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UoMGroupDefinitionCollection;
