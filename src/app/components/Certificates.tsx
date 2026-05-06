'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

const certificates = [
  {
    title: 'Video Conferencing with Teams',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cert2.png',
  },
  {
    title: 'Keeping Yourself Safe Online',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cer1.png',
  },
]

export default function Certificates() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeInUp}
        >
          My Certificates
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={250}
                className="w-full h-48 object-contain bg-white"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}