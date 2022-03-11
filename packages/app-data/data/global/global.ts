/* eslint-disable */
import { FlowTypes } from "data-models";
const global: FlowTypes.Global[] = [
  {
    flow_type: "global",
    flow_name: "efm_act_globals",
    status: "released",
    rows: [
      {
        type: "declare_global_constant",
        name: "efm_parskip_fix",
        value: "margin-top: -15px;",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
      {
        type: "declare_global_constant",
        name: "efm_act_text_style",
        value: "margin-top: -15px;",
        _translations: {
          value: {},
        },
        exclude_from_translation: true,
      },
    ],
    _xlsxPath: "EFM_high_level_sheets.xlsx",
  },
];
export default global;
