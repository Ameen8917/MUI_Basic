import { Box, Card, Divider, Typography, } from '@mui/material'
import React from 'react'
import Post from './Post'
import Cards from "./Cards"

const Data = [
    {
        "srno": 1,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "ANA/0003 AX12345",
        "CategorySubCategoryAssetGroup": "ANAESTHETIA ANAESTHETIA ANAESTHETIA",
        "ModelMakerSupplier": "4008 S FRESNIUS MEDIC FRESNIUS MEDICAL CARE0",
        "Department": "CARDIOLOGY",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "IN USE -",
        "Ownershiptype": "Own"
    },
    {
        "srno": 2,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "RAD/0003 123123123",
        "CategorySubCategoryAssetGroup": "BIOMEDICAL EQUIPMENTS RADIOLOGY LABORATORY",
        "ModelMakerSupplier": "ABG ROCHE CARESTREAM HEALTH",
        "Department": "CATHLAB",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "REPAIR -",
        "Ownershiptype": "Own"
    },
    {
        "srno": 3,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "ANA/0003 AX12345",
        "CategorySubCategoryAssetGroup": "ANAESTHETIA ANAESTHETIA ANAESTHETIA",
        "ModelMakerSupplier": "4008 S FRESNIUS MEDIC FRESNIUS MEDICAL CARE0",
        "Department": "CARDIOLOGY",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "IN USE -",
        "Ownershiptype": "Own"
    },
    {
        "srno": 4,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "RAD/0003 123123123",
        "CategorySubCategoryAssetGroup": "BIOMEDICAL EQUIPMENTS RADIOLOGY LABORATORY",
        "ModelMakerSupplier": "ABG ROCHE CARESTREAM HEALTH",
        "Department": "CATHLAB",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "REPAIR -",
        "Ownershiptype": "Own"
    },
    {
        "srno": 5,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "ANA/0003 AX12345",
        "CategorySubCategoryAssetGroup": "ANAESTHETIA ANAESTHETIA ANAESTHETIA",
        "ModelMakerSupplier": "4008 S FRESNIUS MEDIC FRESNIUS MEDICAL CARE0",
        "Department": "CARDIOLOGY",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "IN USE -",
        "Ownershiptype": "Own"
    },
    {
        "srno": 6,
        "branchName": "KMC - KUMARAN MEDICAL CENTER",
        "AssetCodeDescSerialNo": "RAD/0003 123123123",
        "CategorySubCategoryAssetGroup": "BIOMEDICAL EQUIPMENTS RADIOLOGY LABORATORY",
        "ModelMakerSupplier": "ABG ROCHE CARESTREAM HEALTH",
        "Department": "CATHLAB",
        "FunctionalityPriorityRisk": "CRITICAL HIGH HIGH",
        "AssetApprovalStatus": "REPAIR -",
        "Ownershiptype": "Own"
    }
]

const Feed = () => {
    const [data, setData] = React.useState(Data)

    return (

        <Box flex={6} p={2}>
            <Card sx={{ padding: 3, borderRadius: 5 }}>
                <Typography variant="h6" gutterBottom component="div">
                    Assest Register
                </Typography>
                <Divider />
                {data.length > 0 && data.map((item, index) => {
                    return (
                        <Box flex={1} padding={1}>
                            <Cards key={item.srno} data={item} />
                        </Box >
                    )
                })}
            </Card>
        </Box>

    )
}

export default Feed
