import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import { LibraryBooks } from '@mui/icons-material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router';


const Navbar = () => {

  const drawerWidth = 245;
  const listItem = [
    {
      id: 0,
      lebel: 'Book List',
      icon: <LibraryBooks />,
      route: 'book-list'
    },
    {
      id: 1,
      lebel: 'Student List',
      icon: <PeopleIcon />,
      route: 'student-list'
    }
  ];
  const editItem = [
    {
      id: 0,
      lebel: 'Update Books',
      icon: <AddBoxIcon />,
      route: 'update-book-list'
    },
    {
      id: 1,
      lebel: 'Update Students',
      icon: <GroupAddIcon />,
      route: 'update-student-list'
    }
  ];

  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          // backgroundColor: '#182a93',
          backgroundColor: '#35488b',
          color: 'white'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <ListItem button onClick={() => navigate('/')}>
        <ListItemButton >
          <ListItemIcon sx={{ color: 'white' }}>
          <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
      </ListItem>


      <Divider
        sx={{
          backgroundColor: 'white',
        }} />
      <List>
        {listItem.map((item, index) => (
          <ListItem key={item.id} button onClick={() => navigate(item.route)}>
            <ListItemButton >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.lebel} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          backgroundColor: 'white',
        }}
      />
      <List>
        {editItem.map((item, index) => (
          <ListItem key={item.id} button onClick={() => navigate(item.route)}>
            <ListItemButton >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.lebel} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;