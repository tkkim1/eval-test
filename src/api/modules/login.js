import service from '@/api';
import { GlobalStore } from '@/store';

export const loginApi = async (params, callback) => {
    const globalStore = GlobalStore();
    const { data } = await service.post(`/api/preview/diagnostic/register`, {
        ...params,
    });
    console.log(data);
    await globalStore.setToken(data.data.access_token);
    await globalStore.setVersion(data.data.version);
    if (data) return callback(data);
    return null;
};
