# Gazes Mono Repo

## Overview
This repository contains the source code for the Gazes project. The project is a monorepo that houses multiple services, each serving a different purpose. The services are designed to work together to provide a complete solution for the Gazes application.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Docker and Docker Compose installed on your machine. See [Docker's official installation guide](https://docs.docker.com/get-docker/) for instructions.

## Getting Started
This project uses Docker Compose to manage its environment setup for both development and production. The Makefile included simplifies the commands you need to get started.

### Development Environment
To set up your development environment, follow these steps:

1. **Start the Development Environment**:
   - Run the command `make dev` to start the development environment. This command initiates Docker Compose using the `compose.dev.yml` file, setting up the necessary containers for development.

2. **Stop the Development Environment**:
   - To stop and remove the development containers, run `make dev-stop`. This ensures that all services are properly shut down and cleaned up.

### Production Environment
For deploying the application in a production setting, follow these instructions:

1. **Start the Production Environment**:
   - Execute `make start` to launch the production environment. This utilizes the `compose.prod.yml` file to set up the containers optimized for production use.

2. **Stop the Production Environment**:
   - When you need to stop the production services, use the command `make stop`. This will bring down all active services related to the production environment.

## Contributing
If you're interested in contributing to the project, please review the contributing guidelines.

## License
This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Contact
If you have any questions or feedback, please reach out to the project maintainer on the following platforms:
 - Discord: [Discord Server](https://discord.gg/PkysdTAg3V) or [Direct Message](https://discord.com/users/243117191774470146)
 - Instagram: [Instagram Profile](https://www.instagram.com/exatombe)

---
