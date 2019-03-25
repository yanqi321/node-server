const Service = require('egg').Service

class UserService extends Service {
  async info () {
    const user = await this.app.mysql.get('local').query('select * from user limit 1')
    this.ctx.getLogger('xxLogger').info('hello, costom test')
    return user
  }
}

module.exports = UserService
