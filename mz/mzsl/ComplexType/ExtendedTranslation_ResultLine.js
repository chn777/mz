

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExtendedTranslation_ResultLine = function () {
}
SAPB1.ExtendedTranslation_ResultLine.prototype = new SAPB1.ComplexType();
SAPB1.ExtendedTranslation_ResultLine.prototype.constructor = SAPB1.ExtendedTranslation_ResultLine;
SAPB1.ExtendedTranslation_ResultLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ResultLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ResultLine.SubLineNumber = { valueOf: function(){return 'SubLineNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ResultLine.LanguageCode = { valueOf: function(){return 'LanguageCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ResultLine.TranslatedText = { valueOf: function(){return 'TranslatedText';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation_ResultLine.prototype.DocEntry = new Number();
SAPB1.ExtendedTranslation_ResultLine.prototype.LineNumber = new Number();
SAPB1.ExtendedTranslation_ResultLine.prototype.SubLineNumber = new Number();
SAPB1.ExtendedTranslation_ResultLine.prototype.LanguageCode = new Number();
SAPB1.ExtendedTranslation_ResultLine.prototype.TranslatedText = new String();



SAPB1.ExtendedTranslation_ResultLine.create = function (rawObject) {
    var instance = new SAPB1.ExtendedTranslation_ResultLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExtendedTranslation_ResultLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExtendedTranslation_ResultLine;
