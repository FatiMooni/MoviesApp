// API/TMDBApi.js

const API_TOKEN = '8570292fec5d8b01019403059cab5999';

export function getFilmsFromApiWithSearchedText(text, page) {
	const url =
		'https://api.themoviedb.org/3/search/movie?api_key=' +
		API_TOKEN +
		'&language=fr&query=' +
		text +
		'&page=' +
		page;
	return fetch(url)
		.then((res) => res.json())
		.catch((err) => console.error(err));
}

export function getImageFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300' + name;
}
