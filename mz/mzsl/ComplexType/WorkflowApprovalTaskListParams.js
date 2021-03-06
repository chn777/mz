

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkflowApprovalTaskListParams = function () {
}
SAPB1.WorkflowApprovalTaskListParams.prototype = new SAPB1.ComplexType();
SAPB1.WorkflowApprovalTaskListParams.prototype.constructor = SAPB1.WorkflowApprovalTaskListParams;
SAPB1.WorkflowApprovalTaskListParams.Status = { valueOf: function(){return 'Status';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkflowApprovalTaskListParams.prototype.Status = new String();



SAPB1.WorkflowApprovalTaskListParams.create = function (rawObject) {
    var instance = new SAPB1.WorkflowApprovalTaskListParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkflowApprovalTaskListParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkflowApprovalTaskListParams;
