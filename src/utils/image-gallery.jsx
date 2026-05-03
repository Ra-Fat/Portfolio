import React, { useState } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const ImageGalleryModal = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/40"
      onClick={onClose}
    >
      <div
        className="
          relative w-[95%]
          sm:w-[90%]
          md:w-[85%]
          lg:w-[80%]
          xl:max-w-5xl
          bg-gray-900 rounded-2xl border border-white/10 overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-5">
          
          {/* Main Preview */}
          <section className="md:col-span-2">
            <div className="bg-gray-800 rounded-xl overflow-hidden aspect-video w-full h-full">
              {selectedImageIndex === 0 ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videodemo
                    .split('/')
                    .pop()}?mute=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Video preview"
                />
              ) : (
                <img
                  src={project.gallery[selectedImageIndex - 1]}
                  alt="preview"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              )}
            </div>
          </section>

          {/* Sub Section */}
          <section
            className="
              flex md:flex-col
              gap-3
              overflow-x-auto md:overflow-y-auto
              md:overflow-x-hidden
              max-h-none md:max-h-[370px]
              pr-0 md:pr-2
              custom-scrollbar 
              "
          >
            {/* Video Thumbnail */}
            <button
              onClick={() => setSelectedImageIndex(0)}
              className={`
                flex-shrink-0
                relative
                w-[120px] sm:w-[140px] md:w-full
                aspect-video
                rounded-lg overflow-hidden
                border-2 transition-all
                cursor-pointer
                ${
                  selectedImageIndex === 0
                    ? 'border-white'
                    : 'border-white/20 hover:border-white/50'
                }
              `}
              aria-label="Select video preview"
              type="button"
            >
              <img
                src={`https://img.youtube.com/vi/${project.videodemo
                  .split('/')
                  .pop()}/hqdefault.jpg`}
                alt="Video preview"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                <Play className="w-8 h-8 text-white" />
              </div>
            </button>

            {/* Image Thumbnails */}
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index + 1)}
                className={`
                  flex-shrink-0
                  relative
                  w-[120px] sm:w-[140px] md:w-full
                  aspect-video
                  rounded-lg overflow-hidden
                  border-2 transition-all
                  cursor-pointer
                  ${
                    selectedImageIndex === index + 1
                      ? 'border-white'
                      : 'border-white/20 hover:border-white/50'
                  }
                `}
                aria-label={`Select image thumbnail ${index + 1}`}
                type="button"
              >
                <img
                  src={image}
                  alt={`${project.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </section>
        </div>

        {/* Bottom Buttons */}
        <div className="px-4 md:px-5 pb-5">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="flex gap-2 pt-4">
            {project.hostlink?.trim() && (
              <a
                href={project.hostlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 bg-blue-700 rounded-lg font-bold text-sm hover:-translate-y-1 transition"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}

            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 hover:-translate-y-1 transition"
            >
              <FaGithub className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
