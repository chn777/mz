

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NatureOfAssesseeParams = function () {
}
SAPB1.NatureOfAssesseeParams.prototype = new SAPB1.ComplexType();
SAPB1.NatureOfAssesseeParams.prototype.constructor = SAPB1.NatureOfAssesseeParams;
SAPB1.NatureOfAssesseeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssesseeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssesseeParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssesseeParams.prototype.AbsEntry = new Number();
SAPB1.NatureOfAssesseeParams.prototype.Code = new String();
SAPB1.NatureOfAssesseeParams.prototype.Description = new String();



SAPB1.NatureOfAssesseeParams.create = function (rawObject) {
    var instance = new SAPB1.NatureOfAssesseeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NatureOfAssesseeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NatureOfAssesseeParams;
