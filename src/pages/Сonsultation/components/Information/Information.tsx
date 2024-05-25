import { Input, Switch, Textarea, Typography } from '@xelene/tgui';
import type { FC } from 'react';

export const Information: FC = () => {
  return (
    <div className="flex flex-col gap-2 px-2">
      <Typography weight="1">
        Укажите основную информацию о вашей услуге или событии.
      </Typography>

      <div className="app-form-input">
        <Typography>Название услуги</Typography>
        <Input name="title" />
      </div>

      <div className="app-form-input">
        <Typography>Описание услуги</Typography>
        <Textarea
          name="description"
          placeholder="Помогает понять свои чувства и научится проживать их по-новому"
        />
      </div>

      <div className="app-form-input">
        <Typography>Продолжительность</Typography>
        <Input name="duration" />
      </div>

      <div className="app-form-input">
        <Typography>Стоимость</Typography>
        <Input name="price" />
      </div>

      <div className="flex flex-row gap-3 py-3 center">
        <Switch defaultChecked />
        Групповое событие
      </div>
    </div>
  );
};
