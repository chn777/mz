var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.VM_ThirdPartyValuesDataCollection = function () {
}

SAPB1.VM_ThirdPartyValuesDataCollection.prototype = new SAPB1.Collection();
SAPB1.VM_ThirdPartyValuesDataCollection.prototype.constructor = SAPB1.VM_ThirdPartyValuesDataCollection;
//override the default one.    
SAPB1.VM_ThirdPartyValuesDataCollection.get = function (index) {
    return SAPB1.VM_ThirdPartyValuesData.create(this.array[index]);
}

SAPB1.VM_ThirdPartyValuesDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.VM_ThirdPartyValuesDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.VM_ThirdPartyValuesData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.VM_ThirdPartyValuesDataCollection;
