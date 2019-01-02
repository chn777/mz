

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TrackingNoteBroker = function () {
}
SAPB1.TrackingNoteBroker.prototype = new SAPB1.ComplexType();
SAPB1.TrackingNoteBroker.prototype.constructor = SAPB1.TrackingNoteBroker;
SAPB1.TrackingNoteBroker.TrackingNoteNumber = { valueOf: function(){return 'TrackingNoteNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteBroker.TrackingNoteLineNumber = { valueOf: function(){return 'TrackingNoteLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteBroker.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteBroker.AgreementNumber = { valueOf: function(){return 'AgreementNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNoteBroker.prototype.TrackingNoteNumber = new Number();
SAPB1.TrackingNoteBroker.prototype.TrackingNoteLineNumber = new Number();
SAPB1.TrackingNoteBroker.prototype.BPCode = new String();
SAPB1.TrackingNoteBroker.prototype.AgreementNumber = new Number();



SAPB1.TrackingNoteBroker.create = function (rawObject) {
    var instance = new SAPB1.TrackingNoteBroker();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TrackingNoteBroker.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TrackingNoteBroker;
