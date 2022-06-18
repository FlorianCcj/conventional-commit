module.exports = function(context, options) {
  if (!context || context.length === 0) {
    return '';
  }

  const list = context
    .filter(item => {
      const commit = item.commit || item;
      if (options.hash.exclude) {
        const pattern = new RegExp(options.hash.exclude, 'm');
        if (pattern.test(commit.message)) {
          return false;
        }
      }
      if (options.hash.message) {
        const pattern = new RegExp(options.hash.message, 'm');
        return pattern.test(commit.message);
      }
      if (options.hash.subject) {
        const pattern = new RegExp(options.hash.subject);
        return pattern.test(commit.subject);
      }
      return item.breaking;
    })
    .map(commit => {
      const item = {
        ...commit,
      };

      const releaseParts =  /BREAKING CHANGE: (?<message>.*)/.exec(item.message);
      if (releaseParts) {
        item.breakingChange = {
          message: releaseParts.groups.message.trim(),
        }
      }
      return item;
    })
    .map(item => options.fn(item))
    .join('');

  if (!list) {
    return '';
  }

  console.log(list);

  return `${options.hash.heading}\n\n${list}`
};
