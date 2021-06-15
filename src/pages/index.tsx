import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import ServiceSection from "sections/service-section";
import Feature from "sections/feature";
import CoreFeature from "sections/core-feature";
import WorkFlow from "sections/workflow";
import Package from "sections/package";
import TeamSection from "sections/team-section";
import TestimonialCard from "sections/testimonial";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
