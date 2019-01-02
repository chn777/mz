var FiscalPrinterParams = require('ComplexType/FiscalPrinterParams')
var FiscalPrinterParamsCollection = require('ComplexType/FiscalPrinterParamsCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FiscalPrinter = function () {
}
SAPB1.FiscalPrinter.prototype = new SAPB1.EntityType();
SAPB1.FiscalPrinter.prototype.constructor = SAPB1.FiscalPrinter;
SAPB1.FiscalPrinter.prototype.keys.push('EquipmentNo');
SAPB1.FiscalPrinter.EquipmentNo = { valueOf: function(){return 'EquipmentNo';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FiscalPrinter.Model = { valueOf: function(){return 'Model';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FiscalPrinter.ManufacturerSerialN = { valueOf: function(){return 'ManufacturerSerialN';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FiscalPrinter.RegisterNo = { valueOf: function(){return 'RegisterNo';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FiscalPrinter.FiscalDocumentModel = { valueOf: function(){return 'FiscalDocumentModel';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FiscalPrinter.FiscalPrintersParams = { valueOf: function(){return 'FiscalPrintersParams';}, Type: 'FiscalPrinterParams', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.FiscalPrinter.prototype.EquipmentNo = new String();
SAPB1.FiscalPrinter.prototype.Model = new String();
SAPB1.FiscalPrinter.prototype.ManufacturerSerialN = new String();
SAPB1.FiscalPrinter.prototype.RegisterNo = new Number();
SAPB1.FiscalPrinter.prototype.FiscalDocumentModel = new String();
SAPB1.FiscalPrinter.prototype.FiscalPrintersParams = new FiscalPrinterParamsCollection();

SAPB1.FiscalPrinter.FiscalPrinterParams = FiscalPrinterParams
SAPB1.FiscalPrinter.FiscalPrinterParamsCollection = FiscalPrinterParamsCollection


SAPB1.FiscalPrinter.create = function (rawObject) {
    var instance = new SAPB1.FiscalPrinter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FiscalPrinter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FiscalPrinter;
