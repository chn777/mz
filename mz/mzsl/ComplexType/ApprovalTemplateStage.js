

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalTemplateStage = function () {
}
SAPB1.ApprovalTemplateStage.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalTemplateStage.prototype.constructor = SAPB1.ApprovalTemplateStage;
SAPB1.ApprovalTemplateStage.SortID = { valueOf: function(){return 'SortID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateStage.ApprovalStageCode = { valueOf: function(){return 'ApprovalStageCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateStage.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateStage.prototype.SortID = new Number();
SAPB1.ApprovalTemplateStage.prototype.ApprovalStageCode = new Number();
SAPB1.ApprovalTemplateStage.prototype.Remarks = new String();



SAPB1.ApprovalTemplateStage.create = function (rawObject) {
    var instance = new SAPB1.ApprovalTemplateStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalTemplateStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalTemplateStage;
