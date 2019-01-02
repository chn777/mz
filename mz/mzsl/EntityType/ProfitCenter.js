
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProfitCenter = function () {
}
SAPB1.ProfitCenter.prototype = new SAPB1.EntityType();
SAPB1.ProfitCenter.prototype.constructor = SAPB1.ProfitCenter;
SAPB1.ProfitCenter.prototype.keys.push('CenterCode');
SAPB1.ProfitCenter.CenterCode = { valueOf: function(){return 'CenterCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.CenterName = { valueOf: function(){return 'CenterName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.InWhichDimension = { valueOf: function(){return 'InWhichDimension';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.CostCenterType = { valueOf: function(){return 'CostCenterType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.EffectiveFrom = { valueOf: function(){return 'EffectiveFrom';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.EffectiveTo = { valueOf: function(){return 'EffectiveTo';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.CenterOwner = { valueOf: function(){return 'CenterOwner';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.U_CardCode = { valueOf: function(){return 'U_CardCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.U_CardName = { valueOf: function(){return 'U_CardName';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenter.prototype.CenterCode = new String();
SAPB1.ProfitCenter.prototype.CenterName = new String();
SAPB1.ProfitCenter.prototype.GroupCode = new String();
SAPB1.ProfitCenter.prototype.InWhichDimension = new Number();
SAPB1.ProfitCenter.prototype.CostCenterType = new String();
SAPB1.ProfitCenter.prototype.EffectiveFrom = new String();
SAPB1.ProfitCenter.prototype.EffectiveTo = new String();
SAPB1.ProfitCenter.prototype.Active = new String();
SAPB1.ProfitCenter.prototype.CenterOwner = new Number();
SAPB1.ProfitCenter.prototype.U_CardCode = new String();
SAPB1.ProfitCenter.prototype.U_CardName = new String();


SAPB1.ProfitCenter.BoYesNoEnum = BoYesNoEnum

SAPB1.ProfitCenter.create = function (rawObject) {
    var instance = new SAPB1.ProfitCenter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProfitCenter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProfitCenter;
