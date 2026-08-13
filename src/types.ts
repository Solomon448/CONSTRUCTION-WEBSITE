export interface NavigationItem {
  label: string;
  href: string;
  modalKey?: 'house-design' | 'inclusions' | 'about' | 'contact' | 'faq';
}

export interface InclusionDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface ProjectDesign {
  id: string;
  title: string;
  category: string;
  area: string;
  location: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  message: string;
}

export interface RecentWorkItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  scope?: string;
  year: string;
  imageUrl: string;
  spanClass?: string;
  aspectRatio?: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorLocation: string;
  authorAvatar?: string;
  rating: number;
  timeAgo: string;
  projectBuilt: string;
  reviewText: string;
  verified: boolean;
}

