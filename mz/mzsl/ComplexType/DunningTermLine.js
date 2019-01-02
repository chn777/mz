
var DunningLetterTypeEnum = require('EnumType/DunningLetterTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DunningTermLine = function () {
}
SAPB1.DunningTermLine.prototype = new SAPB1.ComplexType();
SAPB1.DunningTermLine.prototype.constructor = SAPB1.DunningTermLine;
SAPB1.DunningTermLine.LevelNum = { valueOf: function(){return 'LevelNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.LetterFormat = { valueOf: function(){return 'LetterFormat';}, Type: 'DunningLetterTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.Effectiveafter = { valueOf: function(){return 'Effectiveafter';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.LetterFee = { valueOf: function(){return 'LetterFee';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.LetterFeeCurrency = { valueOf: function(){return 'LetterFeeCurrency';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.MininumBalance = { valueOf: function(){return 'MininumBalance';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.MininumBalanceCurrency = { valueOf: function(){return 'MininumBalanceCurrency';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.CalculateInterest = { valueOf: function(){return 'CalculateInterest';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningTermLine.prototype.LevelNum = new Number();
SAPB1.DunningTermLine.prototype.LetterFormat = new String();
SAPB1.DunningTermLine.prototype.Effectiveafter = new String();
SAPB1.DunningTermLine.prototype.LetterFee = new Number();
SAPB1.DunningTermLine.prototype.LetterFeeCurrency = new String();
SAPB1.DunningTermLine.prototype.MininumBalance = new Number();
SAPB1.DunningTermLine.prototype.MininumBalanceCurrency = new String();
SAPB1.DunningTermLine.prototype.CalculateInterest = new String();


SAPB1.DunningTermLine.DunningLetterTypeEnum = DunningLetterTypeEnum
SAPB1.DunningTermLine.BoYesNoEnum = BoYesNoEnum

SAPB1.DunningTermLine.create = function (rawObject) {
    var instance = new SAPB1.DunningTermLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DunningTermLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DunningTermLine;
