// NPM Modules
import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import 'reflect-metadata';

// Custom Modules
import { Address, SocialProfile } from './';

export default class PodcastDTO {
  @IsNotEmpty()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  slug?: string;

  @IsString()
  @IsUrl()
  websiteURL?: string;

  @IsString()
  logo?: string;

  @IsString()
  coverImage?: string;

  @IsString()
  description?: string;

  @IsString()
  phone?: string;

  @IsEmail()
  email?: string;

  address?: Address;

  rssFeedURL?: string[];

  socialProfiles?: SocialProfile;

  @IsBoolean()
  isActive?: boolean;
}
