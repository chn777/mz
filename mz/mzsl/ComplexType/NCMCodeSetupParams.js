

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NCMCodeSetupParams = function () {
}
SAPB1.NCMCodeSetupParams.prototype = new SAPB1.ComplexType();
SAPB1.NCMCodeSetupParams.prototype.constructor = SAPB1.NCMCodeSetupParams;
SAPB1.NCMCodeSetupParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetupParams.NCMCode = { valueOf: function(){return 'NCMCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetupParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetupParams.prototype.AbsEntry = new Number();
SAPB1.NCMCodeSetupParams.prototype.NCMCode = new String();
SAPB1.NCMCodeSetupParams.prototype.Description = new String();



SAPB1.NCMCodeSetupParams.create = function (rawObject) {
    var instance = new SAPB1.NCMCodeSetupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NCMCodeSetupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NCMCodeSetupParams;
