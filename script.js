// script.js
const planets = [
  {
    name: "水星",
    nameEn: "Mercury",
    size: 10,
    distance: 80,
    speed: 4.7,
    color: "#A5A5A5",
    info: "距離太陽最近的行星，表面溫差極大。",
    infoEn:
      "The closest planet to the Sun, with extreme temperature variations.",
  },
  {
    name: "金星",
    nameEn: "Venus",
    size: 15,
    distance: 120,
    speed: 3.5,
    color: "#E3BB76",
    info: "太陽系中最熱的行星，擁有濃厚的二氧化碳大氣。",
    infoEn:
      "The hottest planet in the solar system, with a thick carbon dioxide atmosphere.",
  },
  {
    name: "地球",
    nameEn: "Earth",
    size: 16,
    distance: 170,
    speed: 2.9,
    color: "#2271B3",
    info: "我們美麗的家園，目前已知唯一有生命的星球。",
    infoEn: "Our beautiful home, the only known planet to harbor life.",
  },
  {
    name: "火星",
    nameEn: "Mars",
    size: 12,
    distance: 220,
    speed: 2.4,
    color: "#E27B58",
    info: "被稱為紅色星球，擁有太陽系中最高的山脈。",
    infoEn:
      "Known as the Red Planet, it features the highest mountains in the solar system.",
  },
  {
    name: "木星",
    nameEn: "Jupiter",
    size: 30,
    distance: 300,
    speed: 1.3,
    color: "#D39C7E",
    info: "太陽系中最大的行星，是一個氣態巨行星。",
    infoEn: "The largest planet in the solar system, a gas giant.",
  },
  {
    name: "土星",
    nameEn: "Saturn",
    size: 26,
    distance: 380,
    speed: 0.9,
    color: "#C5AB6E",
    info: "以其美麗的環系統聞名。",
    infoEn: "Famous for its beautiful ring system.",
  },
  {
    name: "天王星",
    nameEn: "Uranus",
    size: 20,
    distance: 450,
    speed: 0.6,
    color: "#B5E3E3",
    info: "躺著旋轉的行星，大氣中含有甲烷。",
    infoEn:
      "A planet that rotates on its side, its atmosphere contains methane.",
  },
  {
    name: "海王星",
    nameEn: "Neptune",
    size: 19,
    distance: 510,
    speed: 0.5,
    color: "#6081FF",
    info: "距離太陽最遠的行星，風速極快。",
    infoEn: "The most distant planet from the Sun, with extremely fast winds.",
  },
];

const solarSystem = document.getElementById("solar-system");
const infoPanel = document.getElementById("info-panel");
const planetNameDisplay = document.getElementById("planet-name");
const planetNameEnDisplay = document.getElementById("planet-name-en");
const planetInfoDisplay = document.getElementById("planet-info");
const planetInfoEnDisplay = document.getElementById("planet-info-en");
const closeBtn = document.getElementById("close-btn");
const pauseBtn = document.getElementById("pause-btn");

let isPaused = false;

function showPlanetInfo(planet) {
  planetNameDisplay.innerText = planet.name;
  planetNameEnDisplay.innerText = planet.nameEn;
  planetInfoDisplay.innerText = planet.info;
  planetInfoEnDisplay.innerText = planet.infoEn;
  infoPanel.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  infoPanel.classList.add("hidden");
});

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  const orbits = document.querySelectorAll(".orbit");
  orbits.forEach((orbit) => {
    if (isPaused) {
      orbit.classList.add("paused");
    } else {
      orbit.classList.remove("paused");
    }
  });
  pauseBtn.innerText = isPaused ? "Resume" : "Pause";
});

// Close panel when clicking outside
document.addEventListener("click", (e) => {
  if (
    !infoPanel.contains(e.target) &&
    !e.target.classList.contains("planet") &&
    !infoPanel.classList.contains("hidden")
  ) {
    infoPanel.classList.add("hidden");
  }
});

planets.forEach((planet) => {
  // Create orbit
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.width = `${planet.distance * 2}px`;
  orbit.style.height = `${planet.distance * 2}px`;
  orbit.style.animationDuration = `${10 / planet.speed}s`;

  // Create planet
  const planetEl = document.createElement("div");
  planetEl.className = "planet";
  planetEl.style.width = `${planet.size}px`;
  planetEl.style.height = `${planet.size}px`;
  planetEl.style.backgroundColor = planet.color;
  planetEl.style.left = `-${planet.size / 2}px`;

  // Click event
  planetEl.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from firing
    showPlanetInfo(planet);
  });

  // Create label
  const label = document.createElement("div");
  label.className = "planet-label";
  label.innerText = planet.name;
  planetEl.appendChild(label);

  orbit.appendChild(planetEl);
  solarSystem.appendChild(orbit);
});
