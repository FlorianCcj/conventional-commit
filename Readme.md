# Conventional-commit

## Why this project

Usually, to know what happened in a project there some file, for example:
- a changelog: with all changes, group by release
- a release note: a file which describe new functionality, bug fixed, ... this document have do be readable by anyone, even not technical people

This project is a proposition to automatically generate a changelog and a release note from commit message.

## File description

- `.husky`: directory to store hook managed by the husky npm package
  - `commit-msg`: hook checking that the commit name respect rules
- `auto-changelog`: template and plugin to use auto-changelog
  - `*.template`: template and configuration to generate a file
  - `hbs-helpers`: plugin to manage bloc in handlebars template file
- `.commitlinrs.json`: rules that commit message have to fulfill, file tyo configure `commitlint` package
- `.gitignore`: files which will be ignore by git
- `versionrc.json`: file to configure `standard-version` package
- `package.json`: npm configuration default file. You will find `version`, `dependencies` and `scripts`

## Initialisation

- Launch npm install;
- Observe what happened when you make a wrong commit;

## Manage commit

- It follow the conventional commit rules: `type(scope): subject`
- Add `RELEASE NOTE: function title \n\n function description` to add a release note article

```
feat(release): add script to generate release note

RELEASE NOTE: Release note generation

To help people to know what happened in this release we begin to generate a release note.
To avoid to lose time one generation we manage to script it and generate it from dev work.
```

## Generate changelog

`npm run changelog`: generate the file `CHANGELOG.md`

## Generate release-note

`npm run release-note`: generate the file `RELEASE-NOTE.md` (and call `npm run changelog`)

## Generate release-note

- `npm run release`: Increment minor, generate changelog and release-note commit new files
- `npm run release:init`: for first release, avoid increment
- `npm run release:minor`: like `npm run release`
- `npm run release:patch`: like `npm run release` but increase patch
- `npm run release:major`: like `npm run release` but increase major

## Todos

- generating changelog group by scope
- generating changelog group by scope only if there is more than 5 commits of the same scope
- manage breaking change type mark `!` (E.G.: `feat(commitlint)!: remove 'feat' from type in commitling config`)

## Source

- https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/
