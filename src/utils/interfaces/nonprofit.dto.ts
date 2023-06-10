// NPM Modules
import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import 'reflect-metadata';

// Custom Modules
import { Address, NAICSCode, OrganizationServices, SocialProfile } from './';

export default class NonProfitDTO {
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

  @IsString()
  googleMapsURL?: string;

  rssFeedURL?: string[];

  industryCodeNAICS?: NAICSCode[];

  services?: OrganizationServices[];

  socialProfiles?: SocialProfile;

  @IsBoolean()
  isActive?: boolean;
}
