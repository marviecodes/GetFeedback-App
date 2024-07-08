import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet..</p>;
  }

  return (
    <div className="feedback-List">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-List">
  //     {feedback.map((item) => (
  //       <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
