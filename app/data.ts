export type Branch = "CT" | "EE" | "ME" | "AU" | "CE" ;

export interface Company {
  sl: number;
  name: string;
  branches: Branch[];
  location: string;
  vacancy: string;
  image: string;
  floor: string;
  room: string;
}

export const COMPANIES: Company[] = [
  {
    sl: 1,
    name: "TATA Advanced Systems (Aerospace)",
    branches: ["ME", "EE", "AU"],
    location: "Bangalore",
    vacancy: "Trainee Engineer (Direct)",
    image: "/company-logos/sl1.jpg",
    floor: "2nd",
    room: "ME Department"
  },
  {
    sl: 2,
    name: "Schneider Electricals",
    branches: ["EE",],
    location: "Bangalore, Chennai",
    vacancy: "Trainee Engineer (Direct / NAPS)",
    image: "/company-logos/sl2.jpg",
    floor: "1st",
    room: "S1 CT (F29)"
  },
  {
    sl: 3,
    name: "STS CLADS",
    branches: ["ME"],
    location: "Abu Dhabi, UAE",
    vacancy: "Trainee Engineer",
    image: "/company-logos/sl3.jpg",
    floor: "1st",
    room: "S1 CT (F29)"
  },
  {
    sl: 4,
    name: "Adani Solar Power",
    branches: ["ME", "EE"],
    location: "Mura Port, Gujarat",
    vacancy: "200 positions",
    image: "/company-logos/sl4.jpg",
    floor: "1st",
    room: "Board Room"
  },
  {
    sl: 5,
    name: "Britco & Bridco Pvt Ltd",
    branches: ["EE"],
    location: "All over Kerala",
    vacancy: "50 positions",
    image: "/company-logos/sl5.jpg",
    floor: "2nd",
    room: "Drawing hall 2 (3rd Door)"
  },
  {
    sl: 6,
    name: "Popular Hyundai",
    branches: ["AU"],
    location: "Kerala",
    vacancy: "Sales Consultant, Technician, Service Advisor, etc.",
    image: "/company-logos/sl6.jpg",
    floor: "2nd",
    room: "S47 (S4 EEE)"
  },
  {
    sl: 7,
    name: "AM Motors",
    branches: ["AU"],
    location: "Kerala",
    vacancy: "Service Advisor/Mechanic Trainees",
    image: "/company-logos/sl7.jpg",
    floor: "2nd",
    room: "S46 (S4 ME)"
  },
  {
    sl: 8,
    name: "Royal Enfield",
    branches: ["ME", "AU"],
    location: "Chennai",
    vacancy: "Shift In-Charge",
    image: "/company-logos/sl8.jpg",
    floor: "2nd",
    room: "Drawing hall 2 (2nd Door)"
  },
  {
    sl: 9,
    name: "Vikram Solar",
    branches: ["EE", "ME"],
    location: "Chennai",
    vacancy: "Shift In-Charge",
    image: "/company-logos/sl9.jpg",
    floor: "1st",
    room: "S1 AU (F28)"
  },
  {
    sl: 10,
    name: "ZF Commercial Vehicle Control Systems",
    branches: ["EE", "ME"],
    location: "Chennai",
    vacancy: "Trainee Engineer",
    image: "/company-logos/sl10.jpg",
    floor: "1st",
    room: "S1 EEE (F27)"
  },
  {
    sl: 11,
    name: "Amphenol Automotive",
    branches: ["ME", "AU"],
    location: "Chennai",
    vacancy: "Jr. Engineer",
    image: "/company-logos/sl11.jpg",
    floor: "2nd",
    room: "CT Department"
  },
  {
    sl: 12,
    name: "Incolt Infra Engineering Pvt Ltd",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "5+",
    image: "/company-logos/sl12.jpg",
    floor: "Ground",
    room: "Concrete Lab"
  },
  {
    sl: 13,
    name: "Icher Mobile Technologies Pvt Ltd",
    branches: ["EE"],
    location: "Kottakkal",
    vacancy: "10 positions",
    image: "/company-logos/sl13.jpg",
    floor: "1st",
    room: "S1 ME (F26)"
  },
  {
    sl: 14,
    name: "Tata Motors – Luxon",
    branches: ["AU"],
    location: "All over Kerala",
    vacancy: "10 positions",
    image: "/company-logos/sl14.jpg",
    floor: "2nd",
    room: "S42 (S6 CT)"
  },
  {
    sl: 15,
    name: "Indus Motors LCV (P) Ltd",
    branches: ["AU"],
    location: "All over Kerala",
    vacancy: "Technicians, Advisors, CRE",
    image: "/company-logos/sl15.jpg",
    floor: "2nd",
    room: "S48 (S4 AU)"
  },
  {
    sl: 17,
    name: "Artline Constructions",
    branches: ["CE"],
    location: "Malappuram / Kozhikode",
    vacancy: "Trainee Engineers Civil – 2 Nos",
    image: "/company-logos/sl17.jpg",
    floor: "Ground",
    room: "G18 Computer Lab"
  },
  {
    sl: 18,
    name: "HL Klemove India Pvt Ltd",
    branches: ["ME", "AU"],
    location: "Chennai",
    vacancy: "Trainee",
    image: "/company-logos/sl18.jpg",
    floor: "2nd",
    room: "S41 (S6 EEE)"
  },
  {
    sl: 19,
    name: "WIPRO Infrastructure Engineering",
    branches: ["EE", "ME"],
    location: "Chennai",
    vacancy: "Trainee Engineer",
    image: "/company-logos/s19.jpg",
    floor: "1st",
    room: "S1 CE (F25)"
  },
  {
    sl: 20,
    name: "DAMSURE Expert Build Care LLP",
    branches: ["CE"],
    location: "Malappuram / Kozhikode / Kannur",
    vacancy: "Project Executive Male",
    image: "/company-logos/sl20.jpg",
    floor: "Ground",
    room: "Seminar Hall door 1"
  },
  {
    sl: 21,
    name: "Sysbreeze Technologies Pvt Ltd",
    branches: ["CT"],
    location: "Kerala",
    vacancy: "Python, Data Science, MERN Developers",
    image: "/company-logos/sl21.jpg",
    floor: "Ground",
    room: "Fab Lab"
  },
  {
    sl: 22,
    name: "Violin Technologies Pvt Ltd",
    branches: ["EE", "CT"],
    location: "Chennai",
    vacancy: "Production / Trainee Engineer",
    image: "/company-logos/sl22.jpg",
    floor: "Ground",
    room: "G04 Physics Lab"
  },
  {
    sl: 23,
    name: "CY Myutes Anand Pvt Ltd",
    branches: ["ME"],
    location: "Chennai",
    vacancy: "Production / Trainee Engineer",
    image: "/company-logos/sl23.jpg",
    floor: "2nd",
    room: "S40 (S6 AU)"
  },
  {
    sl: 24,
    name: "Royal Enfield – Mass Wheels Pvt Ltd",
    branches: ["AU"],
    location: "Malappuram",
    vacancy: "Technicians, Sales, Accounts",
    image: "/company-logos/sl24.jpg",
    floor: "2nd",
    room: "S39 (S6 ME)"
  },
  {
    sl: 25,
    name: "Popular Vehicles and Services Ltd",
    branches: ["AU"],
    location: "All over Kerala",
    vacancy: "Advisor, Mechanic, Engineer",
    image: "/company-logos/sl25.jpg",
    floor: "2nd",
    room: "S38 (S6 CE)"
  },
  {
    sl: 26,
    name: "AVT Natural Products Ltd",
    branches: ["ME", "EE"],
    location: "Ernakulam",
    vacancy: "Machine Operation Trainees",
    image: "/company-logos/sl26.jpg",
    floor: "2nd",
    room: "Drawing Hall 1 (1st Door)"
  },
  {
    sl: 27,
    name: "HiLITE Group",
    branches: ["CE"],
    location: "Kozhikode",
    vacancy: "10 positions",
    image: "/company-logos/sl27.jpg",
    floor: "Ground",
    room: "Seminar Hall door 2"
  },
  {
    sl: 28,
    name: "Phoenix Cars India Pvt Ltd",
    branches: ["AU", "ME"],
    location: "Kerala",
    vacancy: "Technician, Sales, Manager",
    image: "/company-logos/sl28.jpg",
    floor: "2nd",
    room: "EEE Department"
  },
  {
    sl: 29,
    name: "Volvo Eicher Commercial Vehicle – PSN",
    branches: ["AU", "ME"],
    location: "Kerala",
    vacancy: "Advisor, Warranty Trainee",
    image: "/company-logos/sl29.jpg",
    floor: "2nd",
    room: "S45"
  },
  {
    sl: 30,
    name: "UNIRIDE Honda",
    branches: ["AU", "ME"],
    location: "Kerala",
    vacancy: "Sales, Mechanic, PDI Fitter",
    image: "/company-logos/sl30.jpg",
    floor: "2nd",
    room: "Drawing Hall 1 (2nd Door)"
  },
  {
    sl: 31,
    name: "Autobahn Trucking Corporation",
    branches: ["AU", "ME"],
    location: "Kerala",
    vacancy: "GET, Technician, Parts Trainee",
    image: "/company-logos/sl31.jpg",
    floor: "2nd",
    room: "Civil Department"
  },
  {
    sl: 32,
    name: "Phoenix Cars India – Volkswagen",
    branches: ["AU", "ME"],
    location: "Malappuram",
    vacancy: "Technician, Advisor, Sales",
    image: "/company-logos/sl32.jpg",
    floor: "2nd",
    room: "Automobile Department"
  },
  {
    sl: 33,
    name: "Impex Home Appliances",
    branches: ["EE"],
    location: "All over Kerala",
    vacancy: "15 positions",
    image: "/company-logos/sl33.jpg",
    floor: "Ground",
    room: "G03 Survey Lab"
  },
  {
    sl: 34,
    name: "Parisons Group of Companies",
    branches: ["ME", "EE"],
    location: "Kerala",
    vacancy: "Electrician, Engineer, Supervisor",
    image: "/company-logos/sl34.jpg",
    floor: "2nd",
    room: "Drawing Hall 1 (3rd Door)"
  },
  {
    sl: 35,
    name: "Softroniics",
    branches: ["CT"],
    location: "Kerala",
    vacancy: "UI/UX, Data, Python Dev",
    image: "/company-logos/sl35.jpg",
    floor: "Ground",
    room: "G08 EM Lab"
  },
  {
    sl: 36,
    name: "Bridgeon Solutions LLP",
    branches: ["CT"],
    location: "Kerala",
    vacancy: "Coordinators, BDE, Video Editor",
    image: "/company-logos/sl36.jpg",
    floor: "Ground",
    room: "G07 EL Workshop"
  },
  {
    sl: 37,
    name: "Symega Food Ingredient Ltd",
    branches: ["ME", "EE"],
    location: "Ernakulam",
    vacancy: "Operator – Production",
    image: "/company-logos/sl37.jpg",
    floor: "1st",
    room: "RAC LAB"
  },
  {
    sl: 38,
    name: "Glomith Engineers",
    branches: ["ME"],
    location: "Coimbatore",
    vacancy: "Operator – Production",
    image: "/company-logos/sl38.jpg",
    floor: "2nd",
    room: "S35 (S4 CT)"
  },
  {
    sl: 39,
    name: "SFO Technologies",
    branches: ["EE"],
    location: "Ernakulam",
    vacancy: "Trainee",
    image: "/company-logos/sl39.jpg",
    floor: "Ground",
    room: "G02 Environmental Engineering Lab"
  },
  {
    sl: 42,
    name: "AY Tech",
    branches: ["CT"],
    location: "EKM / TVM",
    vacancy: "Software Engineer, BDE",
    image: "/company-logos/sl42.jpg",
    floor: "Ground",
    room: "G05 Basic Electrical Workshop"
  },
  {
    sl: 43,
    name: "Frametech Steel Structures Pvt Ltd",
    branches: ["CE"],
    location: "Malappuram",
    vacancy: "Site Engineer, Draughtsman",
    image: "/company-logos/sl43.jpg",
    floor: "Ground",
    room: "G14 Hardware Lab"
  },
  {
    sl: 44,
    name: "Asty Constructions LLP",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "Site Engineer, Supervisor",
    image: "/company-logos/sl44.jpg",
    floor: "Ground",
    room: "G14 TMP Lab"
  },
  {
    sl: 45,
    name: "HK School Trenz",
    branches: ["CT"],
    location: "Kerala",
    vacancy: "Trainee Engineer",
    image: "/company-logos/sl45.jpg",
    floor: "Ground",
    room: "G06 NSS Room"
  },
  {
    sl: 46,
    name: "Acmmo Architects",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "Site Supervisor, Designer",
    image: "/company-logos/sl46.jpg",
    floor: "Ground",
    room: "G13 VT Lab"
  },
  {
    sl: 47,
    name: "Eminent Builders & Interiors",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "Site Engineer, Quantity Surveyor",
    image: "/company-logos/sl47.jpg",
    floor: "Ground",
    room: "Common computer lab"
  },
  {
    sl: 48,
    name: "Refos Energy Pvt Ltd",
    branches: ["EE"],
    location: "Kozhikode",
    vacancy: "Sales Manager",
    image: "/company-logos/sl48.jpg",
    floor: "Ground",
    room: "G01"
  },
  {
    sl: 50,
    name: "Regional Technology",
    branches: ["CT"],
    location: "Kozhikode",
    vacancy: "Junior Software Developer",
    image: "/company-logos/sl50.jpg",
    floor: "1st",
    room: "Security Room"
  },
  {
    sl: 52,
    name: "AN Technologies",
    branches: ["EE"],
    location: "Kerala",
    vacancy: "Trainee",
    image: "/company-logos/sl52.jpg",
    floor: "Ground",
    room: "MT lab"
  },
  {
    sl: 53,
    name: "Avon Engineering",
    branches: ["ME"],
    location: "Mysore",
    vacancy: "Production Operator",
    image: "/company-logos/sl53.jpg",
    floor: "Ground",
    room: "General Department"
  },
  {
    sl: 54,
    name: "AJ Engineering",
    branches: ["ME", "AU"],
    location: "Mysore",
    vacancy: "Production Operator",
    image: "/company-logos/sl54.jpg",
    floor: "Ground",
    room: "General Department"
  },
  {
    sl: 55,
    name: "KM Tractors",
    branches: ["ME", "AU"],
    location: "Kerala",
    vacancy: "Service Engineer",
    image: "/company-logos/sl55.jpg",
    floor: "2nd",
    room: "Drawing hall 2 (1st Door)"
  },
  {
    sl: 56,
    name: "CODE Developers",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "4 Site Engineers",
    image: "/company-logos/sl56.jpg",
    floor: "Ground",
    room: "CAD Lab"
  },
  {
    sl: 57,
    name: "Adani ACC Cement",
    branches: ["CE"],
    location: "Kerala",
    vacancy: "Trainee",
    image: "/company-logos/sl57.jpg",
    floor: "Ground",
    room: "Library Room 2"
  },
  {
    sl: 58,
    name: "IluZia Lab",
    branches: ["CT"],
    location: "KOZHIKODE",
    vacancy: "UNITY DEVOLOPER INTERN,VIDEO EDITOR,SALES AND MARKETING, EXECUTIVE,OFFICE ADMIN",
    image: "/company-logos/sl58.jpg",
   floor: "2nd",
  room: "S59 (Near CT Dpt)"
  }
];

export const BRANCH_MAP: Record<string, string> = {

  CT: "Computer",

  CE: "Civil",

  EE: "Electrical & Eletronics",

  ME: "Mechanical",

  AU: "Automobile",

};



export const BRANCH_CODES = Array.from(

  new Set(COMPANIES.flatMap((c) => c.branches)),

).sort();



export const QUOTES = [
  "MAJLIS MEGA PLACEMENT DRIVE 2026",
  "Connecting Talent with Opportunity Across Industries",
  "1800+ Vacancies.Explore Companies, and Career Paths.",
  "Build Your Future, One Step at a Time",
];



export const BRANCH_COLORS: Record<Branch, string> = {
  ME: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  EE: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  AU: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  CE: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  CT: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
};