/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === undefined || classFunction === undefined || typeof classFunction !== 'function') {
        return false;
    }

    try {
        // Check if obj is an instance of classFunction
        if (obj instanceof classFunction) {
            return true;
        }

        // Check if obj has access to classFunction's methods
        if (typeof obj === 'object' || typeof obj === 'function') {
            return classFunction.prototype.isPrototypeOf(obj);
        }

        // For primitive types, check if they can access classFunction's methods
        return classFunction.prototype.isPrototypeOf(Object(obj));
    } catch (err) {
        return false;
    }
};
