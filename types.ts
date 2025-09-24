export enum SquarespaceVersion {
  V7_0 = '7.0',
  V7_1 = '7.1',
}

export interface Snippet {
  id: number;
  title: string;
  description: string;
  code: string;
  categories: string[];
  version: SquarespaceVersion;
  previewHtml: string;
}
