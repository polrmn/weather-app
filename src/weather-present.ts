import type { ISourceOptions } from "@tsparticles/engine";
import type { WeatherType } from "./types/weather";

const presets: Record<WeatherType | "Default", ISourceOptions> = {
  Thunderstorm: {
    background: { color: "#0f0f0f" },
    particles: {
      number: { value: 200 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      size: { value: { min: 0.2, max: 1 } },
      move: {
        direction: "bottom",
        speed: 40,
        outModes: "out",
        enable: true,
        angle: { value: 45, offset: -20 },
      },
      opacity: { value: 0.6 },
    },
    detectRetina: true,
  },
  Drizzle: {
    background: { color: "#2f3e46" },
    particles: {
      number: { value: 80 },
      color: { value: "#b3cde0" },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 1 } },
      move: {
        direction: "bottom",
        speed: 15,
        outModes: "out",
        enable: true,
        angle: { value: 0, offset: 0 },
      },
      opacity: { value: 0.4 },
    },
    detectRetina: true,
  },
  Rain: {
    background: { color: "#1b263b" },
    particles: {
      number: { value: 180 },
      color: { value: "#a9c9ff" },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
      move: {
        direction: "bottom",
        speed: 20,
        outModes: "out",
        enable: true,
        angle: { value: 0, offset: 0 },
      },
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
      move: { direction: "bottom", speed: 2, outModes: "out", enable: true },
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
      move: { direction: "none", speed: 0.2, enable: true },
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
      move: { direction: "none", speed: 0.5, enable: true },
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
      move: { direction: "none", speed: 0.3, enable: true },
      opacity: { value: 0.25 },
    },
    detectRetina: true,
  },
  Haze: {
    background: { color: "#9ca3af" },
    particles: {
      number: { value: 120 },
      color: { value: "#e5e7eb" },
      shape: { type: "circle" },
      size: { value: { min: 40, max: 100 } },
      move: { direction: "none", speed: 0.2, enable: true },
      opacity: { value: 0.15 },
    },
    detectRetina: true,
  },
  Default: {
    background: {
      color: {
        value: "#0d47a1",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  },
};

export default presets;
