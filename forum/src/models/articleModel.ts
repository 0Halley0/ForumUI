export interface Article {
  id: number;
  tags: number[];
  category: number;
  creator: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  slug: string;
}
