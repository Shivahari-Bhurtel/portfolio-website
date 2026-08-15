import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "01",
    name: "TB Chest X-ray Screening",
    category: "Healthcare AI",
    description:
      "Built a computer vision workflow to help screen chest X-rays for tuberculosis using transfer learning and medical image preprocessing. The goal was to create a simple, practical diagnostic support system with clear, interpretable model behavior.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "MobileNetV2",
      "Transfer Learning",
    ],
    github: "https://github.com/Shivahari-Bhurtel/TB-Chest-Xray-Screening-",
    demo: null,
    image: "tb-chest-xray.png",
    imageAlt: "TB Chest X-ray Screening project",
  },
  {
    id: "02",
    name: "Dog Skin Disease Classification",
    category: "Computer Vision",
    description:
      "Developed a small-scale image classification system for identifying common dog skin conditions. The project focused on building a reliable visual recognition pipeline using CNNs and transfer learning for early, real-world screening support.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "EfficientNet",
      "Transfer Learning",
    ],
    github:
      "https://github.com/Shivahari-Bhurtel/Dog-Skin-Disease-Classification-",
    demo: null,
    image: "dog-skin-disease.png",
    imageAlt: "Dog Skin Disease Classification project",
  },
  {
    id: "03",
    name: "Student Final Grade Prediction",
    category: "Machine Learning",
    description:
      "Explored predictive modeling to estimate student outcomes from academic patterns. This project applied data cleaning, feature selection, and model comparison to understand how machine learning can support decision-making in education.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
    ],
    github:
      "https://github.com/Shivahari-Bhurtel/student_final_grade_prediction_ml.ipynb",
    demo: null,
    image: "student-grade-prediction.png",
    imageAlt: "Student Final Grade Prediction project",
  },
];