import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './';
const outputDir = './public';

async function convertHeroSection3Only() {
  console.log('🔄 Converting herosection3 to WebP and AVIF (no quality changes)...\n');

  try {
    const inputPath = path.join(inputDir, 'herosection3.jpg');
    
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Original herosection3.jpg not found in root folder');
      return;
    }

    console.log('📸 Converting herosection3 to multiple formats...');
    
    // Get original image info
    const originalStats = fs.statSync(inputPath);
    const originalSizeInKB = (originalStats.size / 1024).toFixed(1);
    console.log(`📊 Original size: ${originalSizeInKB}KB`);

    // Copy original JPEG to public folder (no changes)
    const jpegOutput = path.join(outputDir, 'herosection3.jpg');
    fs.copyFileSync(inputPath, jpegOutput);
    console.log(`✅ Original JPEG: herosection3.jpg (${originalSizeInKB}KB)`);

    // Create AVIF version (no quality changes)
    const avifOutput = path.join(outputDir, 'herosection3.avif');
    await sharp(inputPath)
      .avif({ 
        quality: 100,
        effort: 9,
        chromaSubsampling: '4:4:4'
      })
      .toFile(avifOutput);

    const avifStats = fs.statSync(avifOutput);
    const avifSizeInKB = (avifStats.size / 1024).toFixed(1);
    console.log(`✅ AVIF: herosection3.avif (${avifSizeInKB}KB)`);

    // Create WebP version (no quality changes)
    const webpOutput = path.join(outputDir, 'herosection3.webp');
    await sharp(inputPath)
      .webp({ 
        quality: 100,
        effort: 6,
        lossless: false
      })
      .toFile(webpOutput);

    const webpStats = fs.statSync(webpOutput);
    const webpSizeInKB = (webpStats.size / 1024).toFixed(1);
    console.log(`✅ WebP: herosection3.webp (${webpSizeInKB}KB)`);

    // Remove original from root folder
    fs.unlinkSync(inputPath);
    console.log('🗑️ Removed original from root folder');

    console.log('\n🎯 herosection3 converted to multiple formats!');
    console.log('📱 Original quality preserved');
    console.log('⚡ WebP and AVIF formats added for better browser support');
  } catch (error) {
    console.error('❌ Error converting herosection3:', error);
  }
}

convertHeroSection3Only().catch(console.error); 