# Personal Website
A small, personal website in the style of a terminal. Check it out [here](https://giannin.ch).

The goal of this current version was to write the website with no external dependencies and no build system like NPM. Thanks to this, the entire website is less than 7KiB big (excluding assets like the font).

Tests are run with Node and some helper functions, all of which you can find int `./testing`.

## Build
Because there are no external dependencies and nothing to build, not build system is needed.

Simply movethe `src` folder to your webserver of choice and see the magic happen.

## Testing
To run the tests run this command:

```sh
node ./testing/tests.js
```

## External Resources
- [GitHub Actions for CICD](https://github.com/features/actions)
- [JetBrains Mono Font](https://fonts.google.com/specimen/JetBrains+Mono)
