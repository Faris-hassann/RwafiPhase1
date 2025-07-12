"use client"
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material"
import {
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material"

const Footer = () => {
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

  const services = [
    "Documentation & Certification",
    "Government Services",
    "Commercial Registration",
    "Logistics & Shipping",
    "HR & Recruitment",
  ]

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"]

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        color: "white",
        py: 10,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: themeSettings.primary.main,
                  mr: 2,
                }}
              >
                <Typography variant="h5" fontWeight="bold" color="white">
                  R
                </Typography>
              </Avatar>
              <Box>
                <Typography variant="h3" fontWeight="bold" sx={{
                  fontSize: { xs: '2.2rem', md: '2.8rem' },
                }}>
                  Rwafi
                </Typography>
                <Typography variant="h6" color="grey.400" sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}>
                  Logistics Solutions
                </Typography>
              </Box>
            </Box>
            <Typography variant="h6" color="grey.300" sx={{ mb: 3, maxWidth: 400, lineHeight: 1.6 }}>
              Your trusted partner for seamless business entry into the Saudi Arabian market. We simplify logistics so
              you can focus on growth and success.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  bgcolor: "grey.800",
                  color: "white",
                  "&:hover": {
                    bgcolor: themeSettings.primary.main,
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "grey.800",
                  color: "white",
                  "&:hover": {
                    bgcolor: themeSettings.primary.main,
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "grey.800",
                  color: "white",
                  "&:hover": {
                    bgcolor: themeSettings.primary.main,
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3,
              fontSize: { xs: '1.4rem', md: '1.7rem' },
            }}>
              Our Services
            </Typography>
            <List sx={{ p: 0 }}>
              {services.map((service, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemText
                    primary={service}
                    primaryTypographyProps={{
                      variant: "h6",
                      color: "grey.300",
                      sx: {
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        "&:hover": {
                          color: "white",
                          cursor: "pointer",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3,
              fontSize: { xs: '1.4rem', md: '1.7rem' },
            }}>
              Contact Us
            </Typography>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ px: 0, py: 1 }}>
                <Avatar sx={{ bgcolor: themeSettings.primary.main, width: 24, height: 24, mr: 2 }}>
                  <PhoneIcon sx={{ fontSize: 14 , color: "white"}} />
                </Avatar>
                <Box>
                  <Typography variant="h6" color="grey.300" sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}>
                    +966 50 123 4567
                  </Typography>
                  <Typography variant="body1" color="grey.500" sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}>
                    24/7 Support
                  </Typography>
                </Box>
              </ListItem>
              <ListItem sx={{ px: 0, py: 1 }}>
                <Avatar sx={{ bgcolor: themeSettings.primary.main, width: 24, height: 24, mr: 2 }}>
                  <EmailIcon sx={{ fontSize: 14 , color: "white" }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" color="grey.300" sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}>
                    info@rwafi.sa
                  </Typography>
                  <Typography variant="body1" color="grey.500" sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}>
                    Business Inquiries
                  </Typography>
                </Box>
              </ListItem>
              <ListItem sx={{ px: 0, py: 1 }}>
                <Avatar sx={{ bgcolor: themeSettings.primary.main, width: 24, height: 24, mr: 2 }}>
                  <LocationIcon sx={{ fontSize: 14 , color: "white" }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" color="grey.300" sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}>
                    Riyadh, Saudi Arabia
                  </Typography>
                  <Typography variant="body1" color="grey.500" sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}>
                    Main Office
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ my: 4, borderColor: "grey.800" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" color="grey.500" sx={{
            fontSize: { xs: '1rem', md: '1.15rem' },
          }}>
            © 2024 Rwafi. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {legalLinks.map((link) => (
              <Typography
                key={link}
                variant="h6"
                color="grey.500"
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  "&:hover": {
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
