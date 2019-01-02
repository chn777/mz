

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ElectronicFileFormatParams = function () {
}
SAPB1.ElectronicFileFormatParams.prototype = new SAPB1.ComplexType();
SAPB1.ElectronicFileFormatParams.prototype.constructor = SAPB1.ElectronicFileFormatParams;
SAPB1.ElectronicFileFormatParams.FormatID = { valueOf: function(){return 'FormatID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormatParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormatParams.prototype.FormatID = new Number();
SAPB1.ElectronicFileFormatParams.prototype.Name = new String();



SAPB1.ElectronicFileFormatParams.create = function (rawObject) {
    var instance = new SAPB1.ElectronicFileFormatParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ElectronicFileFormatParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ElectronicFileFormatParams;
