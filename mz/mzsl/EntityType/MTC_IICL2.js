

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_IICL2 = function () {
}
SAPB1.MTC_IICL2.prototype = new SAPB1.EntityType();
SAPB1.MTC_IICL2.prototype.constructor = SAPB1.MTC_IICL2;
SAPB1.MTC_IICL2.prototype.keys.push('Code');
SAPB1.MTC_IICL2.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_IICL2.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_IICL2.prototype.Code = new String();
SAPB1.MTC_IICL2.prototype.Name = new String();



SAPB1.MTC_IICL2.create = function (rawObject) {
    var instance = new SAPB1.MTC_IICL2();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_IICL2.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_IICL2;
