import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import Favorites from '../components/Favorites';

const SearchStackNavigator = createStackNavigator({
	Search: {
		// Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
		screen: Search,
		navigationOptions: {
			title: 'Rechercher',
		},
	},

	FilmDetail: {
		screen: FilmDetail,
	},
});

const MoviesTabNavigator = createBottomTabNavigator({
	Search: {
		screen: Search,
	},
	Favorites: {
		screen: Favorites,
	},
});

export default createAppContainer(MoviesTabNavigator);
