import { motion } from 'framer-motion';
import { JobPost } from '../../types/job';

type JobApplicationFormProps = {
  job: JobPost;
  onClose: () => void;
};

export default function JobApplicationForm({ job, onClose }: JobApplicationFormProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-gray-800 rounded-xl p-6 max-w-lg w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center py-8">
          <p className="text-lg mb-4">Please send your resume to:</p>
          <a 
            href="mailto:hr@rootamz.com" 
            className="text-purple-400 hover:text-purple-300"
          >
            hr@rootamz.com
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition-colors mt-4"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
} 