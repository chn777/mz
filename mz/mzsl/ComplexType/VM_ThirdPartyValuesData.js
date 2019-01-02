

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VM_ThirdPartyValuesData = function () {
}
SAPB1.VM_ThirdPartyValuesData.prototype = new SAPB1.ComplexType();
SAPB1.VM_ThirdPartyValuesData.prototype.constructor = SAPB1.VM_ThirdPartyValuesData;
SAPB1.VM_ThirdPartyValuesData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VM_ThirdPartyValuesData.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VM_ThirdPartyValuesData.ThirdPartySystemId = { valueOf: function(){return 'ThirdPartySystemId';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VM_ThirdPartyValuesData.ThirdPartyValue = { valueOf: function(){return 'ThirdPartyValue';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VM_ThirdPartyValuesData.prototype.AbsEntry = new Number();
SAPB1.VM_ThirdPartyValuesData.prototype.LineId = new Number();
SAPB1.VM_ThirdPartyValuesData.prototype.ThirdPartySystemId = new Number();
SAPB1.VM_ThirdPartyValuesData.prototype.ThirdPartyValue = new String();



SAPB1.VM_ThirdPartyValuesData.create = function (rawObject) {
    var instance = new SAPB1.VM_ThirdPartyValuesData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VM_ThirdPartyValuesData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VM_ThirdPartyValuesData;
