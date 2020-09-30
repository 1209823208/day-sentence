import request from '@/utils/request';

const fetchModifyLove = (data: any) =>
  request.post('/api/companyInfo.json', { data });

export { fetchModifyLove };
