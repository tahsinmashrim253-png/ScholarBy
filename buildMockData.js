const fs = require('fs');

const currentStudent = {
  id: 'sp_101',
  userId: 'user_alex',
  user: {
    id: 'user_alex',
    name: 'Alex Chen',
    email: 'alex.chen@scholarby.edu',
    role: 'STUDENT',
    country: 'United States',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    headline: 'AI & Robotics Researcher | Aspiring CS Undergraduate',
    bio: 'Passionate high school senior researching Graph Neural Networks & Autonomous Swarms. Medalist at USACO and IEEE High School Research Fellow.',
    isVerified: true,
  },
  school: 'Stuyvesant High School, NYC',
  educationLevel: 'High School Senior / Incoming Undergrad',
  major: 'Computer Science',
  minor: 'Applied Mathematics',
  gpa: 3.96,
  gradYear: 2026,
  targetCountries: ['United States', 'Singapore', 'Switzerland', 'United Kingdom', 'Japan'],
  interests: ['Machine Learning', 'Computer Vision', 'Robotics', 'Algorithms', 'Competitive Programming', 'Hackathons', 'Datathons'],
  testScores: [
    { id: 'ts_1', testType: 'SAT', totalScore: '1560', breakdown: 'Math: 800 | Reading & Writing: 760', testDate: '2025-10-12' },
    { id: 'ts_2', testType: 'IELTS', totalScore: '8.5', breakdown: 'Listening: 9.0 | Reading: 9.0 | Writing: 8.0 | Speaking: 8.0', testDate: '2025-08-20' },
    { id: 'ts_3', testType: 'AP', totalScore: '5/5 (5 Exams)', breakdown: 'AP CS A (5), AP Calc BC (5), AP Physics C (5), AP Chem (5), AP Stats (5)', testDate: '2025-05-15' },
  ],
  achievements: [
    { id: 'ach_1', title: 'USA Computing Olympiad (USACO) Gold Division Medalist', issuer: 'USACO Organization', category: 'Olympiad', isVerified: true, verifiedBy: 'USACO Official Registry' },
    { id: 'ach_2', title: 'International Science & Engineering Fair (ISEF) 2nd Place Grand Award', issuer: 'Society for Science', category: 'Award', isVerified: true, verifiedBy: 'Society for Science Verification' },
    { id: 'ach_3', title: 'Stanford TreeHacks 2026 Best AI Swarm Hackathon Trophy', issuer: 'Stanford TreeHacks', category: 'Hackathon', isVerified: true, verifiedBy: 'Stanford Major League Hacking' },
  ],
  projects: [
    { id: 'proj_1', title: 'NeuroSwarm: Decentralized Vision-Guided Drones', description: 'Engineered an edge-AI flocking algorithm running on Raspberry Pi CM4s, achieving 60fps obstacle avoidance without centralized GPS.', role: 'Lead Architect & Developer', technologies: 'Python, PyTorch, ROS2, C++', githubUrl: 'https://github.com/alexchen/neuroswarm', projectUrl: 'https://neuroswarm-demo.dev' },
    { id: 'proj_2', title: 'ScholarBy Vector Match Engine', description: 'Built a vector semantic similarity engine linking high school research papers to university lab publications.', role: 'Creator & Maintainer', technologies: 'Next.js, TypeScript, TailwindCSS', githubUrl: 'https://github.com/alexchen/scholarby-match' },
  ],
  publications: [
    { id: 'pub_1', title: 'Decentralized Edge Flocking via Graph Attention Networks on Low-Power Micro-UAVs', journal: 'IEEE High School Research Journal & ArXiv Preprint', doi: '10.1109/HSRJ.2025.10928374', pubDate: '2025-11-04' },
  ],
};

const universities = [
  { id: 'uni_1', name: 'Massachusetts Institute of Technology (MIT)', country: 'United States', city: 'Cambridge, MA', ranking: 1, tuitionFee: '$60,156 / yr', acceptanceRate: 3.9, description: 'World premier STEM & Research institution focused on computer science, AI, engineering, and physical sciences.', logoUrl: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&auto=format&fit=crop&q=80', website: 'https://mit.edu', programs: [{ id: 'prog_1', name: 'Computer Science & Engineering (EECS)', degree: 'B.S. / M.Eng', department: 'School of Engineering', deadline: 'Nov 01, 2026', tuitionPerYear: '$60,156', requirements: ['SAT 1540+', 'TOEFL 100+', 'AP Calculus BC', '3 Recommendation Letters'] }, { id: 'prog_2', name: 'Artificial Intelligence & Decision Making', degree: 'B.S. / Ph.D.', department: 'Schwarzman College of Computing', deadline: 'Dec 15, 2026', tuitionPerYear: '$60,156', requirements: ['GRE Quantitative 168+', 'Research Publication / Olympiad'] }] },
  { id: 'uni_2', name: 'Stanford University', country: 'United States', city: 'Stanford, CA', ranking: 2, tuitionFee: '$62,484 / yr', acceptanceRate: 3.68, description: 'Leading private research university in Silicon Valley renowned for entrepreneurship, AI, physics, and bio-engineering.', logoUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&auto=format&fit=crop&q=80', website: 'https://stanford.edu', programs: [{ id: 'prog_3', name: 'Computer Science & AI Track', degree: 'B.S. / M.S.', department: 'School of Engineering', deadline: 'Jan 05, 2027', tuitionPerYear: '$62,484', requirements: ['SAT 1520+', 'IELTS 8.0+', 'Coding Portfolio'] }] },
  { id: 'uni_3', name: 'Harvard University', country: 'United States', city: 'Cambridge, MA', ranking: 3, tuitionFee: '$59,076 / yr', acceptanceRate: 3.41, description: 'Ivy League institution dedicated to academic excellence, law, medicine, economics, and interdisciplinary computational research.', logoUrl: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&auto=format&fit=crop&q=80', website: 'https://harvard.edu', programs: [{ id: 'prog_4', name: 'Applied Mathematics & BioStatistics', degree: 'A.B. / Ph.D.', department: 'SEAS', deadline: 'Jan 01, 2027', tuitionPerYear: '$59,076', requirements: ['SAT 1550+', 'ISEF / Olympiad Distinction'] }] },
  { id: 'uni_4', name: 'University of Oxford', country: 'United Kingdom', city: 'Oxford', ranking: 4, tuitionFee: '£38,550 / yr', acceptanceRate: 14.2, description: 'The oldest university in the English-speaking world, world-leading in humanities, medicine, physics, and mathematics.', logoUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&auto=format&fit=crop&q=80', website: 'https://ox.ac.uk', programs: [{ id: 'prog_5', name: 'Mathematics & Computer Science', degree: 'MMathCompSci', department: 'Department of Computer Science', deadline: 'Oct 15, 2026', tuitionPerYear: '£38,550', requirements: ['MAT Exam Score 80+', 'A*A*A in A-Levels'] }] },
  { id: 'uni_5', name: 'University of Cambridge', country: 'United Kingdom', city: 'Cambridge', ranking: 5, tuitionFee: '£39,150 / yr', acceptanceRate: 15.8, description: 'Collegiate public research university renowned for Isaac Newton, Stephen Hawking, computer laboratory, and biotechnology.', logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&auto=format&fit=crop&q=80', website: 'https://cam.ac.uk', programs: [{ id: 'prog_6', name: 'Tripos Computer Science', degree: 'BA (Hons) / MEng', department: 'Computer Laboratory', deadline: 'Oct 15, 2026', tuitionPerYear: '£39,150', requirements: ['TMUA Exam Score 7.5+', 'STEP Math'] }] },
  { id: 'uni_6', name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', ranking: 6, tuitionFee: 'CHF 1,460 / yr', acceptanceRate: 27.0, description: 'Top European STEM university, alma mater of Albert Einstein, specializing in robotics, quantum engineering, and architecture.', logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=300&auto=format&fit=crop&q=80', website: 'https://ethz.ch', programs: [{ id: 'prog_7', name: 'Robotics, Systems & Control', degree: 'M.Sc.', department: 'D-MAVT', deadline: 'Dec 15, 2026', tuitionPerYear: 'CHF 1,460', requirements: ['B.S. in Engineering / CS', 'IELTS 7.5+'] }] },
  { id: 'uni_7', name: 'National University of Singapore (NUS)', country: 'Singapore', city: 'Singapore', ranking: 8, tuitionFee: 'SGD $38,200 / yr', acceptanceRate: 5.0, description: 'Asia flagship university excelling in AI, fintech, biomedical engineering, and global logistics.', logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&auto=format&fit=crop&q=80', website: 'https://nus.edu.sg', programs: [{ id: 'prog_8', name: 'Data Science & Analytics', degree: 'B.Sc. (Hons)', department: 'School of Computing', deadline: 'Feb 28, 2027', tuitionPerYear: 'SGD $38,200', requirements: ['SAT 1500+', 'AP Calculus'] }] },
  { id: 'uni_8', name: 'University of Tokyo (UTokyo)', country: 'Japan', city: 'Tokyo', ranking: 11, tuitionFee: '¥535,800 / yr', acceptanceRate: 10.5, description: 'Japan premier university leading global research in robotics, materials science, quantum computing, and astronomy.', logoUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=300&auto=format&fit=crop&q=80', website: 'https://u-tokyo.ac.jp', programs: [{ id: 'prog_9', name: 'PEAK Environmental & Global Sciences', degree: 'B.S.', department: 'College of Arts & Sciences', deadline: 'Jan 10, 2027', tuitionPerYear: '¥535,800', requirements: ['SAT 1480+', 'TOEFL 100+'] }] },
  { id: 'uni_9', name: 'University of Toronto', country: 'Canada', city: 'Toronto', ranking: 18, tuitionFee: 'CAD $60,510 / yr', acceptanceRate: 43.0, description: 'Canada top research institution, birthplace of deep learning (Geoffrey Hinton), medicine, and global public policy.', logoUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&auto=format&fit=crop&q=80', website: 'https://utoronto.ca', programs: [{ id: 'prog_10', name: 'Computer Science Specialist', degree: 'B.Sc.', department: 'Faculty of Arts & Science', deadline: 'Jan 15, 2027', tuitionPerYear: 'CAD $60,510', requirements: ['GPA 3.9+', 'Supplemental Essay'] }] },
  { id: 'uni_10', name: 'UC Berkeley', country: 'United States', city: 'Berkeley, CA', ranking: 10, tuitionFee: '$44,008 / yr', acceptanceRate: 11.4, description: 'Premier public university famous for open-source computer science, Silicon Valley tech innovation, and Nobel laureates.', logoUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&auto=format&fit=crop&q=80', website: 'https://berkeley.edu', programs: [{ id: 'prog_11', name: 'EECS (Electrical Engineering & CS)', degree: 'B.S.', department: 'College of Engineering', deadline: 'Nov 30, 2026', tuitionPerYear: '$44,008', requirements: ['GPA 4.0', 'Extracurricular Leadership'] }] },
  { id: 'uni_11', name: 'Imperial College London', country: 'United Kingdom', city: 'London', ranking: 6, tuitionFee: '£37,900 / yr', acceptanceRate: 18.0, description: 'STEM-focused global university excelling in artificial intelligence, aeronautics, medicine, and business tech.', logoUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&auto=format&fit=crop&q=80', website: 'https://imperial.ac.uk', programs: [{ id: 'prog_12', name: 'Computing (Artificial Intelligence)', degree: 'MEng', department: 'Department of Computing', deadline: 'Jan 15, 2027', tuitionPerYear: '£37,900', requirements: ['A*A*A in Math/Further Math'] }] },
  { id: 'uni_12', name: 'KAIST (Korea Advanced Inst. of Science & Tech)', country: 'South Korea', city: 'Daejeon', ranking: 19, tuitionFee: 'KRW 6,800,000 / yr', acceptanceRate: 15.0, description: 'South Korea flagship innovation university with 100% English medium instruction, robotics, and semiconductor engineering.', logoUrl: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=300&auto=format&fit=crop&q=80', website: 'https://kaist.ac.kr', programs: [{ id: 'prog_13', name: 'School of Computing', degree: 'B.S.', department: 'College of Engineering', deadline: 'Jan 08, 2027', tuitionPerYear: 'KRW 6,800,000', requirements: ['Full Scholarship Available', 'IELTS 7.0+'] }] },
  { id: 'uni_13', name: 'University of Melbourne', country: 'Australia', city: 'Melbourne', ranking: 14, tuitionFee: 'AUD $48,000 / yr', acceptanceRate: 70.0, description: 'Australia premier university with world-class medical science, environmental systems, and international business school.', logoUrl: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=300&auto=format&fit=crop&q=80', website: 'https://unimelb.edu.au', programs: [{ id: 'prog_14', name: 'Bachelor of Science (Data Science)', degree: 'B.Sc.', department: 'Faculty of Science', deadline: 'Nov 30, 2026', tuitionPerYear: 'AUD $48,000', requirements: ['ATAR 95+', 'IELTS 7.0+'] }] },
  { id: 'uni_14', name: 'Tsinghua University', country: 'China', city: 'Beijing', ranking: 12, tuitionFee: 'RMB 30,000 / yr', acceptanceRate: 2.0, description: 'China top engineering & computer science university, world-renowned for Yaoclass CS program and quantum information.', logoUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?w=300&auto=format&fit=crop&q=80', website: 'https://tsinghua.edu.cn', programs: [{ id: 'prog_15', name: 'Global Computer Science (Yao Class)', degree: 'B.S.', department: 'Institute for Interdisciplinary Information Sciences', deadline: 'Dec 30, 2026', tuitionPerYear: 'RMB 30,000', requirements: ['IOI Medalist / HSK 6'] }] },
  { id: 'uni_15', name: 'Yale University', country: 'United States', city: 'New Haven, CT', ranking: 9, tuitionFee: '$64,700 / yr', acceptanceRate: 4.4, description: 'Ivy League university renowned for humanities, political science, cognitive science, and interdisciplinary research.', logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&auto=format&fit=crop&q=80', website: 'https://yale.edu', programs: [{ id: 'prog_16', name: 'Cognitive Science & AI', degree: 'B.S.', department: 'Yale College', deadline: 'Jan 02, 2027', tuitionPerYear: '$64,700', requirements: ['SAT 1530+', 'Research Essay'] }] },
  { id: 'uni_16', name: 'Columbia University', country: 'United States', city: 'New York, NY', ranking: 13, tuitionFee: '$65,524 / yr', acceptanceRate: 3.9, description: 'Ivy League in New York City specializing in financial engineering, journalism, neuroscience, and data science.', logoUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&auto=format&fit=crop&q=80', website: 'https://columbia.edu', programs: [{ id: 'prog_17', name: 'Financial Engineering & Operations', degree: 'B.S. / M.S.', department: 'Columbia Engineering', deadline: 'Jan 01, 2027', tuitionPerYear: '$65,524', requirements: ['SAT 1540+', 'AP Calculus BC'] }] },
  { id: 'uni_17', name: 'Princeton University', country: 'United States', city: 'Princeton, NJ', ranking: 7, tuitionFee: '$59,710 / yr', acceptanceRate: 4.0, description: 'Prestigious research institution famed for theoretical physics, mathematics, operations research, and senior thesis.', logoUrl: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&auto=format&fit=crop&q=80', website: 'https://princeton.edu', programs: [{ id: 'prog_18', name: 'Operations Research & Financial Eng', degree: 'B.S.E.', department: 'ORFE Dept', deadline: 'Jan 01, 2027', tuitionPerYear: '$59,710', requirements: ['SAT 1560+', 'Math Competitions'] }] },
  { id: 'uni_18', name: 'University of California, Los Angeles (UCLA)', country: 'United States', city: 'Los Angeles, CA', ranking: 15, tuitionFee: '$44,830 / yr', acceptanceRate: 8.8, description: 'Top public university in Southern California excelling in computer science, film, bioengineering, and medicine.', logoUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&auto=format&fit=crop&q=80', website: 'https://ucla.edu', programs: [{ id: 'prog_19', name: 'Bioengineering & Computer Medicine', degree: 'B.S.', department: 'Samueli School of Engineering', deadline: 'Nov 30, 2026', tuitionPerYear: '$44,830', requirements: ['GPA 4.0', 'BioResearch Project'] }] },
  { id: 'uni_19', name: 'Peking University', country: 'China', city: 'Beijing', ranking: 16, tuitionFee: 'RMB 32,000 / yr', acceptanceRate: 1.8, description: 'China top comprehensive university renowned for mathematics, chemistry, physics, and humanities.', logoUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?w=300&auto=format&fit=crop&q=80', website: 'https://pku.edu.cn', programs: [{ id: 'prog_20', name: 'School of Mathematical Sciences', degree: 'B.S.', department: 'SMS Peking', deadline: 'Dec 15, 2026', tuitionPerYear: 'RMB 32,000', requirements: ['CMO Gold Medal / International Applicant'] }] },
  { id: 'uni_20', name: 'University of Sydney', country: 'Australia', city: 'Sydney', ranking: 19, tuitionFee: 'AUD $46,500 / yr', acceptanceRate: 65.0, description: 'Australia oldest university, leading global research in health sciences, law, and renewable energy technology.', logoUrl: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=300&auto=format&fit=crop&q=80', website: 'https://sydney.edu.au', programs: [{ id: 'prog_21', name: 'Software Engineering (Honours)', degree: 'B.E.', department: 'School of CS', deadline: 'Nov 15, 2026', tuitionPerYear: 'AUD $46,500', requirements: ['ATAR 92+', 'IELTS 7.0'] }] }
];

const profNames = [
  ['Dr. Jane Smith', 'MIT', 'EECS & CSAIL', 'Autonomous Robotics & Graph Neural Nets', 'Jane Smith Autonomous Systems Lab'],
  ['Prof. David Chen', 'Stanford', 'Computer Science', 'Quantum Computing & Algorithms', 'Stanford Quantum Information Group'],
  ['Dr. Sarah Wilson', 'Harvard', 'Bioinformatics', 'Computational Genomics & CRISPR AI', 'Harvard Genomic Intelligence Lab'],
  ['Prof. Michael Vance', 'ETH Zurich', 'Robotics & Control', 'Legged Robot Control & Deep RL', 'ETH Robotic Systems Lab'],
  ['Dr. Akira Tanaka', 'UTokyo', 'Information Science', 'Neuromorphic Hardware & Edge AI', 'UTokyo Brain-Inspired Computing Lab'],
  ['Prof. Elena Rostova', 'Oxford', 'Mathematics', 'Topological Data Analysis & Algebraic Geometry', 'Oxford Centre for Mathematical Modeling'],
  ['Dr. Marcus Thorne', 'Cambridge', 'Computer Lab', 'Privacy-Preserving Federated Learning', 'Cambridge Secure Systems Group'],
  ['Prof. Wei Zhang', 'NUS', 'School of Computing', 'AI for Molecular Discovery & Drug Design', 'NUS AI in Medicine Lab'],
  ['Dr. Priya Sharma', 'Imperial', 'Bioengineering', 'Neural Prosthetics & BCI Systems', 'Imperial BCI & Neurotech Lab'],
  ['Prof. Hans Müller', 'ETH Zurich', 'Mechanical Eng', 'Micro-Drones & Autonomous Swarms', 'ETH Autonomous Flight Lab'],
  ['Dr. Kevin Lin', 'UC Berkeley', 'BAIR / EECS', 'Multimodal LLMs & Embodied AI', 'Berkeley Artificial Intelligence Research'],
  ['Prof. Rachel Adams', 'U Toronto', 'Vector Institute', 'Deep Learning & Vision Transformers', 'Toronto Deep Learning Lab'],
  ['Dr. Min-Jae Park', 'KAIST', 'School of Computing', 'Semiconductor AI Accelerators & Memory', 'KAIST AI Hardware Architecture Lab'],
  ['Prof. Chloe Dubois', 'Yale', 'Cognitive Science', 'Human-Robot Interaction & Social AI', 'Yale Cognitive AI Lab'],
  ['Dr. Liam O\'Connor', 'U Melbourne', 'School of Science', 'Climate Modeling & Planetary AI', 'Melbourne Environmental Data Lab'],
  ['Prof. Andrew Ng-Style', 'Stanford', 'AI Lab', 'Machine Learning Systems & EdTech AI', 'Stanford AI Education Group'],
  ['Dr. Fatima Al-Hassan', 'Columbia', 'Financial Eng', 'High-Frequency Quantitative AI', 'Columbia Computational Finance Lab'],
  ['Prof. Robert Taylor', 'Princeton', 'ORFE Dept', 'Stochastic Optimization & Convex Analysis', 'Princeton Mathematical Optimization Lab'],
  ['Dr. Sakura Takahashi', 'UTokyo', 'Physics Dept', 'Subatomic Particle Simulation AI', 'UTokyo High-Energy Physics Group'],
  ['Prof. Jonathan Wang', 'Tsinghua', 'IIIS Yao Class', 'Theoretical CS & Cryptography', 'Tsinghua Quantum & Crypto Institute']
];

const professors = profNames.map((p, idx) => ({
  id: `prof_${idx + 1}`,
  name: p[0],
  title: 'Full Professor & Lab Director',
  university: p[1],
  department: p[2],
  avatarUrl: `https://images.unsplash.com/photo-${1534528741775 + idx * 1000}?w=400&auto=format&fit=crop&q=80`,
  researchFocus: [p[3].split(' & ')[0], p[3].split(' & ')[1] || 'Artificial Intelligence', 'Data Science'],
  publicationsCount: 45 + idx * 8,
  activeOpeningsCount: (idx % 3) + 1,
  bio: `Leading researcher in ${p[3]} at ${p[1]} ${p[2]}. Currently accepting passionate undergraduate & high school Research Assistants (RAs).`,
  isVerified: true,
  contactEmail: `${p[0].toLowerCase().replace(/[^a-z]/g, '')}@scholarby.edu`,
  labName: p[4],
  recentPaper: {
    title: `Next-Generation ${p[3]}: Scalable Architectures & Empirical Benchmarks`,
    journal: `Journal of ${p[2]} & IEEE Transactions`,
    doi: `10.1109/SCHOLARBY.2026.${1000 + idx}`
  }
}));

const tutorNames = [
  ['Dr. Elizabeth Vance', 'MIT PhD Alum', ['SAT Math', 'AP Calculus BC', 'Competitive Math'], '$60/hr', 4.98],
  ['James Robinson', 'Stanford CS Senior', ['Python', 'C++ Algorithms', 'USACO Prep'], '$55/hr', 4.95],
  ['Sophie Laurent', 'Oxford Literature MA', ['IELTS', 'TOEFL', 'College Essay Writing'], '$50/hr', 4.92],
  ['Rohan Mehta', 'IIT Bombay & Harvard MS', ['JEE Physics', 'AP Physics C', 'Quantum Fundamentals'], '$50/hr', 4.96],
  ['Dr. Chen Wei', 'Tsinghua Math Postdoc', ['IMO Math', 'Putnam Prep', 'Advanced Algebra'], '$65/hr', 5.00],
  ['Emily Watson', 'Cambridge Tripos Honors', ['A-Level Chemistry', 'IB Chemistry HL'], '$48/hr', 4.90],
  ['Carlos Mendez', 'UC Berkeley EECS', ['Data Structures', 'Web Development', 'React/Next.js'], '$45/hr', 4.88],
  ['Amina Kaba', 'Yale Cognitive Science', ['AP Psychology', 'SAT Verbal', 'ACT Science'], '$42/hr', 4.91],
  ['David Park', 'KAIST CS Alum', ['Korean Language', 'Algorithm Complexity', 'Java'], '$40/hr', 4.85],
  ['Hiroshi Sato', 'UTokyo Engineering', ['Physics Olympiad', 'JLPT N1/N2 Prep'], '$45/hr', 4.93],
  ['Jessica Miller', 'Columbia Finance MA', ['GMAT Quant', 'GRE Math', 'Economics'], '$58/hr', 4.97],
  ['Nikhil Gupta', 'AI Researcher', ['Machine Learning', 'PyTorch', 'Kaggle Competition'], '$60/hr', 4.99],
  ['Claire Dubois', 'Sorbonne Graduate', ['French Language', 'DELF B2/C1', 'IB French'], '$38/hr', 4.87],
  ['Oliver Taylor', 'Imperial College London', ['A-Level Further Math', 'STEP Math Exam'], '$52/hr', 4.94],
  ['Ananya Roy', 'Medical Student at Johns Hopkins', ['MCAT Biology', 'AP Biology'], '$55/hr', 4.96],
  ['Siddharth Kumar', 'Olympiad Gold Winner', ['Physics Olympiad (IPhO)', 'USAPhO'], '$58/hr', 4.98],
  ['Hannah Schmidt', 'ETH Zurich MSc', ['German Language', 'Goethe C1', 'Matura Math'], '$42/hr', 4.89],
  ['Ben Affleck-Style', 'Hollywood Screenwriter Coach', ['Ivy League Essay Editing', 'Personal Statements'], '$70/hr', 4.99],
  ['Grace Hopper Jr.', 'Senior Software Engineer', ['System Design', 'LeetCode Hard Prep'], '$65/hr', 4.97],
  ['Lucas Silva', 'University of Toronto', ['SAT Digital Math', 'General Chemistry'], '$35/hr', 4.86]
];

const tutors = tutorNames.map((t, idx) => ({
  id: `tutor_${idx + 1}`,
  name: t[0],
  avatarUrl: `https://images.unsplash.com/photo-${1500000000000 + idx * 50000}?w=400&auto=format&fit=crop&q=80`,
  subjects: t[2],
  education: t[1],
  hourlyRate: t[3],
  rating: t[4],
  reviewsCount: 35 + idx * 7,
  bio: `Expert educator specializing in ${t[2].join(', ')}. Over 5+ years helping students achieve top scores and Ivy League admissions.`,
  isVerified: true,
  contactEmail: `${t[0].toLowerCase().replace(/[^a-z]/g, '')}@scholarby.edu`
}));

const consultantNames = [
  ['Victoria Sterling', ['Ivy League Admissions', 'US Top 20', 'Scholarship Strategy'], ['United States', 'Singapore'], '98.5%', 12, '$150/hr', 4.99],
  ['Dr. Arthur Pendelton', ['Oxbridge Admissions', 'UK UCAS', 'Imperial & LSE Specialist'], ['United Kingdom', 'Switzerland'], '96.2%', 15, '$160/hr', 4.97],
  ['Siddharth Kapoor', ['STEM & CS Graduate Admissions', 'MIT/Stanford Research Portfolio'], ['United States', 'Canada'], '97.8%', 10, '$140/hr', 4.96],
  ['Elena Rostova-Advisors', ['European Universities', 'ETH Zurich & EPFL', 'Tuition Free Unis'], ['Switzerland', 'Germany'], '95.0%', 8, '$120/hr', 4.92],
  ['Marcus Vance', ['Medical School (BS/MD)', 'Pre-Med Strategy', 'Research Publications'], ['United States'], '99.0%', 14, '$175/hr', 5.00],
  ['Mei-Ling Zhou', ['Asian Top Unis (NUS, NTU, Tsinghua, HKU)', 'Global Asian Fellowships'], ['Singapore', 'China', 'Japan'], '98.0%', 9, '$130/hr', 4.94],
  ['Jonathan Blair', ['MBA & M.Fin Admissions', 'Harvard Business School / Wharton Specialist'], ['United States', 'United Kingdom'], '97.5%', 11, '$180/hr', 4.98],
  ['Sarah Jenkins', ['Art, Architecture & Design Portfolios', 'RISD & Parsons'], ['United States', 'United Kingdom'], '94.5%', 7, '$110/hr', 4.89],
  ['David Goldstein', ['High School Extracurricular Building', 'ISEF & Olympiad Strategy'], ['United States', 'International'], '98.8%', 13, '$155/hr', 4.97],
  ['Priya Nair', ['Full Financial Aid & Need-Blind Ivy League Scholarships'], ['United States', 'Canada'], '99.2%', 10, '$125/hr', 4.96],
  ['Alexander Hamilton-Style', ['Law School (JD) & Pre-Law Track'], ['United States'], '96.8%', 12, '$165/hr', 4.95],
  ['Klaus Weber', ['German Engineering Universities (TU9 & DAAD Scholarships)'], ['Germany', 'Austria'], '96.0%', 9, '$115/hr', 4.91],
  ['Chloe Martin', ['Canadian Top Universities (U Toronto, UBC, Waterloo)'], ['Canada'], '97.0%', 8, '$120/hr', 4.93],
  ['Taro Yamada', ['MEXT Japan Government Full Ride Scholarships'], ['Japan'], '98.4%', 11, '$130/hr', 4.95],
  ['Harrison Ford-Advisor', ['Liberal Arts Colleges (Williams, Amherst, Swarthmore)'], ['United States'], '96.5%', 10, '$145/hr', 4.94],
  ['Anita Desai', ['Undergraduate Research & Patent Filing Strategy'], ['United States', 'Singapore'], '98.1%', 9, '$150/hr', 4.97],
  ['Gareth Evans', ['Australian Go8 Universities (Melbourne, Sydney, ANU)'], ['Australia'], '95.5%', 7, '$105/hr', 4.88],
  ['Maria Santos', ['Biological & Biomedical Sciences PhD Track'], ['United States', 'Switzerland'], '97.2%', 10, '$135/hr', 4.93],
  ['Kenji Tanaka', ['AI & Machine Learning Graduate School Placement'], ['United States', 'Japan'], '99.1%', 11, '$170/hr', 4.99],
  ['Rachel Green', ['Ivy League Essay Brainstorming & Editing Specialist'], ['United States'], '98.7%', 12, '$140/hr', 4.96]
];

const consultants = consultantNames.map((c, idx) => ({
  id: `consultant_${idx + 1}`,
  name: c[0],
  avatarUrl: `https://images.unsplash.com/photo-${1530000000000 + idx * 40000}?w=400&auto=format&fit=crop&q=80`,
  specialization: c[1],
  targetCountries: c[2],
  successRate: c[3],
  experienceYears: c[4],
  hourlyRate: c[5],
  rating: c[6],
  reviewsCount: 40 + idx * 6,
  bio: `Premier admissions strategist with ${c[4]} years of experience guiding international candidates to top target universities worldwide.`,
  isVerified: true,
  contactEmail: `${c[0].toLowerCase().replace(/[^a-z]/g, '')}@scholarby.edu`
}));

const postCategories = ['ADMISSION', 'RESEARCH', 'OLYMPIAD', 'PROJECT', 'OPPORTUNITY', 'TUTORING', 'HACKATHON', 'GENERAL'];
const postTopics = [
  'Accepted to MIT EECS Class of 2030! Here is my full SAT, GPA, USACO Gold, and ISEF research breakdown.',
  'Just published our ArXiv research paper on Graph Attention Networks for Autonomous UAV Swarms!',
  'USACO Gold Medalist walkthrough: How I solved Problem 3 using Disjoint Set Union & Segment Trees.',
  'Stanford TreeHacks 2026 1st Place Win! Built an AI vector search tool connecting high school research to lab publications.',
  'Announcing 5 open RA positions in Dr. Jane Smith Autonomous Systems Lab at MIT. Stipend $3,200/mo.',
  'International Mathematical Olympiad (IMO) 2026 Problem Selection & Gold Medal threshold analysis.',
  'Full Scholarship guide to ETH Zurich & EPFL: Tuition is only CHF 1,460/yr with generous Excellence Fellowships.',
  'How I scored 1580 on the Digital SAT (800 Math, 780 Reading) with 3 months of consistent module practice.',
  'Ivy League Essay Blueprint: Why writing about authentic failure beats bragging about resume bullet points.',
  'Google DeepMind High School AI Internship applications are officially OPEN for Summer 2026!'
];

const feedPosts = [];
for (let i = 1; i <= 100; i++) {
  const cat = postCategories[i % postCategories.length];
  const topic = postTopics[i % postTopics.length];
  const isVerified = i % 3 === 0;
  feedPosts.push({
    id: `post_${i}`,
    authorName: i % 2 === 0 ? `Student Scholar #${i}` : `Dr. Academic Author #${i}`,
    authorRole: i % 4 === 0 ? 'PROFESSOR' : i % 3 === 0 ? 'OLYMPIAD' : 'STUDENT',
    authorAvatar: `https://images.unsplash.com/photo-${1534528741775 + (i * 123) % 50000}?w=400&auto=format&fit=crop&q=80`,
    authorHeadline: i % 4 === 0 ? 'Professor & Lab Director at Top University' : 'USACO Gold | ISEF Winner | Incoming CS Student',
    isVerified,
    content: `${topic} (Post #${i} on ScholarBy Academic Feed)\n\nKey takeaway: Academic consistency, third-party verified credentials, and early professor outreach build a bulletproof ScholarBy Passport™ profile.`,
    postType: cat,
    tags: ['#ScholarBy', '#Admissions', '#Research', '#Olympiad', '#AI', '#Scholarship'],
    createdAt: `${(i % 12) + 1}h ago`,
    likesCount: 15 + (i * 7) % 300,
    commentsCount: 3 + (i * 3) % 45,
    isLiked: i % 5 === 0
  });
}

const opportunities = [
  { id: 'opp_1', creatorName: 'IMO Board', organization: 'International Mathematical Olympiad', title: '67th International Mathematical Olympiad (IMO 2026)', category: 'COMPETITION', location: 'International', isRemote: false, description: 'The pinnacle world mathematics competition for pre-university students.', eligibility: 'High School Medalists', deadline: 'May 15, 2026', applicationUrl: 'https://imo-official.org', tags: ['Math', 'Olympiad', 'World Championship'], isVerified: true, createdAt: '1d ago', prizePool: 'Gold, Silver & Bronze Medals' },
  { id: 'opp_2', creatorName: 'Dr. Jane Smith', organization: 'MIT EECS & CSAIL', title: 'Undergraduate & High School Research Assistant (RA) in Edge AI UAVs', category: 'RESEARCH', location: 'Cambridge, MA', isRemote: true, description: 'Work directly on Graph Attention Networks for autonomous drone swarms.', eligibility: 'USACO Gold / Strong Python & PyTorch', deadline: 'Nov 01, 2026', applicationUrl: 'https://mit.edu', tags: ['MIT', 'AI', 'Robotics', 'RA Position'], isVerified: true, createdAt: '2d ago', prizePool: '$3,200/mo Research Stipend' },
  { id: 'opp_3', creatorName: 'Kaggle & DeepMind', organization: 'Kaggle Grandmaster League', title: 'Global AI Bio-Genomics Datathon 2026', category: 'DATATHON', location: 'Global Online', isRemote: true, description: 'Predict protein folding stability and RNA gene expressions using LLMs.', eligibility: 'Open to All Students', deadline: 'Dec 10, 2026', applicationUrl: 'https://kaggle.com', tags: ['Datathon', 'Bio-AI', 'Kaggle', 'Python'], isVerified: true, createdAt: '3d ago', prizePool: '$100,000 Cash Prize' },
  { id: 'opp_4', creatorName: 'FIRST Robotics', organization: 'FIRST Global Foundation', title: 'FIRST Robotics Competition (FRC) Championship 2026', category: 'ROBOTICS', location: 'Houston, TX', isRemote: false, description: 'Design, build, and program industrial-size robots to compete in dynamic games.', eligibility: 'High School Teams', deadline: 'Jan 20, 2027', applicationUrl: 'https://firstinspires.org', tags: ['Robotics', 'STEM', 'CAD', 'Java/C++'], isVerified: true, createdAt: '4d ago', prizePool: '$10M+ College Scholarships' },
  { id: 'opp_5', creatorName: 'IOI Secretariat', organization: 'International Olympiad in Informatics', title: '38th International Olympiad in Informatics (IOI 2026)', category: 'COMPETITIVE_PROGRAMMING', location: 'Singapore', isRemote: false, description: 'The prestigious annual competitive programming competition for secondary school students.', eligibility: 'National IOI Selection Winners', deadline: 'Jul 01, 2026', applicationUrl: 'https://ioinformatics.org', tags: ['Algorithms', 'C++', 'IOI', 'Competitive Programming'], isVerified: true, createdAt: '5d ago', prizePool: 'Full University Scholarships' }
];

for (let i = 6; i <= 25; i++) {
  opportunities.push({
    id: `opp_${i}`,
    creatorName: `Global Academic Partner #${i}`,
    organization: i % 2 === 0 ? `Stanford University Lab #${i}` : `ETH Zurich Institute #${i}`,
    title: i % 3 === 0 ? `International Physics Olympiad (IPhO) Qualifier #${i}` : `AI & Quantum Computing Hackathon #${i}`,
    category: i % 4 === 0 ? 'HACKATHON' : i % 3 === 0 ? 'COMPETITION' : 'RESEARCH',
    location: 'Remote / Global',
    isRemote: true,
    description: `Participate in world-class academic challenge #${i} with mentorship from top faculty and industry research labs.`,
    eligibility: 'High School Seniors & Undergraduates',
    deadline: `Dec ${(i % 28) + 1}, 2026`,
    applicationUrl: 'https://scholarby.edu',
    tags: ['Academic', 'Global', 'Verified', 'Research'],
    isVerified: true,
    createdAt: `${i}d ago`,
    prizePool: `$${5000 + i * 1000} Award & Badge`
  });
}

const fileHeader = `import {
  StudentPassport,
  UniversityData,
  ApplicationBucketItem,
  OpportunityItem,
  FeedPostItem,
  CommunityGroup,
  MessageThread,
  TutorListing,
  ConsultantListing,
  ProfessorListing,
} from '@/types';

export const CURRENT_STUDENT: StudentPassport = ${JSON.stringify(currentStudent, null, 2)};

export const MOCK_UNIVERSITIES: UniversityData[] = ${JSON.stringify(universities, null, 2)};

export const MOCK_PROFESSORS: ProfessorListing[] = ${JSON.stringify(professors, null, 2)};

export const MOCK_TUTORS: TutorListing[] = ${JSON.stringify(tutors, null, 2)};

export const MOCK_CONSULTANTS: ConsultantListing[] = ${JSON.stringify(consultants, null, 2)};

export const MOCK_FEED_POSTS: FeedPostItem[] = ${JSON.stringify(feedPosts, null, 2)};

export const MOCK_OPPORTUNITIES: OpportunityItem[] = ${JSON.stringify(opportunities, null, 2)};

export const INITIAL_APPLICATIONS: ApplicationBucketItem[] = [
  { id: 'app_1', universityId: 'uni_1', universityName: 'Massachusetts Institute of Technology (MIT)', programName: 'Computer Science & Engineering (EECS)', country: 'United States', category: 'DREAM', status: 'IN_PROGRESS', deadline: 'Nov 01, 2026', readinessScore: 92, checklist: [{ id: 'c1', title: 'SAT 1560 Score Report Sent', isCompleted: true }, { id: 'c2', title: 'USACO Gold Medal Certificate Uploaded', isCompleted: true }, { id: 'c3', title: 'Research Abstract for Dr. Vance', isCompleted: true }, { id: 'c4', title: 'Final MIT Essay Review', isCompleted: false }] },
  { id: 'app_2', universityId: 'uni_2', universityName: 'Stanford University', programName: 'Computer Science & AI Track', country: 'United States', category: 'DREAM', status: 'PREPARING', deadline: 'Jan 05, 2027', readinessScore: 88, checklist: [{ id: 'c5', title: 'Common App Essay Draft', isCompleted: true }, { id: 'c6', title: 'Stanford Short Answers', isCompleted: false }] },
  { id: 'app_3', universityId: 'uni_6', universityName: 'ETH Zurich', programName: 'Robotics, Systems & Control M.Sc.', country: 'Switzerland', category: 'TARGET', status: 'IN_PROGRESS', deadline: 'Dec 15, 2026', readinessScore: 95, checklist: [{ id: 'c7', title: 'German / English Proficiency Verified', isCompleted: true }, { id: 'c8', title: 'Recommendation Letter from Prof. Vance', isCompleted: true }] }
];

export const MOCK_COMMUNITIES: CommunityGroup[] = [
  { id: 'comm_1', name: 'MIT Class of 2030 Applicants', category: 'UNIVERSITY', description: 'Official community for prospective MIT EECS & STEM applicants.', membersCount: 1420, isJoined: true, recentTopics: [{ id: 't1', title: 'USACO Gold vs ISEF Award weight in MIT admissions?', author: 'Alex Chen', replies: 34, updatedAt: '2h ago' }] },
  { id: 'comm_2', name: 'International Mathematical Olympiad (IMO) Medalists', category: 'OLYMPIAD', description: 'Network of national team IMO, USACO, and IPhO participants.', membersCount: 890, isJoined: true, recentTopics: [{ id: 't2', title: 'IMO 2026 Problem 3 discussion & proof outline', author: 'Dr. Chen Wei', replies: 89, updatedAt: '1h ago' }] }
];

export const MOCK_MESSAGES: MessageThread[] = [
  { id: 'msg_1', contactName: 'Dr. Jane Smith', contactRole: 'PROFESSOR', contactAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80', unreadCount: 1, lastMessage: 'Loved your NeuroSwarm drone paper! Would you be free for an RA video interview next Tuesday?', lastMessageTime: '10:45 AM', messages: [{ id: 'm1', senderId: 'prof_1', senderName: 'Dr. Jane Smith', text: 'Loved your NeuroSwarm drone paper! Would you be free for an RA video interview next Tuesday?', timestamp: '10:45 AM' }] }
];
`;

fs.writeFileSync('src/lib/mockData.ts', fileHeader);
console.log('Successfully written complete mockData.ts with 20+ Unis, 20+ Profs, 20+ Tutors, 20+ Consultants, 100+ Feed Posts!');
