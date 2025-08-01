export const metadata = {
  title: "Graduate Programs - SSIM",
  description: "Explore our comprehensive graduate programs at Siva Sivani Institute of Management (SSIM). Discover FPM/EFPM, PGDM BA, PGDM BIFS, and PGDM Triple Specialisation programs with detailed curriculum and career opportunities.",
  keywords: "SSIM graduate programs, FPM EFPM, PGDM BA, PGDM BIFS, PGDM Triple Specialisation, business school programs, management education",
  openGraph: {
    title: "Graduate Programs - SSIM",
    description: "Explore our comprehensive graduate programs at Siva Sivani Institute of Management (SSIM). Discover FPM/EFPM, PGDM BA, PGDM BIFS, and PGDM Triple Specialisation programs.",
    url: "https://www.ssim.ac.in/programs",
    siteName: "Siva Sivani Institute of Management",
    images: [
      {
        url: "/ssimlogo.webp",
        width: 1200,
        height: 630,
        alt: "SSIM Graduate Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduate Programs - SSIM",
    description: "Explore our comprehensive graduate programs at Siva Sivani Institute of Management (SSIM).",
    images: ["/ssimlogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ssim.ac.in/programs",
  },
};

export default function ProgramsLayout({ children }) {
  return children;
} 