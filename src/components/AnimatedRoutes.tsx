import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

// All routes lazy — Landing fetches immediately on navigation start,
// but its JS is excluded from the entry chunk to keep the initial parse cost low.
const Landing = lazy(() => import("../pages/Landing"));
const Index = lazy(() => import("../pages/Index"));
const WebProjects = lazy(() => import("../pages/WebProjects"));
const MobileProjects = lazy(() => import("../pages/MobileProjects"));
const Academic = lazy(() => import("../pages/Academic"));
const Electrical = lazy(() => import("../pages/Electrical"));
const NotFound = lazy(() => import("../pages/NotFound"));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

// Minimal fallback — invisible, prevents layout shift
const PageLoader = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

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
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/software" element={<Index />} />
            <Route path="/software/web" element={<WebProjects />} />
            <Route path="/software/mobile" element={<MobileProjects />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
