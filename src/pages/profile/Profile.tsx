import { Avatar, Button, Cell, Textarea } from '@xelene/tgui';
import { Clock9, Coins } from 'lucide-react';
import { type FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Page } from '~/components/Page/Page.tsx';

type Inputs = {
  description: string;
};

export const Profile: FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
    <>
      <Page
        title="Настройки"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea header="Описание" placeholder="Опытный специалист в своей сфере" {...register('description')} />
          <div className="flex justify-center">
            <Button
              mode="filled"
              size="m"
            >
              Сохранить
            </Button>
          </div>
        </form>
      </Page>
      <Page
        title="Услуги"
      >
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
        <div className="flex justify-center">
          <Button
            mode="filled"
            size="m"
          >
            Добавить услугу
          </Button>
        </div>
      </Page>
    </>
  );
};
