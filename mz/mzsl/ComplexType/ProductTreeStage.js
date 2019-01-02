

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductTreeStage = function () {
}
SAPB1.ProductTreeStage.prototype = new SAPB1.ComplexType();
SAPB1.ProductTreeStage.prototype.constructor = SAPB1.ProductTreeStage;
SAPB1.ProductTreeStage.Father = { valueOf: function(){return 'Father';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.SequenceNumber = { valueOf: function(){return 'SequenceNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.StageEntry = { valueOf: function(){return 'StageEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.WaitingDays = { valueOf: function(){return 'WaitingDays';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductTreeStage.prototype.Father = new String();
SAPB1.ProductTreeStage.prototype.StageID = new Number();
SAPB1.ProductTreeStage.prototype.SequenceNumber = new Number();
SAPB1.ProductTreeStage.prototype.StageEntry = new Number();
SAPB1.ProductTreeStage.prototype.Name = new String();
SAPB1.ProductTreeStage.prototype.WaitingDays = new Number();



SAPB1.ProductTreeStage.create = function (rawObject) {
    var instance = new SAPB1.ProductTreeStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductTreeStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductTreeStage;
