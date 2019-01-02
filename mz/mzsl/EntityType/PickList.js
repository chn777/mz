var PickListsLine = require('ComplexType/PickListsLine')
var PickListsLineCollection = require('ComplexType/PickListsLineCollection')

var BoPickStatus = require('EnumType/BoPickStatus')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PickList = function () {
}
SAPB1.PickList.prototype = new SAPB1.EntityType();
SAPB1.PickList.prototype.constructor = SAPB1.PickList;
SAPB1.PickList.prototype.keys.push('Absoluteentry');
SAPB1.PickList.Absoluteentry = { valueOf: function(){return 'Absoluteentry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PickList.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.OwnerCode = { valueOf: function(){return 'OwnerCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.OwnerName = { valueOf: function(){return 'OwnerName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.PickDate = { valueOf: function(){return 'PickDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.Status = { valueOf: function(){return 'Status';}, Type: 'BoPickStatus', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.ObjectType = { valueOf: function(){return 'ObjectType';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.UseBaseUnits = { valueOf: function(){return 'UseBaseUnits';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickList.PickListsLines = { valueOf: function(){return 'PickListsLines';}, Type: 'PickListsLine', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PickList.prototype.Absoluteentry = new Number();
SAPB1.PickList.prototype.Name = new String();
SAPB1.PickList.prototype.OwnerCode = new Number();
SAPB1.PickList.prototype.OwnerName = new String();
SAPB1.PickList.prototype.PickDate = new String();
SAPB1.PickList.prototype.Remarks = new String();
SAPB1.PickList.prototype.Status = new String();
SAPB1.PickList.prototype.ObjectType = new String();
SAPB1.PickList.prototype.UseBaseUnits = new String();
SAPB1.PickList.prototype.PickListsLines = new PickListsLineCollection();

SAPB1.PickList.PickListsLine = PickListsLine
SAPB1.PickList.PickListsLineCollection = PickListsLineCollection

SAPB1.PickList.BoPickStatus = BoPickStatus
SAPB1.PickList.BoYesNoEnum = BoYesNoEnum

SAPB1.PickList.create = function (rawObject) {
    var instance = new SAPB1.PickList();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PickList.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PickList;
