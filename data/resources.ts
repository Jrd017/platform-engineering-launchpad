export type Resource = {
  id: string;
  category: string;
  title: string;
  url: string;
  description: string;
};

export const resources: Resource[] = [
  {
    id: "platform-roadmap",
    category: "Roadmaps",
    title: "Platform Engineering Roadmap",
    url: "https://mbianchidev.github.io/platform-engineering-roadmap",
    description: "A focused roadmap for platform engineering concepts and practice."
  },
  {
    id: "platform-roadmap-github",
    category: "Roadmaps",
    title: "Platform Engineering Roadmap on GitHub",
    url: "https://github.com/mbianchidev/platform-engineering-roadmap",
    description: "The GitHub version of the platform engineering roadmap."
  },
  {
    id: "devops-roadmap",
    category: "Roadmaps",
    title: "DevOps Roadmap",
    url: "https://roadmap.sh/devops",
    description: "A broad map for DevOps foundations, tooling, and workflows."
  },
  {
    id: "system-design-roadmap",
    category: "Roadmaps",
    title: "System Design Roadmap",
    url: "https://roadmap.sh/system-design",
    description: "A guide for learning scalable architecture and backend system design."
  },
  {
    id: "devops-projects",
    category: "Roadmaps",
    title: "DevOps Projects",
    url: "https://roadmap.sh/devops/projects",
    description: "Project ideas that turn DevOps study into visible proof."
  },
  {
    id: "cnpa",
    category: "Platform Engineering",
    title: "CNCF CNPA",
    url: "https://www.cncf.io/training/certification/cnpa/",
    description: "Certified Cloud Native Platform Engineering Associate information."
  },
  {
    id: "cncf-catalog",
    category: "Platform Engineering",
    title: "CNCF Certification Catalog",
    url: "https://www.cncf.io/training/certification/",
    description: "The CNCF certification catalog for cloud native credentials."
  },
  {
    id: "cncf-curriculum",
    category: "Platform Engineering",
    title: "CNCF Curriculum GitHub",
    url: "https://github.com/cncf/curriculum",
    description: "CNCF curriculum source material for exam preparation."
  },
  {
    id: "docker-get-started",
    category: "Docker",
    title: "Docker Get Started",
    url: "https://docs.docker.com/get-started/",
    description: "Official Docker beginner material."
  },
  {
    id: "kubernetes-tutorials",
    category: "Kubernetes",
    title: "Kubernetes Tutorials",
    url: "https://kubernetes.io/docs/tutorials/",
    description: "Official hands-on Kubernetes tutorials."
  },
  {
    id: "kubernetes-concepts",
    category: "Kubernetes",
    title: "Kubernetes Concepts",
    url: "https://kubernetes.io/docs/concepts/",
    description: "Official Kubernetes concepts reference."
  },
  {
    id: "cisco-linux-unhatched",
    category: "Linux",
    title: "Cisco Linux Unhatched",
    url: "https://www.netacad.com/courses/linux-unhatched",
    description: "Introductory Linux course for beginners."
  },
  {
    id: "linux-foundation-kubernetes",
    category: "Linux",
    title: "Linux Foundation Introduction to Kubernetes",
    url: "https://training.linuxfoundation.org/training/introduction-to-kubernetes/",
    description: "Free Kubernetes course from The Linux Foundation."
  },
  {
    id: "cisco-networking-basics",
    category: "Networking",
    title: "Cisco Networking Basics",
    url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
    description: "Beginner networking fundamentals."
  },
  {
    id: "aws-educate",
    category: "Cloud",
    title: "AWS Educate",
    url: "https://aws.amazon.com/education/awseducate/",
    description: "AWS learning portal for students."
  },
  {
    id: "aws-training-badges",
    category: "Cloud",
    title: "AWS Training Badges",
    url: "https://aws.amazon.com/training/badges/",
    description: "AWS badge and training information."
  },
  {
    id: "google-skills",
    category: "Cloud",
    title: "Google Skills",
    url: "https://www.skills.google/",
    description: "Google learning paths and badges."
  },
  {
    id: "google-cloud-students",
    category: "Cloud",
    title: "Google Cloud Students",
    url: "https://cloud.google.com/edu/students",
    description: "Google Cloud resources for students."
  },
  {
    id: "github-actions",
    category: "GitHub",
    title: "GitHub Actions Docs",
    url: "https://docs.github.com/actions",
    description: "Official CI/CD documentation for GitHub Actions."
  },
  {
    id: "github-profile-readme",
    category: "GitHub",
    title: "GitHub Profile README",
    url: "https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme",
    description: "How to create and manage a GitHub profile README."
  },
  {
    id: "github-pin-repos",
    category: "GitHub",
    title: "GitHub Pin Repos",
    url: "https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile",
    description: "How to pin repositories and profile items."
  },
  {
    id: "argo-cd",
    category: "GitOps",
    title: "Argo CD Docs",
    url: "https://argoproj.github.io/cd/",
    description: "Official Argo CD documentation."
  },
  {
    id: "prometheus",
    category: "Observability",
    title: "Prometheus Docs",
    url: "https://prometheus.io/docs/introduction/overview/",
    description: "Official Prometheus overview and docs."
  },
  {
    id: "opentelemetry",
    category: "Observability",
    title: "OpenTelemetry Docs",
    url: "https://opentelemetry.io/docs/",
    description: "Official OpenTelemetry documentation."
  },
  {
    id: "backstage",
    category: "Developer Portal",
    title: "Backstage",
    url: "https://backstage.io/",
    description: "Open source framework for building developer portals."
  },
  {
    id: "terraform",
    category: "Infrastructure as Code",
    title: "Terraform Tutorials",
    url: "https://developer.hashicorp.com/terraform/tutorials",
    description: "Official Terraform tutorials."
  }
];
