
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentInstallment = function () {
}
SAPB1.DocumentInstallment.prototype = new SAPB1.ComplexType();
SAPB1.DocumentInstallment.prototype.constructor = SAPB1.DocumentInstallment;
SAPB1.DocumentInstallment.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.Percentage = { valueOf: function(){return 'Percentage';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.LastDunningDate = { valueOf: function(){return 'LastDunningDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.DunningLevel = { valueOf: function(){return 'DunningLevel';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.TotalFC = { valueOf: function(){return 'TotalFC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.InstallmentId = { valueOf: function(){return 'InstallmentId';}, Type: 'Edm.Int32', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.PaymentOrdered = { valueOf: function(){return 'PaymentOrdered';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentInstallment.prototype.DueDate = new String();
SAPB1.DocumentInstallment.prototype.Percentage = new Number();
SAPB1.DocumentInstallment.prototype.Total = new Number();
SAPB1.DocumentInstallment.prototype.LastDunningDate = new String();
SAPB1.DocumentInstallment.prototype.DunningLevel = new Number();
SAPB1.DocumentInstallment.prototype.TotalFC = new Number();
SAPB1.DocumentInstallment.prototype.InstallmentId = new Number();
SAPB1.DocumentInstallment.prototype.PaymentOrdered = new String();


SAPB1.DocumentInstallment.BoYesNoEnum = BoYesNoEnum

SAPB1.DocumentInstallment.create = function (rawObject) {
    var instance = new SAPB1.DocumentInstallment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentInstallment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentInstallment;
