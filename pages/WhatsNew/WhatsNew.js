// pages/WhatsNew/WhatsNew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    new217: ["U 更新 适配新版教务系统，需要重新登录", "A 新增 导出成绩", " R 移除 课程表学期切换"],
    new216: ["F 修复 课程表导出异常问题"],
    new215: ["A 新增 成绩查询模式二，仅供原有模式失效时使用", "R 移除 考试安排查询"],
    new214: ["U 更新 页面位置", "U 更新 完善鉴权机制"],
    new213: ["A 新增 游客模式", "U 更新 体测成绩页面 UI"],
    new212: ["A 新增 查询体测成绩", "A 新增 手动添加的课程表可修改", "U 更新 通知栏移动到课程表页面顶部", "F 修复 通知栏滚动失效", "F 修复 刷新成绩提示无数据后本地数据被暂时覆盖"],
    new211: ["F 修复 课程表时间显示问题", "F 修复 一些文案错误", "U 更新 API 重构，保证高峰性能"],
    new210: ["A 新增 一卡通余额查询", "A 新增 图书馆藏书查询", "A 新增 班级课表查询", "A 新增 资讯内容可以转发", "U 更新 登陆界面", "U 更新 用户协议", "U 更新 课程详情弹窗", "U 更新 校园导览配色", "U 更新 资讯页面布局与配色", "F 修复 无法从分享的课表或成绩页面返回"],
    new2012: ["修复添加课程不能及时刷新的问题", "修复添加的课程无法导出的问题", "新增赞赏入口，可在“更多”页面赞赏小程序"],
    new2011: ["增加反馈接口"],
    new2010: ["统一视觉效果", "调整一些功能入口"],
    new209: ["对全部 API 进行重构提升兼容性", "更新一些图标资源"],
    new208: ["新增：咨询查询，包括中北新闻、学校通知和学术活动", "注：数据来自学校官网，每十分钟更新一次，若涉及到附件下载需到官网下载"],
    new207: ["课程表界面学期选择默认隐藏，可在左上角开启", "不再有操作频繁的提示", "QQ 小程序即将上线"],
    new206: ["调整学期切换方式", "全新的成绩页面", "服务器优化，连续查询加载时间减少 50%"],
    new205: ["增加功能状态显示", "发生特殊情况时展示更详细的信息"],
    new204: ["新功能：校园导览", "替换“更多”页面图标", "UI 调整", "修复一些问题"],
    new203: ["我的页面顶部增加滚动通知", "可以通过观看视频广告来支持小程序"],
    new202: ["新功能：考试安排查询", "注：数据来自教务系统，跟随教务系统更新"],
    new201: ["课程表可以切换显示的周数并增加日期和上课时间显示", "“更多”页面布局调整", "UI 微调"],
    new200: ["新功能：大物实验成绩查询，可在 更多->大物实验 找到该功能", "注：仅可查询自行预约的大物实验成绩"],
    new199: ["新功能：全校无课教室查询", "注：可在 更多->自习室 使用查询功能"],
    new198: ["bug 修复"],
    new197: ["新增蹭课功能，可以搜索全校课程并添加到自己的课程表中，可以在“更多”页面找到", "“公告”页面替换为“更多”页面，公告、FAQ、版本、开源的等页面移入", "注：蹭课功能还在测试中，如遇到问题请及时反馈"],
    new195: ["新增手动添加课程表功能，点击课程表页面的“加号”可以找到", "分享课程表和成绩时只分享当前查看的学期"],
    new193: ["升级服务器认证"],
    new192: ["bug 修复", "课程表底部增加没有具体时间的课程显示"],
    new190: ["新增公告页面"],
    new1895: ["账号切换逻辑优化", "服务端代码开源，可在 我的->关于->开源 查看项目地址"],
    new189: ["修复课程表在特殊情况下显示异常", "测试与保存按钮合并为登录按钮", "新增账号切换功能"],
    new1881: ["紧急修复"],
    new188: ["增加导出课程表功能，具体使用方法可在导出页面查看", "在最近一个学期成绩最后增加全部学期的 GPA 显示（全部和必修）", "右下角的按钮可切换到左下角"],
    new187: ["增加服务器负载显示", "一些细微调整", "开发中功能：1.计算全部课程绩点而不是只有一个学期绩点 2.导出课程表到日历（包含上下课时间），熟悉 iCal 的同学可以联系我共同完成"],
    new186: ["UI 配色修改", "加粗显示当前周数", "调整右下角刷新按钮", "如果你希望共同开发小程序请到 GitHub 查看相关信息", "开源代码转到另一个账号下，原有代码不再更新，新的地址可以在 我的->关于->开源 查看", "注：由于发现一些比较严重的问题提前发布这个开发版本"],
    new185: ["做了一些清理", "修复几处遗留问题"],
    new183: ["相同的课程表使用相同的颜色显示", "稍微修改了课程表显示方式（需重新获取课程表并重启小程序）", "常规修复"],
    new180: ["增加广告显示，具体信息请查看“关于”页面", "修复 iPad 课程表显示不正常", "课程表左上角增加当前周数显示", "增加服务器状态显示", "修改登录提示", "取消下拉刷新成绩", "UI 调整"],
    new170: ["调整登录方式为个人门户，请及时更新信息", "修复挂科成绩无法显示的 bug", "账号设置页面增加测试登录按钮", "提升信息获取速度", "逻辑优化", "UI 调整"],
    new160: ["优化课程表显示", "调整打开分享逻辑", "点击课程可以显示时间重复的课程（滑动查看）", "UI 调整"],
    new155: ["调整打开分享卡片的逻辑", "修复一个恶性 bug", "修复加载数据时逻辑错误"],
    new153: ["增加客服入口", "可通过右上角进行转发操作", "冷启动时主动检查更新", "UI 调整"],
    new150: ["增加课程表查询", "成绩查询增加 GPA (平均绩点)查询", "在 GitHub 上开放源代码 (仅小程序，服务器源码将在未来开放)", "优化冷启动数据加载逻辑", "提高验证码识别准确率", "课程表提供手动刷新操作", "修复一些不可感知 bug"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})