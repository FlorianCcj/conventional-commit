const breakingListHelper = require('../hbs-helpers/breaking-list.helper');
const releaseNoteFilterHelper = require('../hbs-helpers/release-note-filter.helper');

module.exports = function (Handlebars) {
  Handlebars.registerHelper('breaking-list', breakingListHelper);
  Handlebars.registerHelper('release-note-filter', releaseNoteFilterHelper);
};
