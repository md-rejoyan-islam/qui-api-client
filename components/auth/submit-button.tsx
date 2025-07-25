"use client";
import { motion } from "framer-motion";

const SubmitButton = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) => {
  return (
    <motion.button
      type="submit"
      disabled={isLoading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
    >
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
        />
      ) : (
        <>{children}</>
      )}
    </motion.button>
  );
};

export default SubmitButton;
