var WorkflowTaskInputObject = require('ComplexType/WorkflowTaskInputObject')
var WorkflowTaskInputObjectCollection = require('ComplexType/WorkflowTaskInputObjectCollection')
var WorkflowTaskNote = require('ComplexType/WorkflowTaskNote')
var WorkflowTaskNoteCollection = require('ComplexType/WorkflowTaskNoteCollection')
var WorkflowTaskOutputObject = require('ComplexType/WorkflowTaskOutputObject')
var WorkflowTaskOutputObjectCollection = require('ComplexType/WorkflowTaskOutputObjectCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowTask = function () {
}
SAPB1.WorkflowTask.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowTask.prototype.constructor = SAPB1.WorkflowTask;
SAPB1.WorkflowTask.InstanceID = { valueOf: function(){return 'InstanceID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.TemplateID = { valueOf: function(){return 'TemplateID';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.TemplateName = { valueOf: function(){return 'TemplateName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Operation = { valueOf: function(){return 'Operation';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTask.WorkflowTaskInputObjectCollection = { valueOf: function(){return 'WorkflowTaskInputObjectCollection';}, Type: 'WorkflowTaskInputObject', Index: 11, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WorkflowTask.WorkflowTaskNoteCollection = { valueOf: function(){return 'WorkflowTaskNoteCollection';}, Type: 'WorkflowTaskNote', Index: 12, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WorkflowTask.WorkflowTaskOutputObjectCollection = { valueOf: function(){return 'WorkflowTaskOutputObjectCollection';}, Type: 'WorkflowTaskOutputObject', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WorkflowTask.prototype.InstanceID = new Number();
SAPB1.WorkflowTask.prototype.TaskID = new Number();
SAPB1.WorkflowTask.prototype.TemplateID = new String();
SAPB1.WorkflowTask.prototype.TemplateName = new String();
SAPB1.WorkflowTask.prototype.Description = new String();
SAPB1.WorkflowTask.prototype.Operation = new String();
SAPB1.WorkflowTask.prototype.Type = new String();
SAPB1.WorkflowTask.prototype.Owner = new String();
SAPB1.WorkflowTask.prototype.Priority = new Number();
SAPB1.WorkflowTask.prototype.Status = new String();
SAPB1.WorkflowTask.prototype.Name = new String();
SAPB1.WorkflowTask.prototype.WorkflowTaskInputObjectCollection = new WorkflowTaskInputObjectCollection();
SAPB1.WorkflowTask.prototype.WorkflowTaskNoteCollection = new WorkflowTaskNoteCollection();
SAPB1.WorkflowTask.prototype.WorkflowTaskOutputObjectCollection = new WorkflowTaskOutputObjectCollection();

SAPB1.WorkflowTask.WorkflowTaskInputObject = WorkflowTaskInputObject
SAPB1.WorkflowTask.WorkflowTaskInputObjectCollection = WorkflowTaskInputObjectCollection
SAPB1.WorkflowTask.WorkflowTaskNote = WorkflowTaskNote
SAPB1.WorkflowTask.WorkflowTaskNoteCollection = WorkflowTaskNoteCollection
SAPB1.WorkflowTask.WorkflowTaskOutputObject = WorkflowTaskOutputObject
SAPB1.WorkflowTask.WorkflowTaskOutputObjectCollection = WorkflowTaskOutputObjectCollection


SAPB1.WorkflowTask.create = function (rawObject) {
    var instance = new SAPB1.WorkflowTask();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowTask.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowTask;
