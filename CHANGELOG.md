# Changelog

All notable changes to this project will be documented in this file.

# [2.6.0](https://github.com/sapphiredev/type/compare/v2.5.1...v2.6.0) - (2024-12-14)

## 🐛 Bug Fixes

- Exclude node 23 for ubuntu 20.04 (incompatible) ([8f427f6](https://github.com/sapphiredev/type/commit/8f427f6be0b4871dcd06085c5a0fd56269be8211))

## 🚀 Features

- Add ubuntu 24.04 builds for aarch64 ([eea0e79](https://github.com/sapphiredev/type/commit/eea0e79fe9b6f8e5cbf439c020f7d1a15b6c2e9a))
- Add node 23 prebuilts ([b633fff](https://github.com/sapphiredev/type/commit/b633fff9f1af2e798f59de298d2fd689021163f5))

# [2.5.1](https://github.com/sapphiredev/type/compare/v2.5.0...v2.5.1) - (2024-07-11)

## 🐛 Bug Fixes

- TypeError when requiring discord.js ([06e6afc](https://github.com/sapphiredev/type/commit/06e6afc51d57c759a2ade1feac43554f5bd89967)) ([#573](https://github.com/sapphiredev/type/pull/573) by @favna)

# [2.5.0](https://github.com/sapphiredev/type/compare/v2.4.4...v2.5.0) - (2024-06-30)

## 📝 Documentation

- **readme:** Fix table of contents ([707e242](https://github.com/sapphiredev/type/commit/707e2427b320b1d1af4a21227db04026f8935203))

## 🚀 Features

- Add node 22 prebuilts ([be5b363](https://github.com/sapphiredev/type/commit/be5b363acc49b702139e292fe452c863a50293e3)) ([#570](https://github.com/sapphiredev/type/pull/570) by @favna)

# [2.4.4](https://github.com/sapphiredev/type/compare/v2.4.4...v2.4.4) - (2024-01-19)

## 🐛 Bug Fixes

- Fixed commonjs typings export mapping (#526) ([b7787cb](https://github.com/sapphiredev/type/commit/b7787cb356f907a6867105314795b0916ff18363))

# [2.4.3](https://github.com/sapphiredev/type/compare/v2.4.3...v2.4.3) - (2023-12-05)

## 🐛 Bug Fixes

- Triple ESM fix (#508) ([f0760bc](https://github.com/sapphiredev/type/commit/f0760bc57956007c5caed06d7305aadfd3cafbe6))

# [2.4.2](https://github.com/sapphiredev/type/compare/v2.4.2...v2.4.2) - (2023-12-04)

## 🐛 Bug Fixes

- Properly split CJS and ESM ([3b42e83](https://github.com/sapphiredev/type/commit/3b42e837c50d760190f95b2c9e788d424176ee89))

# [2.4.1](https://github.com/sapphiredev/type/compare/v2.4.1...v2.4.1) - (2023-11-05)

## 🐛 Bug Fixes

- **deps:** Update prebuilts, drop node 16 prebuilts, update for node-gyp v10.x and Python 3.12 (#500) ([ffcc607](https://github.com/sapphiredev/type/commit/ffcc60704fba58f855408fcb8d69c9c906f13f1e))

# [2.4.0](https://github.com/sapphiredev/type/compare/v2.3.0...v2.4.0) - (2023-04-23)

## 🐛 Bug Fixes

- **ci:** Include `build-from-source` step in x86-64 build (#430) ([2d44dfc](https://github.com/sapphiredev/type/commit/2d44dfc16350ec931c2c708557fd80fce3cafa36))

## 🚀 Features

- Add prebuilts for NodeJS v20 (and drop prebuilts for 12, 14, 15, and 17) (#452) ([5ac4c42](https://github.com/sapphiredev/type/commit/5ac4c4202b3edcda62c95567e107a19dde5b8ed2))

# [2.3.0](https://github.com/sapphiredev/type/compare/v2.2.6...v2.3.0) - (2022-12-18)

## 🚀 Features

- Add node 19 support (#428) ([f2d2dc6](https://github.com/sapphiredev/type/commit/f2d2dc6d9fc29f81bea0e04ed962062ef38154d9))

# [2.2.6](https://github.com/sapphiredev/type/compare/v2.2.5...v2.2.6) - (2022-11-12)

## 🐛 Bug Fixes

- Fixed prebuild target (#421) ([1d8887e](https://github.com/sapphiredev/type/commit/1d8887e394b574ebc1b6efc9ee49f302153b2926))

# [2.2.5](https://github.com/sapphiredev/type/compare/v2.2.4...v2.2.5) - (2022-11-06)

## 🐛 Bug Fixes

- **deps:** Update all non-major dependencies (#417) ([482018e](https://github.com/sapphiredev/type/commit/482018e27c86e0f2c161cc25ca9e46249a808700))
- **deps:** Update all non-major dependencies (#371) ([384abe7](https://github.com/sapphiredev/type/commit/384abe77ed77e56a0db834248b284e108f744dda))

## 📝 Documentation

- Add @allcontributors[bot] as a contributor ([00e117e](https://github.com/sapphiredev/type/commit/00e117e6b3cbfaa8b5bf877253a1ada853cb8bf2))
- Add RealShadowNova as a contributor for tool (#389) ([ae3669f](https://github.com/sapphiredev/type/commit/ae3669f95ed68776c4b32158316d7a547c657d17))

## 🧪 Testing

- Switch to vitest (#387) ([2054309](https://github.com/sapphiredev/type/commit/2054309defbf73919196a92161bfb5c1e6659c2c))
- Fix jest config ([8d73abe](https://github.com/sapphiredev/type/commit/8d73abee3d5faa6283b234c10dabcbfe1dbb2bc3))

# [2.2.4](https://github.com/sapphiredev/type/compare/v2.2.0...v2.2.4) - (2022-04-29)

## Bug Fixes

- **prebuilts:** Remove `macos-12` target as it conflicts with `macos-latest` ([027a015](https://github.com/sapphiredev/type/commit/027a015bc3382c920c4499f89e57f10d5482e779))
- **prebuilts:** Ensure proper prebuilts are published ([de4d79c](https://github.com/sapphiredev/type/commit/de4d79c6db35b6484f7d0ed978b9d6d1ae89525e))
- Configure prebuilts for Node 17 and Node 18 ([ec2e873](https://github.com/sapphiredev/type/commit/ec2e8733446e3fbb2af7231fb26a467be7f6591b))

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
