var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeReviewsInfoCollection = function () {
}

SAPB1.EmployeeReviewsInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeReviewsInfoCollection.prototype.constructor = SAPB1.EmployeeReviewsInfoCollection;
//override the default one.    
SAPB1.EmployeeReviewsInfoCollection.get = function (index) {
    return SAPB1.EmployeeReviewsInfo.create(this.array[index]);
}

SAPB1.EmployeeReviewsInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeReviewsInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeReviewsInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeReviewsInfoCollection;
