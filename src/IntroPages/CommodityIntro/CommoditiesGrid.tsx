import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Sample image URLs (replace these with actual paths or URLs)
const items = [
  { label: "Ribbon Blender", image: process.env.PUBLIC_URL + "/prod1.webp" },
  { label: "Liquid Mixing Machine", image: process.env.PUBLIC_URL + "/prod2.webp" },
  { label: "Detergent Cage Mill", image: process.env.PUBLIC_URL + "/prod3.webp" },
  { label: "Ball Mill", image: process.env.PUBLIC_URL + "/prod4.webp" },
  { label: "Plastic Paint Mixer Machine",  image: process.env.PUBLIC_URL + "/prod5.webp" },
  { label: "Industrial Agitator", image: process.env.PUBLIC_URL + "/prod6.webp" },
  { label: "Vibro Screener", image: process.env.PUBLIC_URL + "/prod7.webp" },
  { label: "Hot Air Dryer", image: process.env.PUBLIC_URL + "/prod8.webp" },
  {
    label: "High Speed Stirrer",
    image: process.env.PUBLIC_URL + "/prod9.webp",
    sub: "(Cabin parts, trims, glass, filters, insulation, fasteners)",
  },
];

export default function CommoditiesGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid
          size={{xs: 12, sm: 6, md: 4}}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: isMobile ? "100%" : 300,
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <img
                    src={item.image}
                    alt={item.label}
                    style={{
                      width: "18rem",
                      height: "21rem",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography variant="h6" fontWeight="600">
                  {item.label}
                </Typography>
                {item.sub && (
                  <Typography variant="caption" color="text.secondary" mt={1}>
                    {item.sub}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
