var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPBankAccountCollection = function () {
}

SAPB1.BPBankAccountCollection.prototype = new SAPB1.Collection();
SAPB1.BPBankAccountCollection.prototype.constructor = SAPB1.BPBankAccountCollection;
//override the default one.    
SAPB1.BPBankAccountCollection.get = function (index) {
    return SAPB1.BPBankAccount.create(this.array[index]);
}

SAPB1.BPBankAccountCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPBankAccountCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPBankAccount.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPBankAccountCollection;
