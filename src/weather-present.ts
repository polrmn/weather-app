import type { WeatherType } from "./types/weather";

const presets: Record<WeatherType, any> = {
  Thunderstorm: {
    background: { color: "#0f0f0f" },
    particles: {
      number: { value: 120 },
      color: { value: "#ffffff" },
      shape: { type: "line" },
      size: { value: { min: 1, max: 2 } },
      move: { direction: "bottom", speed: 15, outModes: "out" },
      opacity: { value: 0.6 },
    },
    detectRetina: true,
  },
  Drizzle: {
    background: { color: "#2f3e46" },
    particles: {
      number: { value: 80 },
      color: { value: "#b3cde0" },
      shape: { type: "line" },
      size: { value: { min: 1, max: 2 } },
      move: { direction: "bottom", speed: 4, outModes: "out" },
      opacity: { value: 0.4 },
    },
    detectRetina: true,
  },
  Rain: {
    background: { color: "#1b263b" },
    particles: {
      number: { value: 180 },
      color: { value: "#a9c9ff" },
      shape: { type: "line" },
      size: { value: { min: 1, max: 2 } },
      move: { direction: "bottom", speed: 10, outModes: "out" },
      opacity: { value: 0.6 },
    },
    detectRetina: true,
  },
  Snow: {
    background: { color: "#0d47a1" },
    particles: {
      number: { value: 200 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 5 } },
      move: { direction: "bottom", speed: 2, outModes: "out" },
      opacity: { value: 0.8 },
    },
    detectRetina: true,
  },
  Atmosphere: {
    background: { color: "#4b5563" },
    particles: {
      number: { value: 100 },
      color: { value: "#d1d5db" },
      shape: { type: "circle" },
      size: { value: { min: 20, max: 80 } },
      move: { direction: "none", speed: 0.2 },
      opacity: { value: 0.15 },
    },
    detectRetina: true,
  },
  Clear: {
    background: { color: "#87ceeb" },
    particles: {
      number: { value: 30 },
      color: { value: "#fff" },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
      move: { direction: "none", speed: 0.5 },
      opacity: { value: 0.3 },
    },
    detectRetina: true,
  },
  Clouds: {
    background: { color: "#94a3b8" },
    particles: {
      number: { value: 60 },
      color: { value: "#f1f5f9" },
      shape: { type: "circle" },
      size: { value: { min: 50, max: 120 } },
      move: { direction: "none", speed: 0.3 },
      opacity: { value: 0.25 },
    },
    detectRetina: true,
  },
};

export default presets