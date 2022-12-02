import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

/**
 *  pinia Config
 * @param key
 * @param paths
 * @returns persist
 */
const piniaPersistConfig = (key, paths) => {
    const persist = {
        key,
        storage: window.localStorage,
        // storage: window.sessionStorage,
        paths,
    };
    return persist;
};

export default piniaPersistConfig;
