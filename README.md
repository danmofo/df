This repository contains my dotfiles/configs for Linux/macOS.

Run `./apply-config` to copy the config to the system. If you're on Linux, then `dev-workspace` to begin working - this won't work on macOS.

## Linux

- DE, KDE Plasma 5.27.11
- WM, i3

## macOS
The macOS configs are very minimal at the moment as I figure out a decent workflow, which is quite difficult when the smart people at Apple decided to use a meta key instead of CTRL that's used on Linux/Windows.

Currently I'm not using any software to provide window management and have done the following:
- Created 10 desktops to mimic workspaces
- Manually moved each app into the same workspace as they would be on Linux
- Rebound "Move to desktop N" to Alt+N to match i3
- Disabled "Automatically rearrange Spaces based on most recent use" - why is this a feature?

Everything else is still done manually...

## Keyboard remappings

I use a Kinesis Advantage 2 keyboard - the mappings can be found in `qwerty.txt`

## TODO
- Add a full list of software that's installed on each OS so it's easier to recreate envrionment after a full reinstall
