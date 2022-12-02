import service from '@/api';
import { GlobalStore } from '@/store';

export const loginApi = async (params, callback) => {
    const globalStore = GlobalStore();
    const { data } = await service.post(`/api/user/login`, { params });
    // await globalStore.setToken(data.data.accesstoken);
    // await globalStore.setReToken(data.data.refreshtoken);
    // if (data && data.status === 200) return callback(data.data);
    // 임시코드
    await globalStore.setToken('asdasdhajdhkjasd');
    await globalStore.setReToken('akjsdlkjalkjdlkajsd');
    if (data) return callback(data);
    return null;
};
