import axios from 'axios';
import { getTimestamp } from '../utils/getTimestamp.js';
import md5 from 'md5';
import { OFFSET, LIMIT, BASE_URL } from '../constants/index.js';

const data = new Date();
const timeStamp = getTimestamp(data);

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Auth': md5(`${import.meta.env.VITE_API_PASSWORD}_${timeStamp}`),
        'Content-Type': 'application/json',
    },
});

export const getIds = async (offset = OFFSET, limit = LIMIT) => {
    const { data } = await axiosInstance.post('', {
        action: 'get_ids',
        params: { offset, limit },
    });
    return data.result;
};

export const getProducts = async (dataIds) => {
    const { data } = await axiosInstance.post('', {
        action: 'get_items',
        params: { ids: dataIds },
    });
    return data.result;
};

export const getIdsTotal = async () => {
    const { data } = await axiosInstance.post('', {
        action: 'get_ids',
        params: {},
    });
    return data.result;
};

export const getIdsByFilters = async (filters) => {
    const { data } = await axiosInstance.post('', {
        action: 'filter',
        params: filters,
    });
    return data.result;
};
