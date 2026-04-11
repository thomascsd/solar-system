// script.js
const planets = [
  {
    name: "水星",
    size: 10,
    distance: 80,
    speed: 4.7,
    color: "#A5A5A5",
    info: "距離太陽最近的行星，表面溫差極大。",
  },
  {
    name: "金星",
    size: 15,
    distance: 120,
    speed: 3.5,
    color: "#E3BB76",
    info: "太陽系中最熱的行星，擁有濃厚的二氧化碳大氣。",
  },
  {
    name: "地球",
    size: 16,
    distance: 170,
    speed: 2.9,
    color: "#2271B3",
    info: "我們美麗的家園，目前已知唯一有生命的星球。",
  },
  {
    name: "火星",
    size: 12,
    distance: 220,
    speed: 2.4,
    color: "#E27B58",
    info: "被稱為紅色星球，擁有太陽系中最高的山脈。",
  },
  {
    name: "木星",
    size: 30,
    distance: 300,
    speed: 1.3,
    color: "#D39C7E",
    info: "太陽系中最大的行星，是一個氣態巨行星。",
  },
  {
    name: "土星",
    size: 26,
    distance: 380,
    speed: 0.9,
    color: "#C5AB6E",
    info: "以其美麗的環系統聞名。",
  },
  {
    name: "天王星",
    size: 20,
    distance: 450,
    speed: 0.6,
    color: "#B5E3E3",
    info: "躺著旋轉的行星，大氣中含有甲烷。",
  },
  {
    name: "海王星",
    size: 19,
    distance: 510,
    speed: 0.5,
    color: "#6081FF",
    info: "距離太陽最遠的行星，風速極快。",
  },
];

const solarSystem = document.getElementById("solar-system");
const infoPanel = document.getElementById("info-panel");
const planetNameDisplay = document.getElementById("planet-name");
const planetInfoDisplay = document.getElementById("planet-info");
const closeBtn = document.getElementById("close-btn");

function showPlanetInfo(planet) {
  planetNameDisplay.innerText = planet.name;
  planetInfoDisplay.innerText = planet.info;
  infoPanel.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  infoPanel.classList.add("hidden");
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
