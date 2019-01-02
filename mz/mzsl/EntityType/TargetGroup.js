var TargetGroupsDetail = require('ComplexType/TargetGroupsDetail')
var TargetGroupsDetailCollection = require('ComplexType/TargetGroupsDetailCollection')

var TargetGroupTypeEnum = require('EnumType/TargetGroupTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TargetGroup = function () {
}
SAPB1.TargetGroup.prototype = new SAPB1.EntityType();
SAPB1.TargetGroup.prototype.constructor = SAPB1.TargetGroup;
SAPB1.TargetGroup.prototype.keys.push('TargetGroupCode');
SAPB1.TargetGroup.TargetGroupCode = { valueOf: function(){return 'TargetGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TargetGroup.TargetGroupName = { valueOf: function(){return 'TargetGroupName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroup.TargetGroupType = { valueOf: function(){return 'TargetGroupType';}, Type: 'TargetGroupTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroup.TargetGroupsDetails = { valueOf: function(){return 'TargetGroupsDetails';}, Type: 'TargetGroupsDetail', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TargetGroup.prototype.TargetGroupCode = new String();
SAPB1.TargetGroup.prototype.TargetGroupName = new String();
SAPB1.TargetGroup.prototype.TargetGroupType = new String();
SAPB1.TargetGroup.prototype.TargetGroupsDetails = new TargetGroupsDetailCollection();

SAPB1.TargetGroup.TargetGroupsDetail = TargetGroupsDetail
SAPB1.TargetGroup.TargetGroupsDetailCollection = TargetGroupsDetailCollection

SAPB1.TargetGroup.TargetGroupTypeEnum = TargetGroupTypeEnum

SAPB1.TargetGroup.create = function (rawObject) {
    var instance = new SAPB1.TargetGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TargetGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TargetGroup;
