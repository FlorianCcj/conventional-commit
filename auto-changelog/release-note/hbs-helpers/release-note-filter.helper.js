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
      return true;
    })
    .map(commit => {
      const item = {
        ...commit,
      };

      const releaseParts =  /^RELEASE NOTE: (?<title>.*)\r?\n(?<description>(?:.|\n)+)/m.exec(item.message);
      if (releaseParts) {
        item.releaseNote = {
          title: releaseParts.groups.title.trim(),
          description: releaseParts.groups.description.trim(),
        }
      }

      return item;
    })
    .filter(a => a.releaseNote)
    .map(item => options.fn(item))
    .join('');

  if (!list) {
    return '';
  }

  return `${list}`;
};
