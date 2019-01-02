var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TeamMemberCollection = function () {
}

SAPB1.TeamMemberCollection.prototype = new SAPB1.Collection();
SAPB1.TeamMemberCollection.prototype.constructor = SAPB1.TeamMemberCollection;
//override the default one.    
SAPB1.TeamMemberCollection.get = function (index) {
    return SAPB1.TeamMember.create(this.array[index]);
}

SAPB1.TeamMemberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TeamMemberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TeamMember.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TeamMemberCollection;
