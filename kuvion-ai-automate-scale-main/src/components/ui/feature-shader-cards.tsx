"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"

interface Feature {
  title: string
  description: string
  category: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "E-Commerce Growth Campaign",
    category: "AI Marketing",
    description:
      "Data-driven AI marketing campaign that boosted conversions by 340% and reduced cost per acquisition by 60%.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
  },
  {
    title: "UGC Ad Series — Fashion Brand",
    category: "AI UGC Ads",
    description:
      "AI-generated UGC-style ad creatives that achieved 7.2x ROAS across Meta and TikTok platforms.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    ),
  },
  {
    title: "SaaS Landing Page Redesign",
    category: "Website Development",
    description:
      "High-converting landing page with 2.8x improvement in demo signups through strategic UX and copywriting.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
  },
  {
    title: "Instagram Growth Engine",
    category: "Social Media",
    description:
      "Organic growth system that scaled a brand from 2K to 50K engaged followers in under 6 months.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "AI Ad Campaign — EdTech",
    category: "AI Marketing",
    description:
      "AI-optimized ad campaign for an EdTech startup that generated 1,200+ qualified leads at ₹45/lead.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Brand Identity & Website",
    category: "Website Development",
    description:
      "Complete brand identity and website build that positioned a startup as a premium player in their market.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
]

export default function FeaturesCards() {
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
    ]
    return configs[index % configs.length]
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const shaderConfig = getShaderConfig(index)
        return (
          <div key={index} className="relative h-80">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
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

            <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20">
              <div className="mb-2">
                <span className="text-[12px] font-medium text-blue-300 uppercase tracking-wider">
                  {feature.category}
                </span>
              </div>
              <div className="mb-4 filter drop-shadow-lg">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="leading-relaxed flex-grow text-gray-200 text-sm font-medium">{feature.description}</p>
              <div className="mt-4 flex items-center text-sm font-bold text-gray-300 hover:text-white transition-colors cursor-pointer">
                <span className="mr-2">View case study</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
