var SerialNumber = require('ComplexType/SerialNumber')
var SerialNumberCollection = require('ComplexType/SerialNumberCollection')
var BatchNumber = require('ComplexType/BatchNumber')
var BatchNumberCollection = require('ComplexType/BatchNumberCollection')
var DocumentLinesBinAllocation = require('ComplexType/DocumentLinesBinAllocation')
var DocumentLinesBinAllocationCollection = require('ComplexType/DocumentLinesBinAllocationCollection')

var BoPickStatus = require('EnumType/BoPickStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PickListsLine = function () {
}
SAPB1.PickListsLine.prototype = new SAPB1.ComplexType();
SAPB1.PickListsLine.prototype.constructor = SAPB1.PickListsLine;
SAPB1.PickListsLine.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.OrderEntry = { valueOf: function(){return 'OrderEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.OrderRowID = { valueOf: function(){return 'OrderRowID';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.PickedQuantity = { valueOf: function(){return 'PickedQuantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.PickStatus = { valueOf: function(){return 'PickStatus';}, Type: 'BoPickStatus', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.ReleasedQuantity = { valueOf: function(){return 'ReleasedQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.PreviouslyReleasedQuantity = { valueOf: function(){return 'PreviouslyReleasedQuantity';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.BaseObjectType = { valueOf: function(){return 'BaseObjectType';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PickListsLine.SerialNumbers = { valueOf: function(){return 'SerialNumbers';}, Type: 'SerialNumber', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PickListsLine.BatchNumbers = { valueOf: function(){return 'BatchNumbers';}, Type: 'BatchNumber', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PickListsLine.DocumentLinesBinAllocations = { valueOf: function(){return 'DocumentLinesBinAllocations';}, Type: 'DocumentLinesBinAllocation', Index: 11, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PickListsLine.prototype.AbsoluteEntry = new Number();
SAPB1.PickListsLine.prototype.LineNumber = new Number();
SAPB1.PickListsLine.prototype.OrderEntry = new Number();
SAPB1.PickListsLine.prototype.OrderRowID = new Number();
SAPB1.PickListsLine.prototype.PickedQuantity = new Number();
SAPB1.PickListsLine.prototype.PickStatus = new String();
SAPB1.PickListsLine.prototype.ReleasedQuantity = new Number();
SAPB1.PickListsLine.prototype.PreviouslyReleasedQuantity = new Number();
SAPB1.PickListsLine.prototype.BaseObjectType = new Number();
SAPB1.PickListsLine.prototype.SerialNumbers = new SerialNumberCollection();
SAPB1.PickListsLine.prototype.BatchNumbers = new BatchNumberCollection();
SAPB1.PickListsLine.prototype.DocumentLinesBinAllocations = new DocumentLinesBinAllocationCollection();

SAPB1.PickListsLine.SerialNumber = SerialNumber
SAPB1.PickListsLine.SerialNumberCollection = SerialNumberCollection
SAPB1.PickListsLine.BatchNumber = BatchNumber
SAPB1.PickListsLine.BatchNumberCollection = BatchNumberCollection
SAPB1.PickListsLine.DocumentLinesBinAllocation = DocumentLinesBinAllocation
SAPB1.PickListsLine.DocumentLinesBinAllocationCollection = DocumentLinesBinAllocationCollection

SAPB1.PickListsLine.BoPickStatus = BoPickStatus

SAPB1.PickListsLine.create = function (rawObject) {
    var instance = new SAPB1.PickListsLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PickListsLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PickListsLine;
