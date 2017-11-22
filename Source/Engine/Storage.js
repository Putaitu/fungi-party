'use strict';

/**
 * Storage
 */
class Storage {
    /**
     * Set data
     *
     * @param {String} key
     * @param {Object} value
     */
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Get data
     *
     * @param {String} key
     *
     * @returns {Object} Value
     */
    static get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));

        } catch(e) {
            return null;
        }
    }
}

Engine.Storage = Storage;
