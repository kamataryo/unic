import {
  name as appName,
  description,
  author as vendor,
  version,
} from '../../package.json'

// ------------------------------------
// Constants
// ------------------------------------
/* eslint-disable no-undef */
const env = __NODE_ENV__
const isDebugMode = __DEBUG__
const isTestMode = __TEST__
const commitHash = __COMMITHASH__
/* eslint-enable no-undef */

/**
 * initialState
 * @type {Object}
 */
const initialMetaState = {
  appName,
  description,
  vendor,
  version,
  env,
  isDebugMode,
  isTestMode,
  commitHash,
}

export default () => initialMetaState
