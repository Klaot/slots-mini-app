import { Switch } from '@xelene/tgui';
import { Select } from '@xelene/tgui/dist/components/Form/Select/Select';
import { type ChangeEvent, useState, useEffect } from 'react';

export const ScheduleDay = ({ day }: { day: string }) => {
  const [enable, setEnable] = useState<boolean>(false);
  const [period, setPeriod] = useState({ start: '00:00', end: '00:00' });

  const changeEnable = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setEnable(value);
    setPeriod({ start: '00:00', end: '00:00' });
  };

  const generateTimeOptions = () => {
    const options = [];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const changePeriod = (value: any, select: string) => {
    if (select === 'start') {
      setPeriod((prev) => {
        return { ...prev, start: value.target.value };
      });
    } else {
      setPeriod((prev) => {
        return { ...prev, end: value.target.value };
      });
    }
  };

  useEffect(() => {
    if (!enable) {
      setPeriod({ start: '00:00', end: '00:00' });
    }
  }, [enable]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Switch value={enable.toString()} onChange={changeEnable} />
          {day}
        </div>

        {enable && (
          <div className="flex flex-row gap-2 schedule-day_selects">
            <Select
              value={period.start}
              onChange={(value) => changePeriod(value, 'start')}
            >
              {generateTimeOptions().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            <Select
              value={period.end}
              onChange={(value) => changePeriod(value, 'end')}
            >
              {generateTimeOptions().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};
