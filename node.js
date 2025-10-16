
function node(value = null, next = null) {

    return {
        get value() {
            return value;
        },

        set value(newValue) {
            value = newValue;
        },

        get next() {
            return next;
        },

        set next(newNext) {
            next = newNext;
        }
    }

};

export {node};