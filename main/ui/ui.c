// This file was generated by SquareLine Studio
// SquareLine Studio version: SquareLine Studio 1.3.2
// LVGL version: 8.3.6
// Project name: bvg_departures

#include "ui.h"
#include "ui_helpers.h"

///////////////////// VARIABLES ////////////////////


// SCREEN: ui_splash
void ui_splash_screen_init(void);
lv_obj_t *ui_splash;
lv_obj_t *ui_splashtitle;
lv_obj_t *ui_splashspinner;


// SCREEN: ui_logs
void ui_logs_screen_init(void);
lv_obj_t *ui_logs;
lv_obj_t *ui_ubahn;
lv_obj_t *ui_heading;
lv_obj_t *ui_logspanel;


// SCREEN: ui_departures
void ui_departures_screen_init(void);
lv_obj_t *ui_departures;
lv_obj_t *ui_line;
lv_obj_t *ui_direction;
lv_obj_t *ui_departure;
lv_obj_t *ui_departurespanel;
lv_obj_t *ui____initial_actions0;

///////////////////// TEST LVGL SETTINGS ////////////////////
#if LV_COLOR_DEPTH != 16
    #error "LV_COLOR_DEPTH should be 16bit to match SquareLine Studio's settings"
#endif
#if LV_COLOR_16_SWAP !=1
    #error "LV_COLOR_16_SWAP should be 1 to match SquareLine Studio's settings"
#endif

///////////////////// ANIMATIONS ////////////////////

///////////////////// FUNCTIONS ////////////////////

///////////////////// SCREENS ////////////////////

void ui_init( void )
{LV_EVENT_GET_COMP_CHILD = lv_event_register_id();

lv_disp_t *dispp = lv_disp_get_default();
lv_theme_t *theme = lv_theme_default_init(dispp, lv_palette_main(LV_PALETTE_BLUE), lv_palette_main(LV_PALETTE_RED), true, LV_FONT_DEFAULT);
lv_disp_set_theme(dispp, theme);
ui_splash_screen_init();
ui_logs_screen_init();
ui_departures_screen_init();
ui____initial_actions0 = lv_obj_create(NULL);
lv_disp_load_scr( ui_splash);
}
