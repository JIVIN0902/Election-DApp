# Election-DApp
An Election Dapp for the Shardeum workshop conducted in New Delhi


# Prerequisites
1. You need to have node.js, npm and yarn installed on your device.
2. To download them, head over to https://nodejs.org
3. After Installing, make sure you have node, type node -v in your terminal/command prompt.
4. Type npm -v to check you have npm.
5. To install yarn, type npm install yarn in your terminal/Command line.

# Setting up the Development Environment
1. In your terminal/Command line, clone the repository using the git clone command
2. cd into the ui folder and then type yarn install -> This will install all required packages to run the frontend.
3. Open the .env file in the ui folder and add the deployed contract address done in the workshop ```NEXT_PUBLIC_CONTRACT_ADDRESS=<YOUR_CONTRACT_ADDRESS_HERE>```.
4. In the ui directory, run the command, yarn dev. This will open the dapp on your localhost.
5. Visit http://localhost:3000
