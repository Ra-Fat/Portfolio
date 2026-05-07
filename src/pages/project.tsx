import React, { useState } from "react";
import { ProjectsData } from "../data/data";
import { SectionTitle } from "../components/atoms/section-title";
import { ProjectCard } from "../components/modules/projects/project-card";
import { useVisibleCards } from "../components/modules/projects/hooks/visible-card";
import { useLockScroll } from "../components/modules/projects/hooks/lock-scroll";
import { ProjectDetails } from "../components/modules/projects/project-detail";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { visibleIndexes, cardRefs } = useVisibleCards(ProjectsData.length);

  useLockScroll(selectedProject !== null);

  return (
    <div className="w-full lg:px-10 xl:px-16">
      <div className="flex flex-col items-center justify-center w-full xl:px-10">
        <SectionTitle title="Projects" subtitle="Showcase" />

        <div className="w-full max-w-6xl flex flex-col gap-5 mt-10">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                isVisible={visibleIndexes.has(index)}
                onView={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
