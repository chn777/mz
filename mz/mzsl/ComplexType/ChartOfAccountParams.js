

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChartOfAccountParams = function () {
}
SAPB1.ChartOfAccountParams.prototype = new SAPB1.ComplexType();
SAPB1.ChartOfAccountParams.prototype.constructor = SAPB1.ChartOfAccountParams;
SAPB1.ChartOfAccountParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChartOfAccountParams.prototype.Code = new String();



SAPB1.ChartOfAccountParams.create = function (rawObject) {
    var instance = new SAPB1.ChartOfAccountParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChartOfAccountParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChartOfAccountParams;
