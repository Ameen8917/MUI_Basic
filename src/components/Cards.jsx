import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Co2Sharp, History, QrCode, Edit, PictureAsPdf, ExpandMore, Logout, PersonAdd, Settings, Visibility } from '@mui/icons-material';
import { useState } from 'react';




const Cards = ({ data }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box borderBottom="1px solid #efefef">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        {data.srno}
                    </Avatar>
                }
                action={
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <IconButton aria-label="add to favorites">
                            <Visibility />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="share">
                            <PictureAsPdf />
                        </IconButton>
                        <IconButton aria-label="share">
                            <History />
                        </IconButton>
                        <IconButton aria-label="share">
                            <QrCode />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Box>
                }
                title={data.branchName}
                subheader="Branch"
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <CardContent>
                    <Box display="flex" gap={2} flexDirection="row" justifyContent="space-around" alignItems="center" marginBottom={2}>
                        <Box flex={1}>
                            <Typography sx={{ fontSize: 12 }} color="text.secondary">
                                Asset Code/Desc/Serial No
                            </Typography>
                            <Typography sx={{ fontSize: 14, fontWeight: '500' }} variant="body2" component="div">
                                {data.AssetCodeDescSerialNo}
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                                Category/Sub Categor/Asset Group
                            </Typography>
                            <Typography sx={{ fontSize: 14, fontWeight: '500' }} variant="body2" component="div">
                                {data.CategorySubCategoryAssetGroup}
                            </Typography>
                        </Box>

                        <Box flex={1}>
                            <Typography sx={{ fontSize: 11 }} color="text.secondary">
                                Model/Maker/Supplier
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: '500' }} variant="body2" gutterBottom component="div">
                                {data.ModelMakerSupplier}
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <Typography sx={{ fontSize: 11 }} color="text.secondary" >
                                Department
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: '500' }} variant="body2" gutterBottom component="div">
                                {data.Department}
                            </Typography>
                        </Box>
                    </Box>


                    <Box display="flex" gap={2} flexDirection="row" justifyContent="space-around" alignItems="center">
                        <Box flex={1}>
                            <Typography sx={{ fontSize: 11 }} color="text.secondary" >
                                Functionality/Priority/Risk
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: '500' }} variant="body2" gutterBottom component="div">
                                {data.FunctionalityPriorityRisk}
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <Typography sx={{ fontSize: 11 }} color="text.secondary" >
                                Asset/Approval Status
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: '500' }} variant="body2" gutterBottom component="div">
                                {data.AssetApprovalStatus}
                            </Typography>
                        </Box>
                        <Box flex={2}>
                            <Typography sx={{ fontSize: 11 }} color="text.secondary" >
                                Ownership type
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: '500' }} variant="body2" gutterBottom component="div">
                                {data.Ownershiptype}
                            </Typography>
                        </Box>
                    </Box>




                </CardContent>
            </Collapse>
        </Box>
    )
}

export default Cards
