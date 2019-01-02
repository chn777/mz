

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowTaskOutputObject = function () {
}
SAPB1.WorkflowTaskOutputObject.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowTaskOutputObject.prototype.constructor = SAPB1.WorkflowTaskOutputObject;
SAPB1.WorkflowTaskOutputObject.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskOutputObject.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskOutputObject.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskOutputObject.Key = { valueOf: function(){return 'Key';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskOutputObject.SubType = { valueOf: function(){return 'SubType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskOutputObject.prototype.TaskID = new Number();
SAPB1.WorkflowTaskOutputObject.prototype.LineId = new String();
SAPB1.WorkflowTaskOutputObject.prototype.Type = new String();
SAPB1.WorkflowTaskOutputObject.prototype.Key = new String();
SAPB1.WorkflowTaskOutputObject.prototype.SubType = new String();



SAPB1.WorkflowTaskOutputObject.create = function (rawObject) {
    var instance = new SAPB1.WorkflowTaskOutputObject();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowTaskOutputObject.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowTaskOutputObject;
