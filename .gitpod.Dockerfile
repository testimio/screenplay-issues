FROM gitpod/workspace-full-vnc

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN sudo apt-get update
RUN sudo apt-get install -yq libnss3-dev
RUN sudo apt-get install -yq \
    libgbm-dev \
    libwoff1 \
    libopus0 \
    libwebp6 \
    libwebpdemux2 \
    libenchant1c2a \
    libgudev-1.0-0 \
    libsecret-1-0 \
    libhyphen0 \
    libgdk-pixbuf2.0-0 \
    libegl1 \
    libgles2
    # libevent-2.1-6 \
    # libnotify4 \
    # libxslt1.1 \
    # gstreamer1.0-gl \
    # gstreamer1.0-plugins-base \
    # gstreamer1.0-plugins-good \
    # gstreamer1.0-plugins-bad \
    # ffmpeg
RUN sudo apt-get clean && sudo rm -rf /var/lib/apt/lists/* /tmp/*
