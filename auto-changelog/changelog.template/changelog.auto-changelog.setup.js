const breakingListHelper = require('../hbs-helpers/breaking-list.helper');

module.exports = function (Handlebars) {
  Handlebars.registerHelper('breaking-list', breakingListHelper);
};
