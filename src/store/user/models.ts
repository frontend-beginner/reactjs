import { IExternalUrls, IFollower, IImage } from 'src/models/spotify';

export interface UserModel {
  id: string;
  display_name: string | null;
  external_urls: IExternalUrls;
  followers: IFollower;
  href: string;
  images: Array<IImage>;
  type: 'user';
  uri: string;
}

export interface MyProfileModel extends UserModel {
  country: string;
  email: string;
  explicit_content: string;
  product: string;
}
