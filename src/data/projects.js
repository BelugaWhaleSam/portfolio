import Mnemo from "../assets/mnemo.svg";
import WebServer from "../assets/webserver.svg";
import IInvest from "../assets/iinvest.svg";
import Work1 from "../assets/w1.png";
import Work2 from "../assets/w2.png";
import Work3 from "../assets/w3.png";
import Work4 from "../assets/w4.png";
import Work5 from "../assets/w5.png";
import Work6 from "../assets/w6.png";
import Work7 from "../assets/w7.png";
import Work8 from "../assets/w8.png";
import Work9 from "../assets/w9.jpeg";
import Work10 from "../assets/w10.jpeg";
import Work11 from "../assets/w11.png";
import Work12 from "../assets/w12.png";

// Every entry in `links` is optional, so a card renders only the buttons it
// actually has. I-Invest is a private repo with no public link yet, so it
// renders none.
export const projectsData = [
  {
    id: 1,
    image: Mnemo,
    title: "Mnemo",
    category: "Backend",
    description:
      "A memory layer for AI tools: save a fact once and any MCP client can recall it by meaning across separate conversations. Kafka ingestion chunks text and batches embeddings with retries, idempotent consumers skip duplicates, and hybrid search merges pgvector HNSW similarity with Postgres full-text ranking. Redis caches repeat questions behind a per-user token-bucket rate limiter.",
    tech: [
      "Java 21",
      "Spring Boot",
      "React",
      "Kafka",
      "Postgres + pgvector",
      "Redis",
      "Docker",
      "MCP",
    ],
    links: { github: "https://github.com/BelugaWhaleSam/mnemo" },
  },
  {
    id: 2,
    image: WebServer,
    title: "Multithreaded Web Server",
    category: "Backend",
    description:
      "Three Java server designs built side by side (single-threaded, thread-per-request, and a custom ExecutorService thread pool), with a client simulator to load test where each one falls over.",
    tech: ["Java", "Sockets", "ExecutorService", "Concurrency"],
    links: {
      github: "https://github.com/BelugaWhaleSam/MultithreadedWebServer-Java",
    },
  },
  {
    id: 3,
    image: IInvest,
    title: "I-Invest Fintech Platform",
    category: "Backend",
    award: "Oracle Code-Contest Winner 2024",
    description:
      "A microservices investment platform where advisors build stock baskets from the NIFTY 50 and investors allocate funds, track portfolio performance and manage a wallet. Profile, Basket, Transaction and Stocks run as independent Spring Boot services over REST, with Hystrix handling fallbacks when one of them goes down.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Hystrix",
      "Microservices",
      "Oracle DB",
      "PostgreSQL",
      "Thymeleaf",
    ],
    links: {},
  },
  {
    id: 4,
    image: Work12,
    title: "Car-Rental Fullstack",
    category: "Web",
    description:
      "A full car rental platform: a React and TypeScript frontend talking to a Nest.js and TypeORM backend over Apollo GraphQL, packaged so the whole stack comes up with a single Docker Compose command.",
    tech: [
      "React",
      "TypeScript",
      "Apollo GraphQL",
      "Nest.js",
      "TypeORM",
      "Tailwind",
      "Docker Compose",
    ],
    links: { github: "https://github.com/BelugaWhaleSam/car-docker" },
  },
  {
    id: 5,
    image: Work10,
    title: "50Fin Official Website",
    category: "Web",
    description:
      "The company's site, rebuilt from scratch in React during my internship. Responsive throughout, with GitHub Actions deploying to Firebase Hosting on every push to main. Trimmed roughly 1.1s off average page response time.",
    tech: ["React", "Firebase Hosting", "GitHub Actions", "Responsive Design"],
    links: { live: "https://50-fin.vercel.app/" },
  },
  {
    id: 6,
    image: Work9,
    title: "BlackCrab IT Services",
    category: "Web",
    description:
      "A marketing site for an IT services company. Responsive multi-section layout covering services, team and contact, deployed on Vercel.",
    tech: ["React", "Responsive Design", "Vercel"],
    links: { live: "https://black-crab.vercel.app/" },
  },
  {
    id: 7,
    image: Work8,
    title: "TerraDapp: Decentralised Crowdfunding",
    category: "Blockchain",
    award: "HACKMAN.v6 Winner 2023",
    description:
      "Crowdfunding for environmental-crisis campaigns, built with my team at HACKMAN.v6. Donations run through MetaMask against a smart contract on Polygon Mumbai, with Supabase handling auth and hybrid storage, and Polygon ID explored for KYC-style campaign verification.",
    tech: [
      "React",
      "Solidity",
      "Polygon Mumbai",
      "Supabase",
      "Polygon ID",
      "Material UI",
    ],
    links: {
      github: "https://github.com/BelugaWhaleSam/Crowdfunding-TerraDapp",
    },
  },
  {
    id: 8,
    image: Work11,
    title: "Feedback Hub",
    category: "Web",
    description:
      "A SaaS for dropping a feedback widget onto any site. Google and GitHub OAuth with cookie-based routing to the dashboard; sites and feedback render server-side from the DB and mutate client-side through the cache to keep it snappy.",
    tech: ["Next.js", "React", "Firebase", "Chakra UI", "Vercel"],
    links: {
      github: "https://github.com/BelugaWhaleSam/feedbackHub",
      live: "https://fastfeedback-vert-nu.vercel.app/",
    },
  },
  {
    id: 9,
    image: Work1,
    title: "Transaction dapp",
    category: "Blockchain",
    description:
      "Send Ethereum transactions with a message and a GIF attached, where keywords in the message pick the GIF. Every recent transaction renders on the page with its sender and receiver addresses.",
    tech: ["React", "Solidity", "Hardhat", "Ethers.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/BelugaWhaleSam/transaction-dapp-web3",
      live: "https://elegant-banoffee-686225.netlify.app/",
    },
  },
  {
    id: 10,
    image: Work2,
    title: "Twitter Clone Web3.0",
    category: "Blockchain",
    description:
      "Tweets posted straight to the chain through a connected MetaMask account, with ownership enforced in the contract so only an author can delete their own tweet. Embedded Twitter widgets fill out the timeline.",
    tech: ["React", "Solidity", "Hardhat", "Material UI"],
    links: {
      github: "https://github.com/BelugaWhaleSam/twitter-clone-dapp",
      live: "https://super-zuccutto-86048d.netlify.app/",
    },
  },
  {
    id: 11,
    image: Work3,
    title: "Social media Dapp",
    category: "Blockchain",
    description:
      "A social feed built on Lens Protocol's decentralised social graph. Recommended profiles and posts are queried over GraphQL with urql, so the follow graph lives on-chain instead of in a database.",
    tech: ["React", "Lens Protocol", "GraphQL", "urql", "Chakra UI"],
    links: {
      github: "https://github.com/BelugaWhaleSam/socialMedia-dapp-lens",
      live: "https://spectacular-cocada-2e4b64.netlify.app/",
    },
  },
  {
    id: 12,
    image: Work5,
    title: "Ethereum Todolist",
    category: "Blockchain",
    description:
      "A todo list with no server behind it: the client talks directly to the blockchain through a connected Ethereum wallet, so every task added or completed is a contract call.",
    tech: ["React", "Solidity", "Ethereum", "Smart Contracts"],
    links: {
      github: "https://github.com/BelugaWhaleSam/ethereum-todolist",
      live: "https://ethereum-todolist.vercel.app/",
    },
  },
  {
    id: 13,
    image: Work4,
    title: "Blog Platform",
    category: "Web",
    description:
      "A full-stack blogging template with a compose page for publishing posts, server-rendered with EJS on an Express and Node backend and persisted to MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Heroku"],
    links: { github: "https://github.com/BelugaWhaleSam/Blog-DB" },
  },
  {
    id: 14,
    image: Work6,
    title: "Secret Whisper App",
    category: "Web",
    description:
      "Share a secret anonymously, one per account. Auth runs through Passport.js with Auth0, secrets are stored in MongoDB and rendered with EJS.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Auth0",
      "Bootstrap",
    ],
    links: { github: "https://github.com/BelugaWhaleSam/Secret" },
  },
  {
    id: 15,
    image: Work7,
    title: "Todo List with Database",
    category: "Web",
    description:
      "A todo list that survives a refresh. Tasks are added and removed against MongoDB, served by Express with EJS templates.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Heroku"],
    links: { github: "https://github.com/BelugaWhaleSam/Todolist-DB" },
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "Backend" },
  { name: "Web" },
  { name: "Blockchain" },
];
