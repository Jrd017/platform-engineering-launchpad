import type { Priority } from "./types";

export type FreeCertification = {
  id: string;
  title: string;
  provider: string;
  link: string;
  why: string;
};

export type PaidCertification = {
  id: string;
  title: string;
  costStatus: string;
  priority: Priority;
  prerequisites: string;
  whenToTake: string;
  skillsCovered: string[];
  link: string;
};

export const freeCertifications: FreeCertification[] = [
  {
    id: "cisco-networking-basics",
    title: "Cisco Networking Basics",
    provider: "Cisco Networking Academy",
    link: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
    why: "Networking fundamentals make Docker, Kubernetes, HTTP, DNS, and ports easier to reason about."
  },
  {
    id: "cisco-linux-unhatched",
    title: "Cisco Linux Unhatched",
    provider: "Cisco Networking Academy",
    link: "https://www.netacad.com/courses/linux-unhatched",
    why: "Linux is the operating system foundation behind most platform and backend environments."
  },
  {
    id: "aws-educate-cloud-101",
    title: "AWS Educate Cloud Computing 101",
    provider: "AWS Educate",
    link: "https://aws.amazon.com/education/awseducate/",
    why: "Shows that you understand cloud basics before deeper DevOps and platform topics."
  },
  {
    id: "aws-educate-compute",
    title: "AWS Educate Getting Started with Compute",
    provider: "AWS Educate",
    link: "https://aws.amazon.com/education/awseducate/",
    why: "Compute is the base layer for deployments, containers, and cloud application hosting."
  },
  {
    id: "aws-educate-storage",
    title: "AWS Educate Getting Started with Storage",
    provider: "AWS Educate",
    link: "https://aws.amazon.com/education/awseducate/",
    why: "Storage knowledge helps with persistence, artifacts, logs, databases, and backups."
  },
  {
    id: "aws-educate-networking",
    title: "AWS Educate Getting Started with Networking",
    provider: "AWS Educate",
    link: "https://aws.amazon.com/education/awseducate/",
    why: "Cloud networking connects directly to VPCs, load balancers, services, and deployment design."
  },
  {
    id: "aws-educate-security",
    title: "AWS Educate Getting Started with Security",
    provider: "AWS Educate",
    link: "https://aws.amazon.com/education/awseducate/",
    why: "Security basics keep your future platform projects credible and responsible."
  },
  {
    id: "google-skills",
    title: "Google Skills skill badges",
    provider: "Google Skills",
    link: "https://www.skills.google/",
    why: "Skill badges are quick public signals that you are practicing cloud concepts."
  },
  {
    id: "linux-foundation-kubernetes",
    title: "Linux Foundation Introduction to Kubernetes",
    provider: "The Linux Foundation",
    link: "https://training.linuxfoundation.org/training/introduction-to-kubernetes/",
    why: "Kubernetes basics are central to platform engineering."
  },
  {
    id: "great-learning-devops",
    title: "Great Learning Introduction to DevOps",
    provider: "Great Learning",
    link: "https://www.mygreatlearning.com/academy",
    why: "A beginner-friendly DevOps overview helps connect CI/CD, automation, and operations."
  },
  {
    id: "great-learning-docker",
    title: "Great Learning Docker",
    provider: "Great Learning",
    link: "https://www.mygreatlearning.com/academy",
    why: "Docker practice gives you the fastest path from backend project to deployable artifact."
  },
  {
    id: "simplilearn-kubernetes",
    title: "Simplilearn Kubernetes free course, if certificate is available",
    provider: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-free-online-courses",
    why: "Use it only if the free certificate path is available when you register."
  },
  {
    id: "oracle-oci-foundations",
    title: "Oracle OCI Foundations, only if exam is still free when registering",
    provider: "Oracle",
    link: "https://education.oracle.com/oracle-cloud-infrastructure-certification",
    why: "Treat this as optional cloud signal and verify the current exam price before committing."
  }
];

export const paidCertifications: PaidCertification[] = [
  {
    id: "cnpa",
    title: "CNPA, Certified Cloud Native Platform Engineering Associate",
    costStatus: "Paid or scheduled exam fee",
    priority: "Highest",
    prerequisites: "Platform engineering fundamentals, Kubernetes basics, CI/CD, and developer platform concepts.",
    whenToTake: "After ForgePanel v1 and the Platform Engineering Lab have visible documentation.",
    skillsCovered: ["Platform engineering", "Developer experience", "Cloud native foundations", "Golden paths"],
    link: "https://www.cncf.io/training/certification/cnpa/"
  },
  {
    id: "kcna",
    title: "KCNA, Kubernetes and Cloud Native Associate",
    costStatus: "Paid exam",
    priority: "High",
    prerequisites: "Kubernetes objects, containers, cloud native ecosystem, and basic security.",
    whenToTake: "After finishing Kubernetes phase and a small cluster lab.",
    skillsCovered: ["Kubernetes", "Containers", "Cloud native architecture", "Observability"],
    link: "https://www.cncf.io/training/certification/kcna/"
  },
  {
    id: "terraform-associate",
    title: "Terraform Associate",
    costStatus: "Paid exam",
    priority: "High",
    prerequisites: "Terraform basics, state, providers, variables, modules, plan, and apply.",
    whenToTake: "After writing Terraform for the Platform Engineering Lab.",
    skillsCovered: ["Infrastructure as Code", "Terraform workflow", "State", "Modules"],
    link: "https://developer.hashicorp.com/certifications/infrastructure-automation"
  },
  {
    id: "cgoa",
    title: "CGOA, GitOps Certified Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "GitOps concepts, Kubernetes, Argo CD or Flux basics.",
    whenToTake: "After deploying a lab app with Argo CD or Flux.",
    skillsCovered: ["GitOps", "Desired state", "Continuous delivery", "Kubernetes deployments"],
    link: "https://www.cncf.io/training/certification/cgoa/"
  },
  {
    id: "pca",
    title: "PCA, Prometheus Certified Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "Metrics, PromQL basics, alerts, exporters, and dashboards.",
    whenToTake: "After adding Prometheus and Grafana notes to your lab.",
    skillsCovered: ["Prometheus", "Metrics", "Alerting", "Monitoring"],
    link: "https://www.cncf.io/training/certification/pca/"
  },
  {
    id: "otca",
    title: "OTCA, OpenTelemetry Certified Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "Traces, metrics, logs, instrumentation, and collectors.",
    whenToTake: "After instrumenting a demo app with OpenTelemetry.",
    skillsCovered: ["OpenTelemetry", "Tracing", "Metrics", "Logs"],
    link: "https://www.cncf.io/training/certification/otca/"
  },
  {
    id: "cba",
    title: "CBA, Certified Backstage Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "Backstage basics, software catalog, templates, plugins, and developer portal concepts.",
    whenToTake: "After building a small developer portal prototype.",
    skillsCovered: ["Backstage", "Service catalog", "Templates", "Developer portals"],
    link: "https://www.cncf.io/training/certification/cba/"
  },
  {
    id: "kcsa",
    title: "KCSA, Kubernetes and Cloud Native Security Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "Kubernetes security, RBAC, network policies, image security, and secrets.",
    whenToTake: "After finishing the security phase and hardening a lab deployment.",
    skillsCovered: ["Kubernetes security", "RBAC", "Network policies", "Supply chain security"],
    link: "https://www.cncf.io/training/certification/kcsa/"
  },
  {
    id: "cnpe",
    title: "CNPE, Certified Cloud Native Platform Engineer",
    costStatus: "Paid professional-level exam",
    priority: "Highest",
    prerequisites: "Strong platform lab, Kubernetes, GitOps, observability, developer platform concepts.",
    whenToTake: "Later, after internship proof or a mature platform project.",
    skillsCovered: ["Platform engineering", "Cloud native systems", "Developer experience", "Operations"],
    link: "https://www.cncf.io/training/certification/"
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "Cloud concepts, billing, security basics, and AWS core services.",
    whenToTake: "After free AWS Educate courses and a simple AWS project.",
    skillsCovered: ["AWS foundations", "Cloud concepts", "Security", "Billing"],
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    id: "aws-cloudops-engineer",
    title: "AWS CloudOps Engineer Associate",
    costStatus: "Paid exam",
    priority: "Medium",
    prerequisites: "AWS operations, monitoring, networking, deployments, and automation.",
    whenToTake: "After hands-on AWS operations practice.",
    skillsCovered: ["AWS operations", "Monitoring", "Deployment", "Automation"],
    link: "https://aws.amazon.com/certification/"
  },
  {
    id: "aws-devops-professional",
    title: "AWS DevOps Engineer Professional",
    costStatus: "Paid professional-level exam",
    priority: "Low",
    prerequisites: "Real AWS CI/CD, operations, automation, security, and incident experience.",
    whenToTake: "Much later, after real cloud operations exposure.",
    skillsCovered: ["AWS DevOps", "CI/CD", "Operations", "Automation"],
    link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
  },
  {
    id: "az-900",
    title: "Azure Fundamentals AZ-900",
    costStatus: "Paid exam",
    priority: "Low",
    prerequisites: "Cloud basics and Azure service categories.",
    whenToTake: "Optional, if Azure becomes relevant to internships.",
    skillsCovered: ["Azure foundations", "Cloud concepts", "Security", "Pricing"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
  },
  {
    id: "az-400",
    title: "Azure DevOps Engineer Expert AZ-400",
    costStatus: "Paid expert-level exam",
    priority: "Low",
    prerequisites: "Azure DevOps, CI/CD, repos, testing, security, and monitoring.",
    whenToTake: "Only after substantial Azure DevOps experience.",
    skillsCovered: ["Azure DevOps", "Pipelines", "Repos", "Monitoring"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/"
  },
  {
    id: "google-ace",
    title: "Google Associate Cloud Engineer",
    costStatus: "Paid exam",
    priority: "Low",
    prerequisites: "Google Cloud basics, IAM, compute, networking, and storage.",
    whenToTake: "If Google Cloud becomes a target platform.",
    skillsCovered: ["Google Cloud", "IAM", "Compute", "Networking"],
    link: "https://cloud.google.com/learn/certification/cloud-engineer"
  },
  {
    id: "google-devops",
    title: "Google Professional Cloud DevOps Engineer",
    costStatus: "Paid professional-level exam",
    priority: "Low",
    prerequisites: "Google Cloud operations, SRE, CI/CD, monitoring, and incident response.",
    whenToTake: "Later, after real GCP platform practice.",
    skillsCovered: ["Google Cloud DevOps", "SRE", "Monitoring", "CI/CD"],
    link: "https://cloud.google.com/learn/certification/cloud-devops-engineer"
  }
];
