interface SkillLogoProps {
  name: string;
}

const BRAND_LOGOS: Record<string, { slug: string; color: string }> = {
  Python: { slug: "python", color: "3776AB" },
  TensorFlow: { slug: "tensorflow", color: "FF6F00" },
  Keras: { slug: "keras", color: "D00000" },
  "Scikit-learn": { slug: "scikitlearn", color: "F7931E" },
  Pandas: { slug: "pandas", color: "150458" },
  NumPy: { slug: "numpy", color: "013243" },
  React: { slug: "react", color: "149ECA" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  JavaScript: { slug: "javascript", color: "D6B800" },
  HTML: { slug: "html5", color: "E34F26" },
  CSS: { slug: "css3", color: "1572B6" },
  Git: { slug: "git", color: "F05032" },
  GitHub: { slug: "github", color: "181717" },
  Linux: { slug: "linux", color: "FCC624" },
  "VS Code": { slug: "visualstudiocode", color: "007ACC" },
  "Claude Code": { slug: "claude", color: "D97757" },
  "Jupyter Notebook": { slug: "jupyter", color: "F37626" },
  Kaggle: { slug: "kaggle", color: "20BEFF" },
};

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

  return (
    <span className="skill-logo-frame" aria-hidden="true">
      <span className="skill-logo-fallback">{getFallback(name)}</span>
      {logo && (
        <img
          src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
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
