import { useEffect, useState } from "react";
import { type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { AnimatePresence, motion } from "framer-motion";
import type { WeatherType } from "../types/weather";
import presets from "../weather-present";

const WeatherPatricles = ({
  weatherType,
}: {
  weatherType?: WeatherType | undefined;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = weatherType ? presets[weatherType] : presets.Default;

  if (!init) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={weatherType}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0.7, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0.7, filter: "blur(10px)" }}
        style={{ position: "fixed", inset: 0, zIndex: -1 }}
      >
        <Particles id="weather-particles" options={options} />
      </motion.div>
    </AnimatePresence>
  );
};

export default WeatherPatricles;
