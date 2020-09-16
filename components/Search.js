import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
//data
import data from '../helpers/filmsList';
import FilmList from './FilmList';
import { getFilmsFromApiWithSearchedText } from '../api/movies';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.searchedText = '';
		// Initialisation de notre donnée searchedText en dehors du state
		// to avoid multiple rerenders
		this.page = 0;
		// Compteur pour connaître la page courante
		this.totalPages = 0;
		// Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
		this.state = {
			films: [],
			isLoading: false,
		};
		this._loadFilms = this._loadFilms.bind(this);
		//de cette maniere , à chaque fois on appelle la fonction load
		//=> on va utiliser le context de Searchh comp
	}

	_loadFilms() {
		if (this.searchedText.length > 0) {
			this.setState({ isLoading: true });
			getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
				(data) => {
					this.page = data.page;
					this.totalPages = data.total_pages;
					this.setState({
						films: [...this.state.films, ...data.results],
						isLoading: false,
					});
					console.log('enter', this.state.films);
				}
			);
		}
	}

	_displayLoading() {
		if (this.state.isLoading) {
			return (
				<View style={styles.loading_container}>
					<ActivityIndicator size='large' />
				</View>
			);
		}
	}

	_searchTextInputChanged(text) {
		this.searchedText = text;
		// Modification du texte recherché à chaque saisie de texte,
		// sans passer par le setState comme avant
	}

	_searchFilms() {
		this.page = 0;
		this.totalPages = 0;
		this.setState(
			{
				films: [],
			},
			() => {
				// J'utilise la paramètre length sur mon tableau de films pour
				// vérifier qu'il y a bien 0 film
				/*console.log(
					'Page : ' +
						this.page +
						' / TotalPages : ' +
						this.totalPages +
						' / Nombre de films : ' +
						this.state.films.length
				);*/
				this._loadFilms();
			}
		);
	}

	render() {
		return (
			<View style={styles.main_container}>
				<TextInput
					style={styles.textinput}
					placeholder='Titre du film'
					onChangeText={(text) => this._searchTextInputChanged(text)}
					onSubmitEditing={() => this._searchFilms()}
				/>
				<Button title='Rechercher' onPress={() => this._searchFilms()} />
				<FilmList
					films={this.state.films}
					// list of films
					navigation={this.props.navigation}
					// navigations infos => to get details
					loadFilms={this._loadFilms}
					// to get new list of films
					page={this.page}
					totalPages={this.totalPages}
					//usful when relaoding
					favoriteList={false}
					//which compis using the film list
				/>
				{this._displayLoading()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
	},
	textinput: {
		marginLeft: 5,
		marginRight: 5,
		height: 50,
		marginBottom: 7,
		borderColor: 'lightblue',
		borderWidth: 1,
		paddingLeft: 5,
	},
	loading_container: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 100,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Search;
