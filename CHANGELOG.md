# Changelog

## [0.15.0](https://github.com/jeffersonsimaogoncalves/asdf/compare/v0.14.0...v0.15.0) (2024-04-13)


### ⚠ BREAKING CHANGES

* Enable `pipefail` ([#1608](https://github.com/jeffersonsimaogoncalves/asdf/issues/1608))
* `plugin list` exit code 0 when no plugins are installed ([#1597](https://github.com/jeffersonsimaogoncalves/asdf/issues/1597))
* 0 exit code for success when adding an existing plugin ([#1598](https://github.com/jeffersonsimaogoncalves/asdf/issues/1598))
* **fish:** don't resolve symlinks for ASDF_DIR ([#1583](https://github.com/jeffersonsimaogoncalves/asdf/issues/1583))
* Remove files containing only `asdf` wrapper functions ([#1525](https://github.com/jeffersonsimaogoncalves/asdf/issues/1525))
* align Fish entrypoint behaviour with other shells ([#1524](https://github.com/jeffersonsimaogoncalves/asdf/issues/1524))
* do not remove items from PATH in POSIX entrypoint ([#1521](https://github.com/jeffersonsimaogoncalves/asdf/issues/1521))
* rework POSIX entrypoint for greater shell support ([#1480](https://github.com/jeffersonsimaogoncalves/asdf/issues/1480))

### Features

* add plugin location when update the plugin ([#1602](https://github.com/jeffersonsimaogoncalves/asdf/issues/1602)) ([36c7024](https://github.com/jeffersonsimaogoncalves/asdf/commit/36c7024baa4b829b3629b4e0430157266d354158))
* add post update plugin support ([#1049](https://github.com/jeffersonsimaogoncalves/asdf/issues/1049)) ([304f72d](https://github.com/jeffersonsimaogoncalves/asdf/commit/304f72dbb207606fd82c04ee2c73cf11e9e6e0cc))
* asdf latest defer to plugin to determine the latest version ([#938](https://github.com/jeffersonsimaogoncalves/asdf/issues/938)) ([664d82e](https://github.com/jeffersonsimaogoncalves/asdf/commit/664d82ed8a734eb30988840829a972f8ddd8e523))
* case-insensitive filtering of unstable versions in `latest` ([#1139](https://github.com/jeffersonsimaogoncalves/asdf/issues/1139)) ([e61e3d9](https://github.com/jeffersonsimaogoncalves/asdf/commit/e61e3d9ade0d7bdfb4413184284038c50ba1e09c))
* cmd to print debug information ([#787](https://github.com/jeffersonsimaogoncalves/asdf/issues/787)) ([8ca2af3](https://github.com/jeffersonsimaogoncalves/asdf/commit/8ca2af3316be03f980598c5dbcb8152b6b56e96a))
* **completions:** bash improvements ([#1329](https://github.com/jeffersonsimaogoncalves/asdf/issues/1329)) ([7c802c3](https://github.com/jeffersonsimaogoncalves/asdf/commit/7c802c3fc9b5dc556993a98e5aaf96650cbb0d5b))
* configurable plugin repo last check time ([#957](https://github.com/jeffersonsimaogoncalves/asdf/issues/957)) ([1716afa](https://github.com/jeffersonsimaogoncalves/asdf/commit/1716afa02125aa322d8a688ff4b3e95f2e08b33c))
* Disable short-name repository with config value ([#1227](https://github.com/jeffersonsimaogoncalves/asdf/issues/1227)) ([18caea3](https://github.com/jeffersonsimaogoncalves/asdf/commit/18caea3eb7d989d195cf13b3c9ffc2058d906fc5))
* display plugin repo refs alongside urls in info cmd ([#1014](https://github.com/jeffersonsimaogoncalves/asdf/issues/1014)) ([cd0a6a7](https://github.com/jeffersonsimaogoncalves/asdf/commit/cd0a6a779eb18236fe7bf1f84403e33e636ef1f3))
* Displays a warning when a plugin from the tools-version list does not exist ([#1033](https://github.com/jeffersonsimaogoncalves/asdf/issues/1033)) ([9430a39](https://github.com/jeffersonsimaogoncalves/asdf/commit/9430a39aef1dbf806a8954d71711747be1001076))
* Elvish Shell support ([#1066](https://github.com/jeffersonsimaogoncalves/asdf/issues/1066)) ([cc7778a](https://github.com/jeffersonsimaogoncalves/asdf/commit/cc7778a040751f6801524135f5f5ece3a748fa8c))
* **latest:** adds the flag --all to the latest command ([#1096](https://github.com/jeffersonsimaogoncalves/asdf/issues/1096)) ([f85fef5](https://github.com/jeffersonsimaogoncalves/asdf/commit/f85fef533f249df5a9f58307d288f2f069351e88))
* mark current resolved versions in `asdf list` output ([#762](https://github.com/jeffersonsimaogoncalves/asdf/issues/762)) ([5ea6795](https://github.com/jeffersonsimaogoncalves/asdf/commit/5ea67953be74cb5fde11240dc40a541c69afc65c))
* plugin documentation callback support 🎉 ([#757](https://github.com/jeffersonsimaogoncalves/asdf/issues/757)) ([cc0023b](https://github.com/jeffersonsimaogoncalves/asdf/commit/cc0023b022c6db52ab46885430805fe7e0804bfc))
* Support configurable `ASDF_CONCURRENCY` ([#1532](https://github.com/jeffersonsimaogoncalves/asdf/issues/1532)) ([684f4f0](https://github.com/jeffersonsimaogoncalves/asdf/commit/684f4f058f24cc418f77825a59a22bacd16a9bee))
* support for "latest" in shell, local, and global ([#802](https://github.com/jeffersonsimaogoncalves/asdf/issues/802)) ([0edb505](https://github.com/jeffersonsimaogoncalves/asdf/commit/0edb50547c21b3c7f4f1379b898b7fef7e9a2da3))
* support nushell ([#1355](https://github.com/jeffersonsimaogoncalves/asdf/issues/1355)) ([274a638](https://github.com/jeffersonsimaogoncalves/asdf/commit/274a638e155c08cd0d6dbda1a0d4da02c3466c97))
* Support PowerShell Core ([#1522](https://github.com/jeffersonsimaogoncalves/asdf/issues/1522)) ([213aa22](https://github.com/jeffersonsimaogoncalves/asdf/commit/213aa22378cf0ecf5b1924f1bfc4fee43338255a))
* toggle off repo sync completely ([#1011](https://github.com/jeffersonsimaogoncalves/asdf/issues/1011)) ([a3ba5a7](https://github.com/jeffersonsimaogoncalves/asdf/commit/a3ba5a794c07efb4aa9cce9c15d41b4b61d5df01))
* upgrade elvish to 0.17.0 ([#1159](https://github.com/jeffersonsimaogoncalves/asdf/issues/1159)) ([824550e](https://github.com/jeffersonsimaogoncalves/asdf/commit/824550ed2009c7e8c4c84afd7a01197d451c47bf))


### Patches

* _where_ bug when multiple versions are selected ([#790](https://github.com/jeffersonsimaogoncalves/asdf/issues/790)) ([77a748d](https://github.com/jeffersonsimaogoncalves/asdf/commit/77a748d70a8c9ddf9588546801c5535b5d1edb3a)), closes [#690](https://github.com/jeffersonsimaogoncalves/asdf/issues/690)
* &lt;plugin update all&gt; to latest commit on default branch for each plugin ([#800](https://github.com/jeffersonsimaogoncalves/asdf/issues/800)) ([456d8e3](https://github.com/jeffersonsimaogoncalves/asdf/commit/456d8e36ca76b36b848453a63b54ffeb214bce7e))
* `asdf info` show BASH_VERSION & all asdf envs ([#1513](https://github.com/jeffersonsimaogoncalves/asdf/issues/1513)) ([a1b5eee](https://github.com/jeffersonsimaogoncalves/asdf/commit/a1b5eeec1caf605c0e4c80748703b9e227b57aeb))
* `plugin list` exit code 0 when no plugins are installed ([#1597](https://github.com/jeffersonsimaogoncalves/asdf/issues/1597)) ([a029c00](https://github.com/jeffersonsimaogoncalves/asdf/commit/a029c007503f2eec911a0c836e8622bb38c5e065))
* `plugin test` git-ref to use plugin repo default branch ([#1694](https://github.com/jeffersonsimaogoncalves/asdf/issues/1694)) ([6d8cf9d](https://github.com/jeffersonsimaogoncalves/asdf/commit/6d8cf9d44b3d985ac59f1eac827c5275392f90fd))
* `reshim` did not rewrite executable path ([#1311](https://github.com/jeffersonsimaogoncalves/asdf/issues/1311)) ([5af7625](https://github.com/jeffersonsimaogoncalves/asdf/commit/5af76257693d1f560b9c27c9cdcc6f5a5a33c4d5))
* 0 exit code for success when adding an existing plugin ([#1598](https://github.com/jeffersonsimaogoncalves/asdf/issues/1598)) ([4dd1904](https://github.com/jeffersonsimaogoncalves/asdf/commit/4dd190466a9855dac300ce691e66a7629ef37b82))
* add asdf to list of banned commands ([#1224](https://github.com/jeffersonsimaogoncalves/asdf/issues/1224)) ([39909e0](https://github.com/jeffersonsimaogoncalves/asdf/commit/39909e01af2bbf23fc821de5cec6c5c9661c59bb))
* add missing "does not add paths to PATH more than once" test for elvish ([#1275](https://github.com/jeffersonsimaogoncalves/asdf/issues/1275)) ([3c55167](https://github.com/jeffersonsimaogoncalves/asdf/commit/3c55167a6807b48cacaaed18df7bf0db2526ed59))
* Add test for nushell integration and fix some bugs ([#1415](https://github.com/jeffersonsimaogoncalves/asdf/issues/1415)) ([60d4494](https://github.com/jeffersonsimaogoncalves/asdf/commit/60d4494d5d21f9d7bdd0778ca962ddb44280aff7))
* Adds "grep -P" to the list of banned commands ([#1064](https://github.com/jeffersonsimaogoncalves/asdf/issues/1064)) ([8a515f4](https://github.com/jeffersonsimaogoncalves/asdf/commit/8a515f49d7443ee318badbd4d8f092ad0d8f04ca))
* align Fish entrypoint behaviour with other shells ([#1524](https://github.com/jeffersonsimaogoncalves/asdf/issues/1524)) ([8919f40](https://github.com/jeffersonsimaogoncalves/asdf/commit/8919f4009ea233c32298911b28ceb879e2dbc675))
* Allow `path:` versions to use `~` ([#1403](https://github.com/jeffersonsimaogoncalves/asdf/issues/1403)) ([670c96d](https://github.com/jeffersonsimaogoncalves/asdf/commit/670c96d1a6d6d2c19ff63ce2ed14f784c340e9b9))
* allow plugin callbacks to be in any language ([#995](https://github.com/jeffersonsimaogoncalves/asdf/issues/995)) ([2ad0f5e](https://github.com/jeffersonsimaogoncalves/asdf/commit/2ad0f5ea452bd8f843951c4a9cc56a020e172b07))
* always use ASDF_DEFAULT_TOOL_VERSIONS_FILENAME for filename when present ([#1238](https://github.com/jeffersonsimaogoncalves/asdf/issues/1238)) ([711ad99](https://github.com/jeffersonsimaogoncalves/asdf/commit/711ad991043a1980fa264098f29e78f2ecafd610)), closes [#1082](https://github.com/jeffersonsimaogoncalves/asdf/issues/1082)
* append trailing newline to .tool-versions files when missing ([#1310](https://github.com/jeffersonsimaogoncalves/asdf/issues/1310)) ([eb7dac3](https://github.com/jeffersonsimaogoncalves/asdf/commit/eb7dac3a2b15ad458f55a897d49a377508ea92fe)), closes [#1299](https://github.com/jeffersonsimaogoncalves/asdf/issues/1299)
* asdf shell command docs & help output ([#737](https://github.com/jeffersonsimaogoncalves/asdf/issues/737)) ([f5c7dae](https://github.com/jeffersonsimaogoncalves/asdf/commit/f5c7dae331af14563de141dc0500234bab03f4a7))
* assign default values to all internal variables ([#1518](https://github.com/jeffersonsimaogoncalves/asdf/issues/1518)) ([86477ee](https://github.com/jeffersonsimaogoncalves/asdf/commit/86477ee8dea14ab63faf7132133304855a647fde))
* avoid mention of `ASDF_NU_DIR` ([#1660](https://github.com/jeffersonsimaogoncalves/asdf/issues/1660)) ([dfea89c](https://github.com/jeffersonsimaogoncalves/asdf/commit/dfea89ccc703f3ef5a87c4b85726456d70167d89))
* Ban `ls` command ([#1141](https://github.com/jeffersonsimaogoncalves/asdf/issues/1141)) ([87137e4](https://github.com/jeffersonsimaogoncalves/asdf/commit/87137e41031f17b30acf12ee35925e689c84e2d8))
* ban grep long flags ([#1117](https://github.com/jeffersonsimaogoncalves/asdf/issues/1117)) ([6e4c39c](https://github.com/jeffersonsimaogoncalves/asdf/commit/6e4c39c244a289a54f235cf15a29874fb8885927))
* ban the sort -V command ([#755](https://github.com/jeffersonsimaogoncalves/asdf/issues/755)) ([aef4ae8](https://github.com/jeffersonsimaogoncalves/asdf/commit/aef4ae8b5abced2225ea0359b643cf9901558074))
* Ban use of 'test' ([#1383](https://github.com/jeffersonsimaogoncalves/asdf/issues/1383)) ([ec972cb](https://github.com/jeffersonsimaogoncalves/asdf/commit/ec972cbdf0acbecf70e3678c055e27866c49341d))
* bash completion for latest command ([#1472](https://github.com/jeffersonsimaogoncalves/asdf/issues/1472)) ([2606a87](https://github.com/jeffersonsimaogoncalves/asdf/commit/2606a875eba8d74be56c78c97a76f3eb92c8253d))
* Better handling with paths that include spaces ([#1485](https://github.com/jeffersonsimaogoncalves/asdf/issues/1485)) ([bbcbddc](https://github.com/jeffersonsimaogoncalves/asdf/commit/bbcbddcdd4ffa0f49c3772b66d87331420fa5727))
* broken link in contributing.md ([#852](https://github.com/jeffersonsimaogoncalves/asdf/issues/852)) ([90b92b9](https://github.com/jeffersonsimaogoncalves/asdf/commit/90b92b99be8fb8f482e0c41e5e867302ed97806e))
* CI formatting use editorconfig ([#751](https://github.com/jeffersonsimaogoncalves/asdf/issues/751)) ([50feef2](https://github.com/jeffersonsimaogoncalves/asdf/commit/50feef2a777af222ad6a73c19dc113e0c100a012))
* clarify the wording when no version is set ([#1088](https://github.com/jeffersonsimaogoncalves/asdf/issues/1088)) ([4116284](https://github.com/jeffersonsimaogoncalves/asdf/commit/41162849cf5c966c749ec435ebe32bd649a86ee8))
* completions for asdf plugin list ([#1061](https://github.com/jeffersonsimaogoncalves/asdf/issues/1061)) ([43412aa](https://github.com/jeffersonsimaogoncalves/asdf/commit/43412aad5f668686daa058505a61c070561b46fc))
* consistent system completion ([#911](https://github.com/jeffersonsimaogoncalves/asdf/issues/911)) ([f4a80b5](https://github.com/jeffersonsimaogoncalves/asdf/commit/f4a80b53df851e4d2af7921211b60d48773ccb8d))
* correct order of checks in conditional for adding a missing newline ([#1418](https://github.com/jeffersonsimaogoncalves/asdf/issues/1418)) ([4125d2b](https://github.com/jeffersonsimaogoncalves/asdf/commit/4125d2b5560efc646e6048202ceb00fffd0b9eaf)), closes [#1417](https://github.com/jeffersonsimaogoncalves/asdf/issues/1417)
* Correct typo on getting started page ([#1086](https://github.com/jeffersonsimaogoncalves/asdf/issues/1086)) ([4321980](https://github.com/jeffersonsimaogoncalves/asdf/commit/4321980c3385ac1bafd77503c8ec77b26042d05b))
* create install directory with `mkdir -p` ([#1563](https://github.com/jeffersonsimaogoncalves/asdf/issues/1563)) ([d6185a2](https://github.com/jeffersonsimaogoncalves/asdf/commit/d6185a21207e0ac45e69499883dad5e2b585c1b6))
* delete instructions to add dependencies with Homebrew ([#937](https://github.com/jeffersonsimaogoncalves/asdf/issues/937)) ([24d79d4](https://github.com/jeffersonsimaogoncalves/asdf/commit/24d79d4d9256d7d130fbaf8a4b7dc34aeb1b01d7))
* do not print `find` errors ([#1102](https://github.com/jeffersonsimaogoncalves/asdf/issues/1102)) ([5992abb](https://github.com/jeffersonsimaogoncalves/asdf/commit/5992abb09e6f5e0af690bf0e99619386187949db))
* do not remove items from PATH in POSIX entrypoint ([#1521](https://github.com/jeffersonsimaogoncalves/asdf/issues/1521)) ([b6d0ca2](https://github.com/jeffersonsimaogoncalves/asdf/commit/b6d0ca28d5fd2b63c7da67b127e6c2a0e01b2670))
* Do not use `pwd` ([dd37b6f](https://github.com/jeffersonsimaogoncalves/asdf/commit/dd37b6f0c0ed20d15e3d96b730db82f21c9e2e6f))
* Do not use type not exported on older Python versions ([#1409](https://github.com/jeffersonsimaogoncalves/asdf/issues/1409)) ([7460809](https://github.com/jeffersonsimaogoncalves/asdf/commit/74608098cdfc70c2d2e85d1f3861500ef668a041))
* docs file rename ([#809](https://github.com/jeffersonsimaogoncalves/asdf/issues/809)) ([2bf076f](https://github.com/jeffersonsimaogoncalves/asdf/commit/2bf076f3d33087966cdb4de52cfdf0042eb7c076))
* don't generate on error if backup file doesn't exists ([#1057](https://github.com/jeffersonsimaogoncalves/asdf/issues/1057)) ([288468f](https://github.com/jeffersonsimaogoncalves/asdf/commit/288468f93f6c5cb4e7cca1173d4ad73154d0d564))
* don't invoke asdf inside asdf commands ([#1208](https://github.com/jeffersonsimaogoncalves/asdf/issues/1208)) ([27f7ef7](https://github.com/jeffersonsimaogoncalves/asdf/commit/27f7ef78529649534b8383daa58e4b370b3cbd7f))
* don't override existing ASDF_DIR ([#1008](https://github.com/jeffersonsimaogoncalves/asdf/issues/1008)) ([73efc9f](https://github.com/jeffersonsimaogoncalves/asdf/commit/73efc9fa97744c49c5004ee8bb9b6064b6ce22f2))
* **elvish:** prepend asdf paths to `$PATH` ([#1174](https://github.com/jeffersonsimaogoncalves/asdf/issues/1174)) ([682b7a1](https://github.com/jeffersonsimaogoncalves/asdf/commit/682b7a1d6dc1a35f7f8b0ddbab977e0a3dae2c9c))
* Enable `pipefail` ([#1608](https://github.com/jeffersonsimaogoncalves/asdf/issues/1608)) ([4085e55](https://github.com/jeffersonsimaogoncalves/asdf/commit/4085e5542bac824ea124610ad247c2f90d1b8d93))
* enforce & use consistent function definitions ([#1464](https://github.com/jeffersonsimaogoncalves/asdf/issues/1464)) ([e0fd7a7](https://github.com/jeffersonsimaogoncalves/asdf/commit/e0fd7a7be8bbbbf0f3cb6dc38cea3b62963eb0c9))
* enforce consistent shell redirection format ([#1533](https://github.com/jeffersonsimaogoncalves/asdf/issues/1533)) ([1bc205e](https://github.com/jeffersonsimaogoncalves/asdf/commit/1bc205e8aa61287c766c673acb8f0d4f9c6ee249))
* ensure shims get created when data dir has spaces ([#996](https://github.com/jeffersonsimaogoncalves/asdf/issues/996)) ([39c9999](https://github.com/jeffersonsimaogoncalves/asdf/commit/39c9999519a1d3c51ffb3b8dddd141dbc29b3bd1))
* excludes "milestone" releases in "latest" command ([#1307](https://github.com/jeffersonsimaogoncalves/asdf/issues/1307)) ([5334d1d](https://github.com/jeffersonsimaogoncalves/asdf/commit/5334d1db3d390c46ed49101528f74483eb6b2987)), closes [#1306](https://github.com/jeffersonsimaogoncalves/asdf/issues/1306)
* fish init command ([#792](https://github.com/jeffersonsimaogoncalves/asdf/issues/792)) ([1479ec8](https://github.com/jeffersonsimaogoncalves/asdf/commit/1479ec83be6f39776a99d0b8da6fa59580586d93))
* **fish:** don't resolve symlinks for ASDF_DIR ([#1583](https://github.com/jeffersonsimaogoncalves/asdf/issues/1583)) ([d1a563d](https://github.com/jeffersonsimaogoncalves/asdf/commit/d1a563dcc0107d5c631f73b114044898b5cadcf9))
* **fish:** use builtin realpath over system one ([#1637](https://github.com/jeffersonsimaogoncalves/asdf/issues/1637)) ([5ac3032](https://github.com/jeffersonsimaogoncalves/asdf/commit/5ac30328a7bbd1a8d974bb5fb1f14d8bd2d1e03f))
* **fish:** use PATH instead of fish_user_paths ([#1709](https://github.com/jeffersonsimaogoncalves/asdf/issues/1709)) ([5327697](https://github.com/jeffersonsimaogoncalves/asdf/commit/53276973f7c99695cd9a28b04c010b006d7f60ca))
* Fix plugin-test arg parsing ([#1084](https://github.com/jeffersonsimaogoncalves/asdf/issues/1084)) ([c911f2d](https://github.com/jeffersonsimaogoncalves/asdf/commit/c911f2d43198945f21bb25100c9dab5a375c780b))
* fixing bats ([#1215](https://github.com/jeffersonsimaogoncalves/asdf/issues/1215)) ([a9caa5b](https://github.com/jeffersonsimaogoncalves/asdf/commit/a9caa5bdffca5401798fb37e6f34af933b6ce0d2))
* force lwrcase plugin name fix capitalization mismatch errs ([#1400](https://github.com/jeffersonsimaogoncalves/asdf/issues/1400)) ([196a05b](https://github.com/jeffersonsimaogoncalves/asdf/commit/196a05b2dcef48f3a281350734c76ba7bc73fa81))
* format command-reshim ([43d6fef](https://github.com/jeffersonsimaogoncalves/asdf/commit/43d6fef000a2d7ab5ab2cc662f7d066d3489e8b1))
* full_version_name is not available here ([#1031](https://github.com/jeffersonsimaogoncalves/asdf/issues/1031)) ([8490526](https://github.com/jeffersonsimaogoncalves/asdf/commit/84905265467c9fdf618c11f69a5ae71408e18bea))
* get invalid ASDF_DATA_DIR when exec asdf shims by non-shell ([#1154](https://github.com/jeffersonsimaogoncalves/asdf/issues/1154)) ([b9962f7](https://github.com/jeffersonsimaogoncalves/asdf/commit/b9962f71564ce77cf97772cc100b80f9d77019b1))
* help for extension commands for plugins with hyphens in the name. ([#1048](https://github.com/jeffersonsimaogoncalves/asdf/issues/1048)) ([3e0cb9a](https://github.com/jeffersonsimaogoncalves/asdf/commit/3e0cb9aaea7f2bf282a18c4912454737fef0741b))
* help text as per new feats in [#633](https://github.com/jeffersonsimaogoncalves/asdf/issues/633) ([#991](https://github.com/jeffersonsimaogoncalves/asdf/issues/991)) ([0d95663](https://github.com/jeffersonsimaogoncalves/asdf/commit/0d956635b5cabe35f0895121929e8e668a3ee03d))
* improve formatting of ballad ([#1367](https://github.com/jeffersonsimaogoncalves/asdf/issues/1367)) ([e0c2c31](https://github.com/jeffersonsimaogoncalves/asdf/commit/e0c2c31fc3274387efdddebe1450f0662f91a726))
* improve lint and test scripts ([#1607](https://github.com/jeffersonsimaogoncalves/asdf/issues/1607)) ([b320803](https://github.com/jeffersonsimaogoncalves/asdf/commit/b3208031204aabad6e85346155baacab16862da8))
* improve readability of the non-set `nullglob` guard ([#1545](https://github.com/jeffersonsimaogoncalves/asdf/issues/1545)) ([f273612](https://github.com/jeffersonsimaogoncalves/asdf/commit/f273612155188f62cf8daf584d5581cd4214daf4))
* incorrect usage of grep ([#1035](https://github.com/jeffersonsimaogoncalves/asdf/issues/1035)) ([30d27cb](https://github.com/jeffersonsimaogoncalves/asdf/commit/30d27cbe6b358cd790fb66dbc8a14806eca23f05))
* incorrect version output in asdf current ([#746](https://github.com/jeffersonsimaogoncalves/asdf/issues/746)) ([e9c149e](https://github.com/jeffersonsimaogoncalves/asdf/commit/e9c149ea212cf5bf822bbce8d01aae88caaa30b2))
* insert error handling in list-all & download plugin scripts ([#881](https://github.com/jeffersonsimaogoncalves/asdf/issues/881)) ([a7d3661](https://github.com/jeffersonsimaogoncalves/asdf/commit/a7d3661f6c53b24ae1c21e93f94209f3af243349))
* instead /tmp, use TMPDIR if defined ([9113623](https://github.com/jeffersonsimaogoncalves/asdf/commit/91136234e90b5fe8718338f513fa770c99151d3e))
* Introduce `ASDF_FORCE_PREPEND` variable on POSIX entrypoint ([#1560](https://github.com/jeffersonsimaogoncalves/asdf/issues/1560)) ([5b7d0fe](https://github.com/jeffersonsimaogoncalves/asdf/commit/5b7d0fea0a10681d89dd7bf4010e0a39e6696841))
* latest --all correctly report plugins as missing ([#1118](https://github.com/jeffersonsimaogoncalves/asdf/issues/1118)) ([aafe1e5](https://github.com/jeffersonsimaogoncalves/asdf/commit/aafe1e5304c2d2a026831976c18faa6fb48d25bc))
* lint & style errors in `bin/asdf` ([#1516](https://github.com/jeffersonsimaogoncalves/asdf/issues/1516)) ([13c0e2f](https://github.com/jeffersonsimaogoncalves/asdf/commit/13c0e2fab0e9ad4dccf72b6f5586fb32458b8709))
* lint errors from `scripts/checkstyle.py` ([#1385](https://github.com/jeffersonsimaogoncalves/asdf/issues/1385)) ([3492043](https://github.com/jeffersonsimaogoncalves/asdf/commit/3492043241e466337c5965a6fe2e089147bc4152))
* lint scripts for local and CI ([#961](https://github.com/jeffersonsimaogoncalves/asdf/issues/961)) ([5dafbc8](https://github.com/jeffersonsimaogoncalves/asdf/commit/5dafbc8e390eacbcfcf97d6d2890e0aa6ef9cd60))
* list `asdf version` command under help.txt UTILS section ([#1673](https://github.com/jeffersonsimaogoncalves/asdf/issues/1673)) ([240a5fb](https://github.com/jeffersonsimaogoncalves/asdf/commit/240a5fbdea1de055672d02f83db1de990ea2bf83))
* local plugin in then clause too ([#1203](https://github.com/jeffersonsimaogoncalves/asdf/issues/1203)) ([448f750](https://github.com/jeffersonsimaogoncalves/asdf/commit/448f750891a4366f45d905b112ad20d4be66c496))
* Make asdf.fish compatible with Fish 3.1.2 ([#1590](https://github.com/jeffersonsimaogoncalves/asdf/issues/1590)) ([e83d71e](https://github.com/jeffersonsimaogoncalves/asdf/commit/e83d71e43f525453994eb4cfda8ad66f8b914529))
* make fish shell setup match other shells ([#1209](https://github.com/jeffersonsimaogoncalves/asdf/issues/1209)) ([6fc4bb8](https://github.com/jeffersonsimaogoncalves/asdf/commit/6fc4bb8fc650e73152ce326267f89df6865cdd24))
* mv dev dep from repo root to subdir to avoid clash ([#1408](https://github.com/jeffersonsimaogoncalves/asdf/issues/1408)) ([5df70da](https://github.com/jeffersonsimaogoncalves/asdf/commit/5df70dadacd66b4150ed47e58c861418c0d1281f))
* newline after error msg for ASDF_DIR ([#1113](https://github.com/jeffersonsimaogoncalves/asdf/issues/1113)) ([ac2791e](https://github.com/jeffersonsimaogoncalves/asdf/commit/ac2791e49f7fcdbeb420415d8ddcb5f17bcf296e))
* no longer write temporary files to home directory ([#1592](https://github.com/jeffersonsimaogoncalves/asdf/issues/1592)) ([624604a](https://github.com/jeffersonsimaogoncalves/asdf/commit/624604a8626dc6006d78121d4cf0f6c920449c56))
* nushell language syntax update ([#1624](https://github.com/jeffersonsimaogoncalves/asdf/issues/1624)) ([0ddab5d](https://github.com/jeffersonsimaogoncalves/asdf/commit/0ddab5dfaf28ad97c84a6aa56b08ccc212e07b4d))
* nushell PATH conversion to list before filter ([#1471](https://github.com/jeffersonsimaogoncalves/asdf/issues/1471)) ([cd0e12b](https://github.com/jeffersonsimaogoncalves/asdf/commit/cd0e12b3ee4090242b884ac4aea0f65784e52946))
* Nushell plugin list --urls ([#1507](https://github.com/jeffersonsimaogoncalves/asdf/issues/1507)) ([9363fb2](https://github.com/jeffersonsimaogoncalves/asdf/commit/9363fb2f72e7fa08d3580b22d465af48a7d37031))
* nushell plugin list all ([#1501](https://github.com/jeffersonsimaogoncalves/asdf/issues/1501)) ([#1502](https://github.com/jeffersonsimaogoncalves/asdf/issues/1502)) ([c5b8b3c](https://github.com/jeffersonsimaogoncalves/asdf/commit/c5b8b3c128b48e1531f6d03d2083435f413a4738))
* **nushell:** Use `def --env` instead of `def-env` ([#1681](https://github.com/jeffersonsimaogoncalves/asdf/issues/1681)) ([3b8f400](https://github.com/jeffersonsimaogoncalves/asdf/commit/3b8f400c3e628851286bfebd8da5bc7ab45cd676))
* only iterate over directories in the plugins/ directory ([#1228](https://github.com/jeffersonsimaogoncalves/asdf/issues/1228)) ([788ccab](https://github.com/jeffersonsimaogoncalves/asdf/commit/788ccab5971cb828cf25364b0df5ed6f5e9e713d))
* pipe find into while ([26d2c64](https://github.com/jeffersonsimaogoncalves/asdf/commit/26d2c64477a1faabedd9a5f97aa7da706988cd72))
* plugin extension commands to not require `bin/` directory ([#1643](https://github.com/jeffersonsimaogoncalves/asdf/issues/1643)) ([61420ad](https://github.com/jeffersonsimaogoncalves/asdf/commit/61420ad90829b2c9bf1ca16681a2eb652adcc755))
* plugin test to emit error message when `latest` fails ([#772](https://github.com/jeffersonsimaogoncalves/asdf/issues/772)) ([1a01356](https://github.com/jeffersonsimaogoncalves/asdf/commit/1a01356935aef4eeae9a5172c063d1f4651ee149)), closes [#756](https://github.com/jeffersonsimaogoncalves/asdf/issues/756)
* plugin update portability ([#924](https://github.com/jeffersonsimaogoncalves/asdf/issues/924)) ([d7b62d2](https://github.com/jeffersonsimaogoncalves/asdf/commit/d7b62d2e920d2395f8812e5a5ff9d34b2986c452))
* Prepend asdf directories to the PATH in Nushell ([#1496](https://github.com/jeffersonsimaogoncalves/asdf/issues/1496)) ([745950c](https://github.com/jeffersonsimaogoncalves/asdf/commit/745950c3589c4047a5b94b34bc9cf06dff5dc3c7))
* Prevent unbound variable error with nounset in asdf.sh ([#1158](https://github.com/jeffersonsimaogoncalves/asdf/issues/1158)) ([b7dd291](https://github.com/jeffersonsimaogoncalves/asdf/commit/b7dd291c983af321af20550fa89bf1cfbc888aec))
* print tool-versions file dir on shim error ([#750](https://github.com/jeffersonsimaogoncalves/asdf/issues/750)) ([a5c815b](https://github.com/jeffersonsimaogoncalves/asdf/commit/a5c815b6d47c47f416006bad2de4b6955af65490))
* Quote commands correctly in plugin-test ([#1078](https://github.com/jeffersonsimaogoncalves/asdf/issues/1078)) ([69ff2d0](https://github.com/jeffersonsimaogoncalves/asdf/commit/69ff2d0c9a4fd273c9dac151345f60f7b146e569))
* regex validate plugin names on plugin add cmd ([#1010](https://github.com/jeffersonsimaogoncalves/asdf/issues/1010)) ([7697e6e](https://github.com/jeffersonsimaogoncalves/asdf/commit/7697e6e344809ab4603d0764fb8a969c2bbaf3b6))
* Remove `==` inside `[` ([#1421](https://github.com/jeffersonsimaogoncalves/asdf/issues/1421)) ([d81b81f](https://github.com/jeffersonsimaogoncalves/asdf/commit/d81b81f9de2dc5961624464df04cef7cafae588c))
* remove `column` command in favor of awk ([#721](https://github.com/jeffersonsimaogoncalves/asdf/issues/721)) ([1b7b4da](https://github.com/jeffersonsimaogoncalves/asdf/commit/1b7b4da0a6ac7e878acd556aa47bc71a4d49d4fc))
* remove automatic compinit ([#678](https://github.com/jeffersonsimaogoncalves/asdf/issues/678)) ([3246c26](https://github.com/jeffersonsimaogoncalves/asdf/commit/3246c26d52f0d0368110ac96f82d60301b8f6bc8))
* remove comments from whole file instead of line by line for performance ([#1198](https://github.com/jeffersonsimaogoncalves/asdf/issues/1198)) ([de6e22f](https://github.com/jeffersonsimaogoncalves/asdf/commit/de6e22f909946f7d17047f4aeab41e581546b674))
* Remove files containing only `asdf` wrapper functions ([#1525](https://github.com/jeffersonsimaogoncalves/asdf/issues/1525)) ([00fee78](https://github.com/jeffersonsimaogoncalves/asdf/commit/00fee78423de0e399f5705bb483e599e39b707c9))
* remove find -print0 ([b9228a2](https://github.com/jeffersonsimaogoncalves/asdf/commit/b9228a26de6a0337a7b59fb5252323d368a72a92))
* remove leading asterick in Fish completion ([#1543](https://github.com/jeffersonsimaogoncalves/asdf/issues/1543)) ([198ced5](https://github.com/jeffersonsimaogoncalves/asdf/commit/198ced50327b20b136cb6ec165610d37334a2962))
* remove sort --version-sort from command-latest as list is already sorted ([#700](https://github.com/jeffersonsimaogoncalves/asdf/issues/700)) ([0f80ac3](https://github.com/jeffersonsimaogoncalves/asdf/commit/0f80ac356730a3a04a378b39a6d964d5938832b6))
* Remove unecessary backslashes ([#1384](https://github.com/jeffersonsimaogoncalves/asdf/issues/1384)) ([15faf93](https://github.com/jeffersonsimaogoncalves/asdf/commit/15faf93a0d3615834e550ea1562fb6b8cee5a205))
* Remove usage of `$(pwd)` in favor of `$PWD` ([f522ab9](https://github.com/jeffersonsimaogoncalves/asdf/commit/f522ab98797345d767b239041246dfb4b740423e))
* rename internal function `asdf_tool_versions_filename` ([#1544](https://github.com/jeffersonsimaogoncalves/asdf/issues/1544)) ([b36ec73](https://github.com/jeffersonsimaogoncalves/asdf/commit/b36ec7338654abc3773314147540dfa8297b48b8))
* rename internal plugin repository functions ([#1537](https://github.com/jeffersonsimaogoncalves/asdf/issues/1537)) ([5367f1f](https://github.com/jeffersonsimaogoncalves/asdf/commit/5367f1f09079070c7b47551dc453c686991564a0))
* revert to commands to precompute brew prefix on addition to shell config ([1a4c1c1](https://github.com/jeffersonsimaogoncalves/asdf/commit/1a4c1c15b8505cfe193953db54419cd8406671a1))
* rework POSIX entrypoint for greater shell support ([#1480](https://github.com/jeffersonsimaogoncalves/asdf/issues/1480)) ([3379af8](https://github.com/jeffersonsimaogoncalves/asdf/commit/3379af845ed2e281703bc0e9e4f388a7845edc2a))
* rm asdf current header row for now ([#793](https://github.com/jeffersonsimaogoncalves/asdf/issues/793)) ([b178cb0](https://github.com/jeffersonsimaogoncalves/asdf/commit/b178cb07a7e9e446bea9e2e3e9090dde52994141))
* Sed improvements ([#1087](https://github.com/jeffersonsimaogoncalves/asdf/issues/1087)) ([4b93bc8](https://github.com/jeffersonsimaogoncalves/asdf/commit/4b93bc81aa982b72621cd09e71eeea71ee009185))
* sed re error trailing backslash on FreeBSD ([#1046](https://github.com/jeffersonsimaogoncalves/asdf/issues/1046)). ([#1047](https://github.com/jeffersonsimaogoncalves/asdf/issues/1047)) ([47e8fb0](https://github.com/jeffersonsimaogoncalves/asdf/commit/47e8fb051b3577d251376976d5767c520f3524fc))
* set default shell version values on POSIX entrypoint ([#1594](https://github.com/jeffersonsimaogoncalves/asdf/issues/1594)) ([4d5f22d](https://github.com/jeffersonsimaogoncalves/asdf/commit/4d5f22ddb89ce53e24b1ab1cbefce3be95238a19))
* shellcheck errors and typo ([6af66dc](https://github.com/jeffersonsimaogoncalves/asdf/commit/6af66dc88cc079de560f08f53734709b22d212ba))
* shims break when POSIXLY_CORRECT=1 ([0de6910](https://github.com/jeffersonsimaogoncalves/asdf/commit/0de6910d1f99c9576f8c2e5a916644fed99cddb5)), closes [#581](https://github.com/jeffersonsimaogoncalves/asdf/issues/581)
* shorthand grep options for alpine support ([#1106](https://github.com/jeffersonsimaogoncalves/asdf/issues/1106)) ([234778a](https://github.com/jeffersonsimaogoncalves/asdf/commit/234778a397f19c398d2f76a0321fef3273c9a086))
* support `asdf shim-versions` completions in fish & bash ([#1554](https://github.com/jeffersonsimaogoncalves/asdf/issues/1554)) ([99623d7](https://github.com/jeffersonsimaogoncalves/asdf/commit/99623d7eac0fe17e330a950c71b7ba378f656b2c))
* support latest with filter on local and global ([#633](https://github.com/jeffersonsimaogoncalves/asdf/issues/633)) ([5cf8f89](https://github.com/jeffersonsimaogoncalves/asdf/commit/5cf8f8962fbd5fe2bc86856bc4676f88e1aa8885))
* support nushell v0.75.0 ([#1481](https://github.com/jeffersonsimaogoncalves/asdf/issues/1481)) ([dd8d399](https://github.com/jeffersonsimaogoncalves/asdf/commit/dd8d3999d41cfdd8518a9ea478929b5291b8838c))
* typo and refactor on top of master ([0c263ad](https://github.com/jeffersonsimaogoncalves/asdf/commit/0c263ad70090dd832215ff20f12dd4e14855fdbe))
* typo causing plugin-test to erroneously fail ([b6deb14](https://github.com/jeffersonsimaogoncalves/asdf/commit/b6deb141b53e63be92ac5bd5ef80818cd218e212))
* Typo in POSIX entrypoint ([#1562](https://github.com/jeffersonsimaogoncalves/asdf/issues/1562)) ([6b2ebf5](https://github.com/jeffersonsimaogoncalves/asdf/commit/6b2ebf575ff98d3970b518de04238d30804a40d1))
* typo in subshell for fish instructions ([a76880d](https://github.com/jeffersonsimaogoncalves/asdf/commit/a76880d25a3f58ec01147eab8b01f34503b903bd))
* update elvish to 0.18.0 ([5a89563](https://github.com/jeffersonsimaogoncalves/asdf/commit/5a89563c0a37f244fa3daa46c5100b7711edde1d))
* update event trigger for doc-version workflow ([#1232](https://github.com/jeffersonsimaogoncalves/asdf/issues/1232)) ([0bc8c3a](https://github.com/jeffersonsimaogoncalves/asdf/commit/0bc8c3ab6895b88c96bff86f5f79575ee80cc718))
* update plugin-add regex to support other languages ([#1241](https://github.com/jeffersonsimaogoncalves/asdf/issues/1241)) ([92d005d](https://github.com/jeffersonsimaogoncalves/asdf/commit/92d005dacd2ec434a9d912ab9938b59ab1b7c51f)), closes [#1237](https://github.com/jeffersonsimaogoncalves/asdf/issues/1237)
* updating references to legacy github.io site ([#1240](https://github.com/jeffersonsimaogoncalves/asdf/issues/1240)) ([738306b](https://github.com/jeffersonsimaogoncalves/asdf/commit/738306bc5d1c53a22c06e4d6d3ddb6d511dc5d50))
* use ELVISH_VERSION to specify elvish test version ([#1276](https://github.com/jeffersonsimaogoncalves/asdf/issues/1276)) ([72c3a23](https://github.com/jeffersonsimaogoncalves/asdf/commit/72c3a2377a1afa3027c6f29cb9f3f1a7fbddaa8c))
* Use more idiomatic fish ([#1042](https://github.com/jeffersonsimaogoncalves/asdf/issues/1042)) ([847ec73](https://github.com/jeffersonsimaogoncalves/asdf/commit/847ec73751ced9d149ce0826309fee0f894ca664))
* use universal scope for fish_user_paths ([#1699](https://github.com/jeffersonsimaogoncalves/asdf/issues/1699)) ([0ffee72](https://github.com/jeffersonsimaogoncalves/asdf/commit/0ffee7224bc00a917ceaea689c6268fd1f03bd62))
* wait until the plugin update are finished ([#1037](https://github.com/jeffersonsimaogoncalves/asdf/issues/1037)) ([7e1f2a0](https://github.com/jeffersonsimaogoncalves/asdf/commit/7e1f2a0d938052d4fa5ce6546f07b3decbd740cf))
* warn if `.tool-versions` or asdfrc contains carriage returns ([#1561](https://github.com/jeffersonsimaogoncalves/asdf/issues/1561)) ([097f773](https://github.com/jeffersonsimaogoncalves/asdf/commit/097f7733d67aaf8d0dca1c793407babbdf6f8394))
* warn if plugin does not support keeping downloads if configured ([#1644](https://github.com/jeffersonsimaogoncalves/asdf/issues/1644)) ([19515ed](https://github.com/jeffersonsimaogoncalves/asdf/commit/19515eda3b91167b0d76c35ffc4402de688007e0))
* warn when any ./lib/commands are marked as executable ([#1593](https://github.com/jeffersonsimaogoncalves/asdf/issues/1593)) ([2043a09](https://github.com/jeffersonsimaogoncalves/asdf/commit/2043a09574bdfdfcf2daf2fdb3bff2d9d2dad64e))


### Documentation

* `bin/latest-stable` empty query is set to default ([#1591](https://github.com/jeffersonsimaogoncalves/asdf/issues/1591)) ([299dc97](https://github.com/jeffersonsimaogoncalves/asdf/commit/299dc97a5b63d8afe1a0bba03e32dddfb7fb8e51))
* Add documentation for Linux Homebrew Bash installs ([#1404](https://github.com/jeffersonsimaogoncalves/asdf/issues/1404)) ([a4bf582](https://github.com/jeffersonsimaogoncalves/asdf/commit/a4bf5824c7be61b20ee6b5e9833cfc4a2efbaac2))
* add Japanese translation ([#1667](https://github.com/jeffersonsimaogoncalves/asdf/issues/1667)) ([2b9bec7](https://github.com/jeffersonsimaogoncalves/asdf/commit/2b9bec7710cd18e51a01652e1f58cc309baf2fd7))
* add libexec to Homebrew path ([#1020](https://github.com/jeffersonsimaogoncalves/asdf/issues/1020)) ([fe5b71d](https://github.com/jeffersonsimaogoncalves/asdf/commit/fe5b71d139a7b5d86a192994159b394564786222))
* Add Nushell installation instructions for all languages ([#1519](https://github.com/jeffersonsimaogoncalves/asdf/issues/1519)) ([6a6c539](https://github.com/jeffersonsimaogoncalves/asdf/commit/6a6c539f4a21fdb863fd938edd94ac3bdced349b))
* arch instructions w pacman ([#960](https://github.com/jeffersonsimaogoncalves/asdf/issues/960)) ([24ff458](https://github.com/jeffersonsimaogoncalves/asdf/commit/24ff4582cb06a9a221d4cd30b5d9814499c3aa87))
* asdf dependencies for openSUSE and ArchLinux ([#714](https://github.com/jeffersonsimaogoncalves/asdf/issues/714)) ([ad73ea1](https://github.com/jeffersonsimaogoncalves/asdf/commit/ad73ea1fe2e6196ffab1807db78896fad2a8c628))
* ASDF_DIR/ASDF_DATA_DIR absolute paths ([#1225](https://github.com/jeffersonsimaogoncalves/asdf/issues/1225)) ([86537d2](https://github.com/jeffersonsimaogoncalves/asdf/commit/86537d2a6d6173daa51f5ef0056de7bc26ef14cb))
* button for adding new translations ([#876](https://github.com/jeffersonsimaogoncalves/asdf/issues/876)) ([07d4ae5](https://github.com/jeffersonsimaogoncalves/asdf/commit/07d4ae5aeb0a6ad06527906926e8f8df9763eca0))
* clarify behavior of `bin/parse-legacy-file` ([#1424](https://github.com/jeffersonsimaogoncalves/asdf/issues/1424)) ([1b62f4a](https://github.com/jeffersonsimaogoncalves/asdf/commit/1b62f4a6389f9275c7273524cbaa4bc28a718c27))
* clarify community projects are not asdf core team ([#1407](https://github.com/jeffersonsimaogoncalves/asdf/issues/1407)) ([6728404](https://github.com/jeffersonsimaogoncalves/asdf/commit/6728404450bdbd05c7648104229939832face32a))
* Clarify shim creation for writing plugins ([ae87dca](https://github.com/jeffersonsimaogoncalves/asdf/commit/ae87dca99ffe0636c2ca385d96b616251a14721a))
* clarify usage of ASDF_DEFAULT_TOOL_VERSIONS_FILENAME ([#912](https://github.com/jeffersonsimaogoncalves/asdf/issues/912)) ([b60c08a](https://github.com/jeffersonsimaogoncalves/asdf/commit/b60c08acb2d7b39159eae7dfa2622289537a5304))
* community section w projects ([#1390](https://github.com/jeffersonsimaogoncalves/asdf/issues/1390)) ([33bc2e0](https://github.com/jeffersonsimaogoncalves/asdf/commit/33bc2e0738742985d6b20d6a10dee7f7f5f8f3dc))
* correct tag in getting-started.md ([#1151](https://github.com/jeffersonsimaogoncalves/asdf/issues/1151)) ([853eede](https://github.com/jeffersonsimaogoncalves/asdf/commit/853eede94e849aa122720cfca385909008e15691))
* describe asdf_updates_disabled file purpose ([#1013](https://github.com/jeffersonsimaogoncalves/asdf/issues/1013)) ([060462f](https://github.com/jeffersonsimaogoncalves/asdf/commit/060462fe4684810b18f88169460086e005d55e5b))
* describe using the system version ([#925](https://github.com/jeffersonsimaogoncalves/asdf/issues/925)) ([ad6b86f](https://github.com/jeffersonsimaogoncalves/asdf/commit/ad6b86f428b5690983bd2cc0ab876fca9f50678e))
* Document the latest-stable callback plugin creation docs ([#1132](https://github.com/jeffersonsimaogoncalves/asdf/issues/1132)) ([6bb07b6](https://github.com/jeffersonsimaogoncalves/asdf/commit/6bb07b6d3688e171b1ee500a0b5ada68d855b5cf)), closes [#1110](https://github.com/jeffersonsimaogoncalves/asdf/issues/1110)
* explain ASDF_DIR ([#855](https://github.com/jeffersonsimaogoncalves/asdf/issues/855)) ([f4acfa7](https://github.com/jeffersonsimaogoncalves/asdf/commit/f4acfa7d02855e65577ced33933593edda047aa1))
* explain plugin repo sync details ([#965](https://github.com/jeffersonsimaogoncalves/asdf/issues/965)) ([eeab519](https://github.com/jeffersonsimaogoncalves/asdf/commit/eeab51965c91d46de9597b9f0f3e83b3834a109c))
* fish symlink completions rather than copying ([#860](https://github.com/jeffersonsimaogoncalves/asdf/issues/860)) ([55f43e3](https://github.com/jeffersonsimaogoncalves/asdf/commit/55f43e35467341a0fb706d12092ec3ba2414a957))
* fix `ASDF_${LANG}_VERSION` usage ([#1528](https://github.com/jeffersonsimaogoncalves/asdf/issues/1528)) ([63f422b](https://github.com/jeffersonsimaogoncalves/asdf/commit/63f422b4c7afcf53ef72002e39967eb9ca2da2a9))
* fix brew upgrade from latest commit on master command ([#1052](https://github.com/jeffersonsimaogoncalves/asdf/issues/1052)) ([cb79c69](https://github.com/jeffersonsimaogoncalves/asdf/commit/cb79c692df9a2f2d3d3e89f94ba2ac847ee7dc02))
* fix broken link ([#1401](https://github.com/jeffersonsimaogoncalves/asdf/issues/1401)) ([aa32308](https://github.com/jeffersonsimaogoncalves/asdf/commit/aa323086e842007ac37252d899ab063eb45975a8))
* fix bug report info instructions ([#1107](https://github.com/jeffersonsimaogoncalves/asdf/issues/1107)) ([ffb188e](https://github.com/jeffersonsimaogoncalves/asdf/commit/ffb188ed1ce915180c1e2fc5ca383105938e0437))
* fix GitHub typo ([#847](https://github.com/jeffersonsimaogoncalves/asdf/issues/847)) ([bdace81](https://github.com/jeffersonsimaogoncalves/asdf/commit/bdace81ae998ceb72e230e16da107caa78ac0d5d))
* Fix help text for 'asdf global' ([#1150](https://github.com/jeffersonsimaogoncalves/asdf/issues/1150)) ([5f287ef](https://github.com/jeffersonsimaogoncalves/asdf/commit/5f287efddce7c6326b0c3b559d9866674c5b3546))
* fix Nushell-Homebrew setup instructions ([#1495](https://github.com/jeffersonsimaogoncalves/asdf/issues/1495)) ([49e541a](https://github.com/jeffersonsimaogoncalves/asdf/commit/49e541a29ff7a2f35917a4544a8b9adbc02bb1b4))
* fix some pt-br spelling ([#1640](https://github.com/jeffersonsimaogoncalves/asdf/issues/1640)) ([0c7c41a](https://github.com/jeffersonsimaogoncalves/asdf/commit/0c7c41ab44d3a42a9e57e3d20a646569c2eacfdc))
* fix spelling mistake ([#1072](https://github.com/jeffersonsimaogoncalves/asdf/issues/1072)) ([d566a36](https://github.com/jeffersonsimaogoncalves/asdf/commit/d566a36433b494bcfccdc7d5203886b6f559428e))
* fix typo "node version" filename ([#1679](https://github.com/jeffersonsimaogoncalves/asdf/issues/1679)) ([fad23bc](https://github.com/jeffersonsimaogoncalves/asdf/commit/fad23bc9f4d38747f28d6708ab01689749030063))
* fix typo ([#1670](https://github.com/jeffersonsimaogoncalves/asdf/issues/1670)) ([5737fa3](https://github.com/jeffersonsimaogoncalves/asdf/commit/5737fa316eab01c4033565eacf678222cd861f8d))
* fix typo in home page ([#1017](https://github.com/jeffersonsimaogoncalves/asdf/issues/1017)) ([60d1863](https://github.com/jeffersonsimaogoncalves/asdf/commit/60d1863275555bbac6e80297bb241e85ba45ae1f))
* Fix typos in introduction.md ([#1025](https://github.com/jeffersonsimaogoncalves/asdf/issues/1025)) ([6966b2b](https://github.com/jeffersonsimaogoncalves/asdf/commit/6966b2b91e0eaed575b89bdde468a26a49e72072))
* fix typos in plugins-create page ([#1394](https://github.com/jeffersonsimaogoncalves/asdf/issues/1394)) ([808088e](https://github.com/jeffersonsimaogoncalves/asdf/commit/808088efeccd50edc3f5016f3b873f8ff5227d64))
* fix uninstall instructions for Fish Shell ([#1547](https://github.com/jeffersonsimaogoncalves/asdf/issues/1547)) ([a1e858d](https://github.com/jeffersonsimaogoncalves/asdf/commit/a1e858d2542691adabf9b066add86f16e759a90c))
* further notes on disabling plugin repo ([#1282](https://github.com/jeffersonsimaogoncalves/asdf/issues/1282)) ([624aede](https://github.com/jeffersonsimaogoncalves/asdf/commit/624aede7f3480cd6a8817d5a73b72227e87fa668))
* getting started translated pt-br ([#1019](https://github.com/jeffersonsimaogoncalves/asdf/issues/1019)) ([ba04906](https://github.com/jeffersonsimaogoncalves/asdf/commit/ba04906fddd46fb9e38e9674ee9036fa2347b0dc))
* github dicsussions link ([05a7f15](https://github.com/jeffersonsimaogoncalves/asdf/commit/05a7f15dca7a71138339ae1bd5d04590c680ba27))
* homebrew autoremove after asdf uninstall ([#973](https://github.com/jeffersonsimaogoncalves/asdf/issues/973)) ([f94e314](https://github.com/jeffersonsimaogoncalves/asdf/commit/f94e3145ad00197f7d4f40e16510025ffc9659e6))
* Improve `.asdfrc` plugin hook docuentation ([#1661](https://github.com/jeffersonsimaogoncalves/asdf/issues/1661)) ([8fbf9a3](https://github.com/jeffersonsimaogoncalves/asdf/commit/8fbf9a396bd4a5b71ec7cf215d12040fb5365d6a))
* improve introduction and lift dependencies higher ([#740](https://github.com/jeffersonsimaogoncalves/asdf/issues/740)) ([45fffa9](https://github.com/jeffersonsimaogoncalves/asdf/commit/45fffa9ce3c09d317f3ccef2ed0415e56bc550eb))
* improve promotion of git install method ([#1388](https://github.com/jeffersonsimaogoncalves/asdf/issues/1388)) ([d80d74c](https://github.com/jeffersonsimaogoncalves/asdf/commit/d80d74ca6947fc6dcae1c93f2ac107f21c0cc7f2))
* Improve wording of env vars section ([#1514](https://github.com/jeffersonsimaogoncalves/asdf/issues/1514)) ([ec3eb2d](https://github.com/jeffersonsimaogoncalves/asdf/commit/ec3eb2d64f0531be86d10e1202a92f6b7820e294))
* improve zsh completion directions for macOS,ZSH,Homebrew ([#843](https://github.com/jeffersonsimaogoncalves/asdf/issues/843)) ([954a5db](https://github.com/jeffersonsimaogoncalves/asdf/commit/954a5db19df18eab39f4509d20f9dee66916befc))
* instruct global ignore file policy ([#1278](https://github.com/jeffersonsimaogoncalves/asdf/issues/1278)) ([27fb691](https://github.com/jeffersonsimaogoncalves/asdf/commit/27fb6918dee8445940267252c60c55fc333523b6))
* link to Homebrew common issues from documentation site ([#795](https://github.com/jeffersonsimaogoncalves/asdf/issues/795)) ([96b87f4](https://github.com/jeffersonsimaogoncalves/asdf/commit/96b87f4c961b28ba1f16ed7273da2e2babc098cf))
* link to our community and place(s) for q&a ([#775](https://github.com/jeffersonsimaogoncalves/asdf/issues/775)) ([cc929d2](https://github.com/jeffersonsimaogoncalves/asdf/commit/cc929d2fdf8f7109c9e59d75a6cdd3b9a95945ea))
* list asdf-nodejs deps for enterprise linux in guide ([#1486](https://github.com/jeffersonsimaogoncalves/asdf/issues/1486)) ([3cb0bc3](https://github.com/jeffersonsimaogoncalves/asdf/commit/3cb0bc31d565b2d0a5ddb2b10adfc4b448719c24))
* manually update version to 0.10.2 ([#1294](https://github.com/jeffersonsimaogoncalves/asdf/issues/1294)) ([5733bc2](https://github.com/jeffersonsimaogoncalves/asdf/commit/5733bc2fc4c45105d2fd62747e133873ae25e084))
* Mention comments for `.tool-versions` files ([#1092](https://github.com/jeffersonsimaogoncalves/asdf/issues/1092)) ([ca77d42](https://github.com/jeffersonsimaogoncalves/asdf/commit/ca77d4275869f0c27e64fb23bcfe9ae21a08dc3d)), closes [#1091](https://github.com/jeffersonsimaogoncalves/asdf/issues/1091)
* migrate to VitePress from VuePress ([#1578](https://github.com/jeffersonsimaogoncalves/asdf/issues/1578)) ([5133819](https://github.com/jeffersonsimaogoncalves/asdf/commit/5133819a77aaa393def347bfecb1c442ece4c7f8))
* note about unsolicited formatting pull requests ([#848](https://github.com/jeffersonsimaogoncalves/asdf/issues/848)) ([0eb377c](https://github.com/jeffersonsimaogoncalves/asdf/commit/0eb377cc7aeab02c42ddd194f481139f9192a3f5))
* print docs and github URLs in help cmd ([b65fbf9](https://github.com/jeffersonsimaogoncalves/asdf/commit/b65fbf98a70f52560b219de14105087b1b91f510))
* Properly quote variables in instructions ([#1432](https://github.com/jeffersonsimaogoncalves/asdf/issues/1432)) ([fc5db6d](https://github.com/jeffersonsimaogoncalves/asdf/commit/fc5db6d596ba745707183b28de33f39556fabd1d))
* pt-br translation migration ([#1007](https://github.com/jeffersonsimaogoncalves/asdf/issues/1007)) ([b362632](https://github.com/jeffersonsimaogoncalves/asdf/commit/b3626324db5138acd401e46da24effd1ecec7ffb))
* remove github discussion reference ([#1175](https://github.com/jeffersonsimaogoncalves/asdf/issues/1175)) ([7493f40](https://github.com/jeffersonsimaogoncalves/asdf/commit/7493f4099c844e40af72d7f05635d7991a463d1a))
* remove github discussions link ([#1171](https://github.com/jeffersonsimaogoncalves/asdf/issues/1171)) ([6996b63](https://github.com/jeffersonsimaogoncalves/asdf/commit/6996b630387220a74408cd38f252e195a358776f))
* Remove stray `a` ([#1053](https://github.com/jeffersonsimaogoncalves/asdf/issues/1053)) ([afe89a5](https://github.com/jeffersonsimaogoncalves/asdf/commit/afe89a5718282f32a8b7fc7c03bee6137eed4e22))
* remove text from plugin create doc that says utils.bash functions are available ([#1247](https://github.com/jeffersonsimaogoncalves/asdf/issues/1247)) ([950e417](https://github.com/jeffersonsimaogoncalves/asdf/commit/950e4172719cde107e9dfc2c8c38d88ee0d000ca))
* remove the usage of sudo ([#1116](https://github.com/jeffersonsimaogoncalves/asdf/issues/1116)) ([8e6f0cc](https://github.com/jeffersonsimaogoncalves/asdf/commit/8e6f0cc37026c3530db8f08be282479a945d9f15))
* rename install guide w core & usage separation ([#1016](https://github.com/jeffersonsimaogoncalves/asdf/issues/1016)) ([fe56504](https://github.com/jeffersonsimaogoncalves/asdf/commit/fe565043342d28a5b7a61b1cabe81f9ef2f3c36b))
* rewrite using Vuepress ([#1000](https://github.com/jeffersonsimaogoncalves/asdf/issues/1000)) ([c9df811](https://github.com/jeffersonsimaogoncalves/asdf/commit/c9df8119970af011689edb08a73dc9f750be5092))
* rm duplicate text from asdf remove section ([#962](https://github.com/jeffersonsimaogoncalves/asdf/issues/962)) ([7ad3011](https://github.com/jeffersonsimaogoncalves/asdf/commit/7ad301162f4a58e19ea460cde17236b1ae765aa9))
* synchronize help text ([#742](https://github.com/jeffersonsimaogoncalves/asdf/issues/742)) ([605be10](https://github.com/jeffersonsimaogoncalves/asdf/commit/605be10046698ce2c91b1417e463579edb123b96))
* translations for pt-br ([#970](https://github.com/jeffersonsimaogoncalves/asdf/issues/970)) ([7cc3b87](https://github.com/jeffersonsimaogoncalves/asdf/commit/7cc3b875285452622ab0d85bb460cc611ba21da9))
* update bats link to bats-core org ([7deedad](https://github.com/jeffersonsimaogoncalves/asdf/commit/7deedad30427663cdf8d8c259566f5b47ca24d94))
* update format of example asdf commands ([#1470](https://github.com/jeffersonsimaogoncalves/asdf/issues/1470)) ([e906a91](https://github.com/jeffersonsimaogoncalves/asdf/commit/e906a91bbda47f47d09cb0af4f441337a529e93c))
* update git/bash install docs to use 0.9.1 ([#1140](https://github.com/jeffersonsimaogoncalves/asdf/issues/1140)) ([d52cd52](https://github.com/jeffersonsimaogoncalves/asdf/commit/d52cd5200478754716a202d5408d1f8fa85bfcb5))
* update pt-br homepage translations ([#1063](https://github.com/jeffersonsimaogoncalves/asdf/issues/1063)) ([245f88d](https://github.com/jeffersonsimaogoncalves/asdf/commit/245f88db0fe02e5ac582deab8a045d3a366c4be8))
* Update the link to the Plugin Shortname Index ([#1026](https://github.com/jeffersonsimaogoncalves/asdf/issues/1026)) ([95f2cdf](https://github.com/jeffersonsimaogoncalves/asdf/commit/95f2cdf72c074d72efdb293ae238ef11dbd8a773))
* update version ([#1214](https://github.com/jeffersonsimaogoncalves/asdf/issues/1214)) ([713bceb](https://github.com/jeffersonsimaogoncalves/asdf/commit/713bcebaa7884f815c45aac5d5495526b9a4fc43))
* Update zh-hans instructions for elvish v0.18.0 ([#1274](https://github.com/jeffersonsimaogoncalves/asdf/issues/1274)) ([9dc61a5](https://github.com/jeffersonsimaogoncalves/asdf/commit/9dc61a52636b6bee9bf7a132fb6e727e7121c22d))
* updates portuguese translation in the documentation ([#1210](https://github.com/jeffersonsimaogoncalves/asdf/issues/1210)) ([068432f](https://github.com/jeffersonsimaogoncalves/asdf/commit/068432f1148d7b2e94d3d949afbb7a167b4df12a))
* upgrade deps & fix breaking changes ([446f8c5](https://github.com/jeffersonsimaogoncalves/asdf/commit/446f8c5f947cc5f30f03403c2cfe4dec71b0a494))
* use list so rendering isn't merged ([#1009](https://github.com/jeffersonsimaogoncalves/asdf/issues/1009)) ([58ab833](https://github.com/jeffersonsimaogoncalves/asdf/commit/58ab8337145871d269f4be9dc61500462257cd30))
* verbose plugin create command details ([#1445](https://github.com/jeffersonsimaogoncalves/asdf/issues/1445)) ([8108ca6](https://github.com/jeffersonsimaogoncalves/asdf/commit/8108ca6d7e5f34b9b9723f945a9c4b137f2e10ef))
* **website:** add simplifed chinese ([#1166](https://github.com/jeffersonsimaogoncalves/asdf/issues/1166)) ([06d469e](https://github.com/jeffersonsimaogoncalves/asdf/commit/06d469ec4abc612640c624ae4931fc312f91dc34))
* **website:** Specify units for duration ([#1368](https://github.com/jeffersonsimaogoncalves/asdf/issues/1368)) ([16070cf](https://github.com/jeffersonsimaogoncalves/asdf/commit/16070cf6a6ec2456c16755337f3f6c13e08f0386))

## [0.14.0](https://github.com/asdf-vm/asdf/compare/v0.13.1...v0.14.0) (2024-01-19)


### ⚠ BREAKING CHANGES

* Enable `pipefail` ([#1608](https://github.com/asdf-vm/asdf/issues/1608))

### Patches

* `plugin test` git-ref to use plugin repo default branch ([#1694](https://github.com/asdf-vm/asdf/issues/1694)) ([6d8cf9d](https://github.com/asdf-vm/asdf/commit/6d8cf9d44b3d985ac59f1eac827c5275392f90fd))
* avoid mention of `ASDF_NU_DIR` ([#1660](https://github.com/asdf-vm/asdf/issues/1660)) ([dfea89c](https://github.com/asdf-vm/asdf/commit/dfea89ccc703f3ef5a87c4b85726456d70167d89))
* Enable `pipefail` ([#1608](https://github.com/asdf-vm/asdf/issues/1608)) ([4085e55](https://github.com/asdf-vm/asdf/commit/4085e5542bac824ea124610ad247c2f90d1b8d93))
* **fish:** use PATH instead of fish_user_paths ([#1709](https://github.com/asdf-vm/asdf/issues/1709)) ([5327697](https://github.com/asdf-vm/asdf/commit/53276973f7c99695cd9a28b04c010b006d7f60ca))
* list `asdf version` command under help.txt UTILS section ([#1673](https://github.com/asdf-vm/asdf/issues/1673)) ([240a5fb](https://github.com/asdf-vm/asdf/commit/240a5fbdea1de055672d02f83db1de990ea2bf83))
* **nushell:** Use `def --env` instead of `def-env` ([#1681](https://github.com/asdf-vm/asdf/issues/1681)) ([3b8f400](https://github.com/asdf-vm/asdf/commit/3b8f400c3e628851286bfebd8da5bc7ab45cd676))
* plugin extension commands to not require `bin/` directory ([#1643](https://github.com/asdf-vm/asdf/issues/1643)) ([61420ad](https://github.com/asdf-vm/asdf/commit/61420ad90829b2c9bf1ca16681a2eb652adcc755))
* use universal scope for fish_user_paths ([#1699](https://github.com/asdf-vm/asdf/issues/1699)) ([0ffee72](https://github.com/asdf-vm/asdf/commit/0ffee7224bc00a917ceaea689c6268fd1f03bd62))
* warn if plugin does not support keeping downloads if configured ([#1644](https://github.com/asdf-vm/asdf/issues/1644)) ([19515ed](https://github.com/asdf-vm/asdf/commit/19515eda3b91167b0d76c35ffc4402de688007e0))


### Documentation

* add Japanese translation ([#1667](https://github.com/asdf-vm/asdf/issues/1667)) ([2b9bec7](https://github.com/asdf-vm/asdf/commit/2b9bec7710cd18e51a01652e1f58cc309baf2fd7))
* fix some pt-br spelling ([#1640](https://github.com/asdf-vm/asdf/issues/1640)) ([0c7c41a](https://github.com/asdf-vm/asdf/commit/0c7c41ab44d3a42a9e57e3d20a646569c2eacfdc))
* fix typo "node version" filename ([#1679](https://github.com/asdf-vm/asdf/issues/1679)) ([fad23bc](https://github.com/asdf-vm/asdf/commit/fad23bc9f4d38747f28d6708ab01689749030063))
* fix typo ([#1670](https://github.com/asdf-vm/asdf/issues/1670)) ([5737fa3](https://github.com/asdf-vm/asdf/commit/5737fa316eab01c4033565eacf678222cd861f8d))
* Improve `.asdfrc` plugin hook docuentation ([#1661](https://github.com/asdf-vm/asdf/issues/1661)) ([8fbf9a3](https://github.com/asdf-vm/asdf/commit/8fbf9a396bd4a5b71ec7cf215d12040fb5365d6a))

## [0.13.1](https://github.com/asdf-vm/asdf/compare/v0.13.0...v0.13.1) (2023-09-12)


### Patches

* **fish:** use builtin realpath over system one ([#1637](https://github.com/asdf-vm/asdf/issues/1637)) ([5ac3032](https://github.com/asdf-vm/asdf/commit/5ac30328a7bbd1a8d974bb5fb1f14d8bd2d1e03f))

## [0.13.0](https://github.com/asdf-vm/asdf/compare/v0.12.0...v0.13.0) (2023-09-11)


### ⚠ BREAKING CHANGES

* `plugin list` exit code 0 when no plugins are installed ([#1597](https://github.com/asdf-vm/asdf/issues/1597))
* 0 exit code for success when adding an existing plugin ([#1598](https://github.com/asdf-vm/asdf/issues/1598))
* **fish:** don't resolve symlinks for ASDF_DIR ([#1583](https://github.com/asdf-vm/asdf/issues/1583))

### Features

* add plugin location when update the plugin ([#1602](https://github.com/asdf-vm/asdf/issues/1602)) ([36c7024](https://github.com/asdf-vm/asdf/commit/36c7024baa4b829b3629b4e0430157266d354158))


### Patches

* `plugin list` exit code 0 when no plugins are installed ([#1597](https://github.com/asdf-vm/asdf/issues/1597)) ([a029c00](https://github.com/asdf-vm/asdf/commit/a029c007503f2eec911a0c836e8622bb38c5e065))
* 0 exit code for success when adding an existing plugin ([#1598](https://github.com/asdf-vm/asdf/issues/1598)) ([4dd1904](https://github.com/asdf-vm/asdf/commit/4dd190466a9855dac300ce691e66a7629ef37b82))
* **fish:** don't resolve symlinks for ASDF_DIR ([#1583](https://github.com/asdf-vm/asdf/issues/1583)) ([d1a563d](https://github.com/asdf-vm/asdf/commit/d1a563dcc0107d5c631f73b114044898b5cadcf9))
* improve lint and test scripts ([#1607](https://github.com/asdf-vm/asdf/issues/1607)) ([b320803](https://github.com/asdf-vm/asdf/commit/b3208031204aabad6e85346155baacab16862da8))
* Make asdf.fish compatible with Fish 3.1.2 ([#1590](https://github.com/asdf-vm/asdf/issues/1590)) ([e83d71e](https://github.com/asdf-vm/asdf/commit/e83d71e43f525453994eb4cfda8ad66f8b914529))
* no longer write temporary files to home directory ([#1592](https://github.com/asdf-vm/asdf/issues/1592)) ([624604a](https://github.com/asdf-vm/asdf/commit/624604a8626dc6006d78121d4cf0f6c920449c56))
* nushell language syntax update ([#1624](https://github.com/asdf-vm/asdf/issues/1624)) ([0ddab5d](https://github.com/asdf-vm/asdf/commit/0ddab5dfaf28ad97c84a6aa56b08ccc212e07b4d))
* set default shell version values on POSIX entrypoint ([#1594](https://github.com/asdf-vm/asdf/issues/1594)) ([4d5f22d](https://github.com/asdf-vm/asdf/commit/4d5f22ddb89ce53e24b1ab1cbefce3be95238a19))
* warn when any ./lib/commands are marked as executable ([#1593](https://github.com/asdf-vm/asdf/issues/1593)) ([2043a09](https://github.com/asdf-vm/asdf/commit/2043a09574bdfdfcf2daf2fdb3bff2d9d2dad64e))


### Documentation

* `bin/latest-stable` empty query is set to default ([#1591](https://github.com/asdf-vm/asdf/issues/1591)) ([299dc97](https://github.com/asdf-vm/asdf/commit/299dc97a5b63d8afe1a0bba03e32dddfb7fb8e51))
* migrate to VitePress from VuePress ([#1578](https://github.com/asdf-vm/asdf/issues/1578)) ([5133819](https://github.com/asdf-vm/asdf/commit/5133819a77aaa393def347bfecb1c442ece4c7f8))
* upgrade deps & fix breaking changes ([446f8c5](https://github.com/asdf-vm/asdf/commit/446f8c5f947cc5f30f03403c2cfe4dec71b0a494))

## [0.12.0](https://github.com/asdf-vm/asdf/compare/v0.11.3...v0.12.0) (2023-06-09)


### ⚠ BREAKING CHANGES

* Remove files containing only `asdf` wrapper functions ([#1525](https://github.com/asdf-vm/asdf/issues/1525))
* align Fish entrypoint behaviour with other shells ([#1524](https://github.com/asdf-vm/asdf/issues/1524))
* do not remove items from PATH in POSIX entrypoint ([#1521](https://github.com/asdf-vm/asdf/issues/1521))
* rework POSIX entrypoint for greater shell support ([#1480](https://github.com/asdf-vm/asdf/issues/1480))

### Features

* Support configurable `ASDF_CONCURRENCY` ([#1532](https://github.com/asdf-vm/asdf/issues/1532)) ([684f4f0](https://github.com/asdf-vm/asdf/commit/684f4f058f24cc418f77825a59a22bacd16a9bee))
* Support PowerShell Core ([#1522](https://github.com/asdf-vm/asdf/issues/1522)) ([213aa22](https://github.com/asdf-vm/asdf/commit/213aa22378cf0ecf5b1924f1bfc4fee43338255a))


### Documentation

* Add Nushell installation instructions for all languages ([#1519](https://github.com/asdf-vm/asdf/issues/1519)) ([6a6c539](https://github.com/asdf-vm/asdf/commit/6a6c539f4a21fdb863fd938edd94ac3bdced349b))
* fix `ASDF_${LANG}_VERSION` usage ([#1528](https://github.com/asdf-vm/asdf/issues/1528)) ([63f422b](https://github.com/asdf-vm/asdf/commit/63f422b4c7afcf53ef72002e39967eb9ca2da2a9))
* fix Nushell-Homebrew setup instructions ([#1495](https://github.com/asdf-vm/asdf/issues/1495)) ([49e541a](https://github.com/asdf-vm/asdf/commit/49e541a29ff7a2f35917a4544a8b9adbc02bb1b4))
* fix uninstall instructions for Fish Shell ([#1547](https://github.com/asdf-vm/asdf/issues/1547)) ([a1e858d](https://github.com/asdf-vm/asdf/commit/a1e858d2542691adabf9b066add86f16e759a90c))
* Improve wording of env vars section ([#1514](https://github.com/asdf-vm/asdf/issues/1514)) ([ec3eb2d](https://github.com/asdf-vm/asdf/commit/ec3eb2d64f0531be86d10e1202a92f6b7820e294))
* verbose plugin create command details ([#1445](https://github.com/asdf-vm/asdf/issues/1445)) ([8108ca6](https://github.com/asdf-vm/asdf/commit/8108ca6d7e5f34b9b9723f945a9c4b137f2e10ef))


### Patches

* `asdf info` show BASH_VERSION & all asdf envs ([#1513](https://github.com/asdf-vm/asdf/issues/1513)) ([a1b5eee](https://github.com/asdf-vm/asdf/commit/a1b5eeec1caf605c0e4c80748703b9e227b57aeb))
* align Fish entrypoint behaviour with other shells ([#1524](https://github.com/asdf-vm/asdf/issues/1524)) ([8919f40](https://github.com/asdf-vm/asdf/commit/8919f4009ea233c32298911b28ceb879e2dbc675))
* assign default values to all internal variables ([#1518](https://github.com/asdf-vm/asdf/issues/1518)) ([86477ee](https://github.com/asdf-vm/asdf/commit/86477ee8dea14ab63faf7132133304855a647fde))
* Better handling with paths that include spaces ([#1485](https://github.com/asdf-vm/asdf/issues/1485)) ([bbcbddc](https://github.com/asdf-vm/asdf/commit/bbcbddcdd4ffa0f49c3772b66d87331420fa5727))
* create install directory with `mkdir -p` ([#1563](https://github.com/asdf-vm/asdf/issues/1563)) ([d6185a2](https://github.com/asdf-vm/asdf/commit/d6185a21207e0ac45e69499883dad5e2b585c1b6))
* do not remove items from PATH in POSIX entrypoint ([#1521](https://github.com/asdf-vm/asdf/issues/1521)) ([b6d0ca2](https://github.com/asdf-vm/asdf/commit/b6d0ca28d5fd2b63c7da67b127e6c2a0e01b2670))
* enforce consistent shell redirection format ([#1533](https://github.com/asdf-vm/asdf/issues/1533)) ([1bc205e](https://github.com/asdf-vm/asdf/commit/1bc205e8aa61287c766c673acb8f0d4f9c6ee249))
* improve readability of the non-set `nullglob` guard ([#1545](https://github.com/asdf-vm/asdf/issues/1545)) ([f273612](https://github.com/asdf-vm/asdf/commit/f273612155188f62cf8daf584d5581cd4214daf4))
* Introduce `ASDF_FORCE_PREPEND` variable on POSIX entrypoint ([#1560](https://github.com/asdf-vm/asdf/issues/1560)) ([5b7d0fe](https://github.com/asdf-vm/asdf/commit/5b7d0fea0a10681d89dd7bf4010e0a39e6696841))
* lint & style errors in `bin/asdf` ([#1516](https://github.com/asdf-vm/asdf/issues/1516)) ([13c0e2f](https://github.com/asdf-vm/asdf/commit/13c0e2fab0e9ad4dccf72b6f5586fb32458b8709))
* Nushell plugin list --urls ([#1507](https://github.com/asdf-vm/asdf/issues/1507)) ([9363fb2](https://github.com/asdf-vm/asdf/commit/9363fb2f72e7fa08d3580b22d465af48a7d37031))
* nushell plugin list all ([#1501](https://github.com/asdf-vm/asdf/issues/1501)) ([#1502](https://github.com/asdf-vm/asdf/issues/1502)) ([c5b8b3c](https://github.com/asdf-vm/asdf/commit/c5b8b3c128b48e1531f6d03d2083435f413a4738))
* Remove files containing only `asdf` wrapper functions ([#1525](https://github.com/asdf-vm/asdf/issues/1525)) ([00fee78](https://github.com/asdf-vm/asdf/commit/00fee78423de0e399f5705bb483e599e39b707c9))
* remove leading asterick in Fish completion ([#1543](https://github.com/asdf-vm/asdf/issues/1543)) ([198ced5](https://github.com/asdf-vm/asdf/commit/198ced50327b20b136cb6ec165610d37334a2962))
* rename internal function `asdf_tool_versions_filename` ([#1544](https://github.com/asdf-vm/asdf/issues/1544)) ([b36ec73](https://github.com/asdf-vm/asdf/commit/b36ec7338654abc3773314147540dfa8297b48b8))
* rename internal plugin repository functions ([#1537](https://github.com/asdf-vm/asdf/issues/1537)) ([5367f1f](https://github.com/asdf-vm/asdf/commit/5367f1f09079070c7b47551dc453c686991564a0))
* rework POSIX entrypoint for greater shell support ([#1480](https://github.com/asdf-vm/asdf/issues/1480)) ([3379af8](https://github.com/asdf-vm/asdf/commit/3379af845ed2e281703bc0e9e4f388a7845edc2a))
* support `asdf shim-versions` completions in fish & bash ([#1554](https://github.com/asdf-vm/asdf/issues/1554)) ([99623d7](https://github.com/asdf-vm/asdf/commit/99623d7eac0fe17e330a950c71b7ba378f656b2c))
* Typo in POSIX entrypoint ([#1562](https://github.com/asdf-vm/asdf/issues/1562)) ([6b2ebf5](https://github.com/asdf-vm/asdf/commit/6b2ebf575ff98d3970b518de04238d30804a40d1))
* warn if `.tool-versions` or asdfrc contains carriage returns ([#1561](https://github.com/asdf-vm/asdf/issues/1561)) ([097f773](https://github.com/asdf-vm/asdf/commit/097f7733d67aaf8d0dca1c793407babbdf6f8394))

## [0.11.3](https://github.com/asdf-vm/asdf/compare/v0.11.2...v0.11.3) (2023-03-16)


### Bug Fixes

* Prepend asdf directories to the PATH in Nushell ([#1496](https://github.com/asdf-vm/asdf/issues/1496)) ([745950c](https://github.com/asdf-vm/asdf/commit/745950c3589c4047a5b94b34bc9cf06dff5dc3c7))

## [0.11.2](https://github.com/asdf-vm/asdf/compare/v0.11.1...v0.11.2) (2023-02-21)


### Bug Fixes

* bash completion for latest command ([#1472](https://github.com/asdf-vm/asdf/issues/1472)) ([2606a87](https://github.com/asdf-vm/asdf/commit/2606a875eba8d74be56c78c97a76f3eb92c8253d))
* enforce & use consistent function definitions ([#1464](https://github.com/asdf-vm/asdf/issues/1464)) ([e0fd7a7](https://github.com/asdf-vm/asdf/commit/e0fd7a7be8bbbbf0f3cb6dc38cea3b62963eb0c9))
* nushell PATH conversion to list before filter ([#1471](https://github.com/asdf-vm/asdf/issues/1471)) ([cd0e12b](https://github.com/asdf-vm/asdf/commit/cd0e12b3ee4090242b884ac4aea0f65784e52946))
* Remove `==` inside `[` ([#1421](https://github.com/asdf-vm/asdf/issues/1421)) ([d81b81f](https://github.com/asdf-vm/asdf/commit/d81b81f9de2dc5961624464df04cef7cafae588c))
* support nushell v0.75.0 ([#1481](https://github.com/asdf-vm/asdf/issues/1481)) ([dd8d399](https://github.com/asdf-vm/asdf/commit/dd8d3999d41cfdd8518a9ea478929b5291b8838c))

## [0.11.1](https://github.com/asdf-vm/asdf/compare/v0.11.0...v0.11.1) (2023-01-13)


### Bug Fixes

* `reshim` did not rewrite executable path ([#1311](https://github.com/asdf-vm/asdf/issues/1311)) ([5af7625](https://github.com/asdf-vm/asdf/commit/5af76257693d1f560b9c27c9cdcc6f5a5a33c4d5))
* Add test for nushell integration and fix some bugs ([#1415](https://github.com/asdf-vm/asdf/issues/1415)) ([60d4494](https://github.com/asdf-vm/asdf/commit/60d4494d5d21f9d7bdd0778ca962ddb44280aff7))
* Allow `path:` versions to use `~` ([#1403](https://github.com/asdf-vm/asdf/issues/1403)) ([670c96d](https://github.com/asdf-vm/asdf/commit/670c96d1a6d6d2c19ff63ce2ed14f784c340e9b9))
* Ban use of 'test' ([#1383](https://github.com/asdf-vm/asdf/issues/1383)) ([ec972cb](https://github.com/asdf-vm/asdf/commit/ec972cbdf0acbecf70e3678c055e27866c49341d))
* correct order of checks in conditional for adding a missing newline ([#1418](https://github.com/asdf-vm/asdf/issues/1418)) ([4125d2b](https://github.com/asdf-vm/asdf/commit/4125d2b5560efc646e6048202ceb00fffd0b9eaf)), closes [#1417](https://github.com/asdf-vm/asdf/issues/1417)
* Do not use `pwd` ([dd37b6f](https://github.com/asdf-vm/asdf/commit/dd37b6f0c0ed20d15e3d96b730db82f21c9e2e6f))
* Do not use type not exported on older Python versions ([#1409](https://github.com/asdf-vm/asdf/issues/1409)) ([7460809](https://github.com/asdf-vm/asdf/commit/74608098cdfc70c2d2e85d1f3861500ef668a041))
* force lwrcase plugin name fix capitalization mismatch errs ([#1400](https://github.com/asdf-vm/asdf/issues/1400)) ([196a05b](https://github.com/asdf-vm/asdf/commit/196a05b2dcef48f3a281350734c76ba7bc73fa81))
* lint errors from `scripts/checkstyle.py` ([#1385](https://github.com/asdf-vm/asdf/issues/1385)) ([3492043](https://github.com/asdf-vm/asdf/commit/3492043241e466337c5965a6fe2e089147bc4152))
* mv dev dep from repo root to subdir to avoid clash ([#1408](https://github.com/asdf-vm/asdf/issues/1408)) ([5df70da](https://github.com/asdf-vm/asdf/commit/5df70dadacd66b4150ed47e58c861418c0d1281f))
* Remove unecessary backslashes ([#1384](https://github.com/asdf-vm/asdf/issues/1384)) ([15faf93](https://github.com/asdf-vm/asdf/commit/15faf93a0d3615834e550ea1562fb6b8cee5a205))
* Remove usage of `$(pwd)` in favor of `$PWD` ([f522ab9](https://github.com/asdf-vm/asdf/commit/f522ab98797345d767b239041246dfb4b740423e))

## [0.11.0](https://github.com/asdf-vm/asdf/compare/v0.10.2...v0.11.0) (2022-12-12)


### Features

* **completions:** bash improvements ([#1329](https://github.com/asdf-vm/asdf/issues/1329)) ([7c802c3](https://github.com/asdf-vm/asdf/commit/7c802c3fc9b5dc556993a98e5aaf96650cbb0d5b))
* Disable short-name repository with config value ([#1227](https://github.com/asdf-vm/asdf/issues/1227)) ([18caea3](https://github.com/asdf-vm/asdf/commit/18caea3eb7d989d195cf13b3c9ffc2058d906fc5))
* mark current resolved versions in `asdf list` output ([#762](https://github.com/asdf-vm/asdf/issues/762)) ([5ea6795](https://github.com/asdf-vm/asdf/commit/5ea67953be74cb5fde11240dc40a541c69afc65c))
* support nushell ([#1355](https://github.com/asdf-vm/asdf/issues/1355)) ([274a638](https://github.com/asdf-vm/asdf/commit/274a638e155c08cd0d6dbda1a0d4da02c3466c97))


### Bug Fixes

* add missing "does not add paths to PATH more than once" test for elvish ([#1275](https://github.com/asdf-vm/asdf/issues/1275)) ([3c55167](https://github.com/asdf-vm/asdf/commit/3c55167a6807b48cacaaed18df7bf0db2526ed59))
* append trailing newline to .tool-versions files when missing ([#1310](https://github.com/asdf-vm/asdf/issues/1310)) ([eb7dac3](https://github.com/asdf-vm/asdf/commit/eb7dac3a2b15ad458f55a897d49a377508ea92fe)), closes [#1299](https://github.com/asdf-vm/asdf/issues/1299)
* excludes "milestone" releases in "latest" command ([#1307](https://github.com/asdf-vm/asdf/issues/1307)) ([5334d1d](https://github.com/asdf-vm/asdf/commit/5334d1db3d390c46ed49101528f74483eb6b2987)), closes [#1306](https://github.com/asdf-vm/asdf/issues/1306)
* improve formatting of ballad ([#1367](https://github.com/asdf-vm/asdf/issues/1367)) ([e0c2c31](https://github.com/asdf-vm/asdf/commit/e0c2c31fc3274387efdddebe1450f0662f91a726))
* use ELVISH_VERSION to specify elvish test version ([#1276](https://github.com/asdf-vm/asdf/issues/1276)) ([72c3a23](https://github.com/asdf-vm/asdf/commit/72c3a2377a1afa3027c6f29cb9f3f1a7fbddaa8c))

### [0.10.2](https://www.github.com/asdf-vm/asdf/compare/v0.10.1...v0.10.2) (2022-06-08)


### Bug Fixes

* always use ASDF_DEFAULT_TOOL_VERSIONS_FILENAME for filename when present ([#1238](https://www.github.com/asdf-vm/asdf/issues/1238)) ([711ad99](https://www.github.com/asdf-vm/asdf/commit/711ad991043a1980fa264098f29e78f2ecafd610)), closes [#1082](https://www.github.com/asdf-vm/asdf/issues/1082)
* get invalid ASDF_DATA_DIR when exec asdf shims by non-shell ([#1154](https://www.github.com/asdf-vm/asdf/issues/1154)) ([b9962f7](https://www.github.com/asdf-vm/asdf/commit/b9962f71564ce77cf97772cc100b80f9d77019b1))
* update event trigger for doc-version workflow ([#1232](https://www.github.com/asdf-vm/asdf/issues/1232)) ([0bc8c3a](https://www.github.com/asdf-vm/asdf/commit/0bc8c3ab6895b88c96bff86f5f79575ee80cc718))
* update plugin-add regex to support other languages ([#1241](https://www.github.com/asdf-vm/asdf/issues/1241)) ([92d005d](https://www.github.com/asdf-vm/asdf/commit/92d005dacd2ec434a9d912ab9938b59ab1b7c51f)), closes [#1237](https://www.github.com/asdf-vm/asdf/issues/1237)
* updating references to legacy github.io site ([#1240](https://www.github.com/asdf-vm/asdf/issues/1240)) ([738306b](https://www.github.com/asdf-vm/asdf/commit/738306bc5d1c53a22c06e4d6d3ddb6d511dc5d50))

### [0.10.1](https://www.github.com/asdf-vm/asdf/compare/v0.10.0...v0.10.1) (2022-05-17)


### Bug Fixes

* add asdf to list of banned commands ([#1224](https://www.github.com/asdf-vm/asdf/issues/1224)) ([39909e0](https://www.github.com/asdf-vm/asdf/commit/39909e01af2bbf23fc821de5cec6c5c9661c59bb))
* don't invoke asdf inside asdf commands ([#1208](https://www.github.com/asdf-vm/asdf/issues/1208)) ([27f7ef7](https://www.github.com/asdf-vm/asdf/commit/27f7ef78529649534b8383daa58e4b370b3cbd7f))
* fixing bats ([#1215](https://www.github.com/asdf-vm/asdf/issues/1215)) ([a9caa5b](https://www.github.com/asdf-vm/asdf/commit/a9caa5bdffca5401798fb37e6f34af933b6ce0d2))
* instead /tmp, use TMPDIR if defined ([9113623](https://www.github.com/asdf-vm/asdf/commit/91136234e90b5fe8718338f513fa770c99151d3e))
* make fish shell setup match other shells ([#1209](https://www.github.com/asdf-vm/asdf/issues/1209)) ([6fc4bb8](https://www.github.com/asdf-vm/asdf/commit/6fc4bb8fc650e73152ce326267f89df6865cdd24))
* only iterate over directories in the plugins/ directory ([#1228](https://www.github.com/asdf-vm/asdf/issues/1228)) ([788ccab](https://www.github.com/asdf-vm/asdf/commit/788ccab5971cb828cf25364b0df5ed6f5e9e713d))
* update elvish to 0.18.0 ([5a89563](https://www.github.com/asdf-vm/asdf/commit/5a89563c0a37f244fa3daa46c5100b7711edde1d))

## [0.10.0](https://www.github.com/asdf-vm/asdf/compare/v0.9.0...v0.10.0) (2022-04-14)


### Features

* case-insensitive filtering of unstable versions in `latest` ([#1139](https://www.github.com/asdf-vm/asdf/issues/1139)) ([e61e3d9](https://www.github.com/asdf-vm/asdf/commit/e61e3d9ade0d7bdfb4413184284038c50ba1e09c))
* **latest:** adds the flag --all to the latest command ([#1096](https://www.github.com/asdf-vm/asdf/issues/1096)) ([f85fef5](https://www.github.com/asdf-vm/asdf/commit/f85fef533f249df5a9f58307d288f2f069351e88))
* upgrade elvish to 0.17.0 ([#1159](https://www.github.com/asdf-vm/asdf/issues/1159)) ([824550e](https://www.github.com/asdf-vm/asdf/commit/824550ed2009c7e8c4c84afd7a01197d451c47bf))


### Bug Fixes

* Ban `ls` command ([#1141](https://www.github.com/asdf-vm/asdf/issues/1141)) ([87137e4](https://www.github.com/asdf-vm/asdf/commit/87137e41031f17b30acf12ee35925e689c84e2d8))
* ban grep long flags ([#1117](https://www.github.com/asdf-vm/asdf/issues/1117)) ([6e4c39c](https://www.github.com/asdf-vm/asdf/commit/6e4c39c244a289a54f235cf15a29874fb8885927))
* do not print `find` errors ([#1102](https://www.github.com/asdf-vm/asdf/issues/1102)) ([5992abb](https://www.github.com/asdf-vm/asdf/commit/5992abb09e6f5e0af690bf0e99619386187949db))
* don't generate on error if backup file doesn't exists ([#1057](https://www.github.com/asdf-vm/asdf/issues/1057)) ([288468f](https://www.github.com/asdf-vm/asdf/commit/288468f93f6c5cb4e7cca1173d4ad73154d0d564))
* **elvish:** prepend asdf paths to `$PATH` ([#1174](https://www.github.com/asdf-vm/asdf/issues/1174)) ([682b7a1](https://www.github.com/asdf-vm/asdf/commit/682b7a1d6dc1a35f7f8b0ddbab977e0a3dae2c9c))
* latest --all correctly report plugins as missing ([#1118](https://www.github.com/asdf-vm/asdf/issues/1118)) ([aafe1e5](https://www.github.com/asdf-vm/asdf/commit/aafe1e5304c2d2a026831976c18faa6fb48d25bc))
* local plugin in then clause too ([#1203](https://www.github.com/asdf-vm/asdf/issues/1203)) ([448f750](https://www.github.com/asdf-vm/asdf/commit/448f750891a4366f45d905b112ad20d4be66c496))
* newline after error msg for ASDF_DIR ([#1113](https://www.github.com/asdf-vm/asdf/issues/1113)) ([ac2791e](https://www.github.com/asdf-vm/asdf/commit/ac2791e49f7fcdbeb420415d8ddcb5f17bcf296e))
* Prevent unbound variable error with nounset in asdf.sh ([#1158](https://www.github.com/asdf-vm/asdf/issues/1158)) ([b7dd291](https://www.github.com/asdf-vm/asdf/commit/b7dd291c983af321af20550fa89bf1cfbc888aec))
* remove comments from whole file instead of line by line for performance ([#1198](https://www.github.com/asdf-vm/asdf/issues/1198)) ([de6e22f](https://www.github.com/asdf-vm/asdf/commit/de6e22f909946f7d17047f4aeab41e581546b674))
* shorthand grep options for alpine support ([#1106](https://www.github.com/asdf-vm/asdf/issues/1106)) ([234778a](https://www.github.com/asdf-vm/asdf/commit/234778a397f19c398d2f76a0321fef3273c9a086))

## [0.9.0](https://www.github.com/asdf-vm/asdf/compare/v0.8.1...v0.9.0) (2021-11-18)


### Features

* add post update plugin support ([#1049](https://www.github.com/asdf-vm/asdf/issues/1049)) ([304f72d](https://www.github.com/asdf-vm/asdf/commit/304f72dbb207606fd82c04ee2c73cf11e9e6e0cc))
* asdf latest defer to plugin to determine the latest version ([#938](https://www.github.com/asdf-vm/asdf/issues/938)) ([664d82e](https://www.github.com/asdf-vm/asdf/commit/664d82ed8a734eb30988840829a972f8ddd8e523))
* configurable plugin repo last check time ([#957](https://www.github.com/asdf-vm/asdf/issues/957)) ([1716afa](https://www.github.com/asdf-vm/asdf/commit/1716afa02125aa322d8a688ff4b3e95f2e08b33c))
* display plugin repo refs alongside urls in info cmd ([#1014](https://www.github.com/asdf-vm/asdf/issues/1014)) ([cd0a6a7](https://www.github.com/asdf-vm/asdf/commit/cd0a6a779eb18236fe7bf1f84403e33e636ef1f3))
* Displays a warning when a plugin from the tools-version list does not exist ([#1033](https://www.github.com/asdf-vm/asdf/issues/1033)) ([9430a39](https://www.github.com/asdf-vm/asdf/commit/9430a39aef1dbf806a8954d71711747be1001076))
* Elvish Shell support ([#1066](https://www.github.com/asdf-vm/asdf/issues/1066)) ([cc7778a](https://www.github.com/asdf-vm/asdf/commit/cc7778a040751f6801524135f5f5ece3a748fa8c))
* toggle off repo sync completely ([#1011](https://www.github.com/asdf-vm/asdf/issues/1011)) ([a3ba5a7](https://www.github.com/asdf-vm/asdf/commit/a3ba5a794c07efb4aa9cce9c15d41b4b61d5df01))


### Bug Fixes

* Adds "grep -P" to the list of banned commands ([#1064](https://www.github.com/asdf-vm/asdf/issues/1064)) ([8a515f4](https://www.github.com/asdf-vm/asdf/commit/8a515f49d7443ee318badbd4d8f092ad0d8f04ca))
* allow plugin callbacks to be in any language ([#995](https://www.github.com/asdf-vm/asdf/issues/995)) ([2ad0f5e](https://www.github.com/asdf-vm/asdf/commit/2ad0f5ea452bd8f843951c4a9cc56a020e172b07))
* clarify the wording when no version is set ([#1088](https://www.github.com/asdf-vm/asdf/issues/1088)) ([4116284](https://www.github.com/asdf-vm/asdf/commit/41162849cf5c966c749ec435ebe32bd649a86ee8))
* completions for asdf plugin list ([#1061](https://www.github.com/asdf-vm/asdf/issues/1061)) ([43412aa](https://www.github.com/asdf-vm/asdf/commit/43412aad5f668686daa058505a61c070561b46fc))
* Correct typo on getting started page ([#1086](https://www.github.com/asdf-vm/asdf/issues/1086)) ([4321980](https://www.github.com/asdf-vm/asdf/commit/4321980c3385ac1bafd77503c8ec77b26042d05b))
* don't override existing ASDF_DIR ([#1008](https://www.github.com/asdf-vm/asdf/issues/1008)) ([73efc9f](https://www.github.com/asdf-vm/asdf/commit/73efc9fa97744c49c5004ee8bb9b6064b6ce22f2))
* ensure shims get created when data dir has spaces ([#996](https://www.github.com/asdf-vm/asdf/issues/996)) ([39c9999](https://www.github.com/asdf-vm/asdf/commit/39c9999519a1d3c51ffb3b8dddd141dbc29b3bd1))
* Fix plugin-test arg parsing ([#1084](https://www.github.com/asdf-vm/asdf/issues/1084)) ([c911f2d](https://www.github.com/asdf-vm/asdf/commit/c911f2d43198945f21bb25100c9dab5a375c780b))
* full_version_name is not available here ([#1031](https://www.github.com/asdf-vm/asdf/issues/1031)) ([8490526](https://www.github.com/asdf-vm/asdf/commit/84905265467c9fdf618c11f69a5ae71408e18bea))
* help for extension commands for plugins with hyphens in the name. ([#1048](https://www.github.com/asdf-vm/asdf/issues/1048)) ([3e0cb9a](https://www.github.com/asdf-vm/asdf/commit/3e0cb9aaea7f2bf282a18c4912454737fef0741b))
* help text as per new feats in [#633](https://www.github.com/asdf-vm/asdf/issues/633) ([#991](https://www.github.com/asdf-vm/asdf/issues/991)) ([0d95663](https://www.github.com/asdf-vm/asdf/commit/0d956635b5cabe35f0895121929e8e668a3ee03d))
* incorrect usage of grep ([#1035](https://www.github.com/asdf-vm/asdf/issues/1035)) ([30d27cb](https://www.github.com/asdf-vm/asdf/commit/30d27cbe6b358cd790fb66dbc8a14806eca23f05))
* insert error handling in list-all & download plugin scripts ([#881](https://www.github.com/asdf-vm/asdf/issues/881)) ([a7d3661](https://www.github.com/asdf-vm/asdf/commit/a7d3661f6c53b24ae1c21e93f94209f3af243349))
* lint scripts for local and CI ([#961](https://www.github.com/asdf-vm/asdf/issues/961)) ([5dafbc8](https://www.github.com/asdf-vm/asdf/commit/5dafbc8e390eacbcfcf97d6d2890e0aa6ef9cd60))
* pipe find into while ([26d2c64](https://www.github.com/asdf-vm/asdf/commit/26d2c64477a1faabedd9a5f97aa7da706988cd72))
* Quote commands correctly in plugin-test ([#1078](https://www.github.com/asdf-vm/asdf/issues/1078)) ([69ff2d0](https://www.github.com/asdf-vm/asdf/commit/69ff2d0c9a4fd273c9dac151345f60f7b146e569))
* regex validate plugin names on plugin add cmd ([#1010](https://www.github.com/asdf-vm/asdf/issues/1010)) ([7697e6e](https://www.github.com/asdf-vm/asdf/commit/7697e6e344809ab4603d0764fb8a969c2bbaf3b6))
* remove find -print0 ([b9228a2](https://www.github.com/asdf-vm/asdf/commit/b9228a26de6a0337a7b59fb5252323d368a72a92))
* Sed improvements ([#1087](https://www.github.com/asdf-vm/asdf/issues/1087)) ([4b93bc8](https://www.github.com/asdf-vm/asdf/commit/4b93bc81aa982b72621cd09e71eeea71ee009185))
* sed re error trailing backslash on FreeBSD ([#1046](https://www.github.com/asdf-vm/asdf/issues/1046)). ([#1047](https://www.github.com/asdf-vm/asdf/issues/1047)) ([47e8fb0](https://www.github.com/asdf-vm/asdf/commit/47e8fb051b3577d251376976d5767c520f3524fc))
* support latest with filter on local and global ([#633](https://www.github.com/asdf-vm/asdf/issues/633)) ([5cf8f89](https://www.github.com/asdf-vm/asdf/commit/5cf8f8962fbd5fe2bc86856bc4676f88e1aa8885))
* Use more idiomatic fish ([#1042](https://www.github.com/asdf-vm/asdf/issues/1042)) ([847ec73](https://www.github.com/asdf-vm/asdf/commit/847ec73751ced9d149ce0826309fee0f894ca664))
* wait until the plugin update are finished ([#1037](https://www.github.com/asdf-vm/asdf/issues/1037)) ([7e1f2a0](https://www.github.com/asdf-vm/asdf/commit/7e1f2a0d938052d4fa5ce6546f07b3decbd740cf))

## 0.8.1

Features

* Support for latest version in shell, local, and global commands (#802, #801)
* Parallel updating of all plugins (#626, #530)
* Print documentation website and GitHub URLs in help command (#820)

Fixed Bugs

* Fix plugin-update --all when there are no plugins (#805, #803)
* Ban `echo` command from asdf codebase (#806, #781)
* Add basic tests for plugin-update command (#807)
* Cleanup unused code in plugin update tests (#810)
* Fix resolution of relative symlinks (#815, #625)
* Fixes to GitHub workflow (#833)
* Update no plugin installed error message (#818)
* Remove process substitution that was problematic when POSIXLY_CORRECT is set (#851, #581)
* Fix warnings from find command (#853)
* Ban the `sort -V` command from the asdf codebase (#755, #867)
* Fix `plugin update --all` so that the default branch is used for each plugin (#800)
* Fix issues with awk command on some platforms used by plugin update command (#924, #899, #919)
* Add completion for the `system` version (#911)

Documentation

* Link to Homebrew common issues from documentation site (#795)
* Remove -vm suffix name in documentation (#798, #796)
* Fix file renames in release script (#809)
* Update supported versions in documentation (#825)
* Fix references to icongram files (#827)
* Fix broken links in CONTRIBUTING.md (#832, #852)
* Fix broken link in README.md (#835)
* Improve zsh completion directions for macOS,ZSH,Homebrew (#843)
* Add GitHub discussions link (#839)
* Add note about unsolicited formatting pull requests (#848)
* Fix formatting of GitHub name (#847)
* Explain the difference between ASDF_DIR and ASDF_DATA_DIR (#855)
* Update BATS link to bats-core GitHub repo (#858)
* Instruct users to symlink completions for Fish shell (#860)
* Support alternate locations for `.zshrc` (#871)
* Add "Add translation" link to navbar (#876)
* Clarify usage of the ASDF_DEFAULT_TOOL_VERSIONS_FILENAME variable (#912, #900)
* Show how to use the `system` version (#925, #868)
* Remove instructions for installing dependencies for Homebrew installs (#937, #936)

## 0.8.0

Features

* Add support for plugin documentation callback scripts (#512, #757)
* Add support for installing one tool specified in `.tool-versions` (#759, #760)
* Improve introduction and install sections of documentation (#699, #740)
* Add dependencies for openSUSE and ArchLinux to documentation (#714)
* Add support for keeping downloaded tool source code (#74, #669)
* Add `asdf info` command to print debug information (#786, #787)

Fixed Bugs

* Fix typo that caused plugin-test to erroneously fail (#780)
* Make sure shims are only appended to `PATH` once in Fish shell (#767, #777, #778)
* Print `.tool-versions` file path on shim error (#749, #750)
* Add `column` and `sort -V` to list of banned commands for the asdf codebase (#661, #754)
* Use editorconfig for shell formatting (#751)
* Remove use of `column` command in favor of awk (#721)
* Add `asdf shell` command to help output (#715, #737)
* Ensure consistency in indentation for message shown when no versions installed (#728)
* Fix dead link in documentation (#733)
* Fix typo in docs/core-manage-versions.md (#722)
* Fix a typo in the `asdf env` command documentation (#717)
* Fix Fish shell documentation (#709)
* Only list asdf dependencies on asdf website (#511, #710)
* Add CODEOWNERS file for GitHub reviews (#705)
* Add unit test for `asdf plugin-add` exit code (#689)

## 0.7.8

Features

* Add support for `post-plugin-add` and `pre-plugin-remove` in plugins. Add configurable command hooks for plugin installation and removal (#670, #683)

    ```shell
    pre_asdf_plugin_remove = echo will remove plugin ${1}
    pre_asdf_plugin_remove_foo = echo will remove plugin foo
    post_asdf_plugin_remove = echo removed plugin ${1}
    post_asdf_plugin_remove_foo = echo removed plugin foo
    ```

* Use different exit code if updates are disabled (#676)

Fixed Bugs

* Make sure extension commands are properly displayed by `asdf help`

  Extension commands are now expected to be inside plugins's `lib/commands/command-*.bash` instead of `bin/command*`.

  This change was made for two reasons: Keep the convention that all files to be sourced by bash should end with
  the `.bash` extension. And the `lib/commands/` directory mirrors the location of asdf own core commands.

  Added tests to make sure `asdf help` properly displays available extension commands.

* Remove automatic `compinit` from asdf.sh (#674, #678)

## 0.7.7

Features

* Add .bash file extension to files executed by Bash (#664)
* Add security policy (#660)

Fixed Bugs

* consistent use of plugin_name (#657)
* Default ZSH_VERSION to empty string (#656)
* Fix support for path version (#654)
* Fix hanging 'asdf update is a noop for non-git repos' test (#644)
* Fix Bash completions for `plugin-add` (#643)
* Fix `--unset` for Fish shell (#640)
* Misc. documentation fixes (#631, #652)
* Defaults to empty ASDF_DATA_DIR (#630)
* Remove shebang lines of sourced scripts (#629)
* Ignore shim directory for executable lookups (#623)
* Fix issue with preset version warning assuming that the shim name and plugin name are the same (#622)

## 0.7.6

Features

* Improve output format of `asdf plugin list all`

  Long plugin names were causing problems with how we used printf.
  Now we use the `column` command to properly render output.

* Now `asdf plugin list` can take both `--urls` and `--refs` options.

  When `--url` is used, we print the plugin's remote origin URL.
  While `--refs` prints the git branch/commit the plugin is at.

* It's now possible to update a plugin to an specific branch/commit.

  `asdf plugin update <name> [git-ref]`

  Checkouts a plugin to the specified `git-ref`. Defaults to `master`

* Now the `asdf plugin test` command can be specified with a plugin commit/branch to test.

  This will help CI checks to actually test the commit they are running for.
  Previously we always used the plugin's `master` branch.

* Subcommand CLI support.

   Users familiar with sub-command aware tools like `git` can now
   use `asdf` commands in the same way. For example:

   `asdf plugin list all` is equivalent to `asdf plugin-list-all`

   This is also the case for plugin extension commands, where the
   plugin name is an asdf main subcommand. ie. Having a `foo` plugin
   you can invoke: `asdf foo bar`

* Make `asdf plugin test` use the new `asdf latest` command. (#541)

   If a plugin version is not given explicitly, we use `asdf latest` to
   obtain the version of plugin to install for testing.

* `asdf --version` displays git revision when asdf_dir is a git clone.

   This will allow better bug reports since people can now include the
   git commit they are using.

* Add support for asdf extension commands.

   Plugins can provide `bin/command*` scripts or executables that will
   be callable using the asdf command line interface.

   See `docs/plugins-create.md` for more info.

* Add support for installing the latest stable version of a tool (#216)

    ```shell
    asdf install python latest
    asdf install python latest:3.7 # installs latest Python 3.7 version
    ```

* Add `asdf latest` command to display the latest stable version of a tool (#575)

    ```shell
    asdf latest python
    asdf latest python 3.7 # displays latest Python 3.7 version
    ```

* Add support for filtering versions returned by `asdf list-all`

    ```shell
    asdf list-all python 3.7 # lists available Python 3.7 versions
    ````

## 0.7.5

Features

* Add AppVeyor config for builds on Windows, for eventual Windows support (#450, #451)
* Add `--unset` flag to shell command (#563)

Fixed Bugs

* Fix multiple version install (#540, #585)
* Handle dashes in executable/shim names properly (#565, #589)
* Fix bug in sed command so `path:...` versions are handled correctly (#559, #591)

## 0.7.4

Features

* Add quite flag to git clone (#546)
* Improve docs for Homebrew (#553, #554)

Fixed Bugs

* Don't include the current directory in `PATH` variable in `asdf env` environment (#543, #560)
* Fix `asdf plugin-test` dependency on Git when installed via Homebrew (#509, #556)

## 0.7.3

Features

* Make `asdf install` check for versions in legacy files (#533, #539)

Fixed Bugs

* Address shellcheck warning and use shell globbing instead of `ls` (#525)

## 0.7.2

Features

* Add unit tests for untested code in asdf.sh and asdf.fish (#286, #507, #508)
* Switched to a maintained version of BATS (#521)

Fixed Bugs

* Don't iterate on output of `ls` (#513)
* Check shims for full tool version so adding new versions to a shim works properly (#517, #524)

## 0.7.1

Features

* Add mksh support
* Add documentation about using multiple versions of the same plugin
* Remove post_COMMAND hooks
* Add `asdf shell` command to set a version for the current shell (#480)
* Ignore comments in .tool-versions (#498, #504)

Fixed Bugs

* Avoid modifying `fish_user_paths`
* Restore support for legacy file version (#484)
* Restore support for multiple versions
* Fix bug when trying to locate shim (#488)
* Run executable using `exec` (#502)

## 0.7.0

Features

* Shims can be invoked directly via `asdf exec <command> [args...]` without requiring to have all shims on path (#374).
* New `asdf env <command>` can be used to print or execute with the env that would be used to execute a shim. (#435)
* Configurable command hooks from `.asdfrc` (#432, #434)
  Suppose a `foo` plugin is installed and provides a `bar` executable,
  The following hooks will be executed when set:

    ```shell
    pre_asdf_install_foo = echo will install foo version ${1}
    post_asdf_install_foo = echo installed foo version ${1}

    pre_asdf_reshim_foo = echo will reshim foo version ${1}
    post_asdf_reshim_foo = echo reshimmed foo version ${1}

    pre_foo_bar = echo about to execute command bar from foo with args: ${@}
    post_foo_bar = echo just executed command bar from foo with args: ${@}

    pre_asdf_uninstall_foo = echo will remove foo version ${1}
    post_asdf_uninstall_foo = echo removed foo version ${1}
    ```
* New shim version meta-data allows shims to not depend on a particular plugin
  nor on its relative executable path (#431)
  Upgrading requires shim re-generation and should happen automatically by `asdf-exec`:
  `rm -rf ~/.asdf/shims/` followed by `asdf reshim`
* Added lots of tests for shim execution.
  We now make sure that shim execution obeys plugins hooks like `list-bin-paths` and
  `exec-path`.
* Shims now are thin wrappers around `asdf exec` that might be faster
  for most common use case: (versions on local .tool-versions file) but fallbacks to
  slower `get_preset_version_for` which takes legacy formats into account.
* Shim exec recommends which plugins or versions to set when command is not found.
* `asdf reshim` without arguments now reshims all installed plugins (#407)
* Add `asdf shim-versions <executable>` to list on which plugins and versions is a command
  available. (#380, #433)
* Add documentation on installing dependencies via Spack (#471)

Fixed Bugs

* Fix `update` command so it doesn't crash when used on Brew installations (#429, #474, #439, #436)

## 0.6.3

Features

* Make `which` command work with any binary included in a plugin installation (#205, #382)
* Add documentation for documentation website (#274, #396, #422, #423, #427, #430)

Fixed Bugs

* Silence errors during tab completion (#404)
* Remove unused asdf shims directory from `PATH` (#408)
* Fix issues with update command that prevented updates for installations in custom locations (#411)
* Fix shellcheck warnings on OSX (#416)
* Add tests for versions set by environment variables (#417, #327)
* Continue `list` output even when version is not found (#419)
* Fixed user paths for fish (#420, #421)
* Custom exec path tests (#324, #424)

## 0.6.2

Fixed Bugs

* Fix `system` logic so shims directory is removed from `PATH` properly (#402, #406)
* Support `.tool-versions` files that don't end in a newline (#403)

## 0.6.1

Features

* Make `where` command default to current version (#389)
* Optimize code for listing all plugins (#388)
* Document `$TRAVIS_BUILD_DIR` in the plugin guide (#386)
* Add `--asdf-tool-version` flag to plugin-test command (#381)
* Add `-p` flag to `local` command (#377)

Fixed Bugs

* Fix behavior of `current` command when multiple versions are set (#401)
* Fix fish shell init code (#392)
* Fix `plugin-test` command (#379)
* Add space before parenthesis in `current` command output (#371)

## 0.6.0

Features

* Add support for `ASDF_DATA_DIR` environment variable (#275, #335, #361, #364, #365)

Fixed Bugs

* Fix `asdf current` so it works when no versions are installed (#368, #353)
* Don't try to install system version (#369, #351)
* Make `resolve_symlink` function work with relative symlinks (#370, #366)
* Fix version changing code so it preserves symlinks (#329, #337)
* Fix ShellCheck warnings (#336)

## 0.5.1

Features

* Better formatting for `asdf list` output (#330, #331)

Fixed Bugs

* Correct environment variable name used for version lookup (#319, #326 #328)
* Remove unnecessary `cd` in `asdf.sh` (#333, #334)
* Correct Fish shell load script (#340)

## 0.5.0

Features

* Changed exit codes for shims so we use codes with special meanings when possible (#305, #310)
* Include plugin name in error message if plugin doesn't exist (#315)
* Add support for custom executable paths (#314)
* `asdf list` with no arguments should list all installed versions of all plugins (#311)

Fixed Bugs

* Print "No version set" message to stderr (#309)
* Fix check for asdf directories in path for Fish shell (#306)

## 0.4.3

Features

* Suggest action when no version is set (#291, #293)

Fixed Bugs

* Fix issue with asdf not always being added to beginning of `$PATH` (#288, #303, #304)
* Fix incorrect `ASDF_CONFIG_FILE` environment variable name (#300)
* Fix `asdf current` so it shows environment variables that are setting versions (#292, 294)

## 0.4.2

Features

* Add support for `ASDF_DEFAULT_TOOL_VERSIONS_FILENAME` environment variable (#201, #228)
* Only add asdf to `PATH` once (#261, #271)
* Add `--urls` flag to `plugin-list` commands (#273)

Fixed Bugs

* Incorrect `grep` command caused version command to look at the wrong tool when reporting the version (#262)

## 0.4.1

Features

* `asdf install` will also search for `.tool-versions` in parent directories (#237)

Fixed Bugs

* bad use of `sed` caused shims and `.tool-versions` to be duplicated with `-e` (#242, #250)
* `asdf list` now outputs ref-versions as used on `.tool-versions` file (#243)
* `asdf update` will explicitly use the `origin` remote when updating tags (#231)
* All code is now linted by shellcheck (#223)
* Add test to fail builds if banned commands are found (#251)

## 0.4.0

Features

* Add CONTRIBUTING guidelines and GitHub issue and pull request templates (#217)
* Add `plugin-list-all` command to list plugins from asdf-plugins repo. (#221)
* `asdf current` shows all current tool versions when given no args (#219)
* Add asdf-plugin-version metadata to shims (#212)
* Add release.sh script to automate release of new versions (#220)

Fixed Bugs

* Allow spaces on path containing the `.tool-versions` file (#224)
* Fixed bug in `--version` functionality so it works regardless of how asdf was installed (#198)

## 0.3.0

Features

* Add `update` command to make it easier to update asdf to the latest release (#172, #180)
* Add support for `system` version to allow passthrough to system installed tools (#55, #182)

Fixed Bugs

* Set `GREP_OPTIONS` and `GREP_COLORS` variables in util.sh so grep is always invoked with the correct settings (#170)
* Export `ASDF_DIR` variable so the Zsh plugin can locate asdf if it's in a custom location (#156)
* Don't add execute permission to files in a plugin's bin directory when adding the plugin (#124, #138, #154)

## 0.2.1

Features

* Determine global tool version even when used outside of home directory (#106)

Fixed Bugs

* Correct reading of `ref:` and `path:` versions (#112)
* Remove shims when uninstalling a version or removing a plugin (#122, #123, #125, #128, #131)
* Add a helpful error message to the install command (#135)

## 0.2.0

Features

* Improve plugin API for legacy file support (#87)
* Unify `asdf local` and `asdf global` version getters as `asdf current` (#83)
* Rename `asdf which` to `asdf current` (#78)

Fixed Bugs

* Fix bug that caused the `local` command to crash when the directory contains whitespace (#90)
* Misc typo corrections (#93, #99)

## 0.1.0

* First tagged release
