import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = 'f22e13ef63d150f3a8e82fb4ed908c86';
const PRIVATE_KEY = 'ca212258462245e9e725017898f933c3c705818a';
const TIMESTAMP = 1521727919;

function createApiService() {
	const client = axios.create({
		baseURL: 'https://gateway.marvel.com/v1/public/',
		timeout: 5000,
	});

	client.interceptors.request.use(function(config) {
		config.params = {
			...config.params,
			apikey: PUBLIC_KEY,
			hash: md5(`${TIMESTAMP}${PRIVATE_KEY}${PUBLIC_KEY}`),
			ts: TIMESTAMP
		};

		return config
	});

	const handleError = error => {
		return error;
	}

	const handleResponse = response => {
		return response.data;
	}

	return {
		getComics: () => {
			return client.get('comics').then(handleResponse).catch(handleError);
		}
	}
}

export default createApiService();
