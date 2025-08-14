export interface ContributorEntry {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const contributorData: ContributorEntry[] = [
  {
    id: 1,
    name: "Christie Stephan",
    title: "Registered Nurse, ODG",
    bio: "With over 30 years of nursing experience, Christie has worked in psychiatric units, ICU, and hospice care. She brings compassionate expertise and real-world insights from decades of patient care.",
    image: "./images/Christie.jpg",
    specialties: ["Hospice Care", "Psychiatric Nursing", "ICU Experience"]
  },

];
