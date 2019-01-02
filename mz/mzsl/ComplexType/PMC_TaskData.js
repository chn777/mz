

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMC_TaskData = function () {
}
SAPB1.PMC_TaskData.prototype = new SAPB1.ComplexType();
SAPB1.PMC_TaskData.prototype.constructor = SAPB1.PMC_TaskData;
SAPB1.PMC_TaskData.TaskID = { valueOf: function(){return 'TaskID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_TaskData.TaskName = { valueOf: function(){return 'TaskName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_TaskData.prototype.TaskID = new Number();
SAPB1.PMC_TaskData.prototype.TaskName = new String();



SAPB1.PMC_TaskData.create = function (rawObject) {
    var instance = new SAPB1.PMC_TaskData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMC_TaskData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMC_TaskData;
