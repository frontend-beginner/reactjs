export interface IExternalUrls {
  [key: string]: string;
}

export interface IFollower {
  href: string | null;
  total: number;
}

export interface IImage {
  height?: number | null;
  width?: number | null;
  url: string;
}
