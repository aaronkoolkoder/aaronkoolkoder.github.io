export type Project = {
  id: string;
  name: string;
  /** One line for the home page list */
  blurb: string;
  /** A couple of sentences for the projects page */
  details: string;
  tags: string[];
  href?: string;
  /** label for the link on the projects page */
  linkLabel?: string;
  /** screenshot in /public/projects, e.g. "/projects/diorama.png" (16:10 works best) */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "diorama",
    name: "Diorama",
    blurb: "live wallpapers for macOS, rendered in Metal at under 0.5% CPU",
    details:
      "A native macOS wallpaper engine that plays Wallpaper Engine scenes on Apple Silicon. Multi-pass effects, particles and audio reactivity in Metal, GLSL-to-Metal shader translation through SPIR-V, and 477 automated tests.",
    tags: ["Swift", "SwiftUI", "Metal", "C++", "GLSL"],
    href: "https://github.com/aaronkoolkoder/wallpaperapp",
    linkLabel: "source",
    image: "/projects/diorama.webp",
  },
  {
    id: "drone",
    name: "Autonomous targeting drone",
    blurb: "a quadcopter that finds and tracks targets on its own",
    details:
      "An F450 quadcopter on ArduPilot and MAVLink that detects faces and objects with OpenCV, then uses kinematic targeting to aim a water actuator at them. PID control and IMU/GPS telemetry keep it steady.",
    tags: ["Python", "OpenCV", "ArduPilot", "MAVLink", "Computer vision"],
    image: "/projects/drone.jpg",
  },
  {
    id: "tinyinfer",
    name: "LLM inference engine",
    blurb: "built from scratch in C++, at 102% of llama.cpp's CPU decode speed",
    details:
      "Runs GPT-2 and Llama-style models like Qwen2.5 with no PyTorch or BLAS: mmapped weights, a byte-level BPE tokenizer, a KV cache, sampling, and multithreaded NEON kernels. Every step is checked against Hugging Face, and CPU token generation matches llama.cpp.",
    tags: ["C++", "NEON", "OpenMP", "LLMs", "Python"],
    href: "https://github.com/aaronkoolkoder/tinyinfer",
    linkLabel: "source",
    image: "/projects/tinyinfer.png",
  },
  {
    id: "seal-a-driveway",
    name: "Seal A Driveway",
    blurb: "a multiplayer Roblox game with 7.2M plays and 11K CCU",
    details:
      "Lunate Studios' biggest game: 7.2M+ plays and 11K peak concurrent players before it was acquired. Server-side validation, networking, saved player data, and progression, economy and quest systems.",
    tags: ["Luau", "Roblox", "Game dev"],
    href: "https://www.roblox.com/games/120014184236770",
    linkLabel: "play",
    image: "/projects/seal-a-driveway.jpg",
  },
  {
    id: "extrovert-ai",
    name: "Extrovert AI",
    blurb: "rehearse interviews and pitches with AI video personas",
    details:
      "Built at RythmHacks. Practice real conversations with lifelike AI video personas, then get scored on six communication traits like clarity and confidence, with dashboards to track progress.",
    tags: ["React", "Flask", "OpenAI", "Tavus", "Supabase"],
    href: "https://github.com/aaronkoolkoder/Extrovert-AI",
    linkLabel: "source",
    image: "/projects/extrovert-ai.jpg",
  },
  {
    id: "myhighschool-club",
    name: "myhighschool.club",
    blurb: "websites for Ontario high-school clubs, used at 10+ schools",
    details:
      "A platform that gave high-school clubs their own websites, with templates and an approval workflow for each school. Built with a team of four, it ran for a school year and reached 10+ Ontario high schools.",
    tags: ["TypeScript", "React", "Supabase", "Tailwind"],
    href: "https://github.com/anujmish1229/myhighschool.club",
    linkLabel: "source",
    image: "/projects/myhighschool-club.webp",
  },
  {
    id: "table",
    name: "Table",
    blurb: "poker and blackjack with friends, with 3D avatars",
    details:
      "An iOS app for playing poker and blackjack with friends, with CPU opponents, game history and a 3D avatar creator.",
    tags: ["Swift", "SwiftUI", "Supabase", "iOS"],
    image: "/projects/table.png",
  },
];

/** Shown on the home page */
export const featured = ["drone", "tinyinfer", "diorama"].map(
  (id) => projects.find((p) => p.id === id)!,
);
