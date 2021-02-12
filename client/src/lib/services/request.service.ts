import { axios } from '@/lib/axios';
import {
  GET,
  IConfig,
  IData,
  IResponse,
} from './request.service.types';

export const RequestService = async (
  url: string,
  config: IConfig = { method: GET, body: {} },
): Promise<IData> => {
  try {
    const { data }: IResponse = await axios({
      method: config.method || GET,
      url,
      data: config.body,
    });

    return data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
