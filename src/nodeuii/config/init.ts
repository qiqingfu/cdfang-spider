/**
 * 执行爬虫脚本
 */
import log4js from 'log4js';
import houseModel from "../models/houseModel"
import { createRequestPromise } from '../utils/spiderHelper';

const logger = log4js.getLogger('globallog');

export default async (): Promise<void> => {
  const pageList = await Promise.all([
    createRequestPromise(1),
    createRequestPromise(2),
    createRequestPromise(3)
  ]);
  const page = [...pageList[0], ...pageList[1], ...pageList[2]];
  const newNumber = await new Promise<number>(
    (resolve): void => {
      let newDataNumber = 0;
      let i = 0;
      page.forEach(
        (item): void => {
          houseModel.add(item).then(
            (isSuccess): void => {
              i += 1;
              if (isSuccess) {
                newDataNumber += 1;
              }
              if (i === page.length - 1) {
                resolve(newDataNumber);
              }
            }
          );
        }
      );
    }
  );
  logger.info(`抓取数据${page.length}条，新数据${newNumber}条。`);
}
