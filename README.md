# AURELIS ATELIER · 国际独立站

面向海外顾客的独立品牌站点，使用现有 Node 后端与同一套商品数据。

## 启动

```bash
npm install
npm run dev
```

- 前台：`http://localhost:5175`
- 后台：`http://localhost:5173/page/intl`
- 后端：沿用 `jc_mall_server`，开发态经 Vite 代理 `/api` 到 `http://localhost:3000`
- 根目录执行 `./start-all.sh` 会同时启动后端、管理后台、中文官网和国际独立站

## 多语言

国际站只装修一份页面：

1. 组件树、图片、顺序、动效和主题只有一份。
2. 英、法、德、日文案保存在 `schema.pageConfig.i18n.messages`。
3. 前台通过页头语言菜单切换 `?lang=fr|de|ja`，只替换文案并记住选择。
4. 后台「多语言文案」扫描当前页面或外壳页的文字，按语言录入译文；保存草稿并发布后对全部语言生效。

这样不会出现四套版式逐渐漂移，也不需要为每个语言重新搭页面。

## 后台装修

- 菜单：`DIY 装修 → 国际独立站`
- 页面命名空间：`intl:site` / `intl:home` / `intl:category`
- 后台编辑器：`/page/intl-editor/:id`
- 预览源：`VITE_INTL_SITE_URL`，默认 `http://localhost:5175`
- 站点信息与主题使用独立配置：`/api/admin/intl-site-info`、`/api/admin/intl-theme`

## 视觉

品牌方向为美式编辑式奢华：`AURELIS ATELIER / WEAR THE UNEXPECTED`。核心视觉令牌：

- 黑曜石 `#0A0A0A`
- 骨白 `#F1EFE8`
- 酸性荧光绿 `#D7FF38`
- 硬边零圆角栅格、超大 Instrument Serif 标题、DM Mono 编辑刊号
- 商品图统一低饱和、高对比，悬停恢复色彩并出现荧光硬阴影

## 图片素材

`public/intl-media/` 中的四张 campaign 图来自项目已有的 AI 珠宝广告素材，已裁掉原图内嵌中文文案并转为 JPEG：

| 文件 | 优化后体积 |
| --- | ---: |
| `campaign-portrait.jpg` | ~216 KB |
| `campaign-still.jpg` | ~220 KB |
| `campaign-light.jpg` | ~216 KB |
| `campaign-store.jpg` | ~96 KB |

当前环境没有豆包生成接口与 TinyPNG API Key，因此未伪造调用结果；本轮使用已有 AI 素材，并通过本机 `sips` 完成裁切、JPEG 转换与体积压缩。
