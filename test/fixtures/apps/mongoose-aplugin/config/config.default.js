'use strict';

const { lastModifiedPlugin } = require('../lib/mongoose');

exports.mongoose = {
  url: process.env.MONGODB_URL_3,
  options: {},
  aPlugins: [ lastModifiedPlugin, [ lastModifiedPlugin, { field: 'updatedAt' }]],
};

exports.keys = 'aaa';

exports.KEY = 'AAAAAAAA';
