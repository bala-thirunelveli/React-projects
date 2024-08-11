import React, { useState } from 'react';
import { Button, Container, Typography, Box, Stack } from '@mui/material';
const slides = [
  { title: "Today's workout plan", text: "We're gonna do 3 fundamental exercises." },
  { title: "First, 10 push-ups", text: "Do 10 reps. Remember about full range of motion. Don't rush." },
  { title: "Next, 20 squats", text: "Squats are important. Remember to keep your back straight." },
  { title: "Finally, 15 sit-ups", text: "Slightly bend your knees. Remember about full range of motion." },
  { title: "Great job!", text: "You made it, have a nice day and see you next time!" },
];
const WorkoutSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleRestart = () => {
    setCurrentSlide(0);
  };
return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box mb={2} display="flex" justifyContent="center">
        <Stack style={{padding:"40px"}} direction="row" spacing={2}>
          <Button variant="contained" color="secondary" onClick={handleRestart}>
            Restart
          </Button>
          <Button variant="contained" onClick={handlePrev}>
            Prev
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Stack>
      </Box>
      <Box p={2} sx={{width:"700px",height:'300px'}} display="flex" flexDirection="column" alignItems="center" justifyContent="top" boxShadow={3} borderRadius={2} width={300} textAlign="center">
          <Typography variant="h4" gutterBottom>
            {slides[currentSlide].title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {slides[currentSlide].text}
          </Typography>
        </Box>
    </Container>
  );
};
export default WorkoutSlider;
