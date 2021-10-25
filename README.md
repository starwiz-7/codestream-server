<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://res.cloudinary.com/hackbot/image/upload/v1634825298/Codestream/default-monochrome-black_zrplwm.png" alt="Logo" width="200" height="50">
  </a>

  <h3 align="center">Codestream-server</h3>

  <p align="center">
    Server code for <a href="https://github.com/starwiz-7/codestream">codestream</a>
    </p>
    <p align="center">
    <a href="https://codestream.vercel.app">Demo</a>
    ·
    <a href="https://github.com/starwiz-7/codestream-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/starwiz-7/codestream-server/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Codestream is a collaborative code-editor which can be used by remote teams to work on the code **together**.
This repository contains the server-side code for codestream.

### Built With

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.dev/)
- [Socket.io](https://socket.io/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

You can install nodejs and npm easily with apt install, just run the following commands.

```sh
$ sudo apt install nodejs
$ sudo apt install npm
```

- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```sh
$ node --version

v8.11.3

$ npm --version

6.1.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```sh
$ npm install npm -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/starwiz-7/codestream-server.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file and enter
   ```sh
   CLIENT_URL=http://localhost:3000
   JDOODLE_CLIENT_ID=YOUR JDOODLE CLIENT ID
   JDOODLE_CLIENT_SECRET=YOUR JDOODLE CLIENT SECRET
   ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/starwiz-7/codestream-server/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Aryan Yadav - [@7Aryany](https://twitter.com/7Aryany) - aryan2019@iiitkottayam.ac.in

Project Link: [https://github.com/starwiz-7/codestream-server](https://github.com/starwiz-7/codestream-server)

<!-- ACKNOWLEDGMENTS -->

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/starwiz-7/codestream-server)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/starwiz-7/codestream-server.svg?style=for-the-badge
[contributors-url]: https://github.com/starwiz-7/codestream-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/starwiz-7/codestream-server.svg?style=for-the-badge
[forks-url]: https://github.com/starwiz-7/codestream-server/network/members
[stars-shield]: https://img.shields.io/github/stars/starwiz-7/codestream-server.svg?style=for-the-badge
[stars-url]: https://github.com/starwiz-7/codestream-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/starwiz-7/codestream-server.svg?style=for-the-badge
[issues-url]: https://github.com/starwiz-7/codestream-server/issues
[license-shield]: https://img.shields.io/github/license/starwiz-7/codestream-server.svg?style=for-the-badge
[license-url]: https://github.com/starwiz-7/codestream-server/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yadav-aryan
[product-screenshot]: images/screenshot.png
