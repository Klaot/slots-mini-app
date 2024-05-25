import { Avatar, Cell } from '@xelene/tgui';
import { Clock9, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

import { Page } from '~/components/Page/Page.tsx';

import './IndexPage.css';

const mokDate = [
  {
    title: 'Консультация',
    id: '0',
    date: '12 мая 14:00',
    price: 1000,
    name: '@username1',
  },
  {
    title: 'Диагностика',
    id: '1',
    date: '15 мая 17:00',
    price: 1500,
    name: '@username2',
  },
];

export const IndexPage: FC = () => {
  const descriptionCell = (datetime: string, price: number) => {
    return (
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Clock9 size={12} />
          {' '}
          {datetime}
        </div>
        <div className="flex items-center gap-1">
          <Coins size={12} />
          {' '}
          {price}
          {' '}
          USDT
        </div>
      </div>
    );
  };

  return (
    <Page title="Предстоящие события">
      {mokDate.map((item) => {
        return (
          <Link to={`/consultation-params/${item.id}`}>
            theme parameters
            <Cell
              before={<Avatar size={48} />}
              subtitle="Консультация"
              description={descriptionCell('12 мая 14:00', 1000)}
            >
              {item.name}
            </Cell>
          </Link>
        );
      })}
    </Page>
  );
};
