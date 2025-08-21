This repository contains my dotfiles/configs for Linux/macOS.

Run `./apply-config` to copy the config to the system. 

## Starting workspaces

If you're on Linux:
- On main computer, `dev-workspace`
- On work laptop, `dev-laptop`

If you're on macOS: 
- There's no dev script, everything is opened manually - just never shut your computer off :)

## Linux

- DE, KDE Plasma 5.27.11
- WM, i3 4.24 (config won't work otherwise)

## macOS

- WM, AeroSpace 0.19.2-Beta

I also did the following so the WM works properly:
- Disabled "Automatically rearrange Spaces based on most recent use" - why is this a feature?
- Removed any shortcuts inside "Settings > Keyboard > Keyboard Shortcuts > Mission Control" which intefere with i3 keybindings. I'm not sure if these were added by me or default - note for my future self..

## Keyboards

- Kinesis Advantage 2 keyboard - mappings can be found in `qwerty.txt`. They are stored on the keyboard itself, this is just a backup.
- For macOS I use a foot pedal with the following tweaks (exact process I don't remember):
    - Foot pedal outputs an 'a' character - not sure on whether that's when pressed or both pressed and on release
    - Karabiner Elements maps 'a' character on foot pedal to 'left_command'
    - You can then hold the foot pedal down to emulate pressing CMD - this means you don't have to use the awkward Alt Gr -> Command mapping on the KA2.
    - There may have been other things that I did to get this working, possibly something to do with virtual keyboards.

## TODO
- Add a full list of software that's installed on each OS so it's easier to recreate envrionment after a full reinstall
- Install Obsidian as a package so it can be opened the same way as my main computer
- Change main computer to use pure i3 instead of this bastardised KDE plasma with i3
- Write instructions for using nerd-dictation
