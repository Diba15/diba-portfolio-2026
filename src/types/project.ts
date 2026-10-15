export type ProjectCategory =
  | "All"
  | "Fullstack"
  | "Frontend"
  | "Mobile"
  | "Open Source";

export interface ProjectSummaryDetail {
  context: string;
  goals: string;
  process: string;
  output: string;
}

export interface ScopeOfWorkItem {
  title: string;
  description: string;
}

export interface EngineeringVerificationItem {
  metric: string;
  label: string;
  detail?: string;
}

export interface FinancialMechanics {
  title: string;
  subtitle: string;
  feeStructure: {
    feePercentage: string;
    paidBy: string;
    artistPayoutPercentage: string;
    explanation: string;
  };
  simulationExample: {
    basePrice: string;
    platformFee: string;
    clientTotalPaid: string;
    artistNetReceived: string;
  };
  escrowLifecycle: {
    step: string;
    action: string;
    fundMovement: string;
  }[];
  adminFinancialMetrics: {
    name: string;
    code: string;
    calculation: string;
  }[];
}

export interface CaseStudyStackGroup {
  category:
    | "Frontend"
    | "Backend"
    | "Testing & Quality"
    | "Tools & Deployment"
    | string;
  items: string[];
}

export interface CaseStudyProblemSolution {
  idNumber?: number;
  problem: string;
  solution: string;
}

export interface CaseStudyFuturePlan {
  title: string;
  tag: string;
  description?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  objectives: string[];
  solution: string;
  outcomes: string[];
  keyAchievements: string[];
  impact: string;
  stackGroups: CaseStudyStackGroup[];
  problemSolutions?: CaseStudyProblemSolution[];
  futurePlans?: CaseStudyFuturePlan[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  featured: boolean;
  category: Exclude<ProjectCategory, "All">;
  thumbnail: string;
  gallery?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  caseStudy?: ProjectCaseStudy;
  summaryDetails?: ProjectSummaryDetail;
  scopeOfWork?: ScopeOfWorkItem[];
  methods?: string[];
  engineeringRigor?: EngineeringVerificationItem[];
  financialMechanics?: FinancialMechanics;
  features?: string[];
  challenges?: string[];
  metrics?: string[];
}
