import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box

            flex={2}
            sx={{ display: { xs: "none", sm: "block" } }}
            p={2}>
            <Box position="fixed">
                <Typography
                    variant="h6"
                    fontWeight={100}
                >
                    Online Friends
                </Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
                </AvatarGroup>
                <Typography
                    variant="h6"
                    fontWeight={100}
                >
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/10/18/16/08/wolves-2864647__480.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2018/03/19/21/46/wolf-3241382__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>

                        <img
                            src="https://cdn.pixabay.com/photo/2014/11/27/04/35/wolf-547203__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/10/18/16/08/wolves-2864647__480.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2018/03/19/21/46/wolf-3241382__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2014/11/27/04/35/wolf-547203__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/05/18/16/12/wolves-1400819__340.jpg"
                            alt={""}
                        />
                    </ImageListItem>


                </ImageList>
            </Box>
        </Box>
    )
}

export default Rightbar
