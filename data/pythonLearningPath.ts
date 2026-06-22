import type { Difficulty, Priority, ResourceLink } from "./types";

export type PythonCommandGroup = {
  label: string;
  commands: string[];
};

export type PythonStudyStep = {
  id: string;
  stepNumber: number;
  title: string;
  goal?: string;
  type?: string;
  priority?: Priority;
  why?: string;
  links: ResourceLink[];
  proofToCollect?: string;
  installItems?: string[];
  whatToDo?: string[];
  commands?: PythonCommandGroup[];
  whatToLearn?: string[];
  whatToBuild?: string[];
  howToUse?: string[];
  difficulty: Difficulty;
};

export const pythonStudySteps: PythonStudyStep[] = [
  {
    id: "setup-python",
    stepNumber: 0,
    title: "Setup Python",
    goal: "Prepare the coding environment.",
    difficulty: "Beginner",
    installItems: [
      "Python 3",
      "VS Code",
      "Python extension for VS Code",
      "Git",
      "Optional WSL2 Ubuntu if practicing Linux"
    ],
    links: [
      { label: "Python Download", url: "https://www.python.org/downloads/" },
      { label: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/" },
      { label: "VS Code Python", url: "https://code.visualstudio.com/docs/languages/python" }
    ],
    whatToDo: [
      "Install Python.",
      "Check python version.",
      "Create a folder for Python practice.",
      "Run a hello world file.",
      "Learn how to use pip.",
      "Learn how to create a virtual environment."
    ],
    commands: [
      {
        label: "Windows",
        commands: ["python --version", "pip --version", "python -m venv .venv", ".venv\\Scripts\\activate", "pip install requests"]
      },
      {
        label: "WSL or Linux",
        commands: ["python3 --version", "pip3 --version", "python3 -m venv .venv", "source .venv/bin/activate", "pip install requests"]
      }
    ]
  },
  {
    id: "cisco-python-essentials-1",
    stepNumber: 1,
    title: "Cisco Python Essentials 1",
    type: "Free course plus Cisco Credly badge.",
    priority: "Highest",
    why: "This is the best beginner starting point because it is structured and gives a badge.",
    difficulty: "Beginner",
    links: [{ label: "Cisco Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1" }],
    proofToCollect: "Cisco Python Essentials 1 badge.",
    whatToLearn: [
      "Computer programming basics.",
      "Python syntax.",
      "Variables.",
      "Data types.",
      "Functions.",
      "Loops.",
      "Conditionals.",
      "Basic problem solving.",
      "Python Standard Library basics."
    ],
    whatToBuild: ["Calculator.", "Number guessing game.", "Simple quiz in terminal."]
  },
  {
    id: "cs50p-python",
    stepNumber: 2,
    title: "CS50P, Introduction to Programming with Python",
    type: "Free course plus free CS50 certificate.",
    priority: "High",
    why: "This gives stronger programming practice and problem solving.",
    difficulty: "Beginner",
    links: [
      { label: "CS50P", url: "https://cs50.harvard.edu/python/" },
      { label: "Certificate info", url: "https://cs50.harvard.edu/python/certificate/" }
    ],
    proofToCollect: "Free CS50P certificate.",
    whatToLearn: [
      "Functions.",
      "Variables.",
      "Conditionals.",
      "Loops.",
      "Exceptions.",
      "Libraries.",
      "Unit tests.",
      "File I/O.",
      "Regular expressions.",
      "Object-oriented programming."
    ],
    whatToBuild: ["Command-line to-do app.", "File reader.", "Simple expense tracker."]
  },
  {
    id: "freecodecamp-python",
    stepNumber: 3,
    title: "freeCodeCamp Python Certification",
    type: "Free certification.",
    priority: "High",
    why: "This gives project-based proof and a free certification.",
    difficulty: "Beginner",
    links: [{ label: "freeCodeCamp Python Certification", url: "https://www.freecodecamp.org/learn/python-v9" }],
    proofToCollect: "freeCodeCamp Python Certification.",
    whatToDo: [
      "Complete required lessons.",
      "Complete the five required projects.",
      "Pass the Python certification exam."
    ],
    whatToBuild: [
      "Text formatter.",
      "Time calculator.",
      "Budget app.",
      "Polygon area calculator.",
      "Probability project."
    ]
  },
  {
    id: "kaggle-python",
    stepNumber: 4,
    title: "Kaggle Python",
    type: "Free course plus no-cost certificate.",
    priority: "Medium",
    why: "This is a fast practical Python course and useful before data-related work.",
    difficulty: "Beginner",
    links: [{ label: "Kaggle Python", url: "https://www.kaggle.com/learn/python" }],
    proofToCollect: "Kaggle Python certificate.",
    whatToLearn: [
      "Python basics for data work.",
      "Functions.",
      "Booleans.",
      "Lists.",
      "Loops.",
      "Strings.",
      "Dictionaries.",
      "External libraries."
    ],
    whatToBuild: ["CSV grade analyzer.", "Simple data summary script."]
  },
  {
    id: "cisco-python-essentials-2",
    stepNumber: 5,
    title: "Cisco Python Essentials 2",
    type: "Free intermediate course plus Cisco Credly badge.",
    priority: "High",
    why: "This moves you from beginner Python to intermediate Python.",
    difficulty: "Intermediate",
    links: [{ label: "Cisco Python Essentials 2", url: "https://www.netacad.com/courses/python-essentials-2?courseLang=en-US" }],
    proofToCollect: "Cisco Python Essentials 2 badge.",
    whatToLearn: [
      "Modules.",
      "Packages.",
      "pip.",
      "Exceptions.",
      "File processing.",
      "Object-oriented programming.",
      "Methods.",
      "Inheritance.",
      "Iterators.",
      "Generators."
    ],
    whatToBuild: ["File organizer.", "Log parser.", "Certificate tracker CLI.", "GitHub repo analyzer."]
  },
  {
    id: "python-practice-websites",
    stepNumber: 6,
    title: "Python Practice Websites",
    type: "Free practice.",
    priority: "High",
    difficulty: "Beginner",
    links: [
      { label: "Exercism Python", url: "https://exercism.org/tracks/python" },
      { label: "Real Python", url: "https://realpython.com/" },
      { label: "Python Standard Library", url: "https://docs.python.org/3/library/" },
      { label: "PracticePython", url: "https://www.practicepython.org/" },
      { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }
    ],
    howToUse: [
      "Use Exercism for exercises.",
      "Use Python docs when you need official reference.",
      "Use Real Python when a topic feels confusing.",
      "Use Automate the Boring Stuff for automation ideas."
    ]
  },
  {
    id: "python-backend-path",
    stepNumber: 7,
    title: "Python Backend Path",
    type: "Free tutorial path.",
    priority: "High",
    difficulty: "Intermediate",
    links: [
      { label: "FastAPI", url: "https://fastapi.tiangolo.com/" },
      { label: "Flask", url: "https://flask.palletsprojects.com/" },
      { label: "pytest", url: "https://docs.pytest.org/" },
      { label: "Requests", url: "https://requests.readthedocs.io/" }
    ],
    whatToLearn: [
      "FastAPI basics.",
      "Routes.",
      "Request body.",
      "Response body.",
      "Pydantic models.",
      "Error handling.",
      "API testing.",
      "pytest basics.",
      "Logging."
    ],
    whatToBuild: [
      "FastAPI Notes API.",
      "Certificate Tracker API.",
      "Resume Keyword Checker API.",
      "Study Quiz Generator API."
    ]
  },
  {
    id: "python-data-automation-path",
    stepNumber: 8,
    title: "Python Data and Automation Path",
    type: "Free tutorial path.",
    priority: "High",
    difficulty: "Intermediate",
    links: [
      { label: "pandas", url: "https://pandas.pydata.org/docs/" },
      { label: "Jupyter", url: "https://jupyter.org/" },
      { label: "Matplotlib", url: "https://matplotlib.org/stable/users/index.html" }
    ],
    whatToLearn: [
      "CSV reading.",
      "Data cleaning.",
      "Data summaries.",
      "Charts.",
      "Automation scripts.",
      "Report generation."
    ],
    whatToBuild: [
      "CSV grade analyzer.",
      "Resume keyword checker.",
      "GitHub repo analyzer.",
      "Certification progress report generator."
    ]
  }
];
