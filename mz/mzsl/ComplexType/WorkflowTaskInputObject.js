

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowTaskInputObject = function () {
}
SAPB1.WorkflowTaskInputObject.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowTaskInputObject.prototype.constructor = SAPB1.WorkflowTaskInputObject;
SAPB1.WorkflowTaskInputObject.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.Key = { valueOf: function(){return 'Key';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.SubType = { valueOf: function(){return 'SubType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.Detail = { valueOf: function(){return 'Detail';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskInputObject.prototype.TaskID = new Number();
SAPB1.WorkflowTaskInputObject.prototype.LineId = new Number();
SAPB1.WorkflowTaskInputObject.prototype.Type = new String();
SAPB1.WorkflowTaskInputObject.prototype.Key = new String();
SAPB1.WorkflowTaskInputObject.prototype.SubType = new String();
SAPB1.WorkflowTaskInputObject.prototype.Detail = new String();



SAPB1.WorkflowTaskInputObject.create = function (rawObject) {
    var instance = new SAPB1.WorkflowTaskInputObject();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowTaskInputObject.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowTaskInputObject;
