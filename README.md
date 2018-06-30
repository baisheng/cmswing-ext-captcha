## CMSWing 验证码插件 
[CMSWing](https://github.com/arterli/CmsWing)
基于 [svg-captcha](https://github.com/lemonce/svg-captcha)

### 效果截图
![](https://github.com/baisheng/captcha/blob/master/screenshot/signin.png?raw=true)

### 使用说明

#### 将 captcha 全部内容放置在

```bash
src
└── controller 
    └── ext
        └── captcha
```

#### 页面配置
    view/admin/inc/base.html 
    
head 中引入 js 包，验证码页面刷新使用了 vuejs 也可以用 jquery

```html
    <script type="text/javascript" src="/static/admin/js/vue.js"></script>
    <script>
      new Vue({
        delimiters: ['${', '}']
      })
    </script>
    <script type="text/javascript" src="/static/admin/js/axios.min.js"></script>
```

js lib 在当前工程下的 [3rd-js-lib](3rd-js-lib) 中可以找到

#### 验证码个性化配置
    config.js
    
可以在使用之前在 config.js 中做预置配置，也可以在后台启用后更改

```javascript
  setting: [
    {
      '验证码设置': [
        {
          'name': 'size',
          'label': 'size',
          'type': 'text',
          'value': '4',
          'html': `验证码长度`
        },
        {
          'name': 'ignoreChars',
          'label': 'ignoreChars',
          'type': 'text',
          'value': '0o1i',
          'html': `验证码字符中排除的字符`
        },
        {
          'name': 'noise',
          'label': 'noise',
          'type': 'text',
          'value': '1',
          'html': `噪点线条数量`
        },
        {
          'name': 'color',
          'label': 'color',
          'type': 'radio',
          'options': {'true': '启用', 'false': '禁用'},
          'value': false,
          'html': `验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有`
        },
        {
          'name': 'background',
          'label': 'background',
          'type': 'text',
          'value': '',
          'html': `验证码图片背景颜色`
        },
        {
          'name': 'width',
          'label': 'width',
          'type': 'text',
          'value': 100,
          'html': `验证码宽度`
        },
        {
          'name': 'height',
          'label': 'height',
          'type': 'text',
          'value': 34,
          'html': `验证码高度`
        },
        {
          'name': 'fontSize',
          'label': 'fontSize',
          'type': 'text',
          'value': 28,
          'html': `验证码文字大小`
        },
        {
          'name': 'charPreset',
          'label': 'charPreset',
          'type': 'text',
          'value': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', // random character preset
          'html': `验证码用的预置字符`
        },
        {
          'name': 'fontPath',
          'label': 'fontPath',
          'type': 'text',
          'value': 'fonts/Roboto_Slab/RobotoSlab-Regular.ttf',
          'html': `验证码采用的字体`
        }
      ]
    }
  ]

```

注意： 该模块只适用于 [CMSWing](https://github.com/arterli/CmsWing)
