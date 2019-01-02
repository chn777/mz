var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ContactEmployeeBlockSendingMarketingContentCollection = function () {
}

SAPB1.ContactEmployeeBlockSendingMarketingContentCollection.prototype = new SAPB1.Collection();
SAPB1.ContactEmployeeBlockSendingMarketingContentCollection.prototype.constructor = SAPB1.ContactEmployeeBlockSendingMarketingContentCollection;
//override the default one.    
SAPB1.ContactEmployeeBlockSendingMarketingContentCollection.get = function (index) {
    return SAPB1.ContactEmployeeBlockSendingMarketingContent.create(this.array[index]);
}

SAPB1.ContactEmployeeBlockSendingMarketingContentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ContactEmployeeBlockSendingMarketingContentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ContactEmployeeBlockSendingMarketingContent.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ContactEmployeeBlockSendingMarketingContentCollection;
