import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { HomeOutlined, StarOutlineOutlined, FileDownloadOutlined, ExploreOutlined, BusinessCenterOutlined, Settings, Person, Article, Group, Storefront, DarkMode } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <Box
            bgcolor="#fff"
            height="100vh"
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#home">
                            <ListItemIcon>
                                <HomeOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#setting">
                            <ListItemIcon>
                                <StarOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="UI Kit" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#profile">
                            <ListItemIcon>
                                <BusinessCenterOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#profile">
                            <ListItemIcon>
                                <ExploreOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Utilities" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#pages">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton compoenet="a" href="#profile">
                            <ListItemIcon>
                                <FileDownloadOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Start" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>
        </Box>
    )
}

export default Sidebar
