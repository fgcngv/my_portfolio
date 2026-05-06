// 'use client'

// import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { 
//   fadeInUp, 
//   fadeInDown, 
//   fadeIn, 
//   staggerContainer, 
//   cardHover, 
//   cardHoverSmall 
// } from '@/utils/animations'

// export default function About() {
//   return (
//     <div className="container max-w-7xl mx-auto py-12">
//       <motion.h1 
//         className="text-4xl font-bold mb-8 text-center"
//         {...fadeInDown}
//       >
//         About Me
//       </motion.h1>
      
//       {/* Bio Section */}
//       <motion.section 
//         className="mb-16"
//         {...fadeInUp}
//       >
//         <p className="text-lg dark:text-gray-200 max-w-3xl mx-auto text-center text-gray-600">
//           I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
//           With a strong foundation in both frontend and backend technologies, I create seamless
//           user experiences and robust server-side solutions.
//         </p>
//       </motion.section>

//       {/* Skills Section */}
//       <motion.section 
//         className="mb-16"
//         {...fadeIn}
//         transition={{ delay: 0.2 }}
//       >
//         <motion.h2 
//           className="section-title"
//           {...fadeInUp}
//         >
//           Skills
//         </motion.h2>
//         <motion.div 
//           className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div 
//             className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaCode className="h-8 w-8 text-blue-500 mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Frontend</h3>
//             <ul className="text-gray-500 space-y-2">
//               <li>React / Next.js</li>
//               <li>TypeScript</li>
//               <li>Tailwind CSS</li>
//               <li>HTML5 / CSS3</li>
//             </ul>
//           </motion.div>
          
//           <motion.div 
//             className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Backend</h3>
//             <ul className="text-gray-400 space-y-2">
//               <li>Node.js</li>
//               <li>Nextjs</li>
//               <li>PostgreSQL</li>
//               <li>Prisma</li>
//               <li>PHP</li>
//             </ul>
//           </motion.div>
          
//           <motion.div 
//             className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
//             <ul className="text-gray-400 space-y-2">
//               <li>Git / GitHub</li>
//               {/* <li>Docker</li>
//               <li>AWS</li>
//               <li>CI/CD</li> */}
//             </ul>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Experience Section */}
//       <motion.section 
//         className="mb-16"
//         {...fadeIn}
//         transition={{ delay: 0.4 }}
//       >
//         <motion.h2 
//           className="section-title"
//           {...fadeInUp}
//         >
//           Experience
//         </motion.h2>
//         <motion.div 
//           className="max-w-3xl mx-auto space-y-8"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div 
//             className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHoverSmall}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-center">
//             I developed a full Stack Mobile Responsive Website for <a href="#" className='text-blue-500 hover:underline'>Yakeba Midium Clink</a> which located in Sululta city
//             </h3>
//             <a href="#" className='hover:underline '>
//             <p className="text-blue-500 mb-2">Website Link</p>
//             </a>
//             <ul className="text-gray-400 list-disc list-inside space-y-2">
//               <li> Patient/doctor authentication</li>
//               <li>Ptient Registration</li>
//               <li>Patient Reivew</li>
//               <li>Admin Dashboard</li>
//               <li>Doctor Dashboard</li>
//               <li>Patient Dashboard</li>
//             </ul>
//           </motion.div>
          

//         </motion.div>
//       </motion.section>

//       {/* Education Section */}
//       <motion.section
//         {...fadeIn}
//         transition={{ delay: 0.6 }}
//       >
//         <motion.h2 
//           className="section-title"
//           {...fadeInUp}
//         >
//           Education
//         </motion.h2>
//         <motion.div 
//           className="max-w-3xl mx-auto"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div 
//             className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
//             variants={fadeInUp}
//             {...cardHoverSmall}
//           >
//             <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
//             <p className="text-primary mb-2">Bahirdar University • Expected Graduation : 2025/26</p>
//             <p className="text-secondary">
//               Mainly Focused on software engineering and web development.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </div>
//   )
// } 




'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg dark:text-gray-200 max-w-3xl mx-auto text-center text-gray-600">
          I’m a Full Stack Developer based in Ethiopia, passionate about building modern, responsive, and user-friendly web applications. 
          I specialize in both frontend and backend development, creating seamless user experiences backed by efficient and scalable systems. 
          I enjoy solving real-world problems through clean, maintainable code and continuously improving my skills.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>

        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-gray-500 space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          {/* Backend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-gray-500 space-y-2">
              <li>Node.js</li>
              <li>Next.js (API Routes)</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>PHP</li>
            </ul>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
            <ul className="text-gray-500 space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Postman</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16 flex flex-col gap-8 border-y p-2 border-gray-200 dark:border-gray-700 pt-8"  
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2 text-center">
              Developed a Full-Stack, Mobile-Responsive Website for 
              <span className="text-blue-500"> Yakeba Medium Clinic</span>
            </h3>

            <p className="text-center text-gray-500 mb-2">
              Sululta, Ethiopia
            </p>

            <a 
              href="https://yakeba-midium-clinick.vercel.app/" 
              target="_blank"
              className="hover:underline text-blue-500 text-center block mb-4"
            >
              View Website
            </a>

            <ul className="text-gray-500 list-disc list-inside space-y-2">
              <li>Implemented secure patient and doctor authentication</li>
              <li>Developed patient registration and management system</li>
              <li>Built a patient review and feedback feature</li>
              <li>Created admin dashboard for system control</li>
              <li>Designed dedicated dashboards for doctors and patients</li>
            </ul>
          </motion.div>
        </motion.div>
     
        <motion.div 
    className="max-w-3xl mx-auto bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.02 }}
  >
    <h3 className="text-xl font-semibold mb-2">
      Final Year Project: Ethiopian Green Coffee E-Commerce Platform
    </h3>

    <p className="text-gray-600 dark:text-gray-300 mb-4">
      A full-stack e-commerce platform designed to connect Ethiopian green coffee producers directly with buyers. 
      The system enables product listing, secure ordering, and streamlined communication between sellers and customers.
    </p>

    <ul className="text-gray-500 list-disc list-inside space-y-2">
      <li>User authentication (buyers and sellers)</li>
      <li>Product listing and management system</li>
      <li>Shopping cart and order processing</li>
      <li>Admin dashboard for platform management</li>
      <li>Responsive design for mobile and desktop users</li>
    </ul>
  </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>

            <p className="text-blue-500 mb-2">
  Bahir Dar University • Expected Graduation: 2026
</p>

<p className="text-gray-500">
  GPA: 3.6 / 4.0 • Focused on Software Engineering and Web Development
</p>
          </motion.div>
        </motion.div>
      </motion.section>

    </div>
  )
}