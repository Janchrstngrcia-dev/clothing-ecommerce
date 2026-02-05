"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function PhilippineHeritage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Smooth parallax for the different image layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section ref={sectionRef} className="relative bg-[#F9F8F6] py-24 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Image Collage */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px]">
            {/* Primary Image: The Mood */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute left-0 top-0 w-3/4 h-[80%] rounded-sm overflow-hidden shadow-xl"
            >
              <Image
                src="/jorts.jpg" 
                alt="Filipino craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 40vw"
              />
            </motion.div>

            {/* Secondary Image: The Detail (Overlapping) */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute right-0 bottom-10 w-1/2 h-[60%] border-[12px] border-[#F9F8F6] rounded-sm overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/girls-outfit.jpg" 
                alt="S/S 2026 Fabric Texture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 25vw"
              />
            </motion.div>

            {/* Decorative Element: Tropical Shadow Overlay (Optional SVG) */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#2D4031" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.7,41.2C64.2,53.4,52.8,63.3,39.7,70.8C26.5,78.2,13.3,83.2,-0.5,84C-14.2,84.8,-28.4,81.4,-41,73.8C-53.5,66.1,-64.4,54.1,-72.1,40.5C-79.8,26.9,-84.3,11.7,-83.4,-3.2C-82.5,-18.2,-76.2,-33,-66.6,-45.3C-57,-57.6,-44.1,-67.4,-30.5,-74.8C-16.9,-82.2,-8.5,-87.3,4.4,-94.9C17.3,-102.5,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>

          {/* RIGHT SIDE: Narrative */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-orange-800/60 font-medium tracking-[0.3em] uppercase text-xs mb-4">
                S/S 2026 Collection
              </h3>
              <h2 className="font-serif text-4xl lg:text-6xl text-stone-900 mb-8 leading-tight">
                Tropical Soul, <br />
                <span className="italic">Modern Ease</span>
              </h2>
              
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Born in the heart of the Philippines, our 2026 collection celebrates the "Araw" (Sun). We’ve blended ancestral weaving techniques from Bicol with breathable, sustainable linens designed for the humid summers of the archipelago.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-[1px] bg-orange-800/40 mt-3" />
                  <div>
                    <h4 className="font-medium text-stone-900 uppercase tracking-tighter text-sm">Ethically Hand-Woven</h4>
                    <p className="text-stone-500 text-sm">Supporting local weaving communities in 7 provinces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-[1px] bg-orange-800/40 mt-3" />
                  <div>
                    <h4 className="font-medium text-stone-900 uppercase tracking-tighter text-sm">Climate-Adaptive</h4>
                    <p className="text-stone-500 text-sm">Engineered for 30°C+ breathability using natural plant fibers.</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ gap: "20px" }}
                className="mt-12 flex items-center gap-4 text-stone-900 font-semibold tracking-widest uppercase text-xs group"
              >
                Explore the Workshop
                <span className="h-[1px] w-12 bg-stone-900 transition-all group-hover:w-20" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}