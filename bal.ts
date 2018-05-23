import {Client} from 'elasticsearch';

const index = process.argv[2] || 'gas';

console.log('index:', index);

const client = new Client({
  host: 'localhost:9200',
  log: 'trace'
});


export function main(reset = false) {


  reset && deleteIndex(index);

  var dater = prepIndex(index, 'crypto', gas);

  console.log(dater);

  // createIndex(index);
  //
  // bulk_(dater);


}


export function createIndex(name) {


  return client.indices.create({
    index: name
  });
}

export function deleteIndex(name) {

  return client.indices.delete({
    index: name,
  });
}


export function prepIndex(indexName: string, type: string, data: Array<any>): Array<any> {


  const bulk: Array<any> = [];

  data.forEach(item => {
    bulk.push({
      index: {
        _index: indexName,
        _type: 'block',
        _id: item.block,
      }
    });
    bulk.push(item);

  });

  console.log('done');

  return bulk;

}


export function healthCheck() {


  client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });


}


export function search(query) {


  client.search({
    q: query
  }).then(function (body) {
    var hits = body.hits.hits;
  }, function (error) {
    console.trace(error.message);
  });

}


export function bulk_(body: Array<any>) {

  return client.bulk({body});
}

main(false);
