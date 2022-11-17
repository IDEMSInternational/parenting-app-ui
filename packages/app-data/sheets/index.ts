import { FlowTypes } from "data-models";
type ISheetContents = {
  [flow_type in FlowTypes.FlowType]: { [flow_name: string]: FlowTypes.FlowTypeBase };
};
export const SHEETS_CONTENT_LIST: ISheetContents = {
  data_list: {
    ae_cidse: {
      flow_type: "data_list",
      flow_name: "ae_cidse",
      data_list_name: "ae_cidse",
      _xlsxPath: "data_lists/ae_principles/ae_principles_data_lists.xlsx",
    },
    ae_fao: {
      flow_type: "data_list",
      flow_name: "ae_fao",
      data_list_name: "ae_fao",
      _xlsxPath: "data_lists/ae_principles/ae_principles_data_lists.xlsx",
    },
    ae_idems: {
      flow_type: "data_list",
      flow_name: "ae_idems",
      data_list_name: "ae_idems",
      _xlsxPath: "data_lists/ae_principles/ae_principles_data_lists.xlsx",
    },
    children_nutrients: {
      flow_type: "data_list",
      flow_name: "children_nutrients",
      data_list_name: "children_nutrients",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    example_calc_data_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_calc_data_list",
      data_list_name: "example_calc",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_calc.xlsx",
    },
    example_data_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_data_list",
      data_list_name: "example",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_data_lists.xlsx",
    },
    example_items_data_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_items_data_list",
      data_list_name: "example_items",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_nav_data_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_items_nav_data_list",
      data_list_name: "example_items_nav",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_radio_data_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_items_radio_data_list",
      data_list_name: "example_items_radio",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_lang_data_list: {
      flow_type: "data_list",
      flow_name: "example_lang_data_list",
      data_list_name: "example_lang",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_templating_list: {
      flow_type: "data_list",
      flow_subtype: "debug",
      flow_name: "example_templating_list",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_advanced_templating.xlsx",
    },
    elderly_nutrients: {
      flow_type: "data_list",
      flow_name: "elderly_nutrients",
      data_list_name: "elderly_nutrients",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    encouraging_messages: {
      flow_type: "data_list",
      flow_name: "encouraging_messages",
      _xlsxPath: "global/campaigns/notifications_inactive.xlsx",
    },
    example_data_pipe_list: {
      flow_type: "data_list",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_list",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes.xlsx",
    },
    example_data_pipe_list_1: {
      flow_type: "data_list",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_list_1",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes_join.xlsx",
    },
    example_data_pipe_list_2: {
      flow_type: "data_list",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_list_2",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes_join.xlsx",
    },
    example_data_pipe_list_3: {
      flow_type: "data_list",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_list_3",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes_join.xlsx",
    },
    example_sheet_defaults_list: {
      flow_type: "data_list",
      flow_name: "example_sheet_defaults_list",
      flow_subtype: "example_sheet_defaults",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_sheet_defaults.xlsx",
    },
    female_heights: {
      flow_type: "data_list",
      flow_name: "female_heights",
      data_list_name: "female_heights",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    female_weights: {
      flow_type: "data_list",
      flow_name: "female_weights",
      data_list_name: "female_weights",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    food_types: {
      flow_type: "data_list",
      flow_name: "food_types",
      data_list_name: "food_types",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    library_data: {
      flow_type: "data_list",
      flow_name: "library_data",
      data_list_name: "library",
      _xlsxPath: "data_lists/homepage/library_data_list.xlsx",
    },
    library_pests: {
      flow_type: "data_list",
      flow_name: "library_pests",
      data_list_name: "library_pests",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    library_plant_pests: {
      flow_type: "data_list",
      flow_name: "library_plant_pests",
      data_list_name: "library_plant_pests",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    library_plants: {
      flow_type: "data_list",
      flow_name: "library_plants",
      data_list_name: "library_plants",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    library_principles: {
      flow_type: "data_list",
      flow_name: "library_principles",
      data_list_name: "library_principles",
      _xlsxPath: "data_lists/homepage/library_data_list.xlsx",
    },
    male_heights: {
      flow_type: "data_list",
      flow_name: "male_heights",
      data_list_name: "male_heights",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    male_weights: {
      flow_type: "data_list",
      flow_name: "male_weights",
      data_list_name: "male_weights",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    nutrients: {
      flow_type: "data_list",
      flow_name: "nutrients",
      data_list_name: "nutrients",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    people_needs: {
      flow_type: "data_list",
      flow_name: "people_needs",
      data_list_name: "people_needs",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    percentiles: {
      flow_type: "data_list",
      flow_name: "percentiles",
      data_list_name: "percentiles",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    pests_illustration: {
      flow_type: "data_list",
      flow_name: "pests_illustration",
      data_list_name: "pests_illustration",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    pests_sections: {
      flow_type: "data_list",
      flow_name: "pests_sections",
      data_list_name: "pests_sections",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    pests_sub_sections: {
      flow_type: "data_list",
      flow_name: "pests_sub_sections",
      data_list_name: "pest_sub_sections",
      _xlsxPath: "data_lists/pests/pests_data_lists.xlsx",
    },
    topics: {
      flow_type: "data_list",
      flow_name: "topics",
      data_list_name: "topics",
      _xlsxPath: "data_lists/homepage/topics_data_list.xlsx",
    },
    understanding_your_food: {
      flow_type: "data_list",
      flow_name: "understanding_your_food",
      data_list_name: "understanding_your_food",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
    women_nutrients: {
      flow_type: "data_list",
      flow_name: "women_nutrients",
      data_list_name: "women_nutrients",
      _xlsxPath: "data_lists/nutrition/nutrition_data_lists.xlsx",
    },
  },
  global: {
    example_glob_override_default: {
      flow_type: "global",
      flow_name: "example_glob_override_default",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_overrides.xlsx",
    },
    example_glob_override_es_sp: {
      flow_type: "global",
      flow_name: "example_glob_override_es_sp",
      flow_subtype: "debug",
      override_target: "example_glob_override_default",
      override_condition: '@fields._app_language.startsWith("es")',
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_overrides.xlsx",
    },
    example_initialise_global: {
      flow_type: "global",
      flow_name: "example_initialise_global",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_global_field.xlsx",
    },
    example_lang_global: {
      flow_type: "global",
      flow_name: "example_lang_global",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
  },
  template: {
    app_menu: {
      flow_type: "template",
      flow_name: "app_menu",
      _xlsxPath: "templates/global/navigation.xlsx",
    },
    example_accordion: {
      flow_type: "template",
      flow_name: "example_accordion",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_accordion.xlsx",
    },
    example_analytics: {
      flow_type: "template",
      flow_name: "example_analytics",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_analytics.xlsx",
    },
    example_asset_sync: {
      flow_type: "template",
      flow_name: "example_asset_sync",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_audio_player: {
      flow_type: "template",
      flow_name: "example_audio_player",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_audio_player.xlsx",
    },
    example_buttons_padding: {
      flow_type: "template",
      flow_name: "example_buttons_padding",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_buttons.xlsx",
    },
    example_calc: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_calc",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_calc.xlsx",
    },
    example_calc_2: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_calc_2",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_calc.xlsx",
    },
    example_calc_3: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_calc_3",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_calc.xlsx",
    },
    example_calc_date: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_calc_date",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_calc.xlsx",
    },
    example_call_global_constants: {
      flow_type: "template",
      flow_name: "example_call_global_constants",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_global_field.xlsx",
    },
    example_changed_action: {
      flow_type: "template",
      flow_name: "example_changed_action",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_changed_action.xlsx",
    },
    example_condition_bottom: {
      flow_type: "template",
      flow_name: "example_condition_bottom",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_condition.xlsx",
    },
    example_condition_top_1: {
      flow_type: "template",
      flow_name: "example_condition_top_1",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_condition.xlsx",
    },
    example_condition_top_2: {
      flow_type: "template",
      flow_name: "example_condition_top_2",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_condition.xlsx",
    },
    example_condition_top_3: {
      flow_type: "template",
      flow_name: "example_condition_top_3",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_condition.xlsx",
    },
    example_data_from_id: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_data_from_id",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_data_lists.xlsx",
    },
    example_data_template: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_data_template",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_data_lists.xlsx",
    },
    example_dates: {
      flow_type: "template",
      flow_name: "example_dates",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_multiple_locals.xlsx",
    },
    example_dg: {
      flow_type: "template",
      flow_name: "example_dg",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_dg.xlsx",
    },
    example_double_ref_comp_var: {
      flow_type: "template",
      flow_name: "example_double_ref_comp_var",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_component_variables.xlsx",
    },
    example_emit: {
      flow_type: "template",
      flow_name: "example_emit",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_go_to_1: {
      flow_type: "template",
      flow_name: "example_go_to_1",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_go_to_2: {
      flow_type: "template",
      flow_name: "example_go_to_2",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_go_to_3: {
      flow_type: "template",
      flow_name: "example_go_to_3",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_items: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_items",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_nav: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_items_nav",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_pipe: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_items_pipe",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_radio: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_items_radio",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_items_unlock: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_items_unlock",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_items.xlsx",
    },
    example_lang_select: {
      flow_type: "template",
      flow_name: "example_lang_select",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_template_1: {
      flow_type: "template",
      flow_name: "example_lang_template_1",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_template_2: {
      flow_type: "template",
      flow_name: "example_lang_template_2",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_template_3: {
      flow_type: "template",
      flow_name: "example_lang_template_3",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_template_pop_1: {
      flow_type: "template",
      flow_name: "example_lang_template_pop_1",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_template_pop_2: {
      flow_type: "template",
      flow_name: "example_lang_template_pop_2",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_translator_mode: {
      flow_type: "template",
      flow_name: "example_lang_translator_mode",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_lang_user_name: {
      flow_type: "template",
      flow_name: "example_lang_user_name",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    example_multiple_locals: {
      flow_type: "template",
      flow_name: "example_multiple_locals",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_multiple_locals.xlsx",
    },
    example_navigation_style: {
      flow_type: "template",
      flow_name: "example_navigation_style",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_navigation_style.xlsx",
    },
    example_navigation_style_2: {
      flow_type: "template",
      flow_name: "example_navigation_style_2",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_navigation_style.xlsx",
    },
    example_nested_comp_var: {
      flow_type: "template",
      flow_name: "example_nested_comp_var",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_component_variables.xlsx",
    },
    example_new_nav_buttons: {
      flow_type: "template",
      flow_name: "example_new_nav_buttons",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_new_nav_buttons.xlsx",
    },
    example_pop_ups: {
      flow_type: "template",
      flow_name: "example_pop_ups",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_radio_group: {
      flow_type: "template",
      flow_name: "example_radio_group",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_radio_group.xlsx",
    },
    example_radio_group_fb_con: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_radio_group_fb_con",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_options_feedback.xlsx",
    },
    example_radio_group_fb_hid: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_radio_group_fb_hid",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_options_feedback.xlsx",
    },
    example_set_fields_in_action: {
      flow_type: "template",
      flow_name: "example_set_fields_in_action",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_global_field.xlsx",
    },
    example_startup_trigger: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_startup_trigger",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_startup.xlsx",
    },
    example_temp_override_default: {
      flow_type: "template",
      flow_name: "example_temp_override_default",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_overrides.xlsx",
      _overrides: {
        example_temp_override_es_sp: '@fields._app_language.startsWith("es")',
      },
    },
    example_temp_override_es_sp: {
      flow_type: "template",
      flow_name: "example_temp_override_es_sp",
      flow_subtype: "debug",
      override_target: "example_temp_override_default",
      override_condition: '@fields._app_language.startsWith("es")',
      comments: "condition used to apply override to all es users (e.g. es_sp)",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_overrides.xlsx",
    },
    example_text: {
      flow_type: "template",
      flow_name: "example_text",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_text_button: {
      flow_type: "template",
      flow_name: "example_text_button",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_condition.xlsx",
    },
    example_tiles: {
      flow_type: "template",
      flow_name: "example_tiles",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_tiles.xlsx",
    },
    example_update_actions: {
      flow_type: "template",
      flow_name: "example_update_actions",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_actions.xlsx",
    },
    example_widget_audio_def: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_widget_audio_def",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_widgets.xlsx",
    },
    example_widget_combo_box: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_widget_combo_box",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_widgets.xlsx",
    },
    example_widget_nesting_audio: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_widget_nesting_audio",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_widgets.xlsx",
    },
    example_widget_radio_button_box: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "example_widget_radio_button_box",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_widgets.xlsx",
    },
    example_workshops_accordion: {
      flow_type: "template",
      flow_name: "example_workshops_accordion",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_accordion.xlsx",
    },
    w_example_ending: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_ending",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_home_practice: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_home_practice",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_listen: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_listen",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_read: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_read",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_stepper: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_stepper",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_talk_together: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_talk_together",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_tools: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_tools",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_tools_activity: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_tools_activity",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    w_example_welcome_together: {
      flow_type: "template",
      flow_subtype: "debug",
      flow_name: "w_example_welcome_together",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_workshop.xlsx",
    },
    example_hardcoded_fields: {
      flow_type: "template",
      flow_subtype: "example_hardcoded",
      flow_name: "example_hardcoded_fields",
      comments: "List of fields automatically populated by app",
      _xlsxPath: "quality_assurance/example_sheets/Copy of hardcoded_variables.xlsx",
    },
    example_sheet_defaults: {
      flow_type: "template",
      flow_name: "example_sheet_defaults",
      flow_subtype: "example_sheet_defaults",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_sheet_defaults.xlsx",
    },
    food_transcript: {
      flow_type: "template",
      flow_name: "food_transcript",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    food_type: {
      flow_type: "template",
      flow_name: "food_type",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    food_types_screen: {
      flow_type: "template",
      flow_name: "food_types_screen",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    help_banner: {
      flow_type: "template",
      flow_name: "help_banner",
      _xlsxPath: "templates/global/navigation.xlsx",
    },
    home_screen: {
      flow_type: "template",
      flow_name: "home_screen",
      _xlsxPath: "templates/global/navigation.xlsx",
    },
    hw_calculator_input: {
      flow_type: "template",
      flow_name: "hw_calculator_input",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    hw_calculator_result: {
      flow_type: "template",
      flow_name: "hw_calculator_result",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    individual_need: {
      flow_type: "template",
      flow_name: "individual_need",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    lib_pest: {
      flow_type: "template",
      flow_name: "lib_pest",
      _xlsxPath: "templates/global/library.xlsx",
    },
    lib_plant: {
      flow_type: "template",
      flow_name: "lib_plant",
      _xlsxPath: "templates/global/library.xlsx",
    },
    lib_principles: {
      flow_type: "template",
      flow_name: "lib_principles",
      _xlsxPath: "templates/global/library.xlsx",
    },
    lib_principles_screen: {
      flow_type: "template",
      flow_name: "lib_principles_screen",
      _xlsxPath: "templates/global/library.xlsx",
    },
    library_collection: {
      flow_type: "template",
      flow_name: "library_collection",
      _xlsxPath: "templates/global/library.xlsx",
    },
    library_screen: {
      flow_type: "template",
      flow_name: "library_screen",
      _xlsxPath: "templates/global/library.xlsx",
    },
    needs_screen: {
      flow_type: "template",
      flow_name: "needs_screen",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    nutrient: {
      flow_type: "template",
      flow_name: "nutrient",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    nutrients_calculator_screen: {
      flow_type: "template",
      flow_name: "nutrients_calculator_screen",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    nutrients_screen: {
      flow_type: "template",
      flow_name: "nutrients_screen",
      _xlsxPath: "templates/global/nutrition_templates.xlsx",
    },
    nutrition_screen: {
      flow_type: "template",
      flow_name: "nutrition_screen",
      _xlsxPath: "templates/global/soil_navigation.xlsx",
    },
    pests_content_templates: {
      flow_type: "template",
      flow_name: "pests_content_templates",
      _xlsxPath: "templates/global/pests_template.xlsx",
    },
    pests_insect_templates: {
      flow_type: "template",
      flow_name: "pests_insect_templates",
      _xlsxPath: "templates/global/pests_template.xlsx",
    },
    pests_screen: {
      flow_type: "template",
      flow_name: "pests_screen",
      _xlsxPath: "templates/global/soil_navigation.xlsx",
    },
    pests_sub_templates: {
      flow_type: "template",
      flow_name: "pests_sub_templates",
      _xlsxPath: "templates/global/pests_template.xlsx",
    },
    principle: {
      flow_type: "template",
      flow_name: "principle",
      _xlsxPath: "templates/global/principles.xlsx",
    },
    principle_buttons: {
      flow_type: "template",
      flow_name: "principle_buttons",
      _xlsxPath: "templates/global/principles.xlsx",
    },
    principles_screen: {
      flow_type: "template",
      flow_name: "principles_screen",
      _xlsxPath: "templates/global/principles.xlsx",
    },
    soil_prac_acts: {
      flow_type: "template",
      flow_name: "soil_prac_acts",
      _xlsxPath: "templates/global/soil_navigation.xlsx",
    },
    soil_principle: {
      flow_type: "template",
      flow_name: "soil_principle",
      _xlsxPath: "templates/global/soil_navigation.xlsx",
    },
    soils_screen: {
      flow_type: "template",
      flow_name: "soils_screen",
      _xlsxPath: "templates/global/soil_navigation.xlsx",
    },
    topic_screen: {
      flow_type: "template",
      flow_name: "topic_screen",
      _xlsxPath: "templates/global/navigation.xlsx",
    },
    topics_screen: {
      flow_type: "template",
      flow_name: "topics_screen",
      _xlsxPath: "templates/global/navigation.xlsx",
    },
  },
  tour: {
    ae_topics_tour: {
      flow_type: "tour",
      flow_name: "ae_topics_tour",
      _xlsxPath: "tours/global/navigation_tours.xlsx",
    },
    example_lang_tour: {
      flow_type: "tour",
      flow_name: "example_lang_tour",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/example_sheets/Copy of example_languages.xlsx",
    },
    home_screen_tour: {
      flow_type: "tour",
      flow_name: "home_screen_tour",
      _xlsxPath: "tours/global/navigation_tours.xlsx",
    },
  },
  data_pipe: {
    common_workshop_task_gs_filter: {
      flow_type: "data_pipe",
      flow_name: "common_workshop_task_gs_filter",
      _xlsxPath: "global/data/workshop_data/workshop_task_groups_data_pipes.xlsx",
    },
    common_workshop_tasks_filter: {
      flow_type: "data_pipe",
      flow_name: "common_workshop_tasks_filter",
      _xlsxPath: "global/data/workshop_data/workshop_tasks_data_pipes.xlsx",
    },
    debug_data_pipe_translate: {
      flow_type: "data_pipe",
      flow_name: "debug_data_pipe_translate",
      flow_subtype: "debug",
      _xlsxPath: "quality_assurance/debug_sheets/to_be_sorted/debug_data_lists.xlsx",
    },
    example_data_pipe: {
      flow_type: "data_pipe",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes.xlsx",
    },
    example_data_pipe_concat: {
      flow_type: "data_pipe",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_concat",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes.xlsx",
    },
    example_data_pipe_concat_2: {
      flow_type: "data_pipe",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_concat_2",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes_join.xlsx",
    },
    example_data_pipe_map: {
      flow_type: "data_pipe",
      flow_subtype: "example_pipe",
      flow_name: "example_data_pipe_map",
      _xlsxPath: "quality_assurance/example_sheets/example_data_pipes.xlsx",
    },
    single_tg_filter: {
      flow_type: "data_pipe",
      flow_name: "single_tg_filter",
      _xlsxPath: "global/data/workshop_data/workshop_task_groups_data_pipes.xlsx",
    },
    workshop_data_pipe: {
      flow_type: "data_pipe",
      flow_name: "workshop_data_pipe",
      _xlsxPath: "global/data/workshop_data/workshop_data_pipes.xlsx",
    },
    workshop_task_gs_append: {
      flow_type: "data_pipe",
      flow_name: "workshop_task_gs_append",
      _xlsxPath: "global/data/workshop_data/workshop_task_groups_data_pipes.xlsx",
    },
    workshop_task_gs_concat: {
      flow_type: "data_pipe",
      flow_name: "workshop_task_gs_concat",
      _xlsxPath: "global/data/workshop_data/workshop_task_groups_data_pipes.xlsx",
    },
    workshop_tasks_append: {
      flow_type: "data_pipe",
      flow_name: "workshop_tasks_append",
      _xlsxPath: "global/data/workshop_data/workshop_tasks_data_pipes.xlsx",
    },
    workshop_tasks_concat: {
      flow_type: "data_pipe",
      flow_name: "workshop_tasks_concat",
      _xlsxPath: "global/data/workshop_data/workshop_tasks_data_pipes.xlsx",
    },
  },
};
