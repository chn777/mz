var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.GovPayCodeAuthorityCollection = function () {
}

SAPB1.GovPayCodeAuthorityCollection.prototype = new SAPB1.Collection();
SAPB1.GovPayCodeAuthorityCollection.prototype.constructor = SAPB1.GovPayCodeAuthorityCollection;
//override the default one.    
SAPB1.GovPayCodeAuthorityCollection.get = function (index) {
    return SAPB1.GovPayCodeAuthority.create(this.array[index]);
}

SAPB1.GovPayCodeAuthorityCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.GovPayCodeAuthorityCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.GovPayCodeAuthority.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.GovPayCodeAuthorityCollection;
