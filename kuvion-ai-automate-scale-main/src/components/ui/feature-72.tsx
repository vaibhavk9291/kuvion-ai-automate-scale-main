"use client";

import type React from "react";
import { Warp } from "@paper-design/shaders-react";

export interface Feature {
  id: string;
  title: string;
  category?: string;
  points?: string[];
  icon?: React.ReactNode;
}

interface Feature72Props {
  heading?: string;
  taglineBadge?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature72 = ({
  heading = "Our Services",
  taglineBadge = "Services",
  description = "Comprehensive digital marketing and growth solutions tailored to scale your brand.",
  features = [],
}: Feature72Props) => {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(0, 0%, 5%)", "hsl(0, 0%, 85%)", "hsl(0, 0%, 20%)", "hsl(0, 0%, 95%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(0, 0%, 10%)", "hsl(0, 0%, 75%)", "hsl(0, 0%, 30%)", "hsl(0, 0%, 90%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(0, 0%, 0%)", "hsl(0, 0%, 80%)", "hsl(0, 0%, 15%)", "hsl(0, 0%, 100%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(0, 0%, 8%)", "hsl(0, 0%, 70%)", "hsl(0, 0%, 25%)", "hsl(0, 0%, 88%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(0, 0%, 3%)", "hsl(0, 0%, 90%)", "hsl(0, 0%, 18%)", "hsl(0, 0%, 82%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["hsl(0, 0%, 12%)", "hsl(0, 0%, 78%)", "hsl(0, 0%, 22%)", "hsl(0, 0%, 95%)"],
      },
    ];
    return configs[index % configs.length];
  };

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {taglineBadge && (
            <p className="text-sm font-medium tracking-widest text-[#6B7280] uppercase mb-4">
              {taglineBadge}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] dark:text-foreground tracking-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-[#6B7280] text-[17px] max-w-lg mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index);
            return (
              <div key={feature.id} className="relative min-h-[380px] h-full flex flex-col group">
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col justify-start bg-black/80 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-white/40 group-hover:scale-[1.02]">
                  {feature.category && (
                    <div className="mb-3">
                      <span className="text-[12px] font-medium text-blue-300 uppercase tracking-wider">
                        {feature.category}
                      </span>
                    </div>
                  )}

                  {feature.icon && (
                    <div className="mb-4 filter drop-shadow-lg text-white">
                      {feature.icon}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-5 text-white tracking-tight">
                    {feature.title}
                  </h3>

                  {feature.points && feature.points.length > 0 && (
                    <ul className="space-y-3 mt-auto">
                      {feature.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-[14px] md:text-[15px] text-gray-200 leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0 shadow-sm" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
