export interface Article {
  id: number;
  title: string;
  content: string;
  photo?: string;
  photo_url?: string;
  created_at: string;
  updated_at: string;
  author: number;
  clap?: number;
}
