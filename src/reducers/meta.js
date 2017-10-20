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

/**
 * [description]
 * @param  {object} [state=initialMetaState] state
 * @param  {object} action                   action
 * @return {object}                          new State
 */
export default (state = initialMetaState) => state
