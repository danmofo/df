A summary of software I have installed on my computer - the initial installation method was as follows:
- Install `kde-standard`
- Install i3
- Restart and use i3

There's probably a more stripped down way to achieve this - I started with KDE before moving over to i3. In an ideal world I'd just install i3, but then I'd have to find alternatives to all of the software that KDE provides (or wraps with a GUI), such as "Display Settings", "Network Manager", etc.


# System
- OS: Ubuntu 24.0.4
- Terminal: Konsole
- DE: KDE
- WM: i3 4.23


# `snap`
Found using `snap list | grep -vE 'base|core|bare|gnome|gtk|mesa|snapd|theme|firmware-updater|snap-store'`:
- dbeaver-ce
- doctl
- firefox
- glow
- libreoffice
- mysql-shell
- obsidian
- spotify

# `apt`
Found using `apt-mark showmanual` - these are just the ones I can pick out as being manually installed, some of them require custom apt repos to be added.
- cloc
- code
- curl
- docker (docker-ce, docker-ce-cli)
- docker-buildx-plugin
- docker-compose-plugin
- fastfetch
- flatpak
- ffmpeg
- gh
- google-chrome-stable
- guvcview
- gzip
- htop
- i3
- kde-standard
- lm-sensors
- lxpolkit
- microsoft-edge-stable
- ncal
- ncdu
- nmap
- psensor
- python3-pip
- python3-venv
- rofi
- terraform
- tmux
- tree
- vim
- vlc
- watchman
- wireshark
- xclip
- xdotool


# Manually
Tools installed through the following means:
- Downloaded binary and added to `$PATH`
- Downloaded package and installed through `sudo dpkg -i <something>.deb`
- Downloaded installer shell script and ran it 

List:
- Android Studio
- Anki
- Antigravity
- IntellJ Toolbox/IDEA
- JProfiler
- mvnd
- ngrok
- nvm
- ripgrep
- SDKMAN!
- steam
- ybin

# Global node packages
Found with `npm list -g --depth=0`
- corepack
- eas-cli
- webpack-cli
- webpack

