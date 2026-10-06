export type RoleType =
  | 'STUDENT'
  | 'PROFESSOR'
  | 'UNIVERSITY'
  | 'RESEARCH_LAB'
  | 'OLYMPIAD'
  | 'TUTOR'
  | 'COACHING_CENTER'
  | 'CONSULTANT'
  | 'COMPANY'
  | 'ALUMNI';

export type AppCategory = 'DREAM' | 'TARGET' | 'SAFETY';

export type AppStatus =
  | 'RESEARCHING'
  | 'PREPARING'
  | 'IN_PROGRESS'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'INTERVIEW'
  | 'WAITLISTED'
  | 'ACCEPTED'
  | 'REJECTED';

export type OppCategory =
  | 'SCHOLARSHIP'
  | 'RESEARCH'
  | 'INTERNSHIP'
  | 'COMPETITION'
  | 'EXCHANGE'
  | 'PROGRAM'
  | 'TUTORING'
  | 'COACHING'
  | 'HACKATHON'
  | 'DATATHON'
  | 'ROBOTICS'
  | 'COMPETITIVE_PROGRAMMING';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: RoleType;
  country?: string;
  avatarUrl?: string;
  headline?: string;
  bio?: string;
  isVerified: boolean;
}

export interface TestScore {
  id: string;
  testType: string;
  totalScore: string;
  breakdown?: string;
  testDate?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  category: string;
  isVerified: boolean;
  verifiedBy?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  technologies?: string;
  githubUrl?: string;
  projectUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal?: string;
  doi?: string;
  pubDate?: string;
}

export interface StudentPassport {
  id: string;
  userId: string;
  user: UserProfile;
  school?: string;
  educationLevel?: string;
  major?: string;
  minor?: string;
  gpa?: number;
  gradYear?: number;
  targetCountries: string[];
  interests: string[];
  testScores: TestScore[];
  achievements: Achievement[];
  projects: Project[];
  publications: Publication[];
}

export interface UniversityData {
  id: string;
  name: string;
  country: string;
  city?: string;
  ranking?: number;
  tuitionFee?: string;
  acceptanceRate?: number;
  description: string;
  logoUrl?: string;
  bannerUrl?: string;
  website?: string;
  programs: Array<{
    id: string;
    name: string;
    degree: string;
    department?: string;
    deadline?: string;
    tuitionPerYear?: string;
    requirements?: string[];
  }>;
}

export interface ApplicationBucketItem {
  id: string;
  universityId: string;
  universityName: string;
  logoUrl?: string;
  programName: string;
  country: string;
  category: AppCategory;
  status: AppStatus;
  deadline: string;
  readinessScore: number;
  checklist: Array<{
    id: string;
    title: string;
    isCompleted: boolean;
    dueDate?: string;
  }>;
  notes?: string;
}

export interface OpportunityItem {
  id: string;
  creatorName: string;
  creatorAvatar?: string;
  organization: string;
  title: string;
  category: OppCategory;
  location: string;
  isRemote: boolean;
  description: string;
  eligibility?: string;
  deadline?: string;
  applicationUrl?: string;
  tags: string[];
  isVerified: boolean;
  matchScore?: number;
  createdAt: string;
  contactEmail?: string;
  prizePool?: string;
}

export interface FeedPostItem {
  id: string;
  authorName: string;
  authorRole: RoleType;
  authorAvatar?: string;
  authorHeadline?: string;
  isVerified: boolean;
  content: string;
  postType: 'GENERAL' | 'RESEARCH' | 'PROJECT' | 'ADMISSION' | 'OPPORTUNITY' | 'TUTORING' | 'OLYMPIAD' | 'HACKATHON';
  tags: string[];
  attachments?: string[];
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  isLiked?: boolean;
}

export interface CommunityGroup {
  id: string;
  name: string;
  category: 'UNIVERSITY' | 'MAJOR' | 'COUNTRY' | 'OLYMPIAD' | 'COMPETITION';
  description: string;
  membersCount: number;
  bannerUrl?: string;
  isJoined?: boolean;
  recentTopics: Array<{
    id: string;
    title: string;
    author: string;
    replies: number;
    updatedAt: string;
  }>;
}

export interface MessageThread {
  id: string;
  contactName: string;
  contactRole: RoleType;
  contactAvatar: string;
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
  messages: Array<{
    id: string;
    senderId: string;
    senderName: string;
    text: string;
    timestamp: string;
    attachment?: {
      title: string;
      fileUrl: string;
    };
  }>;
}

export interface ProfessorListing {
  id: string;
  name: string;
  title: string;
  university: string;
  department: string;
  avatarUrl: string;
  researchFocus: string[];
  publicationsCount: number;
  activeOpeningsCount: number;
  bio: string;
  isVerified: boolean;
  contactEmail: string;
  labName?: string;
  recentPaper?: {
    title: string;
    journal: string;
    doi: string;
  };
}

export interface TutorListing {
  id: string;
  name: string;
  avatarUrl: string;
  subjects: string[];
  education: string;
  hourlyRate: string;
  rating: number;
  reviewsCount: number;
  bio: string;
  isVerified: boolean;
  contactEmail: string;
}

export interface ConsultantListing {
  id: string;
  name: string;
  avatarUrl: string;
  specialization: string[];
  targetCountries: string[];
  successRate: string;
  experienceYears: number;
  hourlyRate: string;
  rating: number;
  reviewsCount: number;
  bio: string;
  isVerified: boolean;
  contactEmail: string;
}

export type AiPriority = 'URGENT' | 'USEFUL' | 'LOW';

export interface AiAgentStatus {
  id: string;
  name: string;
  sector: string;
  role: string;
  status: 'ACTIVE' | 'PROCESSING' | 'WAITING_HUMAN_VERIFICATION' | 'IDLE';
  lastAction: string;
  tasksCompletedToday: number;
  accuracy: string;
  humanInLoopRule: string;
}

export interface ScholarshipChangeLog {
  id: string;
  scholarshipTitle: string;
  universityOrSource: string;
  changeType: 'DEADLINE_CHANGED' | 'ELIGIBILITY_SHIFT' | 'FUNDING_UPDATE' | 'NEW_SCHOLARSHIP_DETECTED';
  oldValue: string;
  newValue: string;
  detectedAt: string;
  sourceUrl: string;
  verificationStatus: 'AUTO_PARSED' | 'PENDING_HUMAN_APPROVAL' | 'VERIFIED_AND_PUBLISHED';
}

export interface MatchSuitabilityBreakdown {
  overallMatch: number;
  academicFit: number;
  fieldFit: number;
  fundingFit: number;
  deadlineUrgency: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  semanticReasoning: string;
  missingRequirements: string[];
}

export interface ContentFactoryItem {
  id: string;
  sourceScholarship: string;
  priority: AiPriority;
  webArticle: { title: string; snippet: string };
  instagramCarousel: { slidesCount: number; headline: string };
  linkedInPost: { text: string };
  telegramAlert: { text: string };
  emailNewsletter: { subject: string };
  seoMeta: { title: string; keywords: string[] };
  publishedAt: string;
}

