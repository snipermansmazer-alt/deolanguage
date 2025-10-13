<!DOCTYPE html>
<html lang="la-x-liturgica">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Lingua Deonic — Translator</title>
<style>
  :root{
    --bg:#f9f8f6; --ink:#1e1b16; --panel:#f1ede5; --accent:#d3c8a6; --accent-2:#c5b88e;
    --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
    --serif: "Garamond", "Times New Roman", serif;
  }
  body{font-family:var(--serif); background:var(--bg); color:var(--ink); padding:2rem; line-height:1.6;}
  h1{text-align:center; font-variant:small-caps; margin-top:0;}
  #translatorBox{max-width:900px; margin:0 auto; text-align:center;}
  textarea{width:95%; height:220px; font-size:1.05rem; border-radius:10px; border:1px solid #b5a97f;
           padding:12px; resize:vertical; background:#fffaf3;}
  button{padding:10px 20px; font-size:1.05rem; border-radius:10px; border:none;
         background:var(--accent); cursor:pointer; margin:10px 6px 0;}
  button:hover{background:var(--accent-2);}
  .panel{margin:22px auto 0; text-align:left; background:var(--panel); padding:16px; border-radius:12px;}
  #output, #meta{white-space:pre-wrap;}
  .mono{font-family:var(--mono); font-size:.95rem;}
</style>
</head>
<body>

<h1>Lingua Deonic — Translator</h1>

<div id="translatorBox">
  <textarea id="inputWord" placeholder="Paste or type text here..."></textarea><br/>
  <button id="translateBtn">Translate</button>
  <button id="copyBtn" title="Copy Deonic translation">Copy</button>

  <div id="output" class="panel mono"></div>
</div>

<script src="translator.js"></script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const translateBtn = document.getElementById("translateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const output = document.getElementById("output");

  if (translateBtn) translateBtn.addEventListener("click", translateText);
  if (copyBtn) copyBtn.addEventListener("click", () => {
    const text = output.innerText || "";
    if (text.trim()) {
      navigator.clipboard.writeText(text);
      alert("Deonic translation copied to clipboard!");
    }
  });
});
</script>

</body>
</html>
