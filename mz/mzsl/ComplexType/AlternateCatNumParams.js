

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlternateCatNumParams = function () {
}
SAPB1.AlternateCatNumParams.prototype = new SAPB1.ComplexType();
SAPB1.AlternateCatNumParams.prototype.constructor = SAPB1.AlternateCatNumParams;
SAPB1.AlternateCatNumParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNumParams.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNumParams.Substitute = { valueOf: function(){return 'Substitute';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNumParams.prototype.ItemCode = new String();
SAPB1.AlternateCatNumParams.prototype.CardCode = new String();
SAPB1.AlternateCatNumParams.prototype.Substitute = new String();



SAPB1.AlternateCatNumParams.create = function (rawObject) {
    var instance = new SAPB1.AlternateCatNumParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlternateCatNumParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlternateCatNumParams;
