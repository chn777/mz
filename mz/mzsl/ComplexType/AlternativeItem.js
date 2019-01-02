

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlternativeItem = function () {
}
SAPB1.AlternativeItem.prototype = new SAPB1.ComplexType();
SAPB1.AlternativeItem.prototype.constructor = SAPB1.AlternativeItem;
SAPB1.AlternativeItem.AlternativeItemCode = { valueOf: function(){return 'AlternativeItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternativeItem.MatchFactor = { valueOf: function(){return 'MatchFactor';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternativeItem.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternativeItem.prototype.AlternativeItemCode = new String();
SAPB1.AlternativeItem.prototype.MatchFactor = new Number();
SAPB1.AlternativeItem.prototype.Remarks = new String();



SAPB1.AlternativeItem.create = function (rawObject) {
    var instance = new SAPB1.AlternativeItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlternativeItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlternativeItem;
