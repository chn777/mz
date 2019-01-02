
var BoBoeStatus = require('EnumType/BoBoeStatus')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOELine = function () {
}
SAPB1.BOELine.prototype = new SAPB1.ComplexType();
SAPB1.BOELine.prototype.constructor = SAPB1.BOELine;
SAPB1.BOELine.BOEKey = { valueOf: function(){return 'BOEKey';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOELine.BOENumber = { valueOf: function(){return 'BOENumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOELine.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.Bank = { valueOf: function(){return 'Bank';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.AccountNumber = { valueOf: function(){return 'AccountNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.BOEStatus = { valueOf: function(){return 'BOEStatus';}, Type: 'BoBoeStatus', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.Transferred = { valueOf: function(){return 'Transferred';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOELine.prototype.BOEKey = new Number();
SAPB1.BOELine.prototype.BOENumber = new Number();
SAPB1.BOELine.prototype.DueDate = new String();
SAPB1.BOELine.prototype.Bank = new String();
SAPB1.BOELine.prototype.Branch = new String();
SAPB1.BOELine.prototype.AccountNumber = new String();
SAPB1.BOELine.prototype.Amount = new Number();
SAPB1.BOELine.prototype.BOEStatus = new String();
SAPB1.BOELine.prototype.Transferred = new String();


SAPB1.BOELine.BoBoeStatus = BoBoeStatus
SAPB1.BOELine.BoYesNoEnum = BoYesNoEnum

SAPB1.BOELine.create = function (rawObject) {
    var instance = new SAPB1.BOELine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOELine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOELine;
