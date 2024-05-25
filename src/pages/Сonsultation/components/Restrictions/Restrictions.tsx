import { Input, Typography } from '@xelene/tgui';

export default function Restrictions() {
  return (
    <div className="flex flex-col gap-3 px-2 pb-3">
      <Typography weight="1">
        Укажите временные промежутки доступных слотов
      </Typography>

      <div className="app-form-input">
        <Typography>Количество возможных броней в день</Typography>
        <Input name="duration" />
      </div>

      <div className="app-form-input">
        <Typography>
          Минимальное время за которое можно забронировать слот
        </Typography>
        <Input name="duration" />
      </div>

      <div className="app-form-input">
        <Typography>Перерыв после забронированного слота</Typography>
        <Input name="price" type="number" />
      </div>

      <div className="app-form-input">
        <Typography>Количество участников группы</Typography>
        <Input name="price" />
      </div>
    </div>
  );
}
