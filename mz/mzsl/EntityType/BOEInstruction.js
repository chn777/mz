
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEInstruction = function () {
}
SAPB1.BOEInstruction.prototype = new SAPB1.EntityType();
SAPB1.BOEInstruction.prototype.constructor = SAPB1.BOEInstruction;
SAPB1.BOEInstruction.prototype.keys.push('InstructionEntry');
SAPB1.BOEInstruction.InstructionEntry = { valueOf: function(){return 'InstructionEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEInstruction.InstructionCode = { valueOf: function(){return 'InstructionCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEInstruction.InstructionDesc = { valueOf: function(){return 'InstructionDesc';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEInstruction.IsCancelInstruction = { valueOf: function(){return 'IsCancelInstruction';}, Type: 'BoYesNoEnum', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEInstruction.prototype.InstructionEntry = new Number();
SAPB1.BOEInstruction.prototype.InstructionCode = new String();
SAPB1.BOEInstruction.prototype.InstructionDesc = new String();
SAPB1.BOEInstruction.prototype.IsCancelInstruction = new String();


SAPB1.BOEInstruction.BoYesNoEnum = BoYesNoEnum

SAPB1.BOEInstruction.create = function (rawObject) {
    var instance = new SAPB1.BOEInstruction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEInstruction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEInstruction;
