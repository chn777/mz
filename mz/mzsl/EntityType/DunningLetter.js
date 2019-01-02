
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DunningLetter = function () {
}
SAPB1.DunningLetter.prototype = new SAPB1.EntityType();
SAPB1.DunningLetter.prototype.constructor = SAPB1.DunningLetter;
SAPB1.DunningLetter.prototype.keys.push('RowNumber');
SAPB1.DunningLetter.FeeCurrency = { valueOf: function(){return 'FeeCurrency';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.LetterFormat = { valueOf: function(){return 'LetterFormat';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.Effectiveafter = { valueOf: function(){return 'Effectiveafter';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.MinimumBalanceCurrency = { valueOf: function(){return 'MinimumBalanceCurrency';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.Feeperletter = { valueOf: function(){return 'Feeperletter';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.CalcInterest = { valueOf: function(){return 'CalcInterest';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.MinimumBalance = { valueOf: function(){return 'MinimumBalance';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DunningLetter.prototype.FeeCurrency = new String();
SAPB1.DunningLetter.prototype.RowNumber = new Number();
SAPB1.DunningLetter.prototype.LetterFormat = new String();
SAPB1.DunningLetter.prototype.Effectiveafter = new String();
SAPB1.DunningLetter.prototype.MinimumBalanceCurrency = new String();
SAPB1.DunningLetter.prototype.Feeperletter = new Number();
SAPB1.DunningLetter.prototype.CalcInterest = new String();
SAPB1.DunningLetter.prototype.MinimumBalance = new Number();


SAPB1.DunningLetter.BoYesNoEnum = BoYesNoEnum

SAPB1.DunningLetter.create = function (rawObject) {
    var instance = new SAPB1.DunningLetter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DunningLetter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DunningLetter;
