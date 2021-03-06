import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import Favorites from '../components/Favorites';
import Test from '../components/Test';
import {Image, StyleSheet} from 'react-native';
import NewFilms from '../components/NewFilms';

const SearchStackNavigator = createStackNavigator({
  Search: {
    // Ici j'ai appelé la vue "Search"
    // mais on peut mettre ce que l'on veut.
    //C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Trouver un film',
    },
  },

  FilmDetail: {
    screen: FilmDetail,
  },
});

const FavStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris',
    },
  },

  FilmDetail: {
    screen: FilmDetail,
  },
});

const NewStackNavigator = createStackNavigator({
  Films: {
    screen: NewFilms,
    navigationOptions: {
      title: 'Les derniers films',
    },
  },

  FilmDetail: {
    screen: FilmDetail,
  },
});

const MoviesTabNavigator = createBottomTabNavigator(
  {
    NewFilms: {
      screen: NewStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_fiber_new.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_search.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_favorite_border.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      activeTintColor: '#578233',
      showLabel: false, // On masque les titres
      showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    },
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(MoviesTabNavigator);
