import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";
import { useTheme } from "../../provider/ThemeProvider";

export default function About() {
  const { isDark } = useTheme();
  return (
    <>
      <Container sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}>
        <PageHeader
          title="About Page"
          subtitle="On this page you can find explanations about using the application"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            <div>
              <h2>Welcome to Our Business Cards Page</h2>
              <p>
                At our Website Cards Page, we believe in the power of digital
                connections. In this ever-evolving technological landscape, we
                understand the importance of leaving a lasting impression
                online. Our website cards offer a modern and efficient way to
                showcase your brand, drive traffic to your website, and engage
                your target audience.
              </p>

              <h2>Why Choose Our Business Cards:</h2>
              <ol>
                <li>
                  <strong> Enhance Your Online Presence:</strong> In a world
                  where online interactions are becoming increasingly vital, our
                  website cards are designed to help you stand out in the
                  digital realm. With eye-catching visuals and captivating
                  content, you can make a significant impact on potential
                  visitors and customers.
                </li>
                <li>
                  <strong>Seamless Integration:</strong> Our website cards
                  seamlessly integrate with various social media platforms,
                  emails, and messaging apps. Whether you're sharing them on
                  Facebook, Twitter, LinkedIn, or through direct messages, they
                  offer a smooth user experience across different devices and
                  platforms.
                </li>
                <li>
                  <strong>Drive Website Traffic:</strong> Engaging and
                  interactive, our website cards serve as clickable invitations
                  to your website. By directing interested users to your web
                  pages directly from the card, you can effectively increase
                  traffic and generate more leads.
                </li>
                <li>
                  <strong>Customization Options:</strong> We understand that
                  every brand is unique, and your website card should reflect
                  that individuality. Our platform provides you with
                  customization options, allowing you to tailor the design,
                  content, and call-to-action to align with your brand's
                  identity and specific goals.
                </li>
                <li>
                  <strong>Analytics and Insights:</strong> Stay informed and
                  make data-driven decisions with our analytics and insights
                  feature. Track the performance of your website cards, monitor
                  user engagement, and measure click-through rates to optimize
                  your digital marketing strategy continually.
                </li>
              </ol>

              <h2>Who We Are:</h2>
              <p>
                We are a dedicated team of digital marketing enthusiasts,
                designers, and developers, committed to helping businesses
                thrive in the digital space. With a keen understanding of the
                ever-changing online landscape, we craft website cards that
                captivate, convert, and drive growth.
              </p>

              <h2>Join Us in Elevating Your Online Presence:</h2>
              <p>
                Take your digital marketing efforts to the next level with our
                website cards. Whether you're promoting a new product,
                announcing an event, or simply looking to increase brand
                visibility, our website cards will become your most powerful
                tool. Thank you for choosing us as your digital partner. Let's
                create a compelling online presence together and make a
                significant impact on your target audience.
              </p>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { md: "flex", xs: "nune" },
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/images/logo.png"
              alt="card"
              width="100%"
              height="50%"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
