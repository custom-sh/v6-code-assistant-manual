// ===== i18n Language System =====
const I18N_DICT={
'更新日志':'Changelog',
'首页':'Home','功能介绍':'Features','操作手册':'Manual','常见问题':'FAQ',
'插件手册 - IMS V6 Code Assistant':'Plugin Manual - IMS V6 Code Assistant',
'一体化智能开发助手，覆盖项目初始化、版本升级、构建打包、代码扫描、代码生成、开发手册知识库问答等全流程功能':'An all-in-one intelligent development assistant covering project initialization, version upgrades, build packaging, code scanning, code generation, and knowledge base Q&A.',
'查看功能介绍 ↓':'Explore Features ↓',
'可视化配置':'Visual Config','平台版本升级':'Platform Upgrade','项目构建打包':'Build & Package','代码扫描':'Code Scanner','代码生成器':'Code Generator','常量同步 & 图标库':'Sync & Icons','启动前端 & 切换数据库':'Launch & DB Switch','开发手册问答':'Manual Q&A',
'核心功能':'Core Features',
'从项目初始化到代码生成，覆盖 IMS V6 开发全流程':'From project initialization to code generation, covering the entire IMS V6 development lifecycle.',
'可视化配置页面，集中管理项目编码、多端路径、数据库连接与 AI 模型参数':'Visual configuration panel for managing project code, multi-end paths, database connections, and AI model parameters.',
'一键升级平台版本，自动备份并替换 lib 和前端资源':'One-click platform version upgrade with automatic backup and replacement of libs and frontend resources.',
'并行构建 Server / Web / PDA 三端，版本号自动递增与强制统一':'Parallel build of Server/Web/PDA with auto-increment and forced version unification.',
'自定义扫描规则，支持实时扫描与 IDEA Code Inspection 结果集成':'Customizable scanning rules with real-time scanning and IDEA Code Inspection integration.',
'粘贴设计文档 TSV 即生成 Selector / Table / Model / Vue 等 6 个产物':'Paste design doc TSV to generate 6 artifacts: Selector, Table, Model, Vue, and more.',
'ColumnType / CheckType 常量一键同步至前端，内置图标库搜索':'One-click sync of ColumnType/CheckType constants to frontend; built-in icon library search.',
'右键菜单即可切换数据库，并通过 VS Code 启动 Web 或 PDA 开发服务器，自动安装依赖并运行 npm run serve。':'Right-click to switch database and launch Web or PDA dev server via VS Code with auto dependency install and npm run serve.',
'基于二次开发手册文档本地检索、流式对话，回答语言跟随插件设置':'Local retrieval and streaming chat based on dev manual docs; response language follows plugin settings.',
'可视化编辑':'Visual Editor','自动备份恢复':'Auto Backup','并行构建':'Parallel Build','版本统一':'Version Sync','自定义规则':'Custom Rules','实时检查':'Live Check','TSV 粘贴':'TSV Paste','一键生成':'One-Click Gen','增量同步':'Incremental Sync','内置图标库':'Icon Library','VS Code 启动':'VS Code Launch','自动安装':'Auto Install','自动任务':'Auto Tasks','本地检索':'Local Search','流式对话':'Streaming Chat',
'功能目录':'Contents',
'打开配置面板':'Open Configuration Panel','常规设置':'General Settings','填写项目信息':'Enter Project Information','配置多端路径与端口':'Configure Multi-End Paths & Ports','查看版本信息':'View Version Information','配置数据库连接（可选）':'Configure Database Connection (Optional)','点击「一键初始化模板」':'Click "One-Click Init Template"','确认初始化操作':'Confirm Initialization','等待完成':'Wait for Completion',
'打开升级对话框':'Open Upgrade Dialog','选择新版本模板目录':'Select New Version Template Directory','查看升级类型':'View Upgrade Type','选择升级模块':'Select Upgrade Modules','预览升级步骤':'Preview Upgrade Steps','确认执行升级':'Confirm Upgrade Execution','查看升级进度':'View Upgrade Progress',
'打开构建对话框':'Open Build Dialog','选择构建模块':'Select Build Modules','设置项目版本号':'Set Project Version','设置输出目录（可选）':'Set Output Directory (Optional)','点击「打包」按钮':'Click "Package" Button','查看构建进度':'View Build Progress',
'配置扫描规则':'Configure Scan Rules','选择扫描范围':'Select Scan Scope','执行代码扫描':'Run Code Scanner','查看扫描结果':'View Scan Results','修复发现的问题':'Fix Reported Issues','切换实时扫描':'Toggle Live Scan',
'打开代码生成器':'Open Code Generator','粘贴表结构 TSV':'Paste Table Structure TSV','核对索引与操作':'Verify Indexes & Operations','点「确定」触发后台生成':'Click "OK" to Trigger Background Generation','预览窗微调':'Fine-Tune in Preview','确认写盘':'Confirm Write to Disk',
'打开 Java 常量文件':'Open Java Constant File','选择同步方式':'Choose Sync Method','确认同步':'Confirm Sync','打开图标库':'Open Icon Library','搜索图标':'Search Icons','一键复制代码':'One-Click Copy Code',
'选择前端模块':'Select Frontend Module','信任 VS Code 工作区':'Trust VS Code Workspace','等待自动任务启动':'Wait for Auto Task Launch','未自动启动时手动运行':'Manual Launch if Auto Task Fails','查看启动结果':'View Launch Result','配置数据库连接':'Configure Database Connection','切换数据库':'Switch Database',
'配置 AI 模型':'Configure AI Model','配置知识库目录':'Configure Knowledge Base Directory','打开问答窗口':'Open Q&A Window','开始提问':'Start Asking Questions','管理对话':'Manage Conversations',
'语言：':'Language: ','切换插件显示语言（中文 / English / 跟随IDE）':'Switch plugin display language (Chinese / English / Follow IDE)',
'编码：':'Encoding: ','设置项目文件编码':'Set project file encoding',
'项目 SDK：':'Project SDK: ','选择项目使用的 JDK 版本':'Select the JDK version used by the project',
'Maven：':'Maven: ','配置 Maven Home、User Settings、Local Repository 路径':'Configure Maven Home, User Settings, and Local Repository paths',
'编辑器：':'Editor: ','勾选 Java 软换行、代码格式化开关、自动优化导包':'Enable Java soft wrap, code formatting toggle, and auto-optimize imports',
'大版本升级：':'Major version upgrade: ','跨版本升级（如 V6.1 → V6.2），将替换项目文件':'Cross-version upgrade (e.g. V6.1 → V6.2), replaces project files.',
'修订版本升级：':'Revision upgrade: ','同版本内升级（如 V6.2.1 → V6.2.4），仅替换 lib 和更新 package.json':'Same-version upgrade (e.g. V6.2.1 → V6.2.4), only replaces libs and updates package.json.',
'进度提示：':'Progress: ','实时显示 ✓/✗ 成败标记和进度百分比':'Real-time ✓/✗ success/failure markers and progress percentage.',
'成功判定：':'Success criteria: ','通过复制 make.bat 并注入结果标记，在 pause 之前即写入 SUCCESS/FAILURE':'By copying make.bat and injecting result markers, SUCCESS/FAILURE is written before pause.',
'窗口行为：':'Window behavior: ','构建成功时 cmd 窗口自动关闭；失败/异常时窗口停留保留 pause 供查看错误':'Cmd windows auto-close on success; stay open with pause on failure for error inspection.',
'打包输出：':'Package output: ','仅 make 成功的模块才打包。Server → lib.zip，Web → web.zip，PDA → pda.zip':'Only successfully built modules are packaged. Server → lib.zip, Web → web.zip, PDA → pda.zip.',
'通知链接：':'Notification link: ','通知中提供「打开输出目录」可点击链接；全部成功时自动用资源管理器打开':'Notifications include a clickable "Open output directory" link; auto-opens in Explorer when all succeed.',
'字段去重：':'Field dedup: ','自动识别已激活 DB 连接读取库表字段，同时扫描既有 *ColumnDescDef.java，双重跳过':'Auto-identifies activated DB connections to read table columns, while scanning existing *ColumnDescDef.java - dual skip.',
'STAT 翻译：':'STAT Translation: ','先查项目内 *ColumnType.java + 平台内置字典；未命中走 AI 批量翻译并缓存预翻译表':'First checks project *ColumnType.java + platform built-in dictionary; falls back to AI batch translation and caches pre-translation table.',
'占位常量名：':'Placeholder constant: ','AI 仍未命中则回填「字段编码_STAT_序号」，预览窗黄色高亮提示':'If AI still misses, falls back to "fieldCode_STAT_seq", highlighted in yellow in the preview.',
'ColumnType 同步：':'ColumnType Sync: ','右键 → Sync ColumnType to Frontend，将常量同步至前端 columnType.js':'Right-click → Sync ColumnType to Frontend, syncs constants to frontend columnType.js.',
'CheckType 同步：':'CheckType Sync: ','右键 → Sync CheckType to Frontend，将检查标识同步至前端 checkType.js':'Right-click → Sync CheckType to Frontend, syncs check flags to frontend checkType.js.',
'增量同步：':'Incremental Sync: ','选中部分常量文本后右键执行，仅同步选中的内容':'Select partial constant text and right-click to execute; only syncs the selected content.',
'自定义同步：':'Custom Sync: ','在弹窗中手动输入需要同步的字段名':'Manually enter field names to sync in the popup dialog.',
'Start Web Server：':'Start Web Server: ','使用 VS Code 打开 Web 模块并启动开发服务':'Open the Web module in VS Code and start the dev server.',
'Start PDA Server：':'Start PDA Server: ','使用 VS Code 打开 PDA 模块并启动开发服务':'Open the PDA module in VS Code and start the dev server.',
'VS Code 不可用：':'VS Code Unavailable: ','自动回退到独立 cmd 窗口执行启动命令':'Auto-fallback to independent cmd window for launch.',
'右键项目 → 打开插件配置；或通过 File → Settings → IMS V6 Code Assistant 进入。面板分为「常规」和「数据库配置」两个页签':'Right-click project → Open Plugin Settings; or navigate via File → Settings → IMS V6 Code Assistant. The panel has two tabs: General and Database Configuration.',
'在「常规」页签中配置 IDE 运行环境':'Configure the IDE runtime environment on the General tab.',
'在「项目编码」和「项目名称」输入框中填写实际值。项目编码只能包含字母和数字，用于替换模板中的 demo 占位符':'Fill in actual values for Project Code and Project Name. Project code supports letters and digits only, used to replace demo placeholders in templates.',
'分别设置 Server、Web、PDA 三端的项目路径和端口号。路径框右侧实时显示验证状态（有效/不存在/不是目录），端口号可自定义':'Set project paths and port numbers for Server, Web, and PDA separately. Validation status (valid/not found/not a directory) is displayed in real-time on the right; ports are customizable.',
'每端路径右侧显示平台版本和项目版本。多端版本不一致时弹出警告通知':'Platform version and project version are displayed on the right of each path. A warning appears when versions differ across modules.',
'切换到「数据库配置」页签，添加 PostgreSQL / Oracle / DM 等数据库连接，填写主机、端口、库名、用户名、密码':'Switch to the Database Configuration tab to add connections for PostgreSQL/Oracle/DM, filling in host, port, database name, username, and password.',
'填写完项目信息和三端路径后按钮自动启用。点击弹出确认对话框，展示详细步骤说明':'The button auto-enables after project info and all three paths are filled. Clicking it opens a confirmation dialog with detailed step descriptions.',
'仔细阅读确认对话框中的 10 步操作说明，点击「确定」开始。包括：修改 pom.xml、重命名包和类、创建 Run Configuration、npm install 等':'Carefully review the 10-step operation guide in the confirmation dialog, then click OK to start. Includes: modifying pom.xml, renaming packages and classes, creating Run Configurations, npm install, etc.',
'初始化完成后弹出通知，显示处理文件数量':'A notification pops up upon completion, showing the number of files processed.',
'在配置面板中点击「升级版本」按钮':'Click the Upgrade Version button in the configuration panel.',
'点击路径输入框右侧的浏览按钮，选择新版本的 template 目录。参考路径格式：imsv6/release/template/v6.x.x/':'Click the browse button next to the path input to select the new version template directory. Reference path format: imsv6/release/template/v6.x.x/',
'系统会自动检测升级类型':'The system automatically detects the upgrade type.',
'勾选需要升级的模块：Server、Web、PDA。每个模块会显示当前版本和目标版本':'Check modules to upgrade: Server, Web, PDA. Each module shows the current version and target version.',
'在「升级步骤预览」区域查看每个模块将执行的具体操作':'Review the specific operations to be performed for each module in the Upgrade Steps Preview area.',
'点击「确定」按钮，系统会自动备份并执行升级。大版本升级会自动备份，升级失败时自动回滚':'Click the OK button to auto-backup and execute the upgrade. Major upgrades trigger automatic backup; automatic rollback on failure.',
'升级执行过程中，IDEA 底部进度条会实时显示当前操作（备份、复制模板文件、替换等）。升级完成后弹出通知':'During the upgrade, the IDEA status bar shows real-time operations (backup, copying template files, replacing, etc.). A notification pops up on completion.',
'在配置面板中点击「构建项目」按钮':'Click the Build Project button in the configuration panel.',
'勾选需要构建的模块：Server、Web、PDA。路径无效的模块自动禁用':'Check modules to build: Server, Web, PDA. Modules with invalid paths are auto-disabled.',
'版本号自动读取 Server 端当前版本并 +1（如 1.0.0 → 1.0.1）。鼠标悬浮可查看多端各自当前版本。手动修改版本号后，打包时会强制统一写入多端（含未勾选的模块），确保版本一致':'The version number auto-reads the current Server version and increments by 1 (e.g. 1.0.0 → 1.0.1). Hover to view each module\'s current version. Manual edits will be applied uniformly across all modules during packaging to ensure version consistency.',
'如需打包产物，点击浏览按钮选择输出位置。留空则只执行 make 构建，不打包':'To package artifacts, click Browse to select an output location. Leave blank to only run make without packaging.',
'系统将并行弹出独立 cmd 窗口执行 make（不占 IDEA 内存，避免卡死闪退）。进度条实时显示各模块构建状态':'The system launches independent cmd windows in parallel for make (no IDEA memory usage, preventing freezes/crashes). The progress bar shows real-time build status for each module.',
'构建过程中，IDEA 底部进度条实时显示各模块构建状态和进度百分比。独立 cmd 窗口并行执行 make，构建完成后弹出通知':'During the build, the IDEA status bar shows real-time build status and progress percentage. Independent cmd windows run make in parallel; a notification pops up on completion.',
'打开插件配置面板并切换到「代码扫描」页签，按需启用规则、设置问题级别和编辑器高亮方式':'Open the plugin settings panel, switch to the Code Scanner tab, enable rules as needed, and set severity levels and editor highlight styles.',
'在项目视图中选中文件或目录，也可以在编辑器中打开目标文件；未指定目标时将扫描整个项目。支持多选文件，测试源码默认不参与扫描':'Select files or directories in the Project view, or open the target file in the editor. If no target is specified, the entire project is scanned. Multi-select is supported; test source code is excluded by default.',
'右键 → IMS V6 Code Assistant → 代码扫描，系统仅执行当前已启用的 IMS V6 规则':'Right-click → IMS V6 Code Assistant → Code Scanner. The system only runs currently enabled IMS V6 rules.',
'扫描完成后在 IDEA 原生 Code Inspection 结果窗口中按严重级别查看问题，点击结果可直接定位到对应代码':'After scanning, view issues by severity in the native IDEA Code Inspection results window. Click a result to jump directly to the corresponding code.',
'根据问题说明修改代码；支持快捷修复的规则可在问题位置使用 IDEA Quick Fix 自动处理':'Modify code according to issue descriptions. Rules with quick fixes can be auto-resolved using IDEA Quick Fix at the issue location.',
'通过右键菜单中的「启用实时扫描 / 关闭实时扫描」控制编辑器即时检查。关闭实时扫描不会影响手动执行代码扫描':'Toggle real-time editor inspection via "Enable Live Scan / Disable Live Scan" in the right-click menu. Disabling live scan does not affect manual code scanning.',
'右键 → IMS V6 Code Assistant → 代码生成器':'Right-click → IMS V6 Code Assistant → Code Generator.',
'填写「系统编码」「创建人」「版本编码」，粘贴设计文档前 4 列。插件自动识别表名（括号内英文）和表描述（括号前中文），从 TSV 文末 pk_/uk_/ix_ 声明或第 5 列 isKey 标记回填主键与索引栏（仅填空栏，不覆盖已填内容）':'Fill in System Code, Creator, and Version Code. Paste the first 4 columns of your design doc. The plugin auto-identifies table names (English in parentheses) and descriptions (Chinese before parentheses), backfilling primary keys and indexes from pk_/uk_/ix_ declarations or the column 5 isKey markers (only fills empty fields).',
'索引栏自动回填后检查主键、唯一索引、普通索引、常用查询条件是否正确。按需勾选附件 / 提交 / 确认等操作':'After auto-filling index columns, verify primary keys, unique indexes, regular indexes, and common query conditions. Check Attachment/Submit/Confirm operations as needed.',
'对话框不关闭，后台 Task 启动；表单保留，预览取消后可继续微调':'The dialog stays open; a background Task starts. The form is preserved so you can continue tweaking after dismissing the preview.',
'原生 IDEA Editor 展示 6 个产物（ColumnDescDef/ColumnType/Selector/Table/Model/Vue）。填表窗自动隐藏，可在预览窗直接修改后确定':'Native IDEA Editor displays 6 outputs (ColumnDescDef/ColumnType/Selector/Table/Model/Vue). The form auto-hides; you can edit directly in the preview and confirm.',
'Server 端文件按位置插入到既有类体内（不覆盖整文件），Vue 写入 web 模块。通知显示新增/跳过字段数与命中来源（DB/本地/AI预翻译）':'Server files are inserted by position into existing class bodies (no full file overwrite). Vue files are written to the web module. Notifications show added/skipped field counts and source (DB/Local/AI pre-translation).',
'在编辑器中打开 ColumnType.java 或 CheckType.java':'Open ColumnType.java or CheckType.java in the editor.',
'系统显示将新增的常量数量，确认后增量写入。不会覆盖前端已有定义，仅新增缺失常量':'The system displays the number of constants to be added. Confirm for incremental write. Existing frontend definitions are never overwritten; only missing constants are added.',
'右键 → IMS V6 Code Assistant → 系统内置图标库':'Right-click → IMS V6 Code Assistant → System Built-in Icon Library.',
'在搜索框中输入关键词进行搜索。支持中文关键词搜索，多个关键词用空格分隔（AND 匹配）':'Enter keywords in the search box. Chinese keyword search is supported; multiple keywords separated by spaces (AND matching).',
'点击任意图标，其 pg-icon-xxx 代码会自动复制到剪贴板。复制成功后会显示提示气泡':'Click any icon to auto-copy its pg-icon-xxx code to the clipboard. A tooltip confirms the copy.',
'在项目视图中右键 → IMS V6 Code Assistant，选择需要启动的服务':'Right-click in the Project view → IMS V6 Code Assistant, select the service to launch.',
'首次打开模块目录时，VS Code 会显示工作区信任提示。确认目录来源可信后，点击「是，我信任作者」；如果继续询问是否允许自动任务，请选择「允许」':'When opening a module directory for the first time, VS Code shows a workspace trust prompt. After confirming the source is trusted, click "Yes, I trust the authors". If asked about auto tasks, select "Allow".',
'授权后 VS Code 会读取插件生成的 .vscode/tasks.json，并在终端自动执行任务。没有 node_modules 时先运行 npm install，再执行 npm run serve；已有依赖时直接启动服务':'After authorization, VS Code reads the plugin-generated .vscode/tasks.json and auto-executes tasks in the terminal. If node_modules is missing, it runs npm install first, then npm run serve; with existing dependencies, the server starts directly.',
'如果该目录已在 VS Code 中打开，自动任务可能不会再次触发。按 Ctrl+Shift+P，搜索并选择「任务: 运行任务」（Tasks: Run Task），再选择「npm: serve」或「npm install & serve」':'If the directory is already open in VS Code, auto tasks may not trigger again. Press Ctrl+Shift+P, search and select "Tasks: Run Task", then choose "npm: serve" or "npm install & serve".',
'终端显示编译成功后，在浏览器中打开对应页面。Web/PDA 端口可在插件配置面板中修改':'Once compilation succeeds in the terminal, open the corresponding page in your browser. Web/PDA ports can be changed in the plugin settings panel.',
'在配置面板「数据库配置」页签中添加连接（PostgreSQL / Oracle / DM 等），填写主机、端口、库名、用户名、密码':'Add connections on the Database Configuration tab (PostgreSQL/Oracle/DM, etc.), filling in host, port, database name, username, and password.',
'右键 → IMS V6 Code Assistant → Switch Database ▶，展开子菜单查看所有已配置连接。当前激活连接以 🟢 绿色圆点标识，选中即切换并写入 server/application.properties':'Right-click → IMS V6 Code Assistant → Switch Database ▶, expand the submenu to view all configured connections. The active connection is marked with a 🟢 green dot; selecting another switches and writes to server/application.properties.',
'在配置面板的「AI 模型配置」区域设置 Provider、Model、API Key 和 Endpoint。支持 OpenAI、Claude、DeepSeek 和自定义兼容 API':'Set Provider, Model, API Key, and Endpoint in the AI Model Configuration area. Supports OpenAI, Claude, DeepSeek, and custom compatible APIs.',
'在「知识库文档目录」中设置文档路径。支持 Markdown、Java、JS、SQL、XML 等多种格式':'Set the document path in Knowledge Base Directory. Supports Markdown, Java, JS, SQL, XML, and more.',
'右键 → IMS V6 Code Assistant → AI知识库(beta)，或点击右侧边栏的 V6 Knowledge QA':'Right-click → IMS V6 Code Assistant → AI Knowledge Base (beta), or click V6 Knowledge QA in the right sidebar.',
'在输入框中输入问题，按 Enter 发送。Enter 发送，Shift+Enter 换行。AI 会基于知识库文档进行回答':'Type your question in the input box and press Enter to send. Enter to send, Shift+Enter for newline. AI answers based on the knowledge base documents.',
'使用工具栏按钮清空对话历史或停止生成。AI 回复语言会跟随插件的语言设置自动切换':'Use toolbar buttons to clear conversation history or stop generation. AI reply language auto-follows the plugin language setting.',
'是否支持在同一 IDEA 窗口中打开多个项目？':'Can multiple projects be opened in the same IDEA window?',
'暂不支持在同一 IDEA 窗口中同时打开或附加多个项目，否则不同项目的插件配置可能互相覆盖。建议每个项目使用独立的 IDEA 窗口打开，确保配置相互隔离。':'Opening multiple projects in the same IDEA window is not supported, as plugin configurations from different projects may overwrite each other. We recommend opening each project in its own IDEA window for isolated configurations.',
'插件支持哪些 IntelliJ IDEA 版本？':'Which IntelliJ IDEA versions are supported?',
'支持 IntelliJ IDEA 2023.1 及以上版本，包括 Ultimate 和 Community 版本。':'Supports IntelliJ IDEA 2023.1 and above, including Ultimate and Community editions.',
'如何切换插件语言？':'How to switch the plugin language?',
'在配置面板中可以切换中文/英文，切换后整个插件界面（包括菜单、对话框、通知、手册）都会实时更新。':'You can switch between Chinese and English in the configuration panel. After switching, the entire plugin UI (menus, dialogs, notifications, manual) updates in real time.',
'多端版本不一致怎么办？':'What to do when multi-end versions differ?',
'配置面板会自动检测多端版本，不一致时弹出警告通知。你可以使用「升级版本」功能统一升级，或在「构建项目」时强制统一版本号。':'The configuration panel auto-detects version differences and shows a warning. Use the Upgrade Version feature to unify, or force version unification during Build Project.',
'构建时 IDEA 卡死怎么办？':'What if IDEA freezes during build?',
'IMS V6 Code Assistant 使用独立 cmd 窗口执行 make，不占用 IDEA 内存。如果仍然卡顿，请检查项目路径配置是否正确。':'IMS V6 Code Assistant uses independent cmd windows for make, not consuming IDEA memory. If you still experience lag, verify your project path configuration.',
'回到顶部':'Back to Top',
// Additional missing translations
'今日访问':'Today','累计访问':'All time','次':'views',
'使用说明':'User Guide',
'快速上手视频':'Quick Start Video','用一段完整演示了解插件配置与使用步骤':'See plugin configuration and usage steps in one complete walkthrough.','您的浏览器不支持视频播放。':'Your browser does not support video playback.',
'集成统一配置面板':'Integrated Unified Config Panel','一键初始化':'One-Click Init','新项目初始化模板':'New Project Init Template','实时检测、快捷修复':'Real-Time Scan, Quick Fix','版本升级':'Version Upgrade','一键升级、自动备份':'One-Click Upgrade, Auto Backup','构建打包':'Build & Package','并行构建统一输出':'Parallel Build, Unified Output','表结构生成代码模板':'Generate Code from Table Structure',
'面向 Pangus IMS V6 项目的 IntelliJ IDEA 插件，集成多个自动化功能，减少重复操作，提升开发效率。':'An IntelliJ IDEA plugin for Pangus IMS V6 projects, integrating multiple automated features to reduce repetitive operations and improve development efficiency.',
'项目初始化、版本升级、项目构建打包、代码扫描、代码生成器……':'Project Init, Version Upgrade, Build & Package, Code Scanner, Code Generator...',
'每个功能的详细操作步骤，帮助你快速上手':'Detailed steps for each feature to help you get started quickly',
'IDEA内置配置统一集中面板，省去繁琐步骤，一次配置全局生效，多端路径、端口管理，版本不一致自动告警，自动初始化IMS V6模板工程':'Built-in unified configuration panel in IDEA, saving tedious steps. One-time config takes effect globally. Multi-end path and port management. Auto-alert on version mismatch. Auto-init IMS V6 template project.',
'自动识别分类升级类型，升级前自动备份，支持多端独立升级。底部进度条实时显示操作状态，事务化暂存/回滚保障安全。':'Auto-detect upgrade type. Auto-backup before upgrade. Supports independent multi-end upgrades. Status bar shows real-time progress. Transactional staging/rollback ensures safety.',
'选择模块、统一版本号，独立窗口并行 make 构建，自动打包 zip 到输出目录，版本号自动读取 Server 端并默认 +1，强制统一写入多端。':'Select modules, unify version numbers. Parallel make in independent windows. Auto-package zip to output directory. Version auto-reads from Server and increments by 1. Force-writes uniformly across all modules.',
'基于 IMS V6 开发规范检查 Java 代码，支持实时检测、按文件/目录/项目扫描，并为部分问题提供快捷修复。':'Checks Java code against IMS V6 development standards. Supports real-time scanning by file/directory/project. Quick fixes available for certain issues.',
'复制文档表结构，生成骨架代码，支持预览窗微调后直接写入文件，支持转义值常量命名':'Copy table structure from documentation to generate skeleton code. Supports preview fine-tuning before writing to file. Supports escaped constant naming.',
'Java 常量一键同步至前端 JS（支持全量/增量/自定义字段），内置图标库支持中文关键词搜索，点击图标自动复制 pg-icon 代码到剪贴板。':'One-click sync Java constants to frontend JS (full/incremental/custom fields). Built-in icon library with Chinese keyword search. Click icon to auto-copy pg-icon code to clipboard.',
'集中面板':'Centralized Panel','多端管理':'Multi-End Mgmt','自动配置':'Auto Config','自动备份':'Auto Backup','回滚保护':'Rollback Protection','分类升级':'Categorized Upgrade','自动打包':'Auto Package','统一输出':'Unified Output','规范检查':'Standards Check','实时检测':'Real-Time Detection','快捷修复':'Quick Fix','复刻平台':'Platform Replica','自动识别':'Auto Recognition','一键写入':'One-Click Write','中文搜索':'Chinese Search','一键复制':'One-Click Copy'
};

let CURRENT_LANG=localStorage.getItem('ims-manual-lang')||'zh';
function switchLang(){
CURRENT_LANG=CURRENT_LANG==='zh'?'en':'zh';
localStorage.setItem('ims-manual-lang',CURRENT_LANG);
applyLang(CURRENT_LANG);
updateLangUI();
}
const _zhBackup=new WeakMap();
function applyLang(lang){
const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
while(w.nextNode()){
const n=w.currentNode,p=n.parentElement;
if(!p)continue;
const t=p.tagName;
if(t==='SCRIPT'||t==='STYLE'||t==='SVG'||t==='TITLE'||t==='G'||t==='PATH'||t==='POLYGON'||t==='CIRCLE'||t==='RECT'||t==='ELLIPSE'||t==='LINE'||t==='DEFS'||t==='STOP'||t==='LINEARGRADIENT')continue;
if(p.closest('svg'))continue;
if(p.id==='typewriterTarget')continue;
if(p.closest('#langToggle'))continue;
const s=n.textContent.trim();
if(lang==='zh'){
if(_zhBackup.has(n))n.textContent=_zhBackup.get(n);
continue;
}
if(!s||!(s in I18N_DICT))continue;
if(lang==='en'){
if(!_zhBackup.has(n))_zhBackup.set(n,n.textContent);
n.textContent=I18N_DICT[s];
}
}
}
function updateLangUI(){
const lbl=document.getElementById('langLabel');
if(lbl)lbl.textContent=CURRENT_LANG==='zh'?'EN':'中';
document.documentElement.lang=CURRENT_LANG==='zh'?'zh-CN':'en';
const btn=document.getElementById('langToggle');
if(btn)btn.title=CURRENT_LANG==='zh'?'Switch to English':'切换到中文';
}
(function(){
updateLangUI();
if(CURRENT_LANG==='en')setTimeout(function(){applyLang('en');},150);
const langToggle=document.getElementById('langToggle');
if(langToggle)langToggle.addEventListener('click',switchLang);
})();

// Typewriter
(function() {
    var phrases = ['IMS V6 Code Assistant','IMS V6 IDEA Plugin'];
    var target = document.getElementById('typewriterTarget');
    if (!target) return;
    var phraseIdx = 0, charIdx = 0, deleting = false, timer = null;
    function tick() {
        var current = phrases[phraseIdx];
        if (!deleting) {
            charIdx++;
            target.textContent = current.slice(0, charIdx);
            if (charIdx === current.length) {
                if (phraseIdx === phrases.length - 1) return;
                timer = setTimeout(function() { deleting = true; tick(); }, 2200);
                return;
            }
            timer = setTimeout(tick, 80);
        } else {
            charIdx--;
            target.textContent = current.slice(0, charIdx);
            if (charIdx === 0) {
                deleting = false; phraseIdx++;
                timer = setTimeout(tick, 400);
                return;
            }
            timer = setTimeout(tick, 35);
        }
    }
    tick();
})();

// Manual feature tabs
var manualItems = Array.from(document.querySelectorAll('.sidebar-nav-item'));
var manualSections = Array.from(document.querySelectorAll('.manual-section'));
function showManualSection(id, shouldScroll) {
    var target = document.getElementById('section-' + id);
    if (!target) return;
    manualItems.forEach(function(item) {
        var active = item.dataset.section === id;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', active ? 'true' : 'false');
        item.tabIndex = active ? 0 : -1;
    });
    manualSections.forEach(function(section) {
        var active = section === target;
        var sectionId = section.id.replace('section-', '');
        section.setAttribute('role', 'tabpanel');
        section.setAttribute('aria-labelledby', 'manual-tab-' + sectionId);
        section.classList.toggle('is-active', active);
        section.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    var activeItem = manualItems.find(function(item) { return item.dataset.section === id; });
    var list = document.querySelector('.manual-sidebar-list');
    if (activeItem && list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: activeItem.offsetLeft - (list.clientWidth - activeItem.offsetWidth) / 2, behavior: 'smooth' });
    }
    if (shouldScroll) {
        window.requestAnimationFrame(function() {
            document.getElementById('manual').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

manualItems.forEach(function(item) {
    item.addEventListener('click', function() {
        showManualSection(item.dataset.section, true);
        history.replaceState(null, '', '#section-' + item.dataset.section);
    });
    item.addEventListener('keydown', function(event) {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        var direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
        var nextIndex = (manualItems.indexOf(item) + direction + manualItems.length) % manualItems.length;
        var nextItem = manualItems[nextIndex];
        showManualSection(nextItem.dataset.section, false);
        history.replaceState(null, '', '#section-' + nextItem.dataset.section);
        nextItem.focus();
    });
});

var initialManualSection = location.hash.indexOf('#section-') === 0 ? location.hash.replace('#section-', '') : 'settings';
showManualSection(initialManualSection, false);

// Feature cards open the matching chapter on the standalone manual page.
document.querySelectorAll('.glass-card[data-manual]').forEach(function(card) {
    card.addEventListener('click', function() {
        window.location.href = 'manual.html#section-' + card.dataset.manual;
    });
});

// Back to top
(function() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function() {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();
