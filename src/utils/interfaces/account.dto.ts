// NPM Modules
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString, IsArray, IsEnum } from 'class-validator';
import 'reflect-metadata';

// Custom Modules
import { AccountStatus, AccountType, AccountVerified, UserRole } from './../../utils/enums';
import BusinessDTO from './business.dto';
import DirectoryDTO from './directory.dto';
import NonProfitDTO from './nonprofit.dto';
import PodcastDTO from './podcast.dto';

export default class AccountDTO {
  @IsNotEmpty()
  id: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsEnum({
    type: 'enum',
    enum: UserRole,
    default: UserRole.Customer
  })
  userRole: UserRole;

  @IsEnum({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.Active
  })
  accountStatus: AccountStatus;

  @IsEnum({
    type: 'enum',
    enum: AccountType,
    default: AccountType.Veteran
  })
  accountType: AccountType;

  @IsArray()
  @IsEnum({
    type: 'enum',
    enum: AccountVerified,
    default: AccountVerified.None
  })
  accountVerified?: AccountVerified[];

  @IsEnum({
    type: 'boolean',
    default: true
  })
  @IsBoolean()
  isActiveAccount: boolean;

  @IsDate()
  passwordChangedAt?: Date;

  @IsString()
  passwordResetToken?: string;

  @IsDate()
  passwordResetExpires?: Date;

  // Vetpreneur Tribe Fields
  @IsBoolean()
  isVetTribeWarriorCouncilActive: boolean;

  // virtual field for relations and join, not a real db field
  // column saved in db on other table
  businessList?: BusinessDTO[];
  directoryList?: DirectoryDTO[];
  nonprofitList?: NonProfitDTO[];
  podcastList?: PodcastDTO[];
}
