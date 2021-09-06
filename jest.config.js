module.exports = {
    testEnvironment: "node",
    modulePaths: ["node_modules", "<rootDir>/src"],
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    },
};