// /stories/pages/home.stories.jsx

import SecurityCodeModal from "components/modals/SecurityCodeModal";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "modals/SecurityCodeModal",
  component: SecurityCodeModal,
};

export const Basic: ComponentStory<typeof SecurityCodeModal> = () => <SecurityCodeModal />;