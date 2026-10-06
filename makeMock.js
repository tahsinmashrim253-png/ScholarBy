const fs = require('fs');

const fileContent = `import {
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

export const CURRENT_STUDENT: StudentPassport = {
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
    {
      id: 'ts_1',
      testType: 'SAT',
      totalScore: '1560',
      breakdown: 'Math: 800 | Reading & Writing: 760',
      testDate: '2025-10-12',
    },
    {
      id: 'ts_2',
      testType: 'IELTS',
      totalScore: '8.5',
      breakdown: 'Listening: 9.0 | Reading: 9.0 | Writing: 8.0 | Speaking: 8.0',
      testDate: '2025-08-20',
    },
    {
      id: 'ts_3',
      testType: 'AP',
      totalScore: '5/5 (5 Exams)',
      breakdown: 'AP CS A (5), AP Calc BC (5), AP Physics C (5), AP Chem (5), AP Stats (5)',
      testDate: '2025-05-15',
    },
  ],
  achievements: [
    {
      id: 'ach_1',
      title: 'USA Computing Olympiad (USACO) Gold Division Medalist',
      issuer: 'USACO Organization',
      category: 'Olympiad',
      isVerified: true,
      verifiedBy: 'USACO Official Registry',
    },
    {
      id: 'ach_2',
      title: 'International Science & Engineering Fair (ISEF) 2nd Place Grand Award',
      issuer: 'Society for Science',
      category: 'Award',
      isVerified: true,
      verifiedBy: 'Society for Science Verification',
    },
    {
      id: 'ach_3',
      title: 'Stanford TreeHacks 2026 Best AI Swarm Hackathon Trophy',
      issuer: 'Stanford TreeHacks',
      category: 'Hackathon',
      isVerified: true,
      verifiedBy: 'Stanford Major League Hacking',
    },
  ],
  projects: [
    {
      id: 'proj_1',
      title: 'NeuroSwarm: Decentralized Vision-Guided Drones',
      description:
        'Engineered an edge-AI flocking algorithm running on Raspberry Pi CM4s, achieving 60fps obstacle avoidance without centralized GPS.',
      role: 'Lead Architect & Developer',
      technologies: 'Python, PyTorch, ROS2, C++',
      githubUrl: 'https://github.com/alexchen/neuroswarm',
      projectUrl: 'https://neuroswarm-demo.dev',
    },
    {
      id: 'proj_2',
      title: 'ScholarBy Vector Match Engine',
      description:
        'Built a vector semantic similarity engine linking high school research papers to university lab publications.',
      role: 'Creator & Maintainer',
      technologies: 'Next.js, TypeScript, TailwindCSS',
      githubUrl: 'https://github.com/alexchen/scholarby-match',
    },
  ],
  publications: [
    {
      id: 'pub_1',
      title: 'Decentralized Edge Flocking via Graph Attention Networks on Low-Power Micro-UAVs',
      journal: 'IEEE High School Research Journal & ArXiv Preprint',
      doi: '10.1109/HSRJ.2025.10928374',
      pubDate: '2025-11-04',
    },
  ],
};

export const MOCK_UNIVERSITIES: UniversityData[] = [
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
`;

console.log('Script base written');
