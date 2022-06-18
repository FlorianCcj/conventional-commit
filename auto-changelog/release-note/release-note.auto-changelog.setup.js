const releaseNoteFilter = require('../hbs-helpers/release-note-filter.helper');

module.exports = function (Handlebars) {
  Handlebars.registerHelper('release-note-filter', releaseNoteFilter);
};
