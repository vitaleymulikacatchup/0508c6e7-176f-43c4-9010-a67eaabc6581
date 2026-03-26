"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Flowers",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Nolla"
      button={{
        text: "Book Now",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="NOLLA"
      description="Artisanal, seasonal flowers crafted with intention. Bringing natural beauty to your everyday moments."
      buttons={[
        {
          text: "Explore Collection",          href: "#products"},
      ]}
      slides={[
        {
          imageSrc: "https://pixabay.com/get/ga5b5d9edf137dc0dafa99d8dd6cedfe6e8534948c664a9b0047d5cd45eb99c5756cf01604d38dad4d231f23eb7b200492d81485fbabbd3636fa78400472377b3_1280.jpg",          imageAlt: "Artisanal flower arrangement"},
        {
          imageSrc: "https://pixabay.com/get/g173e5963dbc471a400670ce13d586687c2e6459cc3eb6f6ed39360f74c3892989e67de564bd18feae10a4b6c6b92818e3018188a9af3e3c77eaf941306af31c5_1280.jpg",          imageAlt: "Seasonal floral workshop"},
        {
          imageSrc: "https://pixabay.com/get/g1e10c1e39ff5d7c76ab8da908a328ad61f3e0e653ec27511d5116401946eb3b9ad16c1b0a22c0f06e73be0a8cf265e62ad8acbcec725ce34443cc264cf52a0f7_1280.jpg",          imageAlt: "Fresh botanical design"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Our Philosophy"},
        {
          type: "image",          src: "https://pixabay.com/get/gf6cba31a05215b82bd33bced9776470dea3f081ada88703a3f99441aba568f59318538d4ea3533cc04d82c1372786c609e155deb80b4f1f7dc7cac03bfb30aeb_1280.jpg",          alt: "Florist at work"},
      ]}
      buttons={[
        {
          text: "Learn More",          href: "#"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "The Morning Bloom",          price: "$65",          variant: "Seasonal Bouquet",          imageSrc: "https://pixabay.com/get/g73a888a8eb131ca25d8784b2e6a2992e27f58d375ff23a370622fc08198593047b761e8d66ba6a02f9fb3447b69cef02ea8ee04bafdd20381bfe62fd59b002a8_1280.jpg"},
        {
          id: "p2",          name: "Wildwood Wreath",          price: "$85",          variant: "Everlasting Design",          imageSrc: "https://pixabay.com/get/g2f5f13aeca8336f6fe2a8db79a37bdfc9ad39c9f15ae40d1a0d8006e66e2cf15686591c4cf8d3c77cdd120332c2a54bf1880627e4cd02ef250ea3f6cf081079c_1280.jpg"},
        {
          id: "p3",          name: "Minimalist Centerpiece",          price: "$45",          variant: "Table Floral",          imageSrc: "https://pixabay.com/get/g234ad8dc224d1f3255433d4f39f2d7d23e39aa8b9632abb46d04bfc671dd59ebf6eb74fc4ed4abb4a0923a4ab48ae480ab20480b7a68c89d09c2fdaa9c26cacb_1280.jpg"},
      ]}
      title="Seasonal Creations"
      description="Hand-picked, locally sourced stems arranged into bespoke seasonal designs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Elara Vance",          handle: "@elara",          testimonial: "Nolla's arrangements are always incredibly fresh and unique. Simply beautiful.",          rating: 5,
          imageSrc: "https://pixabay.com/get/gd289c171b65985457f486de30c8af54eb9b6d3d412ff32f95d1d050fb290e6acbf70208a03697519268f41f72e98e48e6f11d3a700b1a9249794934f1678c1ee_1280.jpg"},
        {
          id: "2",          name: "Julian Thorne",          handle: "@jthorn",          testimonial: "The best floral studio in the city. Their attention to detail is unmatched.",          rating: 5,
          imageSrc: "https://pixabay.com/get/g5fafaeedefe053d051996cac85794ea24716a9ad9b769feb3c9b85d31b893122cccb246cf99fae9e824e1755c40b9ac8df51311479d34fd45f0a62500b6c604a_1280.jpg"},
        {
          id: "3",          name: "Mara Sol",          handle: "@marasol",          testimonial: "I love the seasonal focus. Every bouquet brings a new piece of nature home.",          rating: 5,
          imageSrc: "https://pixabay.com/get/g580323cd4063ca44603613db1b8bc589ee3a2a177159cee48085234a882df9a9280d6930a5570b0f7de6b181a1601fae5b13b7d72ecc3c9d7bf57f3cacec0dd0_1280.jpg"},
        {
          id: "4",          name: "Sam R.",          handle: "@samr",          testimonial: "Exquisite work. The minimalist aesthetic is exactly what I was looking for.",          rating: 5,
          imageSrc: "https://pixabay.com/get/g0fa57f485cf7fa7ccf1d58712b3e2467d42221ce5c2b8076cdd9f5e59ff120198f52f9dd919b7a98f83537de2e9359cfc7e6a6ca7a8b51db432d2eb799b3eade_1280.jpg"},
      ]}
      showRating={true}
      title="Kind Words"
      description="What our wonderful clients are saying about our floral designs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal"}}
      text="Visit us in our studio or drop us a line for custom inquiries. We'd love to chat flowers."
      buttons={[
        {
          text: "Contact Us",          href: "mailto:hello@nolla.studio"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",              href: "#products"},
            {
              label: "About",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "mailto:hello@nolla.studio"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
      ]}
      logoText="NOLLA"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
