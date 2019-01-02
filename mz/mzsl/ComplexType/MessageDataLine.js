

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MessageDataLine = function () {
}
SAPB1.MessageDataLine.prototype = new SAPB1.ComplexType();
SAPB1.MessageDataLine.prototype.constructor = SAPB1.MessageDataLine;
SAPB1.MessageDataLine.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageDataLine.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageDataLine.ObjectKey = { valueOf: function(){return 'ObjectKey';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageDataLine.prototype.Value = new String();
SAPB1.MessageDataLine.prototype.Object = new String();
SAPB1.MessageDataLine.prototype.ObjectKey = new String();



SAPB1.MessageDataLine.create = function (rawObject) {
    var instance = new SAPB1.MessageDataLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MessageDataLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MessageDataLine;
