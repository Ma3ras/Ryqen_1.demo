import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './';
const outputDir = './public';

async function restoreHeroSection3Quality() {
  console.log('🔄 Restoring herosection3 to maximum quality...\n');

  try {
    // Check if we have the original in public folder
    const originalPath = path.join(outputDir, 'herosection3_original.jpg');
    const outputPath = path.join(outputDir, 'herosection3.jpg');
    
    if (!fs.existsSync(originalPath)) {
      console.error('❌ Original herosection3_original.jpg not found in public folder');
      return;
    }

    console.log('📸 Processing original herosection3 with maximum quality...');
    
    // Get original image info
    const originalStats = fs.statSync(originalPath);
    const originalSizeInMB = (originalStats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Original size: ${originalSizeInMB}MB`);

    // Create high-quality JPEG version (100% quality)
    await sharp(originalPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 100,
        progressive: true,
        mozjpeg: true,
        optimizeCoding: true
      })
      .toFile(outputPath);

    const jpegStats = fs.statSync(outputPath);
    const jpegSizeInKB = (jpegStats.size / 1024).toFixed(1);
    console.log(`✅ High-Quality JPEG: herosection3.jpg (${jpegSizeInKB}KB)`);

    // Create high-quality AVIF version
    const avifOutput = path.join(outputDir, 'herosection3.avif');
    await sharp(originalPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .avif({ 
        quality: 100,
        effort: 9,
        chromaSubsampling: '4:4:4'
      })
      .toFile(avifOutput);

    const avifStats = fs.statSync(avifOutput);
    const avifSizeInKB = (avifStats.size / 1024).toFixed(1);
    console.log(`✅ High-Quality AVIF: herosection3.avif (${avifSizeInKB}KB)`);

    // Create high-quality WebP version
    const webpOutput = path.join(outputDir, 'herosection3.webp');
    await sharp(originalPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 100,
        effort: 6,
        lossless: false
      })
      .toFile(webpOutput);

    const webpStats = fs.statSync(webpOutput);
    const webpSizeInKB = (webpStats.size / 1024).toFixed(1);
    console.log(`✅ High-Quality WebP: herosection3.webp (${webpSizeInKB}KB)`);

    // Create high-quality responsive sizes
    const sizes = [
      { name: 'large', width: 1920, height: 1080 },
      { name: 'medium', width: 1280, height: 720 },
      { name: 'small', width: 768, height: 432 }
    ];

    for (const size of sizes) {
      const sizeOutput = path.join(outputDir, `herosection3-${size.name}.jpg`);
      await sharp(originalPath)
        .resize(size.width, size.height, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 100,
          progressive: true,
          mozjpeg: true
        })
        .toFile(sizeOutput);

      const sizeStats = fs.statSync(sizeOutput);
      const sizeInKB = (sizeStats.size / 1024).toFixed(1);
      console.log(`✅ High-Quality ${size.name}: herosection3-${size.name}.jpg (${sizeInKB}KB)`);
    }

    console.log('\n🎯 herosection3 restored to maximum quality!');
    console.log('📱 High-quality responsive images created');
    console.log('⚡ Multiple formats with 100% quality settings');
  } catch (error) {
    console.error('❌ Error restoring herosection3 quality:', error);
  }
}

restoreHeroSection3Quality().catch(console.error); 