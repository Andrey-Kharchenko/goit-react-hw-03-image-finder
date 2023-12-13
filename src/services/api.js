import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37975010-22e06f5b9850d0937ed6c375a';

export const getImage = async (searchText, page) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: searchText,
                page: page,
                key: API_KEY,
                image_type: "photo",
                orientation: "horizontal",
                per_page: 12,
            }
        });
        return response.data.hits;
    } catch (error) {
        throw new Error('Error fetching images from the API');
    }
}



