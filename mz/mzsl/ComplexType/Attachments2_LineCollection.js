var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.Attachments2_LineCollection = function () {
}

SAPB1.Attachments2_LineCollection.prototype = new SAPB1.Collection();
SAPB1.Attachments2_LineCollection.prototype.constructor = SAPB1.Attachments2_LineCollection;
//override the default one.    
SAPB1.Attachments2_LineCollection.get = function (index) {
    return SAPB1.Attachments2_Line.create(this.array[index]);
}

SAPB1.Attachments2_LineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.Attachments2_LineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.Attachments2_Line.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.Attachments2_LineCollection;
