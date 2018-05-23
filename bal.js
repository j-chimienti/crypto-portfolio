"use strict";
exports.__esModule = true;
var gas_analysis_json_1 = require("./gas_analysis.json");
var elasticsearch_1 = require("elasticsearch");
var index = process.argv[2] || 'gas';
console.log('index:', index);
var client = new elasticsearch_1.Client({
    host: 'localhost:9200',
    log: 'trace'
});
function main(reset) {
    if (reset === void 0) { reset = false; }
    reset && deleteIndex(index);
    var dater = prepIndex(index, 'crypto', gas_analysis_json_1["default"]);
    console.log(dater);
    // createIndex(index);
    //
    // bulk_(dater);
}
function createIndex(name) {
    return client.indices.create({
        index: name
    });
}
function deleteIndex(name) {
    return client.indices["delete"]({
        index: name
    });
}
function prepIndex(index, type, data) {
    var bulk = [];
    data.forEach(function (item) {
        bulk.push({
            index: {
                _index: index,
                _type: 'block',
                _id: item.block
            }
        });
        bulk.push(item);
    });
    console.log('done');
    return bulk;
}
function healthCheck() {
    client.ping({
        requestTimeout: 30000
    }, function (error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
        }
        else {
            console.log('All is well');
        }
    });
}
function search(query) {
    client.search({
        q: query
    }).then(function (body) {
        var hits = body.hits.hits;
    }, function (error) {
        console.trace(error.message);
    });
}
function bulk_(body) {
    client.bulk({ body: body })
        .then(console.log)["catch"](console.error);
}
main(false);
