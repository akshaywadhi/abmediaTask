import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";

export default function TourPackage() {
  
  const [packages, setPackages] = useState([])




  useEffect(() => {

    fetch()
  },[])


  async function fetch(){

    try {

      const data = await axiosInstance.get('/packages/top-selling')
     
      setPackages(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container sx={{ py: 6 }}>
          <Typography variant="h3" align="center" fontWeight={700} gutterBottom color='#058ea1'>
            Top Selling Tour Packages of India
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
              Stay updated with our latest news and happenings through
Informe.
            </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packages.map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={tour.image}
                alt={tour.title}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" fontWeight={600} color="teal" gutterBottom>
                  {tour.title}
                </Typography>
                <Button fullWidth variant="contained" sx={{ bgcolor: 'teal', mt: 1, borderRadius : '30px' }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  
        <Box
                       sx={{
                         mt: 6,
                         display: 'flex',
                         justifyContent: 'end',
                         alignItems: 'center',
                         gap: 2
                       }}
                     >
                       <Button
                         sx={{
                           backgroundColor: '#D3D3D3',
                           minWidth: 50,
                           height: 50,
                           borderRadius: '50%',
                           '&:hover': {
                             backgroundColor: '#b0b0b0'
                           }
                         }}
                       ><AiOutlineDoubleLeft />
                         </Button>
                       <Button
                         sx={{
                           backgroundColor: '#FDCB02',
                           minWidth: 50,
                           height: 50,
                           borderRadius: '50%',
                           '&:hover': {
                             backgroundColor: '#e6b900'
                           }
                         }}
                       ><AiOutlineDoubleRight /> </Button>
                     </Box>
      
    </Container>
  );
}
