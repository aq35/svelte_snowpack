// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "section.svelte-pqa6i5{width:1000px;display:grid;grid-template-columns:1fr 1fr;padding:16px;box-shadow:2px 2px 4px #dedede;border:1px solid #888;margin-bottom:16px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}