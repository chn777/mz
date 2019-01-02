

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDCodeParams = function () {
}
SAPB1.WTDCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.WTDCodeParams.prototype.constructor = SAPB1.WTDCodeParams;
SAPB1.WTDCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCodeParams.WTaxCode = { valueOf: function(){return 'WTaxCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCodeParams.WTaxName = { valueOf: function(){return 'WTaxName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCodeParams.prototype.AbsEntry = new Number();
SAPB1.WTDCodeParams.prototype.WTaxCode = new String();
SAPB1.WTDCodeParams.prototype.WTaxName = new String();



SAPB1.WTDCodeParams.create = function (rawObject) {
    var instance = new SAPB1.WTDCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDCodeParams;
