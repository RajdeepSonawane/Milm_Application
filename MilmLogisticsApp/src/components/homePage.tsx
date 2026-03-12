import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack
} from "@mui/material";

import Grid2 from "@mui/material/Grid2";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import endtoend from "../assets/end-to-end.jpg";
import ceoImage from "../assets/ceo.jpeg"

import Header from "../header";
import Footer from "../footer";

const SERVICES = [
  { title: "Logistics Operations Management", desc: "Complete handling of day-to-day site operations." },
  { title: "Manpower Hiring & Deployment", desc: "Fast recruitment & workforce scaling." },
  { title: "RTS & Cash Closure", desc: "Same-day reconciliation & reporting." },
  { title: "Client & KPI Management", desc: "Ensuring operational & financial KPIs." },
  { title: "Payroll & Reporting Support", desc: "Timely payroll & reporting support." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function HomePage() {
  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box
  component={motion.div}
  sx={styles.hero}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Typography sx={styles.heroTitle}>
              Move In <br /> Link Mobility
            </Typography>

            <Typography sx={styles.heroTagline}>
              Travel in Elegance…
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ABOUT */}
      <Box
  component={motion.div}
  sx={styles.aboutSection}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}
>
        <Container maxWidth="md">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="h2" fontWeight={700} gutterBottom sx={{ color: "#fff" }}>
              About Us
            </Typography>

            <Typography variant="h6" sx={styles.aboutText}>
               <strong>Move In – Link Mobility</strong> founded on 10 July 2024, is an operations-driven logistics support company specializing in last-mile and on-ground execution for large enterprise partners such as Amazon.
                     Built on the foundation of operational excellence, sustainability, and performance-driven execution, the company is committed to delivering seamless logistics solutions tailored to evolving business needs.
            </Typography>

            <Typography variant="h6" sx={styles.aboutText}>
               The organization embraced sustainability from the beginning. Following the “Go Green” initiative, operations commenced with a fleet of 20+ electric vehicles (EVs).
        Today, we are leading the industry with 300+ EVs actively operating in the market, positioning ourselves as a forward-thinking and environmentally responsible logistics partner.
        In a short span of time, we successfully established our brand as a trusted and integrated logistics service provider.
            </Typography>

          </motion.div>

        </Container>
      </Box>

      <Box 
      component={motion.div}
  sx={styles.ceoSection}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}>
  <Container maxWidth="xl">

    <Card sx={styles.ceoCard}>
      <Grid2 container spacing={6} alignItems="center">

        {/* LEFT IMAGE */}
        <Grid2 size={{ xs: 12, md: 5 }}>

          <Box sx={styles.ceoImageBox}>
            <Box component="img" src={ceoImage} sx={styles.ceoImage} />

            <Typography sx={styles.ceoName}>
              Miss. Dipti Chandgude 
            </Typography>

            <Typography sx={styles.ceoRole}>
              Founder & CEO
            </Typography>
          </Box>

        </Grid2>


        {/* RIGHT TEXT */}
        <Grid2 size={{ xs: 12, md: 7 }}>

          <Typography sx={styles.ceoQuote}>
            “ Move In – Link Mobility is a company where services meets excellence.
            Every day, our team is dedicated to ensuring seamless solutions
            that propel businesses forward. With a relentless focus on
            reliability, we navigate the complexities of global logistics
            with precision and efficiency. Innovation drives our every
            move. We leverage cutting edge technology and strategic
            partnerships to streamline our processes and deliver
            unparalleled service to our clients. ”
          </Typography>

        </Grid2>

      </Grid2>
    </Card>

  </Container>
</Box>

      {/* RELIABLE SECTION */}
      <Box
  component={motion.div}
  sx={styles.reliableSection}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}
>

        <Container maxWidth="lg">

          <Grid2 container spacing={6} alignItems="center">

            <Grid2 size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box component="img" src={endtoend} sx={styles.circleImage} />
              </motion.div>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <Typography sx={styles.reliableTitle}>
                  Reliable. Scalable.
                </Typography>

                <Typography sx={styles.reliableSubtitle}>
                  Performance Driven.
                </Typography>

                <Box sx={styles.divider} />

                <Typography variant="body1" sx={styles.reliableText}>
                  Move In – Link Mobility is an operations-driven logistics
                  company specializing in last-mile delivery execution.
                </Typography>

                <Typography variant="body1" sx={styles.reliableSmallText}>
                  We focus on manpower deployment, daily operations control,
                  and performance-driven logistics execution.
                </Typography>

                <Button endIcon={<ArrowForwardIcon />} sx={styles.readMoreBtn}>
                  Read Our Story
                </Button>

              </motion.div>

            </Grid2>

          </Grid2>

        </Container>

      </Box>

      {/* SERVICES */}
      <Box
  component={motion.div}
  sx={styles.servicesSection}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}
>

        <Container maxWidth="lg">

          <Grid2 container spacing={6}>

            <Grid2 size={{ xs: 12, md: 5 }}>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <Typography sx={styles.servicesTitle}>
                  Our Services
                </Typography>

                <Typography sx={styles.servicesDescription}>
                  We provide complete logistics support solutions designed
                  to streamline operations and enhance workforce efficiency.
                </Typography>

                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={styles.servicesButton}
                >
                  Explore More
                </Button>

              </motion.div>

            </Grid2>

            <Grid2 size={{ xs: 12, md: 7 }}>

              <Grid2 container spacing={3}>

                {SERVICES.map((service, index) => (

                  <Grid2 size={{ xs: 12, sm: 6 }} key={index}>

                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >

                      <Card sx={styles.serviceCard}>
                        <CardContent>

                          <Typography sx={styles.serviceTitle}>
                            {service.title}
                          </Typography>

                          <Typography sx={styles.serviceDesc}>
                            {service.desc}
                          </Typography>

                        </CardContent>
                      </Card>

                    </motion.div>

                  </Grid2>

                ))}

              </Grid2>

            </Grid2>

          </Grid2>

        </Container>

      </Box>

      {/* CONTACT */}
      <Box
  component={motion.div}
  sx={styles.contactSection}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}
>

        <Container maxWidth="lg">

          <Grid2 container spacing={8} alignItems="center">

            <Grid2 size={{ xs: 12, md: 6 }}>

              <Typography sx={styles.joinTitle}>
                Join Our Team
              </Typography>

              <Typography sx={styles.joinSubtitle}>
                Build your career in logistics operations with a growing team.
              </Typography>

              <Stack spacing={2} mb={4}>
                <Typography sx={styles.jobItem}>Area / Territory Manager</Typography>
                <Typography sx={styles.jobItem}>Team Lead – Operations</Typography>
                <Typography sx={styles.jobItem}>Operations Executive</Typography>
              </Stack>

              <Button variant="contained" sx={styles.applyBtn}>
                Apply Now
              </Button>

            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>

              <Box sx={styles.contactCard}>

                <Typography sx={styles.contactTitle}>
                  Get In Touch
                </Typography>

                <Stack spacing={3} mt={4}>

                  <Stack direction="row" spacing={2}>
                    <MailIcon />
                    <Typography>support@moveinlinkmobility.com</Typography>
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    <LocationOnIcon />
                    <Typography>MILM – Operations Location</Typography>
                  </Stack>

                </Stack>

              </Box>

            </Grid2>

          </Grid2>

        </Container>

      </Box>

      <Footer />
    </Box>
  );
}

const styles = {

  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    background: "#212735",
    color: "#fff"
  },

  heroTitle: {
    fontFamily: "serif",
    fontSize: { xs: 42, md: 90 },
    fontWeight: 500
  },

  heroTagline: {
  fontStyle: "italic",
  fontSize: { xs: 20, md: 50 },
  opacity: 0.7
},

  aboutSection: {
    minHeight: "90vh",
    py: { xs: 8, md: 14 },
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    background: "linear-gradient(135deg,#3b4a63,#1f2937)"
  },

  aboutText: {
  color: "#d1d5db",
  fontSize: "18px",
  lineHeight: 1.8,
  marginTop: "12px",
  marginBottom: "12px"
},

reliableSection: { 
  minHeight: "90vh",
  py: { xs: 8, md: 14 },
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    background: "#212735",
    color: "#fff"
 },
  circleImage: {
  width: "100%",
  maxWidth: 420,
  height: 420,
  borderRadius: "50%",
  objectFit: "cover",
  display: "block",
  margin: "0 auto"
},

reliableTitle: {
  fontSize: 60,
  fontFamily: "serif",
  marginBottom: 4
},

reliableSubtitle: {
  fontSize: 40,
  fontStyle: "italic",
  marginBottom: 10
},

 divider: {
  width: 120,
  height: 5,
  background: "#9CA3AF",
  margin: "25px 0"
},

  reliableText: {
  fontSize: 20,
  marginBottom: 2,
  maxWidth: 520
},

reliableSmallText: {
  fontSize: 18,
  opacity: 0.7,
  marginBottom: 2,
  maxWidth: 520
},
  readMoreBtn: {
    color: "#fff",
    borderBottom: "1px solid #fff"
  },

  servicesSection: {
    py: { xs: 8, md: 14 },
    background: "linear-gradient(135deg,#141a20,#1f2937)",
    color: "#fff"
  },

  servicesTitle: {
    fontSize: 70,
    fontFamily: "serif"
  },

  servicesDescription: {
    marginBottom: 20
  },

  servicesButton: {
    borderColor: "#fff",
    color: "#fff"
  },

  serviceCard: {
    background: "#1f2937",
    color: "#fff"
  },

  serviceTitle: {
    fontWeight: 600
  },

  serviceDesc: {
    opacity: 0.8
  },

  contactSection: {
    py: { xs: 8, md: 14 },
    background: "#111827",
    color: "#fff"
  },

  joinTitle: {
    fontSize: 50,
    fontFamily: "serif"
  },

  joinSubtitle: {
    marginBottom: 2
  },

  jobItem: {
    fontSize: 18
  },

  applyBtn: {
    background: "#000"
  },

  contactCard: {
    background: "#000",
    padding: 14,
    borderRadius: 3
  },

  contactTitle: {
    fontSize: 40
  },

  ceoSection: {
  py: { xs: 8, md: 14 },
  textAlign: "center",
  background: "#212735",
  color: "#fff"
},

ceoCard: {
  borderRadius: "20px",
  padding: { xs: "30px", md: "40px" },
  background: "#d0d0d0",
  maxWidth: "1100px",
  margin: "0 auto",
  boxShadow: "0px 20px 60px rgba(0,0,0,0.15)"
},

ceoImageBox: {
  textAlign: "center"
},

ceoImage: {
  width: "70%",
  borderRadius: "12px",
  marginBottom: "20px"
},

ceoName: {
  fontSize: "20px",
  fontWeight: 600,
  color: "#050505",
  textAlign: "center"
},

ceoRole: {
  fontSize: 14,
  color: "#252525"
},

ceoQuote: {
  fontSize: "16px",
  fontStyle: "italic",
  color: "#6b1f16",
  lineHeight: 1.9,
  textAlign: "justify"
},
};