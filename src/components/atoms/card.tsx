import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variants?: any;
};

export const Card = ({
  children,
  className = '',
  variants,
}: CardProps) => {
  return (
    <motion.div
      variants={variants}
      className={`bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};