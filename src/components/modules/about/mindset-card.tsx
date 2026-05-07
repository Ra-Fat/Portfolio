import React from "react";
import { freeStyle1, freeStyle2, freeStyle3 } from "../../../../assets/index";
import { motion } from "framer-motion";
import { ImageCarousel } from "../../../utils/constants/image-animation";
import { contentRightVariants } from "../../../utils/animations/animation";

const images = [
  { id: 1, img: freeStyle1 },
  { id: 2, img: freeStyle2 },
  { id: 3, img: freeStyle3 },
];

export const MindsetCard = () => (
  <>
    <div>
      <h3 className="text-2xl font-bold text-primary mb-1">Mindset</h3>
      <div className="w-8 h-0.5 bg-white/20 rounded" />
    </div>
    <p className="text-sm text-secondary leading-relaxed">
      <span className="font-semibold text-primary">
        Building more than software.
      </span>{" "}
      I approach every problem with discipline, curiosity, and a focus on
      long-term quality over quick fixes.
    </p>
    <motion.section
      className="w-full flex items-center justify-center relative overflow-hidden rounded-xl p-2 h-[230px]"
      variants={contentRightVariants}
    >
      <ImageCarousel images={images} />
    </motion.section>
  </>
);
