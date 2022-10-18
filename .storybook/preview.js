// .storybook/preview.js
import '../styles/index.scss'
import store from '../redux/store'

export default {
    decorators: [],
    parameters: {
        actions: { argTypesRegex: '^ON.*' }
    }

};

