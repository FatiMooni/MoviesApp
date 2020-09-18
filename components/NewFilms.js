import React from 'react';
import {StyleSheet} from 'react-native';
//data
import FilmList from './FilmList';
import {getLatestFilmsFromApi} from '../api/movies';

class NewFilms extends React.Component {
  constructor(props) {
    super(props);
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
    this.setState({isLoading: true});
    console.log('lol');

    getLatestFilmsFromApi(this.page + 1).then((data) => {
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.setState({
        films: [...this.state.films, ...data.results],
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this._loadFilms();
  }

  render() {
    return (
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
    );
  }
}

export default NewFilms;
