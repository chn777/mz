

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowTaskCompleteParams = function () {
}
SAPB1.WorkflowTaskCompleteParams.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowTaskCompleteParams.prototype.constructor = SAPB1.WorkflowTaskCompleteParams;
SAPB1.WorkflowTaskCompleteParams.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskCompleteParams.Note = { valueOf: function(){return 'Note';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskCompleteParams.TriggerParams = { valueOf: function(){return 'TriggerParams';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowTaskCompleteParams.prototype.TaskID = new Number();
SAPB1.WorkflowTaskCompleteParams.prototype.Note = new String();
SAPB1.WorkflowTaskCompleteParams.prototype.TriggerParams = new String();



SAPB1.WorkflowTaskCompleteParams.create = function (rawObject) {
    var instance = new SAPB1.WorkflowTaskCompleteParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowTaskCompleteParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowTaskCompleteParams;
