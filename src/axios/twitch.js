import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': 'sv9h5i62fxdah0j8n50zzenwpddweh'
  }
});
