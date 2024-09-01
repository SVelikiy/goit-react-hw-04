import axios from "axios";

const BASE_URL = 'https://api.unsplash.com';
const id = 'mCZq4Md_TCB1n4lGi3ktdCTmW58FwPTIj6h67Qh3bQE';

export const searchImg = async (value, page) => {
    const response = await axios.get(
      `${BASE_URL}/search/photos?client_id=${id}&page=${page}&query=${value}`
    );
    return response.data;
}