

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccrualType = function () {
}
SAPB1.AccrualType.prototype = new SAPB1.EntityType();
SAPB1.AccrualType.prototype.constructor = SAPB1.AccrualType;
SAPB1.AccrualType.prototype.keys.push('Code');
SAPB1.AccrualType.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccrualType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccrualType.PostingAccount = { valueOf: function(){return 'PostingAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccrualType.CalculationAccount = { valueOf: function(){return 'CalculationAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccrualType.InterimAccount = { valueOf: function(){return 'InterimAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccrualType.prototype.Code = new String();
SAPB1.AccrualType.prototype.Name = new String();
SAPB1.AccrualType.prototype.PostingAccount = new String();
SAPB1.AccrualType.prototype.CalculationAccount = new String();
SAPB1.AccrualType.prototype.InterimAccount = new String();



SAPB1.AccrualType.create = function (rawObject) {
    var instance = new SAPB1.AccrualType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccrualType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccrualType;
