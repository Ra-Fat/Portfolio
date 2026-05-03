import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/animation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className='flex items-center gap-3 w-full px-6 justify-center mb-10'
      variants={headerVariants}
    >
      <span className="text-2xl md:text-3xl font-bold uppercase">
        {title}
      </span>
      {subtitle && (
        <>
          <span className="text-lg md:text-3xl font-black text-gray-300">/</span>
          <span className="text-2xl md:text-3xl font-bold uppercase text-gray-500">
            {subtitle}
          </span>
        </>
      )}
    </motion.div>
  );
};