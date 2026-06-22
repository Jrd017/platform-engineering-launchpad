import type { Difficulty } from "./types";

export type PythonResourceCategory =
  | "Beginner"
  | "Practice"
  | "Automation"
  | "Backend"
  | "Testing"
  | "Data"
  | "Official reference";

export type PythonResource = {
  id: string;
  title: string;
  category: PythonResourceCategory;
  skillLevel: Difficulty | "Reference";
  url: string;
  why: string;
};

export const pythonResources: PythonResource[] = [
  {
    id: "python-official-tutorial",
    title: "Python Official Tutorial",
    category: "Beginner",
    skillLevel: "Beginner",
    url: "https://docs.python.org/3/tutorial/",
    why: "Use it as the official starting reference for Python syntax and core concepts."
  },
  {
    id: "freecodecamp-python-beginners",
    title: "freeCodeCamp Python for Beginners",
    category: "Beginner",
    skillLevel: "Beginner",
    url: "https://www.freecodecamp.org/learn/learn-python-for-beginners",
    why: "Use it for beginner lessons when you want extra guided practice."
  },
  {
    id: "cisco-python-essentials-1",
    title: "Cisco Python Essentials 1",
    category: "Beginner",
    skillLevel: "Beginner",
    url: "https://www.netacad.com/courses/python-essentials-1",
    why: "Start here for a structured beginner course and badge."
  },
  {
    id: "cs50p",
    title: "CS50P",
    category: "Beginner",
    skillLevel: "Beginner",
    url: "https://cs50.harvard.edu/python/",
    why: "Use it after Cisco Python Essentials 1 for stronger problem solving."
  },
  {
    id: "exercism-python",
    title: "Exercism Python",
    category: "Practice",
    skillLevel: "Beginner",
    url: "https://exercism.org/tracks/python",
    why: "Use it for steady exercises while you work through the main path."
  },
  {
    id: "practicepython",
    title: "PracticePython",
    category: "Practice",
    skillLevel: "Beginner",
    url: "https://www.practicepython.org/",
    why: "Use it for simple beginner problems and quick repetition."
  },
  {
    id: "real-python",
    title: "Real Python",
    category: "Practice",
    skillLevel: "Intermediate",
    url: "https://realpython.com/",
    why: "Use it when a topic feels confusing and you need a clearer explanation."
  },
  {
    id: "automate-boring-stuff",
    title: "Automate the Boring Stuff",
    category: "Automation",
    skillLevel: "Beginner",
    url: "https://automatetheboringstuff.com/",
    why: "Use it for practical scripting and automation ideas."
  },
  {
    id: "requests",
    title: "Requests",
    category: "Automation",
    skillLevel: "Beginner",
    url: "https://requests.readthedocs.io/",
    why: "Use it to call APIs and build automation scripts that work with web data."
  },
  {
    id: "fastapi",
    title: "FastAPI",
    category: "Backend",
    skillLevel: "Intermediate",
    url: "https://fastapi.tiangolo.com/",
    why: "Use it for Python backend APIs, validation, and portfolio backend projects."
  },
  {
    id: "flask",
    title: "Flask",
    category: "Backend",
    skillLevel: "Intermediate",
    url: "https://flask.palletsprojects.com/",
    why: "Use it to understand a smaller Python web framework and basic API patterns."
  },
  {
    id: "pytest",
    title: "pytest",
    category: "Testing",
    skillLevel: "Intermediate",
    url: "https://docs.pytest.org/",
    why: "Use it to test Python scripts, APIs, and backend utilities."
  },
  {
    id: "kaggle-python",
    title: "Kaggle Python",
    category: "Data",
    skillLevel: "Beginner",
    url: "https://www.kaggle.com/learn/python",
    why: "Use it as a quick bridge from Python basics to data work."
  },
  {
    id: "pandas",
    title: "pandas",
    category: "Data",
    skillLevel: "Intermediate",
    url: "https://pandas.pydata.org/docs/",
    why: "Use it for CSV analysis, data cleaning, and report generation."
  },
  {
    id: "jupyter",
    title: "Jupyter",
    category: "Data",
    skillLevel: "Beginner",
    url: "https://jupyter.org/",
    why: "Use it for notebooks, analysis, and data experiments."
  },
  {
    id: "matplotlib",
    title: "Matplotlib",
    category: "Data",
    skillLevel: "Intermediate",
    url: "https://matplotlib.org/stable/users/index.html",
    why: "Use it to turn data summaries into simple charts."
  },
  {
    id: "python-standard-library",
    title: "Python Standard Library",
    category: "Official reference",
    skillLevel: "Reference",
    url: "https://docs.python.org/3/library/",
    why: "Use it when you need the official reference for built-in Python modules."
  },
  {
    id: "pip",
    title: "pip",
    category: "Official reference",
    skillLevel: "Reference",
    url: "https://pip.pypa.io/en/stable/",
    why: "Use it when installing, listing, or managing Python packages."
  },
  {
    id: "venv",
    title: "venv",
    category: "Official reference",
    skillLevel: "Reference",
    url: "https://docs.python.org/3/library/venv.html",
    why: "Use it to create isolated environments for each Python project."
  }
];
