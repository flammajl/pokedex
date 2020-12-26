import { BaseWrapper } from '@/styles/pages/Info';
import { InfoProps } from './About';

const BaseStats: React.FC<InfoProps> = ({ data }) => {
  return (
    <BaseWrapper>
      <div>
        {data.stats.map(stat => (
          <div key={stat.stat.name}>
            <h3>{stat.stat.name}</h3>
            <span>{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </BaseWrapper>
  );
};

export default BaseStats;
