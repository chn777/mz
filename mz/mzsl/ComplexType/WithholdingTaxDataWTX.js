

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxDataWTX = function () {
}
SAPB1.WithholdingTaxDataWTX.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxDataWTX.prototype.constructor = SAPB1.WithholdingTaxDataWTX;
SAPB1.WithholdingTaxDataWTX.WTAmountSys = { valueOf: function(){return 'WTAmountSys';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.WTAmountFC = { valueOf: function(){return 'WTAmountFC';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.WTAmount = { valueOf: function(){return 'WTAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.WithholdingType = { valueOf: function(){return 'WithholdingType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.TaxableAmountinSys = { valueOf: function(){return 'TaxableAmountinSys';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.TaxableAmountFC = { valueOf: function(){return 'TaxableAmountFC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.TaxableAmount = { valueOf: function(){return 'TaxableAmount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.Category = { valueOf: function(){return 'Category';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AppliedWTAmountSys = { valueOf: function(){return 'AppliedWTAmountSys';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AppliedWTAmountFC = { valueOf: function(){return 'AppliedWTAmountFC';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AppliedWTAmount = { valueOf: function(){return 'AppliedWTAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 14, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseDocEntry = { valueOf: function(){return 'BaseDocEntry';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseDocLine = { valueOf: function(){return 'BaseDocLine';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseDocType = { valueOf: function(){return 'BaseDocType';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.WTAbsId = { valueOf: function(){return 'WTAbsId';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.ExemptRate = { valueOf: function(){return 'ExemptRate';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseNetAmountSys = { valueOf: function(){return 'BaseNetAmountSys';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseNetAmountFC = { valueOf: function(){return 'BaseNetAmountFC';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseNetAmount = { valueOf: function(){return 'BaseNetAmount';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseVatmountSys = { valueOf: function(){return 'BaseVatmountSys';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseVatmountFC = { valueOf: function(){return 'BaseVatmountFC';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.BaseVatmount = { valueOf: function(){return 'BaseVatmount';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumBaseAmountSys = { valueOf: function(){return 'AccumBaseAmountSys';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumBaseAmountFC = { valueOf: function(){return 'AccumBaseAmountFC';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumBaseAmount = { valueOf: function(){return 'AccumBaseAmount';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumWTaxAmountSys = { valueOf: function(){return 'AccumWTaxAmountSys';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumWTaxAmountFC = { valueOf: function(){return 'AccumWTaxAmountFC';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.AccumWTaxAmount = { valueOf: function(){return 'AccumWTaxAmount';}, Type: 'Edm.Double', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxDataWTX.prototype.WTAmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.WTAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.WTAmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.WithholdingType = new String();
SAPB1.WithholdingTaxDataWTX.prototype.TaxableAmountinSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.TaxableAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.TaxableAmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.Rate = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.Category = new String();
SAPB1.WithholdingTaxDataWTX.prototype.BaseType = new String();
SAPB1.WithholdingTaxDataWTX.prototype.AppliedWTAmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AppliedWTAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AppliedWTAmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.GLAccount = new String();
SAPB1.WithholdingTaxDataWTX.prototype.LineNum = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseDocEntry = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseDocLine = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseDocType = new String();
SAPB1.WithholdingTaxDataWTX.prototype.WTAbsId = new String();
SAPB1.WithholdingTaxDataWTX.prototype.ExemptRate = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseNetAmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseNetAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseNetAmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseVatmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseVatmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.BaseVatmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumBaseAmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumBaseAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumBaseAmount = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumWTaxAmountSys = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumWTaxAmountFC = new Number();
SAPB1.WithholdingTaxDataWTX.prototype.AccumWTaxAmount = new Number();



SAPB1.WithholdingTaxDataWTX.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxDataWTX();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxDataWTX.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxDataWTX;
