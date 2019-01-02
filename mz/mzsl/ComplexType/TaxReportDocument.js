
var TaxReportFilterDocumentType = require('EnumType/TaxReportFilterDocumentType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxReportDocument = function () {
}
SAPB1.TaxReportDocument.prototype = new SAPB1.ComplexType();
SAPB1.TaxReportDocument.prototype.constructor = SAPB1.TaxReportDocument;
SAPB1.TaxReportDocument.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'TaxReportFilterDocumentType', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportDocument.FromNumber = { valueOf: function(){return 'FromNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportDocument.ToNumber = { valueOf: function(){return 'ToNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportDocument.prototype.DocumentType = new String();
SAPB1.TaxReportDocument.prototype.FromNumber = new Number();
SAPB1.TaxReportDocument.prototype.ToNumber = new Number();


SAPB1.TaxReportDocument.TaxReportFilterDocumentType = TaxReportFilterDocumentType

SAPB1.TaxReportDocument.create = function (rawObject) {
    var instance = new SAPB1.TaxReportDocument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxReportDocument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxReportDocument;
