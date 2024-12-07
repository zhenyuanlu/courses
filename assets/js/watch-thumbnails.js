const chokidar = require('chokidar');
const { generateThumbnails } = require('../thumb_gen/generate_thumbnails');

console.log('Watching for course file changes...');

chokidar.watch('../_courses/*.md', {
  persistent: true
}).on('change', (path) => {
  console.log(`Course file changed: ${path}`);
  generateThumbnails();
});