This repository contains my dotfiles/configs for Linux/macOS.

Run `./apply-config` to copy the config to the system. 

If you're on Linux:
- On main computer, `dev-workspace`
- On work laptop, `dev-laptop`

If you're on macOS, there's no dev script, everything is opened manually - just never shut your computer off :)

## Linux

- DE, KDE Plasma 5.27.11
- WM, i3 4.24 (config won't work otherwise)

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
- Install Obsidian as a package so it can be opened the same way as my main computer
- Change main computer to use pure i3 instead of this bastardised KDE plasma with i3
- Write instructions for using nerd-dictation
