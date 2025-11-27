import { Section } from "./section";

export const MermaidDemo = () => {
  const mermaidExample = `Interactive diagram rendering with manual control. Use the fullscreen, download, and copy buttons to interact with any Mermaid diagram.

## Simple Flowchart

\`\`\`mermaid
flowchart LR
    A[新用户阶段<br>关注易用性] --> B[过渡期<br>学习数据库概念] --> C[熟练用户<br>构建工作流] --> D[资深用户<br>深度定制系统]

    A --> A1[痛点: 学习成本高]
    B --> B1[痛点: 概念理解难]
    C --> C1[痛点: 性能体验]
    D --> D1[痛点: 高级功能限制]
\`\`\`

## Process Flow

\`\`\`mermaid
flowchart LR
    A[User Input] --> B[Validate]
    B --> C{Valid?}
    C -->|Yes| D[Process]
    C -->|No| E[Show Error]
    D --> F[Save Result]
    E --> A
    F --> G[Complete]
\`\`\`

## API Sequence

\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant A as App
    participant S as Server
    
    U->>A: Click render
    A->>S: API Request
    S-->>A: Response
    A-->>U: Show diagram
\`\`\``;

  return (
    <Section
      description={
        <>
          Streamdown supports Mermaid diagrams with customizable themes and
          fullscreen viewing. Current theme is "base".
        </>
      }
      markdown={mermaidExample}
      speed={60}
      streamdownProps={{
        mermaid: {
          config: {
            theme: "base",
          },
        },
        controls: true,
      }}
      title="Interactive Mermaid Diagrams"
    />
  );
};
