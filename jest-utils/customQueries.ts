import { queryHelpers } from '@testing-library/dom'

export const queryById = queryHelpers.queryByAttribute.bind(
    null,
    'id',
)

export const queryByDataStep = queryHelpers.queryByAttribute.bind(
    null,
    'data-step',
)
