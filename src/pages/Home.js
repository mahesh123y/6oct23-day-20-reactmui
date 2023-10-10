
import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Wrapper = styled(Box)(({ theme }) => ({
  background: "red",
  width: "100%",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    background: "orange",
  },
  [theme.breakpoints.down("sm")]: {
    background: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    background: "purple",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  paddingTop: "3rem",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}))

const Home = () => {
  return (
    <>
      <Wrapper>
        <Heading variant="h2">This is a Heading tag</Heading>
      </Wrapper>
    </>
  )
}

export default Home