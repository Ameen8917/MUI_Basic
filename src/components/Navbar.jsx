import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Mail, Notifications, KeyboardBackspace, Search as SearchIcon } from '@mui/icons-material';



const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    // justifyContent: 'space-between'
    justifyContent: "flex-end",
    color: "white"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))



const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    return (


        <AppBar sx={{ backgroundColor: "#fff" }} position='sticky'>
            <StyledToolbar>

                <Icons>
                    <SearchIcon sx={{ color: "#757575" }} />

                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        onClick={(e) => setOpen(true)}
                    />

                    <KeyboardBackspace sx={{ color: "#757575" }} />


                </Icons>

                <UserBox>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    <Typography variant='span'>John Doe</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                onClose={(e) => setOpen(false)}
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
