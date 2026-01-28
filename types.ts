export interface Slide {
  id: number;
  type: 'image' | 'text' | 'split';
  title: string;
  subtitle?: string;
  content?: string[];
  imageUrl?: string;
  duration: number; // in seconds
}

export interface WeatherData {
  temp: number;
  condition: string;
  icon: string;
}

export interface ExamType {
  category: string;
  description?: string;
  items: string[];
}