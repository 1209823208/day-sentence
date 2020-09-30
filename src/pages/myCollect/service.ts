import request from '@/utils/request';

const requestCollect = (data: any) => request.post('/api/', { data });

export { requestCollect };
