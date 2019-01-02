

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TargetGroupParams = function () {
}
SAPB1.TargetGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.TargetGroupParams.prototype.constructor = SAPB1.TargetGroupParams;
SAPB1.TargetGroupParams.TargetGroupCode = { valueOf: function(){return 'TargetGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupParams.TargetGroupName = { valueOf: function(){return 'TargetGroupName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupParams.prototype.TargetGroupCode = new String();
SAPB1.TargetGroupParams.prototype.TargetGroupName = new String();



SAPB1.TargetGroupParams.create = function (rawObject) {
    var instance = new SAPB1.TargetGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TargetGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TargetGroupParams;
