import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    name: "Name",
    title: "Company / Designation",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    name: "Name",
    title: "Company / Designation",
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    name: "Name",
    title: "Company / Designation",
  },
];

export default function Testimonial() {
  return (
    <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 10 }}>
          Testimonials
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ width: { xs: 'auto', sm: '30%' } }}>

              <Box
                sx={{
                  bgcolor: "#f9f9f9",
                  borderRadius: 2,
                  boxShadow: "0 1px 6px rgba(0, 0, 0, 0.1)",
                  p: 4,
                  pt: 6,
                  position: "relative",
                  textAlign: "left",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 80,
                    height: 80,
                    position: "absolute",
                    top: "-32px",
                    left: 24,
                    border: "4px solid white",
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {testimonial.text}
                </Typography>
                <Typography variant="subtitle1" fontWeight={700}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.title}
                </Typography>
              </Box>
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
    </Box>
  );
}
