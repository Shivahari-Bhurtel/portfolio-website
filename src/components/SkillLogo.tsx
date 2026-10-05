interface SkillLogoProps {
  name: string;
}

import {
  siClaude,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJupyter,
  siKaggle,
  siKeras,
  siLinux,
  siNumpy,
  siPandas,
  siPython,
  siReact,
  siScikitlearn,
  siTensorflow,
  siTypescript,
} from "simple-icons";

interface ProviderIcon {
  hex: string;
  path: string;
}

const BRAND_LOGOS: Record<string, ProviderIcon> = {
  Python: siPython,
  TensorFlow: siTensorflow,
  Keras: siKeras,
  "Scikit-learn": siScikitlearn,
  Pandas: siPandas,
  NumPy: siNumpy,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  Git: siGit,
  GitHub: siGithub,
  Linux: siLinux,
  "Claude Code": siClaude,
  "Jupyter Notebook": siJupyter,
  Kaggle: siKaggle,
};

const VS_CODE_LOGO_SRC =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";

function getFallback(name: string) {
  const abbreviations: Record<string, string> = {
    "Machine Learning": "ML",
    "Deep Learning": "DL",
    "Computer Vision": "CV",
    "Transfer Learning": "TL",
    Research: "R&D",
    "Problem Solving": "PS",
  };

  return abbreviations[name] ?? name.slice(0, 3).toUpperCase();
}

export default function SkillLogo({ name }: SkillLogoProps) {
  const logo = BRAND_LOGOS[name];
  const isVsCode = name === "VS Code";

  return (
    <span className="skill-logo-frame" aria-hidden="true">
      <span className="skill-logo-fallback">{getFallback(name)}</span>
      {logo && (
        <svg
          className="skill-logo-image"
          viewBox="0 0 24 24"
          fill={`#${logo.hex}`}
          role="presentation"
        >
          <path d={logo.path} />
        </svg>
      )}
      {isVsCode && (
        <img
          src={VS_CODE_LOGO_SRC}
          alt=""
          loading="lazy"
          decoding="async"
          className="skill-logo-image"
          onError={(event) => event.currentTarget.remove()}
        />
      )}
    </span>
  );
}
