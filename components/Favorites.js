// Components/Favorites.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilmList from './FilmList';
import {connect} from 'react-redux';
import Avatar from './Avatar';

class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          <Avatar />
          <Text style={{fontStyle: 'italic'}}>Abdiche Fatima Zahra</Text>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 18,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Mes Films Favoris
          </Text>
        </View>
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true} // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
  };
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  avatar_container: {
    alignItems: 'center',
  },
});
export default connect(mapStateToProps)(Favorites);
