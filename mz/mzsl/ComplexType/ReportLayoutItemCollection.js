var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ReportLayoutItemCollection = function () {
}

SAPB1.ReportLayoutItemCollection.prototype = new SAPB1.Collection();
SAPB1.ReportLayoutItemCollection.prototype.constructor = SAPB1.ReportLayoutItemCollection;
//override the default one.    
SAPB1.ReportLayoutItemCollection.get = function (index) {
    return SAPB1.ReportLayoutItem.create(this.array[index]);
}

SAPB1.ReportLayoutItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ReportLayoutItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ReportLayoutItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ReportLayoutItemCollection;
