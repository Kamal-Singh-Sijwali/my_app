import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useHome_Header_Cb, useHome_Header_Flex_Cb, useHome_Header_Flex_R_Cb, useHome_Header_Flex_L_Cb, usecompany_logoCb, useheader_itemsCb, useHome_Banner_Cb, useHome_Banner_L_Cb, useHome_Banner_L_Para_Cb, useHome_Banner_L_Headings_Cb, useHome_Banner_L_Btn_Cb, useHome_Banner_L_Btn_Flex_Cb, useHome_Banner_R_Cb, useHome_Banner_R__Bg_Cb, useCompanies_logo_flex_Cb, useCompanies_logo_flex_Rows_Cb, useCompanies_logo_flex_Rows_1Cb, useCompanies_logo_flex_Rows_2Cb, useCompanies_logo_flex_Rows_2_Doordash_Cb, useCompanies_logo_flex_Rows_2_Postmates_Cb, useCompanies_logo_flex_Rows_2_Rappi_Cb, useCompanies_logo_flex_Rows_2_Grubhub_Cb, useBrowse_Cb, useBrowse_foot_Cb, useBrowse_foot_Flex_Cb, useBrowse_Heading_Cb, useBrowse_body_Cb, useBrowse_body_4Cb, useBrowse_body_4_Para2_Cb, useBrowse_body_4_Para1_Cb, useBrowse_body_4_h1_Cb, useBrowse_body_4_image_Cb, useBrowse_body_1Cb, useBrowse_body_1_image_Cb, useBrowse_body_1_h1Cb, useBrowse_body_1_para_Cb, useBrowse_body_1_Para_2_Cb, useBrowse_body_2Cb, useBrowse_body_2_image_Cb, useBrowse_body_2_h1_Cb, useBrowse_body_2_Para1_Cb, useBrowse_body_2_Para2_Cb, useBrowse_body_3Cb, useBrowse_body_3_image_Cb, useBrowse_body_3_h1_Cb, useBrowse_body_3_Para1_Cb, useBrowse_body_3_Para2_Cb, useAbout_us_Cb, useAbout_us_Left_Cb, useAbout_us_Left_main_Cb, useAbout_us_Left_main_Flex_Cb, useAbout_us_Left_main_Flex_Head_Cb, useAbout_us_Left_main_Flex_Location_Cb, uselocation_pinCb, useAbout_us_Left_main_Flex_Mobile_Cb, usemobile_pinCb, useAbout_us_Left_main_Flex_Email_Cb, useemail_idCb, useAbout_us_Right_Cb, useHome_Contact_Right_headerCb, useHome_Contact_Right_sec_1Cb, useHome_Contact_Right_sec_2Cb, useHome_Contact_Right_btnCb, usebtn_flex_Cb, useItem_lists_Cb, useItem_lists_Head_Cb, useItems_list_Para_Cb, useItems_list_Items_uper_Cb, useItems_list_items_1_Cb, useprice1Cb, useFlex152Cb, useitems_1_h1_Cb, useitems_1_Para_Cb, useItems_list_items_3_Cb, useitems_3_Para_txt_Cb, useitems_3_h1_Cb, useprice3Cb, useFlex161Cb, useItems_list_items_2_Cb, useitems_2_Para_Cb, useitems_2_h1_Cb, useprice2Cb, useprice2_bgCb, useItems_list_items_4_Cb, useprice4Cb, useFlex743Cb, useitems_4_h1_Cb, useitems_4_Para_Cb, useItems_list_foot_Cb, useItems_list_foot_btns_Cb, useItems_list_Items_lower_Cb, useItems_list_items_6_Cb, useprice6_Cb, useFlex177Cb, useitems_6_h1_Cb, useitems_6_Para_Cb, useItems_list_items_7_Cb, useprice7_Cb, useFlex178Cb, useitems_7_h1_Cb, useitems_7_Para_Cb, useItems_list_items_8_Cb, useItems_list_items_8_flexCb, useprice8_Cb, useFlex176Cb, useitems_8_h1_Cb, useitems_8_Para_Cb, useItems_list_items_5_Cb, useitems_5_Para_Cb, useitems_5_h1_Cb, usePrice_5Cb, useprice_5_txt_Cb, useBest_burger_Cb, useBest_burger_L_Cb, useBest_burger_L_head_Cb, useBest_burger_L_para_Cb, useBest_burger_L_btns_Cb, useBest_burger_L_button_Cb, useBest_burger_R_Cb, useClient_review_Cb, usereview_no_Cb, useClient_say_Cb, useclient_review_paraCb, useclient_main_body_Cb, useclient_left_Cb, useclient_main_reviewCb, useclient_main_review_star_Cb, useclient_main_review_h1_Cb, useclient_main_review_para_Cb, useclient_dp_nameCb, useclient_main_review_profile_Cb, useclient_main_review_name_Cb, useclient_main_review_matt_Cb, useclient_main_review_ca_Cb, useclient_right_Cb, useclient_footer_Cb, useclient_footer_btn_Cb, useArticles_Cb, useArticles_header_Cb, useArticles_header_R_Cb, useArticles_header_L_Cb, useArticles_main_Cb, useArticle_main_L_side_Cb, useArticle_main_L_side_1_Cb, useArticle_main_L_side_4_Cb, useArticle_main_L_side_2_Cb, useArticle_main_L_side_3_Cb, usearticle_main_right_sideCb, usearticle_upper_sideCb, usearticle_upper_one_oneCb, useFlex248Cb, useFlex249Cb, useFlex251Cb, usearticle_upper_one_twoCb, useFlex253Cb, useFlex254Cb, useFlex255Cb, usearticle_lower_sideCb, usearticle_lower_two_oneCb, useFlex257Cb, useFlex258Cb, useFlex259Cb, usearticle_lower_two_twoCb, useFlex261Cb, useFlex262Cb, useFlex263Cb, useForm_area_Cb, useForm_area_L_Cb, useForm_area_L_para_Cb, useForm_area_L_h1_Cb, useForm_area_L_location_Cb, useForm_area_L_location_text_Cb, useForm_area_L_Mnumber_Cb, useForm_area_L_Mnumber_text_Cb, useForm_area_L_email_flex_Cb, useForm_area_L_email_text_Cb, useForm_area_R_Cb, useForm_area_R_fill_Cb, useForm_area_R_fill_1_Cb, useForm_third_rowCb, usethird_row_RCb, useFlex283Cb, useFlex284Cb, usethird_row_LCb, useFlex281Cb, useFlex282Cb, useForm_first_row_Cb, usefirst_row_LCb, useFlex285Cb, useFlex286Cb, usefirst_row_RCb, useFlex287Cb, useFlex288Cb, useForm_second_rowCb, usesecond_row_LCb, useFlex292Cb, useFlex293Cb, usesecond_row_RCb, useFlex294Cb, useFlex295Cb, useForm_fourth_rowCb, usefourth_row_LCb, useAdd_a_note_area_Cb, useAdd_a_note_Cb, useForm_area_R_fill_btn_Cb, useOur_articles_follow_us_Cb, useFollow_1_Cb, useFollow_head_Cb, useFollow_btn_Cb, useFollow_2_Cb, useFollow_images_Cb, useFollow_images_3i_Cb, useFollow_images_3a_Cb, useFollow_images_3a_1_Cb, useFollow_images_3a_2_Cb, useFollow_images_3b_Cb, useFollow_images_3b_2_Cb, useFollow_images_3b_1_Cb, useHome_footer_Cb, useFooter_left_Cb, useFooter_left_h1_Cb, useFooter_left_para_Cb, useFooter_left_stars_Cb, useFooter_mid_sectionCb, useFooter_mid_Left_Cb, usefooter_mid_Left_1Cb, usefooter_mid_Left_2Cb, usefooter_mid_Left_7Cb, usefooter_mid_Left_8Cb, usefooter_mid_Left_5Cb, usefooter_mid_Left_6Cb, usefooter_mid_Left_3Cb, usefooter_mid_Left_4Cb, useFooter_mid_right_Cb, usefooter_mid_R_4Cb, usefooter_mid_R_3Cb, usefooter_mid_R_6Cb, usefooter_mid_R_5Cb, usefooter_mid_R_8Cb, usefooter_mid_R_7Cb, usefooter_mid_R_2Cb, usefooter_mid_R_1Cb, useFollow_insta_Cb, useFollow_insta_img_2_Cb, useFollow_insta_img_2_21_Cb, useFollow_insta_img_2_22_Cb, useFollow_insta_img_1_Cb, useFollow_insta_img_1_12_Cb, useFollow_insta_img_1_11_Cb, useFollow_insta_head_Cb, useHome_Header_Flex_R_Primary_btn_Cb, useHome_Header_Flex_R_Secondary_btCb, uselogoCb, useheader_cartCb, useheader_homeCb, useheader_aboutCb, useheader_menuCb, useheader_pageCb, useHome_Banner_L_Para_txt_Cb, useHome_Banner_L_Headings_Lower_Cb, useHome_Banner_L_Headings_Upper_Cb, useHome_Banner_L_Btn_Flex_1_Cb, useHome_Banner_L_Btn_Flex_2_Cb, useHome_Banner_R_img_Cb, useCompanies_logo_flex_Rows_1_Text_Cb, useImage4Cb, useImage5Cb, useImage6Cb, useImage7Cb, useBrowse_foot_Flex_R_ButtonCb, useBrowse_foot_Flex_L_ButtonCb, useBrowse_Heading_txt_Cb, useBrowse_body_4_Para2_txt_Cb, useBrowse_body_4_Para1_txt_Cb, useBrowse_body_4_h1_txt_Cb, useBrowse_body_4_image_img_Cb, useBrowse_body_1_image_img_Cb, useBrowse_body_1_h1_txt_Cb, useBrowse_body_1_para_Text_Cb, useBrowse_body_1_Para_2_txt_Cb, useBrowse_body_2_image_img_Cb, useBrowse_body_2_h1_Txt_Cb, useBrowse_body_2_Para1_txt_Cb, useBrowse_body_2_Para2_txt_Cb, useBrowse_body_3_image_img_Cb, useBrowse_body_3_h1_txt_Cb, useBrowse_body_3_Para1_txt_Cb, useBrowse_body_3_Para2_txt_Cb, useAbout_us_Left_main_img_Cb, useaddress_headerCb, useLocation_img_Cb, userestro_address_txt_Cb, useCallCb, usemobile_noCb, usemail_Cb, useemail_id_adressCb, useHome_Contact_Right_aboutUsCb, useHome_Contact_Right_First_paraCb, useHome_Contact_Right_sec_paraCb, useAbout_btn_R_Cb, useAbout_btn_L_Cb, useItems_list_Heading_Cb, useItems_list_Para_txt_Cb, useBurger_img_Cb, useTextBox57Cb, useitems_1_h1_txt_Cb, useitems_1_Para_txt_Cb, useClassic_friesCb, useTextBox64Cb, useTextBox65Cb, useTextBox63Cb, useMilkshake_img_Cb, useitems_2_Para_txt_Cb, useitems_2_h1_txt_Cb, useprice2_txt_Cb, usePancake_imgCb, useTextBox318Cb, useitems_4_h1_txt_Cb, useitems_4_Para_txt_Cb, useItems_list_foot_btns_L_Cb, useItems_list_foot_btns_R_Cb, useImage32Cb, useTextBox73Cb, useChicken_burger_Cb, usepara_6_txt_Cb, useImage33Cb, useTextBox74Cb, useEgg_toast_Cb, useTextBox81Cb, useregular_soda_img_Cb, useTextBox72Cb, useRegular_SodaCb, useItems_list_items_8_para_Cb, useIce_cream_imgCb, useitem_5_TxtCb, useIce_cream_txt_Cb, useprice5_txt_Cb, useBest_burger_L_head_txt_Cb, useBest_burger_L_para_txt_Cb, useBest_burger_L_btns_2_Cb, useBest_burger_L_btns_1_Cb, useBest_burger_img_Cb, usereview_no_1_Cb, useclinet_say_txt_Cb, useclient_para_txt_Cb, useclient_left_img_Cb, useclient_main_review_star_1Cb, useclient_main_review_star_2Cb, useclient_main_review_star_3Cb, useclient_main_review_star_4Cb, useclient_main_review_star_5Cb, useTextBox89Cb, useTextBox90Cb, useclient_main_review_prfile_img_Cb, useclient_main_review_matt_txtCb, useclient_main_review_ca_txt_Cb, useclient_right__img_Cb, useclient_footer_btn_R_Cb, useclient_footer_btn_L_Cb, useArticles_header_R_txt_Cb, useArticles_header_L_txt_Cb, useArticle_main_L_side_1_img_Cb, useArticle_main_L_side_4_img_Cb, useArticle_main_L_side_2_img_Cb, useArticle_main_L_side_3_img_Cb, useImage51Cb, useTextBox104Cb, useTextBox103Cb, useTextBox105Cb, useTextBox106Cb, useImage52Cb, useImage53Cb, useTextBox107Cb, useTextBox108Cb, useImage54Cb, useTextBox109Cb, useTextBox110Cb, useForm_area_L_para_txt_Cb, useForm_area_L_h1_txt_Cb, useForm_area_L_location_Img_Cb, useForm_area_L_location_txt_Cb, useForm_area_L_Mnumber_img_Cb, useForm_area_L_Mnumber_text_txt_Cb, useForm_area_L_email_img_Cb, useForm_area_L_email_txt_Cb, useTextBox117Cb, useInput2Cb, useTextBox116Cb, useInput3Cb, useInput4Cb, useTextBox118Cb, useInput5Cb, useTextBox119Cb, useInput6Cb, useTextBox120Cb, useInput7Cb, useTextBox121Cb, useAdd_a_note_input_Cb, useAdd_a_note_txt_Cb, useButton24Cb, usefollow_h1_Cb, usefollow_us_btn_Cb, useFollow_images_1_Cb, useFollow_images_2_Cb, useburger_coc_Cb, usefrench_fries__Cb, usecoc_Cb, usehot_dog_Cb, useFooter_left_h1_img_Cb, useFooter_left_para_txt_Cb, useFooter_left_stars_img_1_Cb, useFooter_left_stars_img_2_Cb, useFooter_left_stars_img_3_Cb, useFooter_left_stars_img_4_Cb, useFooter_left_stars_img_5_Cb, usefooter_L_1Cb, usefooter_L_2Cb, usefooter_L_7Cb, usefooter_L_8Cb, usefooter_L_5Cb, usefooter_L_6Cb, usefooter_L_3Cb, usefooter_L_4Cb, usefooter_mid_R_4_txt_Cb, usefooter_mid_R_3_txt_Cb, usefooter_mid_R_6_txt_Cb, usefooter_mid_R_5_txt_Cb, usefooter_mid_R_8_txtCb, usefooter_mid_R_7_txtCb, usefooter_mid_R_2_txt_Cb, usefooter_mid_R_1_txt_Cb, useFollow_insta_img_2_21_txt_Cb, useFollow_insta_img_2_22_txt__Cb, useFollow_insta_img_1_12_txt_Cb, useFollow_insta_img_1_11_txt_Cb, useFollow_insta_head_txt_Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Home_Header_Props = useStore((state)=>state["Home"]["Home_Header_"]);
const Home_Header_IoProps = useIoStore((state)=>state["Home"]["Home_Header_"]);
const Home_Header_Cb = useHome_Header_Cb()
const Home_Header_Flex_Props = useStore((state)=>state["Home"]["Home_Header_Flex_"]);
const Home_Header_Flex_IoProps = useIoStore((state)=>state["Home"]["Home_Header_Flex_"]);
const Home_Header_Flex_Cb = useHome_Header_Flex_Cb()
const Home_Header_Flex_R_Props = useStore((state)=>state["Home"]["Home_Header_Flex_R_"]);
const Home_Header_Flex_R_IoProps = useIoStore((state)=>state["Home"]["Home_Header_Flex_R_"]);
const Home_Header_Flex_R_Cb = useHome_Header_Flex_R_Cb()
const Home_Header_Flex_L_Props = useStore((state)=>state["Home"]["Home_Header_Flex_L_"]);
const Home_Header_Flex_L_IoProps = useIoStore((state)=>state["Home"]["Home_Header_Flex_L_"]);
const Home_Header_Flex_L_Cb = useHome_Header_Flex_L_Cb()
const company_logoProps = useStore((state)=>state["Home"]["company_logo"]);
const company_logoIoProps = useIoStore((state)=>state["Home"]["company_logo"]);
const company_logoCb = usecompany_logoCb()
const header_itemsProps = useStore((state)=>state["Home"]["header_items"]);
const header_itemsIoProps = useIoStore((state)=>state["Home"]["header_items"]);
const header_itemsCb = useheader_itemsCb()
const Home_Banner_Props = useStore((state)=>state["Home"]["Home_Banner_"]);
const Home_Banner_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_"]);
const Home_Banner_Cb = useHome_Banner_Cb()
const Home_Banner_L_Props = useStore((state)=>state["Home"]["Home_Banner_L_"]);
const Home_Banner_L_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_"]);
const Home_Banner_L_Cb = useHome_Banner_L_Cb()
const Home_Banner_L_Para_Props = useStore((state)=>state["Home"]["Home_Banner_L_Para_"]);
const Home_Banner_L_Para_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Para_"]);
const Home_Banner_L_Para_Cb = useHome_Banner_L_Para_Cb()
const Home_Banner_L_Headings_Props = useStore((state)=>state["Home"]["Home_Banner_L_Headings_"]);
const Home_Banner_L_Headings_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Headings_"]);
const Home_Banner_L_Headings_Cb = useHome_Banner_L_Headings_Cb()
const Home_Banner_L_Btn_Props = useStore((state)=>state["Home"]["Home_Banner_L_Btn_"]);
const Home_Banner_L_Btn_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Btn_"]);
const Home_Banner_L_Btn_Cb = useHome_Banner_L_Btn_Cb()
const Home_Banner_L_Btn_Flex_Props = useStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_"]);
const Home_Banner_L_Btn_Flex_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_"]);
const Home_Banner_L_Btn_Flex_Cb = useHome_Banner_L_Btn_Flex_Cb()
const Home_Banner_R_Props = useStore((state)=>state["Home"]["Home_Banner_R_"]);
const Home_Banner_R_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_R_"]);
const Home_Banner_R_Cb = useHome_Banner_R_Cb()
const Home_Banner_R__Bg_Props = useStore((state)=>state["Home"]["Home_Banner_R__Bg_"]);
const Home_Banner_R__Bg_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_R__Bg_"]);
const Home_Banner_R__Bg_Cb = useHome_Banner_R__Bg_Cb()
const Companies_logo_flex_Props = useStore((state)=>state["Home"]["Companies_logo_flex_"]);
const Companies_logo_flex_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_"]);
const Companies_logo_flex_Cb = useCompanies_logo_flex_Cb()
const Companies_logo_flex_Rows_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_"]);
const Companies_logo_flex_Rows_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_"]);
const Companies_logo_flex_Rows_Cb = useCompanies_logo_flex_Rows_Cb()
const Companies_logo_flex_Rows_1Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_1"]);
const Companies_logo_flex_Rows_1IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_1"]);
const Companies_logo_flex_Rows_1Cb = useCompanies_logo_flex_Rows_1Cb()
const Companies_logo_flex_Rows_2Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_2"]);
const Companies_logo_flex_Rows_2IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_2"]);
const Companies_logo_flex_Rows_2Cb = useCompanies_logo_flex_Rows_2Cb()
const Companies_logo_flex_Rows_2_Doordash_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Doordash_"]);
const Companies_logo_flex_Rows_2_Doordash_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Doordash_"]);
const Companies_logo_flex_Rows_2_Doordash_Cb = useCompanies_logo_flex_Rows_2_Doordash_Cb()
const Companies_logo_flex_Rows_2_Postmates_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Postmates_"]);
const Companies_logo_flex_Rows_2_Postmates_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Postmates_"]);
const Companies_logo_flex_Rows_2_Postmates_Cb = useCompanies_logo_flex_Rows_2_Postmates_Cb()
const Companies_logo_flex_Rows_2_Rappi_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Rappi_"]);
const Companies_logo_flex_Rows_2_Rappi_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Rappi_"]);
const Companies_logo_flex_Rows_2_Rappi_Cb = useCompanies_logo_flex_Rows_2_Rappi_Cb()
const Companies_logo_flex_Rows_2_Grubhub_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Grubhub_"]);
const Companies_logo_flex_Rows_2_Grubhub_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_2_Grubhub_"]);
const Companies_logo_flex_Rows_2_Grubhub_Cb = useCompanies_logo_flex_Rows_2_Grubhub_Cb()
const Browse_Props = useStore((state)=>state["Home"]["Browse_"]);
const Browse_IoProps = useIoStore((state)=>state["Home"]["Browse_"]);
const Browse_Cb = useBrowse_Cb()
const Browse_foot_Props = useStore((state)=>state["Home"]["Browse_foot_"]);
const Browse_foot_IoProps = useIoStore((state)=>state["Home"]["Browse_foot_"]);
const Browse_foot_Cb = useBrowse_foot_Cb()
const Browse_foot_Flex_Props = useStore((state)=>state["Home"]["Browse_foot_Flex_"]);
const Browse_foot_Flex_IoProps = useIoStore((state)=>state["Home"]["Browse_foot_Flex_"]);
const Browse_foot_Flex_Cb = useBrowse_foot_Flex_Cb()
const Browse_Heading_Props = useStore((state)=>state["Home"]["Browse_Heading_"]);
const Browse_Heading_IoProps = useIoStore((state)=>state["Home"]["Browse_Heading_"]);
const Browse_Heading_Cb = useBrowse_Heading_Cb()
const Browse_body_Props = useStore((state)=>state["Home"]["Browse_body_"]);
const Browse_body_IoProps = useIoStore((state)=>state["Home"]["Browse_body_"]);
const Browse_body_Cb = useBrowse_body_Cb()
const Browse_body_4Props = useStore((state)=>state["Home"]["Browse_body_4"]);
const Browse_body_4IoProps = useIoStore((state)=>state["Home"]["Browse_body_4"]);
const Browse_body_4Cb = useBrowse_body_4Cb()
const Browse_body_4_Para2_Props = useStore((state)=>state["Home"]["Browse_body_4_Para2_"]);
const Browse_body_4_Para2_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_Para2_"]);
const Browse_body_4_Para2_Cb = useBrowse_body_4_Para2_Cb()
const Browse_body_4_Para1_Props = useStore((state)=>state["Home"]["Browse_body_4_Para1_"]);
const Browse_body_4_Para1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_Para1_"]);
const Browse_body_4_Para1_Cb = useBrowse_body_4_Para1_Cb()
const Browse_body_4_h1_Props = useStore((state)=>state["Home"]["Browse_body_4_h1_"]);
const Browse_body_4_h1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_h1_"]);
const Browse_body_4_h1_Cb = useBrowse_body_4_h1_Cb()
const Browse_body_4_image_Props = useStore((state)=>state["Home"]["Browse_body_4_image_"]);
const Browse_body_4_image_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_image_"]);
const Browse_body_4_image_Cb = useBrowse_body_4_image_Cb()
const Browse_body_1Props = useStore((state)=>state["Home"]["Browse_body_1"]);
const Browse_body_1IoProps = useIoStore((state)=>state["Home"]["Browse_body_1"]);
const Browse_body_1Cb = useBrowse_body_1Cb()
const Browse_body_1_image_Props = useStore((state)=>state["Home"]["Browse_body_1_image_"]);
const Browse_body_1_image_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_image_"]);
const Browse_body_1_image_Cb = useBrowse_body_1_image_Cb()
const Browse_body_1_h1Props = useStore((state)=>state["Home"]["Browse_body_1_h1"]);
const Browse_body_1_h1IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_h1"]);
const Browse_body_1_h1Cb = useBrowse_body_1_h1Cb()
const Browse_body_1_para_Props = useStore((state)=>state["Home"]["Browse_body_1_para_"]);
const Browse_body_1_para_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_para_"]);
const Browse_body_1_para_Cb = useBrowse_body_1_para_Cb()
const Browse_body_1_Para_2_Props = useStore((state)=>state["Home"]["Browse_body_1_Para_2_"]);
const Browse_body_1_Para_2_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_Para_2_"]);
const Browse_body_1_Para_2_Cb = useBrowse_body_1_Para_2_Cb()
const Browse_body_2Props = useStore((state)=>state["Home"]["Browse_body_2"]);
const Browse_body_2IoProps = useIoStore((state)=>state["Home"]["Browse_body_2"]);
const Browse_body_2Cb = useBrowse_body_2Cb()
const Browse_body_2_image_Props = useStore((state)=>state["Home"]["Browse_body_2_image_"]);
const Browse_body_2_image_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_image_"]);
const Browse_body_2_image_Cb = useBrowse_body_2_image_Cb()
const Browse_body_2_h1_Props = useStore((state)=>state["Home"]["Browse_body_2_h1_"]);
const Browse_body_2_h1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_h1_"]);
const Browse_body_2_h1_Cb = useBrowse_body_2_h1_Cb()
const Browse_body_2_Para1_Props = useStore((state)=>state["Home"]["Browse_body_2_Para1_"]);
const Browse_body_2_Para1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_Para1_"]);
const Browse_body_2_Para1_Cb = useBrowse_body_2_Para1_Cb()
const Browse_body_2_Para2_Props = useStore((state)=>state["Home"]["Browse_body_2_Para2_"]);
const Browse_body_2_Para2_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_Para2_"]);
const Browse_body_2_Para2_Cb = useBrowse_body_2_Para2_Cb()
const Browse_body_3Props = useStore((state)=>state["Home"]["Browse_body_3"]);
const Browse_body_3IoProps = useIoStore((state)=>state["Home"]["Browse_body_3"]);
const Browse_body_3Cb = useBrowse_body_3Cb()
const Browse_body_3_image_Props = useStore((state)=>state["Home"]["Browse_body_3_image_"]);
const Browse_body_3_image_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_image_"]);
const Browse_body_3_image_Cb = useBrowse_body_3_image_Cb()
const Browse_body_3_h1_Props = useStore((state)=>state["Home"]["Browse_body_3_h1_"]);
const Browse_body_3_h1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_h1_"]);
const Browse_body_3_h1_Cb = useBrowse_body_3_h1_Cb()
const Browse_body_3_Para1_Props = useStore((state)=>state["Home"]["Browse_body_3_Para1_"]);
const Browse_body_3_Para1_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_Para1_"]);
const Browse_body_3_Para1_Cb = useBrowse_body_3_Para1_Cb()
const Browse_body_3_Para2_Props = useStore((state)=>state["Home"]["Browse_body_3_Para2_"]);
const Browse_body_3_Para2_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_Para2_"]);
const Browse_body_3_Para2_Cb = useBrowse_body_3_Para2_Cb()
const About_us_Props = useStore((state)=>state["Home"]["About_us_"]);
const About_us_IoProps = useIoStore((state)=>state["Home"]["About_us_"]);
const About_us_Cb = useAbout_us_Cb()
const About_us_Left_Props = useStore((state)=>state["Home"]["About_us_Left_"]);
const About_us_Left_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_"]);
const About_us_Left_Cb = useAbout_us_Left_Cb()
const About_us_Left_main_Props = useStore((state)=>state["Home"]["About_us_Left_main_"]);
const About_us_Left_main_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_"]);
const About_us_Left_main_Cb = useAbout_us_Left_main_Cb()
const About_us_Left_main_Flex_Props = useStore((state)=>state["Home"]["About_us_Left_main_Flex_"]);
const About_us_Left_main_Flex_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_Flex_"]);
const About_us_Left_main_Flex_Cb = useAbout_us_Left_main_Flex_Cb()
const About_us_Left_main_Flex_Head_Props = useStore((state)=>state["Home"]["About_us_Left_main_Flex_Head_"]);
const About_us_Left_main_Flex_Head_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_Flex_Head_"]);
const About_us_Left_main_Flex_Head_Cb = useAbout_us_Left_main_Flex_Head_Cb()
const About_us_Left_main_Flex_Location_Props = useStore((state)=>state["Home"]["About_us_Left_main_Flex_Location_"]);
const About_us_Left_main_Flex_Location_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_Flex_Location_"]);
const About_us_Left_main_Flex_Location_Cb = useAbout_us_Left_main_Flex_Location_Cb()
const location_pinProps = useStore((state)=>state["Home"]["location_pin"]);
const location_pinIoProps = useIoStore((state)=>state["Home"]["location_pin"]);
const location_pinCb = uselocation_pinCb()
const About_us_Left_main_Flex_Mobile_Props = useStore((state)=>state["Home"]["About_us_Left_main_Flex_Mobile_"]);
const About_us_Left_main_Flex_Mobile_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_Flex_Mobile_"]);
const About_us_Left_main_Flex_Mobile_Cb = useAbout_us_Left_main_Flex_Mobile_Cb()
const mobile_pinProps = useStore((state)=>state["Home"]["mobile_pin"]);
const mobile_pinIoProps = useIoStore((state)=>state["Home"]["mobile_pin"]);
const mobile_pinCb = usemobile_pinCb()
const About_us_Left_main_Flex_Email_Props = useStore((state)=>state["Home"]["About_us_Left_main_Flex_Email_"]);
const About_us_Left_main_Flex_Email_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_Flex_Email_"]);
const About_us_Left_main_Flex_Email_Cb = useAbout_us_Left_main_Flex_Email_Cb()
const email_idProps = useStore((state)=>state["Home"]["email_id"]);
const email_idIoProps = useIoStore((state)=>state["Home"]["email_id"]);
const email_idCb = useemail_idCb()
const About_us_Right_Props = useStore((state)=>state["Home"]["About_us_Right_"]);
const About_us_Right_IoProps = useIoStore((state)=>state["Home"]["About_us_Right_"]);
const About_us_Right_Cb = useAbout_us_Right_Cb()
const Home_Contact_Right_headerProps = useStore((state)=>state["Home"]["Home_Contact_Right_header"]);
const Home_Contact_Right_headerIoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_header"]);
const Home_Contact_Right_headerCb = useHome_Contact_Right_headerCb()
const Home_Contact_Right_sec_1Props = useStore((state)=>state["Home"]["Home_Contact_Right_sec_1"]);
const Home_Contact_Right_sec_1IoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_sec_1"]);
const Home_Contact_Right_sec_1Cb = useHome_Contact_Right_sec_1Cb()
const Home_Contact_Right_sec_2Props = useStore((state)=>state["Home"]["Home_Contact_Right_sec_2"]);
const Home_Contact_Right_sec_2IoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_sec_2"]);
const Home_Contact_Right_sec_2Cb = useHome_Contact_Right_sec_2Cb()
const Home_Contact_Right_btnProps = useStore((state)=>state["Home"]["Home_Contact_Right_btn"]);
const Home_Contact_Right_btnIoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_btn"]);
const Home_Contact_Right_btnCb = useHome_Contact_Right_btnCb()
const btn_flex_Props = useStore((state)=>state["Home"]["btn_flex_"]);
const btn_flex_IoProps = useIoStore((state)=>state["Home"]["btn_flex_"]);
const btn_flex_Cb = usebtn_flex_Cb()
const Item_lists_Props = useStore((state)=>state["Home"]["Item_lists_"]);
const Item_lists_IoProps = useIoStore((state)=>state["Home"]["Item_lists_"]);
const Item_lists_Cb = useItem_lists_Cb()
const Item_lists_Head_Props = useStore((state)=>state["Home"]["Item_lists_Head_"]);
const Item_lists_Head_IoProps = useIoStore((state)=>state["Home"]["Item_lists_Head_"]);
const Item_lists_Head_Cb = useItem_lists_Head_Cb()
const Items_list_Para_Props = useStore((state)=>state["Home"]["Items_list_Para_"]);
const Items_list_Para_IoProps = useIoStore((state)=>state["Home"]["Items_list_Para_"]);
const Items_list_Para_Cb = useItems_list_Para_Cb()
const Items_list_Items_uper_Props = useStore((state)=>state["Home"]["Items_list_Items_uper_"]);
const Items_list_Items_uper_IoProps = useIoStore((state)=>state["Home"]["Items_list_Items_uper_"]);
const Items_list_Items_uper_Cb = useItems_list_Items_uper_Cb()
const Items_list_items_1_Props = useStore((state)=>state["Home"]["Items_list_items_1_"]);
const Items_list_items_1_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_1_"]);
const Items_list_items_1_Cb = useItems_list_items_1_Cb()
const price1Props = useStore((state)=>state["Home"]["price1"]);
const price1IoProps = useIoStore((state)=>state["Home"]["price1"]);
const price1Cb = useprice1Cb()
const Flex152Props = useStore((state)=>state["Home"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Home"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const items_1_h1_Props = useStore((state)=>state["Home"]["items_1_h1_"]);
const items_1_h1_IoProps = useIoStore((state)=>state["Home"]["items_1_h1_"]);
const items_1_h1_Cb = useitems_1_h1_Cb()
const items_1_Para_Props = useStore((state)=>state["Home"]["items_1_Para_"]);
const items_1_Para_IoProps = useIoStore((state)=>state["Home"]["items_1_Para_"]);
const items_1_Para_Cb = useitems_1_Para_Cb()
const Items_list_items_3_Props = useStore((state)=>state["Home"]["Items_list_items_3_"]);
const Items_list_items_3_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_3_"]);
const Items_list_items_3_Cb = useItems_list_items_3_Cb()
const items_3_Para_txt_Props = useStore((state)=>state["Home"]["items_3_Para_txt_"]);
const items_3_Para_txt_IoProps = useIoStore((state)=>state["Home"]["items_3_Para_txt_"]);
const items_3_Para_txt_Cb = useitems_3_Para_txt_Cb()
const items_3_h1_Props = useStore((state)=>state["Home"]["items_3_h1_"]);
const items_3_h1_IoProps = useIoStore((state)=>state["Home"]["items_3_h1_"]);
const items_3_h1_Cb = useitems_3_h1_Cb()
const price3Props = useStore((state)=>state["Home"]["price3"]);
const price3IoProps = useIoStore((state)=>state["Home"]["price3"]);
const price3Cb = useprice3Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Items_list_items_2_Props = useStore((state)=>state["Home"]["Items_list_items_2_"]);
const Items_list_items_2_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_2_"]);
const Items_list_items_2_Cb = useItems_list_items_2_Cb()
const items_2_Para_Props = useStore((state)=>state["Home"]["items_2_Para_"]);
const items_2_Para_IoProps = useIoStore((state)=>state["Home"]["items_2_Para_"]);
const items_2_Para_Cb = useitems_2_Para_Cb()
const items_2_h1_Props = useStore((state)=>state["Home"]["items_2_h1_"]);
const items_2_h1_IoProps = useIoStore((state)=>state["Home"]["items_2_h1_"]);
const items_2_h1_Cb = useitems_2_h1_Cb()
const price2Props = useStore((state)=>state["Home"]["price2"]);
const price2IoProps = useIoStore((state)=>state["Home"]["price2"]);
const price2Cb = useprice2Cb()
const price2_bgProps = useStore((state)=>state["Home"]["price2_bg"]);
const price2_bgIoProps = useIoStore((state)=>state["Home"]["price2_bg"]);
const price2_bgCb = useprice2_bgCb()
const Items_list_items_4_Props = useStore((state)=>state["Home"]["Items_list_items_4_"]);
const Items_list_items_4_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_4_"]);
const Items_list_items_4_Cb = useItems_list_items_4_Cb()
const price4Props = useStore((state)=>state["Home"]["price4"]);
const price4IoProps = useIoStore((state)=>state["Home"]["price4"]);
const price4Cb = useprice4Cb()
const Flex743Props = useStore((state)=>state["Home"]["Flex743"]);
const Flex743IoProps = useIoStore((state)=>state["Home"]["Flex743"]);
const Flex743Cb = useFlex743Cb()
const items_4_h1_Props = useStore((state)=>state["Home"]["items_4_h1_"]);
const items_4_h1_IoProps = useIoStore((state)=>state["Home"]["items_4_h1_"]);
const items_4_h1_Cb = useitems_4_h1_Cb()
const items_4_Para_Props = useStore((state)=>state["Home"]["items_4_Para_"]);
const items_4_Para_IoProps = useIoStore((state)=>state["Home"]["items_4_Para_"]);
const items_4_Para_Cb = useitems_4_Para_Cb()
const Items_list_foot_Props = useStore((state)=>state["Home"]["Items_list_foot_"]);
const Items_list_foot_IoProps = useIoStore((state)=>state["Home"]["Items_list_foot_"]);
const Items_list_foot_Cb = useItems_list_foot_Cb()
const Items_list_foot_btns_Props = useStore((state)=>state["Home"]["Items_list_foot_btns_"]);
const Items_list_foot_btns_IoProps = useIoStore((state)=>state["Home"]["Items_list_foot_btns_"]);
const Items_list_foot_btns_Cb = useItems_list_foot_btns_Cb()
const Items_list_Items_lower_Props = useStore((state)=>state["Home"]["Items_list_Items_lower_"]);
const Items_list_Items_lower_IoProps = useIoStore((state)=>state["Home"]["Items_list_Items_lower_"]);
const Items_list_Items_lower_Cb = useItems_list_Items_lower_Cb()
const Items_list_items_6_Props = useStore((state)=>state["Home"]["Items_list_items_6_"]);
const Items_list_items_6_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_6_"]);
const Items_list_items_6_Cb = useItems_list_items_6_Cb()
const price6_Props = useStore((state)=>state["Home"]["price6_"]);
const price6_IoProps = useIoStore((state)=>state["Home"]["price6_"]);
const price6_Cb = useprice6_Cb()
const Flex177Props = useStore((state)=>state["Home"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Home"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const items_6_h1_Props = useStore((state)=>state["Home"]["items_6_h1_"]);
const items_6_h1_IoProps = useIoStore((state)=>state["Home"]["items_6_h1_"]);
const items_6_h1_Cb = useitems_6_h1_Cb()
const items_6_Para_Props = useStore((state)=>state["Home"]["items_6_Para_"]);
const items_6_Para_IoProps = useIoStore((state)=>state["Home"]["items_6_Para_"]);
const items_6_Para_Cb = useitems_6_Para_Cb()
const Items_list_items_7_Props = useStore((state)=>state["Home"]["Items_list_items_7_"]);
const Items_list_items_7_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_7_"]);
const Items_list_items_7_Cb = useItems_list_items_7_Cb()
const price7_Props = useStore((state)=>state["Home"]["price7_"]);
const price7_IoProps = useIoStore((state)=>state["Home"]["price7_"]);
const price7_Cb = useprice7_Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const items_7_h1_Props = useStore((state)=>state["Home"]["items_7_h1_"]);
const items_7_h1_IoProps = useIoStore((state)=>state["Home"]["items_7_h1_"]);
const items_7_h1_Cb = useitems_7_h1_Cb()
const items_7_Para_Props = useStore((state)=>state["Home"]["items_7_Para_"]);
const items_7_Para_IoProps = useIoStore((state)=>state["Home"]["items_7_Para_"]);
const items_7_Para_Cb = useitems_7_Para_Cb()
const Items_list_items_8_Props = useStore((state)=>state["Home"]["Items_list_items_8_"]);
const Items_list_items_8_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_8_"]);
const Items_list_items_8_Cb = useItems_list_items_8_Cb()
const Items_list_items_8_flexProps = useStore((state)=>state["Home"]["Items_list_items_8_flex"]);
const Items_list_items_8_flexIoProps = useIoStore((state)=>state["Home"]["Items_list_items_8_flex"]);
const Items_list_items_8_flexCb = useItems_list_items_8_flexCb()
const price8_Props = useStore((state)=>state["Home"]["price8_"]);
const price8_IoProps = useIoStore((state)=>state["Home"]["price8_"]);
const price8_Cb = useprice8_Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const items_8_h1_Props = useStore((state)=>state["Home"]["items_8_h1_"]);
const items_8_h1_IoProps = useIoStore((state)=>state["Home"]["items_8_h1_"]);
const items_8_h1_Cb = useitems_8_h1_Cb()
const items_8_Para_Props = useStore((state)=>state["Home"]["items_8_Para_"]);
const items_8_Para_IoProps = useIoStore((state)=>state["Home"]["items_8_Para_"]);
const items_8_Para_Cb = useitems_8_Para_Cb()
const Items_list_items_5_Props = useStore((state)=>state["Home"]["Items_list_items_5_"]);
const Items_list_items_5_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_5_"]);
const Items_list_items_5_Cb = useItems_list_items_5_Cb()
const items_5_Para_Props = useStore((state)=>state["Home"]["items_5_Para_"]);
const items_5_Para_IoProps = useIoStore((state)=>state["Home"]["items_5_Para_"]);
const items_5_Para_Cb = useitems_5_Para_Cb()
const items_5_h1_Props = useStore((state)=>state["Home"]["items_5_h1_"]);
const items_5_h1_IoProps = useIoStore((state)=>state["Home"]["items_5_h1_"]);
const items_5_h1_Cb = useitems_5_h1_Cb()
const Price_5Props = useStore((state)=>state["Home"]["Price_5"]);
const Price_5IoProps = useIoStore((state)=>state["Home"]["Price_5"]);
const Price_5Cb = usePrice_5Cb()
const price_5_txt_Props = useStore((state)=>state["Home"]["price_5_txt_"]);
const price_5_txt_IoProps = useIoStore((state)=>state["Home"]["price_5_txt_"]);
const price_5_txt_Cb = useprice_5_txt_Cb()
const Best_burger_Props = useStore((state)=>state["Home"]["Best_burger_"]);
const Best_burger_IoProps = useIoStore((state)=>state["Home"]["Best_burger_"]);
const Best_burger_Cb = useBest_burger_Cb()
const Best_burger_L_Props = useStore((state)=>state["Home"]["Best_burger_L_"]);
const Best_burger_L_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_"]);
const Best_burger_L_Cb = useBest_burger_L_Cb()
const Best_burger_L_head_Props = useStore((state)=>state["Home"]["Best_burger_L_head_"]);
const Best_burger_L_head_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_head_"]);
const Best_burger_L_head_Cb = useBest_burger_L_head_Cb()
const Best_burger_L_para_Props = useStore((state)=>state["Home"]["Best_burger_L_para_"]);
const Best_burger_L_para_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_para_"]);
const Best_burger_L_para_Cb = useBest_burger_L_para_Cb()
const Best_burger_L_btns_Props = useStore((state)=>state["Home"]["Best_burger_L_btns_"]);
const Best_burger_L_btns_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_btns_"]);
const Best_burger_L_btns_Cb = useBest_burger_L_btns_Cb()
const Best_burger_L_button_Props = useStore((state)=>state["Home"]["Best_burger_L_button_"]);
const Best_burger_L_button_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_button_"]);
const Best_burger_L_button_Cb = useBest_burger_L_button_Cb()
const Best_burger_R_Props = useStore((state)=>state["Home"]["Best_burger_R_"]);
const Best_burger_R_IoProps = useIoStore((state)=>state["Home"]["Best_burger_R_"]);
const Best_burger_R_Cb = useBest_burger_R_Cb()
const Client_review_Props = useStore((state)=>state["Home"]["Client_review_"]);
const Client_review_IoProps = useIoStore((state)=>state["Home"]["Client_review_"]);
const Client_review_Cb = useClient_review_Cb()
const review_no_Props = useStore((state)=>state["Home"]["review_no_"]);
const review_no_IoProps = useIoStore((state)=>state["Home"]["review_no_"]);
const review_no_Cb = usereview_no_Cb()
const Client_say_Props = useStore((state)=>state["Home"]["Client_say_"]);
const Client_say_IoProps = useIoStore((state)=>state["Home"]["Client_say_"]);
const Client_say_Cb = useClient_say_Cb()
const client_review_paraProps = useStore((state)=>state["Home"]["client_review_para"]);
const client_review_paraIoProps = useIoStore((state)=>state["Home"]["client_review_para"]);
const client_review_paraCb = useclient_review_paraCb()
const client_main_body_Props = useStore((state)=>state["Home"]["client_main_body_"]);
const client_main_body_IoProps = useIoStore((state)=>state["Home"]["client_main_body_"]);
const client_main_body_Cb = useclient_main_body_Cb()
const client_left_Props = useStore((state)=>state["Home"]["client_left_"]);
const client_left_IoProps = useIoStore((state)=>state["Home"]["client_left_"]);
const client_left_Cb = useclient_left_Cb()
const client_main_reviewProps = useStore((state)=>state["Home"]["client_main_review"]);
const client_main_reviewIoProps = useIoStore((state)=>state["Home"]["client_main_review"]);
const client_main_reviewCb = useclient_main_reviewCb()
const client_main_review_star_Props = useStore((state)=>state["Home"]["client_main_review_star_"]);
const client_main_review_star_IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_"]);
const client_main_review_star_Cb = useclient_main_review_star_Cb()
const client_main_review_h1_Props = useStore((state)=>state["Home"]["client_main_review_h1_"]);
const client_main_review_h1_IoProps = useIoStore((state)=>state["Home"]["client_main_review_h1_"]);
const client_main_review_h1_Cb = useclient_main_review_h1_Cb()
const client_main_review_para_Props = useStore((state)=>state["Home"]["client_main_review_para_"]);
const client_main_review_para_IoProps = useIoStore((state)=>state["Home"]["client_main_review_para_"]);
const client_main_review_para_Cb = useclient_main_review_para_Cb()
const client_dp_nameProps = useStore((state)=>state["Home"]["client_dp_name"]);
const client_dp_nameIoProps = useIoStore((state)=>state["Home"]["client_dp_name"]);
const client_dp_nameCb = useclient_dp_nameCb()
const client_main_review_profile_Props = useStore((state)=>state["Home"]["client_main_review_profile_"]);
const client_main_review_profile_IoProps = useIoStore((state)=>state["Home"]["client_main_review_profile_"]);
const client_main_review_profile_Cb = useclient_main_review_profile_Cb()
const client_main_review_name_Props = useStore((state)=>state["Home"]["client_main_review_name_"]);
const client_main_review_name_IoProps = useIoStore((state)=>state["Home"]["client_main_review_name_"]);
const client_main_review_name_Cb = useclient_main_review_name_Cb()
const client_main_review_matt_Props = useStore((state)=>state["Home"]["client_main_review_matt_"]);
const client_main_review_matt_IoProps = useIoStore((state)=>state["Home"]["client_main_review_matt_"]);
const client_main_review_matt_Cb = useclient_main_review_matt_Cb()
const client_main_review_ca_Props = useStore((state)=>state["Home"]["client_main_review_ca_"]);
const client_main_review_ca_IoProps = useIoStore((state)=>state["Home"]["client_main_review_ca_"]);
const client_main_review_ca_Cb = useclient_main_review_ca_Cb()
const client_right_Props = useStore((state)=>state["Home"]["client_right_"]);
const client_right_IoProps = useIoStore((state)=>state["Home"]["client_right_"]);
const client_right_Cb = useclient_right_Cb()
const client_footer_Props = useStore((state)=>state["Home"]["client_footer_"]);
const client_footer_IoProps = useIoStore((state)=>state["Home"]["client_footer_"]);
const client_footer_Cb = useclient_footer_Cb()
const client_footer_btn_Props = useStore((state)=>state["Home"]["client_footer_btn_"]);
const client_footer_btn_IoProps = useIoStore((state)=>state["Home"]["client_footer_btn_"]);
const client_footer_btn_Cb = useclient_footer_btn_Cb()
const Articles_Props = useStore((state)=>state["Home"]["Articles_"]);
const Articles_IoProps = useIoStore((state)=>state["Home"]["Articles_"]);
const Articles_Cb = useArticles_Cb()
const Articles_header_Props = useStore((state)=>state["Home"]["Articles_header_"]);
const Articles_header_IoProps = useIoStore((state)=>state["Home"]["Articles_header_"]);
const Articles_header_Cb = useArticles_header_Cb()
const Articles_header_R_Props = useStore((state)=>state["Home"]["Articles_header_R_"]);
const Articles_header_R_IoProps = useIoStore((state)=>state["Home"]["Articles_header_R_"]);
const Articles_header_R_Cb = useArticles_header_R_Cb()
const Articles_header_L_Props = useStore((state)=>state["Home"]["Articles_header_L_"]);
const Articles_header_L_IoProps = useIoStore((state)=>state["Home"]["Articles_header_L_"]);
const Articles_header_L_Cb = useArticles_header_L_Cb()
const Articles_main_Props = useStore((state)=>state["Home"]["Articles_main_"]);
const Articles_main_IoProps = useIoStore((state)=>state["Home"]["Articles_main_"]);
const Articles_main_Cb = useArticles_main_Cb()
const Article_main_L_side_Props = useStore((state)=>state["Home"]["Article_main_L_side_"]);
const Article_main_L_side_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_"]);
const Article_main_L_side_Cb = useArticle_main_L_side_Cb()
const Article_main_L_side_1_Props = useStore((state)=>state["Home"]["Article_main_L_side_1_"]);
const Article_main_L_side_1_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_1_"]);
const Article_main_L_side_1_Cb = useArticle_main_L_side_1_Cb()
const Article_main_L_side_4_Props = useStore((state)=>state["Home"]["Article_main_L_side_4_"]);
const Article_main_L_side_4_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_4_"]);
const Article_main_L_side_4_Cb = useArticle_main_L_side_4_Cb()
const Article_main_L_side_2_Props = useStore((state)=>state["Home"]["Article_main_L_side_2_"]);
const Article_main_L_side_2_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_2_"]);
const Article_main_L_side_2_Cb = useArticle_main_L_side_2_Cb()
const Article_main_L_side_3_Props = useStore((state)=>state["Home"]["Article_main_L_side_3_"]);
const Article_main_L_side_3_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_3_"]);
const Article_main_L_side_3_Cb = useArticle_main_L_side_3_Cb()
const article_main_right_sideProps = useStore((state)=>state["Home"]["article_main_right_side"]);
const article_main_right_sideIoProps = useIoStore((state)=>state["Home"]["article_main_right_side"]);
const article_main_right_sideCb = usearticle_main_right_sideCb()
const article_upper_sideProps = useStore((state)=>state["Home"]["article_upper_side"]);
const article_upper_sideIoProps = useIoStore((state)=>state["Home"]["article_upper_side"]);
const article_upper_sideCb = usearticle_upper_sideCb()
const article_upper_one_oneProps = useStore((state)=>state["Home"]["article_upper_one_one"]);
const article_upper_one_oneIoProps = useIoStore((state)=>state["Home"]["article_upper_one_one"]);
const article_upper_one_oneCb = usearticle_upper_one_oneCb()
const Flex248Props = useStore((state)=>state["Home"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["Home"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex249Props = useStore((state)=>state["Home"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["Home"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const article_upper_one_twoProps = useStore((state)=>state["Home"]["article_upper_one_two"]);
const article_upper_one_twoIoProps = useIoStore((state)=>state["Home"]["article_upper_one_two"]);
const article_upper_one_twoCb = usearticle_upper_one_twoCb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const article_lower_sideProps = useStore((state)=>state["Home"]["article_lower_side"]);
const article_lower_sideIoProps = useIoStore((state)=>state["Home"]["article_lower_side"]);
const article_lower_sideCb = usearticle_lower_sideCb()
const article_lower_two_oneProps = useStore((state)=>state["Home"]["article_lower_two_one"]);
const article_lower_two_oneIoProps = useIoStore((state)=>state["Home"]["article_lower_two_one"]);
const article_lower_two_oneCb = usearticle_lower_two_oneCb()
const Flex257Props = useStore((state)=>state["Home"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Home"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const article_lower_two_twoProps = useStore((state)=>state["Home"]["article_lower_two_two"]);
const article_lower_two_twoIoProps = useIoStore((state)=>state["Home"]["article_lower_two_two"]);
const article_lower_two_twoCb = usearticle_lower_two_twoCb()
const Flex261Props = useStore((state)=>state["Home"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Home"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex263Props = useStore((state)=>state["Home"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["Home"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Form_area_Props = useStore((state)=>state["Home"]["Form_area_"]);
const Form_area_IoProps = useIoStore((state)=>state["Home"]["Form_area_"]);
const Form_area_Cb = useForm_area_Cb()
const Form_area_L_Props = useStore((state)=>state["Home"]["Form_area_L_"]);
const Form_area_L_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_"]);
const Form_area_L_Cb = useForm_area_L_Cb()
const Form_area_L_para_Props = useStore((state)=>state["Home"]["Form_area_L_para_"]);
const Form_area_L_para_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_para_"]);
const Form_area_L_para_Cb = useForm_area_L_para_Cb()
const Form_area_L_h1_Props = useStore((state)=>state["Home"]["Form_area_L_h1_"]);
const Form_area_L_h1_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_h1_"]);
const Form_area_L_h1_Cb = useForm_area_L_h1_Cb()
const Form_area_L_location_Props = useStore((state)=>state["Home"]["Form_area_L_location_"]);
const Form_area_L_location_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_location_"]);
const Form_area_L_location_Cb = useForm_area_L_location_Cb()
const Form_area_L_location_text_Props = useStore((state)=>state["Home"]["Form_area_L_location_text_"]);
const Form_area_L_location_text_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_location_text_"]);
const Form_area_L_location_text_Cb = useForm_area_L_location_text_Cb()
const Form_area_L_Mnumber_Props = useStore((state)=>state["Home"]["Form_area_L_Mnumber_"]);
const Form_area_L_Mnumber_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_Mnumber_"]);
const Form_area_L_Mnumber_Cb = useForm_area_L_Mnumber_Cb()
const Form_area_L_Mnumber_text_Props = useStore((state)=>state["Home"]["Form_area_L_Mnumber_text_"]);
const Form_area_L_Mnumber_text_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_Mnumber_text_"]);
const Form_area_L_Mnumber_text_Cb = useForm_area_L_Mnumber_text_Cb()
const Form_area_L_email_flex_Props = useStore((state)=>state["Home"]["Form_area_L_email_flex_"]);
const Form_area_L_email_flex_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_email_flex_"]);
const Form_area_L_email_flex_Cb = useForm_area_L_email_flex_Cb()
const Form_area_L_email_text_Props = useStore((state)=>state["Home"]["Form_area_L_email_text_"]);
const Form_area_L_email_text_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_email_text_"]);
const Form_area_L_email_text_Cb = useForm_area_L_email_text_Cb()
const Form_area_R_Props = useStore((state)=>state["Home"]["Form_area_R_"]);
const Form_area_R_IoProps = useIoStore((state)=>state["Home"]["Form_area_R_"]);
const Form_area_R_Cb = useForm_area_R_Cb()
const Form_area_R_fill_Props = useStore((state)=>state["Home"]["Form_area_R_fill_"]);
const Form_area_R_fill_IoProps = useIoStore((state)=>state["Home"]["Form_area_R_fill_"]);
const Form_area_R_fill_Cb = useForm_area_R_fill_Cb()
const Form_area_R_fill_1_Props = useStore((state)=>state["Home"]["Form_area_R_fill_1_"]);
const Form_area_R_fill_1_IoProps = useIoStore((state)=>state["Home"]["Form_area_R_fill_1_"]);
const Form_area_R_fill_1_Cb = useForm_area_R_fill_1_Cb()
const Form_third_rowProps = useStore((state)=>state["Home"]["Form_third_row"]);
const Form_third_rowIoProps = useIoStore((state)=>state["Home"]["Form_third_row"]);
const Form_third_rowCb = useForm_third_rowCb()
const third_row_RProps = useStore((state)=>state["Home"]["third_row_R"]);
const third_row_RIoProps = useIoStore((state)=>state["Home"]["third_row_R"]);
const third_row_RCb = usethird_row_RCb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const third_row_LProps = useStore((state)=>state["Home"]["third_row_L"]);
const third_row_LIoProps = useIoStore((state)=>state["Home"]["third_row_L"]);
const third_row_LCb = usethird_row_LCb()
const Flex281Props = useStore((state)=>state["Home"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Home"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex282Props = useStore((state)=>state["Home"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Home"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Form_first_row_Props = useStore((state)=>state["Home"]["Form_first_row_"]);
const Form_first_row_IoProps = useIoStore((state)=>state["Home"]["Form_first_row_"]);
const Form_first_row_Cb = useForm_first_row_Cb()
const first_row_LProps = useStore((state)=>state["Home"]["first_row_L"]);
const first_row_LIoProps = useIoStore((state)=>state["Home"]["first_row_L"]);
const first_row_LCb = usefirst_row_LCb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const first_row_RProps = useStore((state)=>state["Home"]["first_row_R"]);
const first_row_RIoProps = useIoStore((state)=>state["Home"]["first_row_R"]);
const first_row_RCb = usefirst_row_RCb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Form_second_rowProps = useStore((state)=>state["Home"]["Form_second_row"]);
const Form_second_rowIoProps = useIoStore((state)=>state["Home"]["Form_second_row"]);
const Form_second_rowCb = useForm_second_rowCb()
const second_row_LProps = useStore((state)=>state["Home"]["second_row_L"]);
const second_row_LIoProps = useIoStore((state)=>state["Home"]["second_row_L"]);
const second_row_LCb = usesecond_row_LCb()
const Flex292Props = useStore((state)=>state["Home"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["Home"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex293Props = useStore((state)=>state["Home"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Home"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const second_row_RProps = useStore((state)=>state["Home"]["second_row_R"]);
const second_row_RIoProps = useIoStore((state)=>state["Home"]["second_row_R"]);
const second_row_RCb = usesecond_row_RCb()
const Flex294Props = useStore((state)=>state["Home"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["Home"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Form_fourth_rowProps = useStore((state)=>state["Home"]["Form_fourth_row"]);
const Form_fourth_rowIoProps = useIoStore((state)=>state["Home"]["Form_fourth_row"]);
const Form_fourth_rowCb = useForm_fourth_rowCb()
const fourth_row_LProps = useStore((state)=>state["Home"]["fourth_row_L"]);
const fourth_row_LIoProps = useIoStore((state)=>state["Home"]["fourth_row_L"]);
const fourth_row_LCb = usefourth_row_LCb()
const Add_a_note_area_Props = useStore((state)=>state["Home"]["Add_a_note_area_"]);
const Add_a_note_area_IoProps = useIoStore((state)=>state["Home"]["Add_a_note_area_"]);
const Add_a_note_area_Cb = useAdd_a_note_area_Cb()
const Add_a_note_Props = useStore((state)=>state["Home"]["Add_a_note_"]);
const Add_a_note_IoProps = useIoStore((state)=>state["Home"]["Add_a_note_"]);
const Add_a_note_Cb = useAdd_a_note_Cb()
const Form_area_R_fill_btn_Props = useStore((state)=>state["Home"]["Form_area_R_fill_btn_"]);
const Form_area_R_fill_btn_IoProps = useIoStore((state)=>state["Home"]["Form_area_R_fill_btn_"]);
const Form_area_R_fill_btn_Cb = useForm_area_R_fill_btn_Cb()
const Our_articles_follow_us_Props = useStore((state)=>state["Home"]["Our_articles_follow_us_"]);
const Our_articles_follow_us_IoProps = useIoStore((state)=>state["Home"]["Our_articles_follow_us_"]);
const Our_articles_follow_us_Cb = useOur_articles_follow_us_Cb()
const Follow_1_Props = useStore((state)=>state["Home"]["Follow_1_"]);
const Follow_1_IoProps = useIoStore((state)=>state["Home"]["Follow_1_"]);
const Follow_1_Cb = useFollow_1_Cb()
const Follow_head_Props = useStore((state)=>state["Home"]["Follow_head_"]);
const Follow_head_IoProps = useIoStore((state)=>state["Home"]["Follow_head_"]);
const Follow_head_Cb = useFollow_head_Cb()
const Follow_btn_Props = useStore((state)=>state["Home"]["Follow_btn_"]);
const Follow_btn_IoProps = useIoStore((state)=>state["Home"]["Follow_btn_"]);
const Follow_btn_Cb = useFollow_btn_Cb()
const Follow_2_Props = useStore((state)=>state["Home"]["Follow_2_"]);
const Follow_2_IoProps = useIoStore((state)=>state["Home"]["Follow_2_"]);
const Follow_2_Cb = useFollow_2_Cb()
const Follow_images_Props = useStore((state)=>state["Home"]["Follow_images_"]);
const Follow_images_IoProps = useIoStore((state)=>state["Home"]["Follow_images_"]);
const Follow_images_Cb = useFollow_images_Cb()
const Follow_images_3i_Props = useStore((state)=>state["Home"]["Follow_images_3i_"]);
const Follow_images_3i_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3i_"]);
const Follow_images_3i_Cb = useFollow_images_3i_Cb()
const Follow_images_3a_Props = useStore((state)=>state["Home"]["Follow_images_3a_"]);
const Follow_images_3a_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3a_"]);
const Follow_images_3a_Cb = useFollow_images_3a_Cb()
const Follow_images_3a_1_Props = useStore((state)=>state["Home"]["Follow_images_3a_1_"]);
const Follow_images_3a_1_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3a_1_"]);
const Follow_images_3a_1_Cb = useFollow_images_3a_1_Cb()
const Follow_images_3a_2_Props = useStore((state)=>state["Home"]["Follow_images_3a_2_"]);
const Follow_images_3a_2_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3a_2_"]);
const Follow_images_3a_2_Cb = useFollow_images_3a_2_Cb()
const Follow_images_3b_Props = useStore((state)=>state["Home"]["Follow_images_3b_"]);
const Follow_images_3b_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3b_"]);
const Follow_images_3b_Cb = useFollow_images_3b_Cb()
const Follow_images_3b_2_Props = useStore((state)=>state["Home"]["Follow_images_3b_2_"]);
const Follow_images_3b_2_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3b_2_"]);
const Follow_images_3b_2_Cb = useFollow_images_3b_2_Cb()
const Follow_images_3b_1_Props = useStore((state)=>state["Home"]["Follow_images_3b_1_"]);
const Follow_images_3b_1_IoProps = useIoStore((state)=>state["Home"]["Follow_images_3b_1_"]);
const Follow_images_3b_1_Cb = useFollow_images_3b_1_Cb()
const Home_footer_Props = useStore((state)=>state["Home"]["Home_footer_"]);
const Home_footer_IoProps = useIoStore((state)=>state["Home"]["Home_footer_"]);
const Home_footer_Cb = useHome_footer_Cb()
const Footer_left_Props = useStore((state)=>state["Home"]["Footer_left_"]);
const Footer_left_IoProps = useIoStore((state)=>state["Home"]["Footer_left_"]);
const Footer_left_Cb = useFooter_left_Cb()
const Footer_left_h1_Props = useStore((state)=>state["Home"]["Footer_left_h1_"]);
const Footer_left_h1_IoProps = useIoStore((state)=>state["Home"]["Footer_left_h1_"]);
const Footer_left_h1_Cb = useFooter_left_h1_Cb()
const Footer_left_para_Props = useStore((state)=>state["Home"]["Footer_left_para_"]);
const Footer_left_para_IoProps = useIoStore((state)=>state["Home"]["Footer_left_para_"]);
const Footer_left_para_Cb = useFooter_left_para_Cb()
const Footer_left_stars_Props = useStore((state)=>state["Home"]["Footer_left_stars_"]);
const Footer_left_stars_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_"]);
const Footer_left_stars_Cb = useFooter_left_stars_Cb()
const Footer_mid_sectionProps = useStore((state)=>state["Home"]["Footer_mid_section"]);
const Footer_mid_sectionIoProps = useIoStore((state)=>state["Home"]["Footer_mid_section"]);
const Footer_mid_sectionCb = useFooter_mid_sectionCb()
const Footer_mid_Left_Props = useStore((state)=>state["Home"]["Footer_mid_Left_"]);
const Footer_mid_Left_IoProps = useIoStore((state)=>state["Home"]["Footer_mid_Left_"]);
const Footer_mid_Left_Cb = useFooter_mid_Left_Cb()
const footer_mid_Left_1Props = useStore((state)=>state["Home"]["footer_mid_Left_1"]);
const footer_mid_Left_1IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_1"]);
const footer_mid_Left_1Cb = usefooter_mid_Left_1Cb()
const footer_mid_Left_2Props = useStore((state)=>state["Home"]["footer_mid_Left_2"]);
const footer_mid_Left_2IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_2"]);
const footer_mid_Left_2Cb = usefooter_mid_Left_2Cb()
const footer_mid_Left_7Props = useStore((state)=>state["Home"]["footer_mid_Left_7"]);
const footer_mid_Left_7IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_7"]);
const footer_mid_Left_7Cb = usefooter_mid_Left_7Cb()
const footer_mid_Left_8Props = useStore((state)=>state["Home"]["footer_mid_Left_8"]);
const footer_mid_Left_8IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_8"]);
const footer_mid_Left_8Cb = usefooter_mid_Left_8Cb()
const footer_mid_Left_5Props = useStore((state)=>state["Home"]["footer_mid_Left_5"]);
const footer_mid_Left_5IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_5"]);
const footer_mid_Left_5Cb = usefooter_mid_Left_5Cb()
const footer_mid_Left_6Props = useStore((state)=>state["Home"]["footer_mid_Left_6"]);
const footer_mid_Left_6IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_6"]);
const footer_mid_Left_6Cb = usefooter_mid_Left_6Cb()
const footer_mid_Left_3Props = useStore((state)=>state["Home"]["footer_mid_Left_3"]);
const footer_mid_Left_3IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_3"]);
const footer_mid_Left_3Cb = usefooter_mid_Left_3Cb()
const footer_mid_Left_4Props = useStore((state)=>state["Home"]["footer_mid_Left_4"]);
const footer_mid_Left_4IoProps = useIoStore((state)=>state["Home"]["footer_mid_Left_4"]);
const footer_mid_Left_4Cb = usefooter_mid_Left_4Cb()
const Footer_mid_right_Props = useStore((state)=>state["Home"]["Footer_mid_right_"]);
const Footer_mid_right_IoProps = useIoStore((state)=>state["Home"]["Footer_mid_right_"]);
const Footer_mid_right_Cb = useFooter_mid_right_Cb()
const footer_mid_R_4Props = useStore((state)=>state["Home"]["footer_mid_R_4"]);
const footer_mid_R_4IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_4"]);
const footer_mid_R_4Cb = usefooter_mid_R_4Cb()
const footer_mid_R_3Props = useStore((state)=>state["Home"]["footer_mid_R_3"]);
const footer_mid_R_3IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_3"]);
const footer_mid_R_3Cb = usefooter_mid_R_3Cb()
const footer_mid_R_6Props = useStore((state)=>state["Home"]["footer_mid_R_6"]);
const footer_mid_R_6IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_6"]);
const footer_mid_R_6Cb = usefooter_mid_R_6Cb()
const footer_mid_R_5Props = useStore((state)=>state["Home"]["footer_mid_R_5"]);
const footer_mid_R_5IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_5"]);
const footer_mid_R_5Cb = usefooter_mid_R_5Cb()
const footer_mid_R_8Props = useStore((state)=>state["Home"]["footer_mid_R_8"]);
const footer_mid_R_8IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_8"]);
const footer_mid_R_8Cb = usefooter_mid_R_8Cb()
const footer_mid_R_7Props = useStore((state)=>state["Home"]["footer_mid_R_7"]);
const footer_mid_R_7IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_7"]);
const footer_mid_R_7Cb = usefooter_mid_R_7Cb()
const footer_mid_R_2Props = useStore((state)=>state["Home"]["footer_mid_R_2"]);
const footer_mid_R_2IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_2"]);
const footer_mid_R_2Cb = usefooter_mid_R_2Cb()
const footer_mid_R_1Props = useStore((state)=>state["Home"]["footer_mid_R_1"]);
const footer_mid_R_1IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_1"]);
const footer_mid_R_1Cb = usefooter_mid_R_1Cb()
const Follow_insta_Props = useStore((state)=>state["Home"]["Follow_insta_"]);
const Follow_insta_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_"]);
const Follow_insta_Cb = useFollow_insta_Cb()
const Follow_insta_img_2_Props = useStore((state)=>state["Home"]["Follow_insta_img_2_"]);
const Follow_insta_img_2_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_2_"]);
const Follow_insta_img_2_Cb = useFollow_insta_img_2_Cb()
const Follow_insta_img_2_21_Props = useStore((state)=>state["Home"]["Follow_insta_img_2_21_"]);
const Follow_insta_img_2_21_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_2_21_"]);
const Follow_insta_img_2_21_Cb = useFollow_insta_img_2_21_Cb()
const Follow_insta_img_2_22_Props = useStore((state)=>state["Home"]["Follow_insta_img_2_22_"]);
const Follow_insta_img_2_22_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_2_22_"]);
const Follow_insta_img_2_22_Cb = useFollow_insta_img_2_22_Cb()
const Follow_insta_img_1_Props = useStore((state)=>state["Home"]["Follow_insta_img_1_"]);
const Follow_insta_img_1_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_1_"]);
const Follow_insta_img_1_Cb = useFollow_insta_img_1_Cb()
const Follow_insta_img_1_12_Props = useStore((state)=>state["Home"]["Follow_insta_img_1_12_"]);
const Follow_insta_img_1_12_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_1_12_"]);
const Follow_insta_img_1_12_Cb = useFollow_insta_img_1_12_Cb()
const Follow_insta_img_1_11_Props = useStore((state)=>state["Home"]["Follow_insta_img_1_11_"]);
const Follow_insta_img_1_11_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_1_11_"]);
const Follow_insta_img_1_11_Cb = useFollow_insta_img_1_11_Cb()
const Follow_insta_head_Props = useStore((state)=>state["Home"]["Follow_insta_head_"]);
const Follow_insta_head_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_head_"]);
const Follow_insta_head_Cb = useFollow_insta_head_Cb()
const Home_Header_Flex_R_Primary_btn_Props = useStore((state)=>state["Home"]["Home_Header_Flex_R_Primary_btn_"]);
const Home_Header_Flex_R_Primary_btn_IoProps = useIoStore((state)=>state["Home"]["Home_Header_Flex_R_Primary_btn_"]);
const Home_Header_Flex_R_Primary_btn_Cb = useHome_Header_Flex_R_Primary_btn_Cb()
const Home_Header_Flex_R_Secondary_btProps = useStore((state)=>state["Home"]["Home_Header_Flex_R_Secondary_bt"]);
const Home_Header_Flex_R_Secondary_btIoProps = useIoStore((state)=>state["Home"]["Home_Header_Flex_R_Secondary_bt"]);
const Home_Header_Flex_R_Secondary_btCb = useHome_Header_Flex_R_Secondary_btCb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const header_cartProps = useStore((state)=>state["Home"]["header_cart"]);
const header_cartIoProps = useIoStore((state)=>state["Home"]["header_cart"]);
const header_cartCb = useheader_cartCb()
const header_homeProps = useStore((state)=>state["Home"]["header_home"]);
const header_homeIoProps = useIoStore((state)=>state["Home"]["header_home"]);
const header_homeCb = useheader_homeCb()
const header_aboutProps = useStore((state)=>state["Home"]["header_about"]);
const header_aboutIoProps = useIoStore((state)=>state["Home"]["header_about"]);
const header_aboutCb = useheader_aboutCb()
const header_menuProps = useStore((state)=>state["Home"]["header_menu"]);
const header_menuIoProps = useIoStore((state)=>state["Home"]["header_menu"]);
const header_menuCb = useheader_menuCb()
const header_pageProps = useStore((state)=>state["Home"]["header_page"]);
const header_pageIoProps = useIoStore((state)=>state["Home"]["header_page"]);
const header_pageCb = useheader_pageCb()
const Home_Banner_L_Para_txt_Props = useStore((state)=>state["Home"]["Home_Banner_L_Para_txt_"]);
const Home_Banner_L_Para_txt_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Para_txt_"]);
const Home_Banner_L_Para_txt_Cb = useHome_Banner_L_Para_txt_Cb()
const Home_Banner_L_Headings_Lower_Props = useStore((state)=>state["Home"]["Home_Banner_L_Headings_Lower_"]);
const Home_Banner_L_Headings_Lower_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Headings_Lower_"]);
const Home_Banner_L_Headings_Lower_Cb = useHome_Banner_L_Headings_Lower_Cb()
const Home_Banner_L_Headings_Upper_Props = useStore((state)=>state["Home"]["Home_Banner_L_Headings_Upper_"]);
const Home_Banner_L_Headings_Upper_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Headings_Upper_"]);
const Home_Banner_L_Headings_Upper_Cb = useHome_Banner_L_Headings_Upper_Cb()
const Home_Banner_L_Btn_Flex_1_Props = useStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_1_"]);
const Home_Banner_L_Btn_Flex_1_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_1_"]);
const Home_Banner_L_Btn_Flex_1_Cb = useHome_Banner_L_Btn_Flex_1_Cb()
const Home_Banner_L_Btn_Flex_2_Props = useStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_2_"]);
const Home_Banner_L_Btn_Flex_2_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_L_Btn_Flex_2_"]);
const Home_Banner_L_Btn_Flex_2_Cb = useHome_Banner_L_Btn_Flex_2_Cb()
const Home_Banner_R_img_Props = useStore((state)=>state["Home"]["Home_Banner_R_img_"]);
const Home_Banner_R_img_IoProps = useIoStore((state)=>state["Home"]["Home_Banner_R_img_"]);
const Home_Banner_R_img_Cb = useHome_Banner_R_img_Cb()
const Companies_logo_flex_Rows_1_Text_Props = useStore((state)=>state["Home"]["Companies_logo_flex_Rows_1_Text_"]);
const Companies_logo_flex_Rows_1_Text_IoProps = useIoStore((state)=>state["Home"]["Companies_logo_flex_Rows_1_Text_"]);
const Companies_logo_flex_Rows_1_Text_Cb = useCompanies_logo_flex_Rows_1_Text_Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Browse_foot_Flex_R_ButtonProps = useStore((state)=>state["Home"]["Browse_foot_Flex_R_Button"]);
const Browse_foot_Flex_R_ButtonIoProps = useIoStore((state)=>state["Home"]["Browse_foot_Flex_R_Button"]);
const Browse_foot_Flex_R_ButtonCb = useBrowse_foot_Flex_R_ButtonCb()
const Browse_foot_Flex_L_ButtonProps = useStore((state)=>state["Home"]["Browse_foot_Flex_L_Button"]);
const Browse_foot_Flex_L_ButtonIoProps = useIoStore((state)=>state["Home"]["Browse_foot_Flex_L_Button"]);
const Browse_foot_Flex_L_ButtonCb = useBrowse_foot_Flex_L_ButtonCb()
const Browse_Heading_txt_Props = useStore((state)=>state["Home"]["Browse_Heading_txt_"]);
const Browse_Heading_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_Heading_txt_"]);
const Browse_Heading_txt_Cb = useBrowse_Heading_txt_Cb()
const Browse_body_4_Para2_txt_Props = useStore((state)=>state["Home"]["Browse_body_4_Para2_txt_"]);
const Browse_body_4_Para2_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_Para2_txt_"]);
const Browse_body_4_Para2_txt_Cb = useBrowse_body_4_Para2_txt_Cb()
const Browse_body_4_Para1_txt_Props = useStore((state)=>state["Home"]["Browse_body_4_Para1_txt_"]);
const Browse_body_4_Para1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_Para1_txt_"]);
const Browse_body_4_Para1_txt_Cb = useBrowse_body_4_Para1_txt_Cb()
const Browse_body_4_h1_txt_Props = useStore((state)=>state["Home"]["Browse_body_4_h1_txt_"]);
const Browse_body_4_h1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_h1_txt_"]);
const Browse_body_4_h1_txt_Cb = useBrowse_body_4_h1_txt_Cb()
const Browse_body_4_image_img_Props = useStore((state)=>state["Home"]["Browse_body_4_image_img_"]);
const Browse_body_4_image_img_IoProps = useIoStore((state)=>state["Home"]["Browse_body_4_image_img_"]);
const Browse_body_4_image_img_Cb = useBrowse_body_4_image_img_Cb()
const Browse_body_1_image_img_Props = useStore((state)=>state["Home"]["Browse_body_1_image_img_"]);
const Browse_body_1_image_img_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_image_img_"]);
const Browse_body_1_image_img_Cb = useBrowse_body_1_image_img_Cb()
const Browse_body_1_h1_txt_Props = useStore((state)=>state["Home"]["Browse_body_1_h1_txt_"]);
const Browse_body_1_h1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_h1_txt_"]);
const Browse_body_1_h1_txt_Cb = useBrowse_body_1_h1_txt_Cb()
const Browse_body_1_para_Text_Props = useStore((state)=>state["Home"]["Browse_body_1_para_Text_"]);
const Browse_body_1_para_Text_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_para_Text_"]);
const Browse_body_1_para_Text_Cb = useBrowse_body_1_para_Text_Cb()
const Browse_body_1_Para_2_txt_Props = useStore((state)=>state["Home"]["Browse_body_1_Para_2_txt_"]);
const Browse_body_1_Para_2_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_1_Para_2_txt_"]);
const Browse_body_1_Para_2_txt_Cb = useBrowse_body_1_Para_2_txt_Cb()
const Browse_body_2_image_img_Props = useStore((state)=>state["Home"]["Browse_body_2_image_img_"]);
const Browse_body_2_image_img_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_image_img_"]);
const Browse_body_2_image_img_Cb = useBrowse_body_2_image_img_Cb()
const Browse_body_2_h1_Txt_Props = useStore((state)=>state["Home"]["Browse_body_2_h1_Txt_"]);
const Browse_body_2_h1_Txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_h1_Txt_"]);
const Browse_body_2_h1_Txt_Cb = useBrowse_body_2_h1_Txt_Cb()
const Browse_body_2_Para1_txt_Props = useStore((state)=>state["Home"]["Browse_body_2_Para1_txt_"]);
const Browse_body_2_Para1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_Para1_txt_"]);
const Browse_body_2_Para1_txt_Cb = useBrowse_body_2_Para1_txt_Cb()
const Browse_body_2_Para2_txt_Props = useStore((state)=>state["Home"]["Browse_body_2_Para2_txt_"]);
const Browse_body_2_Para2_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_2_Para2_txt_"]);
const Browse_body_2_Para2_txt_Cb = useBrowse_body_2_Para2_txt_Cb()
const Browse_body_3_image_img_Props = useStore((state)=>state["Home"]["Browse_body_3_image_img_"]);
const Browse_body_3_image_img_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_image_img_"]);
const Browse_body_3_image_img_Cb = useBrowse_body_3_image_img_Cb()
const Browse_body_3_h1_txt_Props = useStore((state)=>state["Home"]["Browse_body_3_h1_txt_"]);
const Browse_body_3_h1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_h1_txt_"]);
const Browse_body_3_h1_txt_Cb = useBrowse_body_3_h1_txt_Cb()
const Browse_body_3_Para1_txt_Props = useStore((state)=>state["Home"]["Browse_body_3_Para1_txt_"]);
const Browse_body_3_Para1_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_Para1_txt_"]);
const Browse_body_3_Para1_txt_Cb = useBrowse_body_3_Para1_txt_Cb()
const Browse_body_3_Para2_txt_Props = useStore((state)=>state["Home"]["Browse_body_3_Para2_txt_"]);
const Browse_body_3_Para2_txt_IoProps = useIoStore((state)=>state["Home"]["Browse_body_3_Para2_txt_"]);
const Browse_body_3_Para2_txt_Cb = useBrowse_body_3_Para2_txt_Cb()
const About_us_Left_main_img_Props = useStore((state)=>state["Home"]["About_us_Left_main_img_"]);
const About_us_Left_main_img_IoProps = useIoStore((state)=>state["Home"]["About_us_Left_main_img_"]);
const About_us_Left_main_img_Cb = useAbout_us_Left_main_img_Cb()
const address_headerProps = useStore((state)=>state["Home"]["address_header"]);
const address_headerIoProps = useIoStore((state)=>state["Home"]["address_header"]);
const address_headerCb = useaddress_headerCb()
const Location_img_Props = useStore((state)=>state["Home"]["Location_img_"]);
const Location_img_IoProps = useIoStore((state)=>state["Home"]["Location_img_"]);
const Location_img_Cb = useLocation_img_Cb()
const restro_address_txt_Props = useStore((state)=>state["Home"]["restro_address_txt_"]);
const restro_address_txt_IoProps = useIoStore((state)=>state["Home"]["restro_address_txt_"]);
const restro_address_txt_Cb = userestro_address_txt_Cb()
const CallProps = useStore((state)=>state["Home"]["Call"]);
const CallIoProps = useIoStore((state)=>state["Home"]["Call"]);
const CallCb = useCallCb()
const mobile_noProps = useStore((state)=>state["Home"]["mobile_no"]);
const mobile_noIoProps = useIoStore((state)=>state["Home"]["mobile_no"]);
const mobile_noCb = usemobile_noCb()
const mail_Props = useStore((state)=>state["Home"]["mail_"]);
const mail_IoProps = useIoStore((state)=>state["Home"]["mail_"]);
const mail_Cb = usemail_Cb()
const email_id_adressProps = useStore((state)=>state["Home"]["email_id_adress"]);
const email_id_adressIoProps = useIoStore((state)=>state["Home"]["email_id_adress"]);
const email_id_adressCb = useemail_id_adressCb()
const Home_Contact_Right_aboutUsProps = useStore((state)=>state["Home"]["Home_Contact_Right_aboutUs"]);
const Home_Contact_Right_aboutUsIoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_aboutUs"]);
const Home_Contact_Right_aboutUsCb = useHome_Contact_Right_aboutUsCb()
const Home_Contact_Right_First_paraProps = useStore((state)=>state["Home"]["Home_Contact_Right_First_para"]);
const Home_Contact_Right_First_paraIoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_First_para"]);
const Home_Contact_Right_First_paraCb = useHome_Contact_Right_First_paraCb()
const Home_Contact_Right_sec_paraProps = useStore((state)=>state["Home"]["Home_Contact_Right_sec_para"]);
const Home_Contact_Right_sec_paraIoProps = useIoStore((state)=>state["Home"]["Home_Contact_Right_sec_para"]);
const Home_Contact_Right_sec_paraCb = useHome_Contact_Right_sec_paraCb()
const About_btn_R_Props = useStore((state)=>state["Home"]["About_btn_R_"]);
const About_btn_R_IoProps = useIoStore((state)=>state["Home"]["About_btn_R_"]);
const About_btn_R_Cb = useAbout_btn_R_Cb()
const About_btn_L_Props = useStore((state)=>state["Home"]["About_btn_L_"]);
const About_btn_L_IoProps = useIoStore((state)=>state["Home"]["About_btn_L_"]);
const About_btn_L_Cb = useAbout_btn_L_Cb()
const Items_list_Heading_Props = useStore((state)=>state["Home"]["Items_list_Heading_"]);
const Items_list_Heading_IoProps = useIoStore((state)=>state["Home"]["Items_list_Heading_"]);
const Items_list_Heading_Cb = useItems_list_Heading_Cb()
const Items_list_Para_txt_Props = useStore((state)=>state["Home"]["Items_list_Para_txt_"]);
const Items_list_Para_txt_IoProps = useIoStore((state)=>state["Home"]["Items_list_Para_txt_"]);
const Items_list_Para_txt_Cb = useItems_list_Para_txt_Cb()
const Burger_img_Props = useStore((state)=>state["Home"]["Burger_img_"]);
const Burger_img_IoProps = useIoStore((state)=>state["Home"]["Burger_img_"]);
const Burger_img_Cb = useBurger_img_Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const items_1_h1_txt_Props = useStore((state)=>state["Home"]["items_1_h1_txt_"]);
const items_1_h1_txt_IoProps = useIoStore((state)=>state["Home"]["items_1_h1_txt_"]);
const items_1_h1_txt_Cb = useitems_1_h1_txt_Cb()
const items_1_Para_txt_Props = useStore((state)=>state["Home"]["items_1_Para_txt_"]);
const items_1_Para_txt_IoProps = useIoStore((state)=>state["Home"]["items_1_Para_txt_"]);
const items_1_Para_txt_Cb = useitems_1_Para_txt_Cb()
const Classic_friesProps = useStore((state)=>state["Home"]["Classic_fries"]);
const Classic_friesIoProps = useIoStore((state)=>state["Home"]["Classic_fries"]);
const Classic_friesCb = useClassic_friesCb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Milkshake_img_Props = useStore((state)=>state["Home"]["Milkshake_img_"]);
const Milkshake_img_IoProps = useIoStore((state)=>state["Home"]["Milkshake_img_"]);
const Milkshake_img_Cb = useMilkshake_img_Cb()
const items_2_Para_txt_Props = useStore((state)=>state["Home"]["items_2_Para_txt_"]);
const items_2_Para_txt_IoProps = useIoStore((state)=>state["Home"]["items_2_Para_txt_"]);
const items_2_Para_txt_Cb = useitems_2_Para_txt_Cb()
const items_2_h1_txt_Props = useStore((state)=>state["Home"]["items_2_h1_txt_"]);
const items_2_h1_txt_IoProps = useIoStore((state)=>state["Home"]["items_2_h1_txt_"]);
const items_2_h1_txt_Cb = useitems_2_h1_txt_Cb()
const price2_txt_Props = useStore((state)=>state["Home"]["price2_txt_"]);
const price2_txt_IoProps = useIoStore((state)=>state["Home"]["price2_txt_"]);
const price2_txt_Cb = useprice2_txt_Cb()
const Pancake_imgProps = useStore((state)=>state["Home"]["Pancake_img"]);
const Pancake_imgIoProps = useIoStore((state)=>state["Home"]["Pancake_img"]);
const Pancake_imgCb = usePancake_imgCb()
const TextBox318Props = useStore((state)=>state["Home"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["Home"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const items_4_h1_txt_Props = useStore((state)=>state["Home"]["items_4_h1_txt_"]);
const items_4_h1_txt_IoProps = useIoStore((state)=>state["Home"]["items_4_h1_txt_"]);
const items_4_h1_txt_Cb = useitems_4_h1_txt_Cb()
const items_4_Para_txt_Props = useStore((state)=>state["Home"]["items_4_Para_txt_"]);
const items_4_Para_txt_IoProps = useIoStore((state)=>state["Home"]["items_4_Para_txt_"]);
const items_4_Para_txt_Cb = useitems_4_Para_txt_Cb()
const Items_list_foot_btns_L_Props = useStore((state)=>state["Home"]["Items_list_foot_btns_L_"]);
const Items_list_foot_btns_L_IoProps = useIoStore((state)=>state["Home"]["Items_list_foot_btns_L_"]);
const Items_list_foot_btns_L_Cb = useItems_list_foot_btns_L_Cb()
const Items_list_foot_btns_R_Props = useStore((state)=>state["Home"]["Items_list_foot_btns_R_"]);
const Items_list_foot_btns_R_IoProps = useIoStore((state)=>state["Home"]["Items_list_foot_btns_R_"]);
const Items_list_foot_btns_R_Cb = useItems_list_foot_btns_R_Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Chicken_burger_Props = useStore((state)=>state["Home"]["Chicken_burger_"]);
const Chicken_burger_IoProps = useIoStore((state)=>state["Home"]["Chicken_burger_"]);
const Chicken_burger_Cb = useChicken_burger_Cb()
const para_6_txt_Props = useStore((state)=>state["Home"]["para_6_txt_"]);
const para_6_txt_IoProps = useIoStore((state)=>state["Home"]["para_6_txt_"]);
const para_6_txt_Cb = usepara_6_txt_Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Egg_toast_Props = useStore((state)=>state["Home"]["Egg_toast_"]);
const Egg_toast_IoProps = useIoStore((state)=>state["Home"]["Egg_toast_"]);
const Egg_toast_Cb = useEgg_toast_Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const regular_soda_img_Props = useStore((state)=>state["Home"]["regular_soda_img_"]);
const regular_soda_img_IoProps = useIoStore((state)=>state["Home"]["regular_soda_img_"]);
const regular_soda_img_Cb = useregular_soda_img_Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Regular_SodaProps = useStore((state)=>state["Home"]["Regular_Soda"]);
const Regular_SodaIoProps = useIoStore((state)=>state["Home"]["Regular_Soda"]);
const Regular_SodaCb = useRegular_SodaCb()
const Items_list_items_8_para_Props = useStore((state)=>state["Home"]["Items_list_items_8_para_"]);
const Items_list_items_8_para_IoProps = useIoStore((state)=>state["Home"]["Items_list_items_8_para_"]);
const Items_list_items_8_para_Cb = useItems_list_items_8_para_Cb()
const Ice_cream_imgProps = useStore((state)=>state["Home"]["Ice_cream_img"]);
const Ice_cream_imgIoProps = useIoStore((state)=>state["Home"]["Ice_cream_img"]);
const Ice_cream_imgCb = useIce_cream_imgCb()
const item_5_TxtProps = useStore((state)=>state["Home"]["item_5_Txt"]);
const item_5_TxtIoProps = useIoStore((state)=>state["Home"]["item_5_Txt"]);
const item_5_TxtCb = useitem_5_TxtCb()
const Ice_cream_txt_Props = useStore((state)=>state["Home"]["Ice_cream_txt_"]);
const Ice_cream_txt_IoProps = useIoStore((state)=>state["Home"]["Ice_cream_txt_"]);
const Ice_cream_txt_Cb = useIce_cream_txt_Cb()
const price5_txt_Props = useStore((state)=>state["Home"]["price5_txt_"]);
const price5_txt_IoProps = useIoStore((state)=>state["Home"]["price5_txt_"]);
const price5_txt_Cb = useprice5_txt_Cb()
const Best_burger_L_head_txt_Props = useStore((state)=>state["Home"]["Best_burger_L_head_txt_"]);
const Best_burger_L_head_txt_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_head_txt_"]);
const Best_burger_L_head_txt_Cb = useBest_burger_L_head_txt_Cb()
const Best_burger_L_para_txt_Props = useStore((state)=>state["Home"]["Best_burger_L_para_txt_"]);
const Best_burger_L_para_txt_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_para_txt_"]);
const Best_burger_L_para_txt_Cb = useBest_burger_L_para_txt_Cb()
const Best_burger_L_btns_2_Props = useStore((state)=>state["Home"]["Best_burger_L_btns_2_"]);
const Best_burger_L_btns_2_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_btns_2_"]);
const Best_burger_L_btns_2_Cb = useBest_burger_L_btns_2_Cb()
const Best_burger_L_btns_1_Props = useStore((state)=>state["Home"]["Best_burger_L_btns_1_"]);
const Best_burger_L_btns_1_IoProps = useIoStore((state)=>state["Home"]["Best_burger_L_btns_1_"]);
const Best_burger_L_btns_1_Cb = useBest_burger_L_btns_1_Cb()
const Best_burger_img_Props = useStore((state)=>state["Home"]["Best_burger_img_"]);
const Best_burger_img_IoProps = useIoStore((state)=>state["Home"]["Best_burger_img_"]);
const Best_burger_img_Cb = useBest_burger_img_Cb()
const review_no_1_Props = useStore((state)=>state["Home"]["review_no_1_"]);
const review_no_1_IoProps = useIoStore((state)=>state["Home"]["review_no_1_"]);
const review_no_1_Cb = usereview_no_1_Cb()
const clinet_say_txt_Props = useStore((state)=>state["Home"]["clinet_say_txt_"]);
const clinet_say_txt_IoProps = useIoStore((state)=>state["Home"]["clinet_say_txt_"]);
const clinet_say_txt_Cb = useclinet_say_txt_Cb()
const client_para_txt_Props = useStore((state)=>state["Home"]["client_para_txt_"]);
const client_para_txt_IoProps = useIoStore((state)=>state["Home"]["client_para_txt_"]);
const client_para_txt_Cb = useclient_para_txt_Cb()
const client_left_img_Props = useStore((state)=>state["Home"]["client_left_img_"]);
const client_left_img_IoProps = useIoStore((state)=>state["Home"]["client_left_img_"]);
const client_left_img_Cb = useclient_left_img_Cb()
const client_main_review_star_1Props = useStore((state)=>state["Home"]["client_main_review_star_1"]);
const client_main_review_star_1IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_1"]);
const client_main_review_star_1Cb = useclient_main_review_star_1Cb()
const client_main_review_star_2Props = useStore((state)=>state["Home"]["client_main_review_star_2"]);
const client_main_review_star_2IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_2"]);
const client_main_review_star_2Cb = useclient_main_review_star_2Cb()
const client_main_review_star_3Props = useStore((state)=>state["Home"]["client_main_review_star_3"]);
const client_main_review_star_3IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_3"]);
const client_main_review_star_3Cb = useclient_main_review_star_3Cb()
const client_main_review_star_4Props = useStore((state)=>state["Home"]["client_main_review_star_4"]);
const client_main_review_star_4IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_4"]);
const client_main_review_star_4Cb = useclient_main_review_star_4Cb()
const client_main_review_star_5Props = useStore((state)=>state["Home"]["client_main_review_star_5"]);
const client_main_review_star_5IoProps = useIoStore((state)=>state["Home"]["client_main_review_star_5"]);
const client_main_review_star_5Cb = useclient_main_review_star_5Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const client_main_review_prfile_img_Props = useStore((state)=>state["Home"]["client_main_review_prfile_img_"]);
const client_main_review_prfile_img_IoProps = useIoStore((state)=>state["Home"]["client_main_review_prfile_img_"]);
const client_main_review_prfile_img_Cb = useclient_main_review_prfile_img_Cb()
const client_main_review_matt_txtProps = useStore((state)=>state["Home"]["client_main_review_matt_txt"]);
const client_main_review_matt_txtIoProps = useIoStore((state)=>state["Home"]["client_main_review_matt_txt"]);
const client_main_review_matt_txtCb = useclient_main_review_matt_txtCb()
const client_main_review_ca_txt_Props = useStore((state)=>state["Home"]["client_main_review_ca_txt_"]);
const client_main_review_ca_txt_IoProps = useIoStore((state)=>state["Home"]["client_main_review_ca_txt_"]);
const client_main_review_ca_txt_Cb = useclient_main_review_ca_txt_Cb()
const client_right__img_Props = useStore((state)=>state["Home"]["client_right__img_"]);
const client_right__img_IoProps = useIoStore((state)=>state["Home"]["client_right__img_"]);
const client_right__img_Cb = useclient_right__img_Cb()
const client_footer_btn_R_Props = useStore((state)=>state["Home"]["client_footer_btn_R_"]);
const client_footer_btn_R_IoProps = useIoStore((state)=>state["Home"]["client_footer_btn_R_"]);
const client_footer_btn_R_Cb = useclient_footer_btn_R_Cb()
const client_footer_btn_L_Props = useStore((state)=>state["Home"]["client_footer_btn_L_"]);
const client_footer_btn_L_IoProps = useIoStore((state)=>state["Home"]["client_footer_btn_L_"]);
const client_footer_btn_L_Cb = useclient_footer_btn_L_Cb()
const Articles_header_R_txt_Props = useStore((state)=>state["Home"]["Articles_header_R_txt_"]);
const Articles_header_R_txt_IoProps = useIoStore((state)=>state["Home"]["Articles_header_R_txt_"]);
const Articles_header_R_txt_Cb = useArticles_header_R_txt_Cb()
const Articles_header_L_txt_Props = useStore((state)=>state["Home"]["Articles_header_L_txt_"]);
const Articles_header_L_txt_IoProps = useIoStore((state)=>state["Home"]["Articles_header_L_txt_"]);
const Articles_header_L_txt_Cb = useArticles_header_L_txt_Cb()
const Article_main_L_side_1_img_Props = useStore((state)=>state["Home"]["Article_main_L_side_1_img_"]);
const Article_main_L_side_1_img_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_1_img_"]);
const Article_main_L_side_1_img_Cb = useArticle_main_L_side_1_img_Cb()
const Article_main_L_side_4_img_Props = useStore((state)=>state["Home"]["Article_main_L_side_4_img_"]);
const Article_main_L_side_4_img_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_4_img_"]);
const Article_main_L_side_4_img_Cb = useArticle_main_L_side_4_img_Cb()
const Article_main_L_side_2_img_Props = useStore((state)=>state["Home"]["Article_main_L_side_2_img_"]);
const Article_main_L_side_2_img_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_2_img_"]);
const Article_main_L_side_2_img_Cb = useArticle_main_L_side_2_img_Cb()
const Article_main_L_side_3_img_Props = useStore((state)=>state["Home"]["Article_main_L_side_3_img_"]);
const Article_main_L_side_3_img_IoProps = useIoStore((state)=>state["Home"]["Article_main_L_side_3_img_"]);
const Article_main_L_side_3_img_Cb = useArticle_main_L_side_3_img_Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Form_area_L_para_txt_Props = useStore((state)=>state["Home"]["Form_area_L_para_txt_"]);
const Form_area_L_para_txt_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_para_txt_"]);
const Form_area_L_para_txt_Cb = useForm_area_L_para_txt_Cb()
const Form_area_L_h1_txt_Props = useStore((state)=>state["Home"]["Form_area_L_h1_txt_"]);
const Form_area_L_h1_txt_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_h1_txt_"]);
const Form_area_L_h1_txt_Cb = useForm_area_L_h1_txt_Cb()
const Form_area_L_location_Img_Props = useStore((state)=>state["Home"]["Form_area_L_location_Img_"]);
const Form_area_L_location_Img_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_location_Img_"]);
const Form_area_L_location_Img_Cb = useForm_area_L_location_Img_Cb()
const Form_area_L_location_txt_Props = useStore((state)=>state["Home"]["Form_area_L_location_txt_"]);
const Form_area_L_location_txt_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_location_txt_"]);
const Form_area_L_location_txt_Cb = useForm_area_L_location_txt_Cb()
const Form_area_L_Mnumber_img_Props = useStore((state)=>state["Home"]["Form_area_L_Mnumber_img_"]);
const Form_area_L_Mnumber_img_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_Mnumber_img_"]);
const Form_area_L_Mnumber_img_Cb = useForm_area_L_Mnumber_img_Cb()
const Form_area_L_Mnumber_text_txt_Props = useStore((state)=>state["Home"]["Form_area_L_Mnumber_text_txt_"]);
const Form_area_L_Mnumber_text_txt_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_Mnumber_text_txt_"]);
const Form_area_L_Mnumber_text_txt_Cb = useForm_area_L_Mnumber_text_txt_Cb()
const Form_area_L_email_img_Props = useStore((state)=>state["Home"]["Form_area_L_email_img_"]);
const Form_area_L_email_img_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_email_img_"]);
const Form_area_L_email_img_Cb = useForm_area_L_email_img_Cb()
const Form_area_L_email_txt_Props = useStore((state)=>state["Home"]["Form_area_L_email_txt_"]);
const Form_area_L_email_txt_IoProps = useIoStore((state)=>state["Home"]["Form_area_L_email_txt_"]);
const Form_area_L_email_txt_Cb = useForm_area_L_email_txt_Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Add_a_note_input_Props = useStore((state)=>state["Home"]["Add_a_note_input_"]);
const Add_a_note_input_IoProps = useIoStore((state)=>state["Home"]["Add_a_note_input_"]);
const Add_a_note_input_Cb = useAdd_a_note_input_Cb()
const Add_a_note_txt_Props = useStore((state)=>state["Home"]["Add_a_note_txt_"]);
const Add_a_note_txt_IoProps = useIoStore((state)=>state["Home"]["Add_a_note_txt_"]);
const Add_a_note_txt_Cb = useAdd_a_note_txt_Cb()
const Button24Props = useStore((state)=>state["Home"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home"]["Button24"]);
const Button24Cb = useButton24Cb()
const follow_h1_Props = useStore((state)=>state["Home"]["follow_h1_"]);
const follow_h1_IoProps = useIoStore((state)=>state["Home"]["follow_h1_"]);
const follow_h1_Cb = usefollow_h1_Cb()
const follow_us_btn_Props = useStore((state)=>state["Home"]["follow_us_btn_"]);
const follow_us_btn_IoProps = useIoStore((state)=>state["Home"]["follow_us_btn_"]);
const follow_us_btn_Cb = usefollow_us_btn_Cb()
const Follow_images_1_Props = useStore((state)=>state["Home"]["Follow_images_1_"]);
const Follow_images_1_IoProps = useIoStore((state)=>state["Home"]["Follow_images_1_"]);
const Follow_images_1_Cb = useFollow_images_1_Cb()
const Follow_images_2_Props = useStore((state)=>state["Home"]["Follow_images_2_"]);
const Follow_images_2_IoProps = useIoStore((state)=>state["Home"]["Follow_images_2_"]);
const Follow_images_2_Cb = useFollow_images_2_Cb()
const burger_coc_Props = useStore((state)=>state["Home"]["burger_coc_"]);
const burger_coc_IoProps = useIoStore((state)=>state["Home"]["burger_coc_"]);
const burger_coc_Cb = useburger_coc_Cb()
const french_fries__Props = useStore((state)=>state["Home"]["french_fries__"]);
const french_fries__IoProps = useIoStore((state)=>state["Home"]["french_fries__"]);
const french_fries__Cb = usefrench_fries__Cb()
const coc_Props = useStore((state)=>state["Home"]["coc_"]);
const coc_IoProps = useIoStore((state)=>state["Home"]["coc_"]);
const coc_Cb = usecoc_Cb()
const hot_dog_Props = useStore((state)=>state["Home"]["hot_dog_"]);
const hot_dog_IoProps = useIoStore((state)=>state["Home"]["hot_dog_"]);
const hot_dog_Cb = usehot_dog_Cb()
const Footer_left_h1_img_Props = useStore((state)=>state["Home"]["Footer_left_h1_img_"]);
const Footer_left_h1_img_IoProps = useIoStore((state)=>state["Home"]["Footer_left_h1_img_"]);
const Footer_left_h1_img_Cb = useFooter_left_h1_img_Cb()
const Footer_left_para_txt_Props = useStore((state)=>state["Home"]["Footer_left_para_txt_"]);
const Footer_left_para_txt_IoProps = useIoStore((state)=>state["Home"]["Footer_left_para_txt_"]);
const Footer_left_para_txt_Cb = useFooter_left_para_txt_Cb()
const Footer_left_stars_img_1_Props = useStore((state)=>state["Home"]["Footer_left_stars_img_1_"]);
const Footer_left_stars_img_1_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_img_1_"]);
const Footer_left_stars_img_1_Cb = useFooter_left_stars_img_1_Cb()
const Footer_left_stars_img_2_Props = useStore((state)=>state["Home"]["Footer_left_stars_img_2_"]);
const Footer_left_stars_img_2_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_img_2_"]);
const Footer_left_stars_img_2_Cb = useFooter_left_stars_img_2_Cb()
const Footer_left_stars_img_3_Props = useStore((state)=>state["Home"]["Footer_left_stars_img_3_"]);
const Footer_left_stars_img_3_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_img_3_"]);
const Footer_left_stars_img_3_Cb = useFooter_left_stars_img_3_Cb()
const Footer_left_stars_img_4_Props = useStore((state)=>state["Home"]["Footer_left_stars_img_4_"]);
const Footer_left_stars_img_4_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_img_4_"]);
const Footer_left_stars_img_4_Cb = useFooter_left_stars_img_4_Cb()
const Footer_left_stars_img_5_Props = useStore((state)=>state["Home"]["Footer_left_stars_img_5_"]);
const Footer_left_stars_img_5_IoProps = useIoStore((state)=>state["Home"]["Footer_left_stars_img_5_"]);
const Footer_left_stars_img_5_Cb = useFooter_left_stars_img_5_Cb()
const footer_L_1Props = useStore((state)=>state["Home"]["footer_L_1"]);
const footer_L_1IoProps = useIoStore((state)=>state["Home"]["footer_L_1"]);
const footer_L_1Cb = usefooter_L_1Cb()
const footer_L_2Props = useStore((state)=>state["Home"]["footer_L_2"]);
const footer_L_2IoProps = useIoStore((state)=>state["Home"]["footer_L_2"]);
const footer_L_2Cb = usefooter_L_2Cb()
const footer_L_7Props = useStore((state)=>state["Home"]["footer_L_7"]);
const footer_L_7IoProps = useIoStore((state)=>state["Home"]["footer_L_7"]);
const footer_L_7Cb = usefooter_L_7Cb()
const footer_L_8Props = useStore((state)=>state["Home"]["footer_L_8"]);
const footer_L_8IoProps = useIoStore((state)=>state["Home"]["footer_L_8"]);
const footer_L_8Cb = usefooter_L_8Cb()
const footer_L_5Props = useStore((state)=>state["Home"]["footer_L_5"]);
const footer_L_5IoProps = useIoStore((state)=>state["Home"]["footer_L_5"]);
const footer_L_5Cb = usefooter_L_5Cb()
const footer_L_6Props = useStore((state)=>state["Home"]["footer_L_6"]);
const footer_L_6IoProps = useIoStore((state)=>state["Home"]["footer_L_6"]);
const footer_L_6Cb = usefooter_L_6Cb()
const footer_L_3Props = useStore((state)=>state["Home"]["footer_L_3"]);
const footer_L_3IoProps = useIoStore((state)=>state["Home"]["footer_L_3"]);
const footer_L_3Cb = usefooter_L_3Cb()
const footer_L_4Props = useStore((state)=>state["Home"]["footer_L_4"]);
const footer_L_4IoProps = useIoStore((state)=>state["Home"]["footer_L_4"]);
const footer_L_4Cb = usefooter_L_4Cb()
const footer_mid_R_4_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_4_txt_"]);
const footer_mid_R_4_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_4_txt_"]);
const footer_mid_R_4_txt_Cb = usefooter_mid_R_4_txt_Cb()
const footer_mid_R_3_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_3_txt_"]);
const footer_mid_R_3_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_3_txt_"]);
const footer_mid_R_3_txt_Cb = usefooter_mid_R_3_txt_Cb()
const footer_mid_R_6_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_6_txt_"]);
const footer_mid_R_6_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_6_txt_"]);
const footer_mid_R_6_txt_Cb = usefooter_mid_R_6_txt_Cb()
const footer_mid_R_5_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_5_txt_"]);
const footer_mid_R_5_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_5_txt_"]);
const footer_mid_R_5_txt_Cb = usefooter_mid_R_5_txt_Cb()
const footer_mid_R_8_txtProps = useStore((state)=>state["Home"]["footer_mid_R_8_txt"]);
const footer_mid_R_8_txtIoProps = useIoStore((state)=>state["Home"]["footer_mid_R_8_txt"]);
const footer_mid_R_8_txtCb = usefooter_mid_R_8_txtCb()
const footer_mid_R_7_txtProps = useStore((state)=>state["Home"]["footer_mid_R_7_txt"]);
const footer_mid_R_7_txtIoProps = useIoStore((state)=>state["Home"]["footer_mid_R_7_txt"]);
const footer_mid_R_7_txtCb = usefooter_mid_R_7_txtCb()
const footer_mid_R_2_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_2_txt_"]);
const footer_mid_R_2_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_2_txt_"]);
const footer_mid_R_2_txt_Cb = usefooter_mid_R_2_txt_Cb()
const footer_mid_R_1_txt_Props = useStore((state)=>state["Home"]["footer_mid_R_1_txt_"]);
const footer_mid_R_1_txt_IoProps = useIoStore((state)=>state["Home"]["footer_mid_R_1_txt_"]);
const footer_mid_R_1_txt_Cb = usefooter_mid_R_1_txt_Cb()
const Follow_insta_img_2_21_txt_Props = useStore((state)=>state["Home"]["Follow_insta_img_2_21_txt_"]);
const Follow_insta_img_2_21_txt_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_2_21_txt_"]);
const Follow_insta_img_2_21_txt_Cb = useFollow_insta_img_2_21_txt_Cb()
const Follow_insta_img_2_22_txt__Props = useStore((state)=>state["Home"]["Follow_insta_img_2_22_txt__"]);
const Follow_insta_img_2_22_txt__IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_2_22_txt__"]);
const Follow_insta_img_2_22_txt__Cb = useFollow_insta_img_2_22_txt__Cb()
const Follow_insta_img_1_12_txt_Props = useStore((state)=>state["Home"]["Follow_insta_img_1_12_txt_"]);
const Follow_insta_img_1_12_txt_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_1_12_txt_"]);
const Follow_insta_img_1_12_txt_Cb = useFollow_insta_img_1_12_txt_Cb()
const Follow_insta_img_1_11_txt_Props = useStore((state)=>state["Home"]["Follow_insta_img_1_11_txt_"]);
const Follow_insta_img_1_11_txt_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_img_1_11_txt_"]);
const Follow_insta_img_1_11_txt_Cb = useFollow_insta_img_1_11_txt_Cb()
const Follow_insta_head_txt_Props = useStore((state)=>state["Home"]["Follow_insta_head_txt_"]);
const Follow_insta_head_txt_IoProps = useIoStore((state)=>state["Home"]["Follow_insta_head_txt_"]);
const Follow_insta_head_txt_Cb = useFollow_insta_head_txt_Cb()

  return (<>
  <Div className="p-Home Home_Header_ bpt" {...Home_Header_Props} {...Home_Header_Cb} {...Home_Header_IoProps}>
<Flex className="p-Home Home_Header_Flex_ bpt" {...Home_Header_Flex_Props} {...Home_Header_Flex_Cb} {...Home_Header_Flex_IoProps}>
<Flex className="p-Home Home_Header_Flex_L_ bpt" {...Home_Header_Flex_L_Props} {...Home_Header_Flex_L_Cb} {...Home_Header_Flex_L_IoProps}>
<Flex className="p-Home company_logo bpt" {...company_logoProps} {...company_logoCb} {...company_logoIoProps}>
<Image className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}/>
</Flex>
<Flex className="p-Home header_items bpt" {...header_itemsProps} {...header_itemsCb} {...header_itemsIoProps}>
<Link className="p-Home header_home bpt" {...header_homeProps} {...header_homeCb} {...header_homeIoProps}/>
<Link className="p-Home header_about bpt" {...header_aboutProps} {...header_aboutCb} {...header_aboutIoProps}/>
<Link className="p-Home header_menu bpt" {...header_menuProps} {...header_menuCb} {...header_menuIoProps}/>
<Link className="p-Home header_page bpt" {...header_pageProps} {...header_pageCb} {...header_pageIoProps}/>
<Link className="p-Home header_cart bpt" {...header_cartProps} {...header_cartCb} {...header_cartIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Home_Header_Flex_R_ bpt" {...Home_Header_Flex_R_Props} {...Home_Header_Flex_R_Cb} {...Home_Header_Flex_R_IoProps}>
<Button className="p-Home Home_Header_Flex_R_Primary_btn_ bpt" {...Home_Header_Flex_R_Primary_btn_Props} {...Home_Header_Flex_R_Primary_btn_Cb} {...Home_Header_Flex_R_Primary_btn_IoProps}/>
<Button className="p-Home Home_Header_Flex_R_Secondary_bt bpt" {...Home_Header_Flex_R_Secondary_btProps} {...Home_Header_Flex_R_Secondary_btCb} {...Home_Header_Flex_R_Secondary_btIoProps}/>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Home_Banner_ bpt" {...Home_Banner_Props} {...Home_Banner_Cb} {...Home_Banner_IoProps}>
<Flex className="p-Home Home_Banner_L_ bpt" {...Home_Banner_L_Props} {...Home_Banner_L_Cb} {...Home_Banner_L_IoProps}>
<Flex className="p-Home Home_Banner_L_Headings_ bpt" {...Home_Banner_L_Headings_Props} {...Home_Banner_L_Headings_Cb} {...Home_Banner_L_Headings_IoProps}>
<TextBox className="p-Home Home_Banner_L_Headings_Upper_ bpt" {...Home_Banner_L_Headings_Upper_Props} {...Home_Banner_L_Headings_Upper_Cb} {...Home_Banner_L_Headings_Upper_IoProps}/>
<TextBox className="p-Home Home_Banner_L_Headings_Lower_ bpt" {...Home_Banner_L_Headings_Lower_Props} {...Home_Banner_L_Headings_Lower_Cb} {...Home_Banner_L_Headings_Lower_IoProps}/>
</Flex>
<Flex className="p-Home Home_Banner_L_Para_ bpt" {...Home_Banner_L_Para_Props} {...Home_Banner_L_Para_Cb} {...Home_Banner_L_Para_IoProps}>
<TextBox className="p-Home Home_Banner_L_Para_txt_ bpt" {...Home_Banner_L_Para_txt_Props} {...Home_Banner_L_Para_txt_Cb} {...Home_Banner_L_Para_txt_IoProps}/>
</Flex>
<Flex className="p-Home Home_Banner_L_Btn_ bpt" {...Home_Banner_L_Btn_Props} {...Home_Banner_L_Btn_Cb} {...Home_Banner_L_Btn_IoProps}>
<Flex className="p-Home Home_Banner_L_Btn_Flex_ bpt" {...Home_Banner_L_Btn_Flex_Props} {...Home_Banner_L_Btn_Flex_Cb} {...Home_Banner_L_Btn_Flex_IoProps}>
<Button className="p-Home Home_Banner_L_Btn_Flex_1_ bpt" {...Home_Banner_L_Btn_Flex_1_Props} {...Home_Banner_L_Btn_Flex_1_Cb} {...Home_Banner_L_Btn_Flex_1_IoProps}/>
<Button className="p-Home Home_Banner_L_Btn_Flex_2_ bpt" {...Home_Banner_L_Btn_Flex_2_Props} {...Home_Banner_L_Btn_Flex_2_Cb} {...Home_Banner_L_Btn_Flex_2_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_Banner_R_ bpt" {...Home_Banner_R_Props} {...Home_Banner_R_Cb} {...Home_Banner_R_IoProps}>
<Flex className="p-Home Home_Banner_R__Bg_ bpt" {...Home_Banner_R__Bg_Props} {...Home_Banner_R__Bg_Cb} {...Home_Banner_R__Bg_IoProps}>
<Image className="p-Home Home_Banner_R_img_ bpt" {...Home_Banner_R_img_Props} {...Home_Banner_R_img_Cb} {...Home_Banner_R_img_IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Companies_logo_flex_ bpt" {...Companies_logo_flex_Props} {...Companies_logo_flex_Cb} {...Companies_logo_flex_IoProps}>
<Flex className="p-Home Companies_logo_flex_Rows_ bpt" {...Companies_logo_flex_Rows_Props} {...Companies_logo_flex_Rows_Cb} {...Companies_logo_flex_Rows_IoProps}>
<Flex className="p-Home Companies_logo_flex_Rows_1 bpt" {...Companies_logo_flex_Rows_1Props} {...Companies_logo_flex_Rows_1Cb} {...Companies_logo_flex_Rows_1IoProps}>
<TextBox className="p-Home Companies_logo_flex_Rows_1_Text_ bpt" {...Companies_logo_flex_Rows_1_Text_Props} {...Companies_logo_flex_Rows_1_Text_Cb} {...Companies_logo_flex_Rows_1_Text_IoProps}/>
</Flex>
<Flex className="p-Home Companies_logo_flex_Rows_2 bpt" {...Companies_logo_flex_Rows_2Props} {...Companies_logo_flex_Rows_2Cb} {...Companies_logo_flex_Rows_2IoProps}>
<Flex className="p-Home Companies_logo_flex_Rows_2_Doordash_ bpt" {...Companies_logo_flex_Rows_2_Doordash_Props} {...Companies_logo_flex_Rows_2_Doordash_Cb} {...Companies_logo_flex_Rows_2_Doordash_IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
<Flex className="p-Home Companies_logo_flex_Rows_2_Postmates_ bpt" {...Companies_logo_flex_Rows_2_Postmates_Props} {...Companies_logo_flex_Rows_2_Postmates_Cb} {...Companies_logo_flex_Rows_2_Postmates_IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
<Flex className="p-Home Companies_logo_flex_Rows_2_Rappi_ bpt" {...Companies_logo_flex_Rows_2_Rappi_Props} {...Companies_logo_flex_Rows_2_Rappi_Cb} {...Companies_logo_flex_Rows_2_Rappi_IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
<Flex className="p-Home Companies_logo_flex_Rows_2_Grubhub_ bpt" {...Companies_logo_flex_Rows_2_Grubhub_Props} {...Companies_logo_flex_Rows_2_Grubhub_Cb} {...Companies_logo_flex_Rows_2_Grubhub_IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Browse_ bpt" {...Browse_Props} {...Browse_Cb} {...Browse_IoProps}>
<Flex className="p-Home Browse_Heading_ bpt" {...Browse_Heading_Props} {...Browse_Heading_Cb} {...Browse_Heading_IoProps}>
<TextBox className="p-Home Browse_Heading_txt_ bpt" {...Browse_Heading_txt_Props} {...Browse_Heading_txt_Cb} {...Browse_Heading_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_ bpt" {...Browse_body_Props} {...Browse_body_Cb} {...Browse_body_IoProps}>
<Flex className="p-Home Browse_body_1 bpt" {...Browse_body_1Props} {...Browse_body_1Cb} {...Browse_body_1IoProps}>
<Flex className="p-Home Browse_body_1_image_ bpt" {...Browse_body_1_image_Props} {...Browse_body_1_image_Cb} {...Browse_body_1_image_IoProps}>
<Image className="p-Home Browse_body_1_image_img_ bpt" {...Browse_body_1_image_img_Props} {...Browse_body_1_image_img_Cb} {...Browse_body_1_image_img_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_1_h1 bpt" {...Browse_body_1_h1Props} {...Browse_body_1_h1Cb} {...Browse_body_1_h1IoProps}>
<TextBox className="p-Home Browse_body_1_h1_txt_ bpt" {...Browse_body_1_h1_txt_Props} {...Browse_body_1_h1_txt_Cb} {...Browse_body_1_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_1_para_ bpt" {...Browse_body_1_para_Props} {...Browse_body_1_para_Cb} {...Browse_body_1_para_IoProps}>
<TextBox className="p-Home Browse_body_1_para_Text_ bpt" {...Browse_body_1_para_Text_Props} {...Browse_body_1_para_Text_Cb} {...Browse_body_1_para_Text_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_1_Para_2_ bpt" {...Browse_body_1_Para_2_Props} {...Browse_body_1_Para_2_Cb} {...Browse_body_1_Para_2_IoProps}>
<TextBox className="p-Home Browse_body_1_Para_2_txt_ bpt" {...Browse_body_1_Para_2_txt_Props} {...Browse_body_1_Para_2_txt_Cb} {...Browse_body_1_Para_2_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Browse_body_2 bpt" {...Browse_body_2Props} {...Browse_body_2Cb} {...Browse_body_2IoProps}>
<Flex className="p-Home Browse_body_2_image_ bpt" {...Browse_body_2_image_Props} {...Browse_body_2_image_Cb} {...Browse_body_2_image_IoProps}>
<Image className="p-Home Browse_body_2_image_img_ bpt" {...Browse_body_2_image_img_Props} {...Browse_body_2_image_img_Cb} {...Browse_body_2_image_img_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_2_h1_ bpt" {...Browse_body_2_h1_Props} {...Browse_body_2_h1_Cb} {...Browse_body_2_h1_IoProps}>
<TextBox className="p-Home Browse_body_2_h1_Txt_ bpt" {...Browse_body_2_h1_Txt_Props} {...Browse_body_2_h1_Txt_Cb} {...Browse_body_2_h1_Txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_2_Para1_ bpt" {...Browse_body_2_Para1_Props} {...Browse_body_2_Para1_Cb} {...Browse_body_2_Para1_IoProps}>
<TextBox className="p-Home Browse_body_2_Para1_txt_ bpt" {...Browse_body_2_Para1_txt_Props} {...Browse_body_2_Para1_txt_Cb} {...Browse_body_2_Para1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_2_Para2_ bpt" {...Browse_body_2_Para2_Props} {...Browse_body_2_Para2_Cb} {...Browse_body_2_Para2_IoProps}>
<TextBox className="p-Home Browse_body_2_Para2_txt_ bpt" {...Browse_body_2_Para2_txt_Props} {...Browse_body_2_Para2_txt_Cb} {...Browse_body_2_Para2_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Browse_body_3 bpt" {...Browse_body_3Props} {...Browse_body_3Cb} {...Browse_body_3IoProps}>
<Flex className="p-Home Browse_body_3_image_ bpt" {...Browse_body_3_image_Props} {...Browse_body_3_image_Cb} {...Browse_body_3_image_IoProps}>
<Image className="p-Home Browse_body_3_image_img_ bpt" {...Browse_body_3_image_img_Props} {...Browse_body_3_image_img_Cb} {...Browse_body_3_image_img_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_3_h1_ bpt" {...Browse_body_3_h1_Props} {...Browse_body_3_h1_Cb} {...Browse_body_3_h1_IoProps}>
<TextBox className="p-Home Browse_body_3_h1_txt_ bpt" {...Browse_body_3_h1_txt_Props} {...Browse_body_3_h1_txt_Cb} {...Browse_body_3_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_3_Para1_ bpt" {...Browse_body_3_Para1_Props} {...Browse_body_3_Para1_Cb} {...Browse_body_3_Para1_IoProps}>
<TextBox className="p-Home Browse_body_3_Para1_txt_ bpt" {...Browse_body_3_Para1_txt_Props} {...Browse_body_3_Para1_txt_Cb} {...Browse_body_3_Para1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_3_Para2_ bpt" {...Browse_body_3_Para2_Props} {...Browse_body_3_Para2_Cb} {...Browse_body_3_Para2_IoProps}>
<TextBox className="p-Home Browse_body_3_Para2_txt_ bpt" {...Browse_body_3_Para2_txt_Props} {...Browse_body_3_Para2_txt_Cb} {...Browse_body_3_Para2_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Browse_body_4 bpt" {...Browse_body_4Props} {...Browse_body_4Cb} {...Browse_body_4IoProps}>
<Flex className="p-Home Browse_body_4_image_ bpt" {...Browse_body_4_image_Props} {...Browse_body_4_image_Cb} {...Browse_body_4_image_IoProps}>
<Image className="p-Home Browse_body_4_image_img_ bpt" {...Browse_body_4_image_img_Props} {...Browse_body_4_image_img_Cb} {...Browse_body_4_image_img_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_4_h1_ bpt" {...Browse_body_4_h1_Props} {...Browse_body_4_h1_Cb} {...Browse_body_4_h1_IoProps}>
<TextBox className="p-Home Browse_body_4_h1_txt_ bpt" {...Browse_body_4_h1_txt_Props} {...Browse_body_4_h1_txt_Cb} {...Browse_body_4_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_4_Para1_ bpt" {...Browse_body_4_Para1_Props} {...Browse_body_4_Para1_Cb} {...Browse_body_4_Para1_IoProps}>
<TextBox className="p-Home Browse_body_4_Para1_txt_ bpt" {...Browse_body_4_Para1_txt_Props} {...Browse_body_4_Para1_txt_Cb} {...Browse_body_4_Para1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Browse_body_4_Para2_ bpt" {...Browse_body_4_Para2_Props} {...Browse_body_4_Para2_Cb} {...Browse_body_4_Para2_IoProps}>
<TextBox className="p-Home Browse_body_4_Para2_txt_ bpt" {...Browse_body_4_Para2_txt_Props} {...Browse_body_4_Para2_txt_Cb} {...Browse_body_4_Para2_txt_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Browse_foot_ bpt" {...Browse_foot_Props} {...Browse_foot_Cb} {...Browse_foot_IoProps}>
<Flex className="p-Home Browse_foot_Flex_ bpt" {...Browse_foot_Flex_Props} {...Browse_foot_Flex_Cb} {...Browse_foot_Flex_IoProps}>
<Button className="p-Home Browse_foot_Flex_L_Button bpt" {...Browse_foot_Flex_L_ButtonProps} {...Browse_foot_Flex_L_ButtonCb} {...Browse_foot_Flex_L_ButtonIoProps}/>
<Button className="p-Home Browse_foot_Flex_R_Button bpt" {...Browse_foot_Flex_R_ButtonProps} {...Browse_foot_Flex_R_ButtonCb} {...Browse_foot_Flex_R_ButtonIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About_us_ bpt" {...About_us_Props} {...About_us_Cb} {...About_us_IoProps}>
<Flex className="p-Home About_us_Left_ bpt" {...About_us_Left_Props} {...About_us_Left_Cb} {...About_us_Left_IoProps}>
<Flex className="p-Home About_us_Left_main_ bpt" {...About_us_Left_main_Props} {...About_us_Left_main_Cb} {...About_us_Left_main_IoProps}>
<Image className="p-Home About_us_Left_main_img_ bpt" {...About_us_Left_main_img_Props} {...About_us_Left_main_img_Cb} {...About_us_Left_main_img_IoProps}/>
<Flex className="p-Home About_us_Left_main_Flex_ bpt" {...About_us_Left_main_Flex_Props} {...About_us_Left_main_Flex_Cb} {...About_us_Left_main_Flex_IoProps}>
<Flex className="p-Home About_us_Left_main_Flex_Head_ bpt" {...About_us_Left_main_Flex_Head_Props} {...About_us_Left_main_Flex_Head_Cb} {...About_us_Left_main_Flex_Head_IoProps}>
<TextBox className="p-Home address_header bpt" {...address_headerProps} {...address_headerCb} {...address_headerIoProps}/>
</Flex>
<Flex className="p-Home About_us_Left_main_Flex_Location_ bpt" {...About_us_Left_main_Flex_Location_Props} {...About_us_Left_main_Flex_Location_Cb} {...About_us_Left_main_Flex_Location_IoProps}>
<Image className="p-Home Location_img_ bpt" {...Location_img_Props} {...Location_img_Cb} {...Location_img_IoProps}/>
<Flex className="p-Home location_pin bpt" {...location_pinProps} {...location_pinCb} {...location_pinIoProps}>
<TextBox className="p-Home restro_address_txt_ bpt" {...restro_address_txt_Props} {...restro_address_txt_Cb} {...restro_address_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home About_us_Left_main_Flex_Mobile_ bpt" {...About_us_Left_main_Flex_Mobile_Props} {...About_us_Left_main_Flex_Mobile_Cb} {...About_us_Left_main_Flex_Mobile_IoProps}>
<Image className="p-Home Call bpt" {...CallProps} {...CallCb} {...CallIoProps}/>
<Flex className="p-Home mobile_pin bpt" {...mobile_pinProps} {...mobile_pinCb} {...mobile_pinIoProps}>
<TextBox className="p-Home mobile_no bpt" {...mobile_noProps} {...mobile_noCb} {...mobile_noIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home About_us_Left_main_Flex_Email_ bpt" {...About_us_Left_main_Flex_Email_Props} {...About_us_Left_main_Flex_Email_Cb} {...About_us_Left_main_Flex_Email_IoProps}>
<Image className="p-Home mail_ bpt" {...mail_Props} {...mail_Cb} {...mail_IoProps}/>
<Flex className="p-Home email_id bpt" {...email_idProps} {...email_idCb} {...email_idIoProps}>
<TextBox className="p-Home email_id_adress bpt" {...email_id_adressProps} {...email_id_adressCb} {...email_id_adressIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About_us_Right_ bpt" {...About_us_Right_Props} {...About_us_Right_Cb} {...About_us_Right_IoProps}>
<Flex className="p-Home Home_Contact_Right_header bpt" {...Home_Contact_Right_headerProps} {...Home_Contact_Right_headerCb} {...Home_Contact_Right_headerIoProps}>
<TextBox className="p-Home Home_Contact_Right_aboutUs bpt" {...Home_Contact_Right_aboutUsProps} {...Home_Contact_Right_aboutUsCb} {...Home_Contact_Right_aboutUsIoProps}/>
</Flex>
<Flex className="p-Home Home_Contact_Right_sec_1 bpt" {...Home_Contact_Right_sec_1Props} {...Home_Contact_Right_sec_1Cb} {...Home_Contact_Right_sec_1IoProps}>
<TextBox className="p-Home Home_Contact_Right_First_para bpt" {...Home_Contact_Right_First_paraProps} {...Home_Contact_Right_First_paraCb} {...Home_Contact_Right_First_paraIoProps}/>
</Flex>
<Flex className="p-Home Home_Contact_Right_sec_2 bpt" {...Home_Contact_Right_sec_2Props} {...Home_Contact_Right_sec_2Cb} {...Home_Contact_Right_sec_2IoProps}>
<TextBox className="p-Home Home_Contact_Right_sec_para bpt" {...Home_Contact_Right_sec_paraProps} {...Home_Contact_Right_sec_paraCb} {...Home_Contact_Right_sec_paraIoProps}/>
</Flex>
<Flex className="p-Home Home_Contact_Right_btn bpt" {...Home_Contact_Right_btnProps} {...Home_Contact_Right_btnCb} {...Home_Contact_Right_btnIoProps}>
<Flex className="p-Home btn_flex_ bpt" {...btn_flex_Props} {...btn_flex_Cb} {...btn_flex_IoProps}>
<Button className="p-Home About_btn_L_ bpt" {...About_btn_L_Props} {...About_btn_L_Cb} {...About_btn_L_IoProps}/>
<Button className="p-Home About_btn_R_ bpt" {...About_btn_R_Props} {...About_btn_R_Cb} {...About_btn_R_IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Item_lists_ bpt" {...Item_lists_Props} {...Item_lists_Cb} {...Item_lists_IoProps}>
<Flex className="p-Home Item_lists_Head_ bpt" {...Item_lists_Head_Props} {...Item_lists_Head_Cb} {...Item_lists_Head_IoProps}>
<TextBox className="p-Home Items_list_Heading_ bpt" {...Items_list_Heading_Props} {...Items_list_Heading_Cb} {...Items_list_Heading_IoProps}/>
</Flex>
<Flex className="p-Home Items_list_Para_ bpt" {...Items_list_Para_Props} {...Items_list_Para_Cb} {...Items_list_Para_IoProps}>
<TextBox className="p-Home Items_list_Para_txt_ bpt" {...Items_list_Para_txt_Props} {...Items_list_Para_txt_Cb} {...Items_list_Para_txt_IoProps}/>
</Flex>
<Flex className="p-Home Items_list_Items_uper_ bpt" {...Items_list_Items_uper_Props} {...Items_list_Items_uper_Cb} {...Items_list_Items_uper_IoProps}>
<Flex className="p-Home Items_list_items_1_ bpt" {...Items_list_items_1_Props} {...Items_list_items_1_Cb} {...Items_list_items_1_IoProps}>
<Flex className="p-Home price1 bpt" {...price1Props} {...price1Cb} {...price1IoProps}>
<Flex className="p-Home Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Burger_img_ bpt" {...Burger_img_Props} {...Burger_img_Cb} {...Burger_img_IoProps}/>
<Flex className="p-Home items_1_h1_ bpt" {...items_1_h1_Props} {...items_1_h1_Cb} {...items_1_h1_IoProps}>
<TextBox className="p-Home items_1_h1_txt_ bpt" {...items_1_h1_txt_Props} {...items_1_h1_txt_Cb} {...items_1_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home items_1_Para_ bpt" {...items_1_Para_Props} {...items_1_Para_Cb} {...items_1_Para_IoProps}>
<TextBox className="p-Home items_1_Para_txt_ bpt" {...items_1_Para_txt_Props} {...items_1_Para_txt_Cb} {...items_1_Para_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_2_ bpt" {...Items_list_items_2_Props} {...Items_list_items_2_Cb} {...Items_list_items_2_IoProps}>
<Flex className="p-Home price2 bpt" {...price2Props} {...price2Cb} {...price2IoProps}>
<Flex className="p-Home price2_bg bpt" {...price2_bgProps} {...price2_bgCb} {...price2_bgIoProps}>
<TextBox className="p-Home price2_txt_ bpt" {...price2_txt_Props} {...price2_txt_Cb} {...price2_txt_IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Milkshake_img_ bpt" {...Milkshake_img_Props} {...Milkshake_img_Cb} {...Milkshake_img_IoProps}/>
<Flex className="p-Home items_2_h1_ bpt" {...items_2_h1_Props} {...items_2_h1_Cb} {...items_2_h1_IoProps}>
<TextBox className="p-Home items_2_h1_txt_ bpt" {...items_2_h1_txt_Props} {...items_2_h1_txt_Cb} {...items_2_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home items_2_Para_ bpt" {...items_2_Para_Props} {...items_2_Para_Cb} {...items_2_Para_IoProps}>
<TextBox className="p-Home items_2_Para_txt_ bpt" {...items_2_Para_txt_Props} {...items_2_Para_txt_Cb} {...items_2_Para_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_3_ bpt" {...Items_list_items_3_Props} {...Items_list_items_3_Cb} {...Items_list_items_3_IoProps}>
<Flex className="p-Home price3 bpt" {...price3Props} {...price3Cb} {...price3IoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Classic_fries bpt" {...Classic_friesProps} {...Classic_friesCb} {...Classic_friesIoProps}/>
<Flex className="p-Home items_3_h1_ bpt" {...items_3_h1_Props} {...items_3_h1_Cb} {...items_3_h1_IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Flex>
<Flex className="p-Home items_3_Para_txt_ bpt" {...items_3_Para_txt_Props} {...items_3_Para_txt_Cb} {...items_3_Para_txt_IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_4_ bpt" {...Items_list_items_4_Props} {...Items_list_items_4_Cb} {...Items_list_items_4_IoProps}>
<Flex className="p-Home price4 bpt" {...price4Props} {...price4Cb} {...price4IoProps}>
<Flex className="p-Home Flex743 bpt" {...Flex743Props} {...Flex743Cb} {...Flex743IoProps}>
<TextBox className="p-Home TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Pancake_img bpt" {...Pancake_imgProps} {...Pancake_imgCb} {...Pancake_imgIoProps}/>
<Flex className="p-Home items_4_h1_ bpt" {...items_4_h1_Props} {...items_4_h1_Cb} {...items_4_h1_IoProps}>
<TextBox className="p-Home items_4_h1_txt_ bpt" {...items_4_h1_txt_Props} {...items_4_h1_txt_Cb} {...items_4_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home items_4_Para_ bpt" {...items_4_Para_Props} {...items_4_Para_Cb} {...items_4_Para_IoProps}>
<TextBox className="p-Home items_4_Para_txt_ bpt" {...items_4_Para_txt_Props} {...items_4_Para_txt_Cb} {...items_4_Para_txt_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Items_list_Items_lower_ bpt" {...Items_list_Items_lower_Props} {...Items_list_Items_lower_Cb} {...Items_list_Items_lower_IoProps}>
<Flex className="p-Home Items_list_items_5_ bpt" {...Items_list_items_5_Props} {...Items_list_items_5_Cb} {...Items_list_items_5_IoProps}>
<Flex className="p-Home Price_5 bpt" {...Price_5Props} {...Price_5Cb} {...Price_5IoProps}>
<Flex className="p-Home price_5_txt_ bpt" {...price_5_txt_Props} {...price_5_txt_Cb} {...price_5_txt_IoProps}>
<TextBox className="p-Home price5_txt_ bpt" {...price5_txt_Props} {...price5_txt_Cb} {...price5_txt_IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Ice_cream_img bpt" {...Ice_cream_imgProps} {...Ice_cream_imgCb} {...Ice_cream_imgIoProps}/>
<Flex className="p-Home items_5_h1_ bpt" {...items_5_h1_Props} {...items_5_h1_Cb} {...items_5_h1_IoProps}>
<TextBox className="p-Home Ice_cream_txt_ bpt" {...Ice_cream_txt_Props} {...Ice_cream_txt_Cb} {...Ice_cream_txt_IoProps}/>
</Flex>
<Flex className="p-Home items_5_Para_ bpt" {...items_5_Para_Props} {...items_5_Para_Cb} {...items_5_Para_IoProps}>
<TextBox className="p-Home item_5_Txt bpt" {...item_5_TxtProps} {...item_5_TxtCb} {...item_5_TxtIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_6_ bpt" {...Items_list_items_6_Props} {...Items_list_items_6_Cb} {...Items_list_items_6_IoProps}>
<Flex className="p-Home price6_ bpt" {...price6_Props} {...price6_Cb} {...price6_IoProps}>
<Flex className="p-Home Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Flex className="p-Home items_6_h1_ bpt" {...items_6_h1_Props} {...items_6_h1_Cb} {...items_6_h1_IoProps}>
<TextBox className="p-Home Chicken_burger_ bpt" {...Chicken_burger_Props} {...Chicken_burger_Cb} {...Chicken_burger_IoProps}/>
</Flex>
<Flex className="p-Home items_6_Para_ bpt" {...items_6_Para_Props} {...items_6_Para_Cb} {...items_6_Para_IoProps}>
<TextBox className="p-Home para_6_txt_ bpt" {...para_6_txt_Props} {...para_6_txt_Cb} {...para_6_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_7_ bpt" {...Items_list_items_7_Props} {...Items_list_items_7_Cb} {...Items_list_items_7_IoProps}>
<Flex className="p-Home price7_ bpt" {...price7_Props} {...price7_Cb} {...price7_IoProps}>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Flex className="p-Home items_7_h1_ bpt" {...items_7_h1_Props} {...items_7_h1_Cb} {...items_7_h1_IoProps}>
<TextBox className="p-Home Egg_toast_ bpt" {...Egg_toast_Props} {...Egg_toast_Cb} {...Egg_toast_IoProps}/>
</Flex>
<Flex className="p-Home items_7_Para_ bpt" {...items_7_Para_Props} {...items_7_Para_Cb} {...items_7_Para_IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Items_list_items_8_ bpt" {...Items_list_items_8_Props} {...Items_list_items_8_Cb} {...Items_list_items_8_IoProps}>
<Flex className="p-Home Items_list_items_8_flex bpt" {...Items_list_items_8_flexProps} {...Items_list_items_8_flexCb} {...Items_list_items_8_flexIoProps}>
<Flex className="p-Home price8_ bpt" {...price8_Props} {...price8_Cb} {...price8_IoProps}>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Flex>
</Flex>
<Image className="p-Home regular_soda_img_ bpt" {...regular_soda_img_Props} {...regular_soda_img_Cb} {...regular_soda_img_IoProps}/>
<Flex className="p-Home items_8_h1_ bpt" {...items_8_h1_Props} {...items_8_h1_Cb} {...items_8_h1_IoProps}>
<TextBox className="p-Home Regular_Soda bpt" {...Regular_SodaProps} {...Regular_SodaCb} {...Regular_SodaIoProps}/>
</Flex>
<Flex className="p-Home items_8_Para_ bpt" {...items_8_Para_Props} {...items_8_Para_Cb} {...items_8_Para_IoProps}>
<TextBox className="p-Home Items_list_items_8_para_ bpt" {...Items_list_items_8_para_Props} {...Items_list_items_8_para_Cb} {...Items_list_items_8_para_IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Items_list_foot_ bpt" {...Items_list_foot_Props} {...Items_list_foot_Cb} {...Items_list_foot_IoProps}>
<Flex className="p-Home Items_list_foot_btns_ bpt" {...Items_list_foot_btns_Props} {...Items_list_foot_btns_Cb} {...Items_list_foot_btns_IoProps}>
<Button className="p-Home Items_list_foot_btns_L_ bpt" {...Items_list_foot_btns_L_Props} {...Items_list_foot_btns_L_Cb} {...Items_list_foot_btns_L_IoProps}/>
<Button className="p-Home Items_list_foot_btns_R_ bpt" {...Items_list_foot_btns_R_Props} {...Items_list_foot_btns_R_Cb} {...Items_list_foot_btns_R_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Best_burger_ bpt" {...Best_burger_Props} {...Best_burger_Cb} {...Best_burger_IoProps}>
<Flex className="p-Home Best_burger_L_ bpt" {...Best_burger_L_Props} {...Best_burger_L_Cb} {...Best_burger_L_IoProps}>
<Flex className="p-Home Best_burger_L_head_ bpt" {...Best_burger_L_head_Props} {...Best_burger_L_head_Cb} {...Best_burger_L_head_IoProps}>
<TextBox className="p-Home Best_burger_L_head_txt_ bpt" {...Best_burger_L_head_txt_Props} {...Best_burger_L_head_txt_Cb} {...Best_burger_L_head_txt_IoProps}/>
</Flex>
<Flex className="p-Home Best_burger_L_para_ bpt" {...Best_burger_L_para_Props} {...Best_burger_L_para_Cb} {...Best_burger_L_para_IoProps}>
<TextBox className="p-Home Best_burger_L_para_txt_ bpt" {...Best_burger_L_para_txt_Props} {...Best_burger_L_para_txt_Cb} {...Best_burger_L_para_txt_IoProps}/>
</Flex>
<Flex className="p-Home Best_burger_L_btns_ bpt" {...Best_burger_L_btns_Props} {...Best_burger_L_btns_Cb} {...Best_burger_L_btns_IoProps}>
<Flex className="p-Home Best_burger_L_button_ bpt" {...Best_burger_L_button_Props} {...Best_burger_L_button_Cb} {...Best_burger_L_button_IoProps}>
<Button className="p-Home Best_burger_L_btns_1_ bpt" {...Best_burger_L_btns_1_Props} {...Best_burger_L_btns_1_Cb} {...Best_burger_L_btns_1_IoProps}/>
<Button className="p-Home Best_burger_L_btns_2_ bpt" {...Best_burger_L_btns_2_Props} {...Best_burger_L_btns_2_Cb} {...Best_burger_L_btns_2_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Best_burger_R_ bpt" {...Best_burger_R_Props} {...Best_burger_R_Cb} {...Best_burger_R_IoProps}>
<Image className="p-Home Best_burger_img_ bpt" {...Best_burger_img_Props} {...Best_burger_img_Cb} {...Best_burger_img_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Client_review_ bpt" {...Client_review_Props} {...Client_review_Cb} {...Client_review_IoProps}>
<Flex className="p-Home review_no_ bpt" {...review_no_Props} {...review_no_Cb} {...review_no_IoProps}>
<TextBox className="p-Home review_no_1_ bpt" {...review_no_1_Props} {...review_no_1_Cb} {...review_no_1_IoProps}/>
</Flex>
<Flex className="p-Home Client_say_ bpt" {...Client_say_Props} {...Client_say_Cb} {...Client_say_IoProps}>
<TextBox className="p-Home clinet_say_txt_ bpt" {...clinet_say_txt_Props} {...clinet_say_txt_Cb} {...clinet_say_txt_IoProps}/>
</Flex>
<Flex className="p-Home client_review_para bpt" {...client_review_paraProps} {...client_review_paraCb} {...client_review_paraIoProps}>
<TextBox className="p-Home client_para_txt_ bpt" {...client_para_txt_Props} {...client_para_txt_Cb} {...client_para_txt_IoProps}/>
</Flex>
<Flex className="p-Home client_main_body_ bpt" {...client_main_body_Props} {...client_main_body_Cb} {...client_main_body_IoProps}>
<Flex className="p-Home client_left_ bpt" {...client_left_Props} {...client_left_Cb} {...client_left_IoProps}>
<Image className="p-Home client_left_img_ bpt" {...client_left_img_Props} {...client_left_img_Cb} {...client_left_img_IoProps}/>
</Flex>
<Flex className="p-Home client_main_review bpt" {...client_main_reviewProps} {...client_main_reviewCb} {...client_main_reviewIoProps}>
<Flex className="p-Home client_main_review_star_ bpt" {...client_main_review_star_Props} {...client_main_review_star_Cb} {...client_main_review_star_IoProps}>
<Image className="p-Home client_main_review_star_1 bpt" {...client_main_review_star_1Props} {...client_main_review_star_1Cb} {...client_main_review_star_1IoProps}/>
<Image className="p-Home client_main_review_star_2 bpt" {...client_main_review_star_2Props} {...client_main_review_star_2Cb} {...client_main_review_star_2IoProps}/>
<Image className="p-Home client_main_review_star_3 bpt" {...client_main_review_star_3Props} {...client_main_review_star_3Cb} {...client_main_review_star_3IoProps}/>
<Image className="p-Home client_main_review_star_4 bpt" {...client_main_review_star_4Props} {...client_main_review_star_4Cb} {...client_main_review_star_4IoProps}/>
<Image className="p-Home client_main_review_star_5 bpt" {...client_main_review_star_5Props} {...client_main_review_star_5Cb} {...client_main_review_star_5IoProps}/>
</Flex>
<Flex className="p-Home client_main_review_h1_ bpt" {...client_main_review_h1_Props} {...client_main_review_h1_Cb} {...client_main_review_h1_IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
<Flex className="p-Home client_main_review_para_ bpt" {...client_main_review_para_Props} {...client_main_review_para_Cb} {...client_main_review_para_IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
<Flex className="p-Home client_dp_name bpt" {...client_dp_nameProps} {...client_dp_nameCb} {...client_dp_nameIoProps}>
<Flex className="p-Home client_main_review_profile_ bpt" {...client_main_review_profile_Props} {...client_main_review_profile_Cb} {...client_main_review_profile_IoProps}>
<Image className="p-Home client_main_review_prfile_img_ bpt" {...client_main_review_prfile_img_Props} {...client_main_review_prfile_img_Cb} {...client_main_review_prfile_img_IoProps}/>
<Flex className="p-Home client_main_review_name_ bpt" {...client_main_review_name_Props} {...client_main_review_name_Cb} {...client_main_review_name_IoProps}>
<Flex className="p-Home client_main_review_matt_ bpt" {...client_main_review_matt_Props} {...client_main_review_matt_Cb} {...client_main_review_matt_IoProps}>
<TextBox className="p-Home client_main_review_matt_txt bpt" {...client_main_review_matt_txtProps} {...client_main_review_matt_txtCb} {...client_main_review_matt_txtIoProps}/>
</Flex>
<Flex className="p-Home client_main_review_ca_ bpt" {...client_main_review_ca_Props} {...client_main_review_ca_Cb} {...client_main_review_ca_IoProps}>
<TextBox className="p-Home client_main_review_ca_txt_ bpt" {...client_main_review_ca_txt_Props} {...client_main_review_ca_txt_Cb} {...client_main_review_ca_txt_IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home client_right_ bpt" {...client_right_Props} {...client_right_Cb} {...client_right_IoProps}>
<Image className="p-Home client_right__img_ bpt" {...client_right__img_Props} {...client_right__img_Cb} {...client_right__img_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home client_footer_ bpt" {...client_footer_Props} {...client_footer_Cb} {...client_footer_IoProps}>
<Flex className="p-Home client_footer_btn_ bpt" {...client_footer_btn_Props} {...client_footer_btn_Cb} {...client_footer_btn_IoProps}>
<Button className="p-Home client_footer_btn_L_ bpt" {...client_footer_btn_L_Props} {...client_footer_btn_L_Cb} {...client_footer_btn_L_IoProps}/>
<Button className="p-Home client_footer_btn_R_ bpt" {...client_footer_btn_R_Props} {...client_footer_btn_R_Cb} {...client_footer_btn_R_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Articles_ bpt" {...Articles_Props} {...Articles_Cb} {...Articles_IoProps}>
<Flex className="p-Home Articles_header_ bpt" {...Articles_header_Props} {...Articles_header_Cb} {...Articles_header_IoProps}>
<Flex className="p-Home Articles_header_L_ bpt" {...Articles_header_L_Props} {...Articles_header_L_Cb} {...Articles_header_L_IoProps}>
<TextBox className="p-Home Articles_header_L_txt_ bpt" {...Articles_header_L_txt_Props} {...Articles_header_L_txt_Cb} {...Articles_header_L_txt_IoProps}/>
</Flex>
<Flex className="p-Home Articles_header_R_ bpt" {...Articles_header_R_Props} {...Articles_header_R_Cb} {...Articles_header_R_IoProps}>
<TextBox className="p-Home Articles_header_R_txt_ bpt" {...Articles_header_R_txt_Props} {...Articles_header_R_txt_Cb} {...Articles_header_R_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Articles_main_ bpt" {...Articles_main_Props} {...Articles_main_Cb} {...Articles_main_IoProps}>
<Flex className="p-Home Article_main_L_side_ bpt" {...Article_main_L_side_Props} {...Article_main_L_side_Cb} {...Article_main_L_side_IoProps}>
<Flex className="p-Home Article_main_L_side_1_ bpt" {...Article_main_L_side_1_Props} {...Article_main_L_side_1_Cb} {...Article_main_L_side_1_IoProps}>
<Image className="p-Home Article_main_L_side_1_img_ bpt" {...Article_main_L_side_1_img_Props} {...Article_main_L_side_1_img_Cb} {...Article_main_L_side_1_img_IoProps}/>
</Flex>
<Flex className="p-Home Article_main_L_side_2_ bpt" {...Article_main_L_side_2_Props} {...Article_main_L_side_2_Cb} {...Article_main_L_side_2_IoProps}>
<TextBox className="p-Home Article_main_L_side_2_img_ bpt" {...Article_main_L_side_2_img_Props} {...Article_main_L_side_2_img_Cb} {...Article_main_L_side_2_img_IoProps}/>
</Flex>
<Flex className="p-Home Article_main_L_side_3_ bpt" {...Article_main_L_side_3_Props} {...Article_main_L_side_3_Cb} {...Article_main_L_side_3_IoProps}>
<TextBox className="p-Home Article_main_L_side_3_img_ bpt" {...Article_main_L_side_3_img_Props} {...Article_main_L_side_3_img_Cb} {...Article_main_L_side_3_img_IoProps}/>
</Flex>
<Flex className="p-Home Article_main_L_side_4_ bpt" {...Article_main_L_side_4_Props} {...Article_main_L_side_4_Cb} {...Article_main_L_side_4_IoProps}>
<TextBox className="p-Home Article_main_L_side_4_img_ bpt" {...Article_main_L_side_4_img_Props} {...Article_main_L_side_4_img_Cb} {...Article_main_L_side_4_img_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home article_main_right_side bpt" {...article_main_right_sideProps} {...article_main_right_sideCb} {...article_main_right_sideIoProps}>
<Flex className="p-Home article_upper_side bpt" {...article_upper_sideProps} {...article_upper_sideCb} {...article_upper_sideIoProps}>
<Flex className="p-Home article_upper_one_one bpt" {...article_upper_one_oneProps} {...article_upper_one_oneCb} {...article_upper_one_oneIoProps}>
<Flex className="p-Home Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
<Flex className="p-Home Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home article_upper_one_two bpt" {...article_upper_one_twoProps} {...article_upper_one_twoCb} {...article_upper_one_twoIoProps}>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home article_lower_side bpt" {...article_lower_sideProps} {...article_lower_sideCb} {...article_lower_sideIoProps}>
<Flex className="p-Home article_lower_two_one bpt" {...article_lower_two_oneProps} {...article_lower_two_oneCb} {...article_lower_two_oneIoProps}>
<Flex className="p-Home Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home article_lower_two_two bpt" {...article_lower_two_twoProps} {...article_lower_two_twoCb} {...article_lower_two_twoIoProps}>
<Flex className="p-Home Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<Flex className="p-Home Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
<Flex className="p-Home Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_area_ bpt" {...Form_area_Props} {...Form_area_Cb} {...Form_area_IoProps}>
<Flex className="p-Home Form_area_L_ bpt" {...Form_area_L_Props} {...Form_area_L_Cb} {...Form_area_L_IoProps}>
<Flex className="p-Home Form_area_L_h1_ bpt" {...Form_area_L_h1_Props} {...Form_area_L_h1_Cb} {...Form_area_L_h1_IoProps}>
<TextBox className="p-Home Form_area_L_h1_txt_ bpt" {...Form_area_L_h1_txt_Props} {...Form_area_L_h1_txt_Cb} {...Form_area_L_h1_txt_IoProps}/>
</Flex>
<Flex className="p-Home Form_area_L_para_ bpt" {...Form_area_L_para_Props} {...Form_area_L_para_Cb} {...Form_area_L_para_IoProps}>
<TextBox className="p-Home Form_area_L_para_txt_ bpt" {...Form_area_L_para_txt_Props} {...Form_area_L_para_txt_Cb} {...Form_area_L_para_txt_IoProps}/>
</Flex>
<Flex className="p-Home Form_area_L_location_ bpt" {...Form_area_L_location_Props} {...Form_area_L_location_Cb} {...Form_area_L_location_IoProps}>
<Image className="p-Home Form_area_L_location_Img_ bpt" {...Form_area_L_location_Img_Props} {...Form_area_L_location_Img_Cb} {...Form_area_L_location_Img_IoProps}/>
<Flex className="p-Home Form_area_L_location_text_ bpt" {...Form_area_L_location_text_Props} {...Form_area_L_location_text_Cb} {...Form_area_L_location_text_IoProps}>
<TextBox className="p-Home Form_area_L_location_txt_ bpt" {...Form_area_L_location_txt_Props} {...Form_area_L_location_txt_Cb} {...Form_area_L_location_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Form_area_L_Mnumber_ bpt" {...Form_area_L_Mnumber_Props} {...Form_area_L_Mnumber_Cb} {...Form_area_L_Mnumber_IoProps}>
<Image className="p-Home Form_area_L_Mnumber_img_ bpt" {...Form_area_L_Mnumber_img_Props} {...Form_area_L_Mnumber_img_Cb} {...Form_area_L_Mnumber_img_IoProps}/>
<Flex className="p-Home Form_area_L_Mnumber_text_ bpt" {...Form_area_L_Mnumber_text_Props} {...Form_area_L_Mnumber_text_Cb} {...Form_area_L_Mnumber_text_IoProps}>
<TextBox className="p-Home Form_area_L_Mnumber_text_txt_ bpt" {...Form_area_L_Mnumber_text_txt_Props} {...Form_area_L_Mnumber_text_txt_Cb} {...Form_area_L_Mnumber_text_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Form_area_L_email_flex_ bpt" {...Form_area_L_email_flex_Props} {...Form_area_L_email_flex_Cb} {...Form_area_L_email_flex_IoProps}>
<Image className="p-Home Form_area_L_email_img_ bpt" {...Form_area_L_email_img_Props} {...Form_area_L_email_img_Cb} {...Form_area_L_email_img_IoProps}/>
<Flex className="p-Home Form_area_L_email_text_ bpt" {...Form_area_L_email_text_Props} {...Form_area_L_email_text_Cb} {...Form_area_L_email_text_IoProps}>
<TextBox className="p-Home Form_area_L_email_txt_ bpt" {...Form_area_L_email_txt_Props} {...Form_area_L_email_txt_Cb} {...Form_area_L_email_txt_IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_area_R_ bpt" {...Form_area_R_Props} {...Form_area_R_Cb} {...Form_area_R_IoProps}>
<Flex className="p-Home Form_area_R_fill_ bpt" {...Form_area_R_fill_Props} {...Form_area_R_fill_Cb} {...Form_area_R_fill_IoProps}>
<Flex className="p-Home Form_area_R_fill_1_ bpt" {...Form_area_R_fill_1_Props} {...Form_area_R_fill_1_Cb} {...Form_area_R_fill_1_IoProps}>
<Flex className="p-Home Form_first_row_ bpt" {...Form_first_row_Props} {...Form_first_row_Cb} {...Form_first_row_IoProps}>
<Flex className="p-Home first_row_L bpt" {...first_row_LProps} {...first_row_LCb} {...first_row_LIoProps}>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Flex>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home first_row_R bpt" {...first_row_RProps} {...first_row_RCb} {...first_row_RIoProps}>
<Flex className="p-Home Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
<Flex className="p-Home Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_second_row bpt" {...Form_second_rowProps} {...Form_second_rowCb} {...Form_second_rowIoProps}>
<Flex className="p-Home second_row_L bpt" {...second_row_LProps} {...second_row_LCb} {...second_row_LIoProps}>
<Flex className="p-Home Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex>
<Flex className="p-Home Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home second_row_R bpt" {...second_row_RProps} {...second_row_RCb} {...second_row_RIoProps}>
<Flex className="p-Home Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Flex className="p-Home Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_third_row bpt" {...Form_third_rowProps} {...Form_third_rowCb} {...Form_third_rowIoProps}>
<Flex className="p-Home third_row_L bpt" {...third_row_LProps} {...third_row_LCb} {...third_row_LIoProps}>
<Flex className="p-Home Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
<Flex className="p-Home Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home third_row_R bpt" {...third_row_RProps} {...third_row_RCb} {...third_row_RIoProps}>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Flex>
<Flex className="p-Home Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_fourth_row bpt" {...Form_fourth_rowProps} {...Form_fourth_rowCb} {...Form_fourth_rowIoProps}>
<Flex className="p-Home fourth_row_L bpt" {...fourth_row_LProps} {...fourth_row_LCb} {...fourth_row_LIoProps}>
<Flex className="p-Home Add_a_note_ bpt" {...Add_a_note_Props} {...Add_a_note_Cb} {...Add_a_note_IoProps}>
<TextBox className="p-Home Add_a_note_txt_ bpt" {...Add_a_note_txt_Props} {...Add_a_note_txt_Cb} {...Add_a_note_txt_IoProps}/>
</Flex>
<Flex className="p-Home Add_a_note_area_ bpt" {...Add_a_note_area_Props} {...Add_a_note_area_Cb} {...Add_a_note_area_IoProps}>
<Input className="p-Home Add_a_note_input_ bpt" {...Add_a_note_input_Props} {...Add_a_note_input_Cb} {...Add_a_note_input_IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Form_area_R_fill_btn_ bpt" {...Form_area_R_fill_btn_Props} {...Form_area_R_fill_btn_Cb} {...Form_area_R_fill_btn_IoProps}>
<Button className="p-Home Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Our_articles_follow_us_ bpt" {...Our_articles_follow_us_Props} {...Our_articles_follow_us_Cb} {...Our_articles_follow_us_IoProps}>
<Flex className="p-Home Follow_1_ bpt" {...Follow_1_Props} {...Follow_1_Cb} {...Follow_1_IoProps}>
<Flex className="p-Home Follow_head_ bpt" {...Follow_head_Props} {...Follow_head_Cb} {...Follow_head_IoProps}>
<TextBox className="p-Home follow_h1_ bpt" {...follow_h1_Props} {...follow_h1_Cb} {...follow_h1_IoProps}/>
</Flex>
<Flex className="p-Home Follow_btn_ bpt" {...Follow_btn_Props} {...Follow_btn_Cb} {...Follow_btn_IoProps}>
<TextBox className="p-Home follow_us_btn_ bpt" {...follow_us_btn_Props} {...follow_us_btn_Cb} {...follow_us_btn_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Follow_2_ bpt" {...Follow_2_Props} {...Follow_2_Cb} {...Follow_2_IoProps}>
<Flex className="p-Home Follow_images_ bpt" {...Follow_images_Props} {...Follow_images_Cb} {...Follow_images_IoProps}>
<Image className="p-Home Follow_images_1_ bpt" {...Follow_images_1_Props} {...Follow_images_1_Cb} {...Follow_images_1_IoProps}/>
<Image className="p-Home Follow_images_2_ bpt" {...Follow_images_2_Props} {...Follow_images_2_Cb} {...Follow_images_2_IoProps}/>
<Flex className="p-Home Follow_images_3i_ bpt" {...Follow_images_3i_Props} {...Follow_images_3i_Cb} {...Follow_images_3i_IoProps}>
<Flex className="p-Home Follow_images_3a_ bpt" {...Follow_images_3a_Props} {...Follow_images_3a_Cb} {...Follow_images_3a_IoProps}>
<Flex className="p-Home Follow_images_3a_1_ bpt" {...Follow_images_3a_1_Props} {...Follow_images_3a_1_Cb} {...Follow_images_3a_1_IoProps}>
<Image className="p-Home burger_coc_ bpt" {...burger_coc_Props} {...burger_coc_Cb} {...burger_coc_IoProps}/>
</Flex>
<Flex className="p-Home Follow_images_3a_2_ bpt" {...Follow_images_3a_2_Props} {...Follow_images_3a_2_Cb} {...Follow_images_3a_2_IoProps}>
<Image className="p-Home french_fries__ bpt" {...french_fries__Props} {...french_fries__Cb} {...french_fries__IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Follow_images_3b_ bpt" {...Follow_images_3b_Props} {...Follow_images_3b_Cb} {...Follow_images_3b_IoProps}>
<Flex className="p-Home Follow_images_3b_1_ bpt" {...Follow_images_3b_1_Props} {...Follow_images_3b_1_Cb} {...Follow_images_3b_1_IoProps}>
<Image className="p-Home hot_dog_ bpt" {...hot_dog_Props} {...hot_dog_Cb} {...hot_dog_IoProps}/>
</Flex>
<Flex className="p-Home Follow_images_3b_2_ bpt" {...Follow_images_3b_2_Props} {...Follow_images_3b_2_Cb} {...Follow_images_3b_2_IoProps}>
<Image className="p-Home coc_ bpt" {...coc_Props} {...coc_Cb} {...coc_IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Home_footer_ bpt" {...Home_footer_Props} {...Home_footer_Cb} {...Home_footer_IoProps}>
<Flex className="p-Home Footer_left_ bpt" {...Footer_left_Props} {...Footer_left_Cb} {...Footer_left_IoProps}>
<Flex className="p-Home Footer_left_h1_ bpt" {...Footer_left_h1_Props} {...Footer_left_h1_Cb} {...Footer_left_h1_IoProps}>
<Image className="p-Home Footer_left_h1_img_ bpt" {...Footer_left_h1_img_Props} {...Footer_left_h1_img_Cb} {...Footer_left_h1_img_IoProps}/>
</Flex>
<Flex className="p-Home Footer_left_para_ bpt" {...Footer_left_para_Props} {...Footer_left_para_Cb} {...Footer_left_para_IoProps}>
<TextBox className="p-Home Footer_left_para_txt_ bpt" {...Footer_left_para_txt_Props} {...Footer_left_para_txt_Cb} {...Footer_left_para_txt_IoProps}/>
</Flex>
<Flex className="p-Home Footer_left_stars_ bpt" {...Footer_left_stars_Props} {...Footer_left_stars_Cb} {...Footer_left_stars_IoProps}>
<Image className="p-Home Footer_left_stars_img_1_ bpt" {...Footer_left_stars_img_1_Props} {...Footer_left_stars_img_1_Cb} {...Footer_left_stars_img_1_IoProps}/>
<Image className="p-Home Footer_left_stars_img_2_ bpt" {...Footer_left_stars_img_2_Props} {...Footer_left_stars_img_2_Cb} {...Footer_left_stars_img_2_IoProps}/>
<Image className="p-Home Footer_left_stars_img_3_ bpt" {...Footer_left_stars_img_3_Props} {...Footer_left_stars_img_3_Cb} {...Footer_left_stars_img_3_IoProps}/>
<Image className="p-Home Footer_left_stars_img_4_ bpt" {...Footer_left_stars_img_4_Props} {...Footer_left_stars_img_4_Cb} {...Footer_left_stars_img_4_IoProps}/>
<Image className="p-Home Footer_left_stars_img_5_ bpt" {...Footer_left_stars_img_5_Props} {...Footer_left_stars_img_5_Cb} {...Footer_left_stars_img_5_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Footer_mid_section bpt" {...Footer_mid_sectionProps} {...Footer_mid_sectionCb} {...Footer_mid_sectionIoProps}>
<Flex className="p-Home Footer_mid_Left_ bpt" {...Footer_mid_Left_Props} {...Footer_mid_Left_Cb} {...Footer_mid_Left_IoProps}>
<Flex className="p-Home footer_mid_Left_1 bpt" {...footer_mid_Left_1Props} {...footer_mid_Left_1Cb} {...footer_mid_Left_1IoProps}>
<TextBox className="p-Home footer_L_1 bpt" {...footer_L_1Props} {...footer_L_1Cb} {...footer_L_1IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_2 bpt" {...footer_mid_Left_2Props} {...footer_mid_Left_2Cb} {...footer_mid_Left_2IoProps}>
<TextBox className="p-Home footer_L_2 bpt" {...footer_L_2Props} {...footer_L_2Cb} {...footer_L_2IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_3 bpt" {...footer_mid_Left_3Props} {...footer_mid_Left_3Cb} {...footer_mid_Left_3IoProps}>
<TextBox className="p-Home footer_L_3 bpt" {...footer_L_3Props} {...footer_L_3Cb} {...footer_L_3IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_4 bpt" {...footer_mid_Left_4Props} {...footer_mid_Left_4Cb} {...footer_mid_Left_4IoProps}>
<TextBox className="p-Home footer_L_4 bpt" {...footer_L_4Props} {...footer_L_4Cb} {...footer_L_4IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_5 bpt" {...footer_mid_Left_5Props} {...footer_mid_Left_5Cb} {...footer_mid_Left_5IoProps}>
<TextBox className="p-Home footer_L_5 bpt" {...footer_L_5Props} {...footer_L_5Cb} {...footer_L_5IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_6 bpt" {...footer_mid_Left_6Props} {...footer_mid_Left_6Cb} {...footer_mid_Left_6IoProps}>
<TextBox className="p-Home footer_L_6 bpt" {...footer_L_6Props} {...footer_L_6Cb} {...footer_L_6IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_7 bpt" {...footer_mid_Left_7Props} {...footer_mid_Left_7Cb} {...footer_mid_Left_7IoProps}>
<TextBox className="p-Home footer_L_7 bpt" {...footer_L_7Props} {...footer_L_7Cb} {...footer_L_7IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_Left_8 bpt" {...footer_mid_Left_8Props} {...footer_mid_Left_8Cb} {...footer_mid_Left_8IoProps}>
<TextBox className="p-Home footer_L_8 bpt" {...footer_L_8Props} {...footer_L_8Cb} {...footer_L_8IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Footer_mid_right_ bpt" {...Footer_mid_right_Props} {...Footer_mid_right_Cb} {...Footer_mid_right_IoProps}>
<Flex className="p-Home footer_mid_R_1 bpt" {...footer_mid_R_1Props} {...footer_mid_R_1Cb} {...footer_mid_R_1IoProps}>
<TextBox className="p-Home footer_mid_R_1_txt_ bpt" {...footer_mid_R_1_txt_Props} {...footer_mid_R_1_txt_Cb} {...footer_mid_R_1_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_2 bpt" {...footer_mid_R_2Props} {...footer_mid_R_2Cb} {...footer_mid_R_2IoProps}>
<TextBox className="p-Home footer_mid_R_2_txt_ bpt" {...footer_mid_R_2_txt_Props} {...footer_mid_R_2_txt_Cb} {...footer_mid_R_2_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_3 bpt" {...footer_mid_R_3Props} {...footer_mid_R_3Cb} {...footer_mid_R_3IoProps}>
<TextBox className="p-Home footer_mid_R_3_txt_ bpt" {...footer_mid_R_3_txt_Props} {...footer_mid_R_3_txt_Cb} {...footer_mid_R_3_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_4 bpt" {...footer_mid_R_4Props} {...footer_mid_R_4Cb} {...footer_mid_R_4IoProps}>
<TextBox className="p-Home footer_mid_R_4_txt_ bpt" {...footer_mid_R_4_txt_Props} {...footer_mid_R_4_txt_Cb} {...footer_mid_R_4_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_5 bpt" {...footer_mid_R_5Props} {...footer_mid_R_5Cb} {...footer_mid_R_5IoProps}>
<TextBox className="p-Home footer_mid_R_5_txt_ bpt" {...footer_mid_R_5_txt_Props} {...footer_mid_R_5_txt_Cb} {...footer_mid_R_5_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_6 bpt" {...footer_mid_R_6Props} {...footer_mid_R_6Cb} {...footer_mid_R_6IoProps}>
<TextBox className="p-Home footer_mid_R_6_txt_ bpt" {...footer_mid_R_6_txt_Props} {...footer_mid_R_6_txt_Cb} {...footer_mid_R_6_txt_IoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_7 bpt" {...footer_mid_R_7Props} {...footer_mid_R_7Cb} {...footer_mid_R_7IoProps}>
<TextBox className="p-Home footer_mid_R_7_txt bpt" {...footer_mid_R_7_txtProps} {...footer_mid_R_7_txtCb} {...footer_mid_R_7_txtIoProps}/>
</Flex>
<Flex className="p-Home footer_mid_R_8 bpt" {...footer_mid_R_8Props} {...footer_mid_R_8Cb} {...footer_mid_R_8IoProps}>
<TextBox className="p-Home footer_mid_R_8_txt bpt" {...footer_mid_R_8_txtProps} {...footer_mid_R_8_txtCb} {...footer_mid_R_8_txtIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Follow_insta_ bpt" {...Follow_insta_Props} {...Follow_insta_Cb} {...Follow_insta_IoProps}>
<Flex className="p-Home Follow_insta_head_ bpt" {...Follow_insta_head_Props} {...Follow_insta_head_Cb} {...Follow_insta_head_IoProps}>
<TextBox className="p-Home Follow_insta_head_txt_ bpt" {...Follow_insta_head_txt_Props} {...Follow_insta_head_txt_Cb} {...Follow_insta_head_txt_IoProps}/>
</Flex>
<Flex className="p-Home Follow_insta_img_1_ bpt" {...Follow_insta_img_1_Props} {...Follow_insta_img_1_Cb} {...Follow_insta_img_1_IoProps}>
<Flex className="p-Home Follow_insta_img_1_11_ bpt" {...Follow_insta_img_1_11_Props} {...Follow_insta_img_1_11_Cb} {...Follow_insta_img_1_11_IoProps}>
<Image className="p-Home Follow_insta_img_1_11_txt_ bpt" {...Follow_insta_img_1_11_txt_Props} {...Follow_insta_img_1_11_txt_Cb} {...Follow_insta_img_1_11_txt_IoProps}/>
</Flex>
<Flex className="p-Home Follow_insta_img_1_12_ bpt" {...Follow_insta_img_1_12_Props} {...Follow_insta_img_1_12_Cb} {...Follow_insta_img_1_12_IoProps}>
<Image className="p-Home Follow_insta_img_1_12_txt_ bpt" {...Follow_insta_img_1_12_txt_Props} {...Follow_insta_img_1_12_txt_Cb} {...Follow_insta_img_1_12_txt_IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Follow_insta_img_2_ bpt" {...Follow_insta_img_2_Props} {...Follow_insta_img_2_Cb} {...Follow_insta_img_2_IoProps}>
<Flex className="p-Home Follow_insta_img_2_21_ bpt" {...Follow_insta_img_2_21_Props} {...Follow_insta_img_2_21_Cb} {...Follow_insta_img_2_21_IoProps}>
<Image className="p-Home Follow_insta_img_2_21_txt_ bpt" {...Follow_insta_img_2_21_txt_Props} {...Follow_insta_img_2_21_txt_Cb} {...Follow_insta_img_2_21_txt_IoProps}/>
</Flex>
<Flex className="p-Home Follow_insta_img_2_22_ bpt" {...Follow_insta_img_2_22_Props} {...Follow_insta_img_2_22_Cb} {...Follow_insta_img_2_22_IoProps}>
<Image className="p-Home Follow_insta_img_2_22_txt__ bpt" {...Follow_insta_img_2_22_txt__Props} {...Follow_insta_img_2_22_txt__Cb} {...Follow_insta_img_2_22_txt__IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
