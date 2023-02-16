import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useAbout_header_Cb, useAbout_header_Flex_Cb, useAbout_header_Flex_Left_Cb, useAbout_header_Flex_Left_Items_Cb, useAbout_header_LogoCb, useAbout_header_Flex_Right_Cb, useAbout_story_Cb, useAbout_story_Left_Cb, useAbout_story_Right_Cb, useAbout_second_story_Cb, useAbout_second_story_Left_Cb, useAbout_second_story_Left__companies_Cb, useAbout_companies_Flex_Cb, useAbout_companies_Flex_Left_Cb, useAbout_companies_Flex_Right_Cb, useFunder_met_and_first_burger_Cb, useFounder_met_and_first_burger_First_row_Cb, useFounder_met_and_first_burger_First_row_Left_Cb, useFounder_met_and_first_burger_First_row_Right_Cb, useFlex627Cb, useFlex628Cb, useFlex629Cb, useFounder_met_and_first_burger_second_row_Cb, useFounder_met_and_first_burger_second_row_Left_Cb, useFlex638Cb, useFlex639Cb, useFlex640Cb, useFlex644Cb, useFounder_met_and_first_burger_second_row_Right_Cb, useMeet_our_team_Cb, useMeet_our_team_Flex_Cb, useMeet_our_team_Flex_Heading_Cb, useMeet_our_team_Flex_Para_Cb, useMeet_our_team_Flex_Pictures_Cb, useMeet_our_team_Flex_Pictures_1_Cb, useMeet_our_team_Flex_Pictures_1_Name_Cb, useMeet_our_team_Flex_Pictures_1_Post_Cb, useMeet_our_team_Flex_Pictures_1_Post_Msg_Cb, useMeet_our_team_Flex_Pictures_2_Cb, useMeet_our_team_Flex_Pictures_2_Msg_Cb, useMeet_our_team_Flex_Pictures_2_Post_Cb, useMeet_our_team_Flex_Pictures_2_Name_Cb, useMeet_our_team_Flex_Pictures_3_Cb, useMeet_our_team_Flex_Pictures_3_Msg_Cb, useMeet_our_team_Flex_Pictures_3_Post_Cb, useMeet_our_team_Flex_Pictures_3_Name_Cb, useThe_value_Cb, useThe_value_Heading_Cb, useThe_value_Row_1_Cb, useThe_value_Row_1_Flex1_Cb, useThe_value_Row_1_Flex1_h1_Cb, useThe_value_Row_1_Flex1_h2_Cb, useThe_value_Row_1_Flex2_Cb, useThe_value_Row_1_Flex2_h2__Cb, useThe_value_Row_1_Flex2_h1_Cb, useThe_value_Row_1_Flex_3_Cb, useThe_value_Row_1_Flex3_h2_Cb, useThe_value_Row_1_Flex3__h1_Cb, useThe_value_Row_2_Cb, useThe_value_Row_2_Flex3_Cb, useThe_value_Row_2_Flex3_h1_Cb, useThe_value_Row_2_Flex3_h2_Cb, useThe_value_Row_2_Flex2_Cb, useThe_value_Row_2_Flex2_h1_Cb, useThe_value_Row_2_Flex2_h2__Cb, useThe_value_Row_2_Flex1_Cb, useThe_value_Row_2_Flex1_h2_Cb, useThe_value_Row_2_Flex1_h1_Cb, useAbout_our_article_Cb, useAbout_our_article_Images_Cb, useAbout_our_article_Images_FlexCb, useAbout_our_article_Images_Flex_Rimage_Cb, useAbout_our_article_Images_Flex_Rimage_Row2_Cb, useAbout_our_article_Images_Flex_Rimage_Row2_21_Cb, useAbout_our_article_Images_Flex_Rimage_Row2_22_Cb, useAbout_our_article_Images_Flex_Rimage_row1_Cb, useAbout_our_article_Images_Flex_Rimage_Row1_12_Cb, useAbout_our_article_Images_Flex_Rimage_Row1_11_Cb, useOur_article_Head_Cb, useOur_article_Head_R_Cb, useOur_article_Head_L_Cb, useAbout_Footer_Cb, useAbout_Footer_R_Cb, useAbout__Footer_R_HeadCb, useAbout_Footer_M_C1_3__Footer_R_1_Cb, useAbout_Footer_M_C1_3__Footer_R_1_11_Cb, useAbout_Footer_M_C1_3__Footer_R_1_12_img_Cb, useAbout_Footer_M_C1_3__Footer_R_2_Cb, useAbout_Footer_M_C1_3__Footer_R_2_22_img_Cb, useAbout_Footer_M_C1_3__Footer_R_2_21_img_Cb, useAbout_Footer_M_Cb, useAbout_Footer_M_C2_Cb, useAbout_Footer_M_C2_1Cb, useAbout_Footer_Footer_MCb, useAbout_Footer_M_C2_7Cb, useAbout_Footer_M_C2_8Cb, useAbout_Footer_M_C2_5Cb, useAbout_Footer_M_C2_6Cb, useAbout_Footer_M_C2_3Cb, useAbout_Footer_M_C2_4Cb, useAbout_Footer_M_C1_Cb, useAbout_Footer_M_C1_4_Cb, useAbout_Footer_M_C1_3_Cb, useAbout_Footer_M_C1_6_Cb, useAbout_Footer_M_C1_5_Cb, useAbout_Footer_M_C1_8_Cb, useAbout_Footer_M_C1_7_Cb, useAbout_Footer_M_C1_2_Cb, useAbout_Footer_M_C1_1_Cb, useAbout_Footer_L_Cb, useAbout_Footer_L_img_Cb, useAbout_Footer_L_Para_Cb, useAbout_Footer_L_Head_Cb, useAbout_header_Flex_Left_Items_Pages_Cb, useAbout_header_Flex_Left_Items_Menu_Cb, useAbout_header_Flex_Left_Items_About_Cb, useAbout_header_Flex_Left_Items_Home_Cb, useAbout_header_Flex_Left_Items_Cart_Cb, useAbout_header_Logo_ImageCb, useAbout_header_Flex_Right_Btn_color_Cb, useAbout_header_Flex_Right_Btn_white_Cb, useAbout_story_Left_Heading_Cb, useAbout_story_Left_Para_Cb, useAbout_story_Right_Image_Cb, useAbout_second_story_Left__second_story_Right_Cb, useAbout_second_story_Left_Image__Cb, useAbout_companies_Flex_Left_Text_Cb, useAbout_companies_Flex_Right_Doordash_Cb, useAbout_companies_Flex_Right_Postmates_Cb, useAbout_companies_Flex_Right_Rappi_Cb, useAbout_companies_Flex_Right_Uber_eatss__Cb, useImage145Cb, useButton40Cb, useTextBox254Cb, useTextBox256Cb, useTextBox257Cb, useTextBox262Cb, useTextBox263Cb, useTextBox264Cb, useButton41Cb, useImage147Cb, useMeet_our_team_Flex_Heading_Text_Cb, useMeet_our_team_Flex_Para_Text_Cb, useMeet_our_team_Flex_Pictures_1_Image_Cb, useTextBox267Cb, useMeet_our_team_Flex_Pictures_1_Post_Text_Cb, useMeet_our_team_Flex_Pictures_1_Msg_Text_Cb, useMeet_our_team_Flex_Pictures_2_Image_Cb, useMeet_our_team_Flex_Pictures_2_Msg_Text_Cb, useMeet_our_team_Flex_Pictures_2_Post_Text_Cb, useMeet_our_team_Flex_Pictures_2_Name_Text_Cb, useMeet_our_team_Flex_Pictures_3_Image_Cb, useMeet_our_team_Flex_Pictures_3_Msg_Text_Cb, useMeet_our_team_Flex_Pictures_3_Post_Name_Cb, useMeet_our_team_Flex_Pictures_3_Name_Text_Cb, useThe_value_Heading_Text_Cb, useThe_value_Row_1_Flex1_Image_Cb, useThe_value_Row_1_Flex1_h1_Text_Cb, useThe_value_Row_1_Flex1_h2_Text_Cb, useThe_value_Row_1_Flex2_Image_Cb, useThe_value_Row_1_Flex2_h2_Text_Cb, useThe_value_Row_1_Flex2_h1_Text_Cb, useThe_value_Row_1_Flex3_Image_Cb, useThe_value_Row_1_Flex3_h2_Text_Cb, useThe_value_Row_1_Flex3_h1_Text_Cb, useThe_value_Row_2_Flex3_Image_Cb, useThe_value_Row_2_Flex3_h1_Text_Cb, useThe_value_Row_2_Flex3_h2_Text_Cb, useThe_value_Row_2_Flex2_Image_Cb, useThe_value_Row_2_Flex2_h1_Text_Cb, useThe_value_Row_2_Flex2_h2_Text_Cb, useThe_value_Row_2_Flex1_ImageCb, useThe_value_Row_2_Flex1_h2_Text_Cb, useThe_value_Row_2_Flex1_h1_Text_Cb, useAbout_our_article_Images_Flex_Mimage_Cb, useAbout_our_article_Images_Flex_Limage_Cb, useAbout_our_article_Images_Flex_Rimage_Row2_21_img_Cb, useAbout_our_article_Images_Flex_Rimage_Row2_22_img_Cb, useAbout_our_article_Images_Flex_Rimage_Row1_12_img_Cb, useMenu_our_article_Images_Flex_Rimage_Row1_11_img_Cb, useOur_article_Head_R_Text_Cb, useOur_article_Head_L_Text_Cb, useAbout_Footer_M_C1_3__Footer_R_Head_Text_Cb, useAbout_Footer_M_C1_3__Footer_R_1_11_ImgCb, useAbout_Footer_M_C1_3__Footer_R_1_12_img_ImageCb, useAbout_Footer_M_C1_3__Footer_R_2_22_imgg_Cb, useAbout_Footer_M_C1_3__Footer_R_2_21_imgg_Cb, useAbout_Footer_M_C2_1_TextCb, useAbout_Footer_Footer_M_TextCb, useAbout_Footer_M_C2_7_TextCb, useAbout_Footer_M_C2_8_TextCb, useAbout_Footer_M_C2_5_TextCb, useAbout_Footer_M_C2_6_txt_Cb, useAbout_Footer_M_C2_3_TextCb, useAbout_Footer_M_C2_4_TextCb, useAbout_Footer_M_C1_4_txt_Cb, useAbout_Footer_M_C1_3_txt_Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox313Cb, useAbout_Footer_M_C1_2_txt_Cb, useAbout_Footer_M_C1_1_txt_Cb, useAbout_Footer_L_img_5Cb, useAbout_Footer_L_img_4Cb, useAbout_Footer_L_img_3Cb, useAbout_Footer_L_img_2Cb, useAbout_Footer_L_img_1Cb, useAbout_Footer_L_Para_Text_Cb, useAbout_Footer_L_Head_img_Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
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

  const About_header_Props = useStore((state)=>state["About"]["About_header_"]);
const About_header_IoProps = useIoStore((state)=>state["About"]["About_header_"]);
const About_header_Cb = useAbout_header_Cb()
const About_header_Flex_Props = useStore((state)=>state["About"]["About_header_Flex_"]);
const About_header_Flex_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_"]);
const About_header_Flex_Cb = useAbout_header_Flex_Cb()
const About_header_Flex_Left_Props = useStore((state)=>state["About"]["About_header_Flex_Left_"]);
const About_header_Flex_Left_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_"]);
const About_header_Flex_Left_Cb = useAbout_header_Flex_Left_Cb()
const About_header_Flex_Left_Items_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_"]);
const About_header_Flex_Left_Items_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_"]);
const About_header_Flex_Left_Items_Cb = useAbout_header_Flex_Left_Items_Cb()
const About_header_LogoProps = useStore((state)=>state["About"]["About_header_Logo"]);
const About_header_LogoIoProps = useIoStore((state)=>state["About"]["About_header_Logo"]);
const About_header_LogoCb = useAbout_header_LogoCb()
const About_header_Flex_Right_Props = useStore((state)=>state["About"]["About_header_Flex_Right_"]);
const About_header_Flex_Right_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Right_"]);
const About_header_Flex_Right_Cb = useAbout_header_Flex_Right_Cb()
const About_story_Props = useStore((state)=>state["About"]["About_story_"]);
const About_story_IoProps = useIoStore((state)=>state["About"]["About_story_"]);
const About_story_Cb = useAbout_story_Cb()
const About_story_Left_Props = useStore((state)=>state["About"]["About_story_Left_"]);
const About_story_Left_IoProps = useIoStore((state)=>state["About"]["About_story_Left_"]);
const About_story_Left_Cb = useAbout_story_Left_Cb()
const About_story_Right_Props = useStore((state)=>state["About"]["About_story_Right_"]);
const About_story_Right_IoProps = useIoStore((state)=>state["About"]["About_story_Right_"]);
const About_story_Right_Cb = useAbout_story_Right_Cb()
const About_second_story_Props = useStore((state)=>state["About"]["About_second_story_"]);
const About_second_story_IoProps = useIoStore((state)=>state["About"]["About_second_story_"]);
const About_second_story_Cb = useAbout_second_story_Cb()
const About_second_story_Left_Props = useStore((state)=>state["About"]["About_second_story_Left_"]);
const About_second_story_Left_IoProps = useIoStore((state)=>state["About"]["About_second_story_Left_"]);
const About_second_story_Left_Cb = useAbout_second_story_Left_Cb()
const About_second_story_Left__companies_Props = useStore((state)=>state["About"]["About_second_story_Left__companies_"]);
const About_second_story_Left__companies_IoProps = useIoStore((state)=>state["About"]["About_second_story_Left__companies_"]);
const About_second_story_Left__companies_Cb = useAbout_second_story_Left__companies_Cb()
const About_companies_Flex_Props = useStore((state)=>state["About"]["About_companies_Flex_"]);
const About_companies_Flex_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_"]);
const About_companies_Flex_Cb = useAbout_companies_Flex_Cb()
const About_companies_Flex_Left_Props = useStore((state)=>state["About"]["About_companies_Flex_Left_"]);
const About_companies_Flex_Left_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Left_"]);
const About_companies_Flex_Left_Cb = useAbout_companies_Flex_Left_Cb()
const About_companies_Flex_Right_Props = useStore((state)=>state["About"]["About_companies_Flex_Right_"]);
const About_companies_Flex_Right_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Right_"]);
const About_companies_Flex_Right_Cb = useAbout_companies_Flex_Right_Cb()
const Funder_met_and_first_burger_Props = useStore((state)=>state["About"]["Funder_met_and_first_burger_"]);
const Funder_met_and_first_burger_IoProps = useIoStore((state)=>state["About"]["Funder_met_and_first_burger_"]);
const Funder_met_and_first_burger_Cb = useFunder_met_and_first_burger_Cb()
const Founder_met_and_first_burger_First_row_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_"]);
const Founder_met_and_first_burger_First_row_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_"]);
const Founder_met_and_first_burger_First_row_Cb = useFounder_met_and_first_burger_First_row_Cb()
const Founder_met_and_first_burger_First_row_Left_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_Left_"]);
const Founder_met_and_first_burger_First_row_Left_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_Left_"]);
const Founder_met_and_first_burger_First_row_Left_Cb = useFounder_met_and_first_burger_First_row_Left_Cb()
const Founder_met_and_first_burger_First_row_Right_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_Right_"]);
const Founder_met_and_first_burger_First_row_Right_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_First_row_Right_"]);
const Founder_met_and_first_burger_First_row_Right_Cb = useFounder_met_and_first_burger_First_row_Right_Cb()
const Flex627Props = useStore((state)=>state["About"]["Flex627"]);
const Flex627IoProps = useIoStore((state)=>state["About"]["Flex627"]);
const Flex627Cb = useFlex627Cb()
const Flex628Props = useStore((state)=>state["About"]["Flex628"]);
const Flex628IoProps = useIoStore((state)=>state["About"]["Flex628"]);
const Flex628Cb = useFlex628Cb()
const Flex629Props = useStore((state)=>state["About"]["Flex629"]);
const Flex629IoProps = useIoStore((state)=>state["About"]["Flex629"]);
const Flex629Cb = useFlex629Cb()
const Founder_met_and_first_burger_second_row_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_"]);
const Founder_met_and_first_burger_second_row_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_"]);
const Founder_met_and_first_burger_second_row_Cb = useFounder_met_and_first_burger_second_row_Cb()
const Founder_met_and_first_burger_second_row_Left_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_Left_"]);
const Founder_met_and_first_burger_second_row_Left_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_Left_"]);
const Founder_met_and_first_burger_second_row_Left_Cb = useFounder_met_and_first_burger_second_row_Left_Cb()
const Flex638Props = useStore((state)=>state["About"]["Flex638"]);
const Flex638IoProps = useIoStore((state)=>state["About"]["Flex638"]);
const Flex638Cb = useFlex638Cb()
const Flex639Props = useStore((state)=>state["About"]["Flex639"]);
const Flex639IoProps = useIoStore((state)=>state["About"]["Flex639"]);
const Flex639Cb = useFlex639Cb()
const Flex640Props = useStore((state)=>state["About"]["Flex640"]);
const Flex640IoProps = useIoStore((state)=>state["About"]["Flex640"]);
const Flex640Cb = useFlex640Cb()
const Flex644Props = useStore((state)=>state["About"]["Flex644"]);
const Flex644IoProps = useIoStore((state)=>state["About"]["Flex644"]);
const Flex644Cb = useFlex644Cb()
const Founder_met_and_first_burger_second_row_Right_Props = useStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_Right_"]);
const Founder_met_and_first_burger_second_row_Right_IoProps = useIoStore((state)=>state["About"]["Founder_met_and_first_burger_second_row_Right_"]);
const Founder_met_and_first_burger_second_row_Right_Cb = useFounder_met_and_first_burger_second_row_Right_Cb()
const Meet_our_team_Props = useStore((state)=>state["About"]["Meet_our_team_"]);
const Meet_our_team_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_"]);
const Meet_our_team_Cb = useMeet_our_team_Cb()
const Meet_our_team_Flex_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_"]);
const Meet_our_team_Flex_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_"]);
const Meet_our_team_Flex_Cb = useMeet_our_team_Flex_Cb()
const Meet_our_team_Flex_Heading_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Heading_"]);
const Meet_our_team_Flex_Heading_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Heading_"]);
const Meet_our_team_Flex_Heading_Cb = useMeet_our_team_Flex_Heading_Cb()
const Meet_our_team_Flex_Para_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Para_"]);
const Meet_our_team_Flex_Para_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Para_"]);
const Meet_our_team_Flex_Para_Cb = useMeet_our_team_Flex_Para_Cb()
const Meet_our_team_Flex_Pictures_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_"]);
const Meet_our_team_Flex_Pictures_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_"]);
const Meet_our_team_Flex_Pictures_Cb = useMeet_our_team_Flex_Pictures_Cb()
const Meet_our_team_Flex_Pictures_1_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_"]);
const Meet_our_team_Flex_Pictures_1_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_"]);
const Meet_our_team_Flex_Pictures_1_Cb = useMeet_our_team_Flex_Pictures_1_Cb()
const Meet_our_team_Flex_Pictures_1_Name_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Name_"]);
const Meet_our_team_Flex_Pictures_1_Name_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Name_"]);
const Meet_our_team_Flex_Pictures_1_Name_Cb = useMeet_our_team_Flex_Pictures_1_Name_Cb()
const Meet_our_team_Flex_Pictures_1_Post_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_"]);
const Meet_our_team_Flex_Pictures_1_Post_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_"]);
const Meet_our_team_Flex_Pictures_1_Post_Cb = useMeet_our_team_Flex_Pictures_1_Post_Cb()
const Meet_our_team_Flex_Pictures_1_Post_Msg_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_Msg_"]);
const Meet_our_team_Flex_Pictures_1_Post_Msg_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_Msg_"]);
const Meet_our_team_Flex_Pictures_1_Post_Msg_Cb = useMeet_our_team_Flex_Pictures_1_Post_Msg_Cb()
const Meet_our_team_Flex_Pictures_2_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_"]);
const Meet_our_team_Flex_Pictures_2_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_"]);
const Meet_our_team_Flex_Pictures_2_Cb = useMeet_our_team_Flex_Pictures_2_Cb()
const Meet_our_team_Flex_Pictures_2_Msg_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Msg_"]);
const Meet_our_team_Flex_Pictures_2_Msg_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Msg_"]);
const Meet_our_team_Flex_Pictures_2_Msg_Cb = useMeet_our_team_Flex_Pictures_2_Msg_Cb()
const Meet_our_team_Flex_Pictures_2_Post_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Post_"]);
const Meet_our_team_Flex_Pictures_2_Post_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Post_"]);
const Meet_our_team_Flex_Pictures_2_Post_Cb = useMeet_our_team_Flex_Pictures_2_Post_Cb()
const Meet_our_team_Flex_Pictures_2_Name_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Name_"]);
const Meet_our_team_Flex_Pictures_2_Name_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Name_"]);
const Meet_our_team_Flex_Pictures_2_Name_Cb = useMeet_our_team_Flex_Pictures_2_Name_Cb()
const Meet_our_team_Flex_Pictures_3_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_"]);
const Meet_our_team_Flex_Pictures_3_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_"]);
const Meet_our_team_Flex_Pictures_3_Cb = useMeet_our_team_Flex_Pictures_3_Cb()
const Meet_our_team_Flex_Pictures_3_Msg_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Msg_"]);
const Meet_our_team_Flex_Pictures_3_Msg_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Msg_"]);
const Meet_our_team_Flex_Pictures_3_Msg_Cb = useMeet_our_team_Flex_Pictures_3_Msg_Cb()
const Meet_our_team_Flex_Pictures_3_Post_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Post_"]);
const Meet_our_team_Flex_Pictures_3_Post_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Post_"]);
const Meet_our_team_Flex_Pictures_3_Post_Cb = useMeet_our_team_Flex_Pictures_3_Post_Cb()
const Meet_our_team_Flex_Pictures_3_Name_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Name_"]);
const Meet_our_team_Flex_Pictures_3_Name_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Name_"]);
const Meet_our_team_Flex_Pictures_3_Name_Cb = useMeet_our_team_Flex_Pictures_3_Name_Cb()
const The_value_Props = useStore((state)=>state["About"]["The_value_"]);
const The_value_IoProps = useIoStore((state)=>state["About"]["The_value_"]);
const The_value_Cb = useThe_value_Cb()
const The_value_Heading_Props = useStore((state)=>state["About"]["The_value_Heading_"]);
const The_value_Heading_IoProps = useIoStore((state)=>state["About"]["The_value_Heading_"]);
const The_value_Heading_Cb = useThe_value_Heading_Cb()
const The_value_Row_1_Props = useStore((state)=>state["About"]["The_value_Row_1_"]);
const The_value_Row_1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_"]);
const The_value_Row_1_Cb = useThe_value_Row_1_Cb()
const The_value_Row_1_Flex1_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_"]);
const The_value_Row_1_Flex1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_"]);
const The_value_Row_1_Flex1_Cb = useThe_value_Row_1_Flex1_Cb()
const The_value_Row_1_Flex1_h1_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_h1_"]);
const The_value_Row_1_Flex1_h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_h1_"]);
const The_value_Row_1_Flex1_h1_Cb = useThe_value_Row_1_Flex1_h1_Cb()
const The_value_Row_1_Flex1_h2_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_h2_"]);
const The_value_Row_1_Flex1_h2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_h2_"]);
const The_value_Row_1_Flex1_h2_Cb = useThe_value_Row_1_Flex1_h2_Cb()
const The_value_Row_1_Flex2_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_"]);
const The_value_Row_1_Flex2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_"]);
const The_value_Row_1_Flex2_Cb = useThe_value_Row_1_Flex2_Cb()
const The_value_Row_1_Flex2_h2__Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_h2__"]);
const The_value_Row_1_Flex2_h2__IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_h2__"]);
const The_value_Row_1_Flex2_h2__Cb = useThe_value_Row_1_Flex2_h2__Cb()
const The_value_Row_1_Flex2_h1_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_h1_"]);
const The_value_Row_1_Flex2_h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_h1_"]);
const The_value_Row_1_Flex2_h1_Cb = useThe_value_Row_1_Flex2_h1_Cb()
const The_value_Row_1_Flex_3_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex_3_"]);
const The_value_Row_1_Flex_3_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex_3_"]);
const The_value_Row_1_Flex_3_Cb = useThe_value_Row_1_Flex_3_Cb()
const The_value_Row_1_Flex3_h2_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex3_h2_"]);
const The_value_Row_1_Flex3_h2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex3_h2_"]);
const The_value_Row_1_Flex3_h2_Cb = useThe_value_Row_1_Flex3_h2_Cb()
const The_value_Row_1_Flex3__h1_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex3__h1_"]);
const The_value_Row_1_Flex3__h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex3__h1_"]);
const The_value_Row_1_Flex3__h1_Cb = useThe_value_Row_1_Flex3__h1_Cb()
const The_value_Row_2_Props = useStore((state)=>state["About"]["The_value_Row_2_"]);
const The_value_Row_2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_"]);
const The_value_Row_2_Cb = useThe_value_Row_2_Cb()
const The_value_Row_2_Flex3_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_"]);
const The_value_Row_2_Flex3_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_"]);
const The_value_Row_2_Flex3_Cb = useThe_value_Row_2_Flex3_Cb()
const The_value_Row_2_Flex3_h1_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_h1_"]);
const The_value_Row_2_Flex3_h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_h1_"]);
const The_value_Row_2_Flex3_h1_Cb = useThe_value_Row_2_Flex3_h1_Cb()
const The_value_Row_2_Flex3_h2_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_h2_"]);
const The_value_Row_2_Flex3_h2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_h2_"]);
const The_value_Row_2_Flex3_h2_Cb = useThe_value_Row_2_Flex3_h2_Cb()
const The_value_Row_2_Flex2_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_"]);
const The_value_Row_2_Flex2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_"]);
const The_value_Row_2_Flex2_Cb = useThe_value_Row_2_Flex2_Cb()
const The_value_Row_2_Flex2_h1_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_h1_"]);
const The_value_Row_2_Flex2_h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_h1_"]);
const The_value_Row_2_Flex2_h1_Cb = useThe_value_Row_2_Flex2_h1_Cb()
const The_value_Row_2_Flex2_h2__Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_h2__"]);
const The_value_Row_2_Flex2_h2__IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_h2__"]);
const The_value_Row_2_Flex2_h2__Cb = useThe_value_Row_2_Flex2_h2__Cb()
const The_value_Row_2_Flex1_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex1_"]);
const The_value_Row_2_Flex1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_"]);
const The_value_Row_2_Flex1_Cb = useThe_value_Row_2_Flex1_Cb()
const The_value_Row_2_Flex1_h2_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex1_h2_"]);
const The_value_Row_2_Flex1_h2_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_h2_"]);
const The_value_Row_2_Flex1_h2_Cb = useThe_value_Row_2_Flex1_h2_Cb()
const The_value_Row_2_Flex1_h1_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex1_h1_"]);
const The_value_Row_2_Flex1_h1_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_h1_"]);
const The_value_Row_2_Flex1_h1_Cb = useThe_value_Row_2_Flex1_h1_Cb()
const About_our_article_Props = useStore((state)=>state["About"]["About_our_article_"]);
const About_our_article_IoProps = useIoStore((state)=>state["About"]["About_our_article_"]);
const About_our_article_Cb = useAbout_our_article_Cb()
const About_our_article_Images_Props = useStore((state)=>state["About"]["About_our_article_Images_"]);
const About_our_article_Images_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_"]);
const About_our_article_Images_Cb = useAbout_our_article_Images_Cb()
const About_our_article_Images_FlexProps = useStore((state)=>state["About"]["About_our_article_Images_Flex"]);
const About_our_article_Images_FlexIoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex"]);
const About_our_article_Images_FlexCb = useAbout_our_article_Images_FlexCb()
const About_our_article_Images_Flex_Rimage_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_"]);
const About_our_article_Images_Flex_Rimage_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_"]);
const About_our_article_Images_Flex_Rimage_Cb = useAbout_our_article_Images_Flex_Rimage_Cb()
const About_our_article_Images_Flex_Rimage_Row2_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_"]);
const About_our_article_Images_Flex_Rimage_Row2_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_"]);
const About_our_article_Images_Flex_Rimage_Row2_Cb = useAbout_our_article_Images_Flex_Rimage_Row2_Cb()
const About_our_article_Images_Flex_Rimage_Row2_21_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_21_"]);
const About_our_article_Images_Flex_Rimage_Row2_21_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_21_"]);
const About_our_article_Images_Flex_Rimage_Row2_21_Cb = useAbout_our_article_Images_Flex_Rimage_Row2_21_Cb()
const About_our_article_Images_Flex_Rimage_Row2_22_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_22_"]);
const About_our_article_Images_Flex_Rimage_Row2_22_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_22_"]);
const About_our_article_Images_Flex_Rimage_Row2_22_Cb = useAbout_our_article_Images_Flex_Rimage_Row2_22_Cb()
const About_our_article_Images_Flex_Rimage_row1_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_row1_"]);
const About_our_article_Images_Flex_Rimage_row1_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_row1_"]);
const About_our_article_Images_Flex_Rimage_row1_Cb = useAbout_our_article_Images_Flex_Rimage_row1_Cb()
const About_our_article_Images_Flex_Rimage_Row1_12_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_12_"]);
const About_our_article_Images_Flex_Rimage_Row1_12_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_12_"]);
const About_our_article_Images_Flex_Rimage_Row1_12_Cb = useAbout_our_article_Images_Flex_Rimage_Row1_12_Cb()
const About_our_article_Images_Flex_Rimage_Row1_11_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_11_"]);
const About_our_article_Images_Flex_Rimage_Row1_11_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_11_"]);
const About_our_article_Images_Flex_Rimage_Row1_11_Cb = useAbout_our_article_Images_Flex_Rimage_Row1_11_Cb()
const Our_article_Head_Props = useStore((state)=>state["About"]["Our_article_Head_"]);
const Our_article_Head_IoProps = useIoStore((state)=>state["About"]["Our_article_Head_"]);
const Our_article_Head_Cb = useOur_article_Head_Cb()
const Our_article_Head_R_Props = useStore((state)=>state["About"]["Our_article_Head_R_"]);
const Our_article_Head_R_IoProps = useIoStore((state)=>state["About"]["Our_article_Head_R_"]);
const Our_article_Head_R_Cb = useOur_article_Head_R_Cb()
const Our_article_Head_L_Props = useStore((state)=>state["About"]["Our_article_Head_L_"]);
const Our_article_Head_L_IoProps = useIoStore((state)=>state["About"]["Our_article_Head_L_"]);
const Our_article_Head_L_Cb = useOur_article_Head_L_Cb()
const About_Footer_Props = useStore((state)=>state["About"]["About_Footer_"]);
const About_Footer_IoProps = useIoStore((state)=>state["About"]["About_Footer_"]);
const About_Footer_Cb = useAbout_Footer_Cb()
const About_Footer_R_Props = useStore((state)=>state["About"]["About_Footer_R_"]);
const About_Footer_R_IoProps = useIoStore((state)=>state["About"]["About_Footer_R_"]);
const About_Footer_R_Cb = useAbout_Footer_R_Cb()
const About__Footer_R_HeadProps = useStore((state)=>state["About"]["About__Footer_R_Head"]);
const About__Footer_R_HeadIoProps = useIoStore((state)=>state["About"]["About__Footer_R_Head"]);
const About__Footer_R_HeadCb = useAbout__Footer_R_HeadCb()
const About_Footer_M_C1_3__Footer_R_1_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_"]);
const About_Footer_M_C1_3__Footer_R_1_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_"]);
const About_Footer_M_C1_3__Footer_R_1_Cb = useAbout_Footer_M_C1_3__Footer_R_1_Cb()
const About_Footer_M_C1_3__Footer_R_1_11_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_11_"]);
const About_Footer_M_C1_3__Footer_R_1_11_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_11_"]);
const About_Footer_M_C1_3__Footer_R_1_11_Cb = useAbout_Footer_M_C1_3__Footer_R_1_11_Cb()
const About_Footer_M_C1_3__Footer_R_1_12_img_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_12_img_"]);
const About_Footer_M_C1_3__Footer_R_1_12_img_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_12_img_"]);
const About_Footer_M_C1_3__Footer_R_1_12_img_Cb = useAbout_Footer_M_C1_3__Footer_R_1_12_img_Cb()
const About_Footer_M_C1_3__Footer_R_2_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_"]);
const About_Footer_M_C1_3__Footer_R_2_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_"]);
const About_Footer_M_C1_3__Footer_R_2_Cb = useAbout_Footer_M_C1_3__Footer_R_2_Cb()
const About_Footer_M_C1_3__Footer_R_2_22_img_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_22_img_"]);
const About_Footer_M_C1_3__Footer_R_2_22_img_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_22_img_"]);
const About_Footer_M_C1_3__Footer_R_2_22_img_Cb = useAbout_Footer_M_C1_3__Footer_R_2_22_img_Cb()
const About_Footer_M_C1_3__Footer_R_2_21_img_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_21_img_"]);
const About_Footer_M_C1_3__Footer_R_2_21_img_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_21_img_"]);
const About_Footer_M_C1_3__Footer_R_2_21_img_Cb = useAbout_Footer_M_C1_3__Footer_R_2_21_img_Cb()
const About_Footer_M_Props = useStore((state)=>state["About"]["About_Footer_M_"]);
const About_Footer_M_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_"]);
const About_Footer_M_Cb = useAbout_Footer_M_Cb()
const About_Footer_M_C2_Props = useStore((state)=>state["About"]["About_Footer_M_C2_"]);
const About_Footer_M_C2_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_"]);
const About_Footer_M_C2_Cb = useAbout_Footer_M_C2_Cb()
const About_Footer_M_C2_1Props = useStore((state)=>state["About"]["About_Footer_M_C2_1"]);
const About_Footer_M_C2_1IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_1"]);
const About_Footer_M_C2_1Cb = useAbout_Footer_M_C2_1Cb()
const About_Footer_Footer_MProps = useStore((state)=>state["About"]["About_Footer_Footer_M"]);
const About_Footer_Footer_MIoProps = useIoStore((state)=>state["About"]["About_Footer_Footer_M"]);
const About_Footer_Footer_MCb = useAbout_Footer_Footer_MCb()
const About_Footer_M_C2_7Props = useStore((state)=>state["About"]["About_Footer_M_C2_7"]);
const About_Footer_M_C2_7IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_7"]);
const About_Footer_M_C2_7Cb = useAbout_Footer_M_C2_7Cb()
const About_Footer_M_C2_8Props = useStore((state)=>state["About"]["About_Footer_M_C2_8"]);
const About_Footer_M_C2_8IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_8"]);
const About_Footer_M_C2_8Cb = useAbout_Footer_M_C2_8Cb()
const About_Footer_M_C2_5Props = useStore((state)=>state["About"]["About_Footer_M_C2_5"]);
const About_Footer_M_C2_5IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_5"]);
const About_Footer_M_C2_5Cb = useAbout_Footer_M_C2_5Cb()
const About_Footer_M_C2_6Props = useStore((state)=>state["About"]["About_Footer_M_C2_6"]);
const About_Footer_M_C2_6IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_6"]);
const About_Footer_M_C2_6Cb = useAbout_Footer_M_C2_6Cb()
const About_Footer_M_C2_3Props = useStore((state)=>state["About"]["About_Footer_M_C2_3"]);
const About_Footer_M_C2_3IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_3"]);
const About_Footer_M_C2_3Cb = useAbout_Footer_M_C2_3Cb()
const About_Footer_M_C2_4Props = useStore((state)=>state["About"]["About_Footer_M_C2_4"]);
const About_Footer_M_C2_4IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_4"]);
const About_Footer_M_C2_4Cb = useAbout_Footer_M_C2_4Cb()
const About_Footer_M_C1_Props = useStore((state)=>state["About"]["About_Footer_M_C1_"]);
const About_Footer_M_C1_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_"]);
const About_Footer_M_C1_Cb = useAbout_Footer_M_C1_Cb()
const About_Footer_M_C1_4_Props = useStore((state)=>state["About"]["About_Footer_M_C1_4_"]);
const About_Footer_M_C1_4_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_4_"]);
const About_Footer_M_C1_4_Cb = useAbout_Footer_M_C1_4_Cb()
const About_Footer_M_C1_3_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3_"]);
const About_Footer_M_C1_3_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3_"]);
const About_Footer_M_C1_3_Cb = useAbout_Footer_M_C1_3_Cb()
const About_Footer_M_C1_6_Props = useStore((state)=>state["About"]["About_Footer_M_C1_6_"]);
const About_Footer_M_C1_6_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_6_"]);
const About_Footer_M_C1_6_Cb = useAbout_Footer_M_C1_6_Cb()
const About_Footer_M_C1_5_Props = useStore((state)=>state["About"]["About_Footer_M_C1_5_"]);
const About_Footer_M_C1_5_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_5_"]);
const About_Footer_M_C1_5_Cb = useAbout_Footer_M_C1_5_Cb()
const About_Footer_M_C1_8_Props = useStore((state)=>state["About"]["About_Footer_M_C1_8_"]);
const About_Footer_M_C1_8_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_8_"]);
const About_Footer_M_C1_8_Cb = useAbout_Footer_M_C1_8_Cb()
const About_Footer_M_C1_7_Props = useStore((state)=>state["About"]["About_Footer_M_C1_7_"]);
const About_Footer_M_C1_7_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_7_"]);
const About_Footer_M_C1_7_Cb = useAbout_Footer_M_C1_7_Cb()
const About_Footer_M_C1_2_Props = useStore((state)=>state["About"]["About_Footer_M_C1_2_"]);
const About_Footer_M_C1_2_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_2_"]);
const About_Footer_M_C1_2_Cb = useAbout_Footer_M_C1_2_Cb()
const About_Footer_M_C1_1_Props = useStore((state)=>state["About"]["About_Footer_M_C1_1_"]);
const About_Footer_M_C1_1_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_1_"]);
const About_Footer_M_C1_1_Cb = useAbout_Footer_M_C1_1_Cb()
const About_Footer_L_Props = useStore((state)=>state["About"]["About_Footer_L_"]);
const About_Footer_L_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_"]);
const About_Footer_L_Cb = useAbout_Footer_L_Cb()
const About_Footer_L_img_Props = useStore((state)=>state["About"]["About_Footer_L_img_"]);
const About_Footer_L_img_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_"]);
const About_Footer_L_img_Cb = useAbout_Footer_L_img_Cb()
const About_Footer_L_Para_Props = useStore((state)=>state["About"]["About_Footer_L_Para_"]);
const About_Footer_L_Para_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_Para_"]);
const About_Footer_L_Para_Cb = useAbout_Footer_L_Para_Cb()
const About_Footer_L_Head_Props = useStore((state)=>state["About"]["About_Footer_L_Head_"]);
const About_Footer_L_Head_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_Head_"]);
const About_Footer_L_Head_Cb = useAbout_Footer_L_Head_Cb()
const About_header_Flex_Left_Items_Pages_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_Pages_"]);
const About_header_Flex_Left_Items_Pages_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_Pages_"]);
const About_header_Flex_Left_Items_Pages_Cb = useAbout_header_Flex_Left_Items_Pages_Cb()
const About_header_Flex_Left_Items_Menu_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_Menu_"]);
const About_header_Flex_Left_Items_Menu_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_Menu_"]);
const About_header_Flex_Left_Items_Menu_Cb = useAbout_header_Flex_Left_Items_Menu_Cb()
const About_header_Flex_Left_Items_About_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_About_"]);
const About_header_Flex_Left_Items_About_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_About_"]);
const About_header_Flex_Left_Items_About_Cb = useAbout_header_Flex_Left_Items_About_Cb()
const About_header_Flex_Left_Items_Home_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_Home_"]);
const About_header_Flex_Left_Items_Home_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_Home_"]);
const About_header_Flex_Left_Items_Home_Cb = useAbout_header_Flex_Left_Items_Home_Cb()
const About_header_Flex_Left_Items_Cart_Props = useStore((state)=>state["About"]["About_header_Flex_Left_Items_Cart_"]);
const About_header_Flex_Left_Items_Cart_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Left_Items_Cart_"]);
const About_header_Flex_Left_Items_Cart_Cb = useAbout_header_Flex_Left_Items_Cart_Cb()
const About_header_Logo_ImageProps = useStore((state)=>state["About"]["About_header_Logo_Image"]);
const About_header_Logo_ImageIoProps = useIoStore((state)=>state["About"]["About_header_Logo_Image"]);
const About_header_Logo_ImageCb = useAbout_header_Logo_ImageCb()
const About_header_Flex_Right_Btn_color_Props = useStore((state)=>state["About"]["About_header_Flex_Right_Btn_color_"]);
const About_header_Flex_Right_Btn_color_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Right_Btn_color_"]);
const About_header_Flex_Right_Btn_color_Cb = useAbout_header_Flex_Right_Btn_color_Cb()
const About_header_Flex_Right_Btn_white_Props = useStore((state)=>state["About"]["About_header_Flex_Right_Btn_white_"]);
const About_header_Flex_Right_Btn_white_IoProps = useIoStore((state)=>state["About"]["About_header_Flex_Right_Btn_white_"]);
const About_header_Flex_Right_Btn_white_Cb = useAbout_header_Flex_Right_Btn_white_Cb()
const About_story_Left_Heading_Props = useStore((state)=>state["About"]["About_story_Left_Heading_"]);
const About_story_Left_Heading_IoProps = useIoStore((state)=>state["About"]["About_story_Left_Heading_"]);
const About_story_Left_Heading_Cb = useAbout_story_Left_Heading_Cb()
const About_story_Left_Para_Props = useStore((state)=>state["About"]["About_story_Left_Para_"]);
const About_story_Left_Para_IoProps = useIoStore((state)=>state["About"]["About_story_Left_Para_"]);
const About_story_Left_Para_Cb = useAbout_story_Left_Para_Cb()
const About_story_Right_Image_Props = useStore((state)=>state["About"]["About_story_Right_Image_"]);
const About_story_Right_Image_IoProps = useIoStore((state)=>state["About"]["About_story_Right_Image_"]);
const About_story_Right_Image_Cb = useAbout_story_Right_Image_Cb()
const About_second_story_Left__second_story_Right_Props = useStore((state)=>state["About"]["About_second_story_Left__second_story_Right_"]);
const About_second_story_Left__second_story_Right_IoProps = useIoStore((state)=>state["About"]["About_second_story_Left__second_story_Right_"]);
const About_second_story_Left__second_story_Right_Cb = useAbout_second_story_Left__second_story_Right_Cb()
const About_second_story_Left_Image__Props = useStore((state)=>state["About"]["About_second_story_Left_Image__"]);
const About_second_story_Left_Image__IoProps = useIoStore((state)=>state["About"]["About_second_story_Left_Image__"]);
const About_second_story_Left_Image__Cb = useAbout_second_story_Left_Image__Cb()
const About_companies_Flex_Left_Text_Props = useStore((state)=>state["About"]["About_companies_Flex_Left_Text_"]);
const About_companies_Flex_Left_Text_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Left_Text_"]);
const About_companies_Flex_Left_Text_Cb = useAbout_companies_Flex_Left_Text_Cb()
const About_companies_Flex_Right_Doordash_Props = useStore((state)=>state["About"]["About_companies_Flex_Right_Doordash_"]);
const About_companies_Flex_Right_Doordash_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Right_Doordash_"]);
const About_companies_Flex_Right_Doordash_Cb = useAbout_companies_Flex_Right_Doordash_Cb()
const About_companies_Flex_Right_Postmates_Props = useStore((state)=>state["About"]["About_companies_Flex_Right_Postmates_"]);
const About_companies_Flex_Right_Postmates_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Right_Postmates_"]);
const About_companies_Flex_Right_Postmates_Cb = useAbout_companies_Flex_Right_Postmates_Cb()
const About_companies_Flex_Right_Rappi_Props = useStore((state)=>state["About"]["About_companies_Flex_Right_Rappi_"]);
const About_companies_Flex_Right_Rappi_IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Right_Rappi_"]);
const About_companies_Flex_Right_Rappi_Cb = useAbout_companies_Flex_Right_Rappi_Cb()
const About_companies_Flex_Right_Uber_eatss__Props = useStore((state)=>state["About"]["About_companies_Flex_Right_Uber_eatss__"]);
const About_companies_Flex_Right_Uber_eatss__IoProps = useIoStore((state)=>state["About"]["About_companies_Flex_Right_Uber_eatss__"]);
const About_companies_Flex_Right_Uber_eatss__Cb = useAbout_companies_Flex_Right_Uber_eatss__Cb()
const Image145Props = useStore((state)=>state["About"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["About"]["Image145"]);
const Image145Cb = useImage145Cb()
const Button40Props = useStore((state)=>state["About"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["About"]["Button40"]);
const Button40Cb = useButton40Cb()
const TextBox254Props = useStore((state)=>state["About"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["About"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox256Props = useStore((state)=>state["About"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["About"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["About"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["About"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox262Props = useStore((state)=>state["About"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["About"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox263Props = useStore((state)=>state["About"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["About"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox264Props = useStore((state)=>state["About"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["About"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const Button41Props = useStore((state)=>state["About"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["About"]["Button41"]);
const Button41Cb = useButton41Cb()
const Image147Props = useStore((state)=>state["About"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["About"]["Image147"]);
const Image147Cb = useImage147Cb()
const Meet_our_team_Flex_Heading_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Heading_Text_"]);
const Meet_our_team_Flex_Heading_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Heading_Text_"]);
const Meet_our_team_Flex_Heading_Text_Cb = useMeet_our_team_Flex_Heading_Text_Cb()
const Meet_our_team_Flex_Para_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Para_Text_"]);
const Meet_our_team_Flex_Para_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Para_Text_"]);
const Meet_our_team_Flex_Para_Text_Cb = useMeet_our_team_Flex_Para_Text_Cb()
const Meet_our_team_Flex_Pictures_1_Image_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Image_"]);
const Meet_our_team_Flex_Pictures_1_Image_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Image_"]);
const Meet_our_team_Flex_Pictures_1_Image_Cb = useMeet_our_team_Flex_Pictures_1_Image_Cb()
const TextBox267Props = useStore((state)=>state["About"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["About"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const Meet_our_team_Flex_Pictures_1_Post_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_Text_"]);
const Meet_our_team_Flex_Pictures_1_Post_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Post_Text_"]);
const Meet_our_team_Flex_Pictures_1_Post_Text_Cb = useMeet_our_team_Flex_Pictures_1_Post_Text_Cb()
const Meet_our_team_Flex_Pictures_1_Msg_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_1_Msg_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_1_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_1_Msg_Text_Cb = useMeet_our_team_Flex_Pictures_1_Msg_Text_Cb()
const Meet_our_team_Flex_Pictures_2_Image_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Image_"]);
const Meet_our_team_Flex_Pictures_2_Image_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Image_"]);
const Meet_our_team_Flex_Pictures_2_Image_Cb = useMeet_our_team_Flex_Pictures_2_Image_Cb()
const Meet_our_team_Flex_Pictures_2_Msg_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_2_Msg_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_2_Msg_Text_Cb = useMeet_our_team_Flex_Pictures_2_Msg_Text_Cb()
const Meet_our_team_Flex_Pictures_2_Post_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Post_Text_"]);
const Meet_our_team_Flex_Pictures_2_Post_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Post_Text_"]);
const Meet_our_team_Flex_Pictures_2_Post_Text_Cb = useMeet_our_team_Flex_Pictures_2_Post_Text_Cb()
const Meet_our_team_Flex_Pictures_2_Name_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Name_Text_"]);
const Meet_our_team_Flex_Pictures_2_Name_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_2_Name_Text_"]);
const Meet_our_team_Flex_Pictures_2_Name_Text_Cb = useMeet_our_team_Flex_Pictures_2_Name_Text_Cb()
const Meet_our_team_Flex_Pictures_3_Image_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Image_"]);
const Meet_our_team_Flex_Pictures_3_Image_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Image_"]);
const Meet_our_team_Flex_Pictures_3_Image_Cb = useMeet_our_team_Flex_Pictures_3_Image_Cb()
const Meet_our_team_Flex_Pictures_3_Msg_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_3_Msg_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Msg_Text_"]);
const Meet_our_team_Flex_Pictures_3_Msg_Text_Cb = useMeet_our_team_Flex_Pictures_3_Msg_Text_Cb()
const Meet_our_team_Flex_Pictures_3_Post_Name_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Post_Name_"]);
const Meet_our_team_Flex_Pictures_3_Post_Name_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Post_Name_"]);
const Meet_our_team_Flex_Pictures_3_Post_Name_Cb = useMeet_our_team_Flex_Pictures_3_Post_Name_Cb()
const Meet_our_team_Flex_Pictures_3_Name_Text_Props = useStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Name_Text_"]);
const Meet_our_team_Flex_Pictures_3_Name_Text_IoProps = useIoStore((state)=>state["About"]["Meet_our_team_Flex_Pictures_3_Name_Text_"]);
const Meet_our_team_Flex_Pictures_3_Name_Text_Cb = useMeet_our_team_Flex_Pictures_3_Name_Text_Cb()
const The_value_Heading_Text_Props = useStore((state)=>state["About"]["The_value_Heading_Text_"]);
const The_value_Heading_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Heading_Text_"]);
const The_value_Heading_Text_Cb = useThe_value_Heading_Text_Cb()
const The_value_Row_1_Flex1_Image_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_Image_"]);
const The_value_Row_1_Flex1_Image_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_Image_"]);
const The_value_Row_1_Flex1_Image_Cb = useThe_value_Row_1_Flex1_Image_Cb()
const The_value_Row_1_Flex1_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_h1_Text_"]);
const The_value_Row_1_Flex1_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_h1_Text_"]);
const The_value_Row_1_Flex1_h1_Text_Cb = useThe_value_Row_1_Flex1_h1_Text_Cb()
const The_value_Row_1_Flex1_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex1_h2_Text_"]);
const The_value_Row_1_Flex1_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex1_h2_Text_"]);
const The_value_Row_1_Flex1_h2_Text_Cb = useThe_value_Row_1_Flex1_h2_Text_Cb()
const The_value_Row_1_Flex2_Image_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_Image_"]);
const The_value_Row_1_Flex2_Image_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_Image_"]);
const The_value_Row_1_Flex2_Image_Cb = useThe_value_Row_1_Flex2_Image_Cb()
const The_value_Row_1_Flex2_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_h2_Text_"]);
const The_value_Row_1_Flex2_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_h2_Text_"]);
const The_value_Row_1_Flex2_h2_Text_Cb = useThe_value_Row_1_Flex2_h2_Text_Cb()
const The_value_Row_1_Flex2_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex2_h1_Text_"]);
const The_value_Row_1_Flex2_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex2_h1_Text_"]);
const The_value_Row_1_Flex2_h1_Text_Cb = useThe_value_Row_1_Flex2_h1_Text_Cb()
const The_value_Row_1_Flex3_Image_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex3_Image_"]);
const The_value_Row_1_Flex3_Image_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex3_Image_"]);
const The_value_Row_1_Flex3_Image_Cb = useThe_value_Row_1_Flex3_Image_Cb()
const The_value_Row_1_Flex3_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex3_h2_Text_"]);
const The_value_Row_1_Flex3_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex3_h2_Text_"]);
const The_value_Row_1_Flex3_h2_Text_Cb = useThe_value_Row_1_Flex3_h2_Text_Cb()
const The_value_Row_1_Flex3_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_1_Flex3_h1_Text_"]);
const The_value_Row_1_Flex3_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_1_Flex3_h1_Text_"]);
const The_value_Row_1_Flex3_h1_Text_Cb = useThe_value_Row_1_Flex3_h1_Text_Cb()
const The_value_Row_2_Flex3_Image_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_Image_"]);
const The_value_Row_2_Flex3_Image_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_Image_"]);
const The_value_Row_2_Flex3_Image_Cb = useThe_value_Row_2_Flex3_Image_Cb()
const The_value_Row_2_Flex3_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_h1_Text_"]);
const The_value_Row_2_Flex3_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_h1_Text_"]);
const The_value_Row_2_Flex3_h1_Text_Cb = useThe_value_Row_2_Flex3_h1_Text_Cb()
const The_value_Row_2_Flex3_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex3_h2_Text_"]);
const The_value_Row_2_Flex3_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex3_h2_Text_"]);
const The_value_Row_2_Flex3_h2_Text_Cb = useThe_value_Row_2_Flex3_h2_Text_Cb()
const The_value_Row_2_Flex2_Image_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_Image_"]);
const The_value_Row_2_Flex2_Image_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_Image_"]);
const The_value_Row_2_Flex2_Image_Cb = useThe_value_Row_2_Flex2_Image_Cb()
const The_value_Row_2_Flex2_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_h1_Text_"]);
const The_value_Row_2_Flex2_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_h1_Text_"]);
const The_value_Row_2_Flex2_h1_Text_Cb = useThe_value_Row_2_Flex2_h1_Text_Cb()
const The_value_Row_2_Flex2_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex2_h2_Text_"]);
const The_value_Row_2_Flex2_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex2_h2_Text_"]);
const The_value_Row_2_Flex2_h2_Text_Cb = useThe_value_Row_2_Flex2_h2_Text_Cb()
const The_value_Row_2_Flex1_ImageProps = useStore((state)=>state["About"]["The_value_Row_2_Flex1_Image"]);
const The_value_Row_2_Flex1_ImageIoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_Image"]);
const The_value_Row_2_Flex1_ImageCb = useThe_value_Row_2_Flex1_ImageCb()
const The_value_Row_2_Flex1_h2_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex1_h2_Text_"]);
const The_value_Row_2_Flex1_h2_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_h2_Text_"]);
const The_value_Row_2_Flex1_h2_Text_Cb = useThe_value_Row_2_Flex1_h2_Text_Cb()
const The_value_Row_2_Flex1_h1_Text_Props = useStore((state)=>state["About"]["The_value_Row_2_Flex1_h1_Text_"]);
const The_value_Row_2_Flex1_h1_Text_IoProps = useIoStore((state)=>state["About"]["The_value_Row_2_Flex1_h1_Text_"]);
const The_value_Row_2_Flex1_h1_Text_Cb = useThe_value_Row_2_Flex1_h1_Text_Cb()
const About_our_article_Images_Flex_Mimage_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Mimage_"]);
const About_our_article_Images_Flex_Mimage_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Mimage_"]);
const About_our_article_Images_Flex_Mimage_Cb = useAbout_our_article_Images_Flex_Mimage_Cb()
const About_our_article_Images_Flex_Limage_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Limage_"]);
const About_our_article_Images_Flex_Limage_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Limage_"]);
const About_our_article_Images_Flex_Limage_Cb = useAbout_our_article_Images_Flex_Limage_Cb()
const About_our_article_Images_Flex_Rimage_Row2_21_img_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_21_img_"]);
const About_our_article_Images_Flex_Rimage_Row2_21_img_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_21_img_"]);
const About_our_article_Images_Flex_Rimage_Row2_21_img_Cb = useAbout_our_article_Images_Flex_Rimage_Row2_21_img_Cb()
const About_our_article_Images_Flex_Rimage_Row2_22_img_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_22_img_"]);
const About_our_article_Images_Flex_Rimage_Row2_22_img_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row2_22_img_"]);
const About_our_article_Images_Flex_Rimage_Row2_22_img_Cb = useAbout_our_article_Images_Flex_Rimage_Row2_22_img_Cb()
const About_our_article_Images_Flex_Rimage_Row1_12_img_Props = useStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_12_img_"]);
const About_our_article_Images_Flex_Rimage_Row1_12_img_IoProps = useIoStore((state)=>state["About"]["About_our_article_Images_Flex_Rimage_Row1_12_img_"]);
const About_our_article_Images_Flex_Rimage_Row1_12_img_Cb = useAbout_our_article_Images_Flex_Rimage_Row1_12_img_Cb()
const Menu_our_article_Images_Flex_Rimage_Row1_11_img_Props = useStore((state)=>state["About"]["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"]);
const Menu_our_article_Images_Flex_Rimage_Row1_11_img_IoProps = useIoStore((state)=>state["About"]["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"]);
const Menu_our_article_Images_Flex_Rimage_Row1_11_img_Cb = useMenu_our_article_Images_Flex_Rimage_Row1_11_img_Cb()
const Our_article_Head_R_Text_Props = useStore((state)=>state["About"]["Our_article_Head_R_Text_"]);
const Our_article_Head_R_Text_IoProps = useIoStore((state)=>state["About"]["Our_article_Head_R_Text_"]);
const Our_article_Head_R_Text_Cb = useOur_article_Head_R_Text_Cb()
const Our_article_Head_L_Text_Props = useStore((state)=>state["About"]["Our_article_Head_L_Text_"]);
const Our_article_Head_L_Text_IoProps = useIoStore((state)=>state["About"]["Our_article_Head_L_Text_"]);
const Our_article_Head_L_Text_Cb = useOur_article_Head_L_Text_Cb()
const About_Footer_M_C1_3__Footer_R_Head_Text_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_Head_Text_"]);
const About_Footer_M_C1_3__Footer_R_Head_Text_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_Head_Text_"]);
const About_Footer_M_C1_3__Footer_R_Head_Text_Cb = useAbout_Footer_M_C1_3__Footer_R_Head_Text_Cb()
const About_Footer_M_C1_3__Footer_R_1_11_ImgProps = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_11_Img"]);
const About_Footer_M_C1_3__Footer_R_1_11_ImgIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_11_Img"]);
const About_Footer_M_C1_3__Footer_R_1_11_ImgCb = useAbout_Footer_M_C1_3__Footer_R_1_11_ImgCb()
const About_Footer_M_C1_3__Footer_R_1_12_img_ImageProps = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_12_img_Image"]);
const About_Footer_M_C1_3__Footer_R_1_12_img_ImageIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_1_12_img_Image"]);
const About_Footer_M_C1_3__Footer_R_1_12_img_ImageCb = useAbout_Footer_M_C1_3__Footer_R_1_12_img_ImageCb()
const About_Footer_M_C1_3__Footer_R_2_22_imgg_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_22_imgg_"]);
const About_Footer_M_C1_3__Footer_R_2_22_imgg_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_22_imgg_"]);
const About_Footer_M_C1_3__Footer_R_2_22_imgg_Cb = useAbout_Footer_M_C1_3__Footer_R_2_22_imgg_Cb()
const About_Footer_M_C1_3__Footer_R_2_21_imgg_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_21_imgg_"]);
const About_Footer_M_C1_3__Footer_R_2_21_imgg_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3__Footer_R_2_21_imgg_"]);
const About_Footer_M_C1_3__Footer_R_2_21_imgg_Cb = useAbout_Footer_M_C1_3__Footer_R_2_21_imgg_Cb()
const About_Footer_M_C2_1_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_1_Text"]);
const About_Footer_M_C2_1_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_1_Text"]);
const About_Footer_M_C2_1_TextCb = useAbout_Footer_M_C2_1_TextCb()
const About_Footer_Footer_M_TextProps = useStore((state)=>state["About"]["About_Footer_Footer_M_Text"]);
const About_Footer_Footer_M_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_Footer_M_Text"]);
const About_Footer_Footer_M_TextCb = useAbout_Footer_Footer_M_TextCb()
const About_Footer_M_C2_7_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_7_Text"]);
const About_Footer_M_C2_7_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_7_Text"]);
const About_Footer_M_C2_7_TextCb = useAbout_Footer_M_C2_7_TextCb()
const About_Footer_M_C2_8_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_8_Text"]);
const About_Footer_M_C2_8_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_8_Text"]);
const About_Footer_M_C2_8_TextCb = useAbout_Footer_M_C2_8_TextCb()
const About_Footer_M_C2_5_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_5_Text"]);
const About_Footer_M_C2_5_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_5_Text"]);
const About_Footer_M_C2_5_TextCb = useAbout_Footer_M_C2_5_TextCb()
const About_Footer_M_C2_6_txt_Props = useStore((state)=>state["About"]["About_Footer_M_C2_6_txt_"]);
const About_Footer_M_C2_6_txt_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_6_txt_"]);
const About_Footer_M_C2_6_txt_Cb = useAbout_Footer_M_C2_6_txt_Cb()
const About_Footer_M_C2_3_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_3_Text"]);
const About_Footer_M_C2_3_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_3_Text"]);
const About_Footer_M_C2_3_TextCb = useAbout_Footer_M_C2_3_TextCb()
const About_Footer_M_C2_4_TextProps = useStore((state)=>state["About"]["About_Footer_M_C2_4_Text"]);
const About_Footer_M_C2_4_TextIoProps = useIoStore((state)=>state["About"]["About_Footer_M_C2_4_Text"]);
const About_Footer_M_C2_4_TextCb = useAbout_Footer_M_C2_4_TextCb()
const About_Footer_M_C1_4_txt_Props = useStore((state)=>state["About"]["About_Footer_M_C1_4_txt_"]);
const About_Footer_M_C1_4_txt_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_4_txt_"]);
const About_Footer_M_C1_4_txt_Cb = useAbout_Footer_M_C1_4_txt_Cb()
const About_Footer_M_C1_3_txt_Props = useStore((state)=>state["About"]["About_Footer_M_C1_3_txt_"]);
const About_Footer_M_C1_3_txt_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_3_txt_"]);
const About_Footer_M_C1_3_txt_Cb = useAbout_Footer_M_C1_3_txt_Cb()
const TextBox310Props = useStore((state)=>state["About"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["About"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["About"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["About"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["About"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["About"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox313Props = useStore((state)=>state["About"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["About"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const About_Footer_M_C1_2_txt_Props = useStore((state)=>state["About"]["About_Footer_M_C1_2_txt_"]);
const About_Footer_M_C1_2_txt_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_2_txt_"]);
const About_Footer_M_C1_2_txt_Cb = useAbout_Footer_M_C1_2_txt_Cb()
const About_Footer_M_C1_1_txt_Props = useStore((state)=>state["About"]["About_Footer_M_C1_1_txt_"]);
const About_Footer_M_C1_1_txt_IoProps = useIoStore((state)=>state["About"]["About_Footer_M_C1_1_txt_"]);
const About_Footer_M_C1_1_txt_Cb = useAbout_Footer_M_C1_1_txt_Cb()
const About_Footer_L_img_5Props = useStore((state)=>state["About"]["About_Footer_L_img_5"]);
const About_Footer_L_img_5IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_5"]);
const About_Footer_L_img_5Cb = useAbout_Footer_L_img_5Cb()
const About_Footer_L_img_4Props = useStore((state)=>state["About"]["About_Footer_L_img_4"]);
const About_Footer_L_img_4IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_4"]);
const About_Footer_L_img_4Cb = useAbout_Footer_L_img_4Cb()
const About_Footer_L_img_3Props = useStore((state)=>state["About"]["About_Footer_L_img_3"]);
const About_Footer_L_img_3IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_3"]);
const About_Footer_L_img_3Cb = useAbout_Footer_L_img_3Cb()
const About_Footer_L_img_2Props = useStore((state)=>state["About"]["About_Footer_L_img_2"]);
const About_Footer_L_img_2IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_2"]);
const About_Footer_L_img_2Cb = useAbout_Footer_L_img_2Cb()
const About_Footer_L_img_1Props = useStore((state)=>state["About"]["About_Footer_L_img_1"]);
const About_Footer_L_img_1IoProps = useIoStore((state)=>state["About"]["About_Footer_L_img_1"]);
const About_Footer_L_img_1Cb = useAbout_Footer_L_img_1Cb()
const About_Footer_L_Para_Text_Props = useStore((state)=>state["About"]["About_Footer_L_Para_Text_"]);
const About_Footer_L_Para_Text_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_Para_Text_"]);
const About_Footer_L_Para_Text_Cb = useAbout_Footer_L_Para_Text_Cb()
const About_Footer_L_Head_img_Props = useStore((state)=>state["About"]["About_Footer_L_Head_img_"]);
const About_Footer_L_Head_img_IoProps = useIoStore((state)=>state["About"]["About_Footer_L_Head_img_"]);
const About_Footer_L_Head_img_Cb = useAbout_Footer_L_Head_img_Cb()

  return (<>
  <Div1 className="p-About About_header_ bpt" {...About_header_Props} {...About_header_Cb} {...About_header_IoProps}>
<Flex1 className="p-About About_header_Flex_ bpt" {...About_header_Flex_Props} {...About_header_Flex_Cb} {...About_header_Flex_IoProps}>
<Flex1 className="p-About About_header_Flex_Left_ bpt" {...About_header_Flex_Left_Props} {...About_header_Flex_Left_Cb} {...About_header_Flex_Left_IoProps}>
<Flex1 className="p-About About_header_Logo bpt" {...About_header_LogoProps} {...About_header_LogoCb} {...About_header_LogoIoProps}>
<Image1 className="p-About About_header_Logo_Image bpt" {...About_header_Logo_ImageProps} {...About_header_Logo_ImageCb} {...About_header_Logo_ImageIoProps}/>
</Flex1>
<Flex1 className="p-About About_header_Flex_Left_Items_ bpt" {...About_header_Flex_Left_Items_Props} {...About_header_Flex_Left_Items_Cb} {...About_header_Flex_Left_Items_IoProps}>
<Link1 className="p-About About_header_Flex_Left_Items_Home_ bpt" {...About_header_Flex_Left_Items_Home_Props} {...About_header_Flex_Left_Items_Home_Cb} {...About_header_Flex_Left_Items_Home_IoProps}/>
<Link1 className="p-About About_header_Flex_Left_Items_About_ bpt" {...About_header_Flex_Left_Items_About_Props} {...About_header_Flex_Left_Items_About_Cb} {...About_header_Flex_Left_Items_About_IoProps}/>
<Link1 className="p-About About_header_Flex_Left_Items_Menu_ bpt" {...About_header_Flex_Left_Items_Menu_Props} {...About_header_Flex_Left_Items_Menu_Cb} {...About_header_Flex_Left_Items_Menu_IoProps}/>
<Link1 className="p-About About_header_Flex_Left_Items_Pages_ bpt" {...About_header_Flex_Left_Items_Pages_Props} {...About_header_Flex_Left_Items_Pages_Cb} {...About_header_Flex_Left_Items_Pages_IoProps}/>
<Link1 className="p-About About_header_Flex_Left_Items_Cart_ bpt" {...About_header_Flex_Left_Items_Cart_Props} {...About_header_Flex_Left_Items_Cart_Cb} {...About_header_Flex_Left_Items_Cart_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_header_Flex_Right_ bpt" {...About_header_Flex_Right_Props} {...About_header_Flex_Right_Cb} {...About_header_Flex_Right_IoProps}>
<Button1 className="p-About About_header_Flex_Right_Btn_white_ bpt" {...About_header_Flex_Right_Btn_white_Props} {...About_header_Flex_Right_Btn_white_Cb} {...About_header_Flex_Right_Btn_white_IoProps}/>
<Button1 className="p-About About_header_Flex_Right_Btn_color_ bpt" {...About_header_Flex_Right_Btn_color_Props} {...About_header_Flex_Right_Btn_color_Cb} {...About_header_Flex_Right_Btn_color_IoProps}/>
</Flex1>
</Flex1>
</Div1>
<Flex1 className="p-About About_story_ bpt" {...About_story_Props} {...About_story_Cb} {...About_story_IoProps}>
<Flex1 className="p-About About_story_Left_ bpt" {...About_story_Left_Props} {...About_story_Left_Cb} {...About_story_Left_IoProps}>
<TextBox1 className="p-About About_story_Left_Heading_ bpt" {...About_story_Left_Heading_Props} {...About_story_Left_Heading_Cb} {...About_story_Left_Heading_IoProps}/>
<TextBox1 className="p-About About_story_Left_Para_ bpt" {...About_story_Left_Para_Props} {...About_story_Left_Para_Cb} {...About_story_Left_Para_IoProps}/>
</Flex1>
<Flex1 className="p-About About_story_Right_ bpt" {...About_story_Right_Props} {...About_story_Right_Cb} {...About_story_Right_IoProps}>
<Image1 className="p-About About_story_Right_Image_ bpt" {...About_story_Right_Image_Props} {...About_story_Right_Image_Cb} {...About_story_Right_Image_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_second_story_ bpt" {...About_second_story_Props} {...About_second_story_Cb} {...About_second_story_IoProps}>
<Flex1 className="p-About About_second_story_Left_ bpt" {...About_second_story_Left_Props} {...About_second_story_Left_Cb} {...About_second_story_Left_IoProps}>
<Image1 className="p-About About_second_story_Left_Image__ bpt" {...About_second_story_Left_Image__Props} {...About_second_story_Left_Image__Cb} {...About_second_story_Left_Image__IoProps}/>
</Flex1>
<Flex1 className="p-About About_second_story_Left__second_story_Right_ bpt" {...About_second_story_Left__second_story_Right_Props} {...About_second_story_Left__second_story_Right_Cb} {...About_second_story_Left__second_story_Right_IoProps}/>
</Flex1>
<Flex1 className="p-About About_second_story_Left__companies_ bpt" {...About_second_story_Left__companies_Props} {...About_second_story_Left__companies_Cb} {...About_second_story_Left__companies_IoProps}>
<Flex1 className="p-About About_companies_Flex_ bpt" {...About_companies_Flex_Props} {...About_companies_Flex_Cb} {...About_companies_Flex_IoProps}>
<Flex1 className="p-About About_companies_Flex_Left_ bpt" {...About_companies_Flex_Left_Props} {...About_companies_Flex_Left_Cb} {...About_companies_Flex_Left_IoProps}>
<TextBox1 className="p-About About_companies_Flex_Left_Text_ bpt" {...About_companies_Flex_Left_Text_Props} {...About_companies_Flex_Left_Text_Cb} {...About_companies_Flex_Left_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About About_companies_Flex_Right_ bpt" {...About_companies_Flex_Right_Props} {...About_companies_Flex_Right_Cb} {...About_companies_Flex_Right_IoProps}>
<Image1 className="p-About About_companies_Flex_Right_Doordash_ bpt" {...About_companies_Flex_Right_Doordash_Props} {...About_companies_Flex_Right_Doordash_Cb} {...About_companies_Flex_Right_Doordash_IoProps}/>
<Image1 className="p-About About_companies_Flex_Right_Postmates_ bpt" {...About_companies_Flex_Right_Postmates_Props} {...About_companies_Flex_Right_Postmates_Cb} {...About_companies_Flex_Right_Postmates_IoProps}/>
<Image1 className="p-About About_companies_Flex_Right_Rappi_ bpt" {...About_companies_Flex_Right_Rappi_Props} {...About_companies_Flex_Right_Rappi_Cb} {...About_companies_Flex_Right_Rappi_IoProps}/>
<Image1 className="p-About About_companies_Flex_Right_Uber_eatss__ bpt" {...About_companies_Flex_Right_Uber_eatss__Props} {...About_companies_Flex_Right_Uber_eatss__Cb} {...About_companies_Flex_Right_Uber_eatss__IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Funder_met_and_first_burger_ bpt" {...Funder_met_and_first_burger_Props} {...Funder_met_and_first_burger_Cb} {...Funder_met_and_first_burger_IoProps}>
<Flex1 className="p-About Founder_met_and_first_burger_First_row_ bpt" {...Founder_met_and_first_burger_First_row_Props} {...Founder_met_and_first_burger_First_row_Cb} {...Founder_met_and_first_burger_First_row_IoProps}>
<Flex1 className="p-About Founder_met_and_first_burger_First_row_Left_ bpt" {...Founder_met_and_first_burger_First_row_Left_Props} {...Founder_met_and_first_burger_First_row_Left_Cb} {...Founder_met_and_first_burger_First_row_Left_IoProps}>
<Image1 className="p-About Image145 bpt" {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
</Flex1>
<Flex1 className="p-About Founder_met_and_first_burger_First_row_Right_ bpt" {...Founder_met_and_first_burger_First_row_Right_Props} {...Founder_met_and_first_burger_First_row_Right_Cb} {...Founder_met_and_first_burger_First_row_Right_IoProps}>
<Flex1 className="p-About Flex627 bpt" {...Flex627Props} {...Flex627Cb} {...Flex627IoProps}>
<TextBox1 className="p-About TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
</Flex1>
<Flex1 className="p-About Flex628 bpt" {...Flex628Props} {...Flex628Cb} {...Flex628IoProps}>
<TextBox1 className="p-About TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
</Flex1>
<Flex1 className="p-About Flex629 bpt" {...Flex629Props} {...Flex629Cb} {...Flex629IoProps}>
<TextBox1 className="p-About TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex1>
<Button1 className="p-About Button40 bpt" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Founder_met_and_first_burger_second_row_ bpt" {...Founder_met_and_first_burger_second_row_Props} {...Founder_met_and_first_burger_second_row_Cb} {...Founder_met_and_first_burger_second_row_IoProps}>
<Flex1 className="p-About Founder_met_and_first_burger_second_row_Left_ bpt" {...Founder_met_and_first_burger_second_row_Left_Props} {...Founder_met_and_first_burger_second_row_Left_Cb} {...Founder_met_and_first_burger_second_row_Left_IoProps}>
<Flex1 className="p-About Flex640 bpt" {...Flex640Props} {...Flex640Cb} {...Flex640IoProps}>
<TextBox1 className="p-About TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
</Flex1>
<Flex1 className="p-About Flex639 bpt" {...Flex639Props} {...Flex639Cb} {...Flex639IoProps}>
<TextBox1 className="p-About TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex1>
<Flex1 className="p-About Flex638 bpt" {...Flex638Props} {...Flex638Cb} {...Flex638IoProps}>
<TextBox1 className="p-About TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
</Flex1>
<Flex1 className="p-About Flex644 bpt" {...Flex644Props} {...Flex644Cb} {...Flex644IoProps}>
<Button1 className="p-About Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Founder_met_and_first_burger_second_row_Right_ bpt" {...Founder_met_and_first_burger_second_row_Right_Props} {...Founder_met_and_first_burger_second_row_Right_Cb} {...Founder_met_and_first_burger_second_row_Right_IoProps}>
<Image1 className="p-About Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Meet_our_team_ bpt" {...Meet_our_team_Props} {...Meet_our_team_Cb} {...Meet_our_team_IoProps}>
<Flex1 className="p-About Meet_our_team_Flex_ bpt" {...Meet_our_team_Flex_Props} {...Meet_our_team_Flex_Cb} {...Meet_our_team_Flex_IoProps}>
<Flex1 className="p-About Meet_our_team_Flex_Heading_ bpt" {...Meet_our_team_Flex_Heading_Props} {...Meet_our_team_Flex_Heading_Cb} {...Meet_our_team_Flex_Heading_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Heading_Text_ bpt" {...Meet_our_team_Flex_Heading_Text_Props} {...Meet_our_team_Flex_Heading_Text_Cb} {...Meet_our_team_Flex_Heading_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Para_ bpt" {...Meet_our_team_Flex_Para_Props} {...Meet_our_team_Flex_Para_Cb} {...Meet_our_team_Flex_Para_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Para_Text_ bpt" {...Meet_our_team_Flex_Para_Text_Props} {...Meet_our_team_Flex_Para_Text_Cb} {...Meet_our_team_Flex_Para_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_ bpt" {...Meet_our_team_Flex_Pictures_Props} {...Meet_our_team_Flex_Pictures_Cb} {...Meet_our_team_Flex_Pictures_IoProps}>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_1_ bpt" {...Meet_our_team_Flex_Pictures_1_Props} {...Meet_our_team_Flex_Pictures_1_Cb} {...Meet_our_team_Flex_Pictures_1_IoProps}>
<Image1 className="p-About Meet_our_team_Flex_Pictures_1_Image_ bpt" {...Meet_our_team_Flex_Pictures_1_Image_Props} {...Meet_our_team_Flex_Pictures_1_Image_Cb} {...Meet_our_team_Flex_Pictures_1_Image_IoProps}/>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_1_Name_ bpt" {...Meet_our_team_Flex_Pictures_1_Name_Props} {...Meet_our_team_Flex_Pictures_1_Name_Cb} {...Meet_our_team_Flex_Pictures_1_Name_IoProps}>
<TextBox1 className="p-About TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_1_Post_ bpt" {...Meet_our_team_Flex_Pictures_1_Post_Props} {...Meet_our_team_Flex_Pictures_1_Post_Cb} {...Meet_our_team_Flex_Pictures_1_Post_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_1_Post_Text_ bpt" {...Meet_our_team_Flex_Pictures_1_Post_Text_Props} {...Meet_our_team_Flex_Pictures_1_Post_Text_Cb} {...Meet_our_team_Flex_Pictures_1_Post_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_1_Post_Msg_ bpt" {...Meet_our_team_Flex_Pictures_1_Post_Msg_Props} {...Meet_our_team_Flex_Pictures_1_Post_Msg_Cb} {...Meet_our_team_Flex_Pictures_1_Post_Msg_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_1_Msg_Text_ bpt" {...Meet_our_team_Flex_Pictures_1_Msg_Text_Props} {...Meet_our_team_Flex_Pictures_1_Msg_Text_Cb} {...Meet_our_team_Flex_Pictures_1_Msg_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_2_ bpt" {...Meet_our_team_Flex_Pictures_2_Props} {...Meet_our_team_Flex_Pictures_2_Cb} {...Meet_our_team_Flex_Pictures_2_IoProps}>
<Image1 className="p-About Meet_our_team_Flex_Pictures_2_Image_ bpt" {...Meet_our_team_Flex_Pictures_2_Image_Props} {...Meet_our_team_Flex_Pictures_2_Image_Cb} {...Meet_our_team_Flex_Pictures_2_Image_IoProps}/>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_2_Name_ bpt" {...Meet_our_team_Flex_Pictures_2_Name_Props} {...Meet_our_team_Flex_Pictures_2_Name_Cb} {...Meet_our_team_Flex_Pictures_2_Name_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_2_Name_Text_ bpt" {...Meet_our_team_Flex_Pictures_2_Name_Text_Props} {...Meet_our_team_Flex_Pictures_2_Name_Text_Cb} {...Meet_our_team_Flex_Pictures_2_Name_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_2_Post_ bpt" {...Meet_our_team_Flex_Pictures_2_Post_Props} {...Meet_our_team_Flex_Pictures_2_Post_Cb} {...Meet_our_team_Flex_Pictures_2_Post_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_2_Post_Text_ bpt" {...Meet_our_team_Flex_Pictures_2_Post_Text_Props} {...Meet_our_team_Flex_Pictures_2_Post_Text_Cb} {...Meet_our_team_Flex_Pictures_2_Post_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_2_Msg_ bpt" {...Meet_our_team_Flex_Pictures_2_Msg_Props} {...Meet_our_team_Flex_Pictures_2_Msg_Cb} {...Meet_our_team_Flex_Pictures_2_Msg_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_2_Msg_Text_ bpt" {...Meet_our_team_Flex_Pictures_2_Msg_Text_Props} {...Meet_our_team_Flex_Pictures_2_Msg_Text_Cb} {...Meet_our_team_Flex_Pictures_2_Msg_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_3_ bpt" {...Meet_our_team_Flex_Pictures_3_Props} {...Meet_our_team_Flex_Pictures_3_Cb} {...Meet_our_team_Flex_Pictures_3_IoProps}>
<Image1 className="p-About Meet_our_team_Flex_Pictures_3_Image_ bpt" {...Meet_our_team_Flex_Pictures_3_Image_Props} {...Meet_our_team_Flex_Pictures_3_Image_Cb} {...Meet_our_team_Flex_Pictures_3_Image_IoProps}/>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_3_Name_ bpt" {...Meet_our_team_Flex_Pictures_3_Name_Props} {...Meet_our_team_Flex_Pictures_3_Name_Cb} {...Meet_our_team_Flex_Pictures_3_Name_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_3_Name_Text_ bpt" {...Meet_our_team_Flex_Pictures_3_Name_Text_Props} {...Meet_our_team_Flex_Pictures_3_Name_Text_Cb} {...Meet_our_team_Flex_Pictures_3_Name_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_3_Post_ bpt" {...Meet_our_team_Flex_Pictures_3_Post_Props} {...Meet_our_team_Flex_Pictures_3_Post_Cb} {...Meet_our_team_Flex_Pictures_3_Post_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_3_Post_Name_ bpt" {...Meet_our_team_Flex_Pictures_3_Post_Name_Props} {...Meet_our_team_Flex_Pictures_3_Post_Name_Cb} {...Meet_our_team_Flex_Pictures_3_Post_Name_IoProps}/>
</Flex1>
<Flex1 className="p-About Meet_our_team_Flex_Pictures_3_Msg_ bpt" {...Meet_our_team_Flex_Pictures_3_Msg_Props} {...Meet_our_team_Flex_Pictures_3_Msg_Cb} {...Meet_our_team_Flex_Pictures_3_Msg_IoProps}>
<TextBox1 className="p-About Meet_our_team_Flex_Pictures_3_Msg_Text_ bpt" {...Meet_our_team_Flex_Pictures_3_Msg_Text_Props} {...Meet_our_team_Flex_Pictures_3_Msg_Text_Cb} {...Meet_our_team_Flex_Pictures_3_Msg_Text_IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_ bpt" {...The_value_Props} {...The_value_Cb} {...The_value_IoProps}>
<Flex1 className="p-About The_value_Heading_ bpt" {...The_value_Heading_Props} {...The_value_Heading_Cb} {...The_value_Heading_IoProps}>
<TextBox1 className="p-About The_value_Heading_Text_ bpt" {...The_value_Heading_Text_Props} {...The_value_Heading_Text_Cb} {...The_value_Heading_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_1_ bpt" {...The_value_Row_1_Props} {...The_value_Row_1_Cb} {...The_value_Row_1_IoProps}>
<Flex1 className="p-About The_value_Row_1_Flex1_ bpt" {...The_value_Row_1_Flex1_Props} {...The_value_Row_1_Flex1_Cb} {...The_value_Row_1_Flex1_IoProps}>
<Image1 className="p-About The_value_Row_1_Flex1_Image_ bpt" {...The_value_Row_1_Flex1_Image_Props} {...The_value_Row_1_Flex1_Image_Cb} {...The_value_Row_1_Flex1_Image_IoProps}/>
<Flex1 className="p-About The_value_Row_1_Flex1_h1_ bpt" {...The_value_Row_1_Flex1_h1_Props} {...The_value_Row_1_Flex1_h1_Cb} {...The_value_Row_1_Flex1_h1_IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex1_h1_Text_ bpt" {...The_value_Row_1_Flex1_h1_Text_Props} {...The_value_Row_1_Flex1_h1_Text_Cb} {...The_value_Row_1_Flex1_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_1_Flex1_h2_ bpt" {...The_value_Row_1_Flex1_h2_Props} {...The_value_Row_1_Flex1_h2_Cb} {...The_value_Row_1_Flex1_h2_IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex1_h2_Text_ bpt" {...The_value_Row_1_Flex1_h2_Text_Props} {...The_value_Row_1_Flex1_h2_Text_Cb} {...The_value_Row_1_Flex1_h2_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_Row_1_Flex2_ bpt" {...The_value_Row_1_Flex2_Props} {...The_value_Row_1_Flex2_Cb} {...The_value_Row_1_Flex2_IoProps}>
<Image1 className="p-About The_value_Row_1_Flex2_Image_ bpt" {...The_value_Row_1_Flex2_Image_Props} {...The_value_Row_1_Flex2_Image_Cb} {...The_value_Row_1_Flex2_Image_IoProps}/>
<Flex1 className="p-About The_value_Row_1_Flex2_h1_ bpt" {...The_value_Row_1_Flex2_h1_Props} {...The_value_Row_1_Flex2_h1_Cb} {...The_value_Row_1_Flex2_h1_IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex2_h1_Text_ bpt" {...The_value_Row_1_Flex2_h1_Text_Props} {...The_value_Row_1_Flex2_h1_Text_Cb} {...The_value_Row_1_Flex2_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_1_Flex2_h2__ bpt" {...The_value_Row_1_Flex2_h2__Props} {...The_value_Row_1_Flex2_h2__Cb} {...The_value_Row_1_Flex2_h2__IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex2_h2_Text_ bpt" {...The_value_Row_1_Flex2_h2_Text_Props} {...The_value_Row_1_Flex2_h2_Text_Cb} {...The_value_Row_1_Flex2_h2_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_Row_1_Flex_3_ bpt" {...The_value_Row_1_Flex_3_Props} {...The_value_Row_1_Flex_3_Cb} {...The_value_Row_1_Flex_3_IoProps}>
<Image1 className="p-About The_value_Row_1_Flex3_Image_ bpt" {...The_value_Row_1_Flex3_Image_Props} {...The_value_Row_1_Flex3_Image_Cb} {...The_value_Row_1_Flex3_Image_IoProps}/>
<Flex1 className="p-About The_value_Row_1_Flex3__h1_ bpt" {...The_value_Row_1_Flex3__h1_Props} {...The_value_Row_1_Flex3__h1_Cb} {...The_value_Row_1_Flex3__h1_IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex3_h1_Text_ bpt" {...The_value_Row_1_Flex3_h1_Text_Props} {...The_value_Row_1_Flex3_h1_Text_Cb} {...The_value_Row_1_Flex3_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_1_Flex3_h2_ bpt" {...The_value_Row_1_Flex3_h2_Props} {...The_value_Row_1_Flex3_h2_Cb} {...The_value_Row_1_Flex3_h2_IoProps}>
<TextBox1 className="p-About The_value_Row_1_Flex3_h2_Text_ bpt" {...The_value_Row_1_Flex3_h2_Text_Props} {...The_value_Row_1_Flex3_h2_Text_Cb} {...The_value_Row_1_Flex3_h2_Text_IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_Row_2_ bpt" {...The_value_Row_2_Props} {...The_value_Row_2_Cb} {...The_value_Row_2_IoProps}>
<Flex1 className="p-About The_value_Row_2_Flex1_ bpt" {...The_value_Row_2_Flex1_Props} {...The_value_Row_2_Flex1_Cb} {...The_value_Row_2_Flex1_IoProps}>
<Image1 className="p-About The_value_Row_2_Flex1_Image bpt" {...The_value_Row_2_Flex1_ImageProps} {...The_value_Row_2_Flex1_ImageCb} {...The_value_Row_2_Flex1_ImageIoProps}/>
<Flex1 className="p-About The_value_Row_2_Flex1_h1_ bpt" {...The_value_Row_2_Flex1_h1_Props} {...The_value_Row_2_Flex1_h1_Cb} {...The_value_Row_2_Flex1_h1_IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex1_h1_Text_ bpt" {...The_value_Row_2_Flex1_h1_Text_Props} {...The_value_Row_2_Flex1_h1_Text_Cb} {...The_value_Row_2_Flex1_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_2_Flex1_h2_ bpt" {...The_value_Row_2_Flex1_h2_Props} {...The_value_Row_2_Flex1_h2_Cb} {...The_value_Row_2_Flex1_h2_IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex1_h2_Text_ bpt" {...The_value_Row_2_Flex1_h2_Text_Props} {...The_value_Row_2_Flex1_h2_Text_Cb} {...The_value_Row_2_Flex1_h2_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_Row_2_Flex2_ bpt" {...The_value_Row_2_Flex2_Props} {...The_value_Row_2_Flex2_Cb} {...The_value_Row_2_Flex2_IoProps}>
<Image1 className="p-About The_value_Row_2_Flex2_Image_ bpt" {...The_value_Row_2_Flex2_Image_Props} {...The_value_Row_2_Flex2_Image_Cb} {...The_value_Row_2_Flex2_Image_IoProps}/>
<Flex1 className="p-About The_value_Row_2_Flex2_h1_ bpt" {...The_value_Row_2_Flex2_h1_Props} {...The_value_Row_2_Flex2_h1_Cb} {...The_value_Row_2_Flex2_h1_IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex2_h1_Text_ bpt" {...The_value_Row_2_Flex2_h1_Text_Props} {...The_value_Row_2_Flex2_h1_Text_Cb} {...The_value_Row_2_Flex2_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_2_Flex2_h2__ bpt" {...The_value_Row_2_Flex2_h2__Props} {...The_value_Row_2_Flex2_h2__Cb} {...The_value_Row_2_Flex2_h2__IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex2_h2_Text_ bpt" {...The_value_Row_2_Flex2_h2_Text_Props} {...The_value_Row_2_Flex2_h2_Text_Cb} {...The_value_Row_2_Flex2_h2_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About The_value_Row_2_Flex3_ bpt" {...The_value_Row_2_Flex3_Props} {...The_value_Row_2_Flex3_Cb} {...The_value_Row_2_Flex3_IoProps}>
<Image1 className="p-About The_value_Row_2_Flex3_Image_ bpt" {...The_value_Row_2_Flex3_Image_Props} {...The_value_Row_2_Flex3_Image_Cb} {...The_value_Row_2_Flex3_Image_IoProps}/>
<Flex1 className="p-About The_value_Row_2_Flex3_h1_ bpt" {...The_value_Row_2_Flex3_h1_Props} {...The_value_Row_2_Flex3_h1_Cb} {...The_value_Row_2_Flex3_h1_IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex3_h1_Text_ bpt" {...The_value_Row_2_Flex3_h1_Text_Props} {...The_value_Row_2_Flex3_h1_Text_Cb} {...The_value_Row_2_Flex3_h1_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About The_value_Row_2_Flex3_h2_ bpt" {...The_value_Row_2_Flex3_h2_Props} {...The_value_Row_2_Flex3_h2_Cb} {...The_value_Row_2_Flex3_h2_IoProps}>
<TextBox1 className="p-About The_value_Row_2_Flex3_h2_Text_ bpt" {...The_value_Row_2_Flex3_h2_Text_Props} {...The_value_Row_2_Flex3_h2_Text_Cb} {...The_value_Row_2_Flex3_h2_Text_IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About About_our_article_ bpt" {...About_our_article_Props} {...About_our_article_Cb} {...About_our_article_IoProps}>
<Flex1 className="p-About Our_article_Head_ bpt" {...Our_article_Head_Props} {...Our_article_Head_Cb} {...Our_article_Head_IoProps}>
<Flex1 className="p-About Our_article_Head_L_ bpt" {...Our_article_Head_L_Props} {...Our_article_Head_L_Cb} {...Our_article_Head_L_IoProps}>
<TextBox1 className="p-About Our_article_Head_L_Text_ bpt" {...Our_article_Head_L_Text_Props} {...Our_article_Head_L_Text_Cb} {...Our_article_Head_L_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About Our_article_Head_R_ bpt" {...Our_article_Head_R_Props} {...Our_article_Head_R_Cb} {...Our_article_Head_R_IoProps}>
<TextBox1 className="p-About Our_article_Head_R_Text_ bpt" {...Our_article_Head_R_Text_Props} {...Our_article_Head_R_Text_Cb} {...Our_article_Head_R_Text_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_our_article_Images_ bpt" {...About_our_article_Images_Props} {...About_our_article_Images_Cb} {...About_our_article_Images_IoProps}>
<Flex1 className="p-About About_our_article_Images_Flex bpt" {...About_our_article_Images_FlexProps} {...About_our_article_Images_FlexCb} {...About_our_article_Images_FlexIoProps}>
<Image1 className="p-About About_our_article_Images_Flex_Limage_ bpt" {...About_our_article_Images_Flex_Limage_Props} {...About_our_article_Images_Flex_Limage_Cb} {...About_our_article_Images_Flex_Limage_IoProps}/>
<Image1 className="p-About About_our_article_Images_Flex_Mimage_ bpt" {...About_our_article_Images_Flex_Mimage_Props} {...About_our_article_Images_Flex_Mimage_Cb} {...About_our_article_Images_Flex_Mimage_IoProps}/>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_ bpt" {...About_our_article_Images_Flex_Rimage_Props} {...About_our_article_Images_Flex_Rimage_Cb} {...About_our_article_Images_Flex_Rimage_IoProps}>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_row1_ bpt" {...About_our_article_Images_Flex_Rimage_row1_Props} {...About_our_article_Images_Flex_Rimage_row1_Cb} {...About_our_article_Images_Flex_Rimage_row1_IoProps}>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_Row1_11_ bpt" {...About_our_article_Images_Flex_Rimage_Row1_11_Props} {...About_our_article_Images_Flex_Rimage_Row1_11_Cb} {...About_our_article_Images_Flex_Rimage_Row1_11_IoProps}>
<Image1 className="p-About Menu_our_article_Images_Flex_Rimage_Row1_11_img_ bpt" {...Menu_our_article_Images_Flex_Rimage_Row1_11_img_Props} {...Menu_our_article_Images_Flex_Rimage_Row1_11_img_Cb} {...Menu_our_article_Images_Flex_Rimage_Row1_11_img_IoProps}/>
</Flex1>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_Row1_12_ bpt" {...About_our_article_Images_Flex_Rimage_Row1_12_Props} {...About_our_article_Images_Flex_Rimage_Row1_12_Cb} {...About_our_article_Images_Flex_Rimage_Row1_12_IoProps}>
<Image1 className="p-About About_our_article_Images_Flex_Rimage_Row1_12_img_ bpt" {...About_our_article_Images_Flex_Rimage_Row1_12_img_Props} {...About_our_article_Images_Flex_Rimage_Row1_12_img_Cb} {...About_our_article_Images_Flex_Rimage_Row1_12_img_IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_Row2_ bpt" {...About_our_article_Images_Flex_Rimage_Row2_Props} {...About_our_article_Images_Flex_Rimage_Row2_Cb} {...About_our_article_Images_Flex_Rimage_Row2_IoProps}>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_Row2_21_ bpt" {...About_our_article_Images_Flex_Rimage_Row2_21_Props} {...About_our_article_Images_Flex_Rimage_Row2_21_Cb} {...About_our_article_Images_Flex_Rimage_Row2_21_IoProps}>
<Image1 className="p-About About_our_article_Images_Flex_Rimage_Row2_21_img_ bpt" {...About_our_article_Images_Flex_Rimage_Row2_21_img_Props} {...About_our_article_Images_Flex_Rimage_Row2_21_img_Cb} {...About_our_article_Images_Flex_Rimage_Row2_21_img_IoProps}/>
</Flex1>
<Flex1 className="p-About About_our_article_Images_Flex_Rimage_Row2_22_ bpt" {...About_our_article_Images_Flex_Rimage_Row2_22_Props} {...About_our_article_Images_Flex_Rimage_Row2_22_Cb} {...About_our_article_Images_Flex_Rimage_Row2_22_IoProps}>
<Image1 className="p-About About_our_article_Images_Flex_Rimage_Row2_22_img_ bpt" {...About_our_article_Images_Flex_Rimage_Row2_22_img_Props} {...About_our_article_Images_Flex_Rimage_Row2_22_img_Cb} {...About_our_article_Images_Flex_Rimage_Row2_22_img_IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About About_Footer_ bpt" {...About_Footer_Props} {...About_Footer_Cb} {...About_Footer_IoProps}>
<Flex1 className="p-About About_Footer_L_ bpt" {...About_Footer_L_Props} {...About_Footer_L_Cb} {...About_Footer_L_IoProps}>
<Flex1 className="p-About About_Footer_L_Head_ bpt" {...About_Footer_L_Head_Props} {...About_Footer_L_Head_Cb} {...About_Footer_L_Head_IoProps}>
<Image1 className="p-About About_Footer_L_Head_img_ bpt" {...About_Footer_L_Head_img_Props} {...About_Footer_L_Head_img_Cb} {...About_Footer_L_Head_img_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_L_Para_ bpt" {...About_Footer_L_Para_Props} {...About_Footer_L_Para_Cb} {...About_Footer_L_Para_IoProps}>
<TextBox1 className="p-About About_Footer_L_Para_Text_ bpt" {...About_Footer_L_Para_Text_Props} {...About_Footer_L_Para_Text_Cb} {...About_Footer_L_Para_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_L_img_ bpt" {...About_Footer_L_img_Props} {...About_Footer_L_img_Cb} {...About_Footer_L_img_IoProps}>
<Image1 className="p-About About_Footer_L_img_1 bpt" {...About_Footer_L_img_1Props} {...About_Footer_L_img_1Cb} {...About_Footer_L_img_1IoProps}/>
<Image1 className="p-About About_Footer_L_img_2 bpt" {...About_Footer_L_img_2Props} {...About_Footer_L_img_2Cb} {...About_Footer_L_img_2IoProps}/>
<Image1 className="p-About About_Footer_L_img_3 bpt" {...About_Footer_L_img_3Props} {...About_Footer_L_img_3Cb} {...About_Footer_L_img_3IoProps}/>
<Image1 className="p-About About_Footer_L_img_4 bpt" {...About_Footer_L_img_4Props} {...About_Footer_L_img_4Cb} {...About_Footer_L_img_4IoProps}/>
<Image1 className="p-About About_Footer_L_img_5 bpt" {...About_Footer_L_img_5Props} {...About_Footer_L_img_5Cb} {...About_Footer_L_img_5IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_Footer_M_ bpt" {...About_Footer_M_Props} {...About_Footer_M_Cb} {...About_Footer_M_IoProps}>
<Flex1 className="p-About About_Footer_M_C1_ bpt" {...About_Footer_M_C1_Props} {...About_Footer_M_C1_Cb} {...About_Footer_M_C1_IoProps}>
<Flex1 className="p-About About_Footer_M_C1_1_ bpt" {...About_Footer_M_C1_1_Props} {...About_Footer_M_C1_1_Cb} {...About_Footer_M_C1_1_IoProps}>
<TextBox1 className="p-About About_Footer_M_C1_1_txt_ bpt" {...About_Footer_M_C1_1_txt_Props} {...About_Footer_M_C1_1_txt_Cb} {...About_Footer_M_C1_1_txt_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_2_ bpt" {...About_Footer_M_C1_2_Props} {...About_Footer_M_C1_2_Cb} {...About_Footer_M_C1_2_IoProps}>
<TextBox1 className="p-About About_Footer_M_C1_2_txt_ bpt" {...About_Footer_M_C1_2_txt_Props} {...About_Footer_M_C1_2_txt_Cb} {...About_Footer_M_C1_2_txt_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_3_ bpt" {...About_Footer_M_C1_3_Props} {...About_Footer_M_C1_3_Cb} {...About_Footer_M_C1_3_IoProps}>
<TextBox1 className="p-About About_Footer_M_C1_3_txt_ bpt" {...About_Footer_M_C1_3_txt_Props} {...About_Footer_M_C1_3_txt_Cb} {...About_Footer_M_C1_3_txt_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_4_ bpt" {...About_Footer_M_C1_4_Props} {...About_Footer_M_C1_4_Cb} {...About_Footer_M_C1_4_IoProps}>
<TextBox1 className="p-About About_Footer_M_C1_4_txt_ bpt" {...About_Footer_M_C1_4_txt_Props} {...About_Footer_M_C1_4_txt_Cb} {...About_Footer_M_C1_4_txt_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_5_ bpt" {...About_Footer_M_C1_5_Props} {...About_Footer_M_C1_5_Cb} {...About_Footer_M_C1_5_IoProps}>
<TextBox1 className="p-About TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_6_ bpt" {...About_Footer_M_C1_6_Props} {...About_Footer_M_C1_6_Cb} {...About_Footer_M_C1_6_IoProps}>
<TextBox1 className="p-About TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_7_ bpt" {...About_Footer_M_C1_7_Props} {...About_Footer_M_C1_7_Cb} {...About_Footer_M_C1_7_IoProps}>
<TextBox1 className="p-About TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_8_ bpt" {...About_Footer_M_C1_8_Props} {...About_Footer_M_C1_8_Cb} {...About_Footer_M_C1_8_IoProps}>
<TextBox1 className="p-About TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_ bpt" {...About_Footer_M_C2_Props} {...About_Footer_M_C2_Cb} {...About_Footer_M_C2_IoProps}>
<Flex1 className="p-About About_Footer_M_C2_1 bpt" {...About_Footer_M_C2_1Props} {...About_Footer_M_C2_1Cb} {...About_Footer_M_C2_1IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_1_Text bpt" {...About_Footer_M_C2_1_TextProps} {...About_Footer_M_C2_1_TextCb} {...About_Footer_M_C2_1_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_Footer_M bpt" {...About_Footer_Footer_MProps} {...About_Footer_Footer_MCb} {...About_Footer_Footer_MIoProps}>
<TextBox1 className="p-About About_Footer_Footer_M_Text bpt" {...About_Footer_Footer_M_TextProps} {...About_Footer_Footer_M_TextCb} {...About_Footer_Footer_M_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_3 bpt" {...About_Footer_M_C2_3Props} {...About_Footer_M_C2_3Cb} {...About_Footer_M_C2_3IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_3_Text bpt" {...About_Footer_M_C2_3_TextProps} {...About_Footer_M_C2_3_TextCb} {...About_Footer_M_C2_3_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_4 bpt" {...About_Footer_M_C2_4Props} {...About_Footer_M_C2_4Cb} {...About_Footer_M_C2_4IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_4_Text bpt" {...About_Footer_M_C2_4_TextProps} {...About_Footer_M_C2_4_TextCb} {...About_Footer_M_C2_4_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_5 bpt" {...About_Footer_M_C2_5Props} {...About_Footer_M_C2_5Cb} {...About_Footer_M_C2_5IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_5_Text bpt" {...About_Footer_M_C2_5_TextProps} {...About_Footer_M_C2_5_TextCb} {...About_Footer_M_C2_5_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_6 bpt" {...About_Footer_M_C2_6Props} {...About_Footer_M_C2_6Cb} {...About_Footer_M_C2_6IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_6_txt_ bpt" {...About_Footer_M_C2_6_txt_Props} {...About_Footer_M_C2_6_txt_Cb} {...About_Footer_M_C2_6_txt_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_7 bpt" {...About_Footer_M_C2_7Props} {...About_Footer_M_C2_7Cb} {...About_Footer_M_C2_7IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_7_Text bpt" {...About_Footer_M_C2_7_TextProps} {...About_Footer_M_C2_7_TextCb} {...About_Footer_M_C2_7_TextIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C2_8 bpt" {...About_Footer_M_C2_8Props} {...About_Footer_M_C2_8Cb} {...About_Footer_M_C2_8IoProps}>
<TextBox1 className="p-About About_Footer_M_C2_8_Text bpt" {...About_Footer_M_C2_8_TextProps} {...About_Footer_M_C2_8_TextCb} {...About_Footer_M_C2_8_TextIoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About About_Footer_R_ bpt" {...About_Footer_R_Props} {...About_Footer_R_Cb} {...About_Footer_R_IoProps}>
<Flex1 className="p-About About__Footer_R_Head bpt" {...About__Footer_R_HeadProps} {...About__Footer_R_HeadCb} {...About__Footer_R_HeadIoProps}>
<TextBox1 className="p-About About_Footer_M_C1_3__Footer_R_Head_Text_ bpt" {...About_Footer_M_C1_3__Footer_R_Head_Text_Props} {...About_Footer_M_C1_3__Footer_R_Head_Text_Cb} {...About_Footer_M_C1_3__Footer_R_Head_Text_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_1_ bpt" {...About_Footer_M_C1_3__Footer_R_1_Props} {...About_Footer_M_C1_3__Footer_R_1_Cb} {...About_Footer_M_C1_3__Footer_R_1_IoProps}>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_1_11_ bpt" {...About_Footer_M_C1_3__Footer_R_1_11_Props} {...About_Footer_M_C1_3__Footer_R_1_11_Cb} {...About_Footer_M_C1_3__Footer_R_1_11_IoProps}>
<Image1 className="p-About About_Footer_M_C1_3__Footer_R_1_11_Img bpt" {...About_Footer_M_C1_3__Footer_R_1_11_ImgProps} {...About_Footer_M_C1_3__Footer_R_1_11_ImgCb} {...About_Footer_M_C1_3__Footer_R_1_11_ImgIoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_1_12_img_ bpt" {...About_Footer_M_C1_3__Footer_R_1_12_img_Props} {...About_Footer_M_C1_3__Footer_R_1_12_img_Cb} {...About_Footer_M_C1_3__Footer_R_1_12_img_IoProps}>
<Image1 className="p-About About_Footer_M_C1_3__Footer_R_1_12_img_Image bpt" {...About_Footer_M_C1_3__Footer_R_1_12_img_ImageProps} {...About_Footer_M_C1_3__Footer_R_1_12_img_ImageCb} {...About_Footer_M_C1_3__Footer_R_1_12_img_ImageIoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_2_ bpt" {...About_Footer_M_C1_3__Footer_R_2_Props} {...About_Footer_M_C1_3__Footer_R_2_Cb} {...About_Footer_M_C1_3__Footer_R_2_IoProps}>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_2_21_img_ bpt" {...About_Footer_M_C1_3__Footer_R_2_21_img_Props} {...About_Footer_M_C1_3__Footer_R_2_21_img_Cb} {...About_Footer_M_C1_3__Footer_R_2_21_img_IoProps}>
<Image1 className="p-About About_Footer_M_C1_3__Footer_R_2_21_imgg_ bpt" {...About_Footer_M_C1_3__Footer_R_2_21_imgg_Props} {...About_Footer_M_C1_3__Footer_R_2_21_imgg_Cb} {...About_Footer_M_C1_3__Footer_R_2_21_imgg_IoProps}/>
</Flex1>
<Flex1 className="p-About About_Footer_M_C1_3__Footer_R_2_22_img_ bpt" {...About_Footer_M_C1_3__Footer_R_2_22_img_Props} {...About_Footer_M_C1_3__Footer_R_2_22_img_Cb} {...About_Footer_M_C1_3__Footer_R_2_22_img_IoProps}>
<Image1 className="p-About About_Footer_M_C1_3__Footer_R_2_22_imgg_ bpt" {...About_Footer_M_C1_3__Footer_R_2_22_imgg_Props} {...About_Footer_M_C1_3__Footer_R_2_22_imgg_Cb} {...About_Footer_M_C1_3__Footer_R_2_22_imgg_IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
