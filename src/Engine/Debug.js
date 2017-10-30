'use strict';

/**
 * A debugging helper class
 */
class Debug {
    /**
     * Logs a message
     *
     * @param {String|Array} messages
     */
    static log(...messages) {
        console.log(messages, arguments.callee.caller.toString());
    }

    /**
     * Throws an error
     *
     * @param {Error|String} error
     */
    static error(error) {
        if(typeof error === 'string') {
            error = new Error(error);
        }

        if(error instanceof Error === false) {
            throw new TypeError('The paramater "error" must either be of type "string" or "error"');
        }

        throw error;
    }
}

Engine.Debug = Debug;
