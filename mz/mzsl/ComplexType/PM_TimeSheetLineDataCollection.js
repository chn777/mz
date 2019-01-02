var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PM_TimeSheetLineDataCollection = function () {
}

SAPB1.PM_TimeSheetLineDataCollection.prototype = new SAPB1.Collection();
SAPB1.PM_TimeSheetLineDataCollection.prototype.constructor = SAPB1.PM_TimeSheetLineDataCollection;
//override the default one.    
SAPB1.PM_TimeSheetLineDataCollection.get = function (index) {
    return SAPB1.PM_TimeSheetLineData.create(this.array[index]);
}

SAPB1.PM_TimeSheetLineDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PM_TimeSheetLineDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PM_TimeSheetLineData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PM_TimeSheetLineDataCollection;
