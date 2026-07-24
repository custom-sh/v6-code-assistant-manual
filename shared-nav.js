// Baidu Tongji: all site pages load this shared script once.
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a00ed3cbf4053011a537305cd1abfe18";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

(function () {
    const LANGUAGE_ICON = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h2M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>';

    class SharedNav extends HTMLElement {
        connectedCallback() {
            const currentPage = this.getAttribute('current-page') || 'home';
            const current = (page) => currentPage === page ? ' is-active' : '';
            const ariaCurrent = (page) => currentPage === page ? ' aria-current="page"' : '';

            this.innerHTML = `
                <nav class="shared-site-nav" aria-label="主导航">
                    <div class="shared-nav-inner">
                        <div class="shared-nav-leading">
                            <a class="shared-brand" href="index.html" aria-label="IMS V6 Code Assistant">
                                <img class="shared-brand-logo" src="v6-logo.svg" alt="" aria-hidden="true">
                                <span class="shared-brand-name">IMS V6 Code Assistant</span>
                            </a>
                            <div class="shared-nav-links" role="list">
                                <a href="manual.html" class="shared-nav-link nav-link${current('manual')}"${ariaCurrent('manual')} data-zh="使用说明" data-en="User Guide">使用说明</a>
                                <a href="faq.html" class="shared-nav-link nav-link${current('faq')}"${ariaCurrent('faq')} data-zh="常见问题" data-en="FAQ">常见问题</a>
                                <a href="change-notes.html" class="shared-nav-link nav-link changelog-link${current('changelog')}"${ariaCurrent('changelog')} data-zh="更新日志" data-en="Changelog">更新日志</a>
                            </div>
                        </div>
                        <div class="shared-nav-actions">
                            <button class="shared-lang-toggle lang-toggle" id="langToggle" type="button" title="Switch to English">
                                ${LANGUAGE_ICON}<span id="langLabel">EN</span>
                            </button>
                        </div>
                    </div>
                </nav>`;
        }
    }

    customElements.define('shared-nav', SharedNav);
})();
