# -*- mode: Python -*-

print('Hello,')
print('This Tiltfile build release file')

# -----------------------
# Init resources
# -----------------------

local_resource(
  name="init:npm-env",
  cmd='npm install',
  auto_init=True,
  #trigger_mode=TRIGGER_MODE_AUTO,
  trigger_mode=TRIGGER_MODE_MANUAL,
  deps=[
    'package.json',
  ],
)

# -----------------------
# Building resources
# -----------------------

# Tilt resource to build release note
local_resource(
  name="release-note",
  cmd='npm run release-note',
  auto_init=True,
  trigger_mode=TRIGGER_MODE_AUTO,
  #trigger_mode=TRIGGER_MODE_MANUAL,
  deps=[
    'auto-changelog/release-note.template',
    'auto-changelog/hbs-helpers',
  ],
)

# Tilt resource to build changelog
local_resource(
  name="changelog",
  cmd='npm run changelog',
  auto_init=True,
  trigger_mode=TRIGGER_MODE_AUTO,
  #trigger_mode=TRIGGER_MODE_MANUAL,
  deps=[
    'auto-changelog/changelog.template',
    'auto-changelog/hbs-helpers',
  ],
)
