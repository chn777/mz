
var BlanketAgreementDatePeriodsEnum = require('EnumType/BlanketAgreementDatePeriodsEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlanketAgreements_DetailsLine = function () {
}
SAPB1.BlanketAgreements_DetailsLine.prototype = new SAPB1.ComplexType();
SAPB1.BlanketAgreements_DetailsLine.prototype.constructor = SAPB1.BlanketAgreements_DetailsLine;
SAPB1.BlanketAgreements_DetailsLine.AgreementNo = { valueOf: function(){return 'AgreementNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.AgreementRowNumber = { valueOf: function(){return 'AgreementRowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.AgreementEffectiveRowNumber = { valueOf: function(){return 'AgreementEffectiveRowNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.Frequency = { valueOf: function(){return 'Frequency';}, Type: 'BlanketAgreementDatePeriodsEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.From = { valueOf: function(){return 'From';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.To = { valueOf: function(){return 'To';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.ReleaseInformation = { valueOf: function(){return 'ReleaseInformation';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.FreeText = { valueOf: function(){return 'FreeText';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.ConsumeSalesForecast = { valueOf: function(){return 'ConsumeSalesForecast';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.PlannedAmountLC = { valueOf: function(){return 'PlannedAmountLC';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.PlannedAmountFC = { valueOf: function(){return 'PlannedAmountFC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_DetailsLine.prototype.AgreementNo = new Number();
SAPB1.BlanketAgreements_DetailsLine.prototype.AgreementRowNumber = new Number();
SAPB1.BlanketAgreements_DetailsLine.prototype.AgreementEffectiveRowNumber = new Number();
SAPB1.BlanketAgreements_DetailsLine.prototype.Frequency = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.From = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.To = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.ReleaseInformation = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.Quantity = new Number();
SAPB1.BlanketAgreements_DetailsLine.prototype.Warehouse = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.FreeText = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.ConsumeSalesForecast = new String();
SAPB1.BlanketAgreements_DetailsLine.prototype.PlannedAmountLC = new Number();
SAPB1.BlanketAgreements_DetailsLine.prototype.PlannedAmountFC = new Number();


SAPB1.BlanketAgreements_DetailsLine.BlanketAgreementDatePeriodsEnum = BlanketAgreementDatePeriodsEnum
SAPB1.BlanketAgreements_DetailsLine.BoYesNoEnum = BoYesNoEnum

SAPB1.BlanketAgreements_DetailsLine.create = function (rawObject) {
    var instance = new SAPB1.BlanketAgreements_DetailsLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlanketAgreements_DetailsLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlanketAgreements_DetailsLine;
