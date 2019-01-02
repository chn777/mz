
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var SortOrderEnum = require('EnumType/SortOrderEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChooseFromList_Line = function () {
}
SAPB1.ChooseFromList_Line.prototype = new SAPB1.ComplexType();
SAPB1.ChooseFromList_Line.prototype.constructor = SAPB1.ChooseFromList_Line;
SAPB1.ChooseFromList_Line.FieldNo = { valueOf: function(){return 'FieldNo';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.DisplayedName = { valueOf: function(){return 'DisplayedName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.GroupBy = { valueOf: function(){return 'GroupBy';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.Visible = { valueOf: function(){return 'Visible';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.ShowType = { valueOf: function(){return 'ShowType';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.SortOrder = { valueOf: function(){return 'SortOrder';}, Type: 'SortOrderEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.VisualIndex = { valueOf: function(){return 'VisualIndex';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList_Line.prototype.FieldNo = new String();
SAPB1.ChooseFromList_Line.prototype.DisplayedName = new String();
SAPB1.ChooseFromList_Line.prototype.GroupBy = new String();
SAPB1.ChooseFromList_Line.prototype.Visible = new String();
SAPB1.ChooseFromList_Line.prototype.ShowType = new String();
SAPB1.ChooseFromList_Line.prototype.SortOrder = new String();
SAPB1.ChooseFromList_Line.prototype.VisualIndex = new Number();


SAPB1.ChooseFromList_Line.BoYesNoEnum = BoYesNoEnum
SAPB1.ChooseFromList_Line.SortOrderEnum = SortOrderEnum

SAPB1.ChooseFromList_Line.create = function (rawObject) {
    var instance = new SAPB1.ChooseFromList_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChooseFromList_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChooseFromList_Line;
