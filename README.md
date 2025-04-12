# Personal Website
A small, personal website in the style of a terminal. Check it out [here](https://giannin.ch).

The goal of this current version was to write the website with no external dependencies and no build system like NPM. Thanks to this, the entire website is less than 7KiB big (excluding assets like the font).

Tests are run with Cypress, hence the `package.json` file. See [Testing](#testing) down below.

## Build
Because there are no external dependencies and nothing to build, not build system is needed.

Simply movethe `src` folder to your webserver of choice and see the magic happen.

## Testing
To run the tests install Cypress using this command:
```sh
npm ci
```

Afterwards you can run the tests using this command:
```sh
npm run test
```
This will build and start a Docker container with the website on port `8080`. All tests will be run against this container. If you simply want to start the container, without running any tests, use `npm run pretest`.

## Deployment
TODO

## External Resources
- [GitHub Actions for CICD](https://github.com/features/actions)
- [JetBrains Mono Font](https://fonts.google.com/specimen/JetBrains+Mono)
