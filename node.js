
function createNode(value = null) {

    let next = null;

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

export {createNode};