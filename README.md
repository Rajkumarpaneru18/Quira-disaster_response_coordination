# <p align="center">Disaster Response Coordination</p>
<p align="center">
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/watchers" target="_blank">
        <img src="https://img.shields.io/github/watchers/Rajkumarpaneru18/Quira-disaster_response_coordination?style=for-the-badge&logo=appveyor" alt="Watchers"/>
    </a>
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/network/members" target="_blank">
        <img src="https://img.shields.io/github/forks/Rajkumarpaneru18/Quira-disaster_response_coordination?style=for-the-badge&logo=appveyor" alt="Forks"/>
    </a>
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/stargazers" target="_blank">
        <img src="https://img.shields.io/github/stars/Rajkumarpaneru18/Quira-disaster_response_coordination?style=for-the-badge&logo=appveyor" alt="Star"/>
    </a>
</p>
<p align="center">
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/issues" target="_blank">
        <img src="https://img.shields.io/github/issues/Rajkumarpaneru18/Quira-disaster_response_coordination.svg?style=for-the-badge&logo=appveyor" alt="Issue"/>
    </a>
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/pulls" target="_blank">
        <img src="https://img.shields.io/github/issues-pr/Rajkumarpaneru18/Quira-disaster_response_coordination.svg?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
    </a>
</p>
<p align="center">
    <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/Rajkumarpaneru18/Quira-disaster_response_coordination?style=for-the-badge&logo=appveyor" alt="License" />
    </a>
</p>
<p align="center">
  <a href="https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination" style="font-size: 24px;">Disaster Response Coordination</a>
  <span style="font-size: 20px;">An open-source platform designed to coordinate efforts between people during natural disasters like floods and landslides in Nepal,</span><br>
  <span style="font-size: 16px;">providing real-time information, support, and resources.</span><br>
</p>

# Disaster Response Coordination

## Table of Contents

- [Problem Statement](#problem-statement)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Problem Statement

Nepal frequently experiences natural disasters like floods and landslides, resulting in significant loss of life and property. The lack of efficient coordination and communication during such events exacerbates the impact, especially in remote and rural areas. Timely access to information, effective resource distribution, and real-time support are crucial to mitigate the effects of these disasters and save lives. Traditional response systems often fail to address these needs promptly, leaving communities vulnerable and unsupported.


## Features

- **Information Sharing:** Provides timely updates on ongoing disasters, ensuring communities stay informed and prepared.
- **Emergency Assistance Coordination:** Connects affected individuals to volunteers, rescue teams, and support groups.
- **Community Support Network:** Facilitates community collaboration and mutual assistance during crises.

## Demo

https://github.com/Sandesh-Pyakurel/Bidding/assets/83917129/c7c894c8-81c1-40e7-952b-7ad5a7e406a5

## Installation

1. Clone the repository
``` bash
https://github.com/Rajkumarpaneru18/Quira-disaster_response_coordination
```

## frontend 

1. Change the directory 
``` bash 
cd frontend 
```

2. Dependencies 
``` bash 
yarn install 
```

3. Start the application 
 ``` bash 
 npm run dev 
 ```

 ## backend 

 1. Install nodejs and mongodb into your machine
 2. Change directory to backend 
 ```
 cd backend 
 ```

 3. Install the required packages.
``` bash 
npm install 
```

4.Create .env file and add following content
```
JWT_SECRET=123d31a56e33c2a251778b8622fb35d4a21fedb5833c75ca1762c3fc33d86acb
MONGO_URL=mongodb://localhost:27017/disaster
pdp: 'http://localhost:7766',
token: 'permit_key_wGdvfriWxhftozcaQaNd2tB1SuJx1l0VITtj2BdxNjoKsJUmtKhUkscPGDAwCwUj7W6du6LQkop5enlT0zQ3rJ',
```

5. Populate the user

```
node populateUsers.js
```
5. Run the server 

```
node server.js
```


## OPAL Docker 
1. Install the docker in your machine.
2.Download Permit.io PDP container from Docker Hub.
``` bash 
docker pull permitio/pdp-v2:latest
```

3. Run the container
```
docker run -it \
  -p 7766:7000 \
  --env PDP_API_KEY=permit_key_wGdvfriWxhftozcaQaNd2tB1SuJx1l0VITtj2BdxNjoKsJUmtKhUkscPGDAwCwUj7W6du6LQkop5enlT0zQ3rJ \
  --env PDP_DEBUG=True \
  permitio/pdp-v2:latest

```
## Contributing
We welcome contributions to enhance and improve Disaster Response Coordination! Please follow our Contributing Guidelines.

## License
This project is licensed under the [MIT License](/LICENSE).
