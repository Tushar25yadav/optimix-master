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
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/prod1.webp",
        content: `Detergent Powder Plant`,
        price: "₹3,30,000 / Piece",
        capacity: "100 Kgs / Batch",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Machinery for Detergent Powder Manufacturing Industries.
A Customized Machine designed to minimize Time losses as well as Labour.
Consists of a Mixer Drum along with a Cage Mill.`,
      },
      {
        image: process.env.PUBLIC_URL + "/1.1.webp",
        content: `Detergent Mixer Machine`,
        price: "₹88,000 / Piece",
        capacity: "2000 Kgs / Batch",
        grade: "Semi-Automatic",
        type: "Pulley & Gearbox",
        brand: "Bharati Udhyam",
        material: "MS/SS",
        sub: `Ribbon blender is used for mixing dry powder like Wall putti, Ready Mix Food/Spices, Detergent, Tiles adhesive, Herbal medicines, Fertilizer industries etc.

 

It is also used for paste/slurry making in Confectionary, Tooth Paste, Distemper & Acrylic paints, cosmetics, Different lotions, Liquid soap industries etc.`,
      },
      {
        image: process.env.PUBLIC_URL + "/1.3.webp",
        content: `Tiles Adhesive Mixer Machine`,
        price: "₹92,000 / Piece",
        capacity: "As per requirement",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Mild Steel",
        sub: `This blender consists of U shaped open drum with a rotating Shaft having Spiral ribbons/Paddle shaped Blades that rotates on a horizontal axis, mounted on a sturdy structure. Our clients can avail this Blender in different specifications in accordance with their specific demands`,
      },
      {
        image: process.env.PUBLIC_URL + "/1.4.webp",
        content: `Industrial SS Paint Mixing Machine`,
        price: "₹88,000 / Piece",
        capacity: "1200-1500 Kgs / Batch",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless   Steel & Mild Steel",
        sub: `Mixing Drum is made up of Stainless Steel 316.
This Paint Mixing Machine Can be used for mixing material 1200-1500 KG per Batch.

Its Frame is made of Mild Steel Heavy C channel.
Equipped with a Suitable Gearbox, it is one of the silent Machinery available.`,
      },
    ],
  },
  {
    label: "Liquid Mixing Machine",
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/prod2.webp",
        content: `Industrial Liquid Mixers`,
        price: "₹90,000 / Piece",
        capacity: "300 Ltr",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `A perfect Equipment for mixing of Liquid Soap/ Detergent/ Sanatizer/ Hand Wash/ Shampoo/ Toilet Cleaner/ Resin/ Chocolate at slow Speeds.
Gives even distribution of contents for a Homogeneous Product.`,
      },
      {
        image: process.env.PUBLIC_URL + "/2.2.webp",
        content: `Portable Liquid Mixer`,
        price: "₹22,000 / Piece",
        capacity: "100 Ltr",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `A perfect Equipment for mixing of Liquid Soap/ Detergent/ Sanatizer/ Hand Wash/ Shampoo/ Toilet Cleaner/ Resin/ Chocolate at slow Speeds.
Gives even distribution of contents for a Homogeneous Product.`,
      },
      {
        image: process.env.PUBLIC_URL + "/2.3.webp",
        content: `High Speed Stirrer`,
        price: "₹76,000 / Piece",
        capacity: "400 Ltr",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Mainly used in chemical synthesis, pharmaceutical, physical and chemical analysis, petrochemical, chemical, cosmetics, health products, food, biotechnology, and other fields. > Suitable for large-volume, high-viscosity sample stirring tasks.`,
      },
      {
        image: process.env.PUBLIC_URL + "/2.4.webp",
        content: `High Shear Stirrer`,
        price: "₹76,000 / Piece",
        capacity: "1000 Ltr",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Running at Blade speed of about 1400-2800 RPM, the Blade of our High Speed Blender creates a turbulent flow/vortex in the batch to disperse dry powders into the solvent quickly within an acceptable level of dispersion`,
      },// ...more
    ],
  },
  {
    label: "Detergent Cage Mill",
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/prod3.webp",
        content: `Detergent Cage Miller`,
        price: "₹39,000 / Piece",
        capacity: "600 Kg/Hr",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Mild Steel",
        sub: `This Segregator consists of Cylinder with a rotating Shaft having Paddle shaped Blades that rotates on a horizontal axis, mounted on a sturdy structure.

Beneath the Paddle shaped blades is a steel mesh which only allows fine Powder particles to pass to the shoot region & rest of the particles rotate along with the shaft until they break into smaller pieces.`,
      },
      {
        image: process.env.PUBLIC_URL + "/3.3.webp",
        content: `Detergent Channa / Chalna`,
        price: "₹39,000 / Piece",
        capacity: "100 Kg",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Mild Steel & Stainless Steel",
        sub: `Used by detergent manufacturing industries, Also known as Detergent Cage Mills.`,
      },
      {
        image: process.env.PUBLIC_URL + "/3.4.webp",
        content: `Detergent Screening Machine`,
        price: "₹39,000 / Piece",
        capacity: "10 Ton / Day",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Cage mills is use for the sieving of detergent powder, having capacity of about 10 /5Tonne per day. Equipped with the 2/1 HP motor, it's a highly effective machine for the particle segregation of detergent powder.`,
      },// ...more
    ],
  },
  {
    label: "Ball Mill",
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/prod4.webp",
        content: `Industrial Ball Mill`,
        price: "₹60,000 / Piece",
        capacity: "As per requirement",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of Ball Mill. This mill consists of cylindrical shell that rotates on a horizontal axis, mounted on a sturdy structure. Our clients can avail this mill in different specifications in accordance with their specific demands.`,
      },
      {
        image: process.env.PUBLIC_URL + "/4.2.webp",
        content: `Ceramic / Mineral Ball Mill`,
        price: "₹80,000 / Piece",
        capacity: "As per requirement",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Mild Steel",
        sub: `The ball mill is key equipment in grinding, mixing and dispersing, especially for mineral (Quartz, Lime, Cement), Flux making, Abrasives, Colour/Paint, chemicals and Pharmaceutical Industries.`,
      },
      {
        image: process.env.PUBLIC_URL + "/4.3.webp",
        content: `Ball Grinding Mill`,
        price: "₹60,000 / Piece",
        capacity: "As per requirement",
        grade: "Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of Ball Mill. This mill consists of cylindrical shell that rotates on a horizontal axis, mounted on a sturdy structure. Our clients can avail this mill in different specifications in accordance with their specific demands`,
      },
    ],
  },
  {
    label: "Plastic Paint Mixer Machine",
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/prod5.webp",
        conten1: `Paint Mixers`,
        price: "₹3,10,000 / Piece",
        capacity: "600 Ltrs",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of High Speed Blender. Also sometimes called High Speed Dissolver/Mixer, is a standard workhorse in the coatings industries. An economical and relatively simple piece of mixing equipment, its primary purpose is to incorporate powders into liquid and break down loose agglomerates to produce an acceptable level of dispersion prior to milling.

Running at Blade speed of about 1500-1600 RPM, the Blade of our High Speed Blender creates a turbulent flow/vortex in the batch to disperse dry powders into the solvent quickly within an acceptable level of dispersion.`,
      },
      {
        image: process.env.PUBLIC_URL + "/5.2.webp",
        content: `Agitator`,
        price: "₹3,1000 / Piece",
        capacity: "2000 Kgs / Batch",
        grade: "Semi-Automatic",
        type: "Pulley & Gearbox",
        brand: "Bharati Udhyam",
        material: "MS/SS",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of High Speed Blender. Also sometimes called High Speed Dissolver/Mixer, is a standard workhorse in the coatings industries. An economical and relatively simple piece of mixing equipment, its primary purpose is to incorporate powders into liquid and break down loose agglomerates to produce an acceptable level of dispersion prior to milling.

Running at Blade speed of about 1500-1600 RPM, the Blade of our High Speed Blender creates a turbulent flow/vortex in the batch to disperse dry powders into the solvent quickly within an acceptable level of dispersion.`,
      },
    ],
  },
  {
    label: "Others Products",
    catelog: [
      {
        image: process.env.PUBLIC_URL + "/6.3.webp",
        conten1: `Paint Mixers`,
        price: "₹3,10,000 / Piece",
        capacity: "600 Ltrs",
        grade: "Semi-Automatic",
        type: "Customized",
        brand: "Bharati Udhyam",
        material: "Stainless Steel",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of High Speed Blender. Also sometimes called High Speed Dissolver/Mixer, is a standard workhorse in the coatings industries. An economical and relatively simple piece of mixing equipment, its primary purpose is to incorporate powders into liquid and break down loose agglomerates to produce an acceptable level of dispersion prior to milling.

Running at Blade speed of about 1500-1600 RPM, the Blade of our High Speed Blender creates a turbulent flow/vortex in the batch to disperse dry powders into the solvent quickly within an acceptable level of dispersion.`,
      },
      {
        image: process.env.PUBLIC_URL + "/5.2.webp",
        content: `Agitator`,
        price: "₹3,1000 / Piece",
        capacity: "2000 Kgs / Batch",
        grade: "Semi-Automatic",
        type: "Pulley & Gearbox",
        brand: "Bharati Udhyam",
        material: "MS/SS",
        sub: `Our organization has gained recognition as the affluent manufacturer and supplier of a qualitative range of High Speed Blender. Also sometimes called High Speed Dissolver/Mixer, is a standard workhorse in the coatings industries. An economical and relatively simple piece of mixing equipment, its primary purpose is to incorporate powders into liquid and break down loose agglomerates to produce an acceptable level of dispersion prior to milling.

Running at Blade speed of about 1500-1600 RPM, the Blade of our High Speed Blender creates a turbulent flow/vortex in the batch to disperse dry powders into the solvent quickly within an acceptable level of dispersion.`,
      },
    ],
  },
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
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpen = (item: (typeof items)[0]) => {
    setSelectedItem(item);
    setSelectedImage(0);
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
                      src={item.catelog[0].image}
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
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
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
                  {/* Thumbnails */}
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
                      {selectedItem.catelog.map((prod, i) => (
                        <Box
                          key={i}
                          component="img"
                          src={prod.image}
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
                      src={selectedItem.catelog[selectedImage].image}
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
                  {selectedItem.catelog[selectedImage].content}
                </Typography>

                <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Product Details:
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                    <li><strong>Price: </strong>{selectedItem.catelog[selectedImage].price}</li>
                    <li><strong>Capacity: </strong>{selectedItem.catelog[selectedImage].capacity}</li>
                    <li><strong>Automation Grade: </strong>{selectedItem.catelog[selectedImage].grade}</li>
                    <li><strong>Design Type: </strong>{selectedItem.catelog[selectedImage].type}</li>
                    <li><strong>Brand: </strong>{selectedItem.catelog[selectedImage].brand}</li>
                    <li><strong>Material: </strong>{selectedItem.catelog[selectedImage].material}</li>
                  </ul>
                </Box>

                <Box mt={4}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedItem.catelog[selectedImage].sub}
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