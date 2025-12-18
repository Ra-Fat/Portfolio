import { technologies } from '../constants';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-0 xl:px-10">
      
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl">TechStacks</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left max-w-3xl">
          Technical expertise and proficiency across different domains of software development
        </span>
      </div>

      <div className="w-full max-w-5xl mt-10 grid gap-4 
             grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              rounded-xl relative overflow-hidden transition-all duration-300">

        <div className="pointer-events-none absolute w-40 h-40 rounded-full z-10 transition-opacity duration-300" />

        {technologies.map(({ name, icon, tag }) => (
          <div
            key={name}
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex justify-start  transition-transform transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 duration-200 items-center gap-4 border border-gray-800/50 p-2 rounded-lg"
          >
            <img
              className="w-13 h-13 bg-gray-800/40 p-2 rounded-md"
              src={icon}
              alt={name}
            />
            <div className="flex flex-col items-start gap-1">
              <h4 className="text-xs font-bold text-white">{name}</h4>
              <span className="text-gray-400 text-[11px] font-bold">{tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

