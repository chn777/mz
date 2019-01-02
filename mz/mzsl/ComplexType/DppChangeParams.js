
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DppChangeParams = function () {
}
SAPB1.DppChangeParams.prototype = new SAPB1.ComplexType();
SAPB1.DppChangeParams.prototype.constructor = SAPB1.DppChangeParams;
SAPB1.DppChangeParams.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DppChangeParams.FromTime = { valueOf: function(){return 'FromTime';}, Type: 'Edm.Time', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DppChangeParams.HasChanged = { valueOf: function(){return 'HasChanged';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DppChangeParams.prototype.FromDate = new String();
SAPB1.DppChangeParams.prototype.FromTime = new String();
SAPB1.DppChangeParams.prototype.HasChanged = new String();


SAPB1.DppChangeParams.BoYesNoEnum = BoYesNoEnum

SAPB1.DppChangeParams.create = function (rawObject) {
    var instance = new SAPB1.DppChangeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DppChangeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DppChangeParams;
