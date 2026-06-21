export type QuizQuestion = {
  id: string;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export const defaultQuizTopics = [
  "Linux",
  "Networking",
  "Docker",
  "GitHub Actions",
  "Kubernetes",
  "Terraform",
  "GitOps",
  "Observability",
  "Security",
  "Backstage",
  "Platform Engineering Fundamentals"
];

export const defaultQuizQuestions: QuizQuestion[] = [
  {
    id: "docker-purpose",
    topic: "Docker",
    question: "What is the purpose of Docker?",
    choices: [
      "To package and run applications consistently in containers",
      "To replace every database",
      "To create resumes automatically",
      "To write frontend CSS"
    ],
    correctAnswer: "To package and run applications consistently in containers",
    explanation: "Docker packages an application and its dependencies into a portable container image."
  },
  {
    id: "kubernetes-pod",
    topic: "Kubernetes",
    question: "What is a Kubernetes Pod?",
    choices: [
      "The smallest deployable unit in Kubernetes",
      "A cloud billing account",
      "A GitHub branch",
      "A CSS layout pattern"
    ],
    correctAnswer: "The smallest deployable unit in Kubernetes",
    explanation: "A Pod runs one or more containers that share networking and storage context."
  },
  {
    id: "cicd-meaning",
    topic: "GitHub Actions",
    question: "What does CI/CD mean?",
    choices: [
      "Continuous Integration and Continuous Delivery or Deployment",
      "Container Input and Cloud Database",
      "Code Interface and CSS Delivery",
      "Central Internet and Cloud Directory"
    ],
    correctAnswer: "Continuous Integration and Continuous Delivery or Deployment",
    explanation: "CI/CD automates testing, building, and delivery so changes move through a repeatable pipeline."
  },
  {
    id: "iac-meaning",
    topic: "Terraform",
    question: "What is Infrastructure as Code?",
    choices: [
      "Managing infrastructure with versioned configuration files",
      "Drawing network diagrams by hand",
      "Manually creating cloud servers every time",
      "Writing comments inside a README only"
    ],
    correctAnswer: "Managing infrastructure with versioned configuration files",
    explanation: "IaC lets infrastructure be reviewed, repeated, and changed through code."
  },
  {
    id: "gitops-meaning",
    topic: "GitOps",
    question: "What is GitOps?",
    choices: [
      "Using Git as the source of truth for desired system state",
      "A way to delete all branches",
      "A replacement for programming languages",
      "A certification payment system"
    ],
    correctAnswer: "Using Git as the source of truth for desired system state",
    explanation: "GitOps stores desired state in Git and uses automation to reconcile environments."
  },
  {
    id: "observability-meaning",
    topic: "Observability",
    question: "What is observability?",
    choices: [
      "Understanding system behavior through metrics, logs, and traces",
      "Making UI colors brighter",
      "Keeping all errors hidden",
      "Only watching CPU usage once"
    ],
    correctAnswer: "Understanding system behavior through metrics, logs, and traces",
    explanation: "Observability helps teams understand healthy and failing systems with useful signals."
  },
  {
    id: "idp-meaning",
    topic: "Platform Engineering Fundamentals",
    question: "What is an Internal Developer Platform?",
    choices: [
      "A self-service layer that helps developers build, ship, and operate software",
      "A private social media account",
      "A random folder of scripts",
      "A database table for resumes"
    ],
    correctAnswer: "A self-service layer that helps developers build, ship, and operate software",
    explanation: "An IDP combines tools, templates, docs, service catalogs, and workflows into developer-friendly paths."
  }
];
