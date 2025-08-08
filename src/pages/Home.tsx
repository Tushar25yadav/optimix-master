import { motion, useScroll, useTransform } from "framer-motion";
import Form from "../components/Form";
import Heading from "../components/Heading";
import Contact from "./Contact/Contact";
import AboutUsIntro from "../IntroPages/AboutIntro/AboutUsIntro";
import ProjectsIntro from "../IntroPages/ProjectIntro/ProjectsIntro";
import ServicesIntro from "../IntroPages/ServiceIntro/ServicesIntro";
import ParallaxImage from "../components/ParallaxImage";
import { Color } from "../colors";
import CommodityIntro from "../IntroPages/CommodityIntro/CommodityIntro";

interface Props {
    onNavChange: (item: string) => void;
}

const Home: React.FC<Props> = ({ onNavChange }) => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], ["0%", "50%"]);

    return (
        <>
            {/* Background Section */}
            <motion.div
                style={{
                    position: "relative",
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/backimg2.webp"})`,
                    backgroundSize: "cover",
                    backgroundPositionY: bgY,
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                {/* Must include content to render */}
                <div />
            </motion.div>

            {/* Heading Overlay */}
            <div
                style={{
                    marginTop: 120,
                    color: "white",
                    marginLeft: 20,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                }}
            >
                <Heading />
            </div>

            {/* Form in Corner */}
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    backgroundColor: Color.orange,
                    color: "white",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    zIndex: 2,
                    maxWidth: "90vw",
                    fontSize: "14px",
                    boxShadow: `
                        0 4px 10px rgba(0,0,0,0.3),
                        0 8px 24px rgba(0,0,0,0.25),
                        0 12px 48px rgba(0,0,0,0.2)
                    `,
                }}
            >
                <Form />
            </div>

            {/* About Us Section */}
            <section id="About Us">
                <AboutUsIntro onNavChange={onNavChange} />
            </section>

            {/* Quote Section */}
            {/* <ParallaxImage
                image={process.env.PUBLIC_URL + "/mid.webp"}
                text="We believe business must look beyond itself to serve communities and build lasting impact."
                author="Ratan Tata"
            /> */}

            {/* Product Section */}
            <section id="Product">
                <CommodityIntro onNavChange={onNavChange} />
            </section>

            {/* Contact Section */}
            <section id="Contact">
                <Contact />
            </section>
        </>
    );
};

export default Home;
