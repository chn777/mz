

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserBranchAssignmentItem = function () {
}
SAPB1.UserBranchAssignmentItem.prototype = new SAPB1.ComplexType();
SAPB1.UserBranchAssignmentItem.prototype.constructor = SAPB1.UserBranchAssignmentItem;
SAPB1.UserBranchAssignmentItem.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserBranchAssignmentItem.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserBranchAssignmentItem.prototype.UserCode = new String();
SAPB1.UserBranchAssignmentItem.prototype.BPLID = new Number();



SAPB1.UserBranchAssignmentItem.create = function (rawObject) {
    var instance = new SAPB1.UserBranchAssignmentItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserBranchAssignmentItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserBranchAssignmentItem;
