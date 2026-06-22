export type QuizQuestion = {
  id: string;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export const defaultQuizTopics = [
  "Python Basics",
  "Python Functions",
  "Python Data Structures",
  "Python OOP",
  "Python File Handling",
  "Python APIs",
  "FastAPI",
  "pytest",
  "pandas",
  "Automation",
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
    id: "python-list",
    topic: "Python Data Structures",
    question: "What is a list in Python?",
    choices: [
      "An ordered, mutable collection of values",
      "A fixed collection that cannot change",
      "A package installer",
      "A web API framework"
    ],
    correctAnswer: "An ordered, mutable collection of values",
    explanation: "A Python list stores ordered items and can be changed after it is created."
  },
  {
    id: "python-dictionary",
    topic: "Python Data Structures",
    question: "What is a dictionary in Python?",
    choices: [
      "A key-value collection",
      "A loop keyword",
      "A virtual environment",
      "A charting library"
    ],
    correctAnswer: "A key-value collection",
    explanation: "A dictionary maps keys to values, which makes it useful for structured data."
  },
  {
    id: "python-pip",
    topic: "Python Basics",
    question: "What does pip do?",
    choices: [
      "Installs and manages Python packages",
      "Runs TypeScript builds",
      "Creates Docker images",
      "Formats CSS"
    ],
    correctAnswer: "Installs and manages Python packages",
    explanation: "pip is the standard package installer used to install libraries from Python package indexes."
  },
  {
    id: "python-virtual-environment",
    topic: "Python Basics",
    question: "What is a virtual environment?",
    choices: [
      "An isolated Python environment for project dependencies",
      "A cloud server",
      "A CSS theme",
      "A GitHub repository setting"
    ],
    correctAnswer: "An isolated Python environment for project dependencies",
    explanation: "Virtual environments keep dependencies isolated so one project does not break another."
  },
  {
    id: "fastapi-purpose",
    topic: "FastAPI",
    question: "What is FastAPI used for?",
    choices: [
      "Building Python web APIs",
      "Drawing charts only",
      "Replacing Git",
      "Installing Python itself"
    ],
    correctAnswer: "Building Python web APIs",
    explanation: "FastAPI is a Python framework for building APIs with validation, routing, and documentation support."
  },
  {
    id: "pytest-purpose",
    topic: "pytest",
    question: "What is pytest used for?",
    choices: [
      "Writing and running Python tests",
      "Creating CSS grids",
      "Deploying Kubernetes clusters",
      "Managing resume templates"
    ],
    correctAnswer: "Writing and running Python tests",
    explanation: "pytest helps test Python code so scripts, APIs, and tools behave correctly."
  },
  {
    id: "python-logging-purpose",
    topic: "Automation",
    question: "What is the purpose of logging?",
    choices: [
      "Recording useful runtime events and errors",
      "Deleting all output",
      "Replacing tests",
      "Turning Python into TypeScript"
    ],
    correctAnswer: "Recording useful runtime events and errors",
    explanation: "Logs help you inspect what happened when a script, API, or automation job runs."
  },
  {
    id: "module-package-difference",
    topic: "Python Basics",
    question: "What is the difference between a module and a package?",
    choices: [
      "A module is a Python file, while a package groups modules",
      "A package is always a single variable",
      "A module can only be used in browsers",
      "There is no difference"
    ],
    correctAnswer: "A module is a Python file, while a package groups modules",
    explanation: "Modules are usually single Python files. Packages organize related modules in directories."
  },
  {
    id: "python-function",
    topic: "Python Functions",
    question: "What is a function?",
    choices: [
      "A reusable block of code that can accept inputs and return output",
      "A package manager",
      "A type of Git commit",
      "A database row"
    ],
    correctAnswer: "A reusable block of code that can accept inputs and return output",
    explanation: "Functions help organize repeated logic and make code easier to test and reuse."
  },
  {
    id: "python-exception",
    topic: "Python Basics",
    question: "What is an exception?",
    choices: [
      "An error or unusual condition that can be handled in code",
      "A normal variable assignment",
      "A Python list method only",
      "A cloud certification"
    ],
    correctAnswer: "An error or unusual condition that can be handled in code",
    explanation: "Exceptions let Python signal problems and let your program handle them intentionally."
  },
  {
    id: "with-open",
    topic: "Python File Handling",
    question: "What does with open() do?",
    choices: [
      "Opens a file and closes it automatically after the block",
      "Installs dependencies",
      "Creates an API route",
      "Runs all tests"
    ],
    correctAnswer: "Opens a file and closes it automatically after the block",
    explanation: "Using with open() safely manages the file resource and closes it when the block finishes."
  },
  {
    id: "why-use-venv",
    topic: "Python Basics",
    question: "Why should I use a virtual environment?",
    choices: [
      "To isolate project dependencies and avoid version conflicts",
      "To make Python code run only online",
      "To replace GitHub Actions",
      "To automatically write a README"
    ],
    correctAnswer: "To isolate project dependencies and avoid version conflicts",
    explanation: "A virtual environment keeps each project's packages separate, which makes tooling more reliable."
  },
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
