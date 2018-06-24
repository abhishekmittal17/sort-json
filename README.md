# Sort & print JSON
Sort & print partial real AWS instance-info JSON response

# Problem
```
_json = [{
    id: '2',
    tags: [{
            'Key': 'Name',
            'Value': 'Tag2'
        },{
            'Key': 'Role',
            'Value': 'Publisher'
        },{
            'Key': 'Foo',
            'Value': 'Bar'
        }]
},{
    id: '1',
    tags: [{
            'Key': 'Name',
            'Value': 'Tag1'
        },{
            'Key': 'Role',
            'Value': 'Subscriber'
        },{
            'Key': 'Tao',
            'Value': 'Ching'
        }]
}]
```

With any number of elements in either array in the above JSON, each element tags list will always have at-least two elements one with Key 'Name' and the other with Key 'Role'.

You need to get the credentials sorted by Id (ASC order).
Credentials == id + Name + Role

Given the input JSON above, output should look like this:
ID, NAME, ROLE
1, Tag1, Subscriber
2, Tag2, Publisher


# Prerequisites
- Install node js


# Approach
- Sort the AWS json response by id
- Loop through each item in sorted result
- Create flat map to process tags. So that can we directly fetch value based on map key
- Print formatted output  

# Run
Change directory to sort-json folder and execute <br>
```node run.js```
<br> <img src="https://i.imgur.com/XzSFopq.png">

