var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ReportLayout_TranslationLineCollection = function () {
}

SAPB1.ReportLayout_TranslationLineCollection.prototype = new SAPB1.Collection();
SAPB1.ReportLayout_TranslationLineCollection.prototype.constructor = SAPB1.ReportLayout_TranslationLineCollection;
//override the default one.    
SAPB1.ReportLayout_TranslationLineCollection.get = function (index) {
    return SAPB1.ReportLayout_TranslationLine.create(this.array[index]);
}

SAPB1.ReportLayout_TranslationLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ReportLayout_TranslationLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ReportLayout_TranslationLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ReportLayout_TranslationLineCollection;
