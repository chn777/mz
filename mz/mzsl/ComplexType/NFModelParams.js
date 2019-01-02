

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NFModelParams = function () {
}
SAPB1.NFModelParams.prototype = new SAPB1.ComplexType();
SAPB1.NFModelParams.prototype.constructor = SAPB1.NFModelParams;
SAPB1.NFModelParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModelParams.NFMName = { valueOf: function(){return 'NFMName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModelParams.NFMDescription = { valueOf: function(){return 'NFMDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModelParams.NFMCode = { valueOf: function(){return 'NFMCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModelParams.prototype.AbsEntry = new String();
SAPB1.NFModelParams.prototype.NFMName = new String();
SAPB1.NFModelParams.prototype.NFMDescription = new String();
SAPB1.NFModelParams.prototype.NFMCode = new String();



SAPB1.NFModelParams.create = function (rawObject) {
    var instance = new SAPB1.NFModelParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NFModelParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NFModelParams;
