import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useMenu_Header_1_Cb, useMenu_Flex_Cb, useMenu_Flex_L_Cb, useMenu_Flex_items_Cb, useMenu_Flex_logo_Cb, useMenu_Flex_R_Cb, useOrder_via_app_Cb, useorder_h1_Cb, useOrder_para_Cb, useorder_via_app_apps_Cb, useOrder_via_app_first_row_Cb, useuber_eats_Cb, use_uber_Cb, useDoor_dash_Cb, useDoor_Cb, usePost_mates_Cb, usepost_Cb, useRappi_Cb, use_Rappi__Cb, useorder_via_app_second_row_Cb, useGo_puff_Cb, use_go_puff__Cb, useSeam_less_Cb, useSeam_Cb, useDidi_Food_Cb, usedidi_Cb, useGrub_hub_Cb, useGrub_img_Cb, useOur_menu_Cb, useOur_menu_Row_2__Cb, useOur_Menu_Image_5_Cb, useIce_cream_price_Cb, useFlex416Cb, useIce_cream_h1_Cb, useIce_cream_para__Cb, useOur_Menu_Image_8_Cb, usesoda_Flex_Cb, usesoda_Para_Cb, usesoda_h1_Cb, usesoda_img_Cb, useFlex414Cb, useOur_Menu_Image_7_Cb, useegg_price_h1_para_Cb, useegg_price_h1_Cb, useegg_price_Cb, useegg_price_text_Cb, useOur_Menu_Image_6_Cb, usechick_burger_para__Cb, usechick_burger_h1__Cb, usechick_burger_price_Cb, usechick_burger_price_text_Cb, useOur_menu_Row_1_Cb, useOur_Menu_Image_2Cb, useOur_Menu_Price_2Cb, usemilkshake_price_Cb, usemilkshake_h1_Cb, usemilkshake_para_Cb, useOur_Menu_Image_3Cb, useOur_Menu_Price_3Cb, useFlex423Cb, useClassic_fries_h1__Cb, useClassic_fries_para_Cb, useOur_Menu_Image_4Cb, useOur_Menu_Flex_4Cb, usePancake_price__Cb, usePancake_price__text_Cb, usepancake_h1__Cb, usePancake_price__para__Cb, useOur_Menu_Image_1_Cb, usepara1_Cb, useClassic_text_Cb, useOur_Menu_Price_1Cb, useburger_price_Cb, useOur_menu__Para__Cb, useOur_menu_head_Cb, useOur_menu_types_Cb, useMenu_Footer__Cb, useMenu_Footer__RCb, useMenu_Footer__R_head_Cb, useMenu_Footer__R_1Cb, useMenu_Footer__R_1_1Cb, useMenu_Footer__R_1_2Cb, useMenu_Footer__R_2Cb, useMenu_Footer__R_2_2Cb, useMenu_Footer__R_2_1Cb, useMenu_Footer__MCb, useMenu_Footer__MFlex2_Cb, useMenu_FM_11Cb, useMenu_FM_12Cb, useMenu_FM_17Cb, useMenu_FM_18Cb, useMenu_FM_15Cb, useMenu_FM_16Cb, useMenu_FM_13Cb, useMenu_FM_14Cb, useMenu_Footer__MFlex1_Cb, useMenu_FM_4Cb, useMenu_FM_3Cb, useMenu_FM_6Cb, useMenu_FM_5TextCb, useMenu_FM_8Cb, useMenu_FM_7Cb, useMenu_FM_2Cb, useMenu_FM_1Cb, useMenu_Footer__LCb, userestro_stars_Cb, userestro_para_1Cb, userestro_X_Cb, usePages_LinkCb, useMenu_LinkCb, useAbout_LinkCb, useHome_LinkCb, useCart_LinkCb, uselogo_img_Cb, useMenu_reser_btn_Cb, useMenu_order_btn_Cb, useTextBoxcorder_Cb, useTextBox189Cb, use_uber_ImageCb, useDoor_dash_Image_Cb, usepost_Image_Cb, useRappi_Image_Cb, use_go_puff__Image_Cb, useSeam_ImageCb, usedidi_Image_Cb, useImage101Cb, useIce_cream_price_img_Cb, useTextBox164Cb, useIce_cream_txt_Cb, useIce_cream_para__txt_Cb, usesoda_Image_Cb, usesoda_Para_Text_Cb, usesoda_h1_Txt_Cb, useTextBox162Cb, useegg_price_img__Cb, useegg_price_para__txt_Cb, useegg_price_h1_txt_Cb, useegg_price_text_txt_Cb, usechick_burger_img__Cb, usechick_burger_h1__para_txt_Cb, usechick_burger_h1___txt__Cb, usechick_burger_price__txt_Cb, usemilkshake_image_Cb, usemilkshake_price_txt_Cb, usemilkshake_h1_text_Cb, usemilkshake_para__txt_Cb, useClassic_fries_img_Cb, useTextBox170Cb, useClassic_fries_h1_txt_Cb, useClassic_fries_para__txt_Cb, useImage82Cb, usePancake_price__txt_Cb, usePancake_price___txt_Cb, usePancake_price__para___txt_Cb, usemenu_classic_burger_Cb, useclassic_paraCb, useClassic_text_txt_Cb, useburger_price_text_Cb, useOur_menu_para_txt_Cb, useOur_menu_head_txt_Cb, useButton_All_Cb, useButton_Breakfast_Cb, useButton_MainDish_Cb, useButtonDrink_Cb, useButton_Desert_Cb, useinsta_head_txt_Cb, useR_1_1ImageCb, useR_1_2_ImageCb, useR_2_2ImageCb, useR_2_1ImageCb, useMenu_FM_11_txt_Cb, useMenu_FM_12_txt_Cb, useMenu_FM_17_txt_Cb, useMenu_FM_18_txt_Cb, useMenu_FM_15_txt_Cb, useMenu_FM_16_txt_Cb, useMenu_FM_13_txt_Cb, useMenu_FM_14_txt_Cb, useMenu_FM_4TextCb, useMenu_FM_3TextCb, useMenu_FM_6TextCb, useTextBox237Cb, useMenu_FM_8TextCb, useMenu_FM_7TextCb, useMenu_FM_2TextCb, useMenu_FM_1TextCb, userestro_stars_Image5Cb, userestro_stars_Image4Cb, userestro_stars_Image3Cb, userestro_stars_Image2Cb, userestro_stars_Image1Cb, userestro_para_1Text_Cb, useRestro_ImageCb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
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

  const Menu_Header_1_Props = useStore((state)=>state["Menu"]["Menu_Header_1_"]);
const Menu_Header_1_IoProps = useIoStore((state)=>state["Menu"]["Menu_Header_1_"]);
const Menu_Header_1_Cb = useMenu_Header_1_Cb()
const Menu_Flex_Props = useStore((state)=>state["Menu"]["Menu_Flex_"]);
const Menu_Flex_IoProps = useIoStore((state)=>state["Menu"]["Menu_Flex_"]);
const Menu_Flex_Cb = useMenu_Flex_Cb()
const Menu_Flex_L_Props = useStore((state)=>state["Menu"]["Menu_Flex_L_"]);
const Menu_Flex_L_IoProps = useIoStore((state)=>state["Menu"]["Menu_Flex_L_"]);
const Menu_Flex_L_Cb = useMenu_Flex_L_Cb()
const Menu_Flex_items_Props = useStore((state)=>state["Menu"]["Menu_Flex_items_"]);
const Menu_Flex_items_IoProps = useIoStore((state)=>state["Menu"]["Menu_Flex_items_"]);
const Menu_Flex_items_Cb = useMenu_Flex_items_Cb()
const Menu_Flex_logo_Props = useStore((state)=>state["Menu"]["Menu_Flex_logo_"]);
const Menu_Flex_logo_IoProps = useIoStore((state)=>state["Menu"]["Menu_Flex_logo_"]);
const Menu_Flex_logo_Cb = useMenu_Flex_logo_Cb()
const Menu_Flex_R_Props = useStore((state)=>state["Menu"]["Menu_Flex_R_"]);
const Menu_Flex_R_IoProps = useIoStore((state)=>state["Menu"]["Menu_Flex_R_"]);
const Menu_Flex_R_Cb = useMenu_Flex_R_Cb()
const Order_via_app_Props = useStore((state)=>state["Menu"]["Order_via_app_"]);
const Order_via_app_IoProps = useIoStore((state)=>state["Menu"]["Order_via_app_"]);
const Order_via_app_Cb = useOrder_via_app_Cb()
const order_h1_Props = useStore((state)=>state["Menu"]["order_h1_"]);
const order_h1_IoProps = useIoStore((state)=>state["Menu"]["order_h1_"]);
const order_h1_Cb = useorder_h1_Cb()
const Order_para_Props = useStore((state)=>state["Menu"]["Order_para_"]);
const Order_para_IoProps = useIoStore((state)=>state["Menu"]["Order_para_"]);
const Order_para_Cb = useOrder_para_Cb()
const order_via_app_apps_Props = useStore((state)=>state["Menu"]["order_via_app_apps_"]);
const order_via_app_apps_IoProps = useIoStore((state)=>state["Menu"]["order_via_app_apps_"]);
const order_via_app_apps_Cb = useorder_via_app_apps_Cb()
const Order_via_app_first_row_Props = useStore((state)=>state["Menu"]["Order_via_app_first_row_"]);
const Order_via_app_first_row_IoProps = useIoStore((state)=>state["Menu"]["Order_via_app_first_row_"]);
const Order_via_app_first_row_Cb = useOrder_via_app_first_row_Cb()
const uber_eats_Props = useStore((state)=>state["Menu"]["uber_eats_"]);
const uber_eats_IoProps = useIoStore((state)=>state["Menu"]["uber_eats_"]);
const uber_eats_Cb = useuber_eats_Cb()
const _uber_Props = useStore((state)=>state["Menu"]["_uber_"]);
const _uber_IoProps = useIoStore((state)=>state["Menu"]["_uber_"]);
const _uber_Cb = use_uber_Cb()
const Door_dash_Props = useStore((state)=>state["Menu"]["Door_dash_"]);
const Door_dash_IoProps = useIoStore((state)=>state["Menu"]["Door_dash_"]);
const Door_dash_Cb = useDoor_dash_Cb()
const Door_Props = useStore((state)=>state["Menu"]["Door_"]);
const Door_IoProps = useIoStore((state)=>state["Menu"]["Door_"]);
const Door_Cb = useDoor_Cb()
const Post_mates_Props = useStore((state)=>state["Menu"]["Post_mates_"]);
const Post_mates_IoProps = useIoStore((state)=>state["Menu"]["Post_mates_"]);
const Post_mates_Cb = usePost_mates_Cb()
const post_Props = useStore((state)=>state["Menu"]["post_"]);
const post_IoProps = useIoStore((state)=>state["Menu"]["post_"]);
const post_Cb = usepost_Cb()
const Rappi_Props = useStore((state)=>state["Menu"]["Rappi_"]);
const Rappi_IoProps = useIoStore((state)=>state["Menu"]["Rappi_"]);
const Rappi_Cb = useRappi_Cb()
const _Rappi__Props = useStore((state)=>state["Menu"]["_Rappi__"]);
const _Rappi__IoProps = useIoStore((state)=>state["Menu"]["_Rappi__"]);
const _Rappi__Cb = use_Rappi__Cb()
const order_via_app_second_row_Props = useStore((state)=>state["Menu"]["order_via_app_second_row_"]);
const order_via_app_second_row_IoProps = useIoStore((state)=>state["Menu"]["order_via_app_second_row_"]);
const order_via_app_second_row_Cb = useorder_via_app_second_row_Cb()
const Go_puff_Props = useStore((state)=>state["Menu"]["Go_puff_"]);
const Go_puff_IoProps = useIoStore((state)=>state["Menu"]["Go_puff_"]);
const Go_puff_Cb = useGo_puff_Cb()
const _go_puff__Props = useStore((state)=>state["Menu"]["_go_puff__"]);
const _go_puff__IoProps = useIoStore((state)=>state["Menu"]["_go_puff__"]);
const _go_puff__Cb = use_go_puff__Cb()
const Seam_less_Props = useStore((state)=>state["Menu"]["Seam_less_"]);
const Seam_less_IoProps = useIoStore((state)=>state["Menu"]["Seam_less_"]);
const Seam_less_Cb = useSeam_less_Cb()
const Seam_Props = useStore((state)=>state["Menu"]["Seam_"]);
const Seam_IoProps = useIoStore((state)=>state["Menu"]["Seam_"]);
const Seam_Cb = useSeam_Cb()
const Didi_Food_Props = useStore((state)=>state["Menu"]["Didi_Food_"]);
const Didi_Food_IoProps = useIoStore((state)=>state["Menu"]["Didi_Food_"]);
const Didi_Food_Cb = useDidi_Food_Cb()
const didi_Props = useStore((state)=>state["Menu"]["didi_"]);
const didi_IoProps = useIoStore((state)=>state["Menu"]["didi_"]);
const didi_Cb = usedidi_Cb()
const Grub_hub_Props = useStore((state)=>state["Menu"]["Grub_hub_"]);
const Grub_hub_IoProps = useIoStore((state)=>state["Menu"]["Grub_hub_"]);
const Grub_hub_Cb = useGrub_hub_Cb()
const Grub_img_Props = useStore((state)=>state["Menu"]["Grub_img_"]);
const Grub_img_IoProps = useIoStore((state)=>state["Menu"]["Grub_img_"]);
const Grub_img_Cb = useGrub_img_Cb()
const Our_menu_Props = useStore((state)=>state["Menu"]["Our_menu_"]);
const Our_menu_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_"]);
const Our_menu_Cb = useOur_menu_Cb()
const Our_menu_Row_2__Props = useStore((state)=>state["Menu"]["Our_menu_Row_2__"]);
const Our_menu_Row_2__IoProps = useIoStore((state)=>state["Menu"]["Our_menu_Row_2__"]);
const Our_menu_Row_2__Cb = useOur_menu_Row_2__Cb()
const Our_Menu_Image_5_Props = useStore((state)=>state["Menu"]["Our_Menu_Image_5_"]);
const Our_Menu_Image_5_IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_5_"]);
const Our_Menu_Image_5_Cb = useOur_Menu_Image_5_Cb()
const Ice_cream_price_Props = useStore((state)=>state["Menu"]["Ice_cream_price_"]);
const Ice_cream_price_IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_price_"]);
const Ice_cream_price_Cb = useIce_cream_price_Cb()
const Flex416Props = useStore((state)=>state["Menu"]["Flex416"]);
const Flex416IoProps = useIoStore((state)=>state["Menu"]["Flex416"]);
const Flex416Cb = useFlex416Cb()
const Ice_cream_h1_Props = useStore((state)=>state["Menu"]["Ice_cream_h1_"]);
const Ice_cream_h1_IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_h1_"]);
const Ice_cream_h1_Cb = useIce_cream_h1_Cb()
const Ice_cream_para__Props = useStore((state)=>state["Menu"]["Ice_cream_para__"]);
const Ice_cream_para__IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_para__"]);
const Ice_cream_para__Cb = useIce_cream_para__Cb()
const Our_Menu_Image_8_Props = useStore((state)=>state["Menu"]["Our_Menu_Image_8_"]);
const Our_Menu_Image_8_IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_8_"]);
const Our_Menu_Image_8_Cb = useOur_Menu_Image_8_Cb()
const soda_Flex_Props = useStore((state)=>state["Menu"]["soda_Flex_"]);
const soda_Flex_IoProps = useIoStore((state)=>state["Menu"]["soda_Flex_"]);
const soda_Flex_Cb = usesoda_Flex_Cb()
const soda_Para_Props = useStore((state)=>state["Menu"]["soda_Para_"]);
const soda_Para_IoProps = useIoStore((state)=>state["Menu"]["soda_Para_"]);
const soda_Para_Cb = usesoda_Para_Cb()
const soda_h1_Props = useStore((state)=>state["Menu"]["soda_h1_"]);
const soda_h1_IoProps = useIoStore((state)=>state["Menu"]["soda_h1_"]);
const soda_h1_Cb = usesoda_h1_Cb()
const soda_img_Props = useStore((state)=>state["Menu"]["soda_img_"]);
const soda_img_IoProps = useIoStore((state)=>state["Menu"]["soda_img_"]);
const soda_img_Cb = usesoda_img_Cb()
const Flex414Props = useStore((state)=>state["Menu"]["Flex414"]);
const Flex414IoProps = useIoStore((state)=>state["Menu"]["Flex414"]);
const Flex414Cb = useFlex414Cb()
const Our_Menu_Image_7_Props = useStore((state)=>state["Menu"]["Our_Menu_Image_7_"]);
const Our_Menu_Image_7_IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_7_"]);
const Our_Menu_Image_7_Cb = useOur_Menu_Image_7_Cb()
const egg_price_h1_para_Props = useStore((state)=>state["Menu"]["egg_price_h1_para_"]);
const egg_price_h1_para_IoProps = useIoStore((state)=>state["Menu"]["egg_price_h1_para_"]);
const egg_price_h1_para_Cb = useegg_price_h1_para_Cb()
const egg_price_h1_Props = useStore((state)=>state["Menu"]["egg_price_h1_"]);
const egg_price_h1_IoProps = useIoStore((state)=>state["Menu"]["egg_price_h1_"]);
const egg_price_h1_Cb = useegg_price_h1_Cb()
const egg_price_Props = useStore((state)=>state["Menu"]["egg_price_"]);
const egg_price_IoProps = useIoStore((state)=>state["Menu"]["egg_price_"]);
const egg_price_Cb = useegg_price_Cb()
const egg_price_text_Props = useStore((state)=>state["Menu"]["egg_price_text_"]);
const egg_price_text_IoProps = useIoStore((state)=>state["Menu"]["egg_price_text_"]);
const egg_price_text_Cb = useegg_price_text_Cb()
const Our_Menu_Image_6_Props = useStore((state)=>state["Menu"]["Our_Menu_Image_6_"]);
const Our_Menu_Image_6_IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_6_"]);
const Our_Menu_Image_6_Cb = useOur_Menu_Image_6_Cb()
const chick_burger_para__Props = useStore((state)=>state["Menu"]["chick_burger_para__"]);
const chick_burger_para__IoProps = useIoStore((state)=>state["Menu"]["chick_burger_para__"]);
const chick_burger_para__Cb = usechick_burger_para__Cb()
const chick_burger_h1__Props = useStore((state)=>state["Menu"]["chick_burger_h1__"]);
const chick_burger_h1__IoProps = useIoStore((state)=>state["Menu"]["chick_burger_h1__"]);
const chick_burger_h1__Cb = usechick_burger_h1__Cb()
const chick_burger_price_Props = useStore((state)=>state["Menu"]["chick_burger_price_"]);
const chick_burger_price_IoProps = useIoStore((state)=>state["Menu"]["chick_burger_price_"]);
const chick_burger_price_Cb = usechick_burger_price_Cb()
const chick_burger_price_text_Props = useStore((state)=>state["Menu"]["chick_burger_price_text_"]);
const chick_burger_price_text_IoProps = useIoStore((state)=>state["Menu"]["chick_burger_price_text_"]);
const chick_burger_price_text_Cb = usechick_burger_price_text_Cb()
const Our_menu_Row_1_Props = useStore((state)=>state["Menu"]["Our_menu_Row_1_"]);
const Our_menu_Row_1_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_Row_1_"]);
const Our_menu_Row_1_Cb = useOur_menu_Row_1_Cb()
const Our_Menu_Image_2Props = useStore((state)=>state["Menu"]["Our_Menu_Image_2"]);
const Our_Menu_Image_2IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_2"]);
const Our_Menu_Image_2Cb = useOur_Menu_Image_2Cb()
const Our_Menu_Price_2Props = useStore((state)=>state["Menu"]["Our_Menu_Price_2"]);
const Our_Menu_Price_2IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Price_2"]);
const Our_Menu_Price_2Cb = useOur_Menu_Price_2Cb()
const milkshake_price_Props = useStore((state)=>state["Menu"]["milkshake_price_"]);
const milkshake_price_IoProps = useIoStore((state)=>state["Menu"]["milkshake_price_"]);
const milkshake_price_Cb = usemilkshake_price_Cb()
const milkshake_h1_Props = useStore((state)=>state["Menu"]["milkshake_h1_"]);
const milkshake_h1_IoProps = useIoStore((state)=>state["Menu"]["milkshake_h1_"]);
const milkshake_h1_Cb = usemilkshake_h1_Cb()
const milkshake_para_Props = useStore((state)=>state["Menu"]["milkshake_para_"]);
const milkshake_para_IoProps = useIoStore((state)=>state["Menu"]["milkshake_para_"]);
const milkshake_para_Cb = usemilkshake_para_Cb()
const Our_Menu_Image_3Props = useStore((state)=>state["Menu"]["Our_Menu_Image_3"]);
const Our_Menu_Image_3IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_3"]);
const Our_Menu_Image_3Cb = useOur_Menu_Image_3Cb()
const Our_Menu_Price_3Props = useStore((state)=>state["Menu"]["Our_Menu_Price_3"]);
const Our_Menu_Price_3IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Price_3"]);
const Our_Menu_Price_3Cb = useOur_Menu_Price_3Cb()
const Flex423Props = useStore((state)=>state["Menu"]["Flex423"]);
const Flex423IoProps = useIoStore((state)=>state["Menu"]["Flex423"]);
const Flex423Cb = useFlex423Cb()
const Classic_fries_h1__Props = useStore((state)=>state["Menu"]["Classic_fries_h1__"]);
const Classic_fries_h1__IoProps = useIoStore((state)=>state["Menu"]["Classic_fries_h1__"]);
const Classic_fries_h1__Cb = useClassic_fries_h1__Cb()
const Classic_fries_para_Props = useStore((state)=>state["Menu"]["Classic_fries_para_"]);
const Classic_fries_para_IoProps = useIoStore((state)=>state["Menu"]["Classic_fries_para_"]);
const Classic_fries_para_Cb = useClassic_fries_para_Cb()
const Our_Menu_Image_4Props = useStore((state)=>state["Menu"]["Our_Menu_Image_4"]);
const Our_Menu_Image_4IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_4"]);
const Our_Menu_Image_4Cb = useOur_Menu_Image_4Cb()
const Our_Menu_Flex_4Props = useStore((state)=>state["Menu"]["Our_Menu_Flex_4"]);
const Our_Menu_Flex_4IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Flex_4"]);
const Our_Menu_Flex_4Cb = useOur_Menu_Flex_4Cb()
const Pancake_price__Props = useStore((state)=>state["Menu"]["Pancake_price__"]);
const Pancake_price__IoProps = useIoStore((state)=>state["Menu"]["Pancake_price__"]);
const Pancake_price__Cb = usePancake_price__Cb()
const Pancake_price__text_Props = useStore((state)=>state["Menu"]["Pancake_price__text_"]);
const Pancake_price__text_IoProps = useIoStore((state)=>state["Menu"]["Pancake_price__text_"]);
const Pancake_price__text_Cb = usePancake_price__text_Cb()
const pancake_h1__Props = useStore((state)=>state["Menu"]["pancake_h1__"]);
const pancake_h1__IoProps = useIoStore((state)=>state["Menu"]["pancake_h1__"]);
const pancake_h1__Cb = usepancake_h1__Cb()
const Pancake_price__para__Props = useStore((state)=>state["Menu"]["Pancake_price__para__"]);
const Pancake_price__para__IoProps = useIoStore((state)=>state["Menu"]["Pancake_price__para__"]);
const Pancake_price__para__Cb = usePancake_price__para__Cb()
const Our_Menu_Image_1_Props = useStore((state)=>state["Menu"]["Our_Menu_Image_1_"]);
const Our_Menu_Image_1_IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Image_1_"]);
const Our_Menu_Image_1_Cb = useOur_Menu_Image_1_Cb()
const para1_Props = useStore((state)=>state["Menu"]["para1_"]);
const para1_IoProps = useIoStore((state)=>state["Menu"]["para1_"]);
const para1_Cb = usepara1_Cb()
const Classic_text_Props = useStore((state)=>state["Menu"]["Classic_text_"]);
const Classic_text_IoProps = useIoStore((state)=>state["Menu"]["Classic_text_"]);
const Classic_text_Cb = useClassic_text_Cb()
const Our_Menu_Price_1Props = useStore((state)=>state["Menu"]["Our_Menu_Price_1"]);
const Our_Menu_Price_1IoProps = useIoStore((state)=>state["Menu"]["Our_Menu_Price_1"]);
const Our_Menu_Price_1Cb = useOur_Menu_Price_1Cb()
const burger_price_Props = useStore((state)=>state["Menu"]["burger_price_"]);
const burger_price_IoProps = useIoStore((state)=>state["Menu"]["burger_price_"]);
const burger_price_Cb = useburger_price_Cb()
const Our_menu__Para__Props = useStore((state)=>state["Menu"]["Our_menu__Para__"]);
const Our_menu__Para__IoProps = useIoStore((state)=>state["Menu"]["Our_menu__Para__"]);
const Our_menu__Para__Cb = useOur_menu__Para__Cb()
const Our_menu_head_Props = useStore((state)=>state["Menu"]["Our_menu_head_"]);
const Our_menu_head_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_head_"]);
const Our_menu_head_Cb = useOur_menu_head_Cb()
const Our_menu_types_Props = useStore((state)=>state["Menu"]["Our_menu_types_"]);
const Our_menu_types_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_types_"]);
const Our_menu_types_Cb = useOur_menu_types_Cb()
const Menu_Footer__Props = useStore((state)=>state["Menu"]["Menu_Footer__"]);
const Menu_Footer__IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__"]);
const Menu_Footer__Cb = useMenu_Footer__Cb()
const Menu_Footer__RProps = useStore((state)=>state["Menu"]["Menu_Footer__R"]);
const Menu_Footer__RIoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R"]);
const Menu_Footer__RCb = useMenu_Footer__RCb()
const Menu_Footer__R_head_Props = useStore((state)=>state["Menu"]["Menu_Footer__R_head_"]);
const Menu_Footer__R_head_IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_head_"]);
const Menu_Footer__R_head_Cb = useMenu_Footer__R_head_Cb()
const Menu_Footer__R_1Props = useStore((state)=>state["Menu"]["Menu_Footer__R_1"]);
const Menu_Footer__R_1IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_1"]);
const Menu_Footer__R_1Cb = useMenu_Footer__R_1Cb()
const Menu_Footer__R_1_1Props = useStore((state)=>state["Menu"]["Menu_Footer__R_1_1"]);
const Menu_Footer__R_1_1IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_1_1"]);
const Menu_Footer__R_1_1Cb = useMenu_Footer__R_1_1Cb()
const Menu_Footer__R_1_2Props = useStore((state)=>state["Menu"]["Menu_Footer__R_1_2"]);
const Menu_Footer__R_1_2IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_1_2"]);
const Menu_Footer__R_1_2Cb = useMenu_Footer__R_1_2Cb()
const Menu_Footer__R_2Props = useStore((state)=>state["Menu"]["Menu_Footer__R_2"]);
const Menu_Footer__R_2IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_2"]);
const Menu_Footer__R_2Cb = useMenu_Footer__R_2Cb()
const Menu_Footer__R_2_2Props = useStore((state)=>state["Menu"]["Menu_Footer__R_2_2"]);
const Menu_Footer__R_2_2IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_2_2"]);
const Menu_Footer__R_2_2Cb = useMenu_Footer__R_2_2Cb()
const Menu_Footer__R_2_1Props = useStore((state)=>state["Menu"]["Menu_Footer__R_2_1"]);
const Menu_Footer__R_2_1IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__R_2_1"]);
const Menu_Footer__R_2_1Cb = useMenu_Footer__R_2_1Cb()
const Menu_Footer__MProps = useStore((state)=>state["Menu"]["Menu_Footer__M"]);
const Menu_Footer__MIoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__M"]);
const Menu_Footer__MCb = useMenu_Footer__MCb()
const Menu_Footer__MFlex2_Props = useStore((state)=>state["Menu"]["Menu_Footer__MFlex2_"]);
const Menu_Footer__MFlex2_IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__MFlex2_"]);
const Menu_Footer__MFlex2_Cb = useMenu_Footer__MFlex2_Cb()
const Menu_FM_11Props = useStore((state)=>state["Menu"]["Menu_FM_11"]);
const Menu_FM_11IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_11"]);
const Menu_FM_11Cb = useMenu_FM_11Cb()
const Menu_FM_12Props = useStore((state)=>state["Menu"]["Menu_FM_12"]);
const Menu_FM_12IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_12"]);
const Menu_FM_12Cb = useMenu_FM_12Cb()
const Menu_FM_17Props = useStore((state)=>state["Menu"]["Menu_FM_17"]);
const Menu_FM_17IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_17"]);
const Menu_FM_17Cb = useMenu_FM_17Cb()
const Menu_FM_18Props = useStore((state)=>state["Menu"]["Menu_FM_18"]);
const Menu_FM_18IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_18"]);
const Menu_FM_18Cb = useMenu_FM_18Cb()
const Menu_FM_15Props = useStore((state)=>state["Menu"]["Menu_FM_15"]);
const Menu_FM_15IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_15"]);
const Menu_FM_15Cb = useMenu_FM_15Cb()
const Menu_FM_16Props = useStore((state)=>state["Menu"]["Menu_FM_16"]);
const Menu_FM_16IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_16"]);
const Menu_FM_16Cb = useMenu_FM_16Cb()
const Menu_FM_13Props = useStore((state)=>state["Menu"]["Menu_FM_13"]);
const Menu_FM_13IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_13"]);
const Menu_FM_13Cb = useMenu_FM_13Cb()
const Menu_FM_14Props = useStore((state)=>state["Menu"]["Menu_FM_14"]);
const Menu_FM_14IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_14"]);
const Menu_FM_14Cb = useMenu_FM_14Cb()
const Menu_Footer__MFlex1_Props = useStore((state)=>state["Menu"]["Menu_Footer__MFlex1_"]);
const Menu_Footer__MFlex1_IoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__MFlex1_"]);
const Menu_Footer__MFlex1_Cb = useMenu_Footer__MFlex1_Cb()
const Menu_FM_4Props = useStore((state)=>state["Menu"]["Menu_FM_4"]);
const Menu_FM_4IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_4"]);
const Menu_FM_4Cb = useMenu_FM_4Cb()
const Menu_FM_3Props = useStore((state)=>state["Menu"]["Menu_FM_3"]);
const Menu_FM_3IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_3"]);
const Menu_FM_3Cb = useMenu_FM_3Cb()
const Menu_FM_6Props = useStore((state)=>state["Menu"]["Menu_FM_6"]);
const Menu_FM_6IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_6"]);
const Menu_FM_6Cb = useMenu_FM_6Cb()
const Menu_FM_5TextProps = useStore((state)=>state["Menu"]["Menu_FM_5Text"]);
const Menu_FM_5TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_5Text"]);
const Menu_FM_5TextCb = useMenu_FM_5TextCb()
const Menu_FM_8Props = useStore((state)=>state["Menu"]["Menu_FM_8"]);
const Menu_FM_8IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_8"]);
const Menu_FM_8Cb = useMenu_FM_8Cb()
const Menu_FM_7Props = useStore((state)=>state["Menu"]["Menu_FM_7"]);
const Menu_FM_7IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_7"]);
const Menu_FM_7Cb = useMenu_FM_7Cb()
const Menu_FM_2Props = useStore((state)=>state["Menu"]["Menu_FM_2"]);
const Menu_FM_2IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_2"]);
const Menu_FM_2Cb = useMenu_FM_2Cb()
const Menu_FM_1Props = useStore((state)=>state["Menu"]["Menu_FM_1"]);
const Menu_FM_1IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_1"]);
const Menu_FM_1Cb = useMenu_FM_1Cb()
const Menu_Footer__LProps = useStore((state)=>state["Menu"]["Menu_Footer__L"]);
const Menu_Footer__LIoProps = useIoStore((state)=>state["Menu"]["Menu_Footer__L"]);
const Menu_Footer__LCb = useMenu_Footer__LCb()
const restro_stars_Props = useStore((state)=>state["Menu"]["restro_stars_"]);
const restro_stars_IoProps = useIoStore((state)=>state["Menu"]["restro_stars_"]);
const restro_stars_Cb = userestro_stars_Cb()
const restro_para_1Props = useStore((state)=>state["Menu"]["restro_para_1"]);
const restro_para_1IoProps = useIoStore((state)=>state["Menu"]["restro_para_1"]);
const restro_para_1Cb = userestro_para_1Cb()
const restro_X_Props = useStore((state)=>state["Menu"]["restro_X_"]);
const restro_X_IoProps = useIoStore((state)=>state["Menu"]["restro_X_"]);
const restro_X_Cb = userestro_X_Cb()
const Pages_LinkProps = useStore((state)=>state["Menu"]["Pages_Link"]);
const Pages_LinkIoProps = useIoStore((state)=>state["Menu"]["Pages_Link"]);
const Pages_LinkCb = usePages_LinkCb()
const Menu_LinkProps = useStore((state)=>state["Menu"]["Menu_Link"]);
const Menu_LinkIoProps = useIoStore((state)=>state["Menu"]["Menu_Link"]);
const Menu_LinkCb = useMenu_LinkCb()
const About_LinkProps = useStore((state)=>state["Menu"]["About_Link"]);
const About_LinkIoProps = useIoStore((state)=>state["Menu"]["About_Link"]);
const About_LinkCb = useAbout_LinkCb()
const Home_LinkProps = useStore((state)=>state["Menu"]["Home_Link"]);
const Home_LinkIoProps = useIoStore((state)=>state["Menu"]["Home_Link"]);
const Home_LinkCb = useHome_LinkCb()
const Cart_LinkProps = useStore((state)=>state["Menu"]["Cart_Link"]);
const Cart_LinkIoProps = useIoStore((state)=>state["Menu"]["Cart_Link"]);
const Cart_LinkCb = useCart_LinkCb()
const logo_img_Props = useStore((state)=>state["Menu"]["logo_img_"]);
const logo_img_IoProps = useIoStore((state)=>state["Menu"]["logo_img_"]);
const logo_img_Cb = uselogo_img_Cb()
const Menu_reser_btn_Props = useStore((state)=>state["Menu"]["Menu_reser_btn_"]);
const Menu_reser_btn_IoProps = useIoStore((state)=>state["Menu"]["Menu_reser_btn_"]);
const Menu_reser_btn_Cb = useMenu_reser_btn_Cb()
const Menu_order_btn_Props = useStore((state)=>state["Menu"]["Menu_order_btn_"]);
const Menu_order_btn_IoProps = useIoStore((state)=>state["Menu"]["Menu_order_btn_"]);
const Menu_order_btn_Cb = useMenu_order_btn_Cb()
const TextBoxcorder_Props = useStore((state)=>state["Menu"]["TextBoxcorder_"]);
const TextBoxcorder_IoProps = useIoStore((state)=>state["Menu"]["TextBoxcorder_"]);
const TextBoxcorder_Cb = useTextBoxcorder_Cb()
const TextBox189Props = useStore((state)=>state["Menu"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Menu"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const _uber_ImageProps = useStore((state)=>state["Menu"]["_uber_Image"]);
const _uber_ImageIoProps = useIoStore((state)=>state["Menu"]["_uber_Image"]);
const _uber_ImageCb = use_uber_ImageCb()
const Door_dash_Image_Props = useStore((state)=>state["Menu"]["Door_dash_Image_"]);
const Door_dash_Image_IoProps = useIoStore((state)=>state["Menu"]["Door_dash_Image_"]);
const Door_dash_Image_Cb = useDoor_dash_Image_Cb()
const post_Image_Props = useStore((state)=>state["Menu"]["post_Image_"]);
const post_Image_IoProps = useIoStore((state)=>state["Menu"]["post_Image_"]);
const post_Image_Cb = usepost_Image_Cb()
const Rappi_Image_Props = useStore((state)=>state["Menu"]["Rappi_Image_"]);
const Rappi_Image_IoProps = useIoStore((state)=>state["Menu"]["Rappi_Image_"]);
const Rappi_Image_Cb = useRappi_Image_Cb()
const _go_puff__Image_Props = useStore((state)=>state["Menu"]["_go_puff__Image_"]);
const _go_puff__Image_IoProps = useIoStore((state)=>state["Menu"]["_go_puff__Image_"]);
const _go_puff__Image_Cb = use_go_puff__Image_Cb()
const Seam_ImageProps = useStore((state)=>state["Menu"]["Seam_Image"]);
const Seam_ImageIoProps = useIoStore((state)=>state["Menu"]["Seam_Image"]);
const Seam_ImageCb = useSeam_ImageCb()
const didi_Image_Props = useStore((state)=>state["Menu"]["didi_Image_"]);
const didi_Image_IoProps = useIoStore((state)=>state["Menu"]["didi_Image_"]);
const didi_Image_Cb = usedidi_Image_Cb()
const Image101Props = useStore((state)=>state["Menu"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["Menu"]["Image101"]);
const Image101Cb = useImage101Cb()
const Ice_cream_price_img_Props = useStore((state)=>state["Menu"]["Ice_cream_price_img_"]);
const Ice_cream_price_img_IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_price_img_"]);
const Ice_cream_price_img_Cb = useIce_cream_price_img_Cb()
const TextBox164Props = useStore((state)=>state["Menu"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Menu"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Ice_cream_txt_Props = useStore((state)=>state["Menu"]["Ice_cream_txt_"]);
const Ice_cream_txt_IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_txt_"]);
const Ice_cream_txt_Cb = useIce_cream_txt_Cb()
const Ice_cream_para__txt_Props = useStore((state)=>state["Menu"]["Ice_cream_para__txt_"]);
const Ice_cream_para__txt_IoProps = useIoStore((state)=>state["Menu"]["Ice_cream_para__txt_"]);
const Ice_cream_para__txt_Cb = useIce_cream_para__txt_Cb()
const soda_Image_Props = useStore((state)=>state["Menu"]["soda_Image_"]);
const soda_Image_IoProps = useIoStore((state)=>state["Menu"]["soda_Image_"]);
const soda_Image_Cb = usesoda_Image_Cb()
const soda_Para_Text_Props = useStore((state)=>state["Menu"]["soda_Para_Text_"]);
const soda_Para_Text_IoProps = useIoStore((state)=>state["Menu"]["soda_Para_Text_"]);
const soda_Para_Text_Cb = usesoda_Para_Text_Cb()
const soda_h1_Txt_Props = useStore((state)=>state["Menu"]["soda_h1_Txt_"]);
const soda_h1_Txt_IoProps = useIoStore((state)=>state["Menu"]["soda_h1_Txt_"]);
const soda_h1_Txt_Cb = usesoda_h1_Txt_Cb()
const TextBox162Props = useStore((state)=>state["Menu"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Menu"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const egg_price_img__Props = useStore((state)=>state["Menu"]["egg_price_img__"]);
const egg_price_img__IoProps = useIoStore((state)=>state["Menu"]["egg_price_img__"]);
const egg_price_img__Cb = useegg_price_img__Cb()
const egg_price_para__txt_Props = useStore((state)=>state["Menu"]["egg_price_para__txt_"]);
const egg_price_para__txt_IoProps = useIoStore((state)=>state["Menu"]["egg_price_para__txt_"]);
const egg_price_para__txt_Cb = useegg_price_para__txt_Cb()
const egg_price_h1_txt_Props = useStore((state)=>state["Menu"]["egg_price_h1_txt_"]);
const egg_price_h1_txt_IoProps = useIoStore((state)=>state["Menu"]["egg_price_h1_txt_"]);
const egg_price_h1_txt_Cb = useegg_price_h1_txt_Cb()
const egg_price_text_txt_Props = useStore((state)=>state["Menu"]["egg_price_text_txt_"]);
const egg_price_text_txt_IoProps = useIoStore((state)=>state["Menu"]["egg_price_text_txt_"]);
const egg_price_text_txt_Cb = useegg_price_text_txt_Cb()
const chick_burger_img__Props = useStore((state)=>state["Menu"]["chick_burger_img__"]);
const chick_burger_img__IoProps = useIoStore((state)=>state["Menu"]["chick_burger_img__"]);
const chick_burger_img__Cb = usechick_burger_img__Cb()
const chick_burger_h1__para_txt_Props = useStore((state)=>state["Menu"]["chick_burger_h1__para_txt_"]);
const chick_burger_h1__para_txt_IoProps = useIoStore((state)=>state["Menu"]["chick_burger_h1__para_txt_"]);
const chick_burger_h1__para_txt_Cb = usechick_burger_h1__para_txt_Cb()
const chick_burger_h1___txt__Props = useStore((state)=>state["Menu"]["chick_burger_h1___txt__"]);
const chick_burger_h1___txt__IoProps = useIoStore((state)=>state["Menu"]["chick_burger_h1___txt__"]);
const chick_burger_h1___txt__Cb = usechick_burger_h1___txt__Cb()
const chick_burger_price__txt_Props = useStore((state)=>state["Menu"]["chick_burger_price__txt_"]);
const chick_burger_price__txt_IoProps = useIoStore((state)=>state["Menu"]["chick_burger_price__txt_"]);
const chick_burger_price__txt_Cb = usechick_burger_price__txt_Cb()
const milkshake_image_Props = useStore((state)=>state["Menu"]["milkshake_image_"]);
const milkshake_image_IoProps = useIoStore((state)=>state["Menu"]["milkshake_image_"]);
const milkshake_image_Cb = usemilkshake_image_Cb()
const milkshake_price_txt_Props = useStore((state)=>state["Menu"]["milkshake_price_txt_"]);
const milkshake_price_txt_IoProps = useIoStore((state)=>state["Menu"]["milkshake_price_txt_"]);
const milkshake_price_txt_Cb = usemilkshake_price_txt_Cb()
const milkshake_h1_text_Props = useStore((state)=>state["Menu"]["milkshake_h1_text_"]);
const milkshake_h1_text_IoProps = useIoStore((state)=>state["Menu"]["milkshake_h1_text_"]);
const milkshake_h1_text_Cb = usemilkshake_h1_text_Cb()
const milkshake_para__txt_Props = useStore((state)=>state["Menu"]["milkshake_para__txt_"]);
const milkshake_para__txt_IoProps = useIoStore((state)=>state["Menu"]["milkshake_para__txt_"]);
const milkshake_para__txt_Cb = usemilkshake_para__txt_Cb()
const Classic_fries_img_Props = useStore((state)=>state["Menu"]["Classic_fries_img_"]);
const Classic_fries_img_IoProps = useIoStore((state)=>state["Menu"]["Classic_fries_img_"]);
const Classic_fries_img_Cb = useClassic_fries_img_Cb()
const TextBox170Props = useStore((state)=>state["Menu"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Menu"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Classic_fries_h1_txt_Props = useStore((state)=>state["Menu"]["Classic_fries_h1_txt_"]);
const Classic_fries_h1_txt_IoProps = useIoStore((state)=>state["Menu"]["Classic_fries_h1_txt_"]);
const Classic_fries_h1_txt_Cb = useClassic_fries_h1_txt_Cb()
const Classic_fries_para__txt_Props = useStore((state)=>state["Menu"]["Classic_fries_para__txt_"]);
const Classic_fries_para__txt_IoProps = useIoStore((state)=>state["Menu"]["Classic_fries_para__txt_"]);
const Classic_fries_para__txt_Cb = useClassic_fries_para__txt_Cb()
const Image82Props = useStore((state)=>state["Menu"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Menu"]["Image82"]);
const Image82Cb = useImage82Cb()
const Pancake_price__txt_Props = useStore((state)=>state["Menu"]["Pancake_price__txt_"]);
const Pancake_price__txt_IoProps = useIoStore((state)=>state["Menu"]["Pancake_price__txt_"]);
const Pancake_price__txt_Cb = usePancake_price__txt_Cb()
const Pancake_price___txt_Props = useStore((state)=>state["Menu"]["Pancake_price___txt_"]);
const Pancake_price___txt_IoProps = useIoStore((state)=>state["Menu"]["Pancake_price___txt_"]);
const Pancake_price___txt_Cb = usePancake_price___txt_Cb()
const Pancake_price__para___txt_Props = useStore((state)=>state["Menu"]["Pancake_price__para___txt_"]);
const Pancake_price__para___txt_IoProps = useIoStore((state)=>state["Menu"]["Pancake_price__para___txt_"]);
const Pancake_price__para___txt_Cb = usePancake_price__para___txt_Cb()
const menu_classic_burger_Props = useStore((state)=>state["Menu"]["menu_classic_burger_"]);
const menu_classic_burger_IoProps = useIoStore((state)=>state["Menu"]["menu_classic_burger_"]);
const menu_classic_burger_Cb = usemenu_classic_burger_Cb()
const classic_paraProps = useStore((state)=>state["Menu"]["classic_para"]);
const classic_paraIoProps = useIoStore((state)=>state["Menu"]["classic_para"]);
const classic_paraCb = useclassic_paraCb()
const Classic_text_txt_Props = useStore((state)=>state["Menu"]["Classic_text_txt_"]);
const Classic_text_txt_IoProps = useIoStore((state)=>state["Menu"]["Classic_text_txt_"]);
const Classic_text_txt_Cb = useClassic_text_txt_Cb()
const burger_price_text_Props = useStore((state)=>state["Menu"]["burger_price_text_"]);
const burger_price_text_IoProps = useIoStore((state)=>state["Menu"]["burger_price_text_"]);
const burger_price_text_Cb = useburger_price_text_Cb()
const Our_menu_para_txt_Props = useStore((state)=>state["Menu"]["Our_menu_para_txt_"]);
const Our_menu_para_txt_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_para_txt_"]);
const Our_menu_para_txt_Cb = useOur_menu_para_txt_Cb()
const Our_menu_head_txt_Props = useStore((state)=>state["Menu"]["Our_menu_head_txt_"]);
const Our_menu_head_txt_IoProps = useIoStore((state)=>state["Menu"]["Our_menu_head_txt_"]);
const Our_menu_head_txt_Cb = useOur_menu_head_txt_Cb()
const Button_All_Props = useStore((state)=>state["Menu"]["Button_All_"]);
const Button_All_IoProps = useIoStore((state)=>state["Menu"]["Button_All_"]);
const Button_All_Cb = useButton_All_Cb()
const Button_Breakfast_Props = useStore((state)=>state["Menu"]["Button_Breakfast_"]);
const Button_Breakfast_IoProps = useIoStore((state)=>state["Menu"]["Button_Breakfast_"]);
const Button_Breakfast_Cb = useButton_Breakfast_Cb()
const Button_MainDish_Props = useStore((state)=>state["Menu"]["Button_MainDish_"]);
const Button_MainDish_IoProps = useIoStore((state)=>state["Menu"]["Button_MainDish_"]);
const Button_MainDish_Cb = useButton_MainDish_Cb()
const ButtonDrink_Props = useStore((state)=>state["Menu"]["ButtonDrink_"]);
const ButtonDrink_IoProps = useIoStore((state)=>state["Menu"]["ButtonDrink_"]);
const ButtonDrink_Cb = useButtonDrink_Cb()
const Button_Desert_Props = useStore((state)=>state["Menu"]["Button_Desert_"]);
const Button_Desert_IoProps = useIoStore((state)=>state["Menu"]["Button_Desert_"]);
const Button_Desert_Cb = useButton_Desert_Cb()
const insta_head_txt_Props = useStore((state)=>state["Menu"]["insta_head_txt_"]);
const insta_head_txt_IoProps = useIoStore((state)=>state["Menu"]["insta_head_txt_"]);
const insta_head_txt_Cb = useinsta_head_txt_Cb()
const R_1_1ImageProps = useStore((state)=>state["Menu"]["R_1_1Image"]);
const R_1_1ImageIoProps = useIoStore((state)=>state["Menu"]["R_1_1Image"]);
const R_1_1ImageCb = useR_1_1ImageCb()
const R_1_2_ImageProps = useStore((state)=>state["Menu"]["R_1_2_Image"]);
const R_1_2_ImageIoProps = useIoStore((state)=>state["Menu"]["R_1_2_Image"]);
const R_1_2_ImageCb = useR_1_2_ImageCb()
const R_2_2ImageProps = useStore((state)=>state["Menu"]["R_2_2Image"]);
const R_2_2ImageIoProps = useIoStore((state)=>state["Menu"]["R_2_2Image"]);
const R_2_2ImageCb = useR_2_2ImageCb()
const R_2_1ImageProps = useStore((state)=>state["Menu"]["R_2_1Image"]);
const R_2_1ImageIoProps = useIoStore((state)=>state["Menu"]["R_2_1Image"]);
const R_2_1ImageCb = useR_2_1ImageCb()
const Menu_FM_11_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_11_txt_"]);
const Menu_FM_11_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_11_txt_"]);
const Menu_FM_11_txt_Cb = useMenu_FM_11_txt_Cb()
const Menu_FM_12_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_12_txt_"]);
const Menu_FM_12_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_12_txt_"]);
const Menu_FM_12_txt_Cb = useMenu_FM_12_txt_Cb()
const Menu_FM_17_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_17_txt_"]);
const Menu_FM_17_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_17_txt_"]);
const Menu_FM_17_txt_Cb = useMenu_FM_17_txt_Cb()
const Menu_FM_18_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_18_txt_"]);
const Menu_FM_18_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_18_txt_"]);
const Menu_FM_18_txt_Cb = useMenu_FM_18_txt_Cb()
const Menu_FM_15_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_15_txt_"]);
const Menu_FM_15_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_15_txt_"]);
const Menu_FM_15_txt_Cb = useMenu_FM_15_txt_Cb()
const Menu_FM_16_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_16_txt_"]);
const Menu_FM_16_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_16_txt_"]);
const Menu_FM_16_txt_Cb = useMenu_FM_16_txt_Cb()
const Menu_FM_13_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_13_txt_"]);
const Menu_FM_13_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_13_txt_"]);
const Menu_FM_13_txt_Cb = useMenu_FM_13_txt_Cb()
const Menu_FM_14_txt_Props = useStore((state)=>state["Menu"]["Menu_FM_14_txt_"]);
const Menu_FM_14_txt_IoProps = useIoStore((state)=>state["Menu"]["Menu_FM_14_txt_"]);
const Menu_FM_14_txt_Cb = useMenu_FM_14_txt_Cb()
const Menu_FM_4TextProps = useStore((state)=>state["Menu"]["Menu_FM_4Text"]);
const Menu_FM_4TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_4Text"]);
const Menu_FM_4TextCb = useMenu_FM_4TextCb()
const Menu_FM_3TextProps = useStore((state)=>state["Menu"]["Menu_FM_3Text"]);
const Menu_FM_3TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_3Text"]);
const Menu_FM_3TextCb = useMenu_FM_3TextCb()
const Menu_FM_6TextProps = useStore((state)=>state["Menu"]["Menu_FM_6Text"]);
const Menu_FM_6TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_6Text"]);
const Menu_FM_6TextCb = useMenu_FM_6TextCb()
const TextBox237Props = useStore((state)=>state["Menu"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Menu"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const Menu_FM_8TextProps = useStore((state)=>state["Menu"]["Menu_FM_8Text"]);
const Menu_FM_8TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_8Text"]);
const Menu_FM_8TextCb = useMenu_FM_8TextCb()
const Menu_FM_7TextProps = useStore((state)=>state["Menu"]["Menu_FM_7Text"]);
const Menu_FM_7TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_7Text"]);
const Menu_FM_7TextCb = useMenu_FM_7TextCb()
const Menu_FM_2TextProps = useStore((state)=>state["Menu"]["Menu_FM_2Text"]);
const Menu_FM_2TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_2Text"]);
const Menu_FM_2TextCb = useMenu_FM_2TextCb()
const Menu_FM_1TextProps = useStore((state)=>state["Menu"]["Menu_FM_1Text"]);
const Menu_FM_1TextIoProps = useIoStore((state)=>state["Menu"]["Menu_FM_1Text"]);
const Menu_FM_1TextCb = useMenu_FM_1TextCb()
const restro_stars_Image5Props = useStore((state)=>state["Menu"]["restro_stars_Image5"]);
const restro_stars_Image5IoProps = useIoStore((state)=>state["Menu"]["restro_stars_Image5"]);
const restro_stars_Image5Cb = userestro_stars_Image5Cb()
const restro_stars_Image4Props = useStore((state)=>state["Menu"]["restro_stars_Image4"]);
const restro_stars_Image4IoProps = useIoStore((state)=>state["Menu"]["restro_stars_Image4"]);
const restro_stars_Image4Cb = userestro_stars_Image4Cb()
const restro_stars_Image3Props = useStore((state)=>state["Menu"]["restro_stars_Image3"]);
const restro_stars_Image3IoProps = useIoStore((state)=>state["Menu"]["restro_stars_Image3"]);
const restro_stars_Image3Cb = userestro_stars_Image3Cb()
const restro_stars_Image2Props = useStore((state)=>state["Menu"]["restro_stars_Image2"]);
const restro_stars_Image2IoProps = useIoStore((state)=>state["Menu"]["restro_stars_Image2"]);
const restro_stars_Image2Cb = userestro_stars_Image2Cb()
const restro_stars_Image1Props = useStore((state)=>state["Menu"]["restro_stars_Image1"]);
const restro_stars_Image1IoProps = useIoStore((state)=>state["Menu"]["restro_stars_Image1"]);
const restro_stars_Image1Cb = userestro_stars_Image1Cb()
const restro_para_1Text_Props = useStore((state)=>state["Menu"]["restro_para_1Text_"]);
const restro_para_1Text_IoProps = useIoStore((state)=>state["Menu"]["restro_para_1Text_"]);
const restro_para_1Text_Cb = userestro_para_1Text_Cb()
const Restro_ImageProps = useStore((state)=>state["Menu"]["Restro_Image"]);
const Restro_ImageIoProps = useIoStore((state)=>state["Menu"]["Restro_Image"]);
const Restro_ImageCb = useRestro_ImageCb()

  return (<>
  <Div2 className="p-Menu Menu_Header_1_ bpt" {...Menu_Header_1_Props} {...Menu_Header_1_Cb} {...Menu_Header_1_IoProps}>
<Flex2 className="p-Menu Menu_Flex_ bpt" {...Menu_Flex_Props} {...Menu_Flex_Cb} {...Menu_Flex_IoProps}>
<Flex2 className="p-Menu Menu_Flex_L_ bpt" {...Menu_Flex_L_Props} {...Menu_Flex_L_Cb} {...Menu_Flex_L_IoProps}>
<Flex2 className="p-Menu Menu_Flex_logo_ bpt" {...Menu_Flex_logo_Props} {...Menu_Flex_logo_Cb} {...Menu_Flex_logo_IoProps}>
<Image2 className="p-Menu logo_img_ bpt" {...logo_img_Props} {...logo_img_Cb} {...logo_img_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_Flex_items_ bpt" {...Menu_Flex_items_Props} {...Menu_Flex_items_Cb} {...Menu_Flex_items_IoProps}>
<Link2 className="p-Menu Home_Link bpt" {...Home_LinkProps} {...Home_LinkCb} {...Home_LinkIoProps}/>
<Link2 className="p-Menu About_Link bpt" {...About_LinkProps} {...About_LinkCb} {...About_LinkIoProps}/>
<Link2 className="p-Menu Menu_Link bpt" {...Menu_LinkProps} {...Menu_LinkCb} {...Menu_LinkIoProps}/>
<Link2 className="p-Menu Pages_Link bpt" {...Pages_LinkProps} {...Pages_LinkCb} {...Pages_LinkIoProps}/>
<Link2 className="p-Menu Cart_Link bpt" {...Cart_LinkProps} {...Cart_LinkCb} {...Cart_LinkIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Flex_R_ bpt" {...Menu_Flex_R_Props} {...Menu_Flex_R_Cb} {...Menu_Flex_R_IoProps}>
<Button2 className="p-Menu Menu_order_btn_ bpt" {...Menu_order_btn_Props} {...Menu_order_btn_Cb} {...Menu_order_btn_IoProps}/>
<Button2 className="p-Menu Menu_reser_btn_ bpt" {...Menu_reser_btn_Props} {...Menu_reser_btn_Cb} {...Menu_reser_btn_IoProps}/>
</Flex2>
</Flex2>
</Div2>
<Flex2 className="p-Menu Our_menu_ bpt" {...Our_menu_Props} {...Our_menu_Cb} {...Our_menu_IoProps}>
<Flex2 className="p-Menu Our_menu_head_ bpt" {...Our_menu_head_Props} {...Our_menu_head_Cb} {...Our_menu_head_IoProps}>
<TextBox2 className="p-Menu Our_menu_head_txt_ bpt" {...Our_menu_head_txt_Props} {...Our_menu_head_txt_Cb} {...Our_menu_head_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Our_menu__Para__ bpt" {...Our_menu__Para__Props} {...Our_menu__Para__Cb} {...Our_menu__Para__IoProps}>
<TextBox2 className="p-Menu Our_menu_para_txt_ bpt" {...Our_menu_para_txt_Props} {...Our_menu_para_txt_Cb} {...Our_menu_para_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Our_menu_types_ bpt" {...Our_menu_types_Props} {...Our_menu_types_Cb} {...Our_menu_types_IoProps}>
<Button2 className="p-Menu Button_All_ bpt" {...Button_All_Props} {...Button_All_Cb} {...Button_All_IoProps}/>
<Button2 className="p-Menu Button_Breakfast_ bpt" {...Button_Breakfast_Props} {...Button_Breakfast_Cb} {...Button_Breakfast_IoProps}/>
<Button2 className="p-Menu Button_MainDish_ bpt" {...Button_MainDish_Props} {...Button_MainDish_Cb} {...Button_MainDish_IoProps}/>
<Button2 className="p-Menu ButtonDrink_ bpt" {...ButtonDrink_Props} {...ButtonDrink_Cb} {...ButtonDrink_IoProps}/>
<Button2 className="p-Menu Button_Desert_ bpt" {...Button_Desert_Props} {...Button_Desert_Cb} {...Button_Desert_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Our_menu_Row_1_ bpt" {...Our_menu_Row_1_Props} {...Our_menu_Row_1_Cb} {...Our_menu_Row_1_IoProps}>
<Flex2 className="p-Menu Our_Menu_Image_1_ bpt" {...Our_Menu_Image_1_Props} {...Our_Menu_Image_1_Cb} {...Our_Menu_Image_1_IoProps}>
<Flex2 className="p-Menu Our_Menu_Price_1 bpt" {...Our_Menu_Price_1Props} {...Our_Menu_Price_1Cb} {...Our_Menu_Price_1IoProps}>
<Flex2 className="p-Menu burger_price_ bpt" {...burger_price_Props} {...burger_price_Cb} {...burger_price_IoProps}>
<TextBox2 className="p-Menu burger_price_text_ bpt" {...burger_price_text_Props} {...burger_price_text_Cb} {...burger_price_text_IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu menu_classic_burger_ bpt" {...menu_classic_burger_Props} {...menu_classic_burger_Cb} {...menu_classic_burger_IoProps}/>
<Flex2 className="p-Menu Classic_text_ bpt" {...Classic_text_Props} {...Classic_text_Cb} {...Classic_text_IoProps}>
<TextBox2 className="p-Menu Classic_text_txt_ bpt" {...Classic_text_txt_Props} {...Classic_text_txt_Cb} {...Classic_text_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu para1_ bpt" {...para1_Props} {...para1_Cb} {...para1_IoProps}>
<TextBox2 className="p-Menu classic_para bpt" {...classic_paraProps} {...classic_paraCb} {...classic_paraIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_2 bpt" {...Our_Menu_Image_2Props} {...Our_Menu_Image_2Cb} {...Our_Menu_Image_2IoProps}>
<Flex2 className="p-Menu Our_Menu_Price_2 bpt" {...Our_Menu_Price_2Props} {...Our_Menu_Price_2Cb} {...Our_Menu_Price_2IoProps}>
<Flex2 className="p-Menu milkshake_price_ bpt" {...milkshake_price_Props} {...milkshake_price_Cb} {...milkshake_price_IoProps}>
<TextBox2 className="p-Menu milkshake_price_txt_ bpt" {...milkshake_price_txt_Props} {...milkshake_price_txt_Cb} {...milkshake_price_txt_IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu milkshake_image_ bpt" {...milkshake_image_Props} {...milkshake_image_Cb} {...milkshake_image_IoProps}/>
<Flex2 className="p-Menu milkshake_h1_ bpt" {...milkshake_h1_Props} {...milkshake_h1_Cb} {...milkshake_h1_IoProps}>
<TextBox2 className="p-Menu milkshake_h1_text_ bpt" {...milkshake_h1_text_Props} {...milkshake_h1_text_Cb} {...milkshake_h1_text_IoProps}/>
</Flex2>
<Flex2 className="p-Menu milkshake_para_ bpt" {...milkshake_para_Props} {...milkshake_para_Cb} {...milkshake_para_IoProps}>
<TextBox2 className="p-Menu milkshake_para__txt_ bpt" {...milkshake_para__txt_Props} {...milkshake_para__txt_Cb} {...milkshake_para__txt_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_3 bpt" {...Our_Menu_Image_3Props} {...Our_Menu_Image_3Cb} {...Our_Menu_Image_3IoProps}>
<Flex2 className="p-Menu Our_Menu_Price_3 bpt" {...Our_Menu_Price_3Props} {...Our_Menu_Price_3Cb} {...Our_Menu_Price_3IoProps}>
<Flex2 className="p-Menu Flex423 bpt" {...Flex423Props} {...Flex423Cb} {...Flex423IoProps}>
<TextBox2 className="p-Menu TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu Classic_fries_img_ bpt" {...Classic_fries_img_Props} {...Classic_fries_img_Cb} {...Classic_fries_img_IoProps}/>
<Flex2 className="p-Menu Classic_fries_h1__ bpt" {...Classic_fries_h1__Props} {...Classic_fries_h1__Cb} {...Classic_fries_h1__IoProps}>
<TextBox2 className="p-Menu Classic_fries_h1_txt_ bpt" {...Classic_fries_h1_txt_Props} {...Classic_fries_h1_txt_Cb} {...Classic_fries_h1_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Classic_fries_para_ bpt" {...Classic_fries_para_Props} {...Classic_fries_para_Cb} {...Classic_fries_para_IoProps}>
<TextBox2 className="p-Menu Classic_fries_para__txt_ bpt" {...Classic_fries_para__txt_Props} {...Classic_fries_para__txt_Cb} {...Classic_fries_para__txt_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_4 bpt" {...Our_Menu_Image_4Props} {...Our_Menu_Image_4Cb} {...Our_Menu_Image_4IoProps}>
<Flex2 className="p-Menu Our_Menu_Flex_4 bpt" {...Our_Menu_Flex_4Props} {...Our_Menu_Flex_4Cb} {...Our_Menu_Flex_4IoProps}>
<Flex2 className="p-Menu Pancake_price__ bpt" {...Pancake_price__Props} {...Pancake_price__Cb} {...Pancake_price__IoProps}>
<Flex2 className="p-Menu Pancake_price__text_ bpt" {...Pancake_price__text_Props} {...Pancake_price__text_Cb} {...Pancake_price__text_IoProps}>
<TextBox2 className="p-Menu Pancake_price__txt_ bpt" {...Pancake_price__txt_Props} {...Pancake_price__txt_Cb} {...Pancake_price__txt_IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Flex2 className="p-Menu pancake_h1__ bpt" {...pancake_h1__Props} {...pancake_h1__Cb} {...pancake_h1__IoProps}>
<TextBox2 className="p-Menu Pancake_price___txt_ bpt" {...Pancake_price___txt_Props} {...Pancake_price___txt_Cb} {...Pancake_price___txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Pancake_price__para__ bpt" {...Pancake_price__para__Props} {...Pancake_price__para__Cb} {...Pancake_price__para__IoProps}>
<TextBox2 className="p-Menu Pancake_price__para___txt_ bpt" {...Pancake_price__para___txt_Props} {...Pancake_price__para___txt_Cb} {...Pancake_price__para___txt_IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_menu_Row_2__ bpt" {...Our_menu_Row_2__Props} {...Our_menu_Row_2__Cb} {...Our_menu_Row_2__IoProps}>
<Flex2 className="p-Menu Our_Menu_Image_5_ bpt" {...Our_Menu_Image_5_Props} {...Our_Menu_Image_5_Cb} {...Our_Menu_Image_5_IoProps}>
<Flex2 className="p-Menu Ice_cream_price_ bpt" {...Ice_cream_price_Props} {...Ice_cream_price_Cb} {...Ice_cream_price_IoProps}>
<Flex2 className="p-Menu Flex416 bpt" {...Flex416Props} {...Flex416Cb} {...Flex416IoProps}>
<TextBox2 className="p-Menu TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu Ice_cream_price_img_ bpt" {...Ice_cream_price_img_Props} {...Ice_cream_price_img_Cb} {...Ice_cream_price_img_IoProps}/>
<Flex2 className="p-Menu Ice_cream_h1_ bpt" {...Ice_cream_h1_Props} {...Ice_cream_h1_Cb} {...Ice_cream_h1_IoProps}>
<TextBox2 className="p-Menu Ice_cream_txt_ bpt" {...Ice_cream_txt_Props} {...Ice_cream_txt_Cb} {...Ice_cream_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Ice_cream_para__ bpt" {...Ice_cream_para__Props} {...Ice_cream_para__Cb} {...Ice_cream_para__IoProps}>
<TextBox2 className="p-Menu Ice_cream_para__txt_ bpt" {...Ice_cream_para__txt_Props} {...Ice_cream_para__txt_Cb} {...Ice_cream_para__txt_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_6_ bpt" {...Our_Menu_Image_6_Props} {...Our_Menu_Image_6_Cb} {...Our_Menu_Image_6_IoProps}>
<Flex2 className="p-Menu chick_burger_price_ bpt" {...chick_burger_price_Props} {...chick_burger_price_Cb} {...chick_burger_price_IoProps}>
<Flex2 className="p-Menu chick_burger_price_text_ bpt" {...chick_burger_price_text_Props} {...chick_burger_price_text_Cb} {...chick_burger_price_text_IoProps}>
<TextBox2 className="p-Menu chick_burger_price__txt_ bpt" {...chick_burger_price__txt_Props} {...chick_burger_price__txt_Cb} {...chick_burger_price__txt_IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu chick_burger_img__ bpt" {...chick_burger_img__Props} {...chick_burger_img__Cb} {...chick_burger_img__IoProps}/>
<Flex2 className="p-Menu chick_burger_h1__ bpt" {...chick_burger_h1__Props} {...chick_burger_h1__Cb} {...chick_burger_h1__IoProps}>
<TextBox2 className="p-Menu chick_burger_h1___txt__ bpt" {...chick_burger_h1___txt__Props} {...chick_burger_h1___txt__Cb} {...chick_burger_h1___txt__IoProps}/>
</Flex2>
<Flex2 className="p-Menu chick_burger_para__ bpt" {...chick_burger_para__Props} {...chick_burger_para__Cb} {...chick_burger_para__IoProps}>
<TextBox2 className="p-Menu chick_burger_h1__para_txt_ bpt" {...chick_burger_h1__para_txt_Props} {...chick_burger_h1__para_txt_Cb} {...chick_burger_h1__para_txt_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_7_ bpt" {...Our_Menu_Image_7_Props} {...Our_Menu_Image_7_Cb} {...Our_Menu_Image_7_IoProps}>
<Flex2 className="p-Menu egg_price_ bpt" {...egg_price_Props} {...egg_price_Cb} {...egg_price_IoProps}>
<Flex2 className="p-Menu egg_price_text_ bpt" {...egg_price_text_Props} {...egg_price_text_Cb} {...egg_price_text_IoProps}>
<TextBox2 className="p-Menu egg_price_text_txt_ bpt" {...egg_price_text_txt_Props} {...egg_price_text_txt_Cb} {...egg_price_text_txt_IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu egg_price_img__ bpt" {...egg_price_img__Props} {...egg_price_img__Cb} {...egg_price_img__IoProps}/>
<Flex2 className="p-Menu egg_price_h1_ bpt" {...egg_price_h1_Props} {...egg_price_h1_Cb} {...egg_price_h1_IoProps}>
<TextBox2 className="p-Menu egg_price_h1_txt_ bpt" {...egg_price_h1_txt_Props} {...egg_price_h1_txt_Cb} {...egg_price_h1_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu egg_price_h1_para_ bpt" {...egg_price_h1_para_Props} {...egg_price_h1_para_Cb} {...egg_price_h1_para_IoProps}>
<TextBox2 className="p-Menu egg_price_para__txt_ bpt" {...egg_price_para__txt_Props} {...egg_price_para__txt_Cb} {...egg_price_para__txt_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Our_Menu_Image_8_ bpt" {...Our_Menu_Image_8_Props} {...Our_Menu_Image_8_Cb} {...Our_Menu_Image_8_IoProps}>
<Flex2 className="p-Menu soda_Flex_ bpt" {...soda_Flex_Props} {...soda_Flex_Cb} {...soda_Flex_IoProps}>
<Flex2 className="p-Menu soda_img_ bpt" {...soda_img_Props} {...soda_img_Cb} {...soda_img_IoProps}>
<Flex2 className="p-Menu Flex414 bpt" {...Flex414Props} {...Flex414Cb} {...Flex414IoProps}>
<TextBox2 className="p-Menu TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex2>
</Flex2>
<Image2 className="p-Menu soda_Image_ bpt" {...soda_Image_Props} {...soda_Image_Cb} {...soda_Image_IoProps}/>
<Flex2 className="p-Menu soda_h1_ bpt" {...soda_h1_Props} {...soda_h1_Cb} {...soda_h1_IoProps}>
<TextBox2 className="p-Menu soda_h1_Txt_ bpt" {...soda_h1_Txt_Props} {...soda_h1_Txt_Cb} {...soda_h1_Txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu soda_Para_ bpt" {...soda_Para_Props} {...soda_Para_Cb} {...soda_Para_IoProps}>
<TextBox2 className="p-Menu soda_Para_Text_ bpt" {...soda_Para_Text_Props} {...soda_Para_Text_Cb} {...soda_Para_Text_IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Order_via_app_ bpt" {...Order_via_app_Props} {...Order_via_app_Cb} {...Order_via_app_IoProps}>
<Flex2 className="p-Menu order_h1_ bpt" {...order_h1_Props} {...order_h1_Cb} {...order_h1_IoProps}>
<TextBox2 className="p-Menu TextBoxcorder_ bpt" {...TextBoxcorder_Props} {...TextBoxcorder_Cb} {...TextBoxcorder_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Order_para_ bpt" {...Order_para_Props} {...Order_para_Cb} {...Order_para_IoProps}>
<TextBox2 className="p-Menu TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
</Flex2>
<Flex2 className="p-Menu order_via_app_apps_ bpt" {...order_via_app_apps_Props} {...order_via_app_apps_Cb} {...order_via_app_apps_IoProps}>
<Flex2 className="p-Menu Order_via_app_first_row_ bpt" {...Order_via_app_first_row_Props} {...Order_via_app_first_row_Cb} {...Order_via_app_first_row_IoProps}>
<Flex2 className="p-Menu uber_eats_ bpt" {...uber_eats_Props} {...uber_eats_Cb} {...uber_eats_IoProps}>
<Flex2 className="p-Menu _uber_ bpt" {..._uber_Props} {..._uber_Cb} {..._uber_IoProps}>
<Image2 className="p-Menu _uber_Image bpt" {..._uber_ImageProps} {..._uber_ImageCb} {..._uber_ImageIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Door_dash_ bpt" {...Door_dash_Props} {...Door_dash_Cb} {...Door_dash_IoProps}>
<Flex2 className="p-Menu Door_ bpt" {...Door_Props} {...Door_Cb} {...Door_IoProps}>
<Image2 className="p-Menu Door_dash_Image_ bpt" {...Door_dash_Image_Props} {...Door_dash_Image_Cb} {...Door_dash_Image_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Post_mates_ bpt" {...Post_mates_Props} {...Post_mates_Cb} {...Post_mates_IoProps}>
<Flex2 className="p-Menu post_ bpt" {...post_Props} {...post_Cb} {...post_IoProps}>
<Image2 className="p-Menu post_Image_ bpt" {...post_Image_Props} {...post_Image_Cb} {...post_Image_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Rappi_ bpt" {...Rappi_Props} {...Rappi_Cb} {...Rappi_IoProps}>
<Flex2 className="p-Menu _Rappi__ bpt" {..._Rappi__Props} {..._Rappi__Cb} {..._Rappi__IoProps}>
<Image2 className="p-Menu Rappi_Image_ bpt" {...Rappi_Image_Props} {...Rappi_Image_Cb} {...Rappi_Image_IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu order_via_app_second_row_ bpt" {...order_via_app_second_row_Props} {...order_via_app_second_row_Cb} {...order_via_app_second_row_IoProps}>
<Flex2 className="p-Menu Grub_hub_ bpt" {...Grub_hub_Props} {...Grub_hub_Cb} {...Grub_hub_IoProps}>
<Flex2 className="p-Menu Grub_img_ bpt" {...Grub_img_Props} {...Grub_img_Cb} {...Grub_img_IoProps}>
<Image2 className="p-Menu Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Didi_Food_ bpt" {...Didi_Food_Props} {...Didi_Food_Cb} {...Didi_Food_IoProps}>
<Flex2 className="p-Menu didi_ bpt" {...didi_Props} {...didi_Cb} {...didi_IoProps}>
<Image2 className="p-Menu didi_Image_ bpt" {...didi_Image_Props} {...didi_Image_Cb} {...didi_Image_IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Seam_less_ bpt" {...Seam_less_Props} {...Seam_less_Cb} {...Seam_less_IoProps}>
<Flex2 className="p-Menu Seam_ bpt" {...Seam_Props} {...Seam_Cb} {...Seam_IoProps}>
<Image2 className="p-Menu Seam_Image bpt" {...Seam_ImageProps} {...Seam_ImageCb} {...Seam_ImageIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Go_puff_ bpt" {...Go_puff_Props} {...Go_puff_Cb} {...Go_puff_IoProps}>
<Flex2 className="p-Menu _go_puff__ bpt" {..._go_puff__Props} {..._go_puff__Cb} {..._go_puff__IoProps}>
<Image2 className="p-Menu _go_puff__Image_ bpt" {..._go_puff__Image_Props} {..._go_puff__Image_Cb} {..._go_puff__Image_IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__ bpt" {...Menu_Footer__Props} {...Menu_Footer__Cb} {...Menu_Footer__IoProps}>
<Flex2 className="p-Menu Menu_Footer__L bpt" {...Menu_Footer__LProps} {...Menu_Footer__LCb} {...Menu_Footer__LIoProps}>
<Flex2 className="p-Menu restro_X_ bpt" {...restro_X_Props} {...restro_X_Cb} {...restro_X_IoProps}>
<Image2 className="p-Menu Restro_Image bpt" {...Restro_ImageProps} {...Restro_ImageCb} {...Restro_ImageIoProps}/>
</Flex2>
<Flex2 className="p-Menu restro_para_1 bpt" {...restro_para_1Props} {...restro_para_1Cb} {...restro_para_1IoProps}>
<TextBox2 className="p-Menu restro_para_1Text_ bpt" {...restro_para_1Text_Props} {...restro_para_1Text_Cb} {...restro_para_1Text_IoProps}/>
</Flex2>
<Flex2 className="p-Menu restro_stars_ bpt" {...restro_stars_Props} {...restro_stars_Cb} {...restro_stars_IoProps}>
<Image2 className="p-Menu restro_stars_Image1 bpt" {...restro_stars_Image1Props} {...restro_stars_Image1Cb} {...restro_stars_Image1IoProps}/>
<Image2 className="p-Menu restro_stars_Image2 bpt" {...restro_stars_Image2Props} {...restro_stars_Image2Cb} {...restro_stars_Image2IoProps}/>
<Image2 className="p-Menu restro_stars_Image3 bpt" {...restro_stars_Image3Props} {...restro_stars_Image3Cb} {...restro_stars_Image3IoProps}/>
<Image2 className="p-Menu restro_stars_Image4 bpt" {...restro_stars_Image4Props} {...restro_stars_Image4Cb} {...restro_stars_Image4IoProps}/>
<Image2 className="p-Menu restro_stars_Image5 bpt" {...restro_stars_Image5Props} {...restro_stars_Image5Cb} {...restro_stars_Image5IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__M bpt" {...Menu_Footer__MProps} {...Menu_Footer__MCb} {...Menu_Footer__MIoProps}>
<Flex2 className="p-Menu Menu_Footer__MFlex1_ bpt" {...Menu_Footer__MFlex1_Props} {...Menu_Footer__MFlex1_Cb} {...Menu_Footer__MFlex1_IoProps}>
<Flex2 className="p-Menu Menu_FM_1 bpt" {...Menu_FM_1Props} {...Menu_FM_1Cb} {...Menu_FM_1IoProps}>
<TextBox2 className="p-Menu Menu_FM_1Text bpt" {...Menu_FM_1TextProps} {...Menu_FM_1TextCb} {...Menu_FM_1TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_2 bpt" {...Menu_FM_2Props} {...Menu_FM_2Cb} {...Menu_FM_2IoProps}>
<TextBox2 className="p-Menu Menu_FM_2Text bpt" {...Menu_FM_2TextProps} {...Menu_FM_2TextCb} {...Menu_FM_2TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_3 bpt" {...Menu_FM_3Props} {...Menu_FM_3Cb} {...Menu_FM_3IoProps}>
<TextBox2 className="p-Menu Menu_FM_3Text bpt" {...Menu_FM_3TextProps} {...Menu_FM_3TextCb} {...Menu_FM_3TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_4 bpt" {...Menu_FM_4Props} {...Menu_FM_4Cb} {...Menu_FM_4IoProps}>
<TextBox2 className="p-Menu Menu_FM_4Text bpt" {...Menu_FM_4TextProps} {...Menu_FM_4TextCb} {...Menu_FM_4TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_5Text bpt" {...Menu_FM_5TextProps} {...Menu_FM_5TextCb} {...Menu_FM_5TextIoProps}>
<TextBox2 className="p-Menu TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_6 bpt" {...Menu_FM_6Props} {...Menu_FM_6Cb} {...Menu_FM_6IoProps}>
<TextBox2 className="p-Menu Menu_FM_6Text bpt" {...Menu_FM_6TextProps} {...Menu_FM_6TextCb} {...Menu_FM_6TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_7 bpt" {...Menu_FM_7Props} {...Menu_FM_7Cb} {...Menu_FM_7IoProps}>
<TextBox2 className="p-Menu Menu_FM_7Text bpt" {...Menu_FM_7TextProps} {...Menu_FM_7TextCb} {...Menu_FM_7TextIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_8 bpt" {...Menu_FM_8Props} {...Menu_FM_8Cb} {...Menu_FM_8IoProps}>
<TextBox2 className="p-Menu Menu_FM_8Text bpt" {...Menu_FM_8TextProps} {...Menu_FM_8TextCb} {...Menu_FM_8TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__MFlex2_ bpt" {...Menu_Footer__MFlex2_Props} {...Menu_Footer__MFlex2_Cb} {...Menu_Footer__MFlex2_IoProps}>
<Flex2 className="p-Menu Menu_FM_11 bpt" {...Menu_FM_11Props} {...Menu_FM_11Cb} {...Menu_FM_11IoProps}>
<TextBox2 className="p-Menu Menu_FM_11_txt_ bpt" {...Menu_FM_11_txt_Props} {...Menu_FM_11_txt_Cb} {...Menu_FM_11_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_12 bpt" {...Menu_FM_12Props} {...Menu_FM_12Cb} {...Menu_FM_12IoProps}>
<TextBox2 className="p-Menu Menu_FM_12_txt_ bpt" {...Menu_FM_12_txt_Props} {...Menu_FM_12_txt_Cb} {...Menu_FM_12_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_13 bpt" {...Menu_FM_13Props} {...Menu_FM_13Cb} {...Menu_FM_13IoProps}>
<TextBox2 className="p-Menu Menu_FM_13_txt_ bpt" {...Menu_FM_13_txt_Props} {...Menu_FM_13_txt_Cb} {...Menu_FM_13_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_14 bpt" {...Menu_FM_14Props} {...Menu_FM_14Cb} {...Menu_FM_14IoProps}>
<TextBox2 className="p-Menu Menu_FM_14_txt_ bpt" {...Menu_FM_14_txt_Props} {...Menu_FM_14_txt_Cb} {...Menu_FM_14_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_15 bpt" {...Menu_FM_15Props} {...Menu_FM_15Cb} {...Menu_FM_15IoProps}>
<TextBox2 className="p-Menu Menu_FM_15_txt_ bpt" {...Menu_FM_15_txt_Props} {...Menu_FM_15_txt_Cb} {...Menu_FM_15_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_16 bpt" {...Menu_FM_16Props} {...Menu_FM_16Cb} {...Menu_FM_16IoProps}>
<TextBox2 className="p-Menu Menu_FM_16_txt_ bpt" {...Menu_FM_16_txt_Props} {...Menu_FM_16_txt_Cb} {...Menu_FM_16_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_17 bpt" {...Menu_FM_17Props} {...Menu_FM_17Cb} {...Menu_FM_17IoProps}>
<TextBox2 className="p-Menu Menu_FM_17_txt_ bpt" {...Menu_FM_17_txt_Props} {...Menu_FM_17_txt_Cb} {...Menu_FM_17_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_FM_18 bpt" {...Menu_FM_18Props} {...Menu_FM_18Cb} {...Menu_FM_18IoProps}>
<TextBox2 className="p-Menu Menu_FM_18_txt_ bpt" {...Menu_FM_18_txt_Props} {...Menu_FM_18_txt_Cb} {...Menu_FM_18_txt_IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__R bpt" {...Menu_Footer__RProps} {...Menu_Footer__RCb} {...Menu_Footer__RIoProps}>
<Flex2 className="p-Menu Menu_Footer__R_head_ bpt" {...Menu_Footer__R_head_Props} {...Menu_Footer__R_head_Cb} {...Menu_Footer__R_head_IoProps}>
<TextBox2 className="p-Menu insta_head_txt_ bpt" {...insta_head_txt_Props} {...insta_head_txt_Cb} {...insta_head_txt_IoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__R_1 bpt" {...Menu_Footer__R_1Props} {...Menu_Footer__R_1Cb} {...Menu_Footer__R_1IoProps}>
<Flex2 className="p-Menu Menu_Footer__R_1_1 bpt" {...Menu_Footer__R_1_1Props} {...Menu_Footer__R_1_1Cb} {...Menu_Footer__R_1_1IoProps}>
<Image2 className="p-Menu R_1_1Image bpt" {...R_1_1ImageProps} {...R_1_1ImageCb} {...R_1_1ImageIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__R_1_2 bpt" {...Menu_Footer__R_1_2Props} {...Menu_Footer__R_1_2Cb} {...Menu_Footer__R_1_2IoProps}>
<Image2 className="p-Menu R_1_2_Image bpt" {...R_1_2_ImageProps} {...R_1_2_ImageCb} {...R_1_2_ImageIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__R_2 bpt" {...Menu_Footer__R_2Props} {...Menu_Footer__R_2Cb} {...Menu_Footer__R_2IoProps}>
<Flex2 className="p-Menu Menu_Footer__R_2_1 bpt" {...Menu_Footer__R_2_1Props} {...Menu_Footer__R_2_1Cb} {...Menu_Footer__R_2_1IoProps}>
<Image2 className="p-Menu R_2_1Image bpt" {...R_2_1ImageProps} {...R_2_1ImageCb} {...R_2_1ImageIoProps}/>
</Flex2>
<Flex2 className="p-Menu Menu_Footer__R_2_2 bpt" {...Menu_Footer__R_2_2Props} {...Menu_Footer__R_2_2Cb} {...Menu_Footer__R_2_2IoProps}>
<Image2 className="p-Menu R_2_2Image bpt" {...R_2_2ImageProps} {...R_2_2ImageCb} {...R_2_2ImageIoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
