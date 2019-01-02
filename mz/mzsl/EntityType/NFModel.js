

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NFModel = function () {
}
SAPB1.NFModel.prototype = new SAPB1.EntityType();
SAPB1.NFModel.prototype.constructor = SAPB1.NFModel;
SAPB1.NFModel.prototype.keys.push('AbsEntry');
SAPB1.NFModel.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NFModel.NFMName = { valueOf: function(){return 'NFMName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModel.NFMDescription = { valueOf: function(){return 'NFMDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModel.NFMCode = { valueOf: function(){return 'NFMCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFModel.prototype.AbsEntry = new String();
SAPB1.NFModel.prototype.NFMName = new String();
SAPB1.NFModel.prototype.NFMDescription = new String();
SAPB1.NFModel.prototype.NFMCode = new String();



SAPB1.NFModel.create = function (rawObject) {
    var instance = new SAPB1.NFModel();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NFModel.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NFModel;
