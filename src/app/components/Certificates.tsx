// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { fadeInUp } from '@/utils/animations'

// const certificates = [
//   {
//     title: 'Video Conferencing with Teams',
//     issuer: 'Ministry of Education of Ethiopia',
//     image: '/certificates/cert2.png',
//   },
//   {
//     title: 'Set Goals to Manage Your Time',
//     issuer: 'Ministry of Education of Ethiopia',
//     image: '/certificates/cert5.png',
//   }, 
//   {
//     title: 'Keeping Yourself Safe Online',
//     issuer: 'Ministry of Education of Ethiopia',
//     image: '/certificates/cer1.png',
//   },
//   {
//     title: 'How to Evaluate Resources',
//     issuer: 'Ministry of Education of Ethiopia',
//     image: '/certificates/cert3.png',
//   },

//   {
//     title: 'Academic Integrity',
//     issuer: 'Ministry of Education of Ethiopia',
//     image: '/certificates/cert4.png',
//   },  
// ]

// export default function Certificates() {
//   return (
//     <section className="py-20">
//       <div className="container max-w-7xl mx-auto px-4">
        
//         {/* Title */}
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//           {...fadeInUp}
//         >
//           My Certificates
//         </motion.h2>

//         {/* Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
//               {...fadeInUp}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={cert.image}
//                 alt={cert.title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-contain bg-white"
//               />

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2">
//                   {cert.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   {cert.issuer}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }






'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

const certificates = [
  {
    title: 'Video Conferencing with Teams',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cert2.png',
  },
  {
    title: 'Set Goals to Manage Your Time',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cert5.png',
  },
  {
    title: 'Keeping Yourself Safe Online',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cer1.png',
  },
  {
    title: 'How to Evaluate Resources',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cert3.png',
  },
  {
    title: 'Academic Integrity',
    issuer: 'Ministry of Education of Ethiopia',
    image: '/certificates/cert4.png',
  },
]

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          {...fadeInUp}
        >
          My Certificates
        </motion.h2>
        <h2 className='p-3 text-center'><i>Click on the Certificates to see full Certificate image!</i></h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="w-full h-56 flex items-center justify-center bg-white">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="max-h-full object-contain"
                />
              </div>

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

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Certificate Preview"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}