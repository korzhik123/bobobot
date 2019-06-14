module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },

        "sourceType": "module"
    },
    "plugins": [
        "react",
        'import', 
        'i18n-scan'
    ],
    "rules": {
    }
};