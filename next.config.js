const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ['raw.githubusercontent.com', 'pokeres.bastionbot.org'],
  },
  esModule: true,
})
