

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.QueueMember = function () {
}
SAPB1.QueueMember.prototype = new SAPB1.ComplexType();
SAPB1.QueueMember.prototype.constructor = SAPB1.QueueMember;
SAPB1.QueueMember.QueueID = { valueOf: function(){return 'QueueID';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueueMember.MemberUserID = { valueOf: function(){return 'MemberUserID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueueMember.prototype.QueueID = new String();
SAPB1.QueueMember.prototype.MemberUserID = new Number();



SAPB1.QueueMember.create = function (rawObject) {
    var instance = new SAPB1.QueueMember();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.QueueMember.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.QueueMember;
