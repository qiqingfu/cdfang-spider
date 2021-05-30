import * as schedule from 'node-schedule';
import initModel from "../config/init"

// 定时器middleware,每隔15分钟爬一次
const runEvery15Minute = async (): Promise<void> => {
  schedule.scheduleJob(
    '*/15 * * * *',
    initModel
  );
};

// 每15分钟自动抓取前三页数据(房协网一个时间点不可能同时发布30套房源)
runEvery15Minute();
