
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ColumnPreferences = function () {
}
SAPB1.ColumnPreferences.prototype = new SAPB1.EntityType();
SAPB1.ColumnPreferences.prototype.constructor = SAPB1.ColumnPreferences;
SAPB1.ColumnPreferences.prototype.keys.push('User','FormID','ItemNumber','Column');
SAPB1.ColumnPreferences.User = { valueOf: function(){return 'User';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.FormID = { valueOf: function(){return 'FormID';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.ItemNumber = { valueOf: function(){return 'ItemNumber';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.Column = { valueOf: function(){return 'Column';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.Width = { valueOf: function(){return 'Width';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.VisibleInForm = { valueOf: function(){return 'VisibleInForm';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.TabsLayout = { valueOf: function(){return 'TabsLayout';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.EditableInForm = { valueOf: function(){return 'EditableInForm';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.VisibleInExpanded = { valueOf: function(){return 'VisibleInExpanded';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.ExpandedIndex = { valueOf: function(){return 'ExpandedIndex';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.EditableInExpanded = { valueOf: function(){return 'EditableInExpanded';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnPreferences.prototype.User = new Number();
SAPB1.ColumnPreferences.prototype.FormID = new String();
SAPB1.ColumnPreferences.prototype.ItemNumber = new String();
SAPB1.ColumnPreferences.prototype.Column = new String();
SAPB1.ColumnPreferences.prototype.Width = new Number();
SAPB1.ColumnPreferences.prototype.VisibleInForm = new String();
SAPB1.ColumnPreferences.prototype.TabsLayout = new Number();
SAPB1.ColumnPreferences.prototype.EditableInForm = new String();
SAPB1.ColumnPreferences.prototype.VisibleInExpanded = new String();
SAPB1.ColumnPreferences.prototype.ExpandedIndex = new Number();
SAPB1.ColumnPreferences.prototype.EditableInExpanded = new String();


SAPB1.ColumnPreferences.BoYesNoEnum = BoYesNoEnum

SAPB1.ColumnPreferences.create = function (rawObject) {
    var instance = new SAPB1.ColumnPreferences();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ColumnPreferences.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ColumnPreferences;
