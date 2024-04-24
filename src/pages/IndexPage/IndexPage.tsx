import { Avatar, Cell } from '@xelene/tgui';
import { Clock9, Coins } from 'lucide-react';
import type { FC } from 'react';

import { Page } from '~/components/Page/Page.tsx';

import './IndexPage.css';

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
      <Cell
        before={<Avatar size={48} />}
        subtitle="Консультация"
        description={descriptionCell('12 мая 14:00', 1000)}
      >
        @username1
      </Cell>
      <Cell
        before={<Avatar size={48} />}
        subtitle="Диагностика"
        description={descriptionCell('14 мая 12:00', 2000)}
      >
        @username2
      </Cell>
    </Page>
);
};
