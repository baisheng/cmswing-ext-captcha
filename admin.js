module.exports = class extends think.cx.extAdmin {
  async indexAction () {
    return this.display()
  }
}
