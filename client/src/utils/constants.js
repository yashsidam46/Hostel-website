// Design Tokens
export const THEME = {
  navy: "#1A3C6E",
  navyDeep: "#12294D",
  saffron: "#FF9933",
  green: "#138808",
  gold: "#C68A2E",
  alert: "#B5442E",
  surface: "#F7F7F5",
  ink: "#1C1F26",
  muted: "#6B7280",
  hairline: "#E2E4E8",
  heading: "'Poppins', 'Segoe UI', sans-serif",
  body: "'Inter', system-ui, sans-serif",
};

// Mock Data
export const CITIES = ["Nagpur", "Pune", "Amravati","SambhajiNgar"];

export const STATS = [
  { label: "Hostels listed", value: 6 },
  { label: "Verified locations", value: 4 },
  { label: "Reviews submitted", value: 4 },
  { label: "Grievances resolved", value: 1 },
];

export const HOSTELS = {
  Nagpur: [
    {
      id: "n1",
      name: "Govt. Boys Hostel, Sitabuldi",
      address: "Central Ave, Sitabuldi, Nagpur",
      warden: "Mr. R. K. Deshmukh",
      verified: true,
      rating: { food: 3.2, cleanliness: 3.8, facilities: 3.0, overall: 3.3 },
      openComplaints: 2,
      reviews: [
        { user: "Aditya P.", rating: 4, comment: "Cleanliness has improved a lot since last semester. Food is average but filling.", helpful: 3 },
        { user: "Rohan S.", rating: 3, comment: "Warden is responsive but water supply is irregular in the mornings.", helpful: 1 },
      ],
      complaints: [
        { category: "Facilities", status: "in-review", description: "Common room fan not working for 2 weeks." },
        { category: "Food", status: "open", description: "Mess timing shifted without notice." },
      ],
    },
    {
      id: "n2",
      name: "Govt. Girls Hostel, Dharampeth",
      address: "Ramdaspeth Rd, Dharampeth, Nagpur",
      warden: "Mrs. S. V. Kale",
      verified: true,
      rating: { food: 4.0, cleanliness: 4.2, facilities: 3.5, overall: 3.9 },
      openComplaints: 0,
      reviews: [{ user: "Priya M.", rating: 4, comment: "Well maintained, warden keeps a strict but fair check on cleanliness.", helpful: 5 }],
      complaints: [],
    },
    {
      id: "n3",
      name: "Govt. Hostel, Mankapur",
      address: "Mankapur Naka, Nagpur — exact location unconfirmed",
      warden: "Not on record",
      verified: false,
      rating: null,
      openComplaints: 0,
      reviews: [],
      complaints: [],
    },
  ],
  Pune: [
    {
      id: "p1",
      name: "Govt. Boys Hostel, Shivajinagar",
      address: "FC Road, Shivajinagar, Pune",
      warden: "Mr. A. B. Joshi",
      verified: true,
      rating: { food: 3.5, cleanliness: 3.6, facilities: 3.8, overall: 3.6 },
      openComplaints: 1,
      reviews: [{ user: "Kunal T.", rating: 4, comment: "Facilities are decent for a government hostel, wifi could be faster.", helpful: 2 }],
      complaints: [{ category: "Cleanliness", status: "resolved", description: "Washroom on 2nd floor was clogged." }],
    },
    {
      id: "p2",
      name: "Govt. Hostel, Hadapsar",
      address: "Hadapsar, Pune — exact location unconfirmed",
      warden: "Not on record",
      verified: false,
      rating: null,
      openComplaints: 0,
      reviews: [],
      complaints: [],
    },
  ],
  Amravati: [
    {
      id: "a1",
      name: "Govt. Hostel, Camp Area",
      address: "Camp Area, Amravati",
      warden: "Mr. N. P. Wankhede",
      verified: true,
      rating: { food: 2.8, cleanliness: 3.0, facilities: 2.5, overall: 2.8 },
      openComplaints: 3,
      reviews: [{ user: "Sanket G.", rating: 2, comment: "Facilities need urgent attention, especially the common bathrooms.", helpful: 4 }],
      complaints: [{ category: "Facilities", status: "open", description: "No hot water for over a week." }],
    },
  ],
};