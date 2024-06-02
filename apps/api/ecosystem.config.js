module.exports = {
    apps: [
        {
            name: "Gazes API",
            script:"npx",
            automation: false,
            args: "ts-node src/script.ts",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}
