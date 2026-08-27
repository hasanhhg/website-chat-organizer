/*
 * Cookie consent + analytics loader for chat-organizer.com
 *
 * Implements Google Consent Mode v2: analytics/ad storage default to "denied"
 * and are only granted after the visitor accepts in the banner. Google
 * Analytics (gtag.js) is loaded here so nothing tracks before consent state
 * is set.
 *
 * To enable Microsoft Clarity (session replay / heatmaps):
 *   1. Set CLARITY_ID below to your Clarity project id.
 *   2. Add these origins to the Content-Security-Policy meta tag on every page:
 *        script-src  : https://*.clarity.ms   (NOT just www.clarity.ms — the
 *                      loader pulls the real recorder from scripts.clarity.ms,
 *                      so a www-only script-src silently blocks all recording)
 *        img-src     : https://*.clarity.ms
 *        connect-src : https://*.clarity.ms https://c.bing.com
 * Clarity then loads only after consent, just like GA.
 */
(function () {
  var GA_ID      = 'G-EZG37BF12B';
  var CLARITY_ID = 'x2f2g5ok4y';      // Microsoft Clarity project ID
  var STORE_KEY  = 'co-consent';       // 'granted' | 'denied'

  // ── Consent Mode v2 bootstrap (must run before gtag.js executes) ──────────
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });

  function getStored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function setStored(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) {}
  }

  function grantConsent() {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted'
    });
  }
  function denyConsent() {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied'
    });
  }

  var clarityLoaded = false;
  function loadClarity() {
    if (clarityLoaded || !CLARITY_ID) return;
    clarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  // ── Fire analytics config + load the gtag.js library ──────────────────────
  var choice = getStored();
  if (choice === 'granted') grantConsent();

  gtag('js', new Date());
  gtag('config', GA_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  if (choice === 'granted') loadClarity();

  // ── Banner ────────────────────────────────────────────────────────────────
  var B = {
    en: { msg: "We use analytics cookies to understand how visitors use this site.", accept: "Accept", decline: "Decline", privacy: "Privacy policy", settings: "Cookie settings" },
    nl: { msg: "We gebruiken analytische cookies om te begrijpen hoe bezoekers deze site gebruiken.", accept: "Accepteren", decline: "Weigeren", privacy: "Privacybeleid", settings: "Cookie-instellingen" },
    fr: { msg: "Nous utilisons des cookies d'analyse pour comprendre comment les visiteurs utilisent ce site.", accept: "Accepter", decline: "Refuser", privacy: "Politique de confidentialité", settings: "Paramètres des cookies" },
    de: { msg: "Wir verwenden Analyse-Cookies, um zu verstehen, wie Besucher diese Website nutzen.", accept: "Zustimmen", decline: "Ablehnen", privacy: "Datenschutz", settings: "Cookie-Einstellungen" },
    es: { msg: "Usamos cookies de análisis para entender cómo los visitantes usan este sitio.", accept: "Aceptar", decline: "Rechazar", privacy: "Política de privacidad", settings: "Configuración de cookies" },
    zh: { msg: "我们使用分析 Cookie 来了解访问者如何使用本网站。", accept: "接受", decline: "拒绝", privacy: "隐私政策", settings: "Cookie 设置" },
    pt: { msg: "Usamos cookies analíticos para entender como os visitantes usam este site.", accept: "Aceitar", decline: "Recusar", privacy: "Política de privacidade", settings: "Configurações de cookies" },
    ja: { msg: "当サイトの利用状況を把握するため、分析 Cookie を使用しています。", accept: "同意する", decline: "拒否する", privacy: "プライバシーポリシー", settings: "Cookie 設定" },
    ru: { msg: "Мы используем аналитические файлы cookie, чтобы понять, как посетители используют этот сайт.", accept: "Принять", decline: "Отклонить", privacy: "Политика конфиденциальности", settings: "Настройки файлов cookie" },
    ar: { msg: "نستخدم ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الزوار لهذا الموقع.", accept: "قبول", decline: "رفض", privacy: "سياسة الخصوصية", settings: "إعدادات ملفات تعريف الارتباط" },
    hi: { msg: "हम इस साइट को विज़िटर कैसे उपयोग करते हैं, यह समझने के लिए विश्लेषण कुकीज़ का उपयोग करते हैं।", accept: "स्वीकार करें", decline: "अस्वीकार करें", privacy: "गोपनीयता नीति", settings: "Cookie सेटिंग्स" },
    id: { msg: "Kami menggunakan cookie analitik untuk memahami bagaimana pengunjung menggunakan situs ini.", accept: "Terima", decline: "Tolak", privacy: "Kebijakan privasi", settings: "Pengaturan cookie" },
    it: { msg: "Utilizziamo cookie analitici per capire come i visitatori usano questo sito.", accept: "Accetta", decline: "Rifiuta", privacy: "Informativa sulla privacy", settings: "Impostazioni cookie" },
    tr: { msg: "Ziyaretçilerin bu siteyi nasıl kullandığını anlamak için analitik çerezler kullanıyoruz.", accept: "Kabul et", decline: "Reddet", privacy: "Gizlilik politikası", settings: "Çerez ayarları" }
  };

  function getLang() {
    try {
      var p = new URLSearchParams(location.search).get('lang');
      if (p && B[p]) return p;
      var st = localStorage.getItem('co-lang');
      if (st && B[st]) return st;
    } catch (e) {}
    var n = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return B[n] ? n : 'en';
  }

  var stylesInjected = false;
  function injectStyles() {
    if (stylesInjected) return;
    stylesInjected = true;
    var css =
      '#co-consent{position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:720px;margin:0 auto;' +
      'background:#fff;border:1px solid #E4E7EC;border-radius:12px;box-shadow:0 12px 40px rgba(20,23,28,.18);' +
      'padding:14px 16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;' +
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif}" +
      '.co-consent-msg{margin:0;flex:1;min-width:0;font-size:.85rem;line-height:1.5;color:#475569}' +
      '.co-consent-link{color:#334155;text-decoration:underline;white-space:nowrap}' +
      '.co-consent-btns{display:flex;gap:8px;flex-shrink:0}' +
      '.co-consent-btn{font-family:inherit;font-size:.82rem;font-weight:700;padding:9px 18px;border-radius:8px;' +
      'cursor:pointer;border:1px solid transparent;transition:background .15s,border-color .15s;white-space:nowrap}' +
      '.co-consent-decline{background:transparent;border-color:#E4E7EC;color:#475569}' +
      '.co-consent-decline:hover{border-color:#94A3B8}' +
      '.co-consent-accept{background:#334155;color:#fff}' +
      '.co-consent-accept:hover{background:#1E293B}' +
      'body:has(#co-consent){padding-bottom:104px}' +
      '@media(max-width:600px){' +
      '#co-consent{flex-direction:column;align-items:stretch;gap:10px;padding:14px 14px 12px;bottom:0;left:0;right:0;border-radius:14px 14px 0 0}' +
      '.co-consent-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px}' +
      '.co-consent-btn{padding:11px 10px;text-align:center}' +
      'body:has(#co-consent){padding-bottom:136px}' +
      '}';
    var el = document.createElement('style');
    el.textContent = css;
    document.head.appendChild(el);
  }

  // Update text in an already-visible banner and all footer cookie-settings links
  function applyLangToBanner(lang) {
    var t = B[lang] || B.en;
    var bar = document.getElementById('co-consent');
    if (bar) {
      var msgEl  = bar.querySelector('.co-consent-msg');
      var linkEl = bar.querySelector('.co-consent-link');
      var acc    = bar.querySelector('.co-consent-accept');
      var dec    = bar.querySelector('.co-consent-decline');
      if (msgEl)  { msgEl.childNodes[0].nodeValue = t.msg + ' '; }
      if (linkEl) { linkEl.textContent = t.privacy; }
      if (acc)    { acc.textContent = t.accept; }
      if (dec)    { dec.textContent = t.decline; }
      bar.setAttribute('aria-label', t.settings);
    }
    document.querySelectorAll('[data-cookie-settings]').forEach(function (a) {
      a.textContent = t.settings;
    });
  }

  function showBanner() {
    if (document.getElementById('co-consent')) return;
    var t = B[getLang()] || B.en;
    injectStyles();

    var bar = document.createElement('div');
    bar.id = 'co-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', t.settings);

    var msg = document.createElement('p');
    msg.className = 'co-consent-msg';
    msg.appendChild(document.createTextNode(t.msg + ' '));
    var link = document.createElement('a');
    link.className = 'co-consent-link';
    link.href = 'privacy.html';
    link.textContent = t.privacy;
    msg.appendChild(link);

    var btns = document.createElement('div');
    btns.className = 'co-consent-btns';
    var decline = document.createElement('button');
    decline.type = 'button';
    decline.className = 'co-consent-btn co-consent-decline';
    decline.textContent = t.decline;
    var accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'co-consent-btn co-consent-accept';
    accept.textContent = t.accept;

    function close() { if (bar.parentNode) bar.parentNode.removeChild(bar); }
    decline.addEventListener('click', function () { setStored('denied'); denyConsent(); close(); });
    accept.addEventListener('click', function () { setStored('granted'); grantConsent(); loadClarity(); close(); });

    btns.appendChild(decline);
    btns.appendChild(accept);
    bar.appendChild(msg);
    bar.appendChild(btns);
    document.body.appendChild(bar);
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    if (!getStored()) showBanner();

    var t = B[getLang()] || B.en;
    document.querySelectorAll('[data-cookie-settings]').forEach(function (a) {
      a.textContent = t.settings;
      a.addEventListener('click', function (e) { e.preventDefault(); showBanner(); });
    });

    // Keep banner and footer links in sync when user switches language
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.dataset.lang;
        if (lang && B[lang]) {
          applyLangToBanner(lang);
          // Track which languages visitors actually switch to (justifies translations)
          gtag('event', 'language_select', { selected_language: lang });
          if (window.clarity) window.clarity('set', 'language', lang);
        }
      });
    });

    // Track "Add to Chrome" clicks as GA4 conversions
    // Each button gets a location label so you can see which section converts best
    var CWS = 'chromewebstore.google.com';
    var locationMap = {
      'nav-cta':  'nav',
      'btn-primary': 'hero',
      'btn-band': 'mid_band',
      'btn-white': 'bottom_cta'
    };
    document.querySelectorAll('a[href*="' + CWS + '"]').forEach(function (a) {
      var location = 'footer';
      for (var cls in locationMap) {
        if (a.classList.contains(cls)) { location = locationMap[cls]; break; }
      }
      a.addEventListener('click', function () {
        gtag('event', 'add_to_chrome', { button_location: location });
        // Tag the Clarity session so you can filter recordings of people who
        // actually clicked install (converters) vs everyone else.
        if (window.clarity) {
          window.clarity('set', 'clicked_install', location);
          window.clarity('upgrade', 'add_to_chrome');
        }
      });
    });
  });
})();
