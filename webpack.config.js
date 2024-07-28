// webpack.config.js
const path = require('path');

module.exports = {
  // ... other configurations
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
