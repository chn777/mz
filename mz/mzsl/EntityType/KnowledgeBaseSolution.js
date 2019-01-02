

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.KnowledgeBaseSolution = function () {
}
SAPB1.KnowledgeBaseSolution.prototype = new SAPB1.EntityType();
SAPB1.KnowledgeBaseSolution.prototype.constructor = SAPB1.KnowledgeBaseSolution;
SAPB1.KnowledgeBaseSolution.prototype.keys.push('SolutionCode');
SAPB1.KnowledgeBaseSolution.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.CreatedBy = { valueOf: function(){return 'CreatedBy';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.LastUpdatedBy = { valueOf: function(){return 'LastUpdatedBy';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.LastUpdateDate = { valueOf: function(){return 'LastUpdateDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Solution = { valueOf: function(){return 'Solution';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Symptom = { valueOf: function(){return 'Symptom';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Cause = { valueOf: function(){return 'Cause';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.SolutionCode = { valueOf: function(){return 'SolutionCode';}, Type: 'Edm.Int32', Index: 11, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KnowledgeBaseSolution.prototype.ItemCode = new String();
SAPB1.KnowledgeBaseSolution.prototype.Status = new Number();
SAPB1.KnowledgeBaseSolution.prototype.Owner = new Number();
SAPB1.KnowledgeBaseSolution.prototype.CreatedBy = new Number();
SAPB1.KnowledgeBaseSolution.prototype.CreationDate = new String();
SAPB1.KnowledgeBaseSolution.prototype.LastUpdatedBy = new Number();
SAPB1.KnowledgeBaseSolution.prototype.LastUpdateDate = new String();
SAPB1.KnowledgeBaseSolution.prototype.Solution = new String();
SAPB1.KnowledgeBaseSolution.prototype.Symptom = new String();
SAPB1.KnowledgeBaseSolution.prototype.Cause = new String();
SAPB1.KnowledgeBaseSolution.prototype.Description = new String();
SAPB1.KnowledgeBaseSolution.prototype.SolutionCode = new Number();
SAPB1.KnowledgeBaseSolution.prototype.AttachmentEntry = new Number();



SAPB1.KnowledgeBaseSolution.create = function (rawObject) {
    var instance = new SAPB1.KnowledgeBaseSolution();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.KnowledgeBaseSolution.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.KnowledgeBaseSolution;
