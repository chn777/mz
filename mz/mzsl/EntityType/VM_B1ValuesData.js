var VM_ThirdPartyValuesData = require('ComplexType/VM_ThirdPartyValuesData')
var VM_ThirdPartyValuesDataCollection = require('ComplexType/VM_ThirdPartyValuesDataCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VM_B1ValuesData = function () {
}
SAPB1.VM_B1ValuesData.prototype = new SAPB1.EntityType();
SAPB1.VM_B1ValuesData.prototype.constructor = SAPB1.VM_B1ValuesData;
SAPB1.VM_B1ValuesData.prototype.keys.push('AbsEntry');
SAPB1.VM_B1ValuesData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VM_B1ValuesData.ObjectId = { valueOf: function(){return 'ObjectId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VM_B1ValuesData.ObjectAbsEntry = { valueOf: function(){return 'ObjectAbsEntry';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VM_B1ValuesData.VM_ThirdPartyValuesCollection = { valueOf: function(){return 'VM_ThirdPartyValuesCollection';}, Type: 'VM_ThirdPartyValuesData', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.VM_B1ValuesData.prototype.AbsEntry = new Number();
SAPB1.VM_B1ValuesData.prototype.ObjectId = new Number();
SAPB1.VM_B1ValuesData.prototype.ObjectAbsEntry = new String();
SAPB1.VM_B1ValuesData.prototype.VM_ThirdPartyValuesCollection = new VM_ThirdPartyValuesDataCollection();

SAPB1.VM_B1ValuesData.VM_ThirdPartyValuesData = VM_ThirdPartyValuesData
SAPB1.VM_B1ValuesData.VM_ThirdPartyValuesDataCollection = VM_ThirdPartyValuesDataCollection


SAPB1.VM_B1ValuesData.create = function (rawObject) {
    var instance = new SAPB1.VM_B1ValuesData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VM_B1ValuesData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VM_B1ValuesData;
