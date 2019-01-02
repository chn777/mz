var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TargetGroupsDetailCollection = function () {
}

SAPB1.TargetGroupsDetailCollection.prototype = new SAPB1.Collection();
SAPB1.TargetGroupsDetailCollection.prototype.constructor = SAPB1.TargetGroupsDetailCollection;
//override the default one.    
SAPB1.TargetGroupsDetailCollection.get = function (index) {
    return SAPB1.TargetGroupsDetail.create(this.array[index]);
}

SAPB1.TargetGroupsDetailCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TargetGroupsDetailCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TargetGroupsDetail.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TargetGroupsDetailCollection;
