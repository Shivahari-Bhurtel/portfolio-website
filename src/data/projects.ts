import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "01",
    name: "TB Chest X-ray Screening",
    category: "Computer Vision",
    description:
      "A tuberculosis screening project using CNN-based transfer learning with MobileNetV2 to classify chest X-ray images.",
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
      "A dog skin disease classification project using CNNs and EfficientNet transfer learning to classify skin disease images.",
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
      "A machine learning project for predicting student final grades using classification models and evaluating their performance.",
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