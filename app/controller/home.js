const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  async info () {
    const { ctx } = this
    const userInfo = await ctx.service.home.info()
    ctx.getLogger('xxLogger').info('hello, costom test', userInfo)
    ctx.body = {
      succ: true,
      data: {} // FIXME: NEED CHANGE
    }
  }
}

module.exports = HomeController
