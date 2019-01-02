

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TerminationReasonParams = function () {
}
SAPB1.TerminationReasonParams.prototype = new SAPB1.ComplexType();
SAPB1.TerminationReasonParams.prototype.constructor = SAPB1.TerminationReasonParams;
SAPB1.TerminationReasonParams.ReasonID = { valueOf: function(){return 'ReasonID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TerminationReasonParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TerminationReasonParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TerminationReasonParams.prototype.ReasonID = new Number();
SAPB1.TerminationReasonParams.prototype.Name = new String();
SAPB1.TerminationReasonParams.prototype.Description = new String();



SAPB1.TerminationReasonParams.create = function (rawObject) {
    var instance = new SAPB1.TerminationReasonParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TerminationReasonParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TerminationReasonParams;
