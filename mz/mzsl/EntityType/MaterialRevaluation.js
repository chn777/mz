var MaterialRevaluationLine = require('ComplexType/MaterialRevaluationLine')
var MaterialRevaluationLineCollection = require('ComplexType/MaterialRevaluationLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialRevaluation = function () {
}
SAPB1.MaterialRevaluation.prototype = new SAPB1.EntityType();
SAPB1.MaterialRevaluation.prototype.constructor = SAPB1.MaterialRevaluation;
SAPB1.MaterialRevaluation.prototype.keys.push('DocEntry');
SAPB1.MaterialRevaluation.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.Reference1 = { valueOf: function(){return 'Reference1';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.Comments = { valueOf: function(){return 'Comments';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.JournalMemo = { valueOf: function(){return 'JournalMemo';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.DocTime = { valueOf: function(){return 'DocTime';}, Type: 'Edm.Time', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.TransNum = { valueOf: function(){return 'TransNum';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.RevalType = { valueOf: function(){return 'RevalType';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.RevaluationIncomeAccount = { valueOf: function(){return 'RevaluationIncomeAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.RevaluationExpenseAccount = { valueOf: function(){return 'RevaluationExpenseAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.InflationRevaluation = { valueOf: function(){return 'InflationRevaluation';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.CardName = { valueOf: function(){return 'CardName';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluation.MaterialRevaluationLines = { valueOf: function(){return 'MaterialRevaluationLines';}, Type: 'MaterialRevaluationLine', Index: 21, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MaterialRevaluation.prototype.DocNum = new Number();
SAPB1.MaterialRevaluation.prototype.DocDate = new String();
SAPB1.MaterialRevaluation.prototype.Reference1 = new String();
SAPB1.MaterialRevaluation.prototype.Reference2 = new String();
SAPB1.MaterialRevaluation.prototype.Comments = new String();
SAPB1.MaterialRevaluation.prototype.JournalMemo = new String();
SAPB1.MaterialRevaluation.prototype.DocTime = new String();
SAPB1.MaterialRevaluation.prototype.Series = new Number();
SAPB1.MaterialRevaluation.prototype.TaxDate = new String();
SAPB1.MaterialRevaluation.prototype.DocEntry = new Number();
SAPB1.MaterialRevaluation.prototype.CreationDate = new String();
SAPB1.MaterialRevaluation.prototype.UpdateDate = new String();
SAPB1.MaterialRevaluation.prototype.TransNum = new Number();
SAPB1.MaterialRevaluation.prototype.RevalType = new String();
SAPB1.MaterialRevaluation.prototype.RevaluationIncomeAccount = new String();
SAPB1.MaterialRevaluation.prototype.RevaluationExpenseAccount = new String();
SAPB1.MaterialRevaluation.prototype.DataSource = new String();
SAPB1.MaterialRevaluation.prototype.UserSignature = new Number();
SAPB1.MaterialRevaluation.prototype.InflationRevaluation = new String();
SAPB1.MaterialRevaluation.prototype.CardCode = new String();
SAPB1.MaterialRevaluation.prototype.CardName = new String();
SAPB1.MaterialRevaluation.prototype.MaterialRevaluationLines = new MaterialRevaluationLineCollection();

SAPB1.MaterialRevaluation.MaterialRevaluationLine = MaterialRevaluationLine
SAPB1.MaterialRevaluation.MaterialRevaluationLineCollection = MaterialRevaluationLineCollection

SAPB1.MaterialRevaluation.BoYesNoEnum = BoYesNoEnum

SAPB1.MaterialRevaluation.create = function (rawObject) {
    var instance = new SAPB1.MaterialRevaluation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialRevaluation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialRevaluation;
