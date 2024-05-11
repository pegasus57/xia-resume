import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import {useNavigate} from "react-router-dom";
export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const navigate = useNavigate()
    const menuList = [{text:'Home',link:'/'},
        {text:'Menu',link:'/menu'},
        {text:'Resume',link:'/resume'},
        {text:'Residential',link:'/residential-01'},
        {text:'Commercial',link:'/commercial-01'},
        {text:'Office',link:'/office-01'},
        {text:'Working',link:'/working-01'},
        {text:'Dynamo',link:'/dynamo'},
        {text:'Rhino',link:'/rhino'},
        {text:'Handcraft',link:'/handcraft'},{text:'Photograph',link:'/photograph'}]
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {menuList.map((ele, index) => (
                    <ListItem key={ele.text} disablePadding>
                        <ListItemButton onClick={()=>{
                            navigate(`${ele.link}`)
                        }}>
                            {/*<ListItemIcon>*/}
                            {/*    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                            {/*</ListItemIcon>*/}
                            <ListItemText primary={ele.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <ListIcon sx={{color:"gray"}}/>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}