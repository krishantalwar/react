import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Input from '../../components/ui/forminputs/input';

import Selects from '../../components/ui/forminputs/select';

import Button from '../../components/ui/button/button';

import {
    useGetUserListQuery,
    // useLoginGoogleMutation
} from '../../features/npi/npiService';


export default function NpiForm() {

    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserListQuery('getUser')


    // console.log(user)
    // console.log(isLoading)
    // console.log(isSuccess)
    // console.log(isError)
    // console.log(error)
    const handleSubmit = (event) => {

    };
    if (isSuccess) {
        // console.log(user)
    }



    return (
        <React.Fragment>
            <Box component="form" onSubmit={handleSubmit} >

                <Box
                    component="main"
                    sx={{
                        backgroundColor: 'white',
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        mt: 2
                    }}
                >


                </Box>
            </Box>
        </React.Fragment >
    )
}