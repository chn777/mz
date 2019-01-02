
var AssesseeTypeEnum = require('EnumType/AssesseeTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NatureOfAssessee = function () {
}
SAPB1.NatureOfAssessee.prototype = new SAPB1.EntityType();
SAPB1.NatureOfAssessee.prototype.constructor = SAPB1.NatureOfAssessee;
SAPB1.NatureOfAssessee.prototype.keys.push('AbsEntry');
SAPB1.NatureOfAssessee.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssessee.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssessee.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssessee.AssesseeType = { valueOf: function(){return 'AssesseeType';}, Type: 'AssesseeTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NatureOfAssessee.prototype.AbsEntry = new Number();
SAPB1.NatureOfAssessee.prototype.Code = new String();
SAPB1.NatureOfAssessee.prototype.Description = new String();
SAPB1.NatureOfAssessee.prototype.AssesseeType = new String();


SAPB1.NatureOfAssessee.AssesseeTypeEnum = AssesseeTypeEnum

SAPB1.NatureOfAssessee.create = function (rawObject) {
    var instance = new SAPB1.NatureOfAssessee();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NatureOfAssessee.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NatureOfAssessee;
