#!/usr/bin/env python3
"""
Video compression script for Netlify deployment
Compresses portfolio.mp4 from ~127MB to ~60MB
"""

import subprocess
import os
import sys

INPUT_FILE = "public/portfolio.mp4"
OUTPUT_FILE = "public/portfolio.mp4.compressed"
BACKUP_FILE = "public/portfolio.mp4.backup"

def check_ffmpeg():
    """Check if ffmpeg is installed"""
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def compress_video():
    """Compress video using ffmpeg"""
    if not os.path.exists(INPUT_FILE):
        print(f"❌ Error: {INPUT_FILE} not found")
        return False
    
    print(f"📹 Compressing video: {INPUT_FILE}")
    print(f"   Current size: {os.path.getsize(INPUT_FILE) / (1024*1024):.1f}MB")
    
    # Compression command optimized for web
    cmd = [
        "ffmpeg",
        "-i", INPUT_FILE,
        "-c:v", "libx264",           # Video codec
        "-preset", "medium",          # Speed/quality balance
        "-crf", "26",                 # Quality (0-51, lower=better, 26 is good default)
        "-c:a", "aac",               # Audio codec
        "-b:a", "128k",              # Audio bitrate
        "-vf", "scale=1280:-1",      # Scale to max 1280px width
        OUTPUT_FILE
    ]
    
    try:
        subprocess.run(cmd, check=True)
        
        input_size = os.path.getsize(INPUT_FILE) / (1024*1024)
        output_size = os.path.getsize(OUTPUT_FILE) / (1024*1024)
        
        print(f"\n✅ Compression complete!")
        print(f"   Original: {input_size:.1f}MB")
        print(f"   Compressed: {output_size:.1f}MB")
        print(f"   Reduced by: {((input_size - output_size) / input_size * 100):.1f}%")
        
        # Backup original and replace
        os.rename(INPUT_FILE, BACKUP_FILE)
        os.rename(OUTPUT_FILE, INPUT_FILE)
        
        print(f"\n📦 Original backed up as: {BACKUP_FILE}")
        print(f"✨ Ready to deploy!")
        
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Compression failed: {e}")
        return False

if __name__ == "__main__":
    if not check_ffmpeg():
        print("❌ ffmpeg is not installed!")
        print("\nTo install on macOS:")
        print("  1. Install Homebrew: /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"")
        print("  2. Then run: brew install ffmpeg")
        print("\nOr use an online video compressor:")
        print("  • https://www.freeconvert.com/video-compressor")
        print("  • https://www.clipchamp.com/en/compress-video/")
        sys.exit(1)
    
    compress_video()
