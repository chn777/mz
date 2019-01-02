

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EcmActionDocParams = function () {
}
SAPB1.EcmActionDocParams.prototype = new SAPB1.ComplexType();
SAPB1.EcmActionDocParams.prototype.constructor = SAPB1.EcmActionDocParams;
SAPB1.EcmActionDocParams.Protocol = { valueOf: function(){return 'Protocol';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionDocParams.SourceType = { valueOf: function(){return 'SourceType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionDocParams.SourceObject = { valueOf: function(){return 'SourceObject';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionDocParams.prototype.Protocol = new String();
SAPB1.EcmActionDocParams.prototype.SourceType = new String();
SAPB1.EcmActionDocParams.prototype.SourceObject = new Number();



SAPB1.EcmActionDocParams.create = function (rawObject) {
    var instance = new SAPB1.EcmActionDocParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EcmActionDocParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EcmActionDocParams;
