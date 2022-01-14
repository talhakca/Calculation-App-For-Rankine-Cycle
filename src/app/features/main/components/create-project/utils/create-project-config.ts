export const createProjectConfig = {
    validators: [{ name: 'name' }],
    items: [
        {
            type: 'textbox',
            title: 'Project Name',
            placeholder: 'name',
            visible: 'true',
            index: '1',
            fieldName: 'name'
        }
    ],
    itemSettings: {
        labelComponentSize: { xs: 6 },
        inputComponentSize: { xs: 16 }
    },
    formLayout: 'horizontal',
    submitButton: { text: 'Create', visible: true, size: 'large' },
    inputChangeReaction: 'default',
    formValueEmitMode: 'returnAllValues',
};