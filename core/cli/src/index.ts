import { getConfig, setConfig } from './lib/pluginManagement/pluginConfig.js';
import './lib/pluginManagement/systemPlugins.js';
import { captureException } from './lib/utils/captureMessage.js';
import './lib/utils/exitHandler.js';

export {
  findPlugin,
  getPluginConfig,
  setPluginConfig,
  setPluginPriority,
} from './lib/pluginManagement/pluginConfig.js';
export { configValidator, registerPlugin } from './lib/pluginManagement/pluginRepository.js';
export { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug.js';
export { renderRoute } from './lib/renderPlugins/executePlugins.js';
export { ContentTextRoute, HandledRoute, RouteConfig } from './lib/routerPlugins/handledRoute.interface.js';
export { WriteToStorage } from './lib/systemPlugins/writeToFs.plugin.js';
export { prod } from './lib/utils/cli-options.js';
export * as cliOptions from './lib/utils/cli-options.js';
export { loadConfig, routeRenderer, scullyConfig, updateScullyConfig } from './lib/utils/config.js';
export { createFolderFor } from './lib/utils/createFolderFor.js';
export { handleTravesal } from './lib/utils/handlers/handleTravesal.js';
export { routeDiscovery } from './lib/utils/handlers/routeDiscovery.js';
export { httpGetJson } from './lib/utils/httpGetJson.js';
export { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums.js';
export * from './lib/utils/log.js';
export { enableSPS } from './lib/utils/platform-server/startupSpS.js';
export { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal.js';
export { routeSplit } from './lib/utils/routeSplit.js';
export { staticServer } from './lib/utils/serverstuff/staticServer.js';
export { title404 } from './lib/utils/serverstuff/title404.js';
export { getHandledRoutes } from './lib/utils/services/routeStorage.js';
export { startScully } from './lib/utils/startup/startup.js';
export { waitForIt } from './lib/utils/waitForIt.js';
export { getConfig as getMyConfig, setConfig as setMyConfig };
export { Deferred } from './lib/utils/platform-server/deferred.js';

export { captureException };