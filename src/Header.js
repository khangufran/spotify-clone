import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import {Avatar} from '@mui/material'
import {useDataLayerValue} from './DataLayer'

function Header({spotify}) {
	const [{user},dispatch] = useDataLayerValue();
	return (
		<div className='header'>
			<div className='header-left' >
				<SearchIcon />
				<input
					placeholder="Search artists,albums, songs or genres"
					type='text'
				/>
			</div>
			<div className='header-right'>
				<Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
