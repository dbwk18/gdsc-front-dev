import Axios from 'axios';
import qs from 'qs';
import { Cookies } from 'react-cookie';

const cookies = new Cookies(document.cookie);

const HttpMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

const requestForEntity = async (method, url, params, data, arrayNoBrackets) => {
  const headers = {
    Authorization: `${cookies.get('Authorization')}`,
  };

  try {
    const axiosResult = await Axios.request({
      url,
      method,
      params,
      data,
      headers,
      baseURL: process.env.REACT_APP_SERVER_URL,
      paramsSerializer: arrayNoBrackets ? param => qs.stringify(param, { arrayFormat: 'repeat' }) : undefined,
    });
    return axiosResult.data;
  } catch (e) {
    // TODO: 차후 에러 처리를 여기서 할 것
    if (e.code === 200) return Promise.resolve();
    throw e;
  }
};

export const getForEntity = (url, params, arrayNoBrackets) => {
  return requestForEntity(HttpMethod.GET, url, params, null, arrayNoBrackets);
};

export const deleteForEntity = (url, params, arrayNoBrackets) => {
  return requestForEntity(HttpMethod.DELETE, url, params, null, arrayNoBrackets);
};

export const postForEntity = (url, data) => {
  return requestForEntity(HttpMethod.POST, url, null, data);
};

export const putForEntity = (url, data) => {
  return requestForEntity(HttpMethod.PUT, url, null, data);
};
