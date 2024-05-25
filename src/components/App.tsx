import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useBackButton, useInitData } from '@tma.js/sdk-react';
import { AppRoot, Avatar, Cell } from '@xelene/tgui';
import { useMemo } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';

import { routes } from '~/navigation/routes.tsx';

import '@xelene/tgui/dist/styles.css';

export const App = () => {
  const tmaNavigator = useMemo(createNavigator, []);
  const [location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();
  const initData = useInitData();

  useBackButtonIntegration(tmaNavigator, backButton);

  return (
    <AppRoot>
      <Cell
        before={<Avatar size={48} src={initData?.user?.photoUrl} />}
        description={`@${initData?.user?.username}`}
        onClick={() => navigator.push('/profile')}
      >
        {initData?.user?.firstName}

        {initData?.user?.lastName}
      </Cell>

      <Router location={location} navigator={navigator}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AppRoot>
  );
};
