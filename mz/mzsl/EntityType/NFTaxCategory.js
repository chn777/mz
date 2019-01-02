
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NFTaxCategory = function () {
}
SAPB1.NFTaxCategory.prototype = new SAPB1.EntityType();
SAPB1.NFTaxCategory.prototype.constructor = SAPB1.NFTaxCategory;
SAPB1.NFTaxCategory.prototype.keys.push('AbsId');
SAPB1.NFTaxCategory.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategory.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategory.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategory.GPCId = { valueOf: function(){return 'GPCId';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategory.prototype.AbsId = new Number();
SAPB1.NFTaxCategory.prototype.Code = new String();
SAPB1.NFTaxCategory.prototype.Locked = new String();
SAPB1.NFTaxCategory.prototype.GPCId = new Number();


SAPB1.NFTaxCategory.BoYesNoEnum = BoYesNoEnum

SAPB1.NFTaxCategory.create = function (rawObject) {
    var instance = new SAPB1.NFTaxCategory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NFTaxCategory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NFTaxCategory;
