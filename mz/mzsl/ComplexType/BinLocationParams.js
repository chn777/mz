

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BinLocationParams = function () {
}
SAPB1.BinLocationParams.prototype = new SAPB1.ComplexType();
SAPB1.BinLocationParams.prototype.constructor = SAPB1.BinLocationParams;
SAPB1.BinLocationParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationParams.BinCode = { valueOf: function(){return 'BinCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationParams.prototype.AbsEntry = new Number();
SAPB1.BinLocationParams.prototype.BinCode = new String();



SAPB1.BinLocationParams.create = function (rawObject) {
    var instance = new SAPB1.BinLocationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BinLocationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BinLocationParams;
