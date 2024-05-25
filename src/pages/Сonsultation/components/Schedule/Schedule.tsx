import { Radio, Typography } from '@xelene/tgui';
import type { FC } from 'react';
import { ScheduleDay } from './ScheduleDay';
import './Schedule.scss';

export const Schedule: FC = () => {
  const days: string[] = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  return (
    <div className="flex flex-col gap-3 px-2 pb-3">
      <Typography weight="1">
        Укажите временные промежутки доступных слотов
      </Typography>

      <div className="flex flex-row gap-2 py-1">
        <Radio />
        Запись на 1 месяц вперед
      </div>

      <div className="flex flex-row gap-2 py-1">
        <Radio />
        Без ограничений
      </div>

      <div className="flex flex-col gap-2">
        {days.map((day) => (
          <ScheduleDay key={day} day={day} />
        ))}
      </div>
    </div>
  );
};
