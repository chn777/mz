

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PredefinedTextParams = function () {
}
SAPB1.PredefinedTextParams.prototype = new SAPB1.ComplexType();
SAPB1.PredefinedTextParams.prototype.constructor = SAPB1.PredefinedTextParams;
SAPB1.PredefinedTextParams.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PredefinedTextParams.TextCode = { valueOf: function(){return 'TextCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PredefinedTextParams.prototype.Numerator = new Number();
SAPB1.PredefinedTextParams.prototype.TextCode = new String();



SAPB1.PredefinedTextParams.create = function (rawObject) {
    var instance = new SAPB1.PredefinedTextParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PredefinedTextParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PredefinedTextParams;
