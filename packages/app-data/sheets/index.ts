import { FlowTypes } from "data-models";
type ISheetContents = {
  [flow_type in FlowTypes.FlowType]: { [flow_name: string]: FlowTypes.FlowTypeBase };
};
export const SHEETS_CONTENT_LIST: ISheetContents = {
  data_list: {
    A_Dancers_Tale_story_data: {
      flow_type: "data_list",
      flow_name: "A_Dancers_Tale_story_data",
      data_list_name: "A_Dancers_Tale_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    A_Fish_And_A_Gift_story_data: {
      flow_type: "data_list",
      flow_name: "A_Fish_And_A_Gift_story_data",
      data_list_name: "A_Fish_And_A_Gift_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    A_Very_Tall_Man_pages: {
      flow_type: "data_list",
      flow_name: "A_Very_Tall_Man_pages",
      data_list_name: "A_Very_Tall_Man_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Akadelis_Lucky_Day_pages: {
      flow_type: "data_list",
      flow_name: "Akadelis_Lucky_Day_pages",
      data_list_name: "Akadelis_Lucky_Day_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Amazing_Daisy_story_data: {
      flow_type: "data_list",
      flow_name: "Amazing_Daisy_story_data",
      data_list_name: "Amazing_Daisy_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    Can_We_Count_Our_Cats_pages: {
      flow_type: "data_list",
      flow_name: "Can_We_Count_Our_Cats_pages",
      data_list_name: "Can_We_Count_Our_Cats_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Cat_And_Dog_And_The_Ball_pages: {
      flow_type: "data_list",
      flow_name: "Cat_And_Dog_And_The_Ball_pages",
      data_list_name: "Cat_And_Dog_And_The_Ball_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Cat_And_Dog_And_The_But_pages: {
      flow_type: "data_list",
      flow_name: "Cat_And_Dog_And_The_But_pages",
      data_list_name: "Cat_And_Dog_And_The_But_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Cat_And_Dog_And_The_Egg_pages: {
      flow_type: "data_list",
      flow_name: "Cat_And_Dog_And_The_Egg_pages",
      data_list_name: "Cat_And_Dog_And_The_Egg_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Cat_And_Dog_Dog_Is_Cold_pages: {
      flow_type: "data_list",
      flow_name: "Cat_And_Dog_Dog_Is_Cold_pages",
      data_list_name: "Cat_And_Dog_Dog_Is_Cold_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Cat_And_Dog_Draw_And_Color_data: {
      flow_type: "data_list",
      flow_name: "Cat_And_Dog_Draw_And_Color_data",
      data_list_name: "Cat_And_Dog_Draw_And_Color_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    Clever_Cat_pages: {
      flow_type: "data_list",
      flow_name: "Clever_Cat_pages",
      data_list_name: "Clever_Cat_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Colors_Of_A_Rainbow_pages: {
      flow_type: "data_list",
      flow_name: "Colors_Of_A_Rainbow_pages",
      data_list_name: "Colors_Of_A_Rainbow_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Creature_With_Two_pages: {
      flow_type: "data_list",
      flow_name: "Creature_With_Two_pages",
      data_list_name: "Creature_With_Two_storybook",
      _xlsxPath: "EFM_storybooks_beginning.xlsx",
    },
    Is_There_Anyone_Like_Me_data: {
      flow_type: "data_list",
      flow_name: "Is_There_Anyone_Like_Me_data",
      data_list_name: "Is_There_Anyone_Like_Me_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    Listen_To_My_Body_data: {
      flow_type: "data_list",
      flow_name: "Listen_To_My_Body_data",
      data_list_name: "Listen_To_My_Body_storybook",
      _xlsxPath: "EFM_storybooks_intermediate.xlsx",
    },
    efm_act_list: {
      flow_type: "data_list",
      flow_name: "efm_act_list",
      data_list_name: "efm_act",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_bon_act_list: {
      flow_type: "data_list",
      flow_name: "efm_bon_act_list",
      data_list_name: "efm_bon_act",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_chapter_list: {
      flow_type: "data_list",
      flow_name: "efm_chapter_list",
      data_list_name: "efm_chapt",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_sb_list: {
      flow_type: "data_list",
      flow_name: "efm_sb_list",
      data_list_name: "efm_storybooks",
      _xlsxPath: "EFM_storybooks_high_level_sheets.xlsx",
    },
  },
  global: {
    efm_act_globals: {
      flow_type: "global",
      flow_name: "efm_act_globals",
      _xlsxPath: "EFM_high_level_sheets.xlsx",
    },
  },
  template: {
    app_menu: {
      flow_type: "template",
      flow_name: "app_menu",
      _xlsxPath: "EFM_high_level_sheets.xlsx",
    },
    app_menu_privacy_policy: {
      flow_type: "template",
      flow_name: "app_menu_privacy_policy",
      _xlsxPath: "EFM_high_level_sheets.xlsx",
    },
    efm_act_1_10a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_10a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_10b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_10b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_12a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_12a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_12b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_12b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_12c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_12c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_20a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_20a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_20b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_20b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_20c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_20c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_20d_template: {
      flow_type: "template",
      flow_name: "efm_act_1_20d_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_30a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_30a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_30b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_30b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_30c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_30c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_40a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_40a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_40b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_40b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_40c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_40c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_50a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_50a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_50b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_50b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_50c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_50c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_5a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_5a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_60a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_60a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_60b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_60b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_60c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_60c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_70a_template: {
      flow_type: "template",
      flow_name: "efm_act_1_70a_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_70b_template: {
      flow_type: "template",
      flow_name: "efm_act_1_70b_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_1_70c_template: {
      flow_type: "template",
      flow_name: "efm_act_1_70c_template",
      _xlsxPath: "EFM_activity_chapter1_sheets.xlsx",
    },
    efm_act_2_100a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_100a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_100b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_100b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_105a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_105a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_105b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_105b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_105c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_105c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_110a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_110a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_110b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_110b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_110c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_110c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_115a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_115a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_115b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_115b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_115c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_115c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_120a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_120a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_120b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_120b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_120c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_120c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_125a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_125a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_125b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_125b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_130a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_130a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_130b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_130b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_130c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_130c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_135a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_135a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_135b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_135b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_135c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_135c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_140a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_140a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_140b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_140b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_140c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_140c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_145a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_145a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_145b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_145b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_145c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_145c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_150a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_150a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_150b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_150b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_160a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_160a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_160b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_160b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_160c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_160c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_170a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_170a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_170b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_170b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_85a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_85a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_90a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_90a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_90b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_90b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_90c_template: {
      flow_type: "template",
      flow_name: "efm_act_2_90c_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_95a_template: {
      flow_type: "template",
      flow_name: "efm_act_2_95a_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_2_95b_template: {
      flow_type: "template",
      flow_name: "efm_act_2_95b_template",
      _xlsxPath: "EFM_activity_chapter2_sheets.xlsx",
    },
    efm_act_3_175a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_175a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_180a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_180a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_180b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_180b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_180c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_180c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_190a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_190a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_190b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_190b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_190c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_190c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_190d_template: {
      flow_type: "template",
      flow_name: "efm_act_3_190d_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_200a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_200a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_200b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_200b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_200c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_200c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_210a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_210a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_210b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_210b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_210c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_210c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_210d_template: {
      flow_type: "template",
      flow_name: "efm_act_3_210d_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_210e_template: {
      flow_type: "template",
      flow_name: "efm_act_3_210e_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_220a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_220a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_220b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_220b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_220c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_220c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_230a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_230a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_230b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_230b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_230c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_230c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_235a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_235a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_235b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_235b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_235c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_235c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_240a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_240a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_240b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_240b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_240c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_240c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_250a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_250a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_250b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_250b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_250c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_250c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_260a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_260a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_260b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_260b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_260c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_260c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_260d_template: {
      flow_type: "template",
      flow_name: "efm_act_3_260d_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_270a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_270a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_270b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_270b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_270c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_270c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_280a_template: {
      flow_type: "template",
      flow_name: "efm_act_3_280a_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_280b_template: {
      flow_type: "template",
      flow_name: "efm_act_3_280b_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_280c_template: {
      flow_type: "template",
      flow_name: "efm_act_3_280c_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_3_280d_template: {
      flow_type: "template",
      flow_name: "efm_act_3_280d_template",
      _xlsxPath: "EFM_activity_chapter3_sheets.xlsx",
    },
    efm_act_4_285a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_285a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_290a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_290a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_290b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_290b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_290c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_290c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_300a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_300a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_300b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_300b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_300c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_300c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_300d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_300d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_310a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_310a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_310b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_310b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_310c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_310c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320e_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320e_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_320f_template: {
      flow_type: "template",
      flow_name: "efm_act_4_320f_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_325a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_325a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_325b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_325b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_325c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_325c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_325d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_325d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_330a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_330a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_330b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_330b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_330c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_330c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_340a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_340a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_340b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_340b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_340c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_340c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_340d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_340d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_350a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_350a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_350b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_350b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_350c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_350c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_350d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_350d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_360a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_360a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_360b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_360b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_360c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_360c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_360d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_360d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_365a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_365a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_365b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_365b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_365c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_365c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_370a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_370a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_370b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_370b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_380a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_380a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_380b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_380b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_380c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_380c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_380d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_380d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_390a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_390a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_390b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_390b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_390c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_390c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_400a_template: {
      flow_type: "template",
      flow_name: "efm_act_4_400a_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_400b_template: {
      flow_type: "template",
      flow_name: "efm_act_4_400b_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_400c_template: {
      flow_type: "template",
      flow_name: "efm_act_4_400c_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_4_400d_template: {
      flow_type: "template",
      flow_name: "efm_act_4_400d_template",
      _xlsxPath: "EFM_activity_chapter4_sheets.xlsx",
    },
    efm_act_5_425a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_425a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_430a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_430a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_430b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_430b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_430c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_430c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_430d_template: {
      flow_type: "template",
      flow_name: "efm_act_5_430d_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_440a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_440a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_440b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_440b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_440c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_440c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_440d_template: {
      flow_type: "template",
      flow_name: "efm_act_5_440d_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_450a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_450a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_450b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_450b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_460a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_460a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_460b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_460b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_460c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_460c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_470a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_470a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_470b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_470b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_470c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_470c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_470d_template: {
      flow_type: "template",
      flow_name: "efm_act_5_470d_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_480a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_480a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_480b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_480b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_480c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_480c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_480d_template: {
      flow_type: "template",
      flow_name: "efm_act_5_480d_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_490a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_490a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_490b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_490b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_490c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_490c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_490d_template: {
      flow_type: "template",
      flow_name: "efm_act_5_490d_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_500a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_500a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_500b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_500b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_500c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_500c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_510a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_510a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_510b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_510b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_520a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_520a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_520b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_520b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_520c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_520c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_530a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_530a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_530b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_530b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_530c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_530c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_540a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_540a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_540b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_540b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_540c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_540c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_550a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_550a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_550b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_550b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_550c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_550c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_560a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_560a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_560b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_560b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_560c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_560c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_570a_template: {
      flow_type: "template",
      flow_name: "efm_act_5_570a_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_570b_template: {
      flow_type: "template",
      flow_name: "efm_act_5_570b_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_act_5_570c_template: {
      flow_type: "template",
      flow_name: "efm_act_5_570c_template",
      _xlsxPath: "EFM_activity_chapter5_sheets.xlsx",
    },
    efm_activity_advice_template: {
      flow_type: "template",
      flow_name: "efm_activity_advice_template",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_activity_body_template: {
      flow_type: "template",
      flow_name: "efm_activity_body_template",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_activity_template: {
      flow_type: "template",
      flow_name: "efm_activity_template",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_bon_act_1_70c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_1_70c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_110c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_110c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_135b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_135b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_135c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_135c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_150a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_150a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_150b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_150b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_160a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_160a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_160c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_160c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_90b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_90b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_2_95a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_2_95a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_180c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_180c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_210b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_210b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_210c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_210c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_220a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_220a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_235b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_235b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_235c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_235c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_240a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_240a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_260a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_260a_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_270b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_270b_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_3_270c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_3_270c_template",
      _xlsxPath: "EFM_bonus_activity_chapt123_sheets.xlsx",
    },
    efm_bon_act_4_300a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_300a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_300d_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_300d_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_310c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_310c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_330c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_330c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_340d_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_340d_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_350d_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_350d_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_370a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_370a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_390a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_390a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_390c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_390c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_4_400a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_4_400a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_460b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_460b_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_460c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_460c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_470d_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_470d_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_490d_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_490d_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_520c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_520c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_530a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_530a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_530b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_530b_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_540a_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_540a_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_550c_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_550c_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_5_560b_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_5_560b_template",
      _xlsxPath: "EFM_bonus_activity_chapt45_sheets.xlsx",
    },
    efm_bon_act_body_template: {
      flow_type: "template",
      flow_name: "efm_bon_act_body_template",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_bon_activity_template: {
      flow_type: "template",
      flow_name: "efm_bon_activity_template",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_bonus_chapters: {
      flow_type: "template",
      flow_name: "efm_bonus_chapters",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_chapter_acts_by_topic: {
      flow_type: "template",
      flow_name: "efm_chapter_acts_by_topic",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_chapter_acts_individually: {
      flow_type: "template",
      flow_name: "efm_chapter_acts_individually",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_chapter_bon_acts: {
      flow_type: "template",
      flow_name: "efm_chapter_bon_acts",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_chapters: {
      flow_type: "template",
      flow_name: "efm_chapters",
      _xlsxPath: "EFM_activity_high_level_sheets.xlsx",
    },
    efm_sb_intro: {
      flow_type: "template",
      flow_name: "efm_sb_intro",
      _xlsxPath: "EFM_storybooks_high_level_sheets.xlsx",
    },
    efm_story_template: {
      flow_type: "template",
      flow_name: "efm_story_template",
      _xlsxPath: "EFM_storybooks_high_level_sheets.xlsx",
    },
    efm_storybooks: {
      flow_type: "template",
      flow_name: "efm_storybooks",
      _xlsxPath: "EFM_storybooks_high_level_sheets.xlsx",
    },
    home_screen: {
      flow_type: "template",
      flow_name: "home_screen",
      _xlsxPath: "EFM_high_level_sheets.xlsx",
    },
    initializations_on_startup: {
      flow_type: "template",
      flow_name: "initializations_on_startup",
      _xlsxPath: "EFM_high_level_sheets.xlsx",
    },
  },
  tour: {},
};
