import { Application } from 'express';
import glob from 'glob'
import path from 'path'

function cleanModulesCache(module: string) {
  if (require.cache[require.resolve(module)]) {
    delete require.cache[require.resolve(module)]
  }
}

type RouteModule = {
  endpoint: string
  module: Application
}

/**
 * Will load a routes modules based on its name and it will return an array with each object:
 *  - name: Routes name, which will be the file name `e.g. subreddits.js then routes will fall under "subreddits"`
 *  - module: the actual routes module
 */
function loadRoutes(): RouteModule[] {
  const filePaths = [];
  const routes    = [];
  // This will match any JS file that is not starting with "index"
  const pattern = `${path.join(__dirname, '../routes')}/**/[!index]*.{ts,js}`;

  filePaths.push(...glob.sync(pattern));

  for (const filePath of filePaths) {
    // Clean any cache before loading this module
    cleanModulesCache(filePath);
    const module = require(filePath)

    routes.push({
      endpoint: module.endpoint,
      module: module.default,
    });
  }

  return routes;
}

export default loadRoutes
