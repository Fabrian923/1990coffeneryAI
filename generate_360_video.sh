#!/bin/bash
set -e

# Create flipped versions for 270 and 315 degrees
ffmpeg -y -i ./public/assets/iced_coffee_90.jpg -vf "hflip" ./public/assets/iced_coffee_270.jpg
ffmpeg -y -i ./public/assets/iced_coffee_45.jpg -vf "hflip" ./public/assets/iced_coffee_315.jpg

# Combine into smooth 360 rotating video with crossfades
ffmpeg -y \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_rotating.jpg \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_45.jpg \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_90.jpg \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_180.jpg \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_270.jpg \
  -loop 1 -t 1.4 -i ./public/assets/iced_coffee_315.jpg \
  -filter_complex "\
    [0:v]scale=1920:1080,format=yuva420p[v0]; \
    [1:v]scale=1920:1080,format=yuva420p[v1]; \
    [2:v]scale=1920:1080,format=yuva420p[v2]; \
    [3:v]scale=1920:1080,format=yuva420p[v3]; \
    [4:v]scale=1920:1080,format=yuva420p[v4]; \
    [5:v]scale=1920:1080,format=yuva420p[v5]; \
    [v0][v1]xfade=transition=fade:duration=0.4:offset=1.0[xf0]; \
    [xf0][v2]xfade=transition=fade:duration=0.4:offset=2.0[xf1]; \
    [xf1][v3]xfade=transition=fade:duration=0.4:offset=3.0[xf2]; \
    [xf2][v4]xfade=transition=fade:duration=0.4:offset=4.0[xf3]; \
    [xf3][v5]xfade=transition=fade:duration=0.4:offset=5.0[xf4]; \
    [xf4]format=yuv420p[out]" \
  -map "[out]" -c:v libx264 -pix_fmt yuv420p -r 30 -movflags +faststart ./public/Iced_coffee_rotates_on_block_20260921121127.mp4

echo "360 Video generation complete!"
