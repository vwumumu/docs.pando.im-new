import{_ as e,c as a,o as t,N as o}from"./chunks/framework.0799945b.js";const g=JSON.parse('{"title":"Trouble shooting","description":"","frontmatter":{},"headers":[],"relativePath":"manual/troubleshooting.md"}'),n={name:"manual/troubleshooting.md"},s=o(`<h1 id="trouble-shooting" tabindex="-1">Trouble shooting <a class="header-anchor" href="#trouble-shooting" aria-label="Permalink to &quot;Trouble shooting&quot;">​</a></h1><h2 id="mixin-server-encounters-errors" tabindex="-1">Mixin server encounters errors <a class="header-anchor" href="#mixin-server-encounters-errors" aria-label="Permalink to &quot;Mixin server encounters errors&quot;">​</a></h2><p>If you&#39;re using Mixin Messenger, you may encounter the following error message when you try to send a transaction:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Mixin server encounters errors</span></span></code></pre></div><p>A possible reason is that the asset in your transaction has too much UTXOs which exceed 256 and the transaction cannot be completed by Mixin Messenger&#39;s endpoint in time.</p><p>Solution:</p><ol><li>Try to send the transaction again.</li><li>Transfer the ENTIRE asset you want to send to another wallet, and then send the transaction again.</li></ol><h2 id="why-did-my-swap-liquidity-transaction-fail" tabindex="-1">Why did my swap/liquidity transaction fail? <a class="header-anchor" href="#why-did-my-swap-liquidity-transaction-fail" aria-label="Permalink to &quot;Why did my swap/liquidity transaction fail?&quot;">​</a></h2><p>In some cases, your transaction may fail due to the following reasons: The slippage tolerance is too low. Please try to increase the slippage tolerance and try again.</p><p>You can also solve this problem by splitting an order into multiple orders, reducing the amount of each transaction, and conducting multiple transactions.</p><p>Please read the details of slippage tolerance <a href="./trade.html#slippage-tolerance">here</a>.</p><h2 id="this-webpage-can-t-be-reached" tabindex="-1">This webpage can&#39;t be reached <a class="header-anchor" href="#this-webpage-can-t-be-reached" aria-label="Permalink to &quot;This webpage can&#39;t be reached&quot;">​</a></h2><p>If you encounter the following error message when you try to access Pando:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This webpage can&#39;t be reached</span></span>
<span class="line"><span style="color:#A6ACCD;">It took too long to respond. Please check your network and try to switch 4G, Wi-Fi or VPN to reload the page.</span></span></code></pre></div><p>Please try the following solutions:</p><ol><li>Check your network connection. If you&#39;re using a VPN, please try to switch to another VPN server.</li><li>If you&#39;re living in China, please try hard to overcome the network blockade. You can try to use a VPN or a proxy server.</li></ol>`,16),r=[s];function i(l,c,h,p,d,u){return t(),a("div",null,r)}const m=e(n,[["render",i]]);export{g as __pageData,m as default};
