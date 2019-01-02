var UserValidValues = require('ComplexType/UserValidValues')
var UserValidValuesCollection = require('ComplexType/UserValidValuesCollection')

var BoFormattedSearchActionEnum = require('EnumType/BoFormattedSearchActionEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FormattedSearche = function () {
}
SAPB1.FormattedSearche.prototype = new SAPB1.EntityType();
SAPB1.FormattedSearche.prototype.constructor = SAPB1.FormattedSearche;
SAPB1.FormattedSearche.prototype.keys.push('Index');
SAPB1.FormattedSearche.FormID = { valueOf: function(){return 'FormID';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.ItemID = { valueOf: function(){return 'ItemID';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.ColumnID = { valueOf: function(){return 'ColumnID';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.Action = { valueOf: function(){return 'Action';}, Type: 'BoFormattedSearchActionEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.QueryID = { valueOf: function(){return 'QueryID';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.Index = { valueOf: function(){return 'Index';}, Type: 'Edm.Int32', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.Refresh = { valueOf: function(){return 'Refresh';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.FieldID = { valueOf: function(){return 'FieldID';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.ForceRefresh = { valueOf: function(){return 'ForceRefresh';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.ByField = { valueOf: function(){return 'ByField';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearche.UserValidValues = { valueOf: function(){return 'UserValidValues';}, Type: 'UserValidValues', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.FormattedSearche.prototype.FormID = new String();
SAPB1.FormattedSearche.prototype.ItemID = new String();
SAPB1.FormattedSearche.prototype.ColumnID = new String();
SAPB1.FormattedSearche.prototype.Action = new String();
SAPB1.FormattedSearche.prototype.QueryID = new Number();
SAPB1.FormattedSearche.prototype.Index = new Number();
SAPB1.FormattedSearche.prototype.Refresh = new String();
SAPB1.FormattedSearche.prototype.FieldID = new String();
SAPB1.FormattedSearche.prototype.ForceRefresh = new String();
SAPB1.FormattedSearche.prototype.ByField = new String();
SAPB1.FormattedSearche.prototype.UserValidValues = new UserValidValuesCollection();

SAPB1.FormattedSearche.UserValidValues = UserValidValues
SAPB1.FormattedSearche.UserValidValuesCollection = UserValidValuesCollection

SAPB1.FormattedSearche.BoFormattedSearchActionEnum = BoFormattedSearchActionEnum
SAPB1.FormattedSearche.BoYesNoEnum = BoYesNoEnum

SAPB1.FormattedSearche.create = function (rawObject) {
    var instance = new SAPB1.FormattedSearche();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FormattedSearche.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FormattedSearche;
