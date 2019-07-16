
/*
XML Encoding: Since XML is very verbose, you are given a way of encoding it where each tag gets
mapped to a pre-defined integer value. The language/grammar is as follows:
Element --) Tag Attributes END Children END
Attribute
END
Tag --) Tag Value --) e -- ) some predefined mapping to int Value -- ) string value
For example, the following XML might be converted into the compressed string below (assuming a
mapping of family - > 1, person -> 2, firstName - > 3, lastName - > 4, state -> 5).

Becomes: 1 4 McDowell 5 CA e 2 3 Gayle e Some Message e e
*/

var parser = require('xml2json');

// xml to json
const xml = '<family lastName="McDowell" state="CA"><person firstName="Gayle">Some Message</person></family>'

var json = parser.toJson(xml);
console.log("input -> %s", xml)
console.log("to json -> %s", json);

const meta = {
    family: 1,
    person: 2,
    firstName: 3,
    lastName: 4,
    state: 5
}
const printCode = (data) => {
    Object.keys(data).forEach(key => {
        if(typeof data[key] === "object") {
            console.log(meta[key]); // node key
            printCode(data[key]);
            console.log('end')
        } else {
            if(meta[key]) {
                console.log(meta[key]); // attr key
            }
            console.log(data[key]); // attr value
        }
    });
}

printCode(JSON.parse(json));