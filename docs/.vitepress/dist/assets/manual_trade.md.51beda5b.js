import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const f=JSON.parse('{"title":"Trade","description":"","frontmatter":{},"headers":[],"relativePath":"manual/trade.md"}'),r={name:"manual/trade.md"},i=o('<h1 id="trade" tabindex="-1">Trade <a class="header-anchor" href="#trade" aria-label="Permalink to &quot;Trade&quot;">​</a></h1><h2 id="slippage-tolerance" tabindex="-1">Slippage Tolerance <a class="header-anchor" href="#slippage-tolerance" aria-label="Permalink to &quot;Slippage Tolerance&quot;">​</a></h2><p>slippage tolerance is a parameter that controls the tolerance of the transaction amount.</p><p>The greater the slippage tolerance, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses.</p><p>The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page.</p><p>The default value of slippage tolerance is 0.1%. You can set the slippage tolerance to any value between 0% and 100%.</p><p>When the actual transaction differs from the estimated transaction amount more than slippage tolerance, Pando will reject the transaction and refund.</p><h2 id="swap-fee" tabindex="-1">Swap Fee <a class="header-anchor" href="#swap-fee" aria-label="Permalink to &quot;Swap Fee&quot;">​</a></h2><p>Swap fee is the fee charged for each transaction. The swap fee is 0.3% by default for most of liquidity pools. For curve liquidity pools, the swap fee is 0.04%. At present, the curve liquidity pools are pUSD-USDT(ERC-20), pUSD-USDT(TRC-20), pUSD-USDC, pUSD-DAI, and BTC-wBTC.</p><p>The swap fee is charged to the token you are swapping out.</p><h2 id="impermanent-loss" tabindex="-1">Impermanent Loss <a class="header-anchor" href="#impermanent-loss" aria-label="Permalink to &quot;Impermanent Loss&quot;">​</a></h2><p>Adding liquidity is not without risk, as you may be exposed to impermanent loss.</p><p>Impermanent loss is a term used to describe the loss that liquidity providers may experience when they deposit their funds into a liquidity pool. This occurs when the price of the two assets in the pool changes relative to each other.</p><p>You may want to read <a href="https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22" target="_blank" rel="noreferrer">this post</a> to learn more about impermanent loss.</p><h2 id="liquidity-provider-token-lp-token" tabindex="-1">Liquidity Provider Token (LP Token) <a class="header-anchor" href="#liquidity-provider-token-lp-token" aria-label="Permalink to &quot;Liquidity Provider Token (LP Token)&quot;">​</a></h2><p>Liquidity Provider Token (short for &quot;LP token&quot;() refers to the liquidity that is provided by liquidity providers (LPs) who deposit their funds into a liquidity pool in exchange for LP tokens.</p><p>LP tokens are used to track individual contributions to the overall liquidity pool, as LP tokens held correspond proportionally to the share of liquidity in the overall pool.</p><p>At the most basic level, LP tokens work on the following formula:</p><p><code>Total Value of Liquidity Pool / Circulating Supply of LP Tokens = Value of 1 LP Token</code></p><p>Just like other assets, the LP tokens can be transerred and traded.</p><p>Whenever a swapping occurs, swap fees is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade.</p><p>To retrieve the underlying liquidity, plus any fees accrued, liquidity providers can remove liquidity, give back their liquidity tokens. This will allow them to exchange LP tokens for their portion of the liquidity pool, plus the proportional fee allocation.</p><h2 id="automated-market-maker-amm" tabindex="-1">Automated Market Maker (AMM) <a class="header-anchor" href="#automated-market-maker-amm" aria-label="Permalink to &quot;Automated Market Maker (AMM)&quot;">​</a></h2><p>An automated market maker (short for &quot;AMM&quot;) is a system that provides liquidity to the exchange it operates in through automated trading.</p><p>AMM systems took off after they were first implemented by Shearson Lehman Brothers and ATD in the early 1990s — before their invention, order books were created by humans who manually initiated trades meant to enhance the liquidity of the market.</p><p>This approach was the reason for some slippage and latency in price discovery on the markets. Furthermore, market makers were also accused of market manipulation. When introduced, AMMs solved all the issues caused by human market makers. Now, these types of systems are also being introduced in blockchain-based decentralized exchanges.</p><p>On AMM-based decentralized exchanges, the traditional order book is replaced by liquidity pools that are pre-funded on-chain for both assets of the trading pair. The liquidity is provided by other users who also earn passive income on their deposit through trading fees based on the percentage of the liquidity pool that they provide.</p><p>Pando Proto uses AMM to provide swap service to users.</p><p>To learn more about AMM, check out <a href="https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm" target="_blank" rel="noreferrer">What Is an Automated Market Maker</a></p>',29),s=[i];function n(l,h,p,d,c,u){return a(),t("div",null,s)}const k=e(r,[["render",n]]);export{f as __pageData,k as default};
