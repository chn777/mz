

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmailGroup = function () {
}
SAPB1.EmailGroup.prototype = new SAPB1.EntityType();
SAPB1.EmailGroup.prototype.constructor = SAPB1.EmailGroup;
SAPB1.EmailGroup.prototype.keys.push('EmailGroupCode');
SAPB1.EmailGroup.EmailGroupCode = { valueOf: function(){return 'EmailGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmailGroup.EmailGroupName = { valueOf: function(){return 'EmailGroupName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmailGroup.prototype.EmailGroupCode = new String();
SAPB1.EmailGroup.prototype.EmailGroupName = new String();



SAPB1.EmailGroup.create = function (rawObject) {
    var instance = new SAPB1.EmailGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmailGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmailGroup;
