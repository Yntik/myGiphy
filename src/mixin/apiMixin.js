import axios from 'axios'
import apiGiphyConfig from '../../apiGiphyConfig.json'

const apiMixin = {
  
  methods: {
    async trending(limit, numberLoadedGif) {
      try {
        return (await axios.get(`${apiGiphyConfig.trending}?api_key=${apiGiphyConfig.apiKey}&offset=${numberLoadedGif}&limit=${limit}`)).data.data
      }catch (e) {
        throw new Error(e)
      }
    },
    async querySearch(searchQuery, limit) {
      try {
        return (await axios.get(`${apiGiphyConfig.search}?api_key=${apiGiphyConfig.apiKey}&q=${searchQuery}&limit=${limit}`)).data.data
      }catch (e) {
        throw new Error(e)
      }
    }
  }
}

export default apiMixin