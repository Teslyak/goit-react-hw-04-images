import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/'

const API_KEY = '38347211-89c6526cb0e004a458383526f'

export const fetchPixabay = async (search) => {
    const response = await axios.get(`?key=${API_KEY}&q=${search}&page=1&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data
}

