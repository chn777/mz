

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEInstructionParams = function () {
}
SAPB1.BOEInstructionParams.prototype = new SAPB1.ComplexType();
SAPB1.BOEInstructionParams.prototype.constructor = SAPB1.BOEInstructionParams;
SAPB1.BOEInstructionParams.InstructionEntry = { valueOf: function(){return 'InstructionEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEInstructionParams.InstructionCode = { valueOf: function(){return 'InstructionCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEInstructionParams.prototype.InstructionEntry = new Number();
SAPB1.BOEInstructionParams.prototype.InstructionCode = new String();



SAPB1.BOEInstructionParams.create = function (rawObject) {
    var instance = new SAPB1.BOEInstructionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEInstructionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEInstructionParams;
