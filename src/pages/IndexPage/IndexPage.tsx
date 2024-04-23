import type { FC } from "react";

import { Link } from "~/components/Link/Link.tsx";
import { Page } from "~/components/Page/Page.tsx";
import { routes } from "~/navigation/routes.tsx";

import "./IndexPage.css";

export const IndexPage: FC = () => {
  return <Page title="Типы событий"></Page>;
};
