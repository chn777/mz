

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Forms1099Params = function () {
}
SAPB1.Forms1099Params.prototype = new SAPB1.ComplexType();
SAPB1.Forms1099Params.prototype.constructor = SAPB1.Forms1099Params;
SAPB1.Forms1099Params.FormCode = { valueOf: function(){return 'FormCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Forms1099Params.prototype.FormCode = new Number();



SAPB1.Forms1099Params.create = function (rawObject) {
    var instance = new SAPB1.Forms1099Params();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Forms1099Params.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Forms1099Params;
