import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '10',
    },
    headers: {
        'X-RapidAPI-Key': '1ececf92bbmsh1850e946a28818cp14f895jsnfb473a2e348c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
}

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}




