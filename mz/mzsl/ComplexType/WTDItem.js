

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDItem = function () {
}
SAPB1.WTDItem.prototype = new SAPB1.ComplexType();
SAPB1.WTDItem.prototype.constructor = SAPB1.WTDItem;
SAPB1.WTDItem.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDItem.WTaxCode = { valueOf: function(){return 'WTaxCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDItem.EffectiveDateFrom = { valueOf: function(){return 'EffectiveDateFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDItem.EffectiveDateTo = { valueOf: function(){return 'EffectiveDateTo';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDItem.prototype.ItemCode = new String();
SAPB1.WTDItem.prototype.WTaxCode = new String();
SAPB1.WTDItem.prototype.EffectiveDateFrom = new String();
SAPB1.WTDItem.prototype.EffectiveDateTo = new String();



SAPB1.WTDItem.create = function (rawObject) {
    var instance = new SAPB1.WTDItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDItem;
