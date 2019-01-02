
var ApprovalTemplateConditionTypeEnum = require('EnumType/ApprovalTemplateConditionTypeEnum')
var ApprovalTemplateOperationTypeEnum = require('EnumType/ApprovalTemplateOperationTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalTemplateTerm = function () {
}
SAPB1.ApprovalTemplateTerm.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalTemplateTerm.prototype.constructor = SAPB1.ApprovalTemplateTerm;
SAPB1.ApprovalTemplateTerm.ConditionType = { valueOf: function(){return 'ConditionType';}, Type: 'ApprovalTemplateConditionTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateTerm.OperationType = { valueOf: function(){return 'OperationType';}, Type: 'ApprovalTemplateOperationTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateTerm.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateTerm.prototype.ConditionType = new String();
SAPB1.ApprovalTemplateTerm.prototype.OperationType = new String();
SAPB1.ApprovalTemplateTerm.prototype.Value = new String();


SAPB1.ApprovalTemplateTerm.ApprovalTemplateConditionTypeEnum = ApprovalTemplateConditionTypeEnum
SAPB1.ApprovalTemplateTerm.ApprovalTemplateOperationTypeEnum = ApprovalTemplateOperationTypeEnum

SAPB1.ApprovalTemplateTerm.create = function (rawObject) {
    var instance = new SAPB1.ApprovalTemplateTerm();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalTemplateTerm.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalTemplateTerm;
