import service from '@/api/gbank';

export const getQbankApi = async (params, callback) => {
    const { data } = await service.get(
        `/expr/krt/problem/${params.version}/${params.problemId}`,
        {
            params,
        },
    );
    if (data && (data?.status === 200 || data?.statusCode === '200'))
        return callback(data.data);
    return null;
};
export const getCoreReacdingApi = async (params, callback) => {
    const { data } = await service.get(`/corereading`, { params });
    if (data && data.status === 200) return callback(data.data);
    return null;
};
