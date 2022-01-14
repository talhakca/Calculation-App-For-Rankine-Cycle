import { InputSize } from '../common-utils';
import { RadioGroupComponentConfig, RadioGroupSize } from '../radio-group';
import { JsonArrayComponentOption } from './json-array-component-option.enum';

export const RADIO_GROUP_COMPONENT_CONFIG: RadioGroupComponentConfig = {
    options: [
        {
            value: JsonArrayComponentOption.GridView,
            label: 'CRUD_VIEW_MODULE.JSON_ARRAY_COMPONENT.GRID_VIEW',
            labelSize: InputSize.Small
        },
        {
            value: JsonArrayComponentOption.CodeMirror,
            label: 'CRUD_VIEW_MODULE.JSON_ARRAY_COMPONENT.CODE_MIRROR',
            labelSize: InputSize.Small
        }
    ],
    size: RadioGroupSize.Small
};
