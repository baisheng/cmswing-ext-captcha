module.exports = class extends think.cmswing.extAdmin {
  async indexAction () {
    return this.display()
  }
}
