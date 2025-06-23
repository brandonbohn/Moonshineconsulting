

export const blogData = [
  {
    image: "./images/moonshine.jpg",
    title: "How I Herded Hearts Instead of Sheep",
    article: "Moonshine Introduces Himself as a caring loving nursing companion that tried to be a therapy dog but while too scared to do so still inspired elderly patients.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "MoonshinesCorner",
    author: "Moonshine",
    id: 1,
    link: "./blogentries/moonshinescornerblogentry",
  },
  {
    image: "./images/beach.jpg",
    title: "Medicare and You: A Guide for Seniors",
    article: "Understanding Medicare is crucial for seniors to navigate their healthcare options effectively. This article provides a comprehensive overview of Medicare, including its different parts, coverage options, and how to enroll.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "SeniorPolicyBeat",
    author: "Senior Policy Team",
    id: 2,
    link: "./blogentries/medicareandyou",
  },
  {
    image: "./images/grandma.jpg",
    title: "mobility and Independence: Tips for Seniors",
    article: "Maintaining mobility is essential for seniors to live independently and enjoy a good quality of life. This article offers practical tips on staying active, using mobility aids, and making home modifications to enhance safety and accessibility.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "rehabsolutions",
    author: "Rehab Solutions Team",
    id: 3,
    link: "./blogentries/mobilityandindependence",
  },
  {
    image: "./images/grandma.jpg",
    title: "what to do after a fall",
    article: "Falls can be a significant concern for seniors, leading to injuries and loss of independence. This article discusses what to do immediately after a fall, how to assess injuries, and when to seek medical help. It also provides tips on preventing future falls.",
    date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "SeniorTips",
    author: "Senior Care Team",
    id:4,
    link: "./blogentries/whattodoafterafall",
  },
];

export const ProductData = [
  {
        name: "Moonshine Tumbler",
        description: "A stylish tumbler for your favorite drinks.",
        photo: "/images/tumbler.jpg",
        price: 19.99,
        link: "https://example.com/tumbler",
    },
    {
        name: "Consulting Session",
        description: "One-hour professional consulting session.",
        photo: "/images/consulting.jpg",
        price: 99.99,
        link: "https://example.com/consulting",
    },
    {
        name: "Branded Hoodie",
        description: "Comfortable hoodie with our logo.",
        photo: "/images/hoodie.jpg",
        price: 49.99,
        link: "https://example.com/hoodie",
    },
];