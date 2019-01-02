

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChangeLogParams = function () {
}
SAPB1.ChangeLogParams.prototype = new SAPB1.ComplexType();
SAPB1.ChangeLogParams.prototype.constructor = SAPB1.ChangeLogParams;
SAPB1.ChangeLogParams.LogInstance = { valueOf: function(){return 'LogInstance';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogParams.UpdatedDate = { valueOf: function(){return 'UpdatedDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogParams.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogParams.ObjectCode = { valueOf: function(){return 'ObjectCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogParams.prototype.LogInstance = new Number();
SAPB1.ChangeLogParams.prototype.UpdatedDate = new String();
SAPB1.ChangeLogParams.prototype.UserName = new String();
SAPB1.ChangeLogParams.prototype.ObjectCode = new String();



SAPB1.ChangeLogParams.create = function (rawObject) {
    var instance = new SAPB1.ChangeLogParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChangeLogParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChangeLogParams;
