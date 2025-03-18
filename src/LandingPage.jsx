import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Static Data Map (Database ki jagah use ho raha hai)
const staticData = {
  "1": {
    title: "React Landing Page - ID 1",
    description: "This is a demo landing page with Open Graph meta tags.",
    image: "https://guardianshot.blr1.cdn.digitaloceanspaces.com/eagleEye/event-type/1739334564445.png",
  },
  "2": {
    title: "React Landing Page - ID 2",
    description: "This is another landing page with different OG tags.",
    image: "https://guardianshot.blr1.cdn.digitaloceanspaces.com/eagleEye/profile-picture/20250313062203.jpg",
  },
};

const LandingPage = () => {
  const { id } = useParams(); // URL se ID lena
  const data = staticData[id] || staticData["1"]; // Default data agar ID match nahi hoti

  return (
    <div>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={`https://yourdomain.com/landing/${id}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} style={{ width: "100%", maxWidth: "600px" }} />
    </div>
  );
};

export default LandingPage;
