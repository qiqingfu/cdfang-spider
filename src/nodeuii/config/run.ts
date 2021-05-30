import init from "./init"

/**
 * 计划这个函数导出到 app.ts 入口文件
 * 
 * 但是发现一个问题, 在初始化和每次修改客户端代码时, 会实时更新代码后重新执行。
 * 导致爬虫脚本多次被执行
 */
export default (): void => {
  init()
}