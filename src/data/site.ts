// All the site's content lives here, so updates don't need touching layout code.
// Logos: drop files into public/logos/ and set `logo` below. No file = initials placeholder.

export const roles = [
  {
    role: 'Solutions Architect (Pre-Sales)',
    company: 'MiPhi Semiconductors',
    note: 'Micromax x Phison JV',
    dates: 'Feb 2026 → Present',
    logo: 'logos/miphi-mark.png' as string | undefined,
    points: [
      'Solutions architect for all AI deals, working with multiple channel and SI partners: own technical discovery, system and cluster design, BoQ, client clarifications and end-to-end deployment across 30+ enterprise, education and government proposals.',
      'Designed and deployed ~INR 2 Cr of GPU clusters in the first 9 months: highly available on-prem Kubernetes clusters capable of running models up to 70B parameters, covering power, cooling, SLA, security and acceptance testing.',
      'Modelled cloud vs on-prem TCO, showing clients where on-prem breaks even against cloud; proposed on-prem solutions as an alternative to USD 15-20K a month of LLM API spend for a coding-agent rollout serving thousands of users.',
      "Sized GPU platforms for LLM inference and fine-tuning: audited the company's capacity model, fixed multiple errors and rebuilt it across dozens of configurations; produced and presented client-facing concurrency analysis across model classes.",
      'Presented solution decks with commercial options to an automotive OEM; built vendor-neutral BoMs for defence and government organisations across AI data centre RFQs and government AI tenders.',
      'Led a 12-deliverable go-to-market package for an in-house agentic AI application and acted as authority on its commercials: licensing, margins, discount ceilings and TCO against competitors.',
      'Project manager of a 7-member AI product team, running daily scrums, assigning and tracking Jira tickets, and acting as the communication line between the team and upper management.',
      'Program-managed an AI/HPC server program end to end, coordinating a government R&D lab and a global EMS partner from initial scoping through to final quotation.',
    ],
    tags: ['AI solution architecture', 'GPU cluster design', 'LLM inference sizing', 'TCO modelling', 'Pre-sales', 'Program management'],
  },
  {
    role: 'DevOps & Platform Engineer',
    company: 'Osfin.ai',
    dates: 'Jun 2025 → Jan 2026',
    logo: 'logos/osfin.svg' as string | undefined,
    points: [
      'Set up and owned Jenkins CI/CD on 8 dedicated Kubernetes nodes, then migrated it from Azure to AWS with zero downtime and no data loss; cut build failures by ~30%.',
      'Co-managed production, UAT and development infrastructure on 2 Amazon EKS clusters (~16 worker nodes each); modular Terraform IaC (IRSA, managed node groups, workload isolation) cut provisioning time by ~40%.',
      'Cut CI compute cost by ~60% with containerised agents; built AWS cost dashboards from CUR data and firewall visibility across AWS and OCI.',
      'Automated multi-cloud operations with Jenkins, n8n and Python, and packaged deployments with Helm and ArgoCD, saving 6+ engineer-hours a week.',
    ],
    tags: ['Amazon EKS', 'Terraform', 'Jenkins', 'Helm', 'ArgoCD', 'FinOps'],
  },
  {
    role: 'Co-Op Intern, Generative AI',
    company: 'AMD India',
    dates: 'Jul 2024 → Jun 2025',
    logo: 'logos/amd.svg' as string | undefined,
    points: [
      'Co-built a one-click LLM fine-tuning platform (model and dataset selection, live GPU and loss dashboards, automated evaluation) that AMD adopted into its internal tooling; orchestrated training pipelines on Kubernetes.',
      'Fine-tuned Llama 2 class models for Hindi, Odia and Tamil; quantisation improved inference efficiency by ~20% on low-resource GPUs.',
    ],
    tags: ['LLM fine-tuning', 'Quantisation', 'Kubernetes', 'MLOps'],
  },
  {
    role: 'Trainee',
    company: 'Corizo',
    dates: 'May 2023 → Jul 2023',
    logo: 'logos/corizo-mark.png' as string | undefined,
    points: [
      'Designed a highly available multi-tier AWS architecture (EC2, RDS, S3, auto scaling, load balancing) with Lambda automation and CloudWatch alerting.',
    ],
    tags: ['AWS', 'Serverless', 'Monitoring'],
  },
];export const education = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    school: 'KIIT University',
    detail: 'CGPA 9.31 / 10 · Bhubaneswar, Odisha',
    dates: '2021 → 2025',
    logo: 'logos/kiit.png' as string | undefined,
  },
];export const stats = [
  { count: 30, prefix: '', suffix: '+', label: 'enterprise, education and government proposals' },
  { count: 2, prefix: '~INR ', suffix: ' Cr', label: 'of GPU clusters designed and deployed in my first 9 months' },
  { count: 60, prefix: '', suffix: '%', label: 'lower CI compute cost with containerised agents' },
  { count: 40, prefix: '', suffix: '%', label: 'less time to provision EKS clusters with Terraform' },
];export const skills = [
  {
    group: 'AI & GPU Infrastructure',
    items: ['Cluster design and sizing', 'LLM inference and fine-tuning', 'vLLM', 'Quantisation', 'KV-cache offloading', 'RAG', 'Agentic AI'],
  },
  {
    group: 'Cloud & Platform',
    items: ['AWS', 'Azure', 'OCI', 'Kubernetes', 'Helm', 'Terraform', 'Jenkins', 'Docker', 'ArgoCD', 'Python', 'Shell'],
  },
  {
    group: 'Pre-Sales & Delivery',
    items: ['Technical discovery', 'Solution design', 'TCO and pricing', 'BoM / BoQ', 'RFQ and government tenders'],
  },
  {
    group: 'Team & Programs',
    items: ['Team management', 'Partner management', 'Program management', 'Jira', 'Scrum'],
  },
];// `url` = link to the verifiable certificate (Credly, Google Skills Boost, etc.). Empty until provided.
export const certifications = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: 'Oct 2025', url: 'https://www.credly.com/badges/be953941-2c3f-4951-a19d-eb088fc9f0bb', logo: 'logos/aws.svg' as string | undefined },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Sep 2025', url: 'https://www.credly.com/badges/8a358dda-1e42-4975-933d-147845d4ab4c', logo: 'logos/aws.svg' as string | undefined },
  { name: 'Academy Accreditation: AWS Databricks Platform Architect', issuer: 'Databricks', date: 'Feb 2025', url: 'https://credentials.databricks.com/41c49931-cf82-4447-b3d2-8bec8a6f08be', logo: 'logos/databricks.svg' as string | undefined },
  { name: 'Docker Foundations Professional Certificate', issuer: 'Docker · LinkedIn Learning', date: 'May 2025', url: 'https://www.linkedin.com/learning/certificates/3ffa9a9a781afb28fd5286f483a6762d193284cb411073ee8b07774ae3f47d55', logo: 'logos/docker.svg' as string | undefined },
  { name: 'Career Essentials in GitHub Professional Certificate', issuer: 'GitHub · LinkedIn Learning', date: 'May 2025', url: 'https://www.linkedin.com/learning/certificates/1d799bbafb1dda40fb4394cbec4b6be12e7347e1a47207de44c7a94a9f532cc0', logo: 'logos/github.svg' as string | undefined },
  { name: 'McKinsey.org Forward Program', issuer: 'McKinsey.org', date: 'Jul 2025', url: 'https://www.credly.com/badges/130caad1-929e-4fba-8c38-5a4ad2650aad', logo: 'logos/mckinsey.svg' as string | undefined },
];

export const events = [
  { name: 'Convergence India', logo: 'logos/convergence.png' as string | undefined, dark: true },
  { name: 'UP International Trade Show (UPITS)', logo: 'logos/upits.png' as string | undefined, dark: false },
  { name: 'Bengaluru Tech Summit', logo: 'logos/bts.png' as string | undefined, dark: false },
];

// Blog posts and personal projects. No `url` = shown as a "coming soon" card.
export const blogs = [
  {
    kind: 'blog',
    date: 'Nov 2026',
    title: 'From 200 users to a bill of materials for a Private LLM server',
    subtitle: 'How many users a GPU server really serves, and why memory alone gives the wrong answer.',
    url: 'https://medium.com/@jha.aditya17/from-200-users-to-a-bill-of-materials-for-a-private-llm-server-6db1ae0d49e8',
  },
  {
    kind: 'blog',
    date: 'Apr 2026',
    title: 'The Model Is Not the Problem. The System Around It Is.',
    subtitle: 'What nobody tells you about running GenAI at scale.',
    url: 'https://medium.com/towards-artificial-intelligence/the-model-is-not-the-problem-the-system-around-it-is-34c4fe243692',
  },
  {
    kind: 'blog',
    date: 'Apr 2026',
    title: 'Stop Defaulting to Rolling Updates: 6 Kubernetes Deployment Strategies Explained',
    subtitle: 'Deploying software is about how safely and deliberately you roll it out.',
    url: 'https://medium.com/towards-artificial-intelligence/stop-defaulting-to-rolling-updates-6-kubernetes-deployment-strategies-explained-f5063e01afb2',
  },
  {
    kind: 'blog',
    date: 'Mar 2026',
    title: 'Understanding the Real AI Stack Beyond LLM APIs',
    subtitle: 'Calling an LLM API is not an architecture. Here is what actually is.',
    url: 'https://medium.com/towards-artificial-intelligence/understanding-the-real-ai-stack-beyond-llm-apis-d8f6fb77443c',
  },
];
