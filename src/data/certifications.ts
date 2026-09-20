export interface Certification {
  title: string;
  issuer: string;
  year?: number;
  credential: string;
}
// Add only verified credentials. An empty collection hides the section.
export const certifications: Certification[] = [];
