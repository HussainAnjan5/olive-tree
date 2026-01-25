import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { SpecialEducation } from "@/app/pages/SpecialEducation";
import { OurFaculty } from "@/app/pages/OurFaculty";
import { Gallery } from "@/app/pages/Gallery";
import { ApplyOnline } from "@/app/pages/ApplyOnline";
import { AboutUs } from "@/app/pages/AboutUs";
import { ContactUs } from "@/app/pages/ContactUs";
import { RootLayout } from "@/app/components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "special-education", Component: SpecialEducation },
      { path: "our-faculty", Component: OurFaculty },
      { path: "gallery", Component: Gallery },
      { path: "apply-online", Component: ApplyOnline },
      { path: "about-us", Component: AboutUs },
      { path: "contact-us", Component: ContactUs },
    ],
  },
]);
