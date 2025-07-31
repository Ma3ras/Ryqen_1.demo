import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './';
const outputDir = './public';

async function optimizeHeroSection3() {
  console.log('🔄 Optimizing original herosection3 for performance...\n');

  try {
    const inputPath = path.join(inputDir, 'herosection3.jpg');
    const outputPath = path.join(outputDir, 'herosection3.jpg');
    
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Original herosection3.jpg not found in root folder');
      return;
    }

    console.log('📸 Processing original herosection3...');
    
    // Get original image info
    const originalStats = fs.statSync(inputPath);
    const originalSizeInMB = (originalStats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Original size: ${originalSizeInMB}MB`);

    // Create optimized JPEG version
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true,
        optimizeCoding: true
      })
      .toFile(outputPath);

    const jpegStats = fs.statSync(outputPath);
    const jpegSizeInKB = (jpegStats.size / 1024).toFixed(1);
    console.log(`✅ JPEG: herosection3.jpg (${jpegSizeInKB}KB)`);

    // Create AVIF version
    const avifOutput = path.join(outputDir, 'herosection3.avif');
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .avif({ 
        quality: 80,
        effort: 6,
        chromaSubsampling: '4:2:0'
      })
      .toFile(avifOutput);

    const avifStats = fs.statSync(avifOutput);
    const avifSizeInKB = (avifStats.size / 1024).toFixed(1);
    console.log(`✅ AVIF: herosection3.avif (${avifSizeInKB}KB)`);

    // Create WebP version
    const webpOutput = path.join(outputDir, 'herosection3.webp');
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(webpOutput);

    const webpStats = fs.statSync(webpOutput);
    const webpSizeInKB = (webpStats.size / 1024).toFixed(1);
    console.log(`✅ WebP: herosection3.webp (${webpSizeInKB}KB)`);

    // Create responsive sizes
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
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(sizeOutput);

      const sizeStats = fs.statSync(sizeOutput);
      const sizeInKB = (sizeStats.size / 1024).toFixed(1);
      console.log(`✅ ${size.name}: herosection3-${size.name}.jpg (${sizeInKB}KB)`);
    }

    // Remove original from root folder
    fs.unlinkSync(inputPath);
    console.log('🗑️ Removed original from root folder');

    console.log('\n🎯 herosection3 optimized and moved to public folder!');
    console.log('📱 Responsive images created for different screen sizes');
    console.log('⚡ Multiple formats (JPEG, AVIF, WebP) for optimal performance');
  } catch (error) {
    console.error('❌ Error optimizing herosection3:', error);
  }
}

optimizeHeroSection3().catch(console.error); 