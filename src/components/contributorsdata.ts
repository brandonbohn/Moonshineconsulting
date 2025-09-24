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
    name: "Cindy Boushie-Hill",
    title: "LPN",
    image: "./images/cindy.jpeg",
    bio: "Cindy brings over 40 years of nursing experience to The Care Professional Chronicle. As a long term care nurse, she has dedicated her career to providing compassionate end-of-life care and supporting families through difficult transitions.",
    credentials: "Licensed Practical Nurse"
  },
  
];
