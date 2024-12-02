import imageLogoH from "public/images/projects/betbreaker/project_thumb.png";
import imageLogoK from "public/images/projects/boredwalk/project_thumb.png";
import imageLogoA from "public/images/projects/discoverly/gemHunter copy.png";
import imageLogoB from "public/images/projects/dogsense/project_thumb.png";
import imageLogoJ from "public/images/projects/focusshift/project_thumb.png";
import imageLogoI from "public/images/projects/huskyride/project_thumb.png";
import imageLogoL from "public/images/projects/planventure/project_thumb.png";
import imageLogoE from "public/images/projects/potpal/project_thumb.png";
import imageLogoD from "public/images/projects/preparebear/project_thumb.png";
// import imageLogoF from 'public/images/projects/missing/project_thumb.png';
import imageLogoG from "public/images/projects/seekandshare/project_thumb.png";
import imageLogoC from "public/images/projects/tilted/project_thumb.png";

// Names and links associated with projects need to be maintained:
// - Here.
// - In the folder structure of /public/images/projects.
// - In the folder structure of /src/app/projects.
// - In /public/.htaccess.
export const ProjectLinks = (
  [
    {
      href: "/projects/discoverly/",
      anchor: "GemHunter",
      logo: imageLogoA,
    },
    {
      href: "/projects/dogsense/",
      anchor: "DogSense",
      logo: imageLogoB,
    },
    {
      href: "/projects/tilted/",
      anchor: "Tilted",
      logo: imageLogoC,
    },
    {
      href: "/projects/preparebear/",
      anchor: "Prepare Bear",
      logo: imageLogoD,
    },
    {
      href: "/projects/potpal/",
      anchor: "Pot Pal",
      logo: imageLogoE,
    },
    // {
    //     href: "/projects/missing/",
    //     anchor: "Missing",
    //     logo: imageLogoF,
    // },
    {
      href: "/projects/seekandshare/",
      anchor: "Seek and Share",
      logo: imageLogoG,
    },
    {
      href: "/projects/betbreaker/",
      anchor: "BetBreaker",
      logo: imageLogoH,
    },
    {
      href: "/projects/huskyride/",
      anchor: "HuskyRide",
      logo: imageLogoI,
    },
    {
      href: "/projects/focusshift/",
      anchor: "Focus Shift",
      logo: imageLogoJ,
    },
    {
      href: "/projects/boredwalk/",
      anchor: "BoredWalk",
      logo: imageLogoK,
    },
    {
      href: "/projects/planventure/",
      anchor: "Planventure",
      logo: imageLogoL,
    },
  ] as const
).toSorted((a, b) => {
  return a.href.localeCompare(b.href, undefined, { sensitivity: "base" });
});
