var MessageDataLine = require('ComplexType/MessageDataLine')
var MessageDataLineCollection = require('ComplexType/MessageDataLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MessageDataColumn = function () {
}
SAPB1.MessageDataColumn.prototype = new SAPB1.ComplexType();
SAPB1.MessageDataColumn.prototype.constructor = SAPB1.MessageDataColumn;
SAPB1.MessageDataColumn.ColumnName = { valueOf: function(){return 'ColumnName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageDataColumn.Link = { valueOf: function(){return 'Link';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageDataColumn.MessageDataLines = { valueOf: function(){return 'MessageDataLines';}, Type: 'MessageDataLine', Index: 2, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MessageDataColumn.prototype.ColumnName = new String();
SAPB1.MessageDataColumn.prototype.Link = new String();
SAPB1.MessageDataColumn.prototype.MessageDataLines = new MessageDataLineCollection();

SAPB1.MessageDataColumn.MessageDataLine = MessageDataLine
SAPB1.MessageDataColumn.MessageDataLineCollection = MessageDataLineCollection

SAPB1.MessageDataColumn.BoYesNoEnum = BoYesNoEnum

SAPB1.MessageDataColumn.create = function (rawObject) {
    var instance = new SAPB1.MessageDataColumn();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MessageDataColumn.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MessageDataColumn;
