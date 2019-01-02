var ExtendedTranslation_ResultLine = require('ComplexType/ExtendedTranslation_ResultLine')
var ExtendedTranslation_ResultLineCollection = require('ComplexType/ExtendedTranslation_ResultLineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExtendedTranslation_ItemLine = function () {
}
SAPB1.ExtendedTranslation_ItemLine.prototype = new SAPB1.ComplexType();
SAPB1.ExtendedTranslation_ItemLine.prototype.constructor = SAPB1.ExtendedTranslation_ItemLine;
SAPB1.ExtendedTranslation_ItemLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.ItemType = { valueOf: function(){return 'ItemType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.SlimType = { valueOf: function(){return 'SlimType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.MaxLength = { valueOf: function(){return 'MaxLength';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.SourceText = { valueOf: function(){return 'SourceText';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.Memo = { valueOf: function(){return 'Memo';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ItemLine.ExtendedTranslation_ResultLines = { valueOf: function(){return 'ExtendedTranslation_ResultLines';}, Type: 'ExtendedTranslation_ResultLine', Index: 8, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExtendedTranslation_ItemLine.prototype.DocEntry = new Number();
SAPB1.ExtendedTranslation_ItemLine.prototype.LineNumber = new Number();
SAPB1.ExtendedTranslation_ItemLine.prototype.ItemCode = new String();
SAPB1.ExtendedTranslation_ItemLine.prototype.ItemType = new String();
SAPB1.ExtendedTranslation_ItemLine.prototype.SlimType = new String();
SAPB1.ExtendedTranslation_ItemLine.prototype.MaxLength = new Number();
SAPB1.ExtendedTranslation_ItemLine.prototype.SourceText = new String();
SAPB1.ExtendedTranslation_ItemLine.prototype.Memo = new String();
SAPB1.ExtendedTranslation_ItemLine.prototype.ExtendedTranslation_ResultLines = new ExtendedTranslation_ResultLineCollection();

SAPB1.ExtendedTranslation_ItemLine.ExtendedTranslation_ResultLine = ExtendedTranslation_ResultLine
SAPB1.ExtendedTranslation_ItemLine.ExtendedTranslation_ResultLineCollection = ExtendedTranslation_ResultLineCollection


SAPB1.ExtendedTranslation_ItemLine.create = function (rawObject) {
    var instance = new SAPB1.ExtendedTranslation_ItemLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExtendedTranslation_ItemLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExtendedTranslation_ItemLine;
