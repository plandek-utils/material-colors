# `@plandek-utils/material-colors`

[![npm version](https://badge.fury.io/js/%40plandek-utils%2Fmaterial-colors.svg)](https://badge.fury.io/js/%40plandek-utils%2Fmaterial-colors)
[![Maintainability](https://api.codeclimate.com/v1/badges/05e2125551579a9abbcc/maintainability)](https://codeclimate.com/github/plandek-utils/material-colors/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/05e2125551579a9abbcc/test_coverage)](https://codeclimate.com/github/plandek-utils/material-colors/test_coverage)

[TypeDoc generated docs in here](https://plandek-utils.github.io/material-colors)

[Github repo here](https://github.com/plandek-utils/material-colors)

Color definitions for the different Material palettes.

```ts
import { amber } from "@plandek-utils/material-colors";

amber["A200"]; // => "#ffd740"
```

It exports the following palettes:

- `amber`
- `blue`
- `blueGrey`
- `brown`
- `cyan`
- `deepOrange`
- `deepPurple`
- `green`
- `grey`
- `indigo`
- `lightBlue`
- `lightGreen`
- `lime`
- `orange`
- `pink`
- `purple`
- `red`
- `teal`
- `yellow`

All the palette description have the same shape:

```ts
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}
```

We ensure that for each palette, the numeric shades are unique colours. The alpha shades (A100, A200, A400, A700) may be unique or may be one of the numeric shades.

We also export `common` with `black` and `white` keys.

## Development, Commits, versioning and publishing

<details><summary>See documentation for development</summary>
<p>

See [The Typescript-Starter docs](https://github.com/bitjson/typescript-starter#bump-version-update-changelog-commit--tag-release).

### Commits and CHANGELOG

For commits, you should use [`commitizen`](https://github.com/commitizen/cz-cli)

```sh
npm install -g commitizen

#commit your changes:
git cz
```

As typescript-starter docs state:

This project is tooled for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) to make managing releases easier. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow, or [`CHANGELOG.md`](CHANGELOG.md) for an example.

```sh
# bump package.json version, update CHANGELOG.md, git tag the release
npm run version
```

You may find a tool like [**`wip`**](https://github.com/bitjson/wip) helpful for managing work in progress before you're ready to create a meaningful commit.

### Creating the first version

Once you are ready to create the first version, run the following (note that `reset` is destructive and will remove all files not in the git repo from the directory).

```sh
# Reset the repo to the latest commit and build everything
npm run reset && npm run test && npm run doc:html

# Then version it with standard-version options. e.g.:
# don't bump package.json version
npm run version -- --first-release

# Other popular options include:

# PGP sign it:
# $ npm run version -- --sign

# alpha release:
# $ npm run version -- --prerelease alpha
```

And after that, remember to [publish the docs](#publish-the-docs).

And finally push the new tags to Github and publish the package to `npm`.

```sh
# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
npm publish --access public
```

### Publish the Docs

```sh
npm run doc:html && npm run doc:publish
```

This will generate the docs and publish them in Github pages.

### Generate a version

There is a single command for preparing a new release. See [One-step publish preparation script in TypeScript-Starter](https://github.com/bitjson/typescript-starter#one-step-publish-preparation-script)

```sh
# Prepare a standard release
npm run prepare-release

# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
npm publish --access public
```

</p>
</details>
