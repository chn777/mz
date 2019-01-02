
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Dimension = function () {
}
SAPB1.Dimension.prototype = new SAPB1.EntityType();
SAPB1.Dimension.prototype.constructor = SAPB1.Dimension;
SAPB1.Dimension.prototype.keys.push('DimensionCode');
SAPB1.Dimension.DimensionCode = { valueOf: function(){return 'DimensionCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Dimension.DimensionName = { valueOf: function(){return 'DimensionName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Dimension.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Dimension.DimensionDescription = { valueOf: function(){return 'DimensionDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Dimension.prototype.DimensionCode = new Number();
SAPB1.Dimension.prototype.DimensionName = new String();
SAPB1.Dimension.prototype.IsActive = new String();
SAPB1.Dimension.prototype.DimensionDescription = new String();


SAPB1.Dimension.BoYesNoEnum = BoYesNoEnum

SAPB1.Dimension.create = function (rawObject) {
    var instance = new SAPB1.Dimension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Dimension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Dimension;
