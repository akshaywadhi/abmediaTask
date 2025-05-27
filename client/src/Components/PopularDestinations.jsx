import React, {useState, useEffect} from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import axiosInstance from '../axiosInstance';
import { AiOutlineDoubleLeft ,AiOutlineDoubleRight} from "react-icons/ai";

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState([])




  useEffect(() => {

    fetch()
  },[])


  async function fetch(){

    try {

      const data = await axiosInstance.get('/destinations')
      console.log(data)
      setDestinations(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom color='#058ea1'>
        Explore Most Popular Destinations
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
        Plan your perfect trip with our most loved and <br/> best-selling tour packages.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {destinations.map((dest, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="250"
                image={dest.image}
                alt={dest.name}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" fontWeight={600} color="#00838f" padding='0px 10px'>
                  {dest.name}
                </Typography>
                <Typography variant="body1" padding='0px 10px'>
                    Starting From <span style={{ color: '#00838f', fontWeight: 600 }}>₹ {dest.price}/-</span>
                </Typography>
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
