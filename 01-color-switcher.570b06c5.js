const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let o;t.addEventListener("click",(()=>{t.disabled=!0,o=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.570b06c5.js.map