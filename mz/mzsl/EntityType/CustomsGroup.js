
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CustomsGroup = function () {
}
SAPB1.CustomsGroup.prototype = new SAPB1.EntityType();
SAPB1.CustomsGroup.prototype.constructor = SAPB1.CustomsGroup;
SAPB1.CustomsGroup.prototype.keys.push('Code');
SAPB1.CustomsGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Customs = { valueOf: function(){return 'Customs';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Purchase = { valueOf: function(){return 'Purchase';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Other = { valueOf: function(){return 'Other';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.CustomsAllocationAccount = { valueOf: function(){return 'CustomsAllocationAccount';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.CustomsExpenseAccount = { valueOf: function(){return 'CustomsExpenseAccount';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.PortAddress = { valueOf: function(){return 'PortAddress';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.PortState = { valueOf: function(){return 'PortState';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsGroup.prototype.Code = new Number();
SAPB1.CustomsGroup.prototype.Name = new String();
SAPB1.CustomsGroup.prototype.Number = new String();
SAPB1.CustomsGroup.prototype.Customs = new Number();
SAPB1.CustomsGroup.prototype.Purchase = new Number();
SAPB1.CustomsGroup.prototype.Other = new Number();
SAPB1.CustomsGroup.prototype.Total = new Number();
SAPB1.CustomsGroup.prototype.Locked = new String();
SAPB1.CustomsGroup.prototype.CustomsAllocationAccount = new String();
SAPB1.CustomsGroup.prototype.CustomsExpenseAccount = new String();
SAPB1.CustomsGroup.prototype.PortAddress = new String();
SAPB1.CustomsGroup.prototype.PortState = new String();


SAPB1.CustomsGroup.BoYesNoEnum = BoYesNoEnum

SAPB1.CustomsGroup.create = function (rawObject) {
    var instance = new SAPB1.CustomsGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CustomsGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CustomsGroup;
