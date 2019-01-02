
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlternateCatNum = function () {
}
SAPB1.AlternateCatNum.prototype = new SAPB1.EntityType();
SAPB1.AlternateCatNum.prototype.constructor = SAPB1.AlternateCatNum;
SAPB1.AlternateCatNum.prototype.keys.push('ItemCode','CardCode','Substitute');
SAPB1.AlternateCatNum.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNum.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNum.Substitute = { valueOf: function(){return 'Substitute';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNum.DisplayBPCatalogNumber = { valueOf: function(){return 'DisplayBPCatalogNumber';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlternateCatNum.prototype.ItemCode = new String();
SAPB1.AlternateCatNum.prototype.CardCode = new String();
SAPB1.AlternateCatNum.prototype.Substitute = new String();
SAPB1.AlternateCatNum.prototype.DisplayBPCatalogNumber = new String();


SAPB1.AlternateCatNum.BoYesNoEnum = BoYesNoEnum

SAPB1.AlternateCatNum.create = function (rawObject) {
    var instance = new SAPB1.AlternateCatNum();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlternateCatNum.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlternateCatNum;
