import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Home_Header_": {
      "callbacks": {}
    },
    "Home_Header_Flex_": {
      "callbacks": {}
    },
    "Home_Header_Flex_R_": {
      "callbacks": {}
    },
    "Home_Header_Flex_L_": {
      "callbacks": {}
    },
    "company_logo": {
      "callbacks": {}
    },
    "header_items": {
      "callbacks": {}
    },
    "Home_Banner_": {
      "callbacks": {}
    },
    "Home_Banner_L_": {
      "callbacks": {}
    },
    "Home_Banner_L_Para_": {
      "callbacks": {}
    },
    "Home_Banner_L_Headings_": {
      "callbacks": {}
    },
    "Home_Banner_L_Btn_": {
      "callbacks": {}
    },
    "Home_Banner_L_Btn_Flex_": {
      "callbacks": {}
    },
    "Home_Banner_R_": {
      "callbacks": {}
    },
    "Home_Banner_R__Bg_": {
      "callbacks": {}
    },
    "Companies_logo_flex_": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_1": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_2": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_2_Doordash_": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_2_Postmates_": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_2_Rappi_": {
      "callbacks": {}
    },
    "Companies_logo_flex_Rows_2_Grubhub_": {
      "callbacks": {}
    },
    "Browse_": {
      "callbacks": {}
    },
    "Browse_foot_": {
      "callbacks": {}
    },
    "Browse_foot_Flex_": {
      "callbacks": {}
    },
    "Browse_Heading_": {
      "callbacks": {}
    },
    "Browse_body_": {
      "callbacks": {}
    },
    "Browse_body_4": {
      "callbacks": {}
    },
    "Browse_body_4_Para2_": {
      "callbacks": {}
    },
    "Browse_body_4_Para1_": {
      "callbacks": {}
    },
    "Browse_body_4_h1_": {
      "callbacks": {}
    },
    "Browse_body_4_image_": {
      "callbacks": {}
    },
    "Browse_body_1": {
      "callbacks": {}
    },
    "Browse_body_1_image_": {
      "callbacks": {}
    },
    "Browse_body_1_h1": {
      "callbacks": {}
    },
    "Browse_body_1_para_": {
      "callbacks": {}
    },
    "Browse_body_1_Para_2_": {
      "callbacks": {}
    },
    "Browse_body_2": {
      "callbacks": {}
    },
    "Browse_body_2_image_": {
      "callbacks": {}
    },
    "Browse_body_2_h1_": {
      "callbacks": {}
    },
    "Browse_body_2_Para1_": {
      "callbacks": {}
    },
    "Browse_body_2_Para2_": {
      "callbacks": {}
    },
    "Browse_body_3": {
      "callbacks": {}
    },
    "Browse_body_3_image_": {
      "callbacks": {}
    },
    "Browse_body_3_h1_": {
      "callbacks": {}
    },
    "Browse_body_3_Para1_": {
      "callbacks": {}
    },
    "Browse_body_3_Para2_": {
      "callbacks": {}
    },
    "About_us_": {
      "callbacks": {}
    },
    "About_us_Left_": {
      "callbacks": {}
    },
    "About_us_Left_main_": {
      "callbacks": {}
    },
    "About_us_Left_main_Flex_": {
      "callbacks": {}
    },
    "About_us_Left_main_Flex_Head_": {
      "callbacks": {}
    },
    "About_us_Left_main_Flex_Location_": {
      "callbacks": {}
    },
    "location_pin": {
      "callbacks": {}
    },
    "About_us_Left_main_Flex_Mobile_": {
      "callbacks": {}
    },
    "mobile_pin": {
      "callbacks": {}
    },
    "About_us_Left_main_Flex_Email_": {
      "callbacks": {}
    },
    "email_id": {
      "callbacks": {}
    },
    "About_us_Right_": {
      "callbacks": {}
    },
    "Home_Contact_Right_header": {
      "callbacks": {}
    },
    "Home_Contact_Right_sec_1": {
      "callbacks": {}
    },
    "Home_Contact_Right_sec_2": {
      "callbacks": {}
    },
    "Home_Contact_Right_btn": {
      "callbacks": {}
    },
    "btn_flex_": {
      "callbacks": {}
    },
    "Item_lists_": {
      "callbacks": {}
    },
    "Item_lists_Head_": {
      "callbacks": {}
    },
    "Items_list_Para_": {
      "callbacks": {}
    },
    "Items_list_Items_uper_": {
      "callbacks": {}
    },
    "Items_list_items_1_": {
      "callbacks": {}
    },
    "price1": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "items_1_h1_": {
      "callbacks": {}
    },
    "items_1_Para_": {
      "callbacks": {}
    },
    "Items_list_items_3_": {
      "callbacks": {}
    },
    "items_3_Para_txt_": {
      "callbacks": {}
    },
    "items_3_h1_": {
      "callbacks": {}
    },
    "price3": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Items_list_items_2_": {
      "callbacks": {}
    },
    "items_2_Para_": {
      "callbacks": {}
    },
    "items_2_h1_": {
      "callbacks": {}
    },
    "price2": {
      "callbacks": {}
    },
    "price2_bg": {
      "callbacks": {}
    },
    "Items_list_items_4_": {
      "callbacks": {}
    },
    "price4": {
      "callbacks": {}
    },
    "Flex743": {
      "callbacks": {}
    },
    "items_4_h1_": {
      "callbacks": {}
    },
    "items_4_Para_": {
      "callbacks": {}
    },
    "Items_list_foot_": {
      "callbacks": {}
    },
    "Items_list_foot_btns_": {
      "callbacks": {}
    },
    "Items_list_Items_lower_": {
      "callbacks": {}
    },
    "Items_list_items_6_": {
      "callbacks": {}
    },
    "price6_": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "items_6_h1_": {
      "callbacks": {}
    },
    "items_6_Para_": {
      "callbacks": {}
    },
    "Items_list_items_7_": {
      "callbacks": {}
    },
    "price7_": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "items_7_h1_": {
      "callbacks": {}
    },
    "items_7_Para_": {
      "callbacks": {}
    },
    "Items_list_items_8_": {
      "callbacks": {}
    },
    "Items_list_items_8_flex": {
      "callbacks": {}
    },
    "price8_": {
      "callbacks": {}
    },
    "Flex176": {
      "callbacks": {}
    },
    "items_8_h1_": {
      "callbacks": {}
    },
    "items_8_Para_": {
      "callbacks": {}
    },
    "Items_list_items_5_": {
      "callbacks": {}
    },
    "items_5_Para_": {
      "callbacks": {}
    },
    "items_5_h1_": {
      "callbacks": {}
    },
    "Price_5": {
      "callbacks": {}
    },
    "price_5_txt_": {
      "callbacks": {}
    },
    "Best_burger_": {
      "callbacks": {}
    },
    "Best_burger_L_": {
      "callbacks": {}
    },
    "Best_burger_L_head_": {
      "callbacks": {}
    },
    "Best_burger_L_para_": {
      "callbacks": {}
    },
    "Best_burger_L_btns_": {
      "callbacks": {}
    },
    "Best_burger_L_button_": {
      "callbacks": {}
    },
    "Best_burger_R_": {
      "callbacks": {}
    },
    "Client_review_": {
      "callbacks": {}
    },
    "review_no_": {
      "callbacks": {}
    },
    "Client_say_": {
      "callbacks": {}
    },
    "client_review_para": {
      "callbacks": {}
    },
    "client_main_body_": {
      "callbacks": {}
    },
    "client_left_": {
      "callbacks": {}
    },
    "client_main_review": {
      "callbacks": {}
    },
    "client_main_review_star_": {
      "callbacks": {}
    },
    "client_main_review_h1_": {
      "callbacks": {}
    },
    "client_main_review_para_": {
      "callbacks": {}
    },
    "client_dp_name": {
      "callbacks": {}
    },
    "client_main_review_profile_": {
      "callbacks": {}
    },
    "client_main_review_name_": {
      "callbacks": {}
    },
    "client_main_review_matt_": {
      "callbacks": {}
    },
    "client_main_review_ca_": {
      "callbacks": {}
    },
    "client_right_": {
      "callbacks": {}
    },
    "client_footer_": {
      "callbacks": {}
    },
    "client_footer_btn_": {
      "callbacks": {}
    },
    "Articles_": {
      "callbacks": {}
    },
    "Articles_header_": {
      "callbacks": {}
    },
    "Articles_header_R_": {
      "callbacks": {}
    },
    "Articles_header_L_": {
      "callbacks": {}
    },
    "Articles_main_": {
      "callbacks": {}
    },
    "Article_main_L_side_": {
      "callbacks": {}
    },
    "Article_main_L_side_1_": {
      "callbacks": {}
    },
    "Article_main_L_side_4_": {
      "callbacks": {}
    },
    "Article_main_L_side_2_": {
      "callbacks": {}
    },
    "Article_main_L_side_3_": {
      "callbacks": {}
    },
    "article_main_right_side": {
      "callbacks": {}
    },
    "article_upper_side": {
      "callbacks": {}
    },
    "article_upper_one_one": {
      "callbacks": {}
    },
    "Flex248": {
      "callbacks": {}
    },
    "Flex249": {
      "callbacks": {}
    },
    "Flex251": {
      "callbacks": {}
    },
    "article_upper_one_two": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Flex254": {
      "callbacks": {}
    },
    "Flex255": {
      "callbacks": {}
    },
    "article_lower_side": {
      "callbacks": {}
    },
    "article_lower_two_one": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "article_lower_two_two": {
      "callbacks": {}
    },
    "Flex261": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex263": {
      "callbacks": {}
    },
    "Form_area_": {
      "callbacks": {}
    },
    "Form_area_L_": {
      "callbacks": {}
    },
    "Form_area_L_para_": {
      "callbacks": {}
    },
    "Form_area_L_h1_": {
      "callbacks": {}
    },
    "Form_area_L_location_": {
      "callbacks": {}
    },
    "Form_area_L_location_text_": {
      "callbacks": {}
    },
    "Form_area_L_Mnumber_": {
      "callbacks": {}
    },
    "Form_area_L_Mnumber_text_": {
      "callbacks": {}
    },
    "Form_area_L_email_flex_": {
      "callbacks": {}
    },
    "Form_area_L_email_text_": {
      "callbacks": {}
    },
    "Form_area_R_": {
      "callbacks": {}
    },
    "Form_area_R_fill_": {
      "callbacks": {}
    },
    "Form_area_R_fill_1_": {
      "callbacks": {}
    },
    "Form_third_row": {
      "callbacks": {}
    },
    "third_row_R": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "third_row_L": {
      "callbacks": {}
    },
    "Flex281": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Form_first_row_": {
      "callbacks": {}
    },
    "first_row_L": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "first_row_R": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Form_second_row": {
      "callbacks": {}
    },
    "second_row_L": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "second_row_R": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Flex295": {
      "callbacks": {}
    },
    "Form_fourth_row": {
      "callbacks": {}
    },
    "fourth_row_L": {
      "callbacks": {}
    },
    "Add_a_note_area_": {
      "callbacks": {}
    },
    "Add_a_note_": {
      "callbacks": {}
    },
    "Form_area_R_fill_btn_": {
      "callbacks": {}
    },
    "Our_articles_follow_us_": {
      "callbacks": {}
    },
    "Follow_1_": {
      "callbacks": {}
    },
    "Follow_head_": {
      "callbacks": {}
    },
    "Follow_btn_": {
      "callbacks": {}
    },
    "Follow_2_": {
      "callbacks": {}
    },
    "Follow_images_": {
      "callbacks": {}
    },
    "Follow_images_3i_": {
      "callbacks": {}
    },
    "Follow_images_3a_": {
      "callbacks": {}
    },
    "Follow_images_3a_1_": {
      "callbacks": {}
    },
    "Follow_images_3a_2_": {
      "callbacks": {}
    },
    "Follow_images_3b_": {
      "callbacks": {}
    },
    "Follow_images_3b_2_": {
      "callbacks": {}
    },
    "Follow_images_3b_1_": {
      "callbacks": {}
    },
    "Home_footer_": {
      "callbacks": {}
    },
    "Footer_left_": {
      "callbacks": {}
    },
    "Footer_left_h1_": {
      "callbacks": {}
    },
    "Footer_left_para_": {
      "callbacks": {}
    },
    "Footer_left_stars_": {
      "callbacks": {}
    },
    "Footer_mid_section": {
      "callbacks": {}
    },
    "Footer_mid_Left_": {
      "callbacks": {}
    },
    "footer_mid_Left_1": {
      "callbacks": {}
    },
    "footer_mid_Left_2": {
      "callbacks": {}
    },
    "footer_mid_Left_7": {
      "callbacks": {}
    },
    "footer_mid_Left_8": {
      "callbacks": {}
    },
    "footer_mid_Left_5": {
      "callbacks": {}
    },
    "footer_mid_Left_6": {
      "callbacks": {}
    },
    "footer_mid_Left_3": {
      "callbacks": {}
    },
    "footer_mid_Left_4": {
      "callbacks": {}
    },
    "Footer_mid_right_": {
      "callbacks": {}
    },
    "footer_mid_R_4": {
      "callbacks": {}
    },
    "footer_mid_R_3": {
      "callbacks": {}
    },
    "footer_mid_R_6": {
      "callbacks": {}
    },
    "footer_mid_R_5": {
      "callbacks": {}
    },
    "footer_mid_R_8": {
      "callbacks": {}
    },
    "footer_mid_R_7": {
      "callbacks": {}
    },
    "footer_mid_R_2": {
      "callbacks": {}
    },
    "footer_mid_R_1": {
      "callbacks": {}
    },
    "Follow_insta_": {
      "callbacks": {}
    },
    "Follow_insta_img_2_": {
      "callbacks": {}
    },
    "Follow_insta_img_2_21_": {
      "callbacks": {}
    },
    "Follow_insta_img_2_22_": {
      "callbacks": {}
    },
    "Follow_insta_img_1_": {
      "callbacks": {}
    },
    "Follow_insta_img_1_12_": {
      "callbacks": {}
    },
    "Follow_insta_img_1_11_": {
      "callbacks": {}
    },
    "Follow_insta_head_": {
      "callbacks": {}
    },
    "Home_Header_Flex_R_Primary_btn_": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Header_Flex_R_Secondary_bt": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "header_cart": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "header_home": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "header_about": {
      "custom": {
        "text": "About",
        "url": "/About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "header_menu": {
      "custom": {
        "text": "Menu",
        "url": "/Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "header_page": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_L_Para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_L_Headings_Lower_": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_L_Headings_Upper_": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_L_Btn_Flex_1_": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_L_Btn_Flex_2_": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Banner_R_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/home_burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Companies_logo_flex_Rows_1_Text_": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/doorash-.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/postmates.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo-rappi.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/grubhub.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_foot_Flex_R_Button": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_foot_Flex_L_Button": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_Heading_txt_": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_4_Para2_txt_": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_4_Para1_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_4_h1_txt_": {
      "custom": {
        "text": "Deserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_4_image_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/desserts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_1_image_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/breakfasts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_1_h1_txt_": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_1_para_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_1_Para_2_txt_": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_2_image_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dishes.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_2_h1_Txt_": {
      "custom": {
        "text": "Main dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_2_Para1_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_2_Para2_txt_": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_3_image_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/drinks.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_3_h1_txt_": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_3_Para1_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Browse_body_3_Para2_txt_": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_us_Left_main_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about-home.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "address_header": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Location_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/location.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_address_txt_": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Call": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/phone.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "mobile_no": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "mail_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/email.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "email_id_adress": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Contact_Right_aboutUs": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Contact_Right_First_para": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Contact_Right_sec_para": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_btn_R_": {
      "custom": {
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_btn_L_": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Items_list_Heading_": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Items_list_Para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Burger_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic-burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_1_h1_txt_": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_1_Para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Classic_fries": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Milkshake_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_2_Para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_2_h1_txt_": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "price2_txt_": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pancake_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox318": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_4_h1_txt_": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "items_4_Para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Items_list_foot_btns_L_": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Items_list_foot_btns_R_": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Chicken_burger_": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "para_6_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Egg_toast_": {
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "regular_soda_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Regular_Soda": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Items_list_items_8_para_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Ice_cream_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "item_5_Txt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Ice_cream_txt_": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "price5_txt_": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Best_burger_L_head_txt_": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Best_burger_L_para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Best_burger_L_btns_2_": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Best_burger_L_btns_1_": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Best_burger_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "review_no_1_": {
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "clinet_say_txt_": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_left_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_star_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_star_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_star_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_star_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_star_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_prfile_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_matt_txt": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_main_review_ca_txt_": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_right__img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_footer_btn_R_": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "client_footer_btn_L_": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Articles_header_R_txt_": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Articles_header_L_txt_": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Article_main_L_side_1_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbe9e3823ad75e50cfc8d_blog-post-featured-image-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Article_main_L_side_4_img_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Article_main_L_side_2_img_": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Article_main_L_side_3_img_": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbcaac6330b375d0f90ca_blog-post-featured-image-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc8ef398638f6395578f_blog-post-featured-image-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc58e6083f444f1883f5_blog-post-featured-image-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbb79aa873fb79780189b_blog-post-featured-image-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_h1_txt_": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_location_Img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/location.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_location_txt_": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_Mnumber_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/phone.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_Mnumber_text_txt_": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_email_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/email.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Form_area_L_email_txt_": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "Ex 2:00PM"
      },
      "callbacks": {}
    },
    "TextBox116": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Day and month"
      },
      "callbacks": {}
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "TextBox118": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "TextBox119": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input6": {
      "custom": {
        "value": "",
        "placeholder": "(123)456-789"
      },
      "callbacks": {}
    },
    "TextBox120": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input7": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "TextBox121": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Add_a_note_input_": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us?"
      },
      "callbacks": {}
    },
    "Add_a_note_txt_": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button24": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "follow_h1_": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "follow_us_btn_": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_images_1_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c40b5fd9150a07d9ad_Instagram-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_images_2_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "burger_coc_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "french_fries__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "coc_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "hot_dog_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_h1_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_stars_img_1_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_stars_img_2_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_stars_img_3_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_stars_img_4_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Footer_left_stars_img_5_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_1": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_2": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_7": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_8": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_5": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_6": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_3": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_L_4": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_4_txt_": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_3_txt_": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_6_txt_": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_5_txt_": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_8_txt": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_7_txt": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_2_txt_": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "footer_mid_R_1_txt_": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_insta_img_2_21_txt_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_insta_img_2_22_txt__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_insta_img_1_12_txt_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_insta_img_1_11_txt_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Follow_insta_head_txt_": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "About": {
    "About_header_": {
      "callbacks": {}
    },
    "About_header_Flex_": {
      "callbacks": {}
    },
    "About_header_Flex_Left_": {
      "callbacks": {}
    },
    "About_header_Flex_Left_Items_": {
      "callbacks": {}
    },
    "About_header_Logo": {
      "callbacks": {}
    },
    "About_header_Flex_Right_": {
      "callbacks": {}
    },
    "About_story_": {
      "callbacks": {}
    },
    "About_story_Left_": {
      "callbacks": {}
    },
    "About_story_Right_": {
      "callbacks": {}
    },
    "About_second_story_": {
      "callbacks": {}
    },
    "About_second_story_Left_": {
      "callbacks": {}
    },
    "About_second_story_Left__companies_": {
      "callbacks": {}
    },
    "About_companies_Flex_": {
      "callbacks": {}
    },
    "About_companies_Flex_Left_": {
      "callbacks": {}
    },
    "About_companies_Flex_Right_": {
      "callbacks": {}
    },
    "Funder_met_and_first_burger_": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_First_row_": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_First_row_Left_": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_First_row_Right_": {
      "callbacks": {}
    },
    "Flex627": {
      "callbacks": {}
    },
    "Flex628": {
      "callbacks": {}
    },
    "Flex629": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_second_row_": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_second_row_Left_": {
      "callbacks": {}
    },
    "Flex638": {
      "callbacks": {}
    },
    "Flex639": {
      "callbacks": {}
    },
    "Flex640": {
      "callbacks": {}
    },
    "Flex644": {
      "callbacks": {}
    },
    "Founder_met_and_first_burger_second_row_Right_": {
      "callbacks": {}
    },
    "Meet_our_team_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Heading_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Para_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_1_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_1_Name_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_1_Post_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_1_Post_Msg_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_2_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_2_Msg_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_2_Post_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_2_Name_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_3_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_3_Msg_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_3_Post_": {
      "callbacks": {}
    },
    "Meet_our_team_Flex_Pictures_3_Name_": {
      "callbacks": {}
    },
    "The_value_": {
      "callbacks": {}
    },
    "The_value_Heading_": {
      "callbacks": {}
    },
    "The_value_Row_1_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex1_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex1_h1_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex1_h2_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex2_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex2_h2__": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex2_h1_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex_3_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex3_h2_": {
      "callbacks": {}
    },
    "The_value_Row_1_Flex3__h1_": {
      "callbacks": {}
    },
    "The_value_Row_2_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex3_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex3_h1_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex3_h2_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex2_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex2_h1_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex2_h2__": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex1_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex1_h2_": {
      "callbacks": {}
    },
    "The_value_Row_2_Flex1_h1_": {
      "callbacks": {}
    },
    "About_our_article_": {
      "callbacks": {}
    },
    "About_our_article_Images_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_Row2_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_Row2_21_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_Row2_22_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_row1_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_Row1_12_": {
      "callbacks": {}
    },
    "About_our_article_Images_Flex_Rimage_Row1_11_": {
      "callbacks": {}
    },
    "Our_article_Head_": {
      "callbacks": {}
    },
    "Our_article_Head_R_": {
      "callbacks": {}
    },
    "Our_article_Head_L_": {
      "callbacks": {}
    },
    "About_Footer_": {
      "callbacks": {}
    },
    "About_Footer_R_": {
      "callbacks": {}
    },
    "About__Footer_R_Head": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_1_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_1_11_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_1_12_img_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_2_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_2_22_img_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3__Footer_R_2_21_img_": {
      "callbacks": {}
    },
    "About_Footer_M_": {
      "callbacks": {}
    },
    "About_Footer_M_C2_": {
      "callbacks": {}
    },
    "About_Footer_M_C2_1": {
      "callbacks": {}
    },
    "About_Footer_Footer_M": {
      "callbacks": {}
    },
    "About_Footer_M_C2_7": {
      "callbacks": {}
    },
    "About_Footer_M_C2_8": {
      "callbacks": {}
    },
    "About_Footer_M_C2_5": {
      "callbacks": {}
    },
    "About_Footer_M_C2_6": {
      "callbacks": {}
    },
    "About_Footer_M_C2_3": {
      "callbacks": {}
    },
    "About_Footer_M_C2_4": {
      "callbacks": {}
    },
    "About_Footer_M_C1_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_4_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_3_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_6_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_5_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_8_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_7_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_2_": {
      "callbacks": {}
    },
    "About_Footer_M_C1_1_": {
      "callbacks": {}
    },
    "About_Footer_L_": {
      "callbacks": {}
    },
    "About_Footer_L_img_": {
      "callbacks": {}
    },
    "About_Footer_L_Para_": {
      "callbacks": {}
    },
    "About_Footer_L_Head_": {
      "callbacks": {}
    },
    "About_header_Flex_Left_Items_Pages_": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Flex_Left_Items_Menu_": {
      "custom": {
        "text": "Menu",
        "url": "/Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Flex_Left_Items_About_": {
      "custom": {
        "text": "About",
        "url": "/About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Flex_Left_Items_Home_": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Flex_Left_Items_Cart_": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Logo_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "About_header_Flex_Right_Btn_color_": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_header_Flex_Right_Btn_white_": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_story_Left_Heading_": {
      "custom": {
        "text": "Our story started back in 1984."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_story_Left_Para_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_story_Right_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f5c0777f87861b75f04b6_about-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_second_story_Left__second_story_Right_": {
      "callbacks": {}
    },
    "About_second_story_Left_Image__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f5c07e5e4170baa5f8a00_about-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_companies_Flex_Left_Text_": {
      "custom": {
        "text": "As seen on:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_companies_Flex_Right_Doordash_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/doorash-.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_companies_Flex_Right_Postmates_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/postmates.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_companies_Flex_Right_Rappi_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo-rappi.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_companies_Flex_Right_Uber_eatss__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61774e5435a7c85e46829bb6_logo-uber-eats-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image145": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f660c19ab202271ae7d39_about-03-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button40": {
      "custom": {
        "text": "Contact us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox254": {
      "custom": {
        "text": "How our founder met"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox256": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaquis nostrud exercitation."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox262": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaquis nostrud exercitation."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox263": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim veniam, quis nostrud exercitation sit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox264": {
      "custom": {
        "text": "The story of our first burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button41": {
      "custom": {
        "text": "Contact us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image147": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f660c19ab202271ae7d39_about-03-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Heading_Text_": {
      "custom": {
        "text": "Meet our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Para_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_1_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f69a9ad345824d53e25e2_avatar-john-carter-restaurante-x-template.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox267": {
      "custom": {
        "text": "John Carter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_1_Post_Text_": {
      "custom": {
        "text": "Co-founder- and Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_1_Msg_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_2_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f698536c8cb350c66683f_avatar-andy-smith-restaurante-x-template.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_2_Msg_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_2_Post_Text_": {
      "custom": {
        "text": "Co-founder- and Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_2_Name_Text_": {
      "custom": {
        "text": "Andy Smith"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_3_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616f693a063598948d5ec9df_avatar-sophie-moore-restaurante-x-template.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_3_Msg_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_3_Post_Name_": {
      "custom": {
        "text": "Head of Staff"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Meet_our_team_Flex_Pictures_3_Name_Text_": {
      "custom": {
        "text": "Sophie Moore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Heading_Text_": {
      "custom": {
        "text": "The value that drive everything we do"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex1_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe31b8d640df751823f_about-value-01-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex1_h1_Text_": {
      "custom": {
        "text": "Love & Passion"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex1_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex2_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe3daefd83a382fcf9c_about-value-02-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex2_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex2_h1_Text_": {
      "custom": {
        "text": "Flavour"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex3_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe31b8d64c5b3518240_about-value-03-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex3_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_1_Flex3_h1_Text_": {
      "custom": {
        "text": "Care & craft"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex3_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe31a1db639dfab7fb1_about-value-06-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex3_h1_Text_": {
      "custom": {
        "text": "Quality"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex3_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex2_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe3bc63570abbc45d37_about-value-05-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex2_h1_Text_": {
      "custom": {
        "text": "Teamwork"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex2_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex1_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61705fe33ae248299be3a6b4_about-value-04-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex1_h2_Text_": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "The_value_Row_2_Flex1_h1_Text_": {
      "custom": {
        "text": "Customer-first"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_our_article_Images_Flex_Mimage_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_our_article_Images_Flex_Limage_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c40b5fd9150a07d9ad_Instagram-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_our_article_Images_Flex_Rimage_Row2_21_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_our_article_Images_Flex_Rimage_Row2_22_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_our_article_Images_Flex_Rimage_Row1_12_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_our_article_Images_Flex_Rimage_Row1_11_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Our_article_Head_R_Text_": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Our_article_Head_L_Text_": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3__Footer_R_Head_Text_": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3__Footer_R_1_11_Img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3__Footer_R_1_12_img_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3__Footer_R_2_22_imgg_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3__Footer_R_2_21_imgg_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_1_Text": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_Footer_M_Text": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_7_Text": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_8_Text": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_5_Text": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_6_txt_": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_3_Text": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C2_4_Text": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_4_txt_": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_3_txt_": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox310": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox311": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox312": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox313": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_2_txt_": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_M_C1_1_txt_": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_img_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_img_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_img_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_img_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_img_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_Para_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Footer_L_Head_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Menu": {
    "Menu_Header_1_": {
      "callbacks": {}
    },
    "Menu_Flex_": {
      "callbacks": {}
    },
    "Menu_Flex_L_": {
      "callbacks": {}
    },
    "Menu_Flex_items_": {
      "callbacks": {}
    },
    "Menu_Flex_logo_": {
      "callbacks": {}
    },
    "Menu_Flex_R_": {
      "callbacks": {}
    },
    "Order_via_app_": {
      "callbacks": {}
    },
    "order_h1_": {
      "callbacks": {}
    },
    "Order_para_": {
      "callbacks": {}
    },
    "order_via_app_apps_": {
      "callbacks": {}
    },
    "Order_via_app_first_row_": {
      "callbacks": {}
    },
    "uber_eats_": {
      "callbacks": {}
    },
    "_uber_": {
      "callbacks": {}
    },
    "Door_dash_": {
      "callbacks": {}
    },
    "Door_": {
      "callbacks": {}
    },
    "Post_mates_": {
      "callbacks": {}
    },
    "post_": {
      "callbacks": {}
    },
    "Rappi_": {
      "callbacks": {}
    },
    "_Rappi__": {
      "callbacks": {}
    },
    "order_via_app_second_row_": {
      "callbacks": {}
    },
    "Go_puff_": {
      "callbacks": {}
    },
    "_go_puff__": {
      "callbacks": {}
    },
    "Seam_less_": {
      "callbacks": {}
    },
    "Seam_": {
      "callbacks": {}
    },
    "Didi_Food_": {
      "callbacks": {}
    },
    "didi_": {
      "callbacks": {}
    },
    "Grub_hub_": {
      "callbacks": {}
    },
    "Grub_img_": {
      "callbacks": {}
    },
    "Our_menu_": {
      "callbacks": {}
    },
    "Our_menu_Row_2__": {
      "callbacks": {}
    },
    "Our_Menu_Image_5_": {
      "callbacks": {}
    },
    "Ice_cream_price_": {
      "callbacks": {}
    },
    "Flex416": {
      "callbacks": {}
    },
    "Ice_cream_h1_": {
      "callbacks": {}
    },
    "Ice_cream_para__": {
      "callbacks": {}
    },
    "Our_Menu_Image_8_": {
      "callbacks": {}
    },
    "soda_Flex_": {
      "callbacks": {}
    },
    "soda_Para_": {
      "callbacks": {}
    },
    "soda_h1_": {
      "callbacks": {}
    },
    "soda_img_": {
      "callbacks": {}
    },
    "Flex414": {
      "callbacks": {}
    },
    "Our_Menu_Image_7_": {
      "callbacks": {}
    },
    "egg_price_h1_para_": {
      "callbacks": {}
    },
    "egg_price_h1_": {
      "callbacks": {}
    },
    "egg_price_": {
      "callbacks": {}
    },
    "egg_price_text_": {
      "callbacks": {}
    },
    "Our_Menu_Image_6_": {
      "callbacks": {}
    },
    "chick_burger_para__": {
      "callbacks": {}
    },
    "chick_burger_h1__": {
      "callbacks": {}
    },
    "chick_burger_price_": {
      "callbacks": {}
    },
    "chick_burger_price_text_": {
      "callbacks": {}
    },
    "Our_menu_Row_1_": {
      "callbacks": {}
    },
    "Our_Menu_Image_2": {
      "callbacks": {}
    },
    "Our_Menu_Price_2": {
      "callbacks": {}
    },
    "milkshake_price_": {
      "callbacks": {}
    },
    "milkshake_h1_": {
      "callbacks": {}
    },
    "milkshake_para_": {
      "callbacks": {}
    },
    "Our_Menu_Image_3": {
      "callbacks": {}
    },
    "Our_Menu_Price_3": {
      "callbacks": {}
    },
    "Flex423": {
      "callbacks": {}
    },
    "Classic_fries_h1__": {
      "callbacks": {}
    },
    "Classic_fries_para_": {
      "callbacks": {}
    },
    "Our_Menu_Image_4": {
      "callbacks": {}
    },
    "Our_Menu_Flex_4": {
      "callbacks": {}
    },
    "Pancake_price__": {
      "callbacks": {}
    },
    "Pancake_price__text_": {
      "callbacks": {}
    },
    "pancake_h1__": {
      "callbacks": {}
    },
    "Pancake_price__para__": {
      "callbacks": {}
    },
    "Our_Menu_Image_1_": {
      "callbacks": {}
    },
    "para1_": {
      "callbacks": {}
    },
    "Classic_text_": {
      "callbacks": {}
    },
    "Our_Menu_Price_1": {
      "callbacks": {}
    },
    "burger_price_": {
      "callbacks": {}
    },
    "Our_menu__Para__": {
      "callbacks": {}
    },
    "Our_menu_head_": {
      "callbacks": {}
    },
    "Our_menu_types_": {
      "callbacks": {}
    },
    "Menu_Footer__": {
      "callbacks": {}
    },
    "Menu_Footer__R": {
      "callbacks": {}
    },
    "Menu_Footer__R_head_": {
      "callbacks": {}
    },
    "Menu_Footer__R_1": {
      "callbacks": {}
    },
    "Menu_Footer__R_1_1": {
      "callbacks": {}
    },
    "Menu_Footer__R_1_2": {
      "callbacks": {}
    },
    "Menu_Footer__R_2": {
      "callbacks": {}
    },
    "Menu_Footer__R_2_2": {
      "callbacks": {}
    },
    "Menu_Footer__R_2_1": {
      "callbacks": {}
    },
    "Menu_Footer__M": {
      "callbacks": {}
    },
    "Menu_Footer__MFlex2_": {
      "callbacks": {}
    },
    "Menu_FM_11": {
      "callbacks": {}
    },
    "Menu_FM_12": {
      "callbacks": {}
    },
    "Menu_FM_17": {
      "callbacks": {}
    },
    "Menu_FM_18": {
      "callbacks": {}
    },
    "Menu_FM_15": {
      "callbacks": {}
    },
    "Menu_FM_16": {
      "callbacks": {}
    },
    "Menu_FM_13": {
      "callbacks": {}
    },
    "Menu_FM_14": {
      "callbacks": {}
    },
    "Menu_Footer__MFlex1_": {
      "callbacks": {}
    },
    "Menu_FM_4": {
      "callbacks": {}
    },
    "Menu_FM_3": {
      "callbacks": {}
    },
    "Menu_FM_6": {
      "callbacks": {}
    },
    "Menu_FM_5Text": {
      "callbacks": {}
    },
    "Menu_FM_8": {
      "callbacks": {}
    },
    "Menu_FM_7": {
      "callbacks": {}
    },
    "Menu_FM_2": {
      "callbacks": {}
    },
    "Menu_FM_1": {
      "callbacks": {}
    },
    "Menu_Footer__L": {
      "callbacks": {}
    },
    "restro_stars_": {
      "callbacks": {}
    },
    "restro_para_1": {
      "callbacks": {}
    },
    "restro_X_": {
      "callbacks": {}
    },
    "Pages_Link": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_Link": {
      "custom": {
        "text": "Menu",
        "url": "/Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About_Link": {
      "custom": {
        "text": "About",
        "url": "/About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Link": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cart_Link": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Menu_reser_btn_": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_order_btn_": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBoxcorder_": {
      "custom": {
        "text": "Order via app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox189": {
      "custom": {
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat cupidatat"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "_uber_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/61774e5435a7c85e46829bb6_logo-uber-eats-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Door_dash_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "post_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Rappi_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "_go_puff__Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/617089ddbea625412222d648_logo-gopuff-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Seam_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/617089dd1e997d2713e3e6b0_logo-seamless-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "didi_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/617089ddfff39b07179afbe2_logo-didifood-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image101": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Ice_cream_price_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Ice_cream_txt_": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Ice_cream_para__txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "soda_Image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "soda_Para_Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "soda_h1_Txt_": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "egg_price_img__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "egg_price_para__txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "egg_price_h1_txt_": {
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "egg_price_text_txt_": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chick_burger_img__": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chick_burger_h1__para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chick_burger_h1___txt__": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chick_burger_price__txt_": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "milkshake_image_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "milkshake_price_txt_": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "milkshake_h1_text_": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "milkshake_para__txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Classic_fries_img_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Classic_fries_h1_txt_": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Classic_fries_para__txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image82": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pancake_price__txt_": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pancake_price___txt_": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pancake_price__para___txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "menu_classic_burger_": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classic-burger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "classic_para": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Classic_text_txt_": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "burger_price_text_": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Our_menu_para_txt_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum dolor."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Our_menu_head_txt_": {
      "custom": {
        "text": "Our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button_All_": {
      "custom": {
        "text": "All"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button_Breakfast_": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button_MainDish_": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ButtonDrink_": {
      "custom": {
        "text": "Drink"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button_Desert_": {
      "custom": {
        "text": "Deserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "insta_head_txt_": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "R_1_1Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "R_1_2_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "R_2_2Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "R_2_1Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_11_txt_": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_12_txt_": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_17_txt_": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_18_txt_": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_15_txt_": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_16_txt_": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_13_txt_": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_14_txt_": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_4Text": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_3Text": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_6Text": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_8Text": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_7Text": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_2Text": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_FM_1Text": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_stars_Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_stars_Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_stars_Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_stars_Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_stars_Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "restro_para_1Text_": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Restro_Image": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
