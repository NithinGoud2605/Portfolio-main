/*
  Skill groups for the portfolio skills section.
  1. programmingLanguages
  2. frameworks
  3. aiMlFrameworks
  4. dataStreaming
  5. cloudDevOpsTools
*/

// 1️⃣  Languages
export const programmingLanguages = [
  { name: 'java', file: 'java.svg', display: 'Java' },
  { name: 'cpp', file: 'c++.svg', display: 'C++' },
  { name: 'python', file: 'python.svg', display: 'Python' },
  { name: 'javascript', file: 'javascript.svg', display: 'JavaScript/TypeScript' },
  { name: 'csharp', file: 'csharp.svg', display: 'C#' },
  { name: 'sql', file: 'mysql.svg', display: 'SQL' },
];

// 2️⃣  Frameworks & Libraries
export const frameworks = [
  { name: 'springboot', file: 'springboot.svg', display: 'Spring Boot' },
  { name: 'django', file: 'django.svg', display: 'Django' },
  { name: 'flask', file: 'flask.svg', display: 'Flask' },
  { name: 'fastapi', file: 'fastapi.svg', display: 'FastAPI' },
  { name: 'react', file: 'react.svg', display: 'React' },
  { name: 'nextjs', file: 'nextjs.svg', display: 'Next.js' },
  { name: 'nodejs', file: 'nodejs.svg', display: 'Node.js' },
  { name: 'langchain', file: 'langchain.svg', display: 'LangChain' },
  { name: 'unity', file: 'Unity.svg', display: 'Unity' },
];

// 3️⃣  AI/ML Frameworks
export const aiMlFrameworks = [
  { name: 'scikit-learn', file: 'scikit-learn.svg', display: 'Scikit-learn' },
  { name: 'xgboost', file: 'xgboost.svg', display: 'XGBoost' },
  { name: 'pytorch', file: 'pytorch.svg', display: 'PyTorch' },
  { name: 'tensorflow', file: 'tensorflow.svg', display: 'TensorFlow' },
  { name: 'rag', file: 'langchain.svg', display: 'RAG' },
  { name: 'llm', file: 'langchain.svg', display: 'LLM Integrations' },
];

// 4️⃣  Data & Streaming
export const dataStreaming = [
  { name: 'kafka', file: 'kafka.svg', display: 'Apache Kafka' },
  { name: 'rest', file: 'rest.svg', display: 'REST' },
  { name: 'graphql', file: 'graphql.svg', display: 'GraphQL' },
  { name: 'redis', file: 'redis.svg', display: 'Redis' },
  { name: 'postgresql', file: 'postgresql.svg', display: 'PostgreSQL' },
  { name: 'mysql', file: 'mysql.svg', display: 'MySQL' },
  { name: 'mongodb', file: 'mongodb.svg', display: 'MongoDB' },
];

// 5️⃣  Cloud, DevOps & Tools
export const cloudDevOpsTools = [
  { name: 'aws', file: 'aws.svg', display: 'AWS' },
  { name: 'docker', file: 'docker.svg', display: 'Docker' },
  { name: 'kubernetes', file: 'kubernetes.svg', display: 'Kubernetes' },
  { name: 'jenkins', file: 'jenkins.svg', display: 'Jenkins' },
  { name: 'terraform', file: 'terraform.svg', display: 'Terraform' },
  { name: 'prometheus', file: 'prometheus.svg', display: 'Prometheus' },
  { name: 'git', file: 'git.svg', display: 'Git' },
  { name: 'github', file: 'Github.svg', display: 'GitHub' },
  { name: 'gitlab', file: 'gitlab.svg', display: 'GitLab' },
  { name: 'vscode', file: 'visual-studio-code.svg', display: 'VS Code' },
  { name: 'pycharm', file: 'pycharm.svg', display: 'PyCharm' },
  { name: 'postman', file: 'postman.svg', display: 'Postman' },
  { name: 'jira', file: 'jira.svg', display: 'JIRA' },
];

// Master list used by floating-logo field
export const logos = [
  ...programmingLanguages,
  ...frameworks,
  ...aiMlFrameworks,
  ...dataStreaming,
  ...cloudDevOpsTools,
];
