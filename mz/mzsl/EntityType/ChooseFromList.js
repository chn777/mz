var ChooseFromList_Line = require('ComplexType/ChooseFromList_Line')
var ChooseFromList_LineCollection = require('ComplexType/ChooseFromList_LineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChooseFromList = function () {
}
SAPB1.ChooseFromList.prototype = new SAPB1.EntityType();
SAPB1.ChooseFromList.prototype.constructor = SAPB1.ChooseFromList;
SAPB1.ChooseFromList.prototype.keys.push('ObjectName');
SAPB1.ChooseFromList.ObjectName = { valueOf: function(){return 'ObjectName';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ChooseFromList.ChooseFromList_Lines = { valueOf: function(){return 'ChooseFromList_Lines';}, Type: 'ChooseFromList_Line', Index: 1, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ChooseFromList.prototype.ObjectName = new String();
SAPB1.ChooseFromList.prototype.ChooseFromList_Lines = new ChooseFromList_LineCollection();

SAPB1.ChooseFromList.ChooseFromList_Line = ChooseFromList_Line
SAPB1.ChooseFromList.ChooseFromList_LineCollection = ChooseFromList_LineCollection


SAPB1.ChooseFromList.create = function (rawObject) {
    var instance = new SAPB1.ChooseFromList();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChooseFromList.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChooseFromList;
