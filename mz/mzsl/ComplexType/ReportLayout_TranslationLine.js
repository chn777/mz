

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportLayout_TranslationLine = function () {
}
SAPB1.ReportLayout_TranslationLine.prototype = new SAPB1.ComplexType();
SAPB1.ReportLayout_TranslationLine.prototype.constructor = SAPB1.ReportLayout_TranslationLine;
SAPB1.ReportLayout_TranslationLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.DocName = { valueOf: function(){return 'DocName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.LanguageCode = { valueOf: function(){return 'LanguageCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout_TranslationLine.prototype.DocEntry = new String();
SAPB1.ReportLayout_TranslationLine.prototype.LineNumber = new Number();
SAPB1.ReportLayout_TranslationLine.prototype.DocName = new String();
SAPB1.ReportLayout_TranslationLine.prototype.LanguageCode = new Number();
SAPB1.ReportLayout_TranslationLine.prototype.CreateDate = new String();
SAPB1.ReportLayout_TranslationLine.prototype.UpdateDate = new String();
SAPB1.ReportLayout_TranslationLine.prototype.CreateTime = new Number();
SAPB1.ReportLayout_TranslationLine.prototype.UpdateTime = new Number();



SAPB1.ReportLayout_TranslationLine.create = function (rawObject) {
    var instance = new SAPB1.ReportLayout_TranslationLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportLayout_TranslationLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportLayout_TranslationLine;
