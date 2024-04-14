'use strict';

module.exports = {
  lastModifiedPlugin,
};

function lastModifiedPlugin(app) {
  return function(schema, options = {}) {
    const { field = 'lastMod' } = options;
    schema.add({ [field]: Date, the_key: String });

    schema.pre('save', function(next) {
      this.$set(field, new Date());
      this.$set('the_key', app.config.KEY);
      next();
    });
  };
}
