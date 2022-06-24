// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-190tdcp.svelte-190tdcp{text-align:center}.App.svelte-190tdcp code.svelte-190tdcp{background:#0002;padding:4px 8px;border-radius:4px}.App.svelte-190tdcp p.svelte-190tdcp{margin:0.4rem}.App-header.svelte-190tdcp.svelte-190tdcp{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-link.svelte-190tdcp.svelte-190tdcp{color:#ff3e00}.App-logo.svelte-190tdcp.svelte-190tdcp{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-190tdcp-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-190tdcp-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}