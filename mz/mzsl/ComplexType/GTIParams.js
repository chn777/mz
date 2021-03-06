

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GTIParams = function () {
}
SAPB1.GTIParams.prototype = new SAPB1.ComplexType();
SAPB1.GTIParams.prototype.constructor = SAPB1.GTIParams;
SAPB1.GTIParams.InboundFile = { valueOf: function(){return 'InboundFile';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GTIParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GTIParams.prototype.InboundFile = new String();
SAPB1.GTIParams.prototype.AbsEntry = new Number();



SAPB1.GTIParams.create = function (rawObject) {
    var instance = new SAPB1.GTIParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GTIParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GTIParams;
