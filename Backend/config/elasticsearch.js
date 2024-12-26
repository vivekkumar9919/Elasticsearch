const {Client} = require('@elastic/elasticsearch');
require('dotenv').config();

const client = new Client({
    node: process.env.ELASTICSEARCH_URL || 'http://127.0.0.1:9200',
    auth: {
        username: process.env.ELASTIC_USERNAME || 'elastic',
        password: process.env.ELASTIC_PASSWORD || 'changeme',
    },
});

module.exports = client;
