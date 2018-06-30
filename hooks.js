module.exports = class extends think.cx.extIndex {
  // 后台登录，控制器验证
  async signinBefore () {
    const captcha = this.extService('captcha', 'captcha')
    const validate = await captcha.verify(this.ctx, this.post())
    return validate
  }

  async signinView () {
    // if is admin signinView
    const html = await this.hookRender('signinView', 'captcha')
    return html
  }
}
