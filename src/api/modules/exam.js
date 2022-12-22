import service from '@/api';

export const submitExam = async (params) => {
    const { data } = await service.post(
        '/api/preview/diagnostic/submit',
        params,
    );

    return data;
};
