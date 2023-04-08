import{_ as a,c as e,o as t,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"铸造稳定币 pUSD","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/mint.md"}'),o={name:"zh/manual/mint.md"},n=r('<h1 id="铸造稳定币-pusd" tabindex="-1">铸造稳定币 pUSD <a class="header-anchor" href="#铸造稳定币-pusd" aria-label="Permalink to &quot;铸造稳定币 pUSD&quot;">​</a></h1><p>Pando Proto 有一个名为“Leaf”的协议，它是一个由 Mixin MTG（Mixin Trusted Group）技术构建的去中心化金融网络，你可以在这里存入抵押品以生成和销毁 Pando USD(pUSD)，并在还款时销毁已铸造的 pUSD 余额。</p><h2 id="pando-leaf-如何运作" tabindex="-1">Pando Leaf 如何运作？ <a class="header-anchor" href="#pando-leaf-如何运作" aria-label="Permalink to &quot;Pando Leaf 如何运作？&quot;">​</a></h2><p>抵押资产和还款铸造的 pUSD 余额都是在 Vault（金库）中完成的。</p><ul><li>金库不是免费的。生成稳定币需要支付稳定费。要收回抵押资产，用户必须偿还之前铸造的稳定币和累积的稳定费。</li><li>金库需要超额抵押。金库所有者应遵守清算价格/清算比率（最低抵押率），以避免其头寸被清算。</li></ul><p>当一个金库被清算时，将会施加清算惩罚，并出售抵押品以偿还金库的未偿还稳定币余额。</p><p>欲了解更多技术细节，请参阅 Pando Leaf 技术设计。</p><h2 id="pando-usd" tabindex="-1">Pando USD <a class="header-anchor" href="#pando-usd" aria-label="Permalink to &quot;Pando USD&quot;">​</a></h2><p>Pando USD（简称“pUSD”）是与美元挂钩的稳定币。它是由 Pando Leaf 协议铸造和销毁的去中心化稳定币。</p><p>pUSD 的总供应量为 1,000,000,000,000，其中 999,975,000,000 锁定在 5/6 Mixin Trusted Group，由 BigONE、Exin、FOX、Rum System 和 Team Mixin 管理。剩余的 25,000,000 可在 Pando Leaf（4/6 Mixin Trusted Group）发布。</p><p>pUSD is an <a href="https://etherscan.io/address/0xdbaef6da45984a9329c2640d19dcb9f62dc2ab66" target="_blank" rel="noreferrer">ERC20 token</a>, and has been transfered to Mixin Network since <a href="https://etherscan.io/tx/0xccd66572e85d66cc05d50e2a16be0eb2348e34cedd34df89113e4b515caaf210" target="_blank" rel="noreferrer">Dec 23th 2020</a>. So you can store pUSD in any Mixin Network compatible wallet or Ethereum-compatible wallet.</p><p>pUSD 是一种 <a href="https://etherscan.io/address/0xdbaef6da45984a9329c2640d19dcb9f62dc2ab66" target="_blank" rel="noreferrer">ERC20 token</a>，自 2020 年 12 月 23 日起已<a href="https://etherscan.io/tx/0xccd66572e85d66cc05d50e2a16be0eb2348e34cedd34df89113e4b515caaf210" target="_blank" rel="noreferrer">转移到 Mixin Network</a>。因此，您可以将 pUSD 存储在任何 Mixin Network 兼容钱包或以太坊兼容钱包中。</p><h2 id="金库" tabindex="-1">金库 <a class="header-anchor" href="#金库" aria-label="Permalink to &quot;金库&quot;">​</a></h2><p>金库是所有者存入抵押品和铸造稳定加密货币 pUSD 的地方。</p><h3 id="金库类型" tabindex="-1">金库类型 <a class="header-anchor" href="#金库类型" aria-label="Permalink to &quot;金库类型&quot;">​</a></h3><p>金库根据用于铸造 pUSD 的抵押品类型进行分类。用户通过抵押品生成 pUSD，并在还清铸造的 pUSD 余额时销毁 pUSD。</p><h3 id="抵押" tabindex="-1">抵押 <a class="header-anchor" href="#抵押" aria-label="Permalink to &quot;抵押&quot;">​</a></h3><p>金库需要超额抵押，并且必须遵守金库所有者需维持的清算比率，以避免头寸被清算。</p><h3 id="债务限额" tabindex="-1">债务限额 <a class="header-anchor" href="#债务限额" aria-label="Permalink to &quot;债务限额&quot;">​</a></h3><p>每个金库的特定债务限额是该金库类型可以铸造的 pUSD 的最大数量。全局债务限额限制了整个系统可以铸造的 pUSD 的数量。</p><h3 id="稳定费" tabindex="-1">稳定费 <a class="header-anchor" href="#稳定费" aria-label="Permalink to &quot;稳定费&quot;">​</a></h3><p>稳定费是不断添加到金库所有者铸造的 pUSD 余额中的可变费率。可以将其理解为您为贷款（铸造的 pUSD）支付的利息。</p><h3 id="抵押品" tabindex="-1">抵押品 <a class="header-anchor" href="#抵押品" aria-label="Permalink to &quot;抵押品&quot;">​</a></h3><p>抵押品是用于铸造 pUSD 的抵押资产。抵押品锁定在金库中，在金库所有者还清铸造的 pUSD 余额时可以收回抵押品。</p><h2 id="leaf-清算" tabindex="-1">Leaf 清算 <a class="header-anchor" href="#leaf-清算" aria-label="Permalink to &quot;Leaf 清算&quot;">​</a></h2><h3 id="leaf-清算比率" tabindex="-1">Leaf 清算比率 <a class="header-anchor" href="#leaf-清算比率" aria-label="Permalink to &quot;Leaf 清算比率&quot;">​</a></h3><p>清算比率是每种金库类型在被视为低于最低抵押率并受到清算影响之前必须达到的最低抵押水平。</p><p>每个金库类型的清算比率由抵押品的风险配置文件和稳定费的组合决定。每种抵押品可能有多种金库类型，具有不同的清算比率和稳定费。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">清算比率 =（抵押品数量 x 抵押品价格）÷ 铸造的 pUSD × 100</span></span></code></pre></div><h3 id="清算价格" tabindex="-1">清算价格 <a class="header-anchor" href="#清算价格" aria-label="Permalink to &quot;清算价格&quot;">​</a></h3><p>清算价格是金库变得容易受到清算威胁的价格。金库所有者可以通过添加更多的抵押品或将 pUSD 还回金库来降低其清算价格。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">清算价格 =（已生成的 pUSD × 清算比率）÷（抵押品数量）</span></span></code></pre></div><h3 id="清算惩罚" tabindex="-1">清算惩罚 <a class="header-anchor" href="#清算惩罚" aria-label="Permalink to &quot;清算惩罚&quot;">​</a></h3><p>当金库的抵押品价值达到金库的清算价格时，金库所有者需要支付清算惩罚。</p><p>清算惩罚将添加到金库的总未偿还生成的 pUSD 中，这会导致更多抵押品在拍卖中出售。</p><h3 id="leaf-拍卖流程" tabindex="-1">Leaf 拍卖流程 <a class="header-anchor" href="#leaf-拍卖流程" aria-label="Permalink to &quot;Leaf 拍卖流程&quot;">​</a></h3><p>当金库违反最低要求的抵押率时，将被清算并出售抵押资产。任何人都可以参与拍卖。正在进行的拍卖可以在“拍卖”页面的“进行中”部分找到。</p><p>拍卖分为两个阶段。</p><p>在第一阶段，参与者按不少于前一个出价的 3% 的增量出价，以覆盖未偿还债务的最高金额。如果在 12 小时内没有人愿意覆盖全部债务，拍卖就结束了，愿意覆盖债务最高金额的出价者将带走全部抵押资产。或者如果有人出价以覆盖全部债务，那么拍卖将进入第二阶段。</p><p>在第二阶段，参与者以不少于前一个出价的 3% 的减量出价，接受提交的出价中最小部分的抵押资产来支付全部债务。赢家将需要支付所有债务，以交换提交出价的最小抵押资产的所有权。</p>',40),l=[n];function p(i,d,s,h,c,f){return t(),e("div",null,l)}const S=a(o,[["render",p]]);export{b as __pageData,S as default};
