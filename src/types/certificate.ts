export interface Certificate {
  /** Unique number, used as the React list key */
  id: number;
  /** Name of the certificate / course */
  name: string;
  /** Issuing organization, e.g. "DeepLearning.AI / Coursera" */
  organization: string;
  /** Year completed, as a string e.g. "2026" */
  year: string;
  /** Public URL where anyone can verify this certificate */
  link: string;
  /** Optional image filename inside public/images/certificates/ */
  image?: string;
}
