

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CommissionGroup = function () {
}
SAPB1.CommissionGroup.prototype = new SAPB1.EntityType();
SAPB1.CommissionGroup.prototype.constructor = SAPB1.CommissionGroup;
SAPB1.CommissionGroup.prototype.keys.push('CommissionGroupCode');
SAPB1.CommissionGroup.CommissionGroupCode = { valueOf: function(){return 'CommissionGroupCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CommissionGroup.CommissionGroupName = { valueOf: function(){return 'CommissionGroupName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CommissionGroup.CommissionPercentage = { valueOf: function(){return 'CommissionPercentage';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CommissionGroup.prototype.CommissionGroupCode = new Number();
SAPB1.CommissionGroup.prototype.CommissionGroupName = new String();
SAPB1.CommissionGroup.prototype.CommissionPercentage = new Number();



SAPB1.CommissionGroup.create = function (rawObject) {
    var instance = new SAPB1.CommissionGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CommissionGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CommissionGroup;
