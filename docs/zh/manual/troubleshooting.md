# 故障排除

## Mixin 服务器遇到错误

如果您使用的是 Mixin Messenger，当您尝试向 Pando 发送交易时可能会遇到以下错误消息：

```
Mixin 服务器遇到错误
```

或者

```
服务器出错，请稍后重试
```

一个可能的原因是您交易中的资产 UTXO 过多，超过256个，无法通过 Mixin Messenger 完成交易。

解决方案：

1. 再次尝试发送交易。
2. 将您要发送的资产全额转移到另一个钱包，然后再转回来，再次发送交易。

## Swap/流动性操作失败

在某些情况下，您的交易可能会因以下原因而失败：滑点容忍度太低。遇到这种情况，可以尝试增加滑点容忍度，然后重试；
也可以通过将一个订单拆成多个订单，降低每次交易的金额，进行多次交易，来解决这个问题。

请在[此处](./trade.md#slippage-tolerance) 阅读滑点容忍度的详细信息。

## 无法访问此网页

如果您在尝试访问 Pando 时遇到以下错误信息：

```
无法访问此网页
反应时间太长了。 请检查您的网络并尝试切换 4G、Wi-Fi 或 VPN 以重新加载页面。
```

或者诸如“打不开”，“无法登录”等错误。

请尝试以下解决方案：

1. 检查您的网络连接。 如果您使用的是 VPN，请尝试切换到另一个 VPN 服务器。
2. 如果你住在中国，请努力克服网络封锁。 您可以尝试使用 VPN 或代理服务器。

## “32603 内部 JSON-RPC 错误”

如果您尝试通过 MetaMask 或 WalletConnect 钱包发送交易时遇到以下错误信息：

```
-32603 Internal JSON-RPC error
```

最可能的原因是您没有足够的 ETH 来支付交易费用。 请检查您的余额，然后重试。

如果您没有足够的 ETH，您可以尝试转一些 ETH 到您的钱包，或者在 Pando Proto 上兑换一些 ETH。

## 我在我的钱包里看不到我的资产

如果您使用的是 MetaMask 或者 WalletConnect 兼容钱包，则需要手动添加资产合约。

对于 Metamask，Pando 提供了一种简单的方法来做到这一点：

1. 切换到“交易”选项卡，“简洁版”和“专业版”都可以。
2. Swap 变淡有一个粉红色的“+”按钮。 单击它可以将当前币的合约添加到 MetaMask 中。

对于兼容 WalletConnect 的其他钱包，请使用 “[MVM Bridge](https://bridge.mvm.app/)” 管理您的资产。

## 债务余额不得低于 100 pUSD

当您在 Pando Leaf 上偿还债务时，您可能会遇到以下错误信息：

```
剩余债务必须不低于 100 pUSD
```

这是因为最低债务金额应大于 100 pUSD。解决方案很简单，只需偿还所有债务；或者少还一些，以确保剩余的债务超过 100 pUSD。

## “找不到变量：BigInt”

“Can't find variable: BigInt” 错误是由于浏览器对 BigInt 的兼容性导致的。

如果您使用的是 iPhone、iPad，请将您的 iOS 升级到 14.5 或更高版本。如果您使用的是 macOS，请将您的 Safari 升级到 14.1 或更高版本。其他浏览器请升级到最新版本。 以下是支持 BigInt 的最低浏览器版本：

- Chrome 和 WebView Android：87
- 火狐：68
- Edge：79
- Opera：54
- macOS Safari：14.1
- iOS 浏览器：14.5
- Android 版 Chrome：67
- Android 版 Firefox：68

## Pando 显示空白页

该问题可能由 3 个原因引起：

1. 手机系统版本太低。请尝试升级您的手机系统，对于 iOS 用户，请升级到 14.1 或更高版本，对于 Android 用户，请升级到 10.0 或更高版本（确保 Chrome 内核版本在 78 以上）。
   如果您无法确定您的版本，可以访问 https://app.pando.im/tools.html 查看您的浏览器信息。
2. 针对锤子/坚果手机已知的浏览器兼容性问题，当您尝试在 Mixin Messenger 上使用 Pando bot 时，可能会遇到空白页面。
   我们仍在为这个问题寻找解决方案。 在此之前，请尝试在手机上使用Chrome或其他浏览器，访问 https://app.pando.im 使用 Pando。
3. 这是由损坏的缓存引起的。 如果您使用的是 Mixin Messenger，请按照说明清除缓存：
   1. 打开 Mixin Messenger，点击屏幕右上角的头像。
   2. 单击屏幕右上角的“设置”按钮。
   3. 点击“安全”->“授权”，搜索“Pando”，选中并点击“撤销访问权限”。
   4. 回到 bot，再次授权 Pando。

如果您使用的是其他浏览器，请尝试清除浏览器的缓存。
