import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Index from "../pages/Index";
import WebProjects from "../pages/WebProjects";
import MobileProjects from "../pages/MobileProjects";
import Academic from "../pages/Academic";
import Electrical from "../pages/Electrical";
import NotFound from "../pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/software" element={<Index />} />
          <Route path="/software/web" element={<WebProjects />} />
          <Route path="/software/mobile" element={<MobileProjects />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
