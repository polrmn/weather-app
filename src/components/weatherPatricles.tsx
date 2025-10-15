import { useEffect, useState } from "react";
import type { WeatherType } from "../types/weather";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import presets from "../weather-present";

const weatherPatricles = ({ weatherType }: { weatherType: WeatherType }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = presets[weatherType] || presets.Clear;

  if (!init) return null;

  return (
    <Particles
      id="weather-particles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        ...options,
      }}
    />
  );
};

export default weatherPatricles;
