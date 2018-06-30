module.exports = class extends think.cmswing.extIndex {
  async captchaAction () {
    const svgCaptcha = this.extService('captcha')
    if (this.isGet) {
      const captcha = await svgCaptcha.create(this.ctx)
      return this.success(captcha.data)
    }
  }
}
