
var DocumentObjectTypeEnum = require('EnumType/DocumentObjectTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TransportationDocumentLineData = function () {
}
SAPB1.TransportationDocumentLineData.prototype = new SAPB1.ComplexType();
SAPB1.TransportationDocumentLineData.prototype.constructor = SAPB1.TransportationDocumentLineData;
SAPB1.TransportationDocumentLineData.TranspDocNumber = { valueOf: function(){return 'TranspDocNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.DocType = { valueOf: function(){return 'DocType';}, Type: 'DocumentObjectTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.DocLineNumber = { valueOf: function(){return 'DocLineNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.TransportedQuantity = { valueOf: function(){return 'TransportedQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.DocOrderNum = { valueOf: function(){return 'DocOrderNum';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentLineData.prototype.TranspDocNumber = new Number();
SAPB1.TransportationDocumentLineData.prototype.LineID = new Number();
SAPB1.TransportationDocumentLineData.prototype.DocType = new String();
SAPB1.TransportationDocumentLineData.prototype.DocNumber = new Number();
SAPB1.TransportationDocumentLineData.prototype.DocLineNumber = new Number();
SAPB1.TransportationDocumentLineData.prototype.ItemCode = new String();
SAPB1.TransportationDocumentLineData.prototype.TransportedQuantity = new Number();
SAPB1.TransportationDocumentLineData.prototype.DocOrderNum = new Number();


SAPB1.TransportationDocumentLineData.DocumentObjectTypeEnum = DocumentObjectTypeEnum

SAPB1.TransportationDocumentLineData.create = function (rawObject) {
    var instance = new SAPB1.TransportationDocumentLineData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TransportationDocumentLineData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TransportationDocumentLineData;
