# Conventionnal-commit

## Initialisation

- Launch npm install;
- Observe what happened when you make a wrong commit;

## Manage commit

- It follow the conventional commit rules: `type(scope): subject`
- Add `RELEASE NOTE: function title \n\n function description` to add a release note article

## Generate changelog

npm run changelog

## Generate release-note

npm run release-note

## Todos

- generate demo branch
- add script of release (cf Source[0])
- generating changelog group by scope
- generating changelog group by scope only if there is more than 5 commits of the same scope

## Source

- https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/
