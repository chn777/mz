
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemGroupsWarehouseInfo = function () {
}
SAPB1.ItemGroupsWarehouseInfo.prototype = new SAPB1.ComplexType();
SAPB1.ItemGroupsWarehouseInfo.prototype.constructor = SAPB1.ItemGroupsWarehouseInfo;
SAPB1.ItemGroupsWarehouseInfo.ItmsGrpCod = { valueOf: function(){return 'ItmsGrpCod';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemGroupsWarehouseInfo.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroupsWarehouseInfo.DefaultBin = { valueOf: function(){return 'DefaultBin';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroupsWarehouseInfo.DefaultBinEnforced = { valueOf: function(){return 'DefaultBinEnforced';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemGroupsWarehouseInfo.prototype.ItmsGrpCod = new Number();
SAPB1.ItemGroupsWarehouseInfo.prototype.WarehouseCode = new String();
SAPB1.ItemGroupsWarehouseInfo.prototype.DefaultBin = new Number();
SAPB1.ItemGroupsWarehouseInfo.prototype.DefaultBinEnforced = new String();


SAPB1.ItemGroupsWarehouseInfo.BoYesNoEnum = BoYesNoEnum

SAPB1.ItemGroupsWarehouseInfo.create = function (rawObject) {
    var instance = new SAPB1.ItemGroupsWarehouseInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemGroupsWarehouseInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemGroupsWarehouseInfo;
