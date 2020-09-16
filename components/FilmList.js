import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Film from './film';

class FilmList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
		};
	}

	_displayDetailForFilm = (idFilm) => {
		console.log('Display film ' + idFilm);
		// On a récupéré les informations de la navigation, on peut afficher le détail du film
		this.props.navigation.navigate('FilmDetail', { idFilm: idFilm });
	};

	render() {
		console.log('am here', this.state.films);
		return (
			<FlatList
				style={styles.list}
				data={this.props.films}
				extraData={this.props.favoritesFilm}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Film
						film={item}
						isFilmFavorite={
							this.props.favoritesFilm.findIndex(
								(film) => film.id === item.id
							) !== -1
								? true
								: false
						}
						displayDetailForFilm={this._displayDetailForFilm}
					/>
				)}
				onEndReachedThreshold={0.5}
				onEndReached={() => {
					if (
						!this.props.favoriteList &&
						this.props.page < this.props.totalPages
					) {
						this.props.loadFilms();
					}
				}}
			/>
		);
	}
}
const styles = StyleSheet.create({
	list: {
		flex: 1,
	},
});

const mapStateToProps = (state) => {
	return {
		favoritesFilm: state.favoritesFilm,
	};
};

export default connect(mapStateToProps)(FilmList);
