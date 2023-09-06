import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/'

const API_KEY = '38347211-89c6526cb0e004a458383526f'


export const fetchPixabay = async (search, page, per_page) => {
    const response = await axios.get(`?key=${API_KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
    return response.data
}

