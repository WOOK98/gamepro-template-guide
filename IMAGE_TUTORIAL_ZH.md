# 商品图片生成与统一风格教程

这份教程适用于免费 Shopify 主题和独立 Next.js 商店模板。目标不是重新设计商品，而是在保留真实外观的前提下，统一背景、构图、比例和灯光。

## 1. 先准备参考图

每个商品至少准备 3 张真实照片：

- 正面或 45 度主视图
- 背面、接口或侧面细节
- 包装与配件全家福

检查参考图是否能明确看出：外壳轮廓、按钮数量、接口位置、Logo、颜色、配件和线材。参考图看不清的部分，不要让模型自行补全。

## 2. 通用“真实性锁定”提示词

把下面这段放在每个提示词最前面：

```text
Use the attached product photos as strict visual references. Preserve the exact product shape, proportions, button layout, ports, screws, materials, logos, printed labels, colors, accessories, and cable placement. Do not redesign, simplify, add, remove, or relocate any physical feature. Create a realistic commercial product photograph, not a concept render.
```

中文含义：严格保留实物结构，只调整摄影环境，不允许模型重新设计产品。

## 3. 方形商品主图（1:1）

适合商品卡片、系列页和 Shopify 主图。

```text
Use the attached product photos as strict visual references. Preserve every physical detail exactly.

Create a premium square e-commerce product photograph. Place the product centered on a warm light-gray studio surface with a subtle beige gradient background, soft diffused key light from the upper left, gentle contact shadow, realistic material texture, neutral white balance, and generous breathing room. Camera angle: three-quarter front view. No decorative props, no extra text, no floating parts. 1:1 composition, high detail, natural commercial photography.
```

建议输出：`1600 × 1600` 或更高，WebP 品质 82–88。

## 4. 首页横幅图（16:9）

适合桌面首页 Hero。让产品集中在右侧，左侧保留文案空间。

```text
Use the attached product photos as strict visual references. Preserve every physical detail exactly.

Create a cinematic 16:9 e-commerce hero image. Deep charcoal and midnight-blue studio background, subtle cool rim light, restrained red reflection from the product, realistic tabletop, premium but minimal. Position the complete product group on the right 55% of the frame. Keep the left 45% dark, clean, and low-detail for white headline text and buttons. No embedded words, no fake UI, no people, no extra accessories. Photorealistic product photography.
```

建议输出：`1920 × 1080` 或 `2400 × 1350`。

## 5. 移动端横幅图（4:5）

桌面横幅直接裁成手机比例常会切掉商品。移动端应单独生成。

```text
Use the attached product photos as strict visual references. Preserve every physical detail exactly.

Create a vertical 4:5 mobile e-commerce hero. Keep the full product visible in the lower-right area, with safe margins around all edges. Dark charcoal and midnight-blue background, soft cool rim light, realistic shadow, restrained contrast. Reserve the upper-left area for a short headline. No text inside the image, no extra objects, no cropped cables or accessories.
```

建议输出：`1440 × 1800`。

## 6. 细节特写图

```text
Create a realistic macro product photograph using the attached image as a strict reference. Focus on the specified feature: [接口 / 按钮 / 卡槽 / 摇杆 / 材质]. Preserve exact geometry and labels. Soft studio lighting, shallow but sufficient depth of field, clean warm-gray background, no invented parts, no promotional text.
```

一次只突出一个卖点。接口、按钮、卡槽等结构必须与实物逐项核对。

## 7. 多颜色规格图

不要仅要求“把它改成蓝色”。应同时上传每个颜色的真实照片，并使用：

```text
Use the attached [white / black / blue] variant photos as the only color and material reference. Keep the product construction identical. Match the exact shell color, translucency, grip texture, button colors, accent lighting, logo color, and included accessories shown in the reference. Use the same camera, lighting, background, scale, and product position as the approved main image.
```

这样不同规格切换时，商品位置与比例不会跳动。

## 8. 必加的负面约束

```text
Do not alter the product design. No extra buttons, ports, screws, cards, cables, logos, labels, vents, lights, accessories, or packaging. No missing parts. No mirrored text. No distorted typography. No concept-art styling, plastic-looking CGI, floating product, excessive glow, dramatic particles, or impossible reflections.
```

## 9. 推荐工作流

1. 先用真实主图生成一张 1:1 样片。
2. 放大检查 Logo、文字、按钮、接口、螺丝和配件。
3. 发现结构错误时，不要继续润色；回到参考图重新生成。
4. 主图通过后，再锁定同一背景和机位生成其他规格。
5. 最后生成 16:9 与 4:5 Hero，不要从方图强行裁切。
6. 导出 WebP，并保留原始 PNG 作为归档。

## 10. 上线前逐图检查

- 商品轮廓与真实照片一致
- Logo 和型号没有拼写错误
- 按钮、接口、螺丝数量正确
- 配件没有凭空增加或消失
- 不同规格采用相同构图和缩放
- 主体没有被移动端裁切
- 图片中没有价格、折扣或容易过期的文字
- 图片 Alt 文本描述商品与视角，而不是堆砌关键词

## 11. 替换到 Shopify 主题

1. Shopify 后台进入“产品”，打开对应商品。
2. 按规格分别上传真实主图与细节图。
3. 在变体媒体关联中，把 White、Black、Blue 等规格绑定到对应图片。
4. 首页 Hero 图片在主题编辑器中上传桌面版；若区块支持移动图片，再上传 4:5 版本。
5. 发布前用手机预览，重点测试图片切换、规格选择、放大和加入购物车。

## 12. 替换到独立 Next.js 商店

1. 把优化后的图片放到项目 `public/images/products/`。
2. 使用稳定、可读的英文文件名，例如 `controller-white-front.webp`。
3. 在商品数据中为每个规格绑定自己的图片数组。
4. Hero 桌面与移动图片分开引用，并使用 CSS `picture` 或响应式组件切换。
5. 检查本地构建、移动端裁切、图片懒加载和购物车缩略图。

## 13. 免费分享时的版权边界

- 模板仓库只放你有权再分发的生成图或自制图。
- 第三方品牌商品图、商标和网页截图不要随模板源码发布。
- 示例产品使用虚构名称、通用造型和占位价格。
- README 中明确说明示例图片仅供模板演示，商家应替换为自有素材。

