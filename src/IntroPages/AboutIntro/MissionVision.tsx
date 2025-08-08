import React, { useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { motion, Transition, useScroll, useSpring, useTransform, Variants } from 'framer-motion';
import MotionLine from '../../components/MotionLine';

interface Props {
    onNavChange: (item: string) => void;
}

const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (custom as number) * 0.4,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        } as Transition,
    }),
};

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function MissionVision(props: Props) {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('About Us');
    };

    const images = [
        process.env.PUBLIC_URL + "/C1.webp",
        process.env.PUBLIC_URL + "/C2.webp",
        process.env.PUBLIC_URL + "/C3.webp",
    ];


    return (
        <Grid container m={0}>
            {/* Left (Image with overlay text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ position: "relative", overflow: "hidden", color: "white" }}
            >
                <motion.div
                    style={{
                        display: "flex",
                        width: "fit-content",
                        gap: "1rem",
                    }}
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 15,
                    }}
                >
                    {/* Duplicate images array to make seamless loop */}
                    {[...images, ...images].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`carousel-img-${i}`}
                            style={{
                                width: "100%",
                                height: "auto",
                                flexShrink: 0,
                                borderRadius: "16px",
                                objectFit: "cover",
                                maxWidth: "400px", // set your max width
                            }}
                        />
                    ))}
                </motion.div>
            </Grid>

            {/* Right (Animated Text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    background: 'black',
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
                    variants={containerVariant}
                    style={{ maxWidth: 480 }}
                >
                    <motion.h3
                        custom={0}
                        variants={textVariant}
                        style={{ color: 'white' }}
                    >
                        Indore, Madhya Pradesh (India) based, Bharti Udhyam was established in 1995 and in a very short period, we emerged a renowned manufacturer and supplier of an extensive range of Ball Mill, Industrial Ribbon Blenders, Ribbon Blender, Cage Mill, High Speed Mixer, MS Detergent Cage Mill and other related products. Besides, our offered range of products are highly demanded as well as appreciated by our customers due to their various attributes like smooth functionality, unparalleled quality, minimal maintenance, elevated service life, reliability and superior performance. We have been serving the demands of the respected clients with customized as well as standard product line in various sizes and specifications.
                    </motion.h3>

                    <motion.div custom={0.5} variants={textVariant}>
                        <MotionLine color='white' />
                    </motion.div>
                </motion.div>
            </Grid>
        </Grid>
    );
}
