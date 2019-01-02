

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChooseFromListParams = function () {
}
SAPB1.ChooseFromListParams.prototype = new SAPB1.ComplexType();
SAPB1.ChooseFromListParams.prototype.constructor = SAPB1.ChooseFromListParams;
SAPB1.ChooseFromListParams.ObjectName = { valueOf: function(){return 'ObjectName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromListParams.FieldIndex = { valueOf: function(){return 'FieldIndex';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChooseFromListParams.prototype.ObjectName = new String();
SAPB1.ChooseFromListParams.prototype.FieldIndex = new Number();



SAPB1.ChooseFromListParams.create = function (rawObject) {
    var instance = new SAPB1.ChooseFromListParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChooseFromListParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChooseFromListParams;
