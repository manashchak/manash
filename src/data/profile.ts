import { FaGithub, FaLinkedin, FaGoogleScholar } from "react-icons/fa6";

export const profile = {
  name: `Manash Chakraborty, Ph.D.`,
  headline: `Software Engineer · KLA Corporation`,
  email: `PLACEHOLDER_EMAIL`,
  location: `Milpitas, California`,
  profileImage: `/manash/images/mcb_cropped.jpg`,
  links: [
    {
      name: `Github`,
      url: `https://github.com/manashchak`,
      icon: FaGithub
    },
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/PLACEHOLDER_LINKEDIN`,
      icon: FaLinkedin
    },
    {
      name: `Google Scholar`,
      url: `https://scholar.google.com/citations?user=PLACEHOLDER_SCHOLAR_ID`,
      icon: FaGoogleScholar
    }
  ],
  biography: `Hi! I'm <strong>Manash Chakraborty</strong>, a <em>Software Engineer</em> at <em>KLA Corporation</em> in Milpitas, California. I develop software tools for semiconductor inspection and metrology devices, working at the intersection of precision engineering and software systems.
<div class="my-2"></div>
I hold a <em>Ph.D. in Aerospace Engineering and Mechanics</em> from the <em>University of Minnesota</em>, where my research focused on robust and optimal controller synthesis for dual-stage hard disk drives. I have 4+ years of experience in robust/optimal controller synthesis for dynamical systems, 3+ years in precision servo controls, and developed a MATLAB toolbox for nonlinear analysis of dynamical systems.
<div class="my-2"></div>
Prior to my current role, I worked on industrial automation, machine vision, and robotics at <em>Unipolar Automation</em> in Bangladesh, and completed two internships at <em>Seagate Technology</em> focusing on HDD controller design and disturbance modeling.`
};