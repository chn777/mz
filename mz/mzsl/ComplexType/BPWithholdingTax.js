

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPWithholdingTax = function () {
}
SAPB1.BPWithholdingTax.prototype = new SAPB1.ComplexType();
SAPB1.BPWithholdingTax.prototype.constructor = SAPB1.BPWithholdingTax;
SAPB1.BPWithholdingTax.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPWithholdingTax.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPWithholdingTax.prototype.WTCode = new String();
SAPB1.BPWithholdingTax.prototype.BPCode = new String();



SAPB1.BPWithholdingTax.create = function (rawObject) {
    var instance = new SAPB1.BPWithholdingTax();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPWithholdingTax.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPWithholdingTax;
