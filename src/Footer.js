import React from 'react'
import './Footer.css'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import SkipPrevousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'

import {Grid,Slider} from '@mui/material'

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-left'>
				<img className='footer-albumLogo' src=''/>
				<div className='footer-songInfo'>
					<h4>Comfortably Numb</h4>
					<p>Pink Floyd</p>
				</div>
			</div>
			<div className='footer-center'>
				<ShuffleIcon className='footer-greeen'/>
				<SkipPrevousIcon className='footer-icon'/>
				<PlayCircleOutlineIcon fontSize='large' className='footer-icon'/>
				<SkipNextIcon className='footer-icon'/>
				<RepeatIcon className='footer-green'/>
			</div>
			<div className='footer-right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	)
};

export default Footer;
