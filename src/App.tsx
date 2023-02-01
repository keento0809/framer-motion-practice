import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <p>framer motion pract</p>
    </motion.div>
  );
}

export default App;
