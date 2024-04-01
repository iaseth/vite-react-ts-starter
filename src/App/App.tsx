import './App.css';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
