import service from '@/api';
import { GlobalStore } from '@/store';

export const loginApi = async (params, callback) => {
    const globalStore = GlobalStore();
    const { data } = await service.post(`/api/preview/diagnostic/register`, {
        ...params,
    });
    console.log(data);
    console.log('---loginAPi--token :----',data.data.data.accessToken);
    await globalStore.setToken(data.data.data.accessToken);
    await globalStore.setVersion(data.data.data.version);

    // console.log('----loginApi 22----')
    if (data) return callback(data);
    return null;
};
