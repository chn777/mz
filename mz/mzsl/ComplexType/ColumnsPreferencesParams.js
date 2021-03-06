

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ColumnsPreferencesParams = function () {
}
SAPB1.ColumnsPreferencesParams.prototype = new SAPB1.ComplexType();
SAPB1.ColumnsPreferencesParams.prototype.constructor = SAPB1.ColumnsPreferencesParams;
SAPB1.ColumnsPreferencesParams.User = { valueOf: function(){return 'User';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnsPreferencesParams.FormID = { valueOf: function(){return 'FormID';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ColumnsPreferencesParams.prototype.User = new Number();
SAPB1.ColumnsPreferencesParams.prototype.FormID = new String();



SAPB1.ColumnsPreferencesParams.create = function (rawObject) {
    var instance = new SAPB1.ColumnsPreferencesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ColumnsPreferencesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ColumnsPreferencesParams;
