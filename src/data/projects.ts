import hospital from "@/assets/project-hospital.jpg";
import government from "@/assets/project-government.jpg";
import commercial from "@/assets/project-commercial.jpg";
import industrial from "@/assets/project-industrial.jpg";
import bridge from "@/assets/project-bridge.jpg";

export type Sector = "Healthcare" | "Government" | "Commercial" | "Industrial" | "Infrastructure";

export interface Project {
  slug: string;
  name: string;
  location: string;
  sector: Sector;
  year: string;
  value?: string;
  image: string;
  blurb: string;
}

export const projects: Project[] = [
  {
    slug: "groote-schuur-hospital",
    name: "Groote Schuur Hospital — Structural Upgrades",
    location: "Observatory, Cape Town",
    sector: "Healthcare",
    year: "2019–2023",
    value: "R 84M",
    image: hospital,
    blurb:
      "Structural strengthening and seismic upgrade across multiple active hospital wings, completed in phased shutdowns.",
  },
  {
    slug: "provincial-government-complex",
    name: "Provincial Government Complex",
    location: "Cape Town CBD",
    sector: "Government",
    year: "2021",
    value: "R 62M",
    image: government,
    blurb:
      "Heritage-sensitive structural design for a six-storey civic block with reinforced concrete frame and basement parking.",
  },
  {
    slug: "v-and-a-commercial-tower",
    name: "V&A Commercial Tower",
    location: "Waterfront, Cape Town",
    sector: "Commercial",
    year: "2022",
    value: "R 210M",
    image: commercial,
    blurb:
      "Lead structural engineers for a 14-storey mixed-use tower with composite steel-and-concrete superstructure.",
  },
  {
    slug: "atlantis-logistics-park",
    name: "Atlantis Logistics Park",
    location: "Atlantis, Western Cape",
    sector: "Industrial",
    year: "2020",
    value: "R 48M",
    image: industrial,
    blurb:
      "Wide-span portal-frame warehousing with engineered foundations on reclaimed industrial land.",
  },
  {
    slug: "n2-interchange-upgrade",
    name: "N2 Interchange Upgrade",
    location: "Somerset West",
    sector: "Infrastructure",
    year: "2024",
    value: "R 135M",
    image: bridge,
    blurb:
      "Civil engineering design for a four-lane bridge widening, retaining walls and stormwater rerouting.",
  },
  {
    slug: "khayelitsha-district-clinic",
    name: "Khayelitsha District Clinic",
    location: "Khayelitsha, Cape Town",
    sector: "Healthcare",
    year: "2018",
    value: "R 22M",
    image: hospital,
    blurb:
      "Public-sector clinic structural design with prefabricated concrete elements for rapid construction.",
  },
];
