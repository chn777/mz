var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxDefinitionCollection = function () {
}

SAPB1.TaxDefinitionCollection.prototype = new SAPB1.Collection();
SAPB1.TaxDefinitionCollection.prototype.constructor = SAPB1.TaxDefinitionCollection;
//override the default one.    
SAPB1.TaxDefinitionCollection.get = function (index) {
    return SAPB1.TaxDefinition.create(this.array[index]);
}

SAPB1.TaxDefinitionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxDefinitionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxDefinition.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxDefinitionCollection;
