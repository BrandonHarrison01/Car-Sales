export const ADD_ITEM = 'ADD_ITEM';

export const addItem = buyItem => {
    return { type: ADD_ITEM, payload: buyItem };
}