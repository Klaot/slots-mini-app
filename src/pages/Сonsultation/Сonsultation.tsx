import { Button } from '@xelene/tgui';
import { type FC, useState } from 'react';
import { Page } from '~/components/Page/Page';
import { Information } from './components/Information/Information';
import { Schedule } from './components/Schedule/Schedule';
import Restrictions from './components/Restrictions/Restrictions';
import './Сonsultation.scss';

export const ConsultationPage: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { title: 'Информация', id: 0, component: <Information /> },
    { title: 'Время', id: 1, component: <Schedule /> },
    { title: 'Ограничения', id: 2, component: <Restrictions /> },
  ];

  const contentRender = () => {
    const findComponent = tabs.find((tab) => tab.id === currentTab);

    return findComponent?.component;
  };

  const changeTabHandler = (id: number) => {
    setCurrentTab(id);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Page title="Консультация">
      <div className="flex p-2 gap-3 cursor-pointer">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className="p-1"
            onClick={() => changeTabHandler(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <form className="flex flex-col gap-3 px-1" onSubmit={onFinish}>
        {contentRender()}
        <Button type="button">Сохранить</Button>
      </form>
    </Page>
  );
};
