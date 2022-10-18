// .storybook/preview.js
import '../styles/index.scss'
import store from '../redux/store'


export const parameters = {
    layout: '',
    actions: { argTypesRegex: '^ON.*' },
};

export const decorators = [
    (Story) => (
        <div style={{ margin: '3em' }}>
            <Story />
        </div>
    ),
];