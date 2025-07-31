import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public';
const outputDir = './public';

async function restoreHeroSection3() {
  console.log('🔄 Restoring herosection3 to original larger size...\n');

  try {
    // Create a larger, higher quality version
    const outputPath = path.join(outputDir, 'herosection3.jpg');
    
    console.log('📸 Creating larger, higher quality herosection3...');
    
    await sharp(path.join(inputDir, 'herosection3.jpg'))
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: false 
      })
      .jpeg({ 
        quality: 95,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const sizeInKB = (stats.size / 1024).toFixed(1);
    console.log(`✅ Restored: herosection3.jpg (${sizeInKB}KB)`);

    // Also create a larger AVIF version
    const avifOutput = path.join(outputDir, 'herosection3.avif');
    await sharp(path.join(inputDir, 'herosection3.jpg'))
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: false 
      })
      .avif({ 
        quality: 90,
        effort: 6
      })
      .toFile(avifOutput);

    const avifStats = fs.statSync(avifOutput);
    const avifSizeInKB = (avifStats.size / 1024).toFixed(1);
    console.log(`✅ AVIF: herosection3.avif (${avifSizeInKB}KB)`);

    console.log('\n🎯 herosection3 restored to larger size!');
  } catch (error) {
    console.error('❌ Error restoring herosection3:', error);
  }
}

restoreHeroSection3().catch(console.error); 