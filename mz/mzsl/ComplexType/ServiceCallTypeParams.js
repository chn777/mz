

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallTypeParams = function () {
}
SAPB1.ServiceCallTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallTypeParams.prototype.constructor = SAPB1.ServiceCallTypeParams;
SAPB1.ServiceCallTypeParams.CallTypeID = { valueOf: function(){return 'CallTypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallTypeParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallTypeParams.prototype.CallTypeID = new Number();
SAPB1.ServiceCallTypeParams.prototype.Name = new String();



SAPB1.ServiceCallTypeParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallTypeParams;
