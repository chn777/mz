

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NCMCodeSetup = function () {
}
SAPB1.NCMCodeSetup.prototype = new SAPB1.EntityType();
SAPB1.NCMCodeSetup.prototype.constructor = SAPB1.NCMCodeSetup;
SAPB1.NCMCodeSetup.prototype.keys.push('AbsEntry');
SAPB1.NCMCodeSetup.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetup.NCMCode = { valueOf: function(){return 'NCMCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetup.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NCMCodeSetup.prototype.AbsEntry = new Number();
SAPB1.NCMCodeSetup.prototype.NCMCode = new String();
SAPB1.NCMCodeSetup.prototype.Description = new String();
SAPB1.NCMCodeSetup.prototype.GroupCode = new String();



SAPB1.NCMCodeSetup.create = function (rawObject) {
    var instance = new SAPB1.NCMCodeSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NCMCodeSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NCMCodeSetup;
