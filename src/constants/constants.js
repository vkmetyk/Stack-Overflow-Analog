const info = {
  baseUrl: `https://api.stackexchange.com/2.2/`,
  baseParams: {site: `stackoverflow`},
  clientId: '18651',
  key: 'xzf5GeIyy1QHmRTuxM3ZjA((',
  access_token: localStorage.getItem('userToken'),
  pageSize: 12,
  pageSizeParams: {
    'page size - 12': '12',
    'page size - 18': '18',
    'page size - 24': '24',
    'page size - 30': '30',
  },
  orderParameters: {
    'descending': 'desc',
    'ascending': 'asc',
  },
}

export default info;