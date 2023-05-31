import { createSlice } from '@reduxjs/toolkit';
import { initialState, defaultState } from './state';
import { updateThemeScheme, updateBodyClass, updateHtmlClass, updateHtmlAttr, updateTitle, updateColorRootVar, updateStorage, updateDomValueBySetting, getStorage } from '../../utilities/setting'
import { setFontFamily } from '../../utilities/root-var'
const _ = require('lodash');
const DefaultSetting = defaultState.setting

const Choices = {
    SchemeChoice: DefaultSetting.theme_scheme.choices,
    ColorChoice: DefaultSetting.theme_color.choices,
    StyleAppearanceChoice: DefaultSetting.theme_style_appearance.choices,
    CardStyle: DefaultSetting.card_style.choices,
    FSChoice: DefaultSetting.theme_font_size.choices,
    Animation: DefaultSetting.theme_transition.choices,
}

const createSettingObj = (state: any) => {
  return {
    saveLocal: state.saveLocal,
    storeKey: state.storeKey,
    setting: _.cloneDeep(state.setting)
  }
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetting: (state: any) => {
      const json = getStorage(state.storeKey);
      if (json === 'none') state.saveLocal = 'none'
      if(json !== null && json !== 'none') {
        state.saveLocal = json.saveLocal
        state.setting = json.setting
      }
      updateDomValueBySetting(state.setting, Choices)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    reset_state: (state, action) => {
      state.setting = defaultState.setting
      updateDomValueBySetting(state.setting, Choices)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    saveLocal: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.saveLocal = action.payload
      }
      const settingObj = {
        saveLocal: state.saveLocal,
        storeKey: state.storeKey,
        setting: _.cloneDeep(state.setting)
      }
      updateStorage(state.saveLocal, state.storeKey, settingObj)
    },
    app_name: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.app_name.value = action.payload
      }
      updateTitle(state.setting.app_name.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_scheme_direction: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme_direction.value = action.payload
      }
      updateHtmlAttr({prop: 'dir',  value: state.setting.theme_scheme_direction.value})
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_scheme: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_scheme.value = action.payload
      }
      updateThemeScheme(state.setting.theme_scheme.value, Choices, state.setting.theme_color)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_style_appearance: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_style_appearance.value = action.payload
      }
      updateBodyClass(Choices.StyleAppearanceChoice, state.setting.theme_style_appearance.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_color: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        _.forEach(action.payload.colors, (value: any, key: any) => {
          state.setting.theme_color.colors[key] = value
        })
        state.setting.theme_color.value = action.payload.value
      }
      updateColorRootVar(state.setting.theme_scheme.value, state.setting.theme_color, Choices.ColorChoice)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_transition: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_transition.value = action.payload
      }
      updateBodyClass(Choices.Animation, state.setting.theme_transition.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    theme_font_size: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.theme_font_size.value = action.payload
      }
      updateHtmlClass(Choices.FSChoice, state.setting.theme_font_size.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    page_layout: (state, action) => {
      state.setting.page_layout.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    header_navbar: (state, action) => {
      state.setting.header_navbar.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    card_style: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.card_style.value = action.payload
      }
      updateBodyClass(Choices.CardStyle, state.setting.card_style.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    header_banner: (state, action) => {
      state.setting.header_banner.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    sidebar_color: (state, action) => {
      state.setting.sidebar_color.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    sidebar_type: (state, action) => {
      state.setting.sidebar_type.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    sidebar_show: (state, action) => {
      state.setting.sidebar_show.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    navbar_show: (state, action) => {
      state.setting.navbar_show.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    sidebar_menu_style: (state, action) => {
      state.setting.sidebar_menu_style.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    footer: (state, action) => {
      state.setting.footer.value = action.payload
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    body_font_family: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.body_font_family.value = action.payload
      }
      setFontFamily('body', state.setting.body_font_family.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    },
    heading_font_family: (state, action) => {
      if(typeof action.payload !== typeof undefined) {
        state.setting.heading_font_family.value = action.payload
      }
      setFontFamily('heading', state.setting.heading_font_family.value)
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    }
  },
});


// Selectors
export const saveLocal = (state: any): String => state.settings.saveLocal;
export const app_name = (state: any): String => state.settings.setting.app_name.value;
export const theme_scheme = (state: any): String => state.settings.setting.theme_scheme.value;
export const theme_scheme_direction = (state: any): String => state.settings.setting.theme_scheme_direction.value;
export const theme_style_appearance = (state: any): String[] => state.settings.setting.theme_style_appearance.value;
export const theme_color = (state: any): String => state.settings.setting.theme_color;
export const theme_transition = (state: any): String => state.settings.setting.theme_transition.value;
export const theme_font_size = (state: any): String => state.settings.setting.theme_font_size.value;
export const page_layout = (state: any): String => state.settings.setting.page_layout.value;
export const header_navbar = (state: any): String => state.settings.setting.header_navbar.value;
export const card_style = (state: any): String => state.settings.setting.card_style.value;
export const header_banner = (state: any): String => state.settings.setting.header_banner.value;
export const sidebar_color = (state: any): String => state.settings.setting.sidebar_color.value;
export const sidebar_type = (state: any): String[] => state.settings.setting.sidebar_type.value;
export const sidebar_show = (state: any): String => state.settings.setting.sidebar_show.value;
export const navbar_show = (state: any): String => state.settings.setting.navbar_show.value;
export const sidebar_menu_style = (state: any): String  => state.settings.setting.sidebar_menu_style.value;
export const footer = (state: any): String => state.settings.setting.footer.value;
export const body_font_family = (state: any): String => state.settings.setting.body_font_family.value;
export const heading_font_family = (state: any): String => state.settings.setting.heading_font_family.value;

export const settingObj = (state: any): String => state.setting;

// Export default reducer
export default settingsSlice.reducer;


