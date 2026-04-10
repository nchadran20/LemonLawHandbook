(function () {
  var articleBody = document.querySelector('.article-body');
  if (!articleBody) return;

  var path = window.location.pathname;
  var skipPages = ['/about.html', '/contact.html', '/privacy.html', '/disclaimer.html'];
  if (skipPages.some(function(p) { return path === p; })) return;

  var bar = document.createElement('div');
  bar.className = 'editorial-bar';
  bar.innerHTML = [
    '<div class="editorial-bar-inner">',
      '<div class="editorial-icon">⚖️</div>',
      '<div class="editorial-text">',
        '<strong>Researched by the Lemon Law Handbook Editorial Team</strong>',
        '<span>All lemon law information is sourced from official state statutes, FTC consumer protection publications, and NHTSA vehicle safety data. State-specific laws are verified against current legislation. <strong>This content is for informational purposes only and does not constitute legal advice.</strong> For your specific situation, consult a licensed lemon law attorney — most offer free consultations.</span>',
      '</div>',
      '<div class="editorial-updated">',
        '<span class="editorial-updated-label">Last Reviewed</span>',
        '<span class="editorial-updated-date" id="ll-review-date"></span>',
      '</div>',
    '</div>'
  ].join('');

  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var now = new Date();
  bar.querySelector('#ll-review-date').textContent = months[now.getMonth()] + ' ' + now.getFullYear();

  var style = document.createElement('style');
  style.textContent = [
    '.editorial-bar {',
      'background: #0c1e35;',
      'border-radius: 10px;',
      'padding: 14px 18px;',
      'margin: 0 0 2rem 0;',
      'border-left: 4px solid #c9a84c;',
    '}',
    '.editorial-bar-inner {',
      'display: flex;',
      'align-items: flex-start;',
      'gap: 12px;',
    '}',
    '.editorial-icon {',
      'font-size: 1.2rem;',
      'flex-shrink: 0;',
      'margin-top: 2px;',
    '}',
    '.editorial-text {',
      'flex: 1;',
      'font-size: 0.83rem;',
      'color: rgba(255,255,255,0.75);',
      'line-height: 1.55;',
    '}',
    '.editorial-text strong {',
      'color: #c9a84c;',
      'display: block;',
      'margin-bottom: 3px;',
      'font-size: 0.82rem;',
    '}',
    '.editorial-text strong:last-of-type {',
      'display: inline;',
      'color: rgba(255,255,255,0.9);',
    '}',
    '.editorial-updated {',
      'flex-shrink: 0;',
      'text-align: right;',
      'font-size: 0.78rem;',
    '}',
    '.editorial-updated-label {',
      'display: block;',
      'color: rgba(255,255,255,0.4);',
      'text-transform: uppercase;',
      'letter-spacing: 0.07em;',
      'font-size: 0.7rem;',
      'margin-bottom: 2px;',
    '}',
    '.editorial-updated-date {',
      'color: rgba(255,255,255,0.7);',
      'font-weight: 600;',
      'white-space: nowrap;',
    '}',
    '@media (max-width: 600px) {',
      '.editorial-bar-inner { flex-wrap: wrap; }',
      '.editorial-updated { text-align: left; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  articleBody.insertBefore(bar, articleBody.firstChild);
})();
