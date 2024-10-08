import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { MainScreen } from '@/screens';



red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="">
			<MainScreen />
		</div>
	);
}
