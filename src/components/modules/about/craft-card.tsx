import { TechStackData } from '../../../data/data';
import Marquee from 'react-fast-marquee';

export const CraftCard = () => {
  const primaryTechStack = TechStackData.filter((t) => t.variant === 'primary');

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-primary mb-1">Craft</h3>
        <div className="w-8 h-0.5 bg-white/20 rounded" />
      </div>
      <p className="text-sm text-secondary leading-relaxed">
        Building scalable{' '}
        <span className="font-semibold text-primary">apps, websites, and automations.</span>
      </p>
      <p className="text-sm text-secondary leading-relaxed">
        I understand what advantages modern tech can provide — helping advise on solutions a
        business actually needs.
      </p>
      <div className="mt-auto pt-4 sm:pt-0">
        <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-3">
          Primary Tech Stack
        </p>
        <Marquee speed={25} gradient={false} pauseOnHover direction="right">
          {primaryTechStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 mx-5">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] text-muted whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] text-emerald-400/80 tracking-wider">
          Open to collaborations and new opportunities
        </span>
      </div>
    </>
  );
};