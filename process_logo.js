import sharp from 'sharp';
import fs from 'fs';

async function removeBackground() {
    const inputPath = process.argv[2];
    const outputPath = 'src/assets/logo.png';

    try {
        const rawImage = await sharp(inputPath)
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        const { data, info } = rawImage;
        const { width, height, channels } = info;

        // Threshold for light background pixels
        const threshold = 230;

        for (let i = 0; i < data.length; i += channels) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // If the pixel is mostly white/paper texture (light colored), make it transparent
            if (r > threshold && g > threshold && b > threshold) {
                data[i + 3] = 0; // Set alpha to 0 for background
            }
        }

        await sharp(data, {
            raw: { width, height, channels }
        })
            .png()
            .toFile(outputPath);

        console.log('Successfully saved transparent logo to src/assets/logo.png');
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

removeBackground();
