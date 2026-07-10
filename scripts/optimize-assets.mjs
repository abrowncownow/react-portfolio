import sharp from 'sharp'

await sharp('src/assets/profile.png')
  .webp({ quality: 82, alphaQuality: 90, effort: 6 })
  .toFile('src/assets/profile.webp')

await sharp('public/og-card.svg', { density: 144 })
  .resize(1200, 630)
  .flatten({ background: '#07110f' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-image.jpg')

console.log('Optimized profile.webp and og-image.jpg')
