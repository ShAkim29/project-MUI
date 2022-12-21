import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductsList from '../components/Products/ProductsList';

const ProductPages = () => {
    return (
        <Box>
            Producets Page
            <Grid container spacing={3}>
                <ProductsList/>
                </Grid>
        </Box>
    );
};

export default ProductPages;