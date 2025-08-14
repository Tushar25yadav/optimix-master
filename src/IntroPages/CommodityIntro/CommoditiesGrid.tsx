import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const items = [
  {
    label: "Ribbon Blender",
    mainImage: process.env.PUBLIC_URL + "/prod1.webp",
    images: [
      process.env.PUBLIC_URL + "/prod1.webp",
      process.env.PUBLIC_URL + "/1.1.webp",
      process.env.PUBLIC_URL + "/1.3.webp",
      process.env.PUBLIC_URL + "/1.4.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Liquid Mixing Machine",
    mainImage: process.env.PUBLIC_URL + "/prod2.webp",
    images: [
      process.env.PUBLIC_URL + "/prod2.webp",
      process.env.PUBLIC_URL + "/2.2.webp",
      process.env.PUBLIC_URL + "/2.3.webp",
      process.env.PUBLIC_URL + "/2.4.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Detergent Cage Mill",
    mainImage: process.env.PUBLIC_URL + "/prod3.webp",
    images: [
      process.env.PUBLIC_URL + "/prod3.webp",
      /*process.env.PUBLIC_URL + "/3.2.webp",*/
      process.env.PUBLIC_URL + "/3.3.webp",
      process.env.PUBLIC_URL + "/3.4.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Ball Mill",
    mainImage: process.env.PUBLIC_URL + "/prod4.webp",
    images: [
      process.env.PUBLIC_URL + "/prod4.webp",
      process.env.PUBLIC_URL + "/4.2.webp",
      process.env.PUBLIC_URL + "/4.3.webp",
      /*process.env.PUBLIC_URL + "/4.4.webp",*/
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Plastic Paint Mixer Machine",
    mainImage: process.env.PUBLIC_URL + "/prod5.webp",
    images: [
      process.env.PUBLIC_URL + "/prod5.webp",
      process.env.PUBLIC_URL + "/5.2.webp",
      /*process.env.PUBLIC_URL + "/5.3.webp",*/
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Others",
    mainImage: process.env.PUBLIC_URL + "/6.3.webp",
    images: [
      process.env.PUBLIC_URL + "/6.3.webp",
      process.env.PUBLIC_URL + "/6.2.webp",
      process.env.PUBLIC_URL + "/6.4.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  /*{
    label: "Vibro Screener",
    mainImage: process.env.PUBLIC_URL + "/prod7.webp",
    images: [
      process.env.PUBLIC_URL + "/prod7.webp",
      process.env.PUBLIC_URL + "/prod7.webp",
      process.env.PUBLIC_URL + "/prod7.webp",
      process.env.PUBLIC_URL + "/prod7.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "Hot Air Dryer",
    mainImage: process.env.PUBLIC_URL + "/prod8.webp",
    images: [
      process.env.PUBLIC_URL + "/prod8.webp",
      process.env.PUBLIC_URL + "/prod8.webp",
      process.env.PUBLIC_URL + "/prod8.webp",
      process.env.PUBLIC_URL + "/prod8.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },
  {
    label: "High Speed Stirrer",
    mainImage: process.env.PUBLIC_URL + "/prod9.webp",
    images: [
      process.env.PUBLIC_URL + "/prod9.webp",
      process.env.PUBLIC_URL + "/prod9.webp",
      process.env.PUBLIC_URL + "/prod9.webp",
      process.env.PUBLIC_URL + "/prod9.webp",
    ],
    content: `Ribbon blender is used for mixing dry powder like Wall Putty, Minerals, Chemicals, Ready Mix Food/Spices, Detergent, Tiles Adhesive, Herbal Medicines, Fertilizer Industries etc. It is also used for Paste/Slurry making in Confectionary, Tooth Paste, Distemper & Acrylic Paints, Cosmetics, Different Lotions, Liquid Soap industries etc.`,
    price: "₹3,30,000 / Piece",
    capacity: '100 Kgs / Batch',
    grade: 'Semi-Automatic',
    type: 'Customized',
    brand: 'Bharati Udhyam',
    material: 'Stainless Steel',
    sub: `Machinery for Detergent Powder Manufacturing Industries. A customized machine designed to
          minimize time losses as well as labour. Consists of a Mixer Drum along with a Cage Mill.`
  },*/
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommoditiesGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpen = (item: typeof items[0]) => {
    setSelectedItem(item);
    setSelectedImage(0); // Reset on open
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
    setSelectedImage(0);
  };

  return (
    <>
      <Box sx={{ py: 6, px: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {items.map((item, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4
              }}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                onClick={() => handleOpen(item)}
                sx={{
                  width: isMobile ? "100%" : 300,
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  cursor: "pointer",
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
                      src={item.mainImage}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Full Screen Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative", backgroundColor: "#333" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {selectedItem?.label}
            </Typography>
          </Toolbar>
        </AppBar>

        {selectedItem && (
          <Box sx={{ p: { xs: 2, md: 6 } }}>
            <Grid container spacing={4} alignItems="flex-start">
              {/* LEFT SIDE */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {/* Thumbnail Column */}
                  <Grid size={{ xs: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        height: "100%",
                        overflowY: "auto",
                      }}
                    >
                      {selectedItem.images.map((img, i) => (
                        <Box
                          key={i}
                          component="img"
                          src={img}
                          onClick={() => setSelectedImage(i)}
                          sx={{
                            width: "100%",
                            height: 64,
                            objectFit: "cover",
                            borderRadius: 1,
                            border:
                              selectedImage === i ? "2px solid #1976d2" : "2px solid transparent",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>

                  {/* Main Image */}
                  <Grid size={{ xs: 10 }}>
                    <Box
                      component="img"
                      src={selectedItem.images[selectedImage]}
                      alt={selectedItem.label}
                      sx={{
                        width: "100%",
                        maxHeight: "70vh",
                        objectFit: "contain",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* RIGHT SIDE */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {selectedItem.label}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {selectedItem.content}
                </Typography>

                <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Product Details:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                    <li>💰 <strong>Price: </strong>{selectedItem.price}</li>
                    <li>📦 <strong>Capacity: </strong>{selectedItem.capacity}</li>
                    <li>⚙️ <strong>Automation Grade: </strong>{selectedItem.grade}</li>
                    <li>📐 <strong>Design Type:</strong>{selectedItem.type}</li>
                    <li>🏷️ <strong>Brand: </strong> {selectedItem.brand}</li>
                    <li>🔩 <strong>Material: </strong> {selectedItem.material}</li>
                  </ul>
                </Box>

                <Box mt={4}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedItem.sub}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Dialog>
    </>
  );
}