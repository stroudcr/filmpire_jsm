import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Most Recent', value: 'most_recent' },
]
const demoCategories = [
    { label: 'Bikini', value: 'bikini' },
    { label: 'Bodybuilding', value: 'bodybuilding' },
    { label: 'Olympic Weightlifting', value: 'olympic-weightlifting' },
    { label: 'Yoga', value: 'yoga' },
];


const redLogo = 'https://www.welldiem.com/static/media/logo.1f18530b.svg'
const blueLogo ='https://cdn.pixabay.com/photo/2020/08/05/13/11/eco-5465425_1280.png'

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = useStyles();
  return (
    <>
        <Link to="/" className={classes.imageLink} >
            <img
            className={classes.image}
            src={theme.palette.mode === 'light' ? redLogo : blueLogo}
            alt="WellDiem Logo"
            />
        </Link>
        <Divider />
        <List>
            <ListSubheader>Coaches</ListSubheader>
            {categories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        <ListItemIcon>
                            <img src={blueLogo} className={classes.genreImages} height={30} alt="genre"/>
                        </ListItemIcon>
                        <ListItemText primary={label}/>
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider />
        <List>
            <ListSubheader>Categories</ListSubheader>
            {demoCategories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        <ListItemIcon>
                            <img src={blueLogo} className={classes.genreImages} height={30} alt="genre"/>
                        </ListItemIcon>
                        <ListItemText primary={label}/>
                    </ListItem>
                </Link>
            ))}
        </List>
    </>
  )
}

export default Sidebar