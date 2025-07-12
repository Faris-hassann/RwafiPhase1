"use client"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material"

const AboutSection = () => {
  // Get the home page theme settings for light mode
  const themeSettings = {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
  }

  const benefits = [
    "Local Expertise & Knowledge",
    "Government Relations",
    "Fast Processing Times",
    "Comprehensive Support",
    "Competitive Pricing",
  ]

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "bold",
              mb: 2,
              background: `linear-gradient(45deg, ${themeSettings.primary.main}, ${themeSettings.primary.light})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Rwafi
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: themeSettings.text.secondary,
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.3rem",
              lineHeight: 1.6,
            }}
          >
            We are a leading logistics and business services company in Saudi Arabia, dedicated to helping businesses
            establish and grow their presence in the region.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ space: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="black" sx={{ mb: 3 }}>
                Your Trusted Partner in Saudi Arabia
              </Typography>
              <Typography variant="h5" color={themeSettings.text.secondary} sx={{ mb: 4, lineHeight: 1.7, fontSize: "1.2rem" }}>
                With years of experience in the Saudi market, we understand the unique challenges and opportunities that
                businesses face when entering this dynamic region. Our comprehensive services ensure a smooth and
                successful business establishment.
              </Typography>
              <Grid container spacing={3} sx={{ mt: 2, mb: 6 }}>
                <Grid item xs={6}>
                  <Card sx={{ textAlign: "center", p: 3, bgcolor: themeSettings.primary.main, borderRadius: 4, boxShadow: 0 }}>
                    <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 1 }}>
                      10+
                    </Typography>
                    <Typography variant="h6" color="white">
                      Years Experience
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ textAlign: "center", p: 3, bgcolor: themeSettings.success.main, borderRadius: 4, boxShadow: 0 }}>
                    <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 1 }}>
                      1000+
                    </Typography>
                    <Typography variant="h6" color="white">
                      Projects Completed
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card sx={{ p: 4, boxShadow: 3,  borderRadius: 4, bgcolor: 'white', mt: { xs: 2, lg: 0 } }}>
              <Typography variant="h3" fontWeight="bold" color={themeSettings.text.primary} sx={{ mb: 3 }}>
                Why Choose Rwafi?
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0, mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 80 }}>
                      <Avatar sx={{ bgcolor: themeSettings.primary.main, width: 32, height: 32 }}>
                        <CheckCircleIcon sx={{ fontSize: 20, color: "white" }} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "1.4rem",
                        color: themeSettings.text.primary,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection
