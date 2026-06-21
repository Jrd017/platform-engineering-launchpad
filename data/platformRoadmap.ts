import type { Difficulty } from "./types";

export type PlatformTopic = {
  id: string;
  title: string;
  explanation: string;
  link: string;
  difficulty: Difficulty;
  estimatedTime: string;
};

export type PlatformPhase = {
  id: string;
  title: string;
  summary: string;
  topics: PlatformTopic[];
};

export const platformRoadmap: PlatformPhase[] = [
  {
    id: "foundations",
    title: "Phase 1. Foundations",
    summary: "Get comfortable with the tools and protocols that every platform stack sits on.",
    topics: [
      {
        id: "linux-basics",
        title: "Linux basics",
        explanation: "Understand files, processes, permissions, packages, and services.",
        link: "https://www.netacad.com/courses/linux-unhatched",
        difficulty: "Beginner",
        estimatedTime: "6 hours"
      },
      {
        id: "terminal-commands",
        title: "Terminal commands",
        explanation: "Move confidently through the command line and inspect systems without a GUI.",
        link: "https://www.netacad.com/courses/linux-unhatched",
        difficulty: "Beginner",
        estimatedTime: "4 hours"
      },
      {
        id: "git-github",
        title: "Git and GitHub",
        explanation: "Use branches, commits, pull requests, issues, and readable project history.",
        link: "https://docs.github.com/en/get-started",
        difficulty: "Beginner",
        estimatedTime: "5 hours"
      },
      {
        id: "networking-basics",
        title: "Networking basics",
        explanation: "Learn how services communicate over networks.",
        link: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
        difficulty: "Beginner",
        estimatedTime: "8 hours"
      },
      {
        id: "http-dns-ip-ports",
        title: "HTTP, DNS, IP, ports",
        explanation: "Connect web requests to the infrastructure that serves them.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics",
        difficulty: "Beginner",
        estimatedTime: "4 hours"
      },
      {
        id: "yaml-json",
        title: "YAML and JSON",
        explanation: "Read and write configuration files used across cloud-native tooling.",
        link: "https://yaml.org/spec/",
        difficulty: "Beginner",
        estimatedTime: "2 hours"
      },
      {
        id: "bash-scripting",
        title: "Bash scripting",
        explanation: "Automate repeatable tasks and glue tools together.",
        link: "https://www.gnu.org/software/bash/manual/bash.html",
        difficulty: "Intermediate",
        estimatedTime: "6 hours"
      },
      {
        id: "python-basics",
        title: "Python basics",
        explanation: "Use Python for scripts, tooling, APIs, and automation.",
        link: "https://docs.python.org/3/tutorial/",
        difficulty: "Beginner",
        estimatedTime: "8 hours"
      }
    ]
  },
  {
    id: "containers",
    title: "Phase 2. Containers",
    summary: "Package applications so they run consistently across machines.",
    topics: [
      {
        id: "docker-images",
        title: "Docker images",
        explanation: "Understand immutable application packages and image layers.",
        link: "https://docs.docker.com/get-started/",
        difficulty: "Beginner",
        estimatedTime: "3 hours"
      },
      {
        id: "dockerfiles",
        title: "Dockerfiles",
        explanation: "Write repeatable build instructions for container images.",
        link: "https://docs.docker.com/reference/dockerfile/",
        difficulty: "Intermediate",
        estimatedTime: "4 hours"
      },
      {
        id: "containers",
        title: "Containers",
        explanation: "Run isolated app processes and inspect their lifecycle.",
        link: "https://docs.docker.com/get-started/",
        difficulty: "Beginner",
        estimatedTime: "4 hours"
      },
      {
        id: "volumes",
        title: "Volumes",
        explanation: "Persist container data and understand storage boundaries.",
        link: "https://docs.docker.com/storage/volumes/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "networks",
        title: "Networks",
        explanation: "Connect containers and expose services safely.",
        link: "https://docs.docker.com/network/",
        difficulty: "Intermediate",
        estimatedTime: "4 hours"
      },
      {
        id: "docker-compose",
        title: "Docker Compose",
        explanation: "Run multi-service local environments from one YAML file.",
        link: "https://docs.docker.com/compose/",
        difficulty: "Intermediate",
        estimatedTime: "5 hours"
      }
    ]
  },
  {
    id: "ci-cd",
    title: "Phase 3. CI/CD",
    summary: "Turn every push into a repeatable quality and delivery pipeline.",
    topics: [
      {
        id: "github-actions",
        title: "GitHub Actions",
        explanation: "Create workflows triggered by commits, pull requests, and releases.",
        link: "https://docs.github.com/actions",
        difficulty: "Beginner",
        estimatedTime: "5 hours"
      },
      {
        id: "build-pipeline",
        title: "Build pipeline",
        explanation: "Install dependencies and create production-ready artifacts.",
        link: "https://docs.github.com/actions/automating-builds-and-tests",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "test-pipeline",
        title: "Test pipeline",
        explanation: "Run tests automatically so regressions are caught early.",
        link: "https://docs.github.com/actions/automating-builds-and-tests",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "linting",
        title: "Linting",
        explanation: "Automate style and quality checks.",
        link: "https://docs.github.com/actions/automating-builds-and-tests",
        difficulty: "Beginner",
        estimatedTime: "2 hours"
      },
      {
        id: "secrets",
        title: "Secrets",
        explanation: "Store sensitive values outside source code.",
        link: "https://docs.github.com/actions/security-guides/using-secrets-in-github-actions",
        difficulty: "Intermediate",
        estimatedTime: "2 hours"
      },
      {
        id: "artifacts",
        title: "Artifacts",
        explanation: "Save pipeline outputs for review, deployment, or debugging.",
        link: "https://docs.github.com/actions/using-workflows/storing-workflow-data-as-artifacts",
        difficulty: "Intermediate",
        estimatedTime: "2 hours"
      },
      {
        id: "deployment-pipeline",
        title: "Deployment pipeline",
        explanation: "Move builds toward an environment in a controlled way.",
        link: "https://docs.github.com/actions/deployment",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      }
    ]
  },
  {
    id: "kubernetes",
    title: "Phase 4. Kubernetes",
    summary: "Learn the building blocks of orchestrated application platforms.",
    topics: [
      {
        id: "pods",
        title: "Pods",
        explanation: "Understand the smallest deployable unit in Kubernetes.",
        link: "https://kubernetes.io/docs/concepts/workloads/pods/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "deployments",
        title: "Deployments",
        explanation: "Manage replicated app workloads and rolling updates.",
        link: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
        difficulty: "Intermediate",
        estimatedTime: "4 hours"
      },
      {
        id: "services",
        title: "Services",
        explanation: "Give workloads stable networking inside the cluster.",
        link: "https://kubernetes.io/docs/concepts/services-networking/service/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "configmaps",
        title: "ConfigMaps",
        explanation: "Store non-sensitive configuration for apps.",
        link: "https://kubernetes.io/docs/concepts/configuration/configmap/",
        difficulty: "Intermediate",
        estimatedTime: "2 hours"
      },
      {
        id: "kubernetes-secrets",
        title: "Secrets",
        explanation: "Handle sensitive application configuration.",
        link: "https://kubernetes.io/docs/concepts/configuration/secret/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "namespaces",
        title: "Namespaces",
        explanation: "Separate resources and organize cluster environments.",
        link: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
        difficulty: "Intermediate",
        estimatedTime: "2 hours"
      },
      {
        id: "ingress",
        title: "Ingress",
        explanation: "Route external traffic to services.",
        link: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "helm-basics",
        title: "Helm basics",
        explanation: "Package Kubernetes resources into reusable charts.",
        link: "https://helm.sh/docs/intro/using_helm/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "kubectl",
        title: "kubectl",
        explanation: "Inspect and control Kubernetes resources from the terminal.",
        link: "https://kubernetes.io/docs/reference/kubectl/",
        difficulty: "Intermediate",
        estimatedTime: "4 hours"
      }
    ]
  },
  {
    id: "iac",
    title: "Phase 5. Infrastructure as Code",
    summary: "Represent infrastructure in code so it can be reviewed, repeated, and versioned.",
    topics: [
      {
        id: "terraform",
        title: "Terraform",
        explanation: "Use declarative configuration to manage cloud and platform resources.",
        link: "https://developer.hashicorp.com/terraform/tutorials",
        difficulty: "Intermediate",
        estimatedTime: "8 hours"
      },
      {
        id: "providers",
        title: "Providers",
        explanation: "Connect Terraform to cloud services, SaaS APIs, and infrastructure targets.",
        link: "https://developer.hashicorp.com/terraform/language/providers",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "variables",
        title: "Variables",
        explanation: "Parameterize configurations for reuse.",
        link: "https://developer.hashicorp.com/terraform/language/values/variables",
        difficulty: "Beginner",
        estimatedTime: "2 hours"
      },
      {
        id: "outputs",
        title: "Outputs",
        explanation: "Expose useful values after infrastructure changes.",
        link: "https://developer.hashicorp.com/terraform/language/values/outputs",
        difficulty: "Beginner",
        estimatedTime: "2 hours"
      },
      {
        id: "state",
        title: "State",
        explanation: "Understand how Terraform tracks resources.",
        link: "https://developer.hashicorp.com/terraform/language/state",
        difficulty: "Advanced",
        estimatedTime: "4 hours"
      },
      {
        id: "modules",
        title: "Modules",
        explanation: "Create reusable infrastructure building blocks.",
        link: "https://developer.hashicorp.com/terraform/language/modules",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "plan-apply",
        title: "Plan and apply",
        explanation: "Preview and execute infrastructure changes with discipline.",
        link: "https://developer.hashicorp.com/terraform/cli/commands/plan",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      }
    ]
  },
  {
    id: "gitops",
    title: "Phase 6. GitOps",
    summary: "Let Git describe what should be running, then reconcile systems to match it.",
    topics: [
      {
        id: "git-source-of-truth",
        title: "Git as source of truth",
        explanation: "Use repository state as the source for environments.",
        link: "https://opengitops.dev/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "desired-state",
        title: "Desired state",
        explanation: "Define the target system state and reconcile drift.",
        link: "https://opengitops.dev/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "argo-cd",
        title: "Argo CD",
        explanation: "Deploy Kubernetes apps using GitOps workflows.",
        link: "https://argoproj.github.io/cd/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      },
      {
        id: "flux",
        title: "Flux",
        explanation: "Explore another popular GitOps controller.",
        link: "https://fluxcd.io/flux/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "pull-based-deployment",
        title: "Pull-based deployment",
        explanation: "Understand why agents pulling desired state can reduce deployment risk.",
        link: "https://opengitops.dev/",
        difficulty: "Advanced",
        estimatedTime: "3 hours"
      }
    ]
  },
  {
    id: "observability",
    title: "Phase 7. Observability",
    summary: "Make systems understandable when they are healthy and when they fail.",
    topics: [
      {
        id: "metrics",
        title: "Metrics",
        explanation: "Track numerical signals over time.",
        link: "https://prometheus.io/docs/introduction/overview/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "logs",
        title: "Logs",
        explanation: "Capture events and messages for debugging.",
        link: "https://opentelemetry.io/docs/concepts/signals/logs/",
        difficulty: "Beginner",
        estimatedTime: "2 hours"
      },
      {
        id: "traces",
        title: "Traces",
        explanation: "Follow requests through distributed systems.",
        link: "https://opentelemetry.io/docs/concepts/signals/traces/",
        difficulty: "Advanced",
        estimatedTime: "4 hours"
      },
      {
        id: "prometheus",
        title: "Prometheus",
        explanation: "Collect and query time-series metrics.",
        link: "https://prometheus.io/docs/introduction/overview/",
        difficulty: "Intermediate",
        estimatedTime: "5 hours"
      },
      {
        id: "grafana",
        title: "Grafana",
        explanation: "Build dashboards that turn metrics into readable signals.",
        link: "https://grafana.com/docs/grafana/latest/",
        difficulty: "Intermediate",
        estimatedTime: "4 hours"
      },
      {
        id: "opentelemetry",
        title: "OpenTelemetry",
        explanation: "Instrument applications with vendor-neutral telemetry.",
        link: "https://opentelemetry.io/docs/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      },
      {
        id: "alerts",
        title: "Alerts",
        explanation: "Notify people when important system signals cross thresholds.",
        link: "https://prometheus.io/docs/alerting/latest/overview/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "sli-slo-sla",
        title: "SLI, SLO, SLA",
        explanation: "Define service reliability targets and commitments.",
        link: "https://sre.google/sre-book/service-level-objectives/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      }
    ]
  },
  {
    id: "security",
    title: "Phase 8. Security",
    summary: "Build platforms that protect users, secrets, workloads, and teams.",
    topics: [
      {
        id: "rbac",
        title: "RBAC",
        explanation: "Control who can do what in a system.",
        link: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
        difficulty: "Advanced",
        estimatedTime: "4 hours"
      },
      {
        id: "secrets-management",
        title: "Secrets management",
        explanation: "Keep credentials controlled, rotated, and outside source code.",
        link: "https://kubernetes.io/docs/concepts/configuration/secret/",
        difficulty: "Advanced",
        estimatedTime: "4 hours"
      },
      {
        id: "image-scanning",
        title: "Image scanning",
        explanation: "Find vulnerable packages in container images.",
        link: "https://docs.docker.com/scout/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "least-privilege",
        title: "Least privilege",
        explanation: "Give services and people only the access they need.",
        link: "https://kubernetes.io/docs/concepts/security/",
        difficulty: "Intermediate",
        estimatedTime: "3 hours"
      },
      {
        id: "network-policies",
        title: "Network policies",
        explanation: "Restrict traffic between workloads.",
        link: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "kubernetes-security",
        title: "Kubernetes security",
        explanation: "Apply cluster hardening and workload security practices.",
        link: "https://kubernetes.io/docs/concepts/security/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      }
    ]
  },
  {
    id: "idp",
    title: "Phase 9. Internal Developer Platform",
    summary: "Create self-service paths that help developers ship without waiting on manual ops.",
    topics: [
      {
        id: "developer-portal",
        title: "Developer portal",
        explanation: "Create a central place for services, docs, actions, and ownership.",
        link: "https://backstage.io/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      },
      {
        id: "service-catalog",
        title: "Service catalog",
        explanation: "Track services, owners, lifecycle, and dependencies.",
        link: "https://backstage.io/docs/features/software-catalog/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "golden-paths",
        title: "Golden paths",
        explanation: "Define recommended routes for common developer tasks.",
        link: "https://platformengineering.org/golden-paths",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "templates",
        title: "Templates",
        explanation: "Generate new services with consistent defaults.",
        link: "https://backstage.io/docs/features/software-templates/",
        difficulty: "Advanced",
        estimatedTime: "5 hours"
      },
      {
        id: "self-service-deployment",
        title: "Self-service deployment",
        explanation: "Let teams deploy approved apps through a controlled interface.",
        link: "https://backstage.io/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      },
      {
        id: "platform-apis",
        title: "Platform APIs",
        explanation: "Expose platform capabilities through reusable APIs.",
        link: "https://backstage.io/docs/plugins/",
        difficulty: "Advanced",
        estimatedTime: "6 hours"
      },
      {
        id: "backstage",
        title: "Backstage",
        explanation: "Explore the most visible open source developer portal framework.",
        link: "https://backstage.io/",
        difficulty: "Advanced",
        estimatedTime: "8 hours"
      }
    ]
  }
];
