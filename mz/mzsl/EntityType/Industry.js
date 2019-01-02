

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Industry = function () {
}
SAPB1.Industry.prototype = new SAPB1.EntityType();
SAPB1.Industry.prototype.constructor = SAPB1.Industry;
SAPB1.Industry.prototype.keys.push('IndustryCode');
SAPB1.Industry.IndustryDescription = { valueOf: function(){return 'IndustryDescription';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Industry.IndustryName = { valueOf: function(){return 'IndustryName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Industry.IndustryCode = { valueOf: function(){return 'IndustryCode';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Industry.prototype.IndustryDescription = new String();
SAPB1.Industry.prototype.IndustryName = new String();
SAPB1.Industry.prototype.IndustryCode = new Number();



SAPB1.Industry.create = function (rawObject) {
    var instance = new SAPB1.Industry();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Industry.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Industry;
