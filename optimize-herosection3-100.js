import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './';
const outputDir = './public';

async function optimizeHeroSection3MaxQuality() {
  console.log('🔄 Optimizing herosection3 with 100% quality...\n');

  try {
    const inputPath = path.join(inputDir, 'herosection3.jpg');
    const outputPath = path.join(outputDir, 'herosection3.jpg');
    
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Original herosection3.jpg not found in root folder');
      return;
    }

    console.log('📸 Processing herosection3 with maximum quality...');
    
    // Get original image info
    const originalStats = fs.statSync(inputPath);
    const originalSizeInMB = (originalStats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Original size: ${originalSizeInMB}MB`);

    // Create maximum quality JPEG version (100% quality)
    await sharp(inputPath)
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
    console.log(`✅ Max-Quality JPEG: herosection3.jpg (${jpegSizeInKB}KB)`);

    // Create maximum quality AVIF version
    const avifOutput = path.join(outputDir, 'herosection3.avif');
    await sharp(inputPath)
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
    console.log(`✅ Max-Quality AVIF: herosection3.avif (${avifSizeInKB}KB)`);

    // Create maximum quality WebP version
    const webpOutput = path.join(outputDir, 'herosection3.webp');
    await sharp(inputPath)
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
    console.log(`✅ Max-Quality WebP: herosection3.webp (${webpSizeInKB}KB)`);

    // Create maximum quality responsive sizes
    const sizes = [
      { name: 'large', width: 1920, height: 1080 },
      { name: 'medium', width: 1280, height: 720 },
      { name: 'small', width: 768, height: 432 }
    ];

    for (const size of sizes) {
      const sizeOutput = path.join(outputDir, `herosection3-${size.name}.jpg`);
      await sharp(inputPath)
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
      console.log(`✅ Max-Quality ${size.name}: herosection3-${size.name}.jpg (${sizeInKB}KB)`);
    }

    // Remove original from root folder
    fs.unlinkSync(inputPath);
    console.log('🗑️ Removed original from root folder');

    console.log('\n🎯 herosection3 optimized with 100% quality!');
    console.log('📱 High-quality responsive images created');
    console.log('⚡ Multiple formats with maximum quality settings');
  } catch (error) {
    console.error('❌ Error optimizing herosection3:', error);
  }
}

optimizeHeroSection3MaxQuality().catch(console.error); 