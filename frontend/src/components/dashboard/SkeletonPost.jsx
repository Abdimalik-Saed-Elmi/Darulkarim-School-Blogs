import { motion } from 'framer-motion';

const SkeletonPost = () => {
  return (
    <motion.div
      className="border border-gray-200 p-4 rounded-lg"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
    >
      <motion.div className="w-full h-36 bg-gray-300 rounded-lg mb-4" />
      <motion.div className="w-4/5 h-5 bg-gray-300 rounded-lg mb-2" />
      <motion.div className="w-11/12 h-4 bg-gray-300 rounded-lg mb-1" />
      <motion.div className="w-11/12 h-4 bg-gray-300 rounded-lg mb-1" />
      <motion.div className="w-11/12 h-4 bg-gray-300 rounded-lg" />
    </motion.div>
  );
};

export default SkeletonPost;