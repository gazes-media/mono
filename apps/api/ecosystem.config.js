module.exports = {
    apps: [
        {
            name: "Gazes API",
            script:"npx",
            automation: false,
            args: "nodemon -L",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
}
