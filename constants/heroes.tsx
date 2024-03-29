import HeroPic from '../public/assets/Hero.jpg';
import HeroPic22 from '../public/assets/Hero22.jpg';
import HeroPic23 from '../public/assets/Hero23.jpg';
import HeroSeasonDb from '../public/assets/HeroSeasonDb.jpeg';

export const homeHeroProps = {
  title: (
    <div>
      Grand Prix<span className="text-info">.DB</span>
      <br />
    </div>
  ),
  img: HeroPic,
  description: 'The Formula 1 database for all F1 news and statistics.',
};

export const twentyTwoHeroProps = {
  title: '2022 Season',
  img: HeroPic22,
  description: '',
};

export const twentyThreeHeroProps = {
  title: '2023 Season',
  img: HeroPic23,
  description: '',
};

export const seasonDatabaseHeroProps = {
  title: 'Season Database',
  img: HeroSeasonDb,
  description:
    'Please select a season below to browse standings and results from our database.',
};
