
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPBranchAssignmentItem = function () {
}
SAPB1.BPBranchAssignmentItem.prototype = new SAPB1.ComplexType();
SAPB1.BPBranchAssignmentItem.prototype.constructor = SAPB1.BPBranchAssignmentItem;
SAPB1.BPBranchAssignmentItem.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPBranchAssignmentItem.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBranchAssignmentItem.DisabledForBP = { valueOf: function(){return 'DisabledForBP';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBranchAssignmentItem.prototype.BPCode = new String();
SAPB1.BPBranchAssignmentItem.prototype.BPLID = new Number();
SAPB1.BPBranchAssignmentItem.prototype.DisabledForBP = new String();


SAPB1.BPBranchAssignmentItem.BoYesNoEnum = BoYesNoEnum

SAPB1.BPBranchAssignmentItem.create = function (rawObject) {
    var instance = new SAPB1.BPBranchAssignmentItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPBranchAssignmentItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPBranchAssignmentItem;
