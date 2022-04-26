# Changelog

All notable changes to this project will be documented in this file.

# [@sapphire/type@2.2.3](https://github.com/sapphiredev/type/compare/v2.2.0...@sapphire/type@2.2.3) - (2022-04-26)

## Bug Fixes

- **prebuilts:** Remove `macos-12` target as it conflicts with `macos-latest` ([027a015](https://github.com/sapphiredev/type/commit/027a015bc3382c920c4499f89e57f10d5482e779))
- **prebuilts:** Ensure proper prebuilts are published ([de4d79c](https://github.com/sapphiredev/type/commit/de4d79c6db35b6484f7d0ed978b9d6d1ae89525e))
- Configure prebuilts for Node 17 and Node 18 ([ec2e873](https://github.com/sapphiredev/type/commit/ec2e8733446e3fbb2af7231fb26a467be7f6591b))

# [@sapphire/type@2.2.2](https://github.com/sapphiredev/type/compare/v2.2.0...@sapphire/type@2.2.2) - (2022-04-26)

## Bug Fixes

- **prebuilts:** Ensure proper prebuilts are published ([de4d79c](https://github.com/sapphiredev/type/commit/de4d79c6db35b6484f7d0ed978b9d6d1ae89525e))
- Configure prebuilts for Node 17 and Node 18 ([ec2e873](https://github.com/sapphiredev/type/commit/ec2e8733446e3fbb2af7231fb26a467be7f6591b))

# [@sapphire/type@2.2.1](https://github.com/sapphiredev/type/compare/v2.2.0...@sapphire/type@2.2.1) - (2022-04-26)

## Bug Fixes

- Configure prebuilts for Node 17 and Node 18 ([ec2e873](https://github.com/sapphiredev/type/commit/ec2e8733446e3fbb2af7231fb26a467be7f6591b))

## [2.2.0](https://github.com/sapphiredev/type/compare/v2.1.2...v2.2.0) (2022-03-06)


### Features

* allow module: NodeNext ([#317](https://github.com/sapphiredev/type/issues/317)) ([91e72b2](https://github.com/sapphiredev/type/commit/91e72b205aedc10a493cc984404fce06e87046a4))


### Bug Fixes

* remove eslint-ignore comment ([#280](https://github.com/sapphiredev/type/issues/280)) ([c466d92](https://github.com/sapphiredev/type/commit/c466d92c240c0cca11a88b25108acedc0ba48796))

### [2.1.2](https://github.com/sapphiredev/type/compare/v2.1.1...v2.1.2) (2021-11-06)

### [2.1.1](https://github.com/sapphiredev/type/compare/v2.1.0...v2.1.1) (2021-10-17)


### Bug Fixes

* allow more node & npm versions in engines field ([2325577](https://github.com/sapphiredev/type/commit/232557704ad5f754eac56711ac05ded97a2f4ba8))

## [2.1.0](https://github.com/sapphiredev/type/compare/v2.0.11...v2.1.0) (2021-08-14)


### Features

* create release with prebuilts for Node 16.6.2 ([560018a](https://github.com/sapphiredev/type/commit/560018a01a90e07666fba00035af774bf1d4a7c8))

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
