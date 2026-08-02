# GamePro 免费模板使用演示

这是一个可离线打开的横向翻页 HTML 演示，介绍两套免费模板的安装、配置、上线检查和商品图片生成方法。

## 打开演示

直接双击 `index.html`，或在浏览器中打开：

```text
file:///Users/wook/Documents/Shopify网站模版/gamepro-template-guide/index.html
```

操作方式：

- `←` / `→`：上一页、下一页
- `Space`：下一页
- 点击画面左右区域：翻页
- 底部导航点：跳转到指定页面

## 文件说明

- `index.html`：最终自包含演示文件，可单独分享
- `IMAGE_TUTORIAL_ZH.md`：商品图与 Hero 图片生成教程
- `DECK_PLAN.md`：15 页内容结构
- `slides.html`：演示正文源文件
- `template-swiss.html`：演示模板底座
- `build.mjs`：把正文和本地图片打包成最终 HTML

## 两套模板

### Shopify 免费主题

本地目录：

```text
/Users/wook/Documents/Shopify网站模版/gamepro-free-shopify-theme
```

GitHub：<https://github.com/WOOK98/gamepro-free-shopify-theme>

适合希望使用 Shopify 后台管理商品、库存、支付、订单和配送的商家。

### 独立 Next.js 商店

本地目录：

```text
/Users/wook/Documents/Shopify网站模版/gamepro-free-storefront
```

适合开发者学习和二次开发。演示版不等于完整交易系统；正式上线前需要接入支付、订单、库存、邮件和后台管理。

## 重新构建演示

```bash
cd "/Users/wook/Documents/Shopify网站模版/gamepro-template-guide"
node build.mjs
```

生成后的 `index.html` 已把图片嵌入文件，不依赖本地 assets 路径。

## 分享前检查

- 删除店铺域名、邮箱、令牌和真实客户信息
- 只保留拥有再分发权的示例图片
- 用虚构商品名称和示例价格
- 测试桌面与手机上的购买路径
- 在 README 中写清楚安装步骤、许可证和功能边界

