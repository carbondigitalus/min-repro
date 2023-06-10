// Custom Modules
import BusinessDTO from './business.dto';
import DirectoryDTO from './directory.dto';
import NonProfitDTO from './nonprofit.dto';
import PodcastDTO from './podcast.dto';

export default class HomePageContentDTO {
  // Vetpreneur Tribe Fields
  isVetTribeWarriorCouncilActive?: boolean;

  // virtual field for relations and join, not a real db field
  // column saved in db on other table
  businessList?: BusinessDTO[];
  directoryList?: DirectoryDTO[];
  nonprofitList?: NonProfitDTO[];
  podcastList?: PodcastDTO[];
}
