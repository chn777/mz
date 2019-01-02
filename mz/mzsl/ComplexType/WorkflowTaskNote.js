

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowTaskNote = function () {
}
SAPB1.WorkflowTaskNote.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowTaskNote.prototype.constructor = SAPB1.WorkflowTaskNote;
SAPB1.WorkflowTaskNote.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskNote.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskNote.Note = { valueOf: function(){return 'Note';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskNote.Creator = { valueOf: function(){return 'Creator';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskNote.NoteDate = { valueOf: function(){return 'NoteDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskNote.prototype.TaskID = new Number();
SAPB1.WorkflowTaskNote.prototype.LineId = new Number();
SAPB1.WorkflowTaskNote.prototype.Note = new String();
SAPB1.WorkflowTaskNote.prototype.Creator = new String();
SAPB1.WorkflowTaskNote.prototype.NoteDate = new String();



SAPB1.WorkflowTaskNote.create = function (rawObject) {
    var instance = new SAPB1.WorkflowTaskNote();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowTaskNote.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowTaskNote;
