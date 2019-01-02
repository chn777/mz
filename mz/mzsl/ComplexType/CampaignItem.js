
var CampaignItemTypeEnum = require('EnumType/CampaignItemTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CampaignItem = function () {
}
SAPB1.CampaignItem.prototype = new SAPB1.ComplexType();
SAPB1.CampaignItem.prototype.constructor = SAPB1.CampaignItem;
SAPB1.CampaignItem.CampaignNumber = { valueOf: function(){return 'CampaignNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.CampaignLineNumber = { valueOf: function(){return 'CampaignLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.ItemName = { valueOf: function(){return 'ItemName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'CampaignItemTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignItem.prototype.CampaignNumber = new Number();
SAPB1.CampaignItem.prototype.CampaignLineNumber = new Number();
SAPB1.CampaignItem.prototype.ItemCode = new String();
SAPB1.CampaignItem.prototype.ItemName = new String();
SAPB1.CampaignItem.prototype.ItemType = new String();
SAPB1.CampaignItem.prototype.ItemGroup = new String();


SAPB1.CampaignItem.CampaignItemTypeEnum = CampaignItemTypeEnum

SAPB1.CampaignItem.create = function (rawObject) {
    var instance = new SAPB1.CampaignItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CampaignItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CampaignItem;
