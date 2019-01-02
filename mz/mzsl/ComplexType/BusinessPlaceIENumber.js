

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPlaceIENumber = function () {
}
SAPB1.BusinessPlaceIENumber.prototype = new SAPB1.ComplexType();
SAPB1.BusinessPlaceIENumber.prototype.constructor = SAPB1.BusinessPlaceIENumber;
SAPB1.BusinessPlaceIENumber.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceIENumber.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceIENumber.IENumber = { valueOf: function(){return 'IENumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceIENumber.prototype.BPLID = new Number();
SAPB1.BusinessPlaceIENumber.prototype.State = new String();
SAPB1.BusinessPlaceIENumber.prototype.IENumber = new String();



SAPB1.BusinessPlaceIENumber.create = function (rawObject) {
    var instance = new SAPB1.BusinessPlaceIENumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPlaceIENumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPlaceIENumber;
