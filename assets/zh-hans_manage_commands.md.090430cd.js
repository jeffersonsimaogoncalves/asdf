import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.0e8ae64e.js";const h=JSON.parse('{"title":"所有命令","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/manage/commands.md","filePath":"zh-hans/manage/commands.md","lastUpdated":1687069487000}'),l={name:"zh-hans/manage/commands.md"},t=e(`<h1 id="所有命令" tabindex="-1">所有命令 <a class="header-anchor" href="#所有命令" aria-label="Permalink to &quot;所有命令&quot;">​</a></h1><p><code>asdf</code> 中所有可用命令的列表。这个列表就是 <code>asdf help</code> 命令的打印内容。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">MANAGE PLUGINS</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin add &lt;name&gt; [&lt;git-url&gt;]      Add a plugin from the plugin repo OR,</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        add a Git repo as a plugin by</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        specifying the name and repo url</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin list [--urls] [--refs]      List installed plugins. Optionally show</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        git urls and git-ref</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin list all                    List plugins registered on asdf-plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        repository with URLs</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin remove &lt;name&gt;               Remove plugin and package versions</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin update &lt;name&gt; [&lt;git-ref&gt;]   Update a plugin to latest commit on</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        default branch or a particular git-ref</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf plugin update --all                Update all plugins to latest commit on</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        default branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">MANAGE PACKAGES</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf current                            Display current version set or being</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        used for all packages</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf current &lt;name&gt;                     Display current version set or being</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        used for package</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf global &lt;name&gt; &lt;version&gt;            Set the package global version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf global &lt;name&gt; latest[:&lt;version&gt;]   Set the package global version to the</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        latest provided version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf help &lt;name&gt; [&lt;version&gt;]            Output documentation for plugin and tool</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf install                            Install all the package versions listed</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        in the .tool-versions file</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf install &lt;name&gt;                     Install one tool at the version</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        specified in the .tool-versions file</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf install &lt;name&gt; &lt;version&gt;           Install a specific version of a package</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf install &lt;name&gt; latest[:&lt;version&gt;]  Install the latest stable version of a</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        package, or with optional version,</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        install the latest stable version that</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        begins with the given string</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf latest &lt;name&gt; [&lt;version&gt;]          Show latest stable version of a package</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf latest --all                       Show latest stable version of all the</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        packages and if they are installed</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf list &lt;name&gt; [version]              List installed versions of a package and</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        optionally filter the versions</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf list all &lt;name&gt; [&lt;version&gt;]        List all versions of a package and</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        optionally filter the returned versions</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf local &lt;name&gt; &lt;version&gt;             Set the package local version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf local &lt;name&gt; latest[:&lt;version&gt;]    Set the package local version to the</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        latest provided version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf shell &lt;name&gt; &lt;version&gt;             Set the package version to</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        \`ASDF_\${LANG}_VERSION\` in the current shell</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf uninstall &lt;name&gt; &lt;version&gt;         Remove a specific version of a package</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf where &lt;name&gt; [&lt;version&gt;]           Display install path for an installed</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        or current version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf which &lt;command&gt;                    Display the path to an executable</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">UTILS</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf exec &lt;command&gt; [args...]           Executes the command shim for current version</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf env &lt;command&gt; [util]               Runs util (default: \`env\`) inside the</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        environment used for command shim execution.</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf info                               Print OS, Shell and ASDF debug information.</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf version                            Print the currently installed version of ASDF</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf reshim &lt;name&gt; &lt;version&gt;            Recreate shims for version of a package</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf shim-versions &lt;command&gt;            List the plugins and versions that</span></span>
<span class="line"><span style="color:#e1e4e8;">                                        provide a command</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf update                             Update asdf to the latest stable release</span></span>
<span class="line"><span style="color:#e1e4e8;">asdf update --head                      Update asdf to the latest on the master branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">RESOURCES</span></span>
<span class="line"><span style="color:#e1e4e8;">GitHub: https://github.com/asdf-vm/asdf</span></span>
<span class="line"><span style="color:#e1e4e8;">Docs:   https://asdf-vm.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">MANAGE PLUGINS</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin add &lt;name&gt; [&lt;git-url&gt;]      Add a plugin from the plugin repo OR,</span></span>
<span class="line"><span style="color:#24292e;">                                        add a Git repo as a plugin by</span></span>
<span class="line"><span style="color:#24292e;">                                        specifying the name and repo url</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin list [--urls] [--refs]      List installed plugins. Optionally show</span></span>
<span class="line"><span style="color:#24292e;">                                        git urls and git-ref</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin list all                    List plugins registered on asdf-plugins</span></span>
<span class="line"><span style="color:#24292e;">                                        repository with URLs</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin remove &lt;name&gt;               Remove plugin and package versions</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin update &lt;name&gt; [&lt;git-ref&gt;]   Update a plugin to latest commit on</span></span>
<span class="line"><span style="color:#24292e;">                                        default branch or a particular git-ref</span></span>
<span class="line"><span style="color:#24292e;">asdf plugin update --all                Update all plugins to latest commit on</span></span>
<span class="line"><span style="color:#24292e;">                                        default branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">MANAGE PACKAGES</span></span>
<span class="line"><span style="color:#24292e;">asdf current                            Display current version set or being</span></span>
<span class="line"><span style="color:#24292e;">                                        used for all packages</span></span>
<span class="line"><span style="color:#24292e;">asdf current &lt;name&gt;                     Display current version set or being</span></span>
<span class="line"><span style="color:#24292e;">                                        used for package</span></span>
<span class="line"><span style="color:#24292e;">asdf global &lt;name&gt; &lt;version&gt;            Set the package global version</span></span>
<span class="line"><span style="color:#24292e;">asdf global &lt;name&gt; latest[:&lt;version&gt;]   Set the package global version to the</span></span>
<span class="line"><span style="color:#24292e;">                                        latest provided version</span></span>
<span class="line"><span style="color:#24292e;">asdf help &lt;name&gt; [&lt;version&gt;]            Output documentation for plugin and tool</span></span>
<span class="line"><span style="color:#24292e;">asdf install                            Install all the package versions listed</span></span>
<span class="line"><span style="color:#24292e;">                                        in the .tool-versions file</span></span>
<span class="line"><span style="color:#24292e;">asdf install &lt;name&gt;                     Install one tool at the version</span></span>
<span class="line"><span style="color:#24292e;">                                        specified in the .tool-versions file</span></span>
<span class="line"><span style="color:#24292e;">asdf install &lt;name&gt; &lt;version&gt;           Install a specific version of a package</span></span>
<span class="line"><span style="color:#24292e;">asdf install &lt;name&gt; latest[:&lt;version&gt;]  Install the latest stable version of a</span></span>
<span class="line"><span style="color:#24292e;">                                        package, or with optional version,</span></span>
<span class="line"><span style="color:#24292e;">                                        install the latest stable version that</span></span>
<span class="line"><span style="color:#24292e;">                                        begins with the given string</span></span>
<span class="line"><span style="color:#24292e;">asdf latest &lt;name&gt; [&lt;version&gt;]          Show latest stable version of a package</span></span>
<span class="line"><span style="color:#24292e;">asdf latest --all                       Show latest stable version of all the</span></span>
<span class="line"><span style="color:#24292e;">                                        packages and if they are installed</span></span>
<span class="line"><span style="color:#24292e;">asdf list &lt;name&gt; [version]              List installed versions of a package and</span></span>
<span class="line"><span style="color:#24292e;">                                        optionally filter the versions</span></span>
<span class="line"><span style="color:#24292e;">asdf list all &lt;name&gt; [&lt;version&gt;]        List all versions of a package and</span></span>
<span class="line"><span style="color:#24292e;">                                        optionally filter the returned versions</span></span>
<span class="line"><span style="color:#24292e;">asdf local &lt;name&gt; &lt;version&gt;             Set the package local version</span></span>
<span class="line"><span style="color:#24292e;">asdf local &lt;name&gt; latest[:&lt;version&gt;]    Set the package local version to the</span></span>
<span class="line"><span style="color:#24292e;">                                        latest provided version</span></span>
<span class="line"><span style="color:#24292e;">asdf shell &lt;name&gt; &lt;version&gt;             Set the package version to</span></span>
<span class="line"><span style="color:#24292e;">                                        \`ASDF_\${LANG}_VERSION\` in the current shell</span></span>
<span class="line"><span style="color:#24292e;">asdf uninstall &lt;name&gt; &lt;version&gt;         Remove a specific version of a package</span></span>
<span class="line"><span style="color:#24292e;">asdf where &lt;name&gt; [&lt;version&gt;]           Display install path for an installed</span></span>
<span class="line"><span style="color:#24292e;">                                        or current version</span></span>
<span class="line"><span style="color:#24292e;">asdf which &lt;command&gt;                    Display the path to an executable</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UTILS</span></span>
<span class="line"><span style="color:#24292e;">asdf exec &lt;command&gt; [args...]           Executes the command shim for current version</span></span>
<span class="line"><span style="color:#24292e;">asdf env &lt;command&gt; [util]               Runs util (default: \`env\`) inside the</span></span>
<span class="line"><span style="color:#24292e;">                                        environment used for command shim execution.</span></span>
<span class="line"><span style="color:#24292e;">asdf info                               Print OS, Shell and ASDF debug information.</span></span>
<span class="line"><span style="color:#24292e;">asdf version                            Print the currently installed version of ASDF</span></span>
<span class="line"><span style="color:#24292e;">asdf reshim &lt;name&gt; &lt;version&gt;            Recreate shims for version of a package</span></span>
<span class="line"><span style="color:#24292e;">asdf shim-versions &lt;command&gt;            List the plugins and versions that</span></span>
<span class="line"><span style="color:#24292e;">                                        provide a command</span></span>
<span class="line"><span style="color:#24292e;">asdf update                             Update asdf to the latest stable release</span></span>
<span class="line"><span style="color:#24292e;">asdf update --head                      Update asdf to the latest on the master branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">RESOURCES</span></span>
<span class="line"><span style="color:#24292e;">GitHub: https://github.com/asdf-vm/asdf</span></span>
<span class="line"><span style="color:#24292e;">Docs:   https://asdf-vm.com</span></span></code></pre></div>`,3),p=[t];function o(i,c,r,d,g,f){return a(),n("div",null,p)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
