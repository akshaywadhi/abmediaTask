import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { IoMdTime } from "react-icons/io";
import { FaMoneyBill } from "react-icons/fa6";
import { FaNetworkWired,FaBookOpen } from "react-icons/fa";

export default function AdvantagesSection() {
 const advantages = [
  {
    icon: <IoMdTime size={70} color="#83d2d5" />,
    title: 'Save Time',
    description: <>No More Switching For<br/> Packages Or Plans.</>,
  },
  {
    icon: <FaMoneyBill size={70} color="#83d2d5" />,
    title: 'Save Money',
    description: <>Compare, Negotiate, <br /> And Choose The Best.</>,
  },
  {
    icon: <FaNetworkWired size={70} color="#83d2d5"/>,
    title: 'Trusted Network',
    description: <>A Trusted Network Of<br /> 7000+ Travel Agents</>,
  },
  {
    icon: <FaBookOpen size={70} color="#83d2d5"/>,
    title: 'Multiple Options',
    description: <>Itineraries & Travel Tips<br /> From Trusted Agents</>,
  },
];

  return (
    <Box sx={{ backgroundColor: '#83d2d5', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
          Our Advantages
        </Typography>
        <Typography variant="subtitle2" align="center" mb={6}>
          You can rely on our experience and the quality of services we provide. <br />
          Here are other reasons to book tours at Treat Holidays.
        </Typography>

        <Grid container spacing={15} justifyContent="center">
          {advantages.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box textAlign="center">
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    bgcolor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
            
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
