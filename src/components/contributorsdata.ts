// Contributors data structure
export interface Contributor {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials?: string;
}

export const contributorsData: Contributor[] = [
  {
    id: 1,
    name: "Christie Satephan",
    title: "Registered Nurse, Hospice Care Specialist",
    image: "./images/Christie.jpg",
    bio: "Christie brings over 30 years of nursing experience to The Care Professional Chronicle. As a hospice nurse, she has dedicated her career to providing compassionate end-of-life care and supporting families through difficult transitions.",
    credentials: "RN, ODG"
  },
  {
    id: 2,
    name: "Karen Underwood",
    title: "Senior Care Policy Analyst",
    image: "./images/me professional.jpg",
    bio: "Karen specializes in Medicare policy analysis and senior living advocacy. With extensive experience in healthcare administration, she translates complex policy changes into practical guidance for seniors and their families.",
    credentials: "RN, BSN"
  }
];
