_json = [{
    id: '2',
    tags: [{
        'Key': 'Name',
        'Value': 'Tag2'
    }, {
        'Key': 'Role',
        'Value': 'Publisher'
    }, {
        'Key': 'Foo',
        'Value': 'Bar'
    }]
}, {
    id: '1',
    tags: [{
        'Key': 'Name',
        'Value': 'Tag1'
    }, {
        'Key': 'Role',
        'Value': 'Subscriber'
    }, {
        'Key': 'Tao',
        'Value': 'Ching'
    }]
}]

// Sort the AWS json response by id
_json.sort(function (a, b) {
    return a.id > b.id;
});


for (var n = 0; n < _json.length; n++) {
    var tagMap = {};

    // Firstly, create flat map to process tags. So that can we directly fetch value based on map key.
    _json[n].tags.forEach(function (item) {
        tagMap[item.Key] = item.Value;
    });

    console.log(_json[n].id + ', ' + tagMap.Name + ', ' + tagMap.Role);
}

