

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemLocalizationInfo = function () {
}
SAPB1.ItemLocalizationInfo.prototype = new SAPB1.ComplexType();
SAPB1.ItemLocalizationInfo.prototype.constructor = SAPB1.ItemLocalizationInfo;
SAPB1.ItemLocalizationInfo.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemLocalizationInfo.IncomeNature = { valueOf: function(){return 'IncomeNature';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemLocalizationInfo.prototype.ItemCode = new String();
SAPB1.ItemLocalizationInfo.prototype.IncomeNature = new String();



SAPB1.ItemLocalizationInfo.create = function (rawObject) {
    var instance = new SAPB1.ItemLocalizationInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemLocalizationInfo.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.ItemLocalizationInfo;
