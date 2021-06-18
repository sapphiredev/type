# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.11](https://github.com/sapphiredev/type/compare/v2.0.10...v2.0.11) (2021-06-18)


### Bug Fixes

* bump gen-esm-wrapper dependency to remove __esModule key ([49de458](https://github.com/sapphiredev/type/commit/49de4589849aef0adeeab66504c4ac0149822602))

### [2.0.10](https://github.com/sapphiredev/type/compare/v2.0.9...v2.0.10) (2021-06-18)


### Bug Fixes

* fixed object with null prototypes being ignored ([#234](https://github.com/sapphiredev/type/issues/234)) ([b83e14e](https://github.com/sapphiredev/type/commit/b83e14e4f2917cd55e8d3cdf25562c0e3b35a80d))

### [2.0.9](https://github.com/sapphiredev/type/compare/v2.0.5...v2.0.9) (2021-06-06)

### Bug Fixes

-   restore prebuilts
-   add musl prebuilts ([#233](https://github.com/sapphiredev/type/issues/233)) ([2fe8d13](https://github.com/sapphiredev/type/commit/2fe8d13ad7e138cf8af3ea1b057beddb09369522))
-   explicitly fallback to build when creating prebuilts ([992cf1f](https://github.com/sapphiredev/type/commit/992cf1f0b560e857c28fe2a846a137a9eb671b6b))

### [2.0.5](https://github.com/sapphiredev/type/compare/v2.0.4...v2.0.5) (2021-06-05)

### Bug Fixes

-   fixed urls in package, changelog and readme ([93ec5c3](https://github.com/sapphiredev/type/commit/93ec5c3918bfec502efcbc417999d7fbc74cd4d6))

### [2.0.4](https://github.com/sapphiredev/type/compare/v2.0.3...v2.0.4) (2021-05-20)

### Bug Fixes

-   ensure bundlers do not incorrectly detect missing dependency ([4244a36](https://github.com/sapphiredev/type/commit/4244a3608f86bb7f99c1cbff04741794f035e187))

### [2.0.3](https://github.com/sapphiredev/type/compare/v2.0.2...v2.0.3) (2021-05-20)

### Bug Fixes

-   mark package as Side Effect free ([fa1625c](https://github.com/sapphiredev/type/commit/fa1625c1957fc182e7597499c7573d843ab11652))

### [2.0.2](https://github.com/sapphiredev/type/compare/v2.0.1...v2.0.2) (2021-05-02)

### Bug Fixes

-   switch back to icrawl's v1 artifact uploader ([e7450cf](https://github.com/sapphiredev/type/commit/e7450cfbd887e37597e840aa3bd1e919f9fa8a58))

### [2.0.1](https://github.com/sapphiredev/type/compare/v2.0.0...v2.0.1) (2021-05-02)

### Bug Fixes

-   switch to @discordjs/node-pre-gyp ([1b4847c](https://github.com/sapphiredev/type/commit/1b4847c5bae9c20f78ba34e3be3edb067dafd4dc))

## 2.0.0 (2021-05-02)

### ⚠ BREAKING CHANGES

-   **type:** No longer bundles with rollup because this relies on NodeJS internals and should
    only be used in NodeJS environments.

### Features

-   **type:** native module for node 16 ([d5fd960](https://github.com/sapphiredev/type/commit/d5fd9607f6e951d712d9dbf3160bd78dd57fdf82))
