

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DNFCodeSetup = function () {
}
SAPB1.DNFCodeSetup.prototype = new SAPB1.EntityType();
SAPB1.DNFCodeSetup.prototype.constructor = SAPB1.DNFCodeSetup;
SAPB1.DNFCodeSetup.prototype.keys.push('AbsEntry');
SAPB1.DNFCodeSetup.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DNFCodeSetup.NCMCode = { valueOf: function(){return 'NCMCode';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DNFCodeSetup.DNFCode = { valueOf: function(){return 'DNFCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DNFCodeSetup.UoM = { valueOf: function(){return 'UoM';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DNFCodeSetup.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DNFCodeSetup.prototype.AbsEntry = new Number();
SAPB1.DNFCodeSetup.prototype.NCMCode = new Number();
SAPB1.DNFCodeSetup.prototype.DNFCode = new String();
SAPB1.DNFCodeSetup.prototype.UoM = new String();
SAPB1.DNFCodeSetup.prototype.Factor = new Number();



SAPB1.DNFCodeSetup.create = function (rawObject) {
    var instance = new SAPB1.DNFCodeSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DNFCodeSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DNFCodeSetup;
