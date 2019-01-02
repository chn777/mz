var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TransportationDocumentLineDataCollection = function () {
}

SAPB1.TransportationDocumentLineDataCollection.prototype = new SAPB1.Collection();
SAPB1.TransportationDocumentLineDataCollection.prototype.constructor = SAPB1.TransportationDocumentLineDataCollection;
//override the default one.    
SAPB1.TransportationDocumentLineDataCollection.get = function (index) {
    return SAPB1.TransportationDocumentLineData.create(this.array[index]);
}

SAPB1.TransportationDocumentLineDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TransportationDocumentLineDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TransportationDocumentLineData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TransportationDocumentLineDataCollection;
