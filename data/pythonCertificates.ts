export type PythonProofLabel = "Free certificate" | "Free badge" | "Free course" | "Paid certification";

export type PythonCertificate = {
  id: string;
  title: string;
  category: string;
  label: PythonProofLabel;
  provider: string;
  link: string;
  certificatePage?: string;
  proof: string;
};

export const pythonCertificates: PythonCertificate[] = [
  {
    id: "cisco-python-essentials-1",
    title: "Cisco Python Essentials 1",
    category: "Free badge",
    label: "Free badge",
    provider: "Cisco Networking Academy and Python Institute",
    link: "https://www.netacad.com/courses/python-essentials-1",
    proof: "Credly badge."
  },
  {
    id: "cs50p-python",
    title: "CS50P Python",
    category: "Free certificate",
    label: "Free certificate",
    provider: "Harvard CS50",
    link: "https://cs50.harvard.edu/python/",
    certificatePage: "https://cs50.harvard.edu/python/certificate/",
    proof: "Free CS50 certificate."
  },
  {
    id: "freecodecamp-python",
    title: "freeCodeCamp Python Certification",
    category: "Free certification",
    label: "Free certificate",
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/learn/python-v9",
    proof: "freeCodeCamp certification."
  },
  {
    id: "kaggle-python",
    title: "Kaggle Python",
    category: "Free course certificate",
    label: "Free course",
    provider: "Kaggle Learn",
    link: "https://www.kaggle.com/learn/python",
    proof: "Kaggle certificate."
  },
  {
    id: "cisco-python-essentials-2",
    title: "Cisco Python Essentials 2",
    category: "Free badge",
    label: "Free badge",
    provider: "Cisco Networking Academy and Python Institute",
    link: "https://www.netacad.com/courses/python-essentials-2?courseLang=en-US",
    proof: "Credly badge."
  }
];

export const paidPythonCertificationWarning =
  "Python Institute PCEP and PCAP are paid certification exams. Track them later, but do not put them under free certifications.";
