# Me Chat

## Overview

This repository contains two main components:

1. **Client**: A React-based frontend application.
2. **Server**: An Express-based backend server.

## Client

The client is a React application designed to interact with the backend server. It includes the following features:

- **Dependencies**:
  - `react`: ^18.3.1
  - `react-dom`: ^18.3.1
  - `react-scripts`: 5.0.1
  - `@testing-library/jest-dom`: ^5.17.0
  - `@testing-library/react`: ^13.4.0
  - `@testing-library/user-event`: ^13.5.0
  - `web-vitals`: ^2.1.4

### Installation

1. Navigate to the client directory:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Scripts

- `npm start`: Runs the application in development mode.
- `npm run build`: Builds the application for production.
- `npm test`: Runs tests.
- `npm run eject`: Ejects the configuration (advanced).

## Server

The server is an Express-based backend API that provides endpoints for the client to interact with. It includes the following features:

- **Dependencies**:
  - `cors`: ^2.8.5
  - `dotenv`: ^16.4.5
  - `express`: ^4.19.2
  - `mongoose`: ^8.6.0

### Installation

1. Navigate to the server directory:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

- **Client**:
  - The client configuration is managed by `react-scripts`.

- **Server**:
  - The server configuration is managed through `dotenv` and requires a `.env` file for environment variables.

## Running the Project

1. **Start the server**:
    ```bash
    cd server
    npm run start
    ```

2. **Start the client**:
    ```bash
    cd client
    node index.js
    ```

Make sure to configure the server and client to communicate with each other (e.g., set the correct API endpoint URLs in the client).

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss the changes first.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.


