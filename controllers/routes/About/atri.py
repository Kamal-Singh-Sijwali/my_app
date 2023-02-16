import json
from typing import List, Any, Optional
from fastapi import UploadFile
default_state = json.loads('{"About_header_":{"styles":{"display":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Flex_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Flex_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Flex_Left_Items_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Logo":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Flex_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_story_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_story_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_story_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_second_story_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_second_story_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_second_story_Left__companies_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_companies_Flex_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_companies_Flex_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_companies_Flex_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Funder_met_and_first_burger_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_First_row_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_First_row_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_First_row_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex627":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex628":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex629":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_second_row_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_second_row_Left_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex638":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex639":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex640":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex644":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Founder_met_and_first_burger_second_row_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Heading_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Para_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_1_Name_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_1_Post_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_1_Post_Msg_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_2_Msg_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_2_Post_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_2_Name_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_3_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_3_Msg_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_3_Post_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Meet_our_team_Flex_Pictures_3_Name_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Heading_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex1_h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex1_h2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex2_h2__":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex2_h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex_3_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex3_h2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_1_Flex3__h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex3_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex3_h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex3_h2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex2_h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex2_h2__":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex1_h2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"The_value_Row_2_Flex1_h1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_Row2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_Row2_21_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_Row2_22_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_row1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_Row1_12_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_our_article_Images_Flex_Rimage_Row1_11_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Our_article_Head_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Our_article_Head_R_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Our_article_Head_L_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_R_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About__Footer_R_Head":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_1_11_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_1_12_img_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_2_22_img_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3__Footer_R_2_21_img_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_1":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_Footer_M":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_7":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_8":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_5":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_6":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_3":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C2_4":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_4_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_3_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_6_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_5_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_8_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_7_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_2_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_M_C1_1_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_L_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_L_img_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_L_Para_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_Footer_L_Head_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_header_Flex_Left_Items_Pages_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"About_header_Flex_Left_Items_Menu_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"About_header_Flex_Left_Items_About_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"About_header_Flex_Left_Items_Home_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"About_header_Flex_Left_Items_Cart_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"About_header_Logo_Image":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_header_Flex_Right_Btn_color_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":""}},"About_header_Flex_Right_Btn_white_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":""}},"About_story_Left_Heading_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_story_Left_Para_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_story_Right_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_second_story_Left__second_story_Right_":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"About_second_story_Left_Image__":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_companies_Flex_Left_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_companies_Flex_Right_Doordash_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_companies_Flex_Right_Postmates_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_companies_Flex_Right_Rappi_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_companies_Flex_Right_Uber_eatss__":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Image145":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Button40":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":""}},"TextBox254":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox256":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox257":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox262":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox263":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox264":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Button41":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":""}},"Image147":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Meet_our_team_Flex_Heading_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Para_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_1_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"TextBox267":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_1_Post_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_1_Msg_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_2_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Meet_our_team_Flex_Pictures_2_Msg_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_2_Post_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_2_Name_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_3_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Meet_our_team_Flex_Pictures_3_Msg_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_3_Post_Name_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Meet_our_team_Flex_Pictures_3_Name_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Heading_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex1_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_1_Flex1_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex1_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex2_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_1_Flex2_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex2_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex3_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_1_Flex3_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_1_Flex3_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex3_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_2_Flex3_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex3_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex2_Image_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_2_Flex2_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex2_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex1_Image":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"The_value_Row_2_Flex1_h2_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"The_value_Row_2_Flex1_h1_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_our_article_Images_Flex_Mimage_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_our_article_Images_Flex_Limage_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_our_article_Images_Flex_Rimage_Row2_21_img_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_our_article_Images_Flex_Rimage_Row2_22_img_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_our_article_Images_Flex_Rimage_Row1_12_img_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Menu_our_article_Images_Flex_Rimage_Row1_11_img_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Our_article_Head_R_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Our_article_Head_L_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_3__Footer_R_Head_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_3__Footer_R_1_11_Img":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_M_C1_3__Footer_R_1_12_img_Image":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_M_C1_3__Footer_R_2_22_imgg_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_M_C1_3__Footer_R_2_21_imgg_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_M_C2_1_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_Footer_M_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_7_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_8_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_5_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_6_txt_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_3_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C2_4_Text":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_4_txt_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_3_txt_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox310":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox311":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox312":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox313":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_2_txt_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_M_C1_1_txt_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_L_img_5":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_L_img_4":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_L_img_3":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_L_img_2":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_L_img_1":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"About_Footer_L_Para_Text_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"About_Footer_L_Head_img_":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}}}')
def get_defined_value(state, def_state, key):
	return state[key] if key in state else def_state[key]
class Atri:
	def __init__(self, state: Any):
		self.event_data = None
		self.event_alias = None
		global default_state
		self._setter_access_tracker = {}
		self.About_header_ = state["About_header_"]
		self.About_header_Flex_ = state["About_header_Flex_"]
		self.About_header_Flex_Left_ = state["About_header_Flex_Left_"]
		self.About_header_Flex_Left_Items_ = state["About_header_Flex_Left_Items_"]
		self.About_header_Logo = state["About_header_Logo"]
		self.About_header_Flex_Right_ = state["About_header_Flex_Right_"]
		self.About_story_ = state["About_story_"]
		self.About_story_Left_ = state["About_story_Left_"]
		self.About_story_Right_ = state["About_story_Right_"]
		self.About_second_story_ = state["About_second_story_"]
		self.About_second_story_Left_ = state["About_second_story_Left_"]
		self.About_second_story_Left__companies_ = state["About_second_story_Left__companies_"]
		self.About_companies_Flex_ = state["About_companies_Flex_"]
		self.About_companies_Flex_Left_ = state["About_companies_Flex_Left_"]
		self.About_companies_Flex_Right_ = state["About_companies_Flex_Right_"]
		self.Funder_met_and_first_burger_ = state["Funder_met_and_first_burger_"]
		self.Founder_met_and_first_burger_First_row_ = state["Founder_met_and_first_burger_First_row_"]
		self.Founder_met_and_first_burger_First_row_Left_ = state["Founder_met_and_first_burger_First_row_Left_"]
		self.Founder_met_and_first_burger_First_row_Right_ = state["Founder_met_and_first_burger_First_row_Right_"]
		self.Flex627 = state["Flex627"]
		self.Flex628 = state["Flex628"]
		self.Flex629 = state["Flex629"]
		self.Founder_met_and_first_burger_second_row_ = state["Founder_met_and_first_burger_second_row_"]
		self.Founder_met_and_first_burger_second_row_Left_ = state["Founder_met_and_first_burger_second_row_Left_"]
		self.Flex638 = state["Flex638"]
		self.Flex639 = state["Flex639"]
		self.Flex640 = state["Flex640"]
		self.Flex644 = state["Flex644"]
		self.Founder_met_and_first_burger_second_row_Right_ = state["Founder_met_and_first_burger_second_row_Right_"]
		self.Meet_our_team_ = state["Meet_our_team_"]
		self.Meet_our_team_Flex_ = state["Meet_our_team_Flex_"]
		self.Meet_our_team_Flex_Heading_ = state["Meet_our_team_Flex_Heading_"]
		self.Meet_our_team_Flex_Para_ = state["Meet_our_team_Flex_Para_"]
		self.Meet_our_team_Flex_Pictures_ = state["Meet_our_team_Flex_Pictures_"]
		self.Meet_our_team_Flex_Pictures_1_ = state["Meet_our_team_Flex_Pictures_1_"]
		self.Meet_our_team_Flex_Pictures_1_Name_ = state["Meet_our_team_Flex_Pictures_1_Name_"]
		self.Meet_our_team_Flex_Pictures_1_Post_ = state["Meet_our_team_Flex_Pictures_1_Post_"]
		self.Meet_our_team_Flex_Pictures_1_Post_Msg_ = state["Meet_our_team_Flex_Pictures_1_Post_Msg_"]
		self.Meet_our_team_Flex_Pictures_2_ = state["Meet_our_team_Flex_Pictures_2_"]
		self.Meet_our_team_Flex_Pictures_2_Msg_ = state["Meet_our_team_Flex_Pictures_2_Msg_"]
		self.Meet_our_team_Flex_Pictures_2_Post_ = state["Meet_our_team_Flex_Pictures_2_Post_"]
		self.Meet_our_team_Flex_Pictures_2_Name_ = state["Meet_our_team_Flex_Pictures_2_Name_"]
		self.Meet_our_team_Flex_Pictures_3_ = state["Meet_our_team_Flex_Pictures_3_"]
		self.Meet_our_team_Flex_Pictures_3_Msg_ = state["Meet_our_team_Flex_Pictures_3_Msg_"]
		self.Meet_our_team_Flex_Pictures_3_Post_ = state["Meet_our_team_Flex_Pictures_3_Post_"]
		self.Meet_our_team_Flex_Pictures_3_Name_ = state["Meet_our_team_Flex_Pictures_3_Name_"]
		self.The_value_ = state["The_value_"]
		self.The_value_Heading_ = state["The_value_Heading_"]
		self.The_value_Row_1_ = state["The_value_Row_1_"]
		self.The_value_Row_1_Flex1_ = state["The_value_Row_1_Flex1_"]
		self.The_value_Row_1_Flex1_h1_ = state["The_value_Row_1_Flex1_h1_"]
		self.The_value_Row_1_Flex1_h2_ = state["The_value_Row_1_Flex1_h2_"]
		self.The_value_Row_1_Flex2_ = state["The_value_Row_1_Flex2_"]
		self.The_value_Row_1_Flex2_h2__ = state["The_value_Row_1_Flex2_h2__"]
		self.The_value_Row_1_Flex2_h1_ = state["The_value_Row_1_Flex2_h1_"]
		self.The_value_Row_1_Flex_3_ = state["The_value_Row_1_Flex_3_"]
		self.The_value_Row_1_Flex3_h2_ = state["The_value_Row_1_Flex3_h2_"]
		self.The_value_Row_1_Flex3__h1_ = state["The_value_Row_1_Flex3__h1_"]
		self.The_value_Row_2_ = state["The_value_Row_2_"]
		self.The_value_Row_2_Flex3_ = state["The_value_Row_2_Flex3_"]
		self.The_value_Row_2_Flex3_h1_ = state["The_value_Row_2_Flex3_h1_"]
		self.The_value_Row_2_Flex3_h2_ = state["The_value_Row_2_Flex3_h2_"]
		self.The_value_Row_2_Flex2_ = state["The_value_Row_2_Flex2_"]
		self.The_value_Row_2_Flex2_h1_ = state["The_value_Row_2_Flex2_h1_"]
		self.The_value_Row_2_Flex2_h2__ = state["The_value_Row_2_Flex2_h2__"]
		self.The_value_Row_2_Flex1_ = state["The_value_Row_2_Flex1_"]
		self.The_value_Row_2_Flex1_h2_ = state["The_value_Row_2_Flex1_h2_"]
		self.The_value_Row_2_Flex1_h1_ = state["The_value_Row_2_Flex1_h1_"]
		self.About_our_article_ = state["About_our_article_"]
		self.About_our_article_Images_ = state["About_our_article_Images_"]
		self.About_our_article_Images_Flex = state["About_our_article_Images_Flex"]
		self.About_our_article_Images_Flex_Rimage_ = state["About_our_article_Images_Flex_Rimage_"]
		self.About_our_article_Images_Flex_Rimage_Row2_ = state["About_our_article_Images_Flex_Rimage_Row2_"]
		self.About_our_article_Images_Flex_Rimage_Row2_21_ = state["About_our_article_Images_Flex_Rimage_Row2_21_"]
		self.About_our_article_Images_Flex_Rimage_Row2_22_ = state["About_our_article_Images_Flex_Rimage_Row2_22_"]
		self.About_our_article_Images_Flex_Rimage_row1_ = state["About_our_article_Images_Flex_Rimage_row1_"]
		self.About_our_article_Images_Flex_Rimage_Row1_12_ = state["About_our_article_Images_Flex_Rimage_Row1_12_"]
		self.About_our_article_Images_Flex_Rimage_Row1_11_ = state["About_our_article_Images_Flex_Rimage_Row1_11_"]
		self.Our_article_Head_ = state["Our_article_Head_"]
		self.Our_article_Head_R_ = state["Our_article_Head_R_"]
		self.Our_article_Head_L_ = state["Our_article_Head_L_"]
		self.About_Footer_ = state["About_Footer_"]
		self.About_Footer_R_ = state["About_Footer_R_"]
		self.About__Footer_R_Head = state["About__Footer_R_Head"]
		self.About_Footer_M_C1_3__Footer_R_1_ = state["About_Footer_M_C1_3__Footer_R_1_"]
		self.About_Footer_M_C1_3__Footer_R_1_11_ = state["About_Footer_M_C1_3__Footer_R_1_11_"]
		self.About_Footer_M_C1_3__Footer_R_1_12_img_ = state["About_Footer_M_C1_3__Footer_R_1_12_img_"]
		self.About_Footer_M_C1_3__Footer_R_2_ = state["About_Footer_M_C1_3__Footer_R_2_"]
		self.About_Footer_M_C1_3__Footer_R_2_22_img_ = state["About_Footer_M_C1_3__Footer_R_2_22_img_"]
		self.About_Footer_M_C1_3__Footer_R_2_21_img_ = state["About_Footer_M_C1_3__Footer_R_2_21_img_"]
		self.About_Footer_M_ = state["About_Footer_M_"]
		self.About_Footer_M_C2_ = state["About_Footer_M_C2_"]
		self.About_Footer_M_C2_1 = state["About_Footer_M_C2_1"]
		self.About_Footer_Footer_M = state["About_Footer_Footer_M"]
		self.About_Footer_M_C2_7 = state["About_Footer_M_C2_7"]
		self.About_Footer_M_C2_8 = state["About_Footer_M_C2_8"]
		self.About_Footer_M_C2_5 = state["About_Footer_M_C2_5"]
		self.About_Footer_M_C2_6 = state["About_Footer_M_C2_6"]
		self.About_Footer_M_C2_3 = state["About_Footer_M_C2_3"]
		self.About_Footer_M_C2_4 = state["About_Footer_M_C2_4"]
		self.About_Footer_M_C1_ = state["About_Footer_M_C1_"]
		self.About_Footer_M_C1_4_ = state["About_Footer_M_C1_4_"]
		self.About_Footer_M_C1_3_ = state["About_Footer_M_C1_3_"]
		self.About_Footer_M_C1_6_ = state["About_Footer_M_C1_6_"]
		self.About_Footer_M_C1_5_ = state["About_Footer_M_C1_5_"]
		self.About_Footer_M_C1_8_ = state["About_Footer_M_C1_8_"]
		self.About_Footer_M_C1_7_ = state["About_Footer_M_C1_7_"]
		self.About_Footer_M_C1_2_ = state["About_Footer_M_C1_2_"]
		self.About_Footer_M_C1_1_ = state["About_Footer_M_C1_1_"]
		self.About_Footer_L_ = state["About_Footer_L_"]
		self.About_Footer_L_img_ = state["About_Footer_L_img_"]
		self.About_Footer_L_Para_ = state["About_Footer_L_Para_"]
		self.About_Footer_L_Head_ = state["About_Footer_L_Head_"]
		self.About_header_Flex_Left_Items_Pages_ = state["About_header_Flex_Left_Items_Pages_"]
		self.About_header_Flex_Left_Items_Menu_ = state["About_header_Flex_Left_Items_Menu_"]
		self.About_header_Flex_Left_Items_About_ = state["About_header_Flex_Left_Items_About_"]
		self.About_header_Flex_Left_Items_Home_ = state["About_header_Flex_Left_Items_Home_"]
		self.About_header_Flex_Left_Items_Cart_ = state["About_header_Flex_Left_Items_Cart_"]
		self.About_header_Logo_Image = state["About_header_Logo_Image"]
		self.About_header_Flex_Right_Btn_color_ = state["About_header_Flex_Right_Btn_color_"]
		self.About_header_Flex_Right_Btn_white_ = state["About_header_Flex_Right_Btn_white_"]
		self.About_story_Left_Heading_ = state["About_story_Left_Heading_"]
		self.About_story_Left_Para_ = state["About_story_Left_Para_"]
		self.About_story_Right_Image_ = state["About_story_Right_Image_"]
		self.About_second_story_Left__second_story_Right_ = state["About_second_story_Left__second_story_Right_"]
		self.About_second_story_Left_Image__ = state["About_second_story_Left_Image__"]
		self.About_companies_Flex_Left_Text_ = state["About_companies_Flex_Left_Text_"]
		self.About_companies_Flex_Right_Doordash_ = state["About_companies_Flex_Right_Doordash_"]
		self.About_companies_Flex_Right_Postmates_ = state["About_companies_Flex_Right_Postmates_"]
		self.About_companies_Flex_Right_Rappi_ = state["About_companies_Flex_Right_Rappi_"]
		self.About_companies_Flex_Right_Uber_eatss__ = state["About_companies_Flex_Right_Uber_eatss__"]
		self.Image145 = state["Image145"]
		self.Button40 = state["Button40"]
		self.TextBox254 = state["TextBox254"]
		self.TextBox256 = state["TextBox256"]
		self.TextBox257 = state["TextBox257"]
		self.TextBox262 = state["TextBox262"]
		self.TextBox263 = state["TextBox263"]
		self.TextBox264 = state["TextBox264"]
		self.Button41 = state["Button41"]
		self.Image147 = state["Image147"]
		self.Meet_our_team_Flex_Heading_Text_ = state["Meet_our_team_Flex_Heading_Text_"]
		self.Meet_our_team_Flex_Para_Text_ = state["Meet_our_team_Flex_Para_Text_"]
		self.Meet_our_team_Flex_Pictures_1_Image_ = state["Meet_our_team_Flex_Pictures_1_Image_"]
		self.TextBox267 = state["TextBox267"]
		self.Meet_our_team_Flex_Pictures_1_Post_Text_ = state["Meet_our_team_Flex_Pictures_1_Post_Text_"]
		self.Meet_our_team_Flex_Pictures_1_Msg_Text_ = state["Meet_our_team_Flex_Pictures_1_Msg_Text_"]
		self.Meet_our_team_Flex_Pictures_2_Image_ = state["Meet_our_team_Flex_Pictures_2_Image_"]
		self.Meet_our_team_Flex_Pictures_2_Msg_Text_ = state["Meet_our_team_Flex_Pictures_2_Msg_Text_"]
		self.Meet_our_team_Flex_Pictures_2_Post_Text_ = state["Meet_our_team_Flex_Pictures_2_Post_Text_"]
		self.Meet_our_team_Flex_Pictures_2_Name_Text_ = state["Meet_our_team_Flex_Pictures_2_Name_Text_"]
		self.Meet_our_team_Flex_Pictures_3_Image_ = state["Meet_our_team_Flex_Pictures_3_Image_"]
		self.Meet_our_team_Flex_Pictures_3_Msg_Text_ = state["Meet_our_team_Flex_Pictures_3_Msg_Text_"]
		self.Meet_our_team_Flex_Pictures_3_Post_Name_ = state["Meet_our_team_Flex_Pictures_3_Post_Name_"]
		self.Meet_our_team_Flex_Pictures_3_Name_Text_ = state["Meet_our_team_Flex_Pictures_3_Name_Text_"]
		self.The_value_Heading_Text_ = state["The_value_Heading_Text_"]
		self.The_value_Row_1_Flex1_Image_ = state["The_value_Row_1_Flex1_Image_"]
		self.The_value_Row_1_Flex1_h1_Text_ = state["The_value_Row_1_Flex1_h1_Text_"]
		self.The_value_Row_1_Flex1_h2_Text_ = state["The_value_Row_1_Flex1_h2_Text_"]
		self.The_value_Row_1_Flex2_Image_ = state["The_value_Row_1_Flex2_Image_"]
		self.The_value_Row_1_Flex2_h2_Text_ = state["The_value_Row_1_Flex2_h2_Text_"]
		self.The_value_Row_1_Flex2_h1_Text_ = state["The_value_Row_1_Flex2_h1_Text_"]
		self.The_value_Row_1_Flex3_Image_ = state["The_value_Row_1_Flex3_Image_"]
		self.The_value_Row_1_Flex3_h2_Text_ = state["The_value_Row_1_Flex3_h2_Text_"]
		self.The_value_Row_1_Flex3_h1_Text_ = state["The_value_Row_1_Flex3_h1_Text_"]
		self.The_value_Row_2_Flex3_Image_ = state["The_value_Row_2_Flex3_Image_"]
		self.The_value_Row_2_Flex3_h1_Text_ = state["The_value_Row_2_Flex3_h1_Text_"]
		self.The_value_Row_2_Flex3_h2_Text_ = state["The_value_Row_2_Flex3_h2_Text_"]
		self.The_value_Row_2_Flex2_Image_ = state["The_value_Row_2_Flex2_Image_"]
		self.The_value_Row_2_Flex2_h1_Text_ = state["The_value_Row_2_Flex2_h1_Text_"]
		self.The_value_Row_2_Flex2_h2_Text_ = state["The_value_Row_2_Flex2_h2_Text_"]
		self.The_value_Row_2_Flex1_Image = state["The_value_Row_2_Flex1_Image"]
		self.The_value_Row_2_Flex1_h2_Text_ = state["The_value_Row_2_Flex1_h2_Text_"]
		self.The_value_Row_2_Flex1_h1_Text_ = state["The_value_Row_2_Flex1_h1_Text_"]
		self.About_our_article_Images_Flex_Mimage_ = state["About_our_article_Images_Flex_Mimage_"]
		self.About_our_article_Images_Flex_Limage_ = state["About_our_article_Images_Flex_Limage_"]
		self.About_our_article_Images_Flex_Rimage_Row2_21_img_ = state["About_our_article_Images_Flex_Rimage_Row2_21_img_"]
		self.About_our_article_Images_Flex_Rimage_Row2_22_img_ = state["About_our_article_Images_Flex_Rimage_Row2_22_img_"]
		self.About_our_article_Images_Flex_Rimage_Row1_12_img_ = state["About_our_article_Images_Flex_Rimage_Row1_12_img_"]
		self.Menu_our_article_Images_Flex_Rimage_Row1_11_img_ = state["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"]
		self.Our_article_Head_R_Text_ = state["Our_article_Head_R_Text_"]
		self.Our_article_Head_L_Text_ = state["Our_article_Head_L_Text_"]
		self.About_Footer_M_C1_3__Footer_R_Head_Text_ = state["About_Footer_M_C1_3__Footer_R_Head_Text_"]
		self.About_Footer_M_C1_3__Footer_R_1_11_Img = state["About_Footer_M_C1_3__Footer_R_1_11_Img"]
		self.About_Footer_M_C1_3__Footer_R_1_12_img_Image = state["About_Footer_M_C1_3__Footer_R_1_12_img_Image"]
		self.About_Footer_M_C1_3__Footer_R_2_22_imgg_ = state["About_Footer_M_C1_3__Footer_R_2_22_imgg_"]
		self.About_Footer_M_C1_3__Footer_R_2_21_imgg_ = state["About_Footer_M_C1_3__Footer_R_2_21_imgg_"]
		self.About_Footer_M_C2_1_Text = state["About_Footer_M_C2_1_Text"]
		self.About_Footer_Footer_M_Text = state["About_Footer_Footer_M_Text"]
		self.About_Footer_M_C2_7_Text = state["About_Footer_M_C2_7_Text"]
		self.About_Footer_M_C2_8_Text = state["About_Footer_M_C2_8_Text"]
		self.About_Footer_M_C2_5_Text = state["About_Footer_M_C2_5_Text"]
		self.About_Footer_M_C2_6_txt_ = state["About_Footer_M_C2_6_txt_"]
		self.About_Footer_M_C2_3_Text = state["About_Footer_M_C2_3_Text"]
		self.About_Footer_M_C2_4_Text = state["About_Footer_M_C2_4_Text"]
		self.About_Footer_M_C1_4_txt_ = state["About_Footer_M_C1_4_txt_"]
		self.About_Footer_M_C1_3_txt_ = state["About_Footer_M_C1_3_txt_"]
		self.TextBox310 = state["TextBox310"]
		self.TextBox311 = state["TextBox311"]
		self.TextBox312 = state["TextBox312"]
		self.TextBox313 = state["TextBox313"]
		self.About_Footer_M_C1_2_txt_ = state["About_Footer_M_C1_2_txt_"]
		self.About_Footer_M_C1_1_txt_ = state["About_Footer_M_C1_1_txt_"]
		self.About_Footer_L_img_5 = state["About_Footer_L_img_5"]
		self.About_Footer_L_img_4 = state["About_Footer_L_img_4"]
		self.About_Footer_L_img_3 = state["About_Footer_L_img_3"]
		self.About_Footer_L_img_2 = state["About_Footer_L_img_2"]
		self.About_Footer_L_img_1 = state["About_Footer_L_img_1"]
		self.About_Footer_L_Para_Text_ = state["About_Footer_L_Para_Text_"]
		self.About_Footer_L_Head_img_ = state["About_Footer_L_Head_img_"]
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	def set_event(self, event):
		self.event_data = event["event_data"]
		self.event_alias = event["alias"]
		callback_name = event["callback_name"]
		comp = getattr(self, self.event_alias)
		setattr(comp, callback_name, True)
	@property
	def About_header_(self):
		self._getter_access_tracker["About_header_"] = {}
		return self._About_header_
	@About_header_.setter
	def About_header_(self, new_state):
		self._setter_access_tracker["About_header_"] = {}
		global default_state
		self._About_header_ = Div(new_state, default_state["About_header_"])

	@property
	def About_header_Flex_(self):
		self._getter_access_tracker["About_header_Flex_"] = {}
		return self._About_header_Flex_
	@About_header_Flex_.setter
	def About_header_Flex_(self, new_state):
		self._setter_access_tracker["About_header_Flex_"] = {}
		global default_state
		self._About_header_Flex_ = Flex(new_state, default_state["About_header_Flex_"])

	@property
	def About_header_Flex_Left_(self):
		self._getter_access_tracker["About_header_Flex_Left_"] = {}
		return self._About_header_Flex_Left_
	@About_header_Flex_Left_.setter
	def About_header_Flex_Left_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_"] = {}
		global default_state
		self._About_header_Flex_Left_ = Flex(new_state, default_state["About_header_Flex_Left_"])

	@property
	def About_header_Flex_Left_Items_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_"] = {}
		return self._About_header_Flex_Left_Items_
	@About_header_Flex_Left_Items_.setter
	def About_header_Flex_Left_Items_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_ = Flex(new_state, default_state["About_header_Flex_Left_Items_"])

	@property
	def About_header_Logo(self):
		self._getter_access_tracker["About_header_Logo"] = {}
		return self._About_header_Logo
	@About_header_Logo.setter
	def About_header_Logo(self, new_state):
		self._setter_access_tracker["About_header_Logo"] = {}
		global default_state
		self._About_header_Logo = Flex(new_state, default_state["About_header_Logo"])

	@property
	def About_header_Flex_Right_(self):
		self._getter_access_tracker["About_header_Flex_Right_"] = {}
		return self._About_header_Flex_Right_
	@About_header_Flex_Right_.setter
	def About_header_Flex_Right_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Right_"] = {}
		global default_state
		self._About_header_Flex_Right_ = Flex(new_state, default_state["About_header_Flex_Right_"])

	@property
	def About_story_(self):
		self._getter_access_tracker["About_story_"] = {}
		return self._About_story_
	@About_story_.setter
	def About_story_(self, new_state):
		self._setter_access_tracker["About_story_"] = {}
		global default_state
		self._About_story_ = Flex(new_state, default_state["About_story_"])

	@property
	def About_story_Left_(self):
		self._getter_access_tracker["About_story_Left_"] = {}
		return self._About_story_Left_
	@About_story_Left_.setter
	def About_story_Left_(self, new_state):
		self._setter_access_tracker["About_story_Left_"] = {}
		global default_state
		self._About_story_Left_ = Flex(new_state, default_state["About_story_Left_"])

	@property
	def About_story_Right_(self):
		self._getter_access_tracker["About_story_Right_"] = {}
		return self._About_story_Right_
	@About_story_Right_.setter
	def About_story_Right_(self, new_state):
		self._setter_access_tracker["About_story_Right_"] = {}
		global default_state
		self._About_story_Right_ = Flex(new_state, default_state["About_story_Right_"])

	@property
	def About_second_story_(self):
		self._getter_access_tracker["About_second_story_"] = {}
		return self._About_second_story_
	@About_second_story_.setter
	def About_second_story_(self, new_state):
		self._setter_access_tracker["About_second_story_"] = {}
		global default_state
		self._About_second_story_ = Flex(new_state, default_state["About_second_story_"])

	@property
	def About_second_story_Left_(self):
		self._getter_access_tracker["About_second_story_Left_"] = {}
		return self._About_second_story_Left_
	@About_second_story_Left_.setter
	def About_second_story_Left_(self, new_state):
		self._setter_access_tracker["About_second_story_Left_"] = {}
		global default_state
		self._About_second_story_Left_ = Flex(new_state, default_state["About_second_story_Left_"])

	@property
	def About_second_story_Left__companies_(self):
		self._getter_access_tracker["About_second_story_Left__companies_"] = {}
		return self._About_second_story_Left__companies_
	@About_second_story_Left__companies_.setter
	def About_second_story_Left__companies_(self, new_state):
		self._setter_access_tracker["About_second_story_Left__companies_"] = {}
		global default_state
		self._About_second_story_Left__companies_ = Flex(new_state, default_state["About_second_story_Left__companies_"])

	@property
	def About_companies_Flex_(self):
		self._getter_access_tracker["About_companies_Flex_"] = {}
		return self._About_companies_Flex_
	@About_companies_Flex_.setter
	def About_companies_Flex_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_"] = {}
		global default_state
		self._About_companies_Flex_ = Flex(new_state, default_state["About_companies_Flex_"])

	@property
	def About_companies_Flex_Left_(self):
		self._getter_access_tracker["About_companies_Flex_Left_"] = {}
		return self._About_companies_Flex_Left_
	@About_companies_Flex_Left_.setter
	def About_companies_Flex_Left_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Left_"] = {}
		global default_state
		self._About_companies_Flex_Left_ = Flex(new_state, default_state["About_companies_Flex_Left_"])

	@property
	def About_companies_Flex_Right_(self):
		self._getter_access_tracker["About_companies_Flex_Right_"] = {}
		return self._About_companies_Flex_Right_
	@About_companies_Flex_Right_.setter
	def About_companies_Flex_Right_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Right_"] = {}
		global default_state
		self._About_companies_Flex_Right_ = Flex(new_state, default_state["About_companies_Flex_Right_"])

	@property
	def Funder_met_and_first_burger_(self):
		self._getter_access_tracker["Funder_met_and_first_burger_"] = {}
		return self._Funder_met_and_first_burger_
	@Funder_met_and_first_burger_.setter
	def Funder_met_and_first_burger_(self, new_state):
		self._setter_access_tracker["Funder_met_and_first_burger_"] = {}
		global default_state
		self._Funder_met_and_first_burger_ = Flex(new_state, default_state["Funder_met_and_first_burger_"])

	@property
	def Founder_met_and_first_burger_First_row_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_First_row_"] = {}
		return self._Founder_met_and_first_burger_First_row_
	@Founder_met_and_first_burger_First_row_.setter
	def Founder_met_and_first_burger_First_row_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_First_row_"] = {}
		global default_state
		self._Founder_met_and_first_burger_First_row_ = Flex(new_state, default_state["Founder_met_and_first_burger_First_row_"])

	@property
	def Founder_met_and_first_burger_First_row_Left_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_First_row_Left_"] = {}
		return self._Founder_met_and_first_burger_First_row_Left_
	@Founder_met_and_first_burger_First_row_Left_.setter
	def Founder_met_and_first_burger_First_row_Left_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_First_row_Left_"] = {}
		global default_state
		self._Founder_met_and_first_burger_First_row_Left_ = Flex(new_state, default_state["Founder_met_and_first_burger_First_row_Left_"])

	@property
	def Founder_met_and_first_burger_First_row_Right_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_First_row_Right_"] = {}
		return self._Founder_met_and_first_burger_First_row_Right_
	@Founder_met_and_first_burger_First_row_Right_.setter
	def Founder_met_and_first_burger_First_row_Right_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_First_row_Right_"] = {}
		global default_state
		self._Founder_met_and_first_burger_First_row_Right_ = Flex(new_state, default_state["Founder_met_and_first_burger_First_row_Right_"])

	@property
	def Flex627(self):
		self._getter_access_tracker["Flex627"] = {}
		return self._Flex627
	@Flex627.setter
	def Flex627(self, new_state):
		self._setter_access_tracker["Flex627"] = {}
		global default_state
		self._Flex627 = Flex(new_state, default_state["Flex627"])

	@property
	def Flex628(self):
		self._getter_access_tracker["Flex628"] = {}
		return self._Flex628
	@Flex628.setter
	def Flex628(self, new_state):
		self._setter_access_tracker["Flex628"] = {}
		global default_state
		self._Flex628 = Flex(new_state, default_state["Flex628"])

	@property
	def Flex629(self):
		self._getter_access_tracker["Flex629"] = {}
		return self._Flex629
	@Flex629.setter
	def Flex629(self, new_state):
		self._setter_access_tracker["Flex629"] = {}
		global default_state
		self._Flex629 = Flex(new_state, default_state["Flex629"])

	@property
	def Founder_met_and_first_burger_second_row_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_second_row_"] = {}
		return self._Founder_met_and_first_burger_second_row_
	@Founder_met_and_first_burger_second_row_.setter
	def Founder_met_and_first_burger_second_row_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_second_row_"] = {}
		global default_state
		self._Founder_met_and_first_burger_second_row_ = Flex(new_state, default_state["Founder_met_and_first_burger_second_row_"])

	@property
	def Founder_met_and_first_burger_second_row_Left_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_second_row_Left_"] = {}
		return self._Founder_met_and_first_burger_second_row_Left_
	@Founder_met_and_first_burger_second_row_Left_.setter
	def Founder_met_and_first_burger_second_row_Left_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_second_row_Left_"] = {}
		global default_state
		self._Founder_met_and_first_burger_second_row_Left_ = Flex(new_state, default_state["Founder_met_and_first_burger_second_row_Left_"])

	@property
	def Flex638(self):
		self._getter_access_tracker["Flex638"] = {}
		return self._Flex638
	@Flex638.setter
	def Flex638(self, new_state):
		self._setter_access_tracker["Flex638"] = {}
		global default_state
		self._Flex638 = Flex(new_state, default_state["Flex638"])

	@property
	def Flex639(self):
		self._getter_access_tracker["Flex639"] = {}
		return self._Flex639
	@Flex639.setter
	def Flex639(self, new_state):
		self._setter_access_tracker["Flex639"] = {}
		global default_state
		self._Flex639 = Flex(new_state, default_state["Flex639"])

	@property
	def Flex640(self):
		self._getter_access_tracker["Flex640"] = {}
		return self._Flex640
	@Flex640.setter
	def Flex640(self, new_state):
		self._setter_access_tracker["Flex640"] = {}
		global default_state
		self._Flex640 = Flex(new_state, default_state["Flex640"])

	@property
	def Flex644(self):
		self._getter_access_tracker["Flex644"] = {}
		return self._Flex644
	@Flex644.setter
	def Flex644(self, new_state):
		self._setter_access_tracker["Flex644"] = {}
		global default_state
		self._Flex644 = Flex(new_state, default_state["Flex644"])

	@property
	def Founder_met_and_first_burger_second_row_Right_(self):
		self._getter_access_tracker["Founder_met_and_first_burger_second_row_Right_"] = {}
		return self._Founder_met_and_first_burger_second_row_Right_
	@Founder_met_and_first_burger_second_row_Right_.setter
	def Founder_met_and_first_burger_second_row_Right_(self, new_state):
		self._setter_access_tracker["Founder_met_and_first_burger_second_row_Right_"] = {}
		global default_state
		self._Founder_met_and_first_burger_second_row_Right_ = Flex(new_state, default_state["Founder_met_and_first_burger_second_row_Right_"])

	@property
	def Meet_our_team_(self):
		self._getter_access_tracker["Meet_our_team_"] = {}
		return self._Meet_our_team_
	@Meet_our_team_.setter
	def Meet_our_team_(self, new_state):
		self._setter_access_tracker["Meet_our_team_"] = {}
		global default_state
		self._Meet_our_team_ = Flex(new_state, default_state["Meet_our_team_"])

	@property
	def Meet_our_team_Flex_(self):
		self._getter_access_tracker["Meet_our_team_Flex_"] = {}
		return self._Meet_our_team_Flex_
	@Meet_our_team_Flex_.setter
	def Meet_our_team_Flex_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_"] = {}
		global default_state
		self._Meet_our_team_Flex_ = Flex(new_state, default_state["Meet_our_team_Flex_"])

	@property
	def Meet_our_team_Flex_Heading_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Heading_"] = {}
		return self._Meet_our_team_Flex_Heading_
	@Meet_our_team_Flex_Heading_.setter
	def Meet_our_team_Flex_Heading_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Heading_"] = {}
		global default_state
		self._Meet_our_team_Flex_Heading_ = Flex(new_state, default_state["Meet_our_team_Flex_Heading_"])

	@property
	def Meet_our_team_Flex_Para_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Para_"] = {}
		return self._Meet_our_team_Flex_Para_
	@Meet_our_team_Flex_Para_.setter
	def Meet_our_team_Flex_Para_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Para_"] = {}
		global default_state
		self._Meet_our_team_Flex_Para_ = Flex(new_state, default_state["Meet_our_team_Flex_Para_"])

	@property
	def Meet_our_team_Flex_Pictures_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_"] = {}
		return self._Meet_our_team_Flex_Pictures_
	@Meet_our_team_Flex_Pictures_.setter
	def Meet_our_team_Flex_Pictures_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_"])

	@property
	def Meet_our_team_Flex_Pictures_1_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_
	@Meet_our_team_Flex_Pictures_1_.setter
	def Meet_our_team_Flex_Pictures_1_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_1_"])

	@property
	def Meet_our_team_Flex_Pictures_1_Name_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Name_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Name_
	@Meet_our_team_Flex_Pictures_1_Name_.setter
	def Meet_our_team_Flex_Pictures_1_Name_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Name_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Name_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_1_Name_"])

	@property
	def Meet_our_team_Flex_Pictures_1_Post_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Post_
	@Meet_our_team_Flex_Pictures_1_Post_.setter
	def Meet_our_team_Flex_Pictures_1_Post_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Post_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_1_Post_"])

	@property
	def Meet_our_team_Flex_Pictures_1_Post_Msg_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_Msg_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Post_Msg_
	@Meet_our_team_Flex_Pictures_1_Post_Msg_.setter
	def Meet_our_team_Flex_Pictures_1_Post_Msg_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_Msg_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Post_Msg_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_1_Post_Msg_"])

	@property
	def Meet_our_team_Flex_Pictures_2_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_
	@Meet_our_team_Flex_Pictures_2_.setter
	def Meet_our_team_Flex_Pictures_2_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_2_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Msg_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Msg_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Msg_
	@Meet_our_team_Flex_Pictures_2_Msg_.setter
	def Meet_our_team_Flex_Pictures_2_Msg_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Msg_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Msg_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_2_Msg_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Post_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Post_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Post_
	@Meet_our_team_Flex_Pictures_2_Post_.setter
	def Meet_our_team_Flex_Pictures_2_Post_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Post_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Post_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_2_Post_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Name_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Name_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Name_
	@Meet_our_team_Flex_Pictures_2_Name_.setter
	def Meet_our_team_Flex_Pictures_2_Name_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Name_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Name_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_2_Name_"])

	@property
	def Meet_our_team_Flex_Pictures_3_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_
	@Meet_our_team_Flex_Pictures_3_.setter
	def Meet_our_team_Flex_Pictures_3_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_3_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Msg_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Msg_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Msg_
	@Meet_our_team_Flex_Pictures_3_Msg_.setter
	def Meet_our_team_Flex_Pictures_3_Msg_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Msg_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Msg_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_3_Msg_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Post_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Post_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Post_
	@Meet_our_team_Flex_Pictures_3_Post_.setter
	def Meet_our_team_Flex_Pictures_3_Post_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Post_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Post_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_3_Post_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Name_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Name_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Name_
	@Meet_our_team_Flex_Pictures_3_Name_.setter
	def Meet_our_team_Flex_Pictures_3_Name_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Name_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Name_ = Flex(new_state, default_state["Meet_our_team_Flex_Pictures_3_Name_"])

	@property
	def The_value_(self):
		self._getter_access_tracker["The_value_"] = {}
		return self._The_value_
	@The_value_.setter
	def The_value_(self, new_state):
		self._setter_access_tracker["The_value_"] = {}
		global default_state
		self._The_value_ = Flex(new_state, default_state["The_value_"])

	@property
	def The_value_Heading_(self):
		self._getter_access_tracker["The_value_Heading_"] = {}
		return self._The_value_Heading_
	@The_value_Heading_.setter
	def The_value_Heading_(self, new_state):
		self._setter_access_tracker["The_value_Heading_"] = {}
		global default_state
		self._The_value_Heading_ = Flex(new_state, default_state["The_value_Heading_"])

	@property
	def The_value_Row_1_(self):
		self._getter_access_tracker["The_value_Row_1_"] = {}
		return self._The_value_Row_1_
	@The_value_Row_1_.setter
	def The_value_Row_1_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_"] = {}
		global default_state
		self._The_value_Row_1_ = Flex(new_state, default_state["The_value_Row_1_"])

	@property
	def The_value_Row_1_Flex1_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_"] = {}
		return self._The_value_Row_1_Flex1_
	@The_value_Row_1_Flex1_.setter
	def The_value_Row_1_Flex1_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_ = Flex(new_state, default_state["The_value_Row_1_Flex1_"])

	@property
	def The_value_Row_1_Flex1_h1_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_h1_"] = {}
		return self._The_value_Row_1_Flex1_h1_
	@The_value_Row_1_Flex1_h1_.setter
	def The_value_Row_1_Flex1_h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_h1_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_h1_ = Flex(new_state, default_state["The_value_Row_1_Flex1_h1_"])

	@property
	def The_value_Row_1_Flex1_h2_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_h2_"] = {}
		return self._The_value_Row_1_Flex1_h2_
	@The_value_Row_1_Flex1_h2_.setter
	def The_value_Row_1_Flex1_h2_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_h2_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_h2_ = Flex(new_state, default_state["The_value_Row_1_Flex1_h2_"])

	@property
	def The_value_Row_1_Flex2_(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_"] = {}
		return self._The_value_Row_1_Flex2_
	@The_value_Row_1_Flex2_.setter
	def The_value_Row_1_Flex2_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_"] = {}
		global default_state
		self._The_value_Row_1_Flex2_ = Flex(new_state, default_state["The_value_Row_1_Flex2_"])

	@property
	def The_value_Row_1_Flex2_h2__(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_h2__"] = {}
		return self._The_value_Row_1_Flex2_h2__
	@The_value_Row_1_Flex2_h2__.setter
	def The_value_Row_1_Flex2_h2__(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_h2__"] = {}
		global default_state
		self._The_value_Row_1_Flex2_h2__ = Flex(new_state, default_state["The_value_Row_1_Flex2_h2__"])

	@property
	def The_value_Row_1_Flex2_h1_(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_h1_"] = {}
		return self._The_value_Row_1_Flex2_h1_
	@The_value_Row_1_Flex2_h1_.setter
	def The_value_Row_1_Flex2_h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_h1_"] = {}
		global default_state
		self._The_value_Row_1_Flex2_h1_ = Flex(new_state, default_state["The_value_Row_1_Flex2_h1_"])

	@property
	def The_value_Row_1_Flex_3_(self):
		self._getter_access_tracker["The_value_Row_1_Flex_3_"] = {}
		return self._The_value_Row_1_Flex_3_
	@The_value_Row_1_Flex_3_.setter
	def The_value_Row_1_Flex_3_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex_3_"] = {}
		global default_state
		self._The_value_Row_1_Flex_3_ = Flex(new_state, default_state["The_value_Row_1_Flex_3_"])

	@property
	def The_value_Row_1_Flex3_h2_(self):
		self._getter_access_tracker["The_value_Row_1_Flex3_h2_"] = {}
		return self._The_value_Row_1_Flex3_h2_
	@The_value_Row_1_Flex3_h2_.setter
	def The_value_Row_1_Flex3_h2_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex3_h2_"] = {}
		global default_state
		self._The_value_Row_1_Flex3_h2_ = Flex(new_state, default_state["The_value_Row_1_Flex3_h2_"])

	@property
	def The_value_Row_1_Flex3__h1_(self):
		self._getter_access_tracker["The_value_Row_1_Flex3__h1_"] = {}
		return self._The_value_Row_1_Flex3__h1_
	@The_value_Row_1_Flex3__h1_.setter
	def The_value_Row_1_Flex3__h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex3__h1_"] = {}
		global default_state
		self._The_value_Row_1_Flex3__h1_ = Flex(new_state, default_state["The_value_Row_1_Flex3__h1_"])

	@property
	def The_value_Row_2_(self):
		self._getter_access_tracker["The_value_Row_2_"] = {}
		return self._The_value_Row_2_
	@The_value_Row_2_.setter
	def The_value_Row_2_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_"] = {}
		global default_state
		self._The_value_Row_2_ = Flex(new_state, default_state["The_value_Row_2_"])

	@property
	def The_value_Row_2_Flex3_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_"] = {}
		return self._The_value_Row_2_Flex3_
	@The_value_Row_2_Flex3_.setter
	def The_value_Row_2_Flex3_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_ = Flex(new_state, default_state["The_value_Row_2_Flex3_"])

	@property
	def The_value_Row_2_Flex3_h1_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_h1_"] = {}
		return self._The_value_Row_2_Flex3_h1_
	@The_value_Row_2_Flex3_h1_.setter
	def The_value_Row_2_Flex3_h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_h1_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_h1_ = Flex(new_state, default_state["The_value_Row_2_Flex3_h1_"])

	@property
	def The_value_Row_2_Flex3_h2_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_h2_"] = {}
		return self._The_value_Row_2_Flex3_h2_
	@The_value_Row_2_Flex3_h2_.setter
	def The_value_Row_2_Flex3_h2_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_h2_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_h2_ = Flex(new_state, default_state["The_value_Row_2_Flex3_h2_"])

	@property
	def The_value_Row_2_Flex2_(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_"] = {}
		return self._The_value_Row_2_Flex2_
	@The_value_Row_2_Flex2_.setter
	def The_value_Row_2_Flex2_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_"] = {}
		global default_state
		self._The_value_Row_2_Flex2_ = Flex(new_state, default_state["The_value_Row_2_Flex2_"])

	@property
	def The_value_Row_2_Flex2_h1_(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_h1_"] = {}
		return self._The_value_Row_2_Flex2_h1_
	@The_value_Row_2_Flex2_h1_.setter
	def The_value_Row_2_Flex2_h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_h1_"] = {}
		global default_state
		self._The_value_Row_2_Flex2_h1_ = Flex(new_state, default_state["The_value_Row_2_Flex2_h1_"])

	@property
	def The_value_Row_2_Flex2_h2__(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_h2__"] = {}
		return self._The_value_Row_2_Flex2_h2__
	@The_value_Row_2_Flex2_h2__.setter
	def The_value_Row_2_Flex2_h2__(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_h2__"] = {}
		global default_state
		self._The_value_Row_2_Flex2_h2__ = Flex(new_state, default_state["The_value_Row_2_Flex2_h2__"])

	@property
	def The_value_Row_2_Flex1_(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_"] = {}
		return self._The_value_Row_2_Flex1_
	@The_value_Row_2_Flex1_.setter
	def The_value_Row_2_Flex1_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_"] = {}
		global default_state
		self._The_value_Row_2_Flex1_ = Flex(new_state, default_state["The_value_Row_2_Flex1_"])

	@property
	def The_value_Row_2_Flex1_h2_(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_h2_"] = {}
		return self._The_value_Row_2_Flex1_h2_
	@The_value_Row_2_Flex1_h2_.setter
	def The_value_Row_2_Flex1_h2_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_h2_"] = {}
		global default_state
		self._The_value_Row_2_Flex1_h2_ = Flex(new_state, default_state["The_value_Row_2_Flex1_h2_"])

	@property
	def The_value_Row_2_Flex1_h1_(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_h1_"] = {}
		return self._The_value_Row_2_Flex1_h1_
	@The_value_Row_2_Flex1_h1_.setter
	def The_value_Row_2_Flex1_h1_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_h1_"] = {}
		global default_state
		self._The_value_Row_2_Flex1_h1_ = Flex(new_state, default_state["The_value_Row_2_Flex1_h1_"])

	@property
	def About_our_article_(self):
		self._getter_access_tracker["About_our_article_"] = {}
		return self._About_our_article_
	@About_our_article_.setter
	def About_our_article_(self, new_state):
		self._setter_access_tracker["About_our_article_"] = {}
		global default_state
		self._About_our_article_ = Flex(new_state, default_state["About_our_article_"])

	@property
	def About_our_article_Images_(self):
		self._getter_access_tracker["About_our_article_Images_"] = {}
		return self._About_our_article_Images_
	@About_our_article_Images_.setter
	def About_our_article_Images_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_"] = {}
		global default_state
		self._About_our_article_Images_ = Flex(new_state, default_state["About_our_article_Images_"])

	@property
	def About_our_article_Images_Flex(self):
		self._getter_access_tracker["About_our_article_Images_Flex"] = {}
		return self._About_our_article_Images_Flex
	@About_our_article_Images_Flex.setter
	def About_our_article_Images_Flex(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex"] = {}
		global default_state
		self._About_our_article_Images_Flex = Flex(new_state, default_state["About_our_article_Images_Flex"])

	@property
	def About_our_article_Images_Flex_Rimage_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_"] = {}
		return self._About_our_article_Images_Flex_Rimage_
	@About_our_article_Images_Flex_Rimage_.setter
	def About_our_article_Images_Flex_Rimage_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row2_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row2_
	@About_our_article_Images_Flex_Rimage_Row2_.setter
	def About_our_article_Images_Flex_Rimage_Row2_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row2_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_Row2_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row2_21_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_21_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row2_21_
	@About_our_article_Images_Flex_Rimage_Row2_21_.setter
	def About_our_article_Images_Flex_Rimage_Row2_21_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_21_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row2_21_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_Row2_21_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row2_22_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_22_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row2_22_
	@About_our_article_Images_Flex_Rimage_Row2_22_.setter
	def About_our_article_Images_Flex_Rimage_Row2_22_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_22_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row2_22_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_Row2_22_"])

	@property
	def About_our_article_Images_Flex_Rimage_row1_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_row1_"] = {}
		return self._About_our_article_Images_Flex_Rimage_row1_
	@About_our_article_Images_Flex_Rimage_row1_.setter
	def About_our_article_Images_Flex_Rimage_row1_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_row1_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_row1_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_row1_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row1_12_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_12_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row1_12_
	@About_our_article_Images_Flex_Rimage_Row1_12_.setter
	def About_our_article_Images_Flex_Rimage_Row1_12_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_12_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row1_12_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_Row1_12_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row1_11_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_11_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row1_11_
	@About_our_article_Images_Flex_Rimage_Row1_11_.setter
	def About_our_article_Images_Flex_Rimage_Row1_11_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_11_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row1_11_ = Flex(new_state, default_state["About_our_article_Images_Flex_Rimage_Row1_11_"])

	@property
	def Our_article_Head_(self):
		self._getter_access_tracker["Our_article_Head_"] = {}
		return self._Our_article_Head_
	@Our_article_Head_.setter
	def Our_article_Head_(self, new_state):
		self._setter_access_tracker["Our_article_Head_"] = {}
		global default_state
		self._Our_article_Head_ = Flex(new_state, default_state["Our_article_Head_"])

	@property
	def Our_article_Head_R_(self):
		self._getter_access_tracker["Our_article_Head_R_"] = {}
		return self._Our_article_Head_R_
	@Our_article_Head_R_.setter
	def Our_article_Head_R_(self, new_state):
		self._setter_access_tracker["Our_article_Head_R_"] = {}
		global default_state
		self._Our_article_Head_R_ = Flex(new_state, default_state["Our_article_Head_R_"])

	@property
	def Our_article_Head_L_(self):
		self._getter_access_tracker["Our_article_Head_L_"] = {}
		return self._Our_article_Head_L_
	@Our_article_Head_L_.setter
	def Our_article_Head_L_(self, new_state):
		self._setter_access_tracker["Our_article_Head_L_"] = {}
		global default_state
		self._Our_article_Head_L_ = Flex(new_state, default_state["Our_article_Head_L_"])

	@property
	def About_Footer_(self):
		self._getter_access_tracker["About_Footer_"] = {}
		return self._About_Footer_
	@About_Footer_.setter
	def About_Footer_(self, new_state):
		self._setter_access_tracker["About_Footer_"] = {}
		global default_state
		self._About_Footer_ = Flex(new_state, default_state["About_Footer_"])

	@property
	def About_Footer_R_(self):
		self._getter_access_tracker["About_Footer_R_"] = {}
		return self._About_Footer_R_
	@About_Footer_R_.setter
	def About_Footer_R_(self, new_state):
		self._setter_access_tracker["About_Footer_R_"] = {}
		global default_state
		self._About_Footer_R_ = Flex(new_state, default_state["About_Footer_R_"])

	@property
	def About__Footer_R_Head(self):
		self._getter_access_tracker["About__Footer_R_Head"] = {}
		return self._About__Footer_R_Head
	@About__Footer_R_Head.setter
	def About__Footer_R_Head(self, new_state):
		self._setter_access_tracker["About__Footer_R_Head"] = {}
		global default_state
		self._About__Footer_R_Head = Flex(new_state, default_state["About__Footer_R_Head"])

	@property
	def About_Footer_M_C1_3__Footer_R_1_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_1_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_1_
	@About_Footer_M_C1_3__Footer_R_1_.setter
	def About_Footer_M_C1_3__Footer_R_1_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_1_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_1_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_1_"])

	@property
	def About_Footer_M_C1_3__Footer_R_1_11_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_1_11_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_1_11_
	@About_Footer_M_C1_3__Footer_R_1_11_.setter
	def About_Footer_M_C1_3__Footer_R_1_11_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_1_11_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_1_11_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_1_11_"])

	@property
	def About_Footer_M_C1_3__Footer_R_1_12_img_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_1_12_img_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_1_12_img_
	@About_Footer_M_C1_3__Footer_R_1_12_img_.setter
	def About_Footer_M_C1_3__Footer_R_1_12_img_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_1_12_img_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_1_12_img_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_1_12_img_"])

	@property
	def About_Footer_M_C1_3__Footer_R_2_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_2_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_2_
	@About_Footer_M_C1_3__Footer_R_2_.setter
	def About_Footer_M_C1_3__Footer_R_2_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_2_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_2_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_2_"])

	@property
	def About_Footer_M_C1_3__Footer_R_2_22_img_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_2_22_img_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_2_22_img_
	@About_Footer_M_C1_3__Footer_R_2_22_img_.setter
	def About_Footer_M_C1_3__Footer_R_2_22_img_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_2_22_img_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_2_22_img_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_2_22_img_"])

	@property
	def About_Footer_M_C1_3__Footer_R_2_21_img_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_2_21_img_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_2_21_img_
	@About_Footer_M_C1_3__Footer_R_2_21_img_.setter
	def About_Footer_M_C1_3__Footer_R_2_21_img_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_2_21_img_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_2_21_img_ = Flex(new_state, default_state["About_Footer_M_C1_3__Footer_R_2_21_img_"])

	@property
	def About_Footer_M_(self):
		self._getter_access_tracker["About_Footer_M_"] = {}
		return self._About_Footer_M_
	@About_Footer_M_.setter
	def About_Footer_M_(self, new_state):
		self._setter_access_tracker["About_Footer_M_"] = {}
		global default_state
		self._About_Footer_M_ = Flex(new_state, default_state["About_Footer_M_"])

	@property
	def About_Footer_M_C2_(self):
		self._getter_access_tracker["About_Footer_M_C2_"] = {}
		return self._About_Footer_M_C2_
	@About_Footer_M_C2_.setter
	def About_Footer_M_C2_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_"] = {}
		global default_state
		self._About_Footer_M_C2_ = Flex(new_state, default_state["About_Footer_M_C2_"])

	@property
	def About_Footer_M_C2_1(self):
		self._getter_access_tracker["About_Footer_M_C2_1"] = {}
		return self._About_Footer_M_C2_1
	@About_Footer_M_C2_1.setter
	def About_Footer_M_C2_1(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_1"] = {}
		global default_state
		self._About_Footer_M_C2_1 = Flex(new_state, default_state["About_Footer_M_C2_1"])

	@property
	def About_Footer_Footer_M(self):
		self._getter_access_tracker["About_Footer_Footer_M"] = {}
		return self._About_Footer_Footer_M
	@About_Footer_Footer_M.setter
	def About_Footer_Footer_M(self, new_state):
		self._setter_access_tracker["About_Footer_Footer_M"] = {}
		global default_state
		self._About_Footer_Footer_M = Flex(new_state, default_state["About_Footer_Footer_M"])

	@property
	def About_Footer_M_C2_7(self):
		self._getter_access_tracker["About_Footer_M_C2_7"] = {}
		return self._About_Footer_M_C2_7
	@About_Footer_M_C2_7.setter
	def About_Footer_M_C2_7(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_7"] = {}
		global default_state
		self._About_Footer_M_C2_7 = Flex(new_state, default_state["About_Footer_M_C2_7"])

	@property
	def About_Footer_M_C2_8(self):
		self._getter_access_tracker["About_Footer_M_C2_8"] = {}
		return self._About_Footer_M_C2_8
	@About_Footer_M_C2_8.setter
	def About_Footer_M_C2_8(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_8"] = {}
		global default_state
		self._About_Footer_M_C2_8 = Flex(new_state, default_state["About_Footer_M_C2_8"])

	@property
	def About_Footer_M_C2_5(self):
		self._getter_access_tracker["About_Footer_M_C2_5"] = {}
		return self._About_Footer_M_C2_5
	@About_Footer_M_C2_5.setter
	def About_Footer_M_C2_5(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_5"] = {}
		global default_state
		self._About_Footer_M_C2_5 = Flex(new_state, default_state["About_Footer_M_C2_5"])

	@property
	def About_Footer_M_C2_6(self):
		self._getter_access_tracker["About_Footer_M_C2_6"] = {}
		return self._About_Footer_M_C2_6
	@About_Footer_M_C2_6.setter
	def About_Footer_M_C2_6(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_6"] = {}
		global default_state
		self._About_Footer_M_C2_6 = Flex(new_state, default_state["About_Footer_M_C2_6"])

	@property
	def About_Footer_M_C2_3(self):
		self._getter_access_tracker["About_Footer_M_C2_3"] = {}
		return self._About_Footer_M_C2_3
	@About_Footer_M_C2_3.setter
	def About_Footer_M_C2_3(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_3"] = {}
		global default_state
		self._About_Footer_M_C2_3 = Flex(new_state, default_state["About_Footer_M_C2_3"])

	@property
	def About_Footer_M_C2_4(self):
		self._getter_access_tracker["About_Footer_M_C2_4"] = {}
		return self._About_Footer_M_C2_4
	@About_Footer_M_C2_4.setter
	def About_Footer_M_C2_4(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_4"] = {}
		global default_state
		self._About_Footer_M_C2_4 = Flex(new_state, default_state["About_Footer_M_C2_4"])

	@property
	def About_Footer_M_C1_(self):
		self._getter_access_tracker["About_Footer_M_C1_"] = {}
		return self._About_Footer_M_C1_
	@About_Footer_M_C1_.setter
	def About_Footer_M_C1_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_"] = {}
		global default_state
		self._About_Footer_M_C1_ = Flex(new_state, default_state["About_Footer_M_C1_"])

	@property
	def About_Footer_M_C1_4_(self):
		self._getter_access_tracker["About_Footer_M_C1_4_"] = {}
		return self._About_Footer_M_C1_4_
	@About_Footer_M_C1_4_.setter
	def About_Footer_M_C1_4_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_4_"] = {}
		global default_state
		self._About_Footer_M_C1_4_ = Flex(new_state, default_state["About_Footer_M_C1_4_"])

	@property
	def About_Footer_M_C1_3_(self):
		self._getter_access_tracker["About_Footer_M_C1_3_"] = {}
		return self._About_Footer_M_C1_3_
	@About_Footer_M_C1_3_.setter
	def About_Footer_M_C1_3_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3_"] = {}
		global default_state
		self._About_Footer_M_C1_3_ = Flex(new_state, default_state["About_Footer_M_C1_3_"])

	@property
	def About_Footer_M_C1_6_(self):
		self._getter_access_tracker["About_Footer_M_C1_6_"] = {}
		return self._About_Footer_M_C1_6_
	@About_Footer_M_C1_6_.setter
	def About_Footer_M_C1_6_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_6_"] = {}
		global default_state
		self._About_Footer_M_C1_6_ = Flex(new_state, default_state["About_Footer_M_C1_6_"])

	@property
	def About_Footer_M_C1_5_(self):
		self._getter_access_tracker["About_Footer_M_C1_5_"] = {}
		return self._About_Footer_M_C1_5_
	@About_Footer_M_C1_5_.setter
	def About_Footer_M_C1_5_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_5_"] = {}
		global default_state
		self._About_Footer_M_C1_5_ = Flex(new_state, default_state["About_Footer_M_C1_5_"])

	@property
	def About_Footer_M_C1_8_(self):
		self._getter_access_tracker["About_Footer_M_C1_8_"] = {}
		return self._About_Footer_M_C1_8_
	@About_Footer_M_C1_8_.setter
	def About_Footer_M_C1_8_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_8_"] = {}
		global default_state
		self._About_Footer_M_C1_8_ = Flex(new_state, default_state["About_Footer_M_C1_8_"])

	@property
	def About_Footer_M_C1_7_(self):
		self._getter_access_tracker["About_Footer_M_C1_7_"] = {}
		return self._About_Footer_M_C1_7_
	@About_Footer_M_C1_7_.setter
	def About_Footer_M_C1_7_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_7_"] = {}
		global default_state
		self._About_Footer_M_C1_7_ = Flex(new_state, default_state["About_Footer_M_C1_7_"])

	@property
	def About_Footer_M_C1_2_(self):
		self._getter_access_tracker["About_Footer_M_C1_2_"] = {}
		return self._About_Footer_M_C1_2_
	@About_Footer_M_C1_2_.setter
	def About_Footer_M_C1_2_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_2_"] = {}
		global default_state
		self._About_Footer_M_C1_2_ = Flex(new_state, default_state["About_Footer_M_C1_2_"])

	@property
	def About_Footer_M_C1_1_(self):
		self._getter_access_tracker["About_Footer_M_C1_1_"] = {}
		return self._About_Footer_M_C1_1_
	@About_Footer_M_C1_1_.setter
	def About_Footer_M_C1_1_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_1_"] = {}
		global default_state
		self._About_Footer_M_C1_1_ = Flex(new_state, default_state["About_Footer_M_C1_1_"])

	@property
	def About_Footer_L_(self):
		self._getter_access_tracker["About_Footer_L_"] = {}
		return self._About_Footer_L_
	@About_Footer_L_.setter
	def About_Footer_L_(self, new_state):
		self._setter_access_tracker["About_Footer_L_"] = {}
		global default_state
		self._About_Footer_L_ = Flex(new_state, default_state["About_Footer_L_"])

	@property
	def About_Footer_L_img_(self):
		self._getter_access_tracker["About_Footer_L_img_"] = {}
		return self._About_Footer_L_img_
	@About_Footer_L_img_.setter
	def About_Footer_L_img_(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_"] = {}
		global default_state
		self._About_Footer_L_img_ = Flex(new_state, default_state["About_Footer_L_img_"])

	@property
	def About_Footer_L_Para_(self):
		self._getter_access_tracker["About_Footer_L_Para_"] = {}
		return self._About_Footer_L_Para_
	@About_Footer_L_Para_.setter
	def About_Footer_L_Para_(self, new_state):
		self._setter_access_tracker["About_Footer_L_Para_"] = {}
		global default_state
		self._About_Footer_L_Para_ = Flex(new_state, default_state["About_Footer_L_Para_"])

	@property
	def About_Footer_L_Head_(self):
		self._getter_access_tracker["About_Footer_L_Head_"] = {}
		return self._About_Footer_L_Head_
	@About_Footer_L_Head_.setter
	def About_Footer_L_Head_(self, new_state):
		self._setter_access_tracker["About_Footer_L_Head_"] = {}
		global default_state
		self._About_Footer_L_Head_ = Flex(new_state, default_state["About_Footer_L_Head_"])

	@property
	def About_header_Flex_Left_Items_Pages_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_Pages_"] = {}
		return self._About_header_Flex_Left_Items_Pages_
	@About_header_Flex_Left_Items_Pages_.setter
	def About_header_Flex_Left_Items_Pages_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_Pages_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_Pages_ = Link(new_state, default_state["About_header_Flex_Left_Items_Pages_"])

	@property
	def About_header_Flex_Left_Items_Menu_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_Menu_"] = {}
		return self._About_header_Flex_Left_Items_Menu_
	@About_header_Flex_Left_Items_Menu_.setter
	def About_header_Flex_Left_Items_Menu_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_Menu_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_Menu_ = Link(new_state, default_state["About_header_Flex_Left_Items_Menu_"])

	@property
	def About_header_Flex_Left_Items_About_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_About_"] = {}
		return self._About_header_Flex_Left_Items_About_
	@About_header_Flex_Left_Items_About_.setter
	def About_header_Flex_Left_Items_About_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_About_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_About_ = Link(new_state, default_state["About_header_Flex_Left_Items_About_"])

	@property
	def About_header_Flex_Left_Items_Home_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_Home_"] = {}
		return self._About_header_Flex_Left_Items_Home_
	@About_header_Flex_Left_Items_Home_.setter
	def About_header_Flex_Left_Items_Home_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_Home_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_Home_ = Link(new_state, default_state["About_header_Flex_Left_Items_Home_"])

	@property
	def About_header_Flex_Left_Items_Cart_(self):
		self._getter_access_tracker["About_header_Flex_Left_Items_Cart_"] = {}
		return self._About_header_Flex_Left_Items_Cart_
	@About_header_Flex_Left_Items_Cart_.setter
	def About_header_Flex_Left_Items_Cart_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Left_Items_Cart_"] = {}
		global default_state
		self._About_header_Flex_Left_Items_Cart_ = Link(new_state, default_state["About_header_Flex_Left_Items_Cart_"])

	@property
	def About_header_Logo_Image(self):
		self._getter_access_tracker["About_header_Logo_Image"] = {}
		return self._About_header_Logo_Image
	@About_header_Logo_Image.setter
	def About_header_Logo_Image(self, new_state):
		self._setter_access_tracker["About_header_Logo_Image"] = {}
		global default_state
		self._About_header_Logo_Image = Image(new_state, default_state["About_header_Logo_Image"])

	@property
	def About_header_Flex_Right_Btn_color_(self):
		self._getter_access_tracker["About_header_Flex_Right_Btn_color_"] = {}
		return self._About_header_Flex_Right_Btn_color_
	@About_header_Flex_Right_Btn_color_.setter
	def About_header_Flex_Right_Btn_color_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Right_Btn_color_"] = {}
		global default_state
		self._About_header_Flex_Right_Btn_color_ = Button(new_state, default_state["About_header_Flex_Right_Btn_color_"])

	@property
	def About_header_Flex_Right_Btn_white_(self):
		self._getter_access_tracker["About_header_Flex_Right_Btn_white_"] = {}
		return self._About_header_Flex_Right_Btn_white_
	@About_header_Flex_Right_Btn_white_.setter
	def About_header_Flex_Right_Btn_white_(self, new_state):
		self._setter_access_tracker["About_header_Flex_Right_Btn_white_"] = {}
		global default_state
		self._About_header_Flex_Right_Btn_white_ = Button(new_state, default_state["About_header_Flex_Right_Btn_white_"])

	@property
	def About_story_Left_Heading_(self):
		self._getter_access_tracker["About_story_Left_Heading_"] = {}
		return self._About_story_Left_Heading_
	@About_story_Left_Heading_.setter
	def About_story_Left_Heading_(self, new_state):
		self._setter_access_tracker["About_story_Left_Heading_"] = {}
		global default_state
		self._About_story_Left_Heading_ = TextBox(new_state, default_state["About_story_Left_Heading_"])

	@property
	def About_story_Left_Para_(self):
		self._getter_access_tracker["About_story_Left_Para_"] = {}
		return self._About_story_Left_Para_
	@About_story_Left_Para_.setter
	def About_story_Left_Para_(self, new_state):
		self._setter_access_tracker["About_story_Left_Para_"] = {}
		global default_state
		self._About_story_Left_Para_ = TextBox(new_state, default_state["About_story_Left_Para_"])

	@property
	def About_story_Right_Image_(self):
		self._getter_access_tracker["About_story_Right_Image_"] = {}
		return self._About_story_Right_Image_
	@About_story_Right_Image_.setter
	def About_story_Right_Image_(self, new_state):
		self._setter_access_tracker["About_story_Right_Image_"] = {}
		global default_state
		self._About_story_Right_Image_ = Image(new_state, default_state["About_story_Right_Image_"])

	@property
	def About_second_story_Left__second_story_Right_(self):
		self._getter_access_tracker["About_second_story_Left__second_story_Right_"] = {}
		return self._About_second_story_Left__second_story_Right_
	@About_second_story_Left__second_story_Right_.setter
	def About_second_story_Left__second_story_Right_(self, new_state):
		self._setter_access_tracker["About_second_story_Left__second_story_Right_"] = {}
		global default_state
		self._About_second_story_Left__second_story_Right_ = Flex(new_state, default_state["About_second_story_Left__second_story_Right_"])

	@property
	def About_second_story_Left_Image__(self):
		self._getter_access_tracker["About_second_story_Left_Image__"] = {}
		return self._About_second_story_Left_Image__
	@About_second_story_Left_Image__.setter
	def About_second_story_Left_Image__(self, new_state):
		self._setter_access_tracker["About_second_story_Left_Image__"] = {}
		global default_state
		self._About_second_story_Left_Image__ = Image(new_state, default_state["About_second_story_Left_Image__"])

	@property
	def About_companies_Flex_Left_Text_(self):
		self._getter_access_tracker["About_companies_Flex_Left_Text_"] = {}
		return self._About_companies_Flex_Left_Text_
	@About_companies_Flex_Left_Text_.setter
	def About_companies_Flex_Left_Text_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Left_Text_"] = {}
		global default_state
		self._About_companies_Flex_Left_Text_ = TextBox(new_state, default_state["About_companies_Flex_Left_Text_"])

	@property
	def About_companies_Flex_Right_Doordash_(self):
		self._getter_access_tracker["About_companies_Flex_Right_Doordash_"] = {}
		return self._About_companies_Flex_Right_Doordash_
	@About_companies_Flex_Right_Doordash_.setter
	def About_companies_Flex_Right_Doordash_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Right_Doordash_"] = {}
		global default_state
		self._About_companies_Flex_Right_Doordash_ = Image(new_state, default_state["About_companies_Flex_Right_Doordash_"])

	@property
	def About_companies_Flex_Right_Postmates_(self):
		self._getter_access_tracker["About_companies_Flex_Right_Postmates_"] = {}
		return self._About_companies_Flex_Right_Postmates_
	@About_companies_Flex_Right_Postmates_.setter
	def About_companies_Flex_Right_Postmates_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Right_Postmates_"] = {}
		global default_state
		self._About_companies_Flex_Right_Postmates_ = Image(new_state, default_state["About_companies_Flex_Right_Postmates_"])

	@property
	def About_companies_Flex_Right_Rappi_(self):
		self._getter_access_tracker["About_companies_Flex_Right_Rappi_"] = {}
		return self._About_companies_Flex_Right_Rappi_
	@About_companies_Flex_Right_Rappi_.setter
	def About_companies_Flex_Right_Rappi_(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Right_Rappi_"] = {}
		global default_state
		self._About_companies_Flex_Right_Rappi_ = Image(new_state, default_state["About_companies_Flex_Right_Rappi_"])

	@property
	def About_companies_Flex_Right_Uber_eatss__(self):
		self._getter_access_tracker["About_companies_Flex_Right_Uber_eatss__"] = {}
		return self._About_companies_Flex_Right_Uber_eatss__
	@About_companies_Flex_Right_Uber_eatss__.setter
	def About_companies_Flex_Right_Uber_eatss__(self, new_state):
		self._setter_access_tracker["About_companies_Flex_Right_Uber_eatss__"] = {}
		global default_state
		self._About_companies_Flex_Right_Uber_eatss__ = Image(new_state, default_state["About_companies_Flex_Right_Uber_eatss__"])

	@property
	def Image145(self):
		self._getter_access_tracker["Image145"] = {}
		return self._Image145
	@Image145.setter
	def Image145(self, new_state):
		self._setter_access_tracker["Image145"] = {}
		global default_state
		self._Image145 = Image(new_state, default_state["Image145"])

	@property
	def Button40(self):
		self._getter_access_tracker["Button40"] = {}
		return self._Button40
	@Button40.setter
	def Button40(self, new_state):
		self._setter_access_tracker["Button40"] = {}
		global default_state
		self._Button40 = Button(new_state, default_state["Button40"])

	@property
	def TextBox254(self):
		self._getter_access_tracker["TextBox254"] = {}
		return self._TextBox254
	@TextBox254.setter
	def TextBox254(self, new_state):
		self._setter_access_tracker["TextBox254"] = {}
		global default_state
		self._TextBox254 = TextBox(new_state, default_state["TextBox254"])

	@property
	def TextBox256(self):
		self._getter_access_tracker["TextBox256"] = {}
		return self._TextBox256
	@TextBox256.setter
	def TextBox256(self, new_state):
		self._setter_access_tracker["TextBox256"] = {}
		global default_state
		self._TextBox256 = TextBox(new_state, default_state["TextBox256"])

	@property
	def TextBox257(self):
		self._getter_access_tracker["TextBox257"] = {}
		return self._TextBox257
	@TextBox257.setter
	def TextBox257(self, new_state):
		self._setter_access_tracker["TextBox257"] = {}
		global default_state
		self._TextBox257 = TextBox(new_state, default_state["TextBox257"])

	@property
	def TextBox262(self):
		self._getter_access_tracker["TextBox262"] = {}
		return self._TextBox262
	@TextBox262.setter
	def TextBox262(self, new_state):
		self._setter_access_tracker["TextBox262"] = {}
		global default_state
		self._TextBox262 = TextBox(new_state, default_state["TextBox262"])

	@property
	def TextBox263(self):
		self._getter_access_tracker["TextBox263"] = {}
		return self._TextBox263
	@TextBox263.setter
	def TextBox263(self, new_state):
		self._setter_access_tracker["TextBox263"] = {}
		global default_state
		self._TextBox263 = TextBox(new_state, default_state["TextBox263"])

	@property
	def TextBox264(self):
		self._getter_access_tracker["TextBox264"] = {}
		return self._TextBox264
	@TextBox264.setter
	def TextBox264(self, new_state):
		self._setter_access_tracker["TextBox264"] = {}
		global default_state
		self._TextBox264 = TextBox(new_state, default_state["TextBox264"])

	@property
	def Button41(self):
		self._getter_access_tracker["Button41"] = {}
		return self._Button41
	@Button41.setter
	def Button41(self, new_state):
		self._setter_access_tracker["Button41"] = {}
		global default_state
		self._Button41 = Button(new_state, default_state["Button41"])

	@property
	def Image147(self):
		self._getter_access_tracker["Image147"] = {}
		return self._Image147
	@Image147.setter
	def Image147(self, new_state):
		self._setter_access_tracker["Image147"] = {}
		global default_state
		self._Image147 = Image(new_state, default_state["Image147"])

	@property
	def Meet_our_team_Flex_Heading_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Heading_Text_"] = {}
		return self._Meet_our_team_Flex_Heading_Text_
	@Meet_our_team_Flex_Heading_Text_.setter
	def Meet_our_team_Flex_Heading_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Heading_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Heading_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Heading_Text_"])

	@property
	def Meet_our_team_Flex_Para_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Para_Text_"] = {}
		return self._Meet_our_team_Flex_Para_Text_
	@Meet_our_team_Flex_Para_Text_.setter
	def Meet_our_team_Flex_Para_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Para_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Para_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Para_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_1_Image_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Image_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Image_
	@Meet_our_team_Flex_Pictures_1_Image_.setter
	def Meet_our_team_Flex_Pictures_1_Image_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Image_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Image_ = Image(new_state, default_state["Meet_our_team_Flex_Pictures_1_Image_"])

	@property
	def TextBox267(self):
		self._getter_access_tracker["TextBox267"] = {}
		return self._TextBox267
	@TextBox267.setter
	def TextBox267(self, new_state):
		self._setter_access_tracker["TextBox267"] = {}
		global default_state
		self._TextBox267 = TextBox(new_state, default_state["TextBox267"])

	@property
	def Meet_our_team_Flex_Pictures_1_Post_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Post_Text_
	@Meet_our_team_Flex_Pictures_1_Post_Text_.setter
	def Meet_our_team_Flex_Pictures_1_Post_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Post_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Post_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_1_Post_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_1_Msg_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_1_Msg_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_1_Msg_Text_
	@Meet_our_team_Flex_Pictures_1_Msg_Text_.setter
	def Meet_our_team_Flex_Pictures_1_Msg_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_1_Msg_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_1_Msg_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_1_Msg_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Image_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Image_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Image_
	@Meet_our_team_Flex_Pictures_2_Image_.setter
	def Meet_our_team_Flex_Pictures_2_Image_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Image_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Image_ = Image(new_state, default_state["Meet_our_team_Flex_Pictures_2_Image_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Msg_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Msg_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Msg_Text_
	@Meet_our_team_Flex_Pictures_2_Msg_Text_.setter
	def Meet_our_team_Flex_Pictures_2_Msg_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Msg_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Msg_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_2_Msg_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Post_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Post_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Post_Text_
	@Meet_our_team_Flex_Pictures_2_Post_Text_.setter
	def Meet_our_team_Flex_Pictures_2_Post_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Post_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Post_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_2_Post_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_2_Name_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_2_Name_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_2_Name_Text_
	@Meet_our_team_Flex_Pictures_2_Name_Text_.setter
	def Meet_our_team_Flex_Pictures_2_Name_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_2_Name_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_2_Name_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_2_Name_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Image_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Image_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Image_
	@Meet_our_team_Flex_Pictures_3_Image_.setter
	def Meet_our_team_Flex_Pictures_3_Image_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Image_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Image_ = Image(new_state, default_state["Meet_our_team_Flex_Pictures_3_Image_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Msg_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Msg_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Msg_Text_
	@Meet_our_team_Flex_Pictures_3_Msg_Text_.setter
	def Meet_our_team_Flex_Pictures_3_Msg_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Msg_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Msg_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_3_Msg_Text_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Post_Name_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Post_Name_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Post_Name_
	@Meet_our_team_Flex_Pictures_3_Post_Name_.setter
	def Meet_our_team_Flex_Pictures_3_Post_Name_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Post_Name_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Post_Name_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_3_Post_Name_"])

	@property
	def Meet_our_team_Flex_Pictures_3_Name_Text_(self):
		self._getter_access_tracker["Meet_our_team_Flex_Pictures_3_Name_Text_"] = {}
		return self._Meet_our_team_Flex_Pictures_3_Name_Text_
	@Meet_our_team_Flex_Pictures_3_Name_Text_.setter
	def Meet_our_team_Flex_Pictures_3_Name_Text_(self, new_state):
		self._setter_access_tracker["Meet_our_team_Flex_Pictures_3_Name_Text_"] = {}
		global default_state
		self._Meet_our_team_Flex_Pictures_3_Name_Text_ = TextBox(new_state, default_state["Meet_our_team_Flex_Pictures_3_Name_Text_"])

	@property
	def The_value_Heading_Text_(self):
		self._getter_access_tracker["The_value_Heading_Text_"] = {}
		return self._The_value_Heading_Text_
	@The_value_Heading_Text_.setter
	def The_value_Heading_Text_(self, new_state):
		self._setter_access_tracker["The_value_Heading_Text_"] = {}
		global default_state
		self._The_value_Heading_Text_ = TextBox(new_state, default_state["The_value_Heading_Text_"])

	@property
	def The_value_Row_1_Flex1_Image_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_Image_"] = {}
		return self._The_value_Row_1_Flex1_Image_
	@The_value_Row_1_Flex1_Image_.setter
	def The_value_Row_1_Flex1_Image_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_Image_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_Image_ = Image(new_state, default_state["The_value_Row_1_Flex1_Image_"])

	@property
	def The_value_Row_1_Flex1_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_h1_Text_"] = {}
		return self._The_value_Row_1_Flex1_h1_Text_
	@The_value_Row_1_Flex1_h1_Text_.setter
	def The_value_Row_1_Flex1_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_h1_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_h1_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex1_h1_Text_"])

	@property
	def The_value_Row_1_Flex1_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex1_h2_Text_"] = {}
		return self._The_value_Row_1_Flex1_h2_Text_
	@The_value_Row_1_Flex1_h2_Text_.setter
	def The_value_Row_1_Flex1_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex1_h2_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex1_h2_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex1_h2_Text_"])

	@property
	def The_value_Row_1_Flex2_Image_(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_Image_"] = {}
		return self._The_value_Row_1_Flex2_Image_
	@The_value_Row_1_Flex2_Image_.setter
	def The_value_Row_1_Flex2_Image_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_Image_"] = {}
		global default_state
		self._The_value_Row_1_Flex2_Image_ = Image(new_state, default_state["The_value_Row_1_Flex2_Image_"])

	@property
	def The_value_Row_1_Flex2_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_h2_Text_"] = {}
		return self._The_value_Row_1_Flex2_h2_Text_
	@The_value_Row_1_Flex2_h2_Text_.setter
	def The_value_Row_1_Flex2_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_h2_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex2_h2_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex2_h2_Text_"])

	@property
	def The_value_Row_1_Flex2_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex2_h1_Text_"] = {}
		return self._The_value_Row_1_Flex2_h1_Text_
	@The_value_Row_1_Flex2_h1_Text_.setter
	def The_value_Row_1_Flex2_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex2_h1_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex2_h1_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex2_h1_Text_"])

	@property
	def The_value_Row_1_Flex3_Image_(self):
		self._getter_access_tracker["The_value_Row_1_Flex3_Image_"] = {}
		return self._The_value_Row_1_Flex3_Image_
	@The_value_Row_1_Flex3_Image_.setter
	def The_value_Row_1_Flex3_Image_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex3_Image_"] = {}
		global default_state
		self._The_value_Row_1_Flex3_Image_ = Image(new_state, default_state["The_value_Row_1_Flex3_Image_"])

	@property
	def The_value_Row_1_Flex3_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex3_h2_Text_"] = {}
		return self._The_value_Row_1_Flex3_h2_Text_
	@The_value_Row_1_Flex3_h2_Text_.setter
	def The_value_Row_1_Flex3_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex3_h2_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex3_h2_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex3_h2_Text_"])

	@property
	def The_value_Row_1_Flex3_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_1_Flex3_h1_Text_"] = {}
		return self._The_value_Row_1_Flex3_h1_Text_
	@The_value_Row_1_Flex3_h1_Text_.setter
	def The_value_Row_1_Flex3_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_1_Flex3_h1_Text_"] = {}
		global default_state
		self._The_value_Row_1_Flex3_h1_Text_ = TextBox(new_state, default_state["The_value_Row_1_Flex3_h1_Text_"])

	@property
	def The_value_Row_2_Flex3_Image_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_Image_"] = {}
		return self._The_value_Row_2_Flex3_Image_
	@The_value_Row_2_Flex3_Image_.setter
	def The_value_Row_2_Flex3_Image_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_Image_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_Image_ = Image(new_state, default_state["The_value_Row_2_Flex3_Image_"])

	@property
	def The_value_Row_2_Flex3_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_h1_Text_"] = {}
		return self._The_value_Row_2_Flex3_h1_Text_
	@The_value_Row_2_Flex3_h1_Text_.setter
	def The_value_Row_2_Flex3_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_h1_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_h1_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex3_h1_Text_"])

	@property
	def The_value_Row_2_Flex3_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex3_h2_Text_"] = {}
		return self._The_value_Row_2_Flex3_h2_Text_
	@The_value_Row_2_Flex3_h2_Text_.setter
	def The_value_Row_2_Flex3_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex3_h2_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex3_h2_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex3_h2_Text_"])

	@property
	def The_value_Row_2_Flex2_Image_(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_Image_"] = {}
		return self._The_value_Row_2_Flex2_Image_
	@The_value_Row_2_Flex2_Image_.setter
	def The_value_Row_2_Flex2_Image_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_Image_"] = {}
		global default_state
		self._The_value_Row_2_Flex2_Image_ = Image(new_state, default_state["The_value_Row_2_Flex2_Image_"])

	@property
	def The_value_Row_2_Flex2_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_h1_Text_"] = {}
		return self._The_value_Row_2_Flex2_h1_Text_
	@The_value_Row_2_Flex2_h1_Text_.setter
	def The_value_Row_2_Flex2_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_h1_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex2_h1_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex2_h1_Text_"])

	@property
	def The_value_Row_2_Flex2_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex2_h2_Text_"] = {}
		return self._The_value_Row_2_Flex2_h2_Text_
	@The_value_Row_2_Flex2_h2_Text_.setter
	def The_value_Row_2_Flex2_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex2_h2_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex2_h2_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex2_h2_Text_"])

	@property
	def The_value_Row_2_Flex1_Image(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_Image"] = {}
		return self._The_value_Row_2_Flex1_Image
	@The_value_Row_2_Flex1_Image.setter
	def The_value_Row_2_Flex1_Image(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_Image"] = {}
		global default_state
		self._The_value_Row_2_Flex1_Image = Image(new_state, default_state["The_value_Row_2_Flex1_Image"])

	@property
	def The_value_Row_2_Flex1_h2_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_h2_Text_"] = {}
		return self._The_value_Row_2_Flex1_h2_Text_
	@The_value_Row_2_Flex1_h2_Text_.setter
	def The_value_Row_2_Flex1_h2_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_h2_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex1_h2_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex1_h2_Text_"])

	@property
	def The_value_Row_2_Flex1_h1_Text_(self):
		self._getter_access_tracker["The_value_Row_2_Flex1_h1_Text_"] = {}
		return self._The_value_Row_2_Flex1_h1_Text_
	@The_value_Row_2_Flex1_h1_Text_.setter
	def The_value_Row_2_Flex1_h1_Text_(self, new_state):
		self._setter_access_tracker["The_value_Row_2_Flex1_h1_Text_"] = {}
		global default_state
		self._The_value_Row_2_Flex1_h1_Text_ = TextBox(new_state, default_state["The_value_Row_2_Flex1_h1_Text_"])

	@property
	def About_our_article_Images_Flex_Mimage_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Mimage_"] = {}
		return self._About_our_article_Images_Flex_Mimage_
	@About_our_article_Images_Flex_Mimage_.setter
	def About_our_article_Images_Flex_Mimage_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Mimage_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Mimage_ = Image(new_state, default_state["About_our_article_Images_Flex_Mimage_"])

	@property
	def About_our_article_Images_Flex_Limage_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Limage_"] = {}
		return self._About_our_article_Images_Flex_Limage_
	@About_our_article_Images_Flex_Limage_.setter
	def About_our_article_Images_Flex_Limage_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Limage_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Limage_ = Image(new_state, default_state["About_our_article_Images_Flex_Limage_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row2_21_img_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_21_img_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row2_21_img_
	@About_our_article_Images_Flex_Rimage_Row2_21_img_.setter
	def About_our_article_Images_Flex_Rimage_Row2_21_img_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_21_img_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row2_21_img_ = Image(new_state, default_state["About_our_article_Images_Flex_Rimage_Row2_21_img_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row2_22_img_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_22_img_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row2_22_img_
	@About_our_article_Images_Flex_Rimage_Row2_22_img_.setter
	def About_our_article_Images_Flex_Rimage_Row2_22_img_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row2_22_img_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row2_22_img_ = Image(new_state, default_state["About_our_article_Images_Flex_Rimage_Row2_22_img_"])

	@property
	def About_our_article_Images_Flex_Rimage_Row1_12_img_(self):
		self._getter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_12_img_"] = {}
		return self._About_our_article_Images_Flex_Rimage_Row1_12_img_
	@About_our_article_Images_Flex_Rimage_Row1_12_img_.setter
	def About_our_article_Images_Flex_Rimage_Row1_12_img_(self, new_state):
		self._setter_access_tracker["About_our_article_Images_Flex_Rimage_Row1_12_img_"] = {}
		global default_state
		self._About_our_article_Images_Flex_Rimage_Row1_12_img_ = Image(new_state, default_state["About_our_article_Images_Flex_Rimage_Row1_12_img_"])

	@property
	def Menu_our_article_Images_Flex_Rimage_Row1_11_img_(self):
		self._getter_access_tracker["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"] = {}
		return self._Menu_our_article_Images_Flex_Rimage_Row1_11_img_
	@Menu_our_article_Images_Flex_Rimage_Row1_11_img_.setter
	def Menu_our_article_Images_Flex_Rimage_Row1_11_img_(self, new_state):
		self._setter_access_tracker["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"] = {}
		global default_state
		self._Menu_our_article_Images_Flex_Rimage_Row1_11_img_ = Image(new_state, default_state["Menu_our_article_Images_Flex_Rimage_Row1_11_img_"])

	@property
	def Our_article_Head_R_Text_(self):
		self._getter_access_tracker["Our_article_Head_R_Text_"] = {}
		return self._Our_article_Head_R_Text_
	@Our_article_Head_R_Text_.setter
	def Our_article_Head_R_Text_(self, new_state):
		self._setter_access_tracker["Our_article_Head_R_Text_"] = {}
		global default_state
		self._Our_article_Head_R_Text_ = TextBox(new_state, default_state["Our_article_Head_R_Text_"])

	@property
	def Our_article_Head_L_Text_(self):
		self._getter_access_tracker["Our_article_Head_L_Text_"] = {}
		return self._Our_article_Head_L_Text_
	@Our_article_Head_L_Text_.setter
	def Our_article_Head_L_Text_(self, new_state):
		self._setter_access_tracker["Our_article_Head_L_Text_"] = {}
		global default_state
		self._Our_article_Head_L_Text_ = TextBox(new_state, default_state["Our_article_Head_L_Text_"])

	@property
	def About_Footer_M_C1_3__Footer_R_Head_Text_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_Head_Text_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_Head_Text_
	@About_Footer_M_C1_3__Footer_R_Head_Text_.setter
	def About_Footer_M_C1_3__Footer_R_Head_Text_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_Head_Text_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_Head_Text_ = TextBox(new_state, default_state["About_Footer_M_C1_3__Footer_R_Head_Text_"])

	@property
	def About_Footer_M_C1_3__Footer_R_1_11_Img(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_1_11_Img"] = {}
		return self._About_Footer_M_C1_3__Footer_R_1_11_Img
	@About_Footer_M_C1_3__Footer_R_1_11_Img.setter
	def About_Footer_M_C1_3__Footer_R_1_11_Img(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_1_11_Img"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_1_11_Img = Image(new_state, default_state["About_Footer_M_C1_3__Footer_R_1_11_Img"])

	@property
	def About_Footer_M_C1_3__Footer_R_1_12_img_Image(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_1_12_img_Image"] = {}
		return self._About_Footer_M_C1_3__Footer_R_1_12_img_Image
	@About_Footer_M_C1_3__Footer_R_1_12_img_Image.setter
	def About_Footer_M_C1_3__Footer_R_1_12_img_Image(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_1_12_img_Image"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_1_12_img_Image = Image(new_state, default_state["About_Footer_M_C1_3__Footer_R_1_12_img_Image"])

	@property
	def About_Footer_M_C1_3__Footer_R_2_22_imgg_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_2_22_imgg_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_2_22_imgg_
	@About_Footer_M_C1_3__Footer_R_2_22_imgg_.setter
	def About_Footer_M_C1_3__Footer_R_2_22_imgg_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_2_22_imgg_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_2_22_imgg_ = Image(new_state, default_state["About_Footer_M_C1_3__Footer_R_2_22_imgg_"])

	@property
	def About_Footer_M_C1_3__Footer_R_2_21_imgg_(self):
		self._getter_access_tracker["About_Footer_M_C1_3__Footer_R_2_21_imgg_"] = {}
		return self._About_Footer_M_C1_3__Footer_R_2_21_imgg_
	@About_Footer_M_C1_3__Footer_R_2_21_imgg_.setter
	def About_Footer_M_C1_3__Footer_R_2_21_imgg_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3__Footer_R_2_21_imgg_"] = {}
		global default_state
		self._About_Footer_M_C1_3__Footer_R_2_21_imgg_ = Image(new_state, default_state["About_Footer_M_C1_3__Footer_R_2_21_imgg_"])

	@property
	def About_Footer_M_C2_1_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_1_Text"] = {}
		return self._About_Footer_M_C2_1_Text
	@About_Footer_M_C2_1_Text.setter
	def About_Footer_M_C2_1_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_1_Text"] = {}
		global default_state
		self._About_Footer_M_C2_1_Text = TextBox(new_state, default_state["About_Footer_M_C2_1_Text"])

	@property
	def About_Footer_Footer_M_Text(self):
		self._getter_access_tracker["About_Footer_Footer_M_Text"] = {}
		return self._About_Footer_Footer_M_Text
	@About_Footer_Footer_M_Text.setter
	def About_Footer_Footer_M_Text(self, new_state):
		self._setter_access_tracker["About_Footer_Footer_M_Text"] = {}
		global default_state
		self._About_Footer_Footer_M_Text = TextBox(new_state, default_state["About_Footer_Footer_M_Text"])

	@property
	def About_Footer_M_C2_7_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_7_Text"] = {}
		return self._About_Footer_M_C2_7_Text
	@About_Footer_M_C2_7_Text.setter
	def About_Footer_M_C2_7_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_7_Text"] = {}
		global default_state
		self._About_Footer_M_C2_7_Text = TextBox(new_state, default_state["About_Footer_M_C2_7_Text"])

	@property
	def About_Footer_M_C2_8_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_8_Text"] = {}
		return self._About_Footer_M_C2_8_Text
	@About_Footer_M_C2_8_Text.setter
	def About_Footer_M_C2_8_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_8_Text"] = {}
		global default_state
		self._About_Footer_M_C2_8_Text = TextBox(new_state, default_state["About_Footer_M_C2_8_Text"])

	@property
	def About_Footer_M_C2_5_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_5_Text"] = {}
		return self._About_Footer_M_C2_5_Text
	@About_Footer_M_C2_5_Text.setter
	def About_Footer_M_C2_5_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_5_Text"] = {}
		global default_state
		self._About_Footer_M_C2_5_Text = TextBox(new_state, default_state["About_Footer_M_C2_5_Text"])

	@property
	def About_Footer_M_C2_6_txt_(self):
		self._getter_access_tracker["About_Footer_M_C2_6_txt_"] = {}
		return self._About_Footer_M_C2_6_txt_
	@About_Footer_M_C2_6_txt_.setter
	def About_Footer_M_C2_6_txt_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_6_txt_"] = {}
		global default_state
		self._About_Footer_M_C2_6_txt_ = TextBox(new_state, default_state["About_Footer_M_C2_6_txt_"])

	@property
	def About_Footer_M_C2_3_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_3_Text"] = {}
		return self._About_Footer_M_C2_3_Text
	@About_Footer_M_C2_3_Text.setter
	def About_Footer_M_C2_3_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_3_Text"] = {}
		global default_state
		self._About_Footer_M_C2_3_Text = TextBox(new_state, default_state["About_Footer_M_C2_3_Text"])

	@property
	def About_Footer_M_C2_4_Text(self):
		self._getter_access_tracker["About_Footer_M_C2_4_Text"] = {}
		return self._About_Footer_M_C2_4_Text
	@About_Footer_M_C2_4_Text.setter
	def About_Footer_M_C2_4_Text(self, new_state):
		self._setter_access_tracker["About_Footer_M_C2_4_Text"] = {}
		global default_state
		self._About_Footer_M_C2_4_Text = TextBox(new_state, default_state["About_Footer_M_C2_4_Text"])

	@property
	def About_Footer_M_C1_4_txt_(self):
		self._getter_access_tracker["About_Footer_M_C1_4_txt_"] = {}
		return self._About_Footer_M_C1_4_txt_
	@About_Footer_M_C1_4_txt_.setter
	def About_Footer_M_C1_4_txt_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_4_txt_"] = {}
		global default_state
		self._About_Footer_M_C1_4_txt_ = TextBox(new_state, default_state["About_Footer_M_C1_4_txt_"])

	@property
	def About_Footer_M_C1_3_txt_(self):
		self._getter_access_tracker["About_Footer_M_C1_3_txt_"] = {}
		return self._About_Footer_M_C1_3_txt_
	@About_Footer_M_C1_3_txt_.setter
	def About_Footer_M_C1_3_txt_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_3_txt_"] = {}
		global default_state
		self._About_Footer_M_C1_3_txt_ = TextBox(new_state, default_state["About_Footer_M_C1_3_txt_"])

	@property
	def TextBox310(self):
		self._getter_access_tracker["TextBox310"] = {}
		return self._TextBox310
	@TextBox310.setter
	def TextBox310(self, new_state):
		self._setter_access_tracker["TextBox310"] = {}
		global default_state
		self._TextBox310 = TextBox(new_state, default_state["TextBox310"])

	@property
	def TextBox311(self):
		self._getter_access_tracker["TextBox311"] = {}
		return self._TextBox311
	@TextBox311.setter
	def TextBox311(self, new_state):
		self._setter_access_tracker["TextBox311"] = {}
		global default_state
		self._TextBox311 = TextBox(new_state, default_state["TextBox311"])

	@property
	def TextBox312(self):
		self._getter_access_tracker["TextBox312"] = {}
		return self._TextBox312
	@TextBox312.setter
	def TextBox312(self, new_state):
		self._setter_access_tracker["TextBox312"] = {}
		global default_state
		self._TextBox312 = TextBox(new_state, default_state["TextBox312"])

	@property
	def TextBox313(self):
		self._getter_access_tracker["TextBox313"] = {}
		return self._TextBox313
	@TextBox313.setter
	def TextBox313(self, new_state):
		self._setter_access_tracker["TextBox313"] = {}
		global default_state
		self._TextBox313 = TextBox(new_state, default_state["TextBox313"])

	@property
	def About_Footer_M_C1_2_txt_(self):
		self._getter_access_tracker["About_Footer_M_C1_2_txt_"] = {}
		return self._About_Footer_M_C1_2_txt_
	@About_Footer_M_C1_2_txt_.setter
	def About_Footer_M_C1_2_txt_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_2_txt_"] = {}
		global default_state
		self._About_Footer_M_C1_2_txt_ = TextBox(new_state, default_state["About_Footer_M_C1_2_txt_"])

	@property
	def About_Footer_M_C1_1_txt_(self):
		self._getter_access_tracker["About_Footer_M_C1_1_txt_"] = {}
		return self._About_Footer_M_C1_1_txt_
	@About_Footer_M_C1_1_txt_.setter
	def About_Footer_M_C1_1_txt_(self, new_state):
		self._setter_access_tracker["About_Footer_M_C1_1_txt_"] = {}
		global default_state
		self._About_Footer_M_C1_1_txt_ = TextBox(new_state, default_state["About_Footer_M_C1_1_txt_"])

	@property
	def About_Footer_L_img_5(self):
		self._getter_access_tracker["About_Footer_L_img_5"] = {}
		return self._About_Footer_L_img_5
	@About_Footer_L_img_5.setter
	def About_Footer_L_img_5(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_5"] = {}
		global default_state
		self._About_Footer_L_img_5 = Image(new_state, default_state["About_Footer_L_img_5"])

	@property
	def About_Footer_L_img_4(self):
		self._getter_access_tracker["About_Footer_L_img_4"] = {}
		return self._About_Footer_L_img_4
	@About_Footer_L_img_4.setter
	def About_Footer_L_img_4(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_4"] = {}
		global default_state
		self._About_Footer_L_img_4 = Image(new_state, default_state["About_Footer_L_img_4"])

	@property
	def About_Footer_L_img_3(self):
		self._getter_access_tracker["About_Footer_L_img_3"] = {}
		return self._About_Footer_L_img_3
	@About_Footer_L_img_3.setter
	def About_Footer_L_img_3(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_3"] = {}
		global default_state
		self._About_Footer_L_img_3 = Image(new_state, default_state["About_Footer_L_img_3"])

	@property
	def About_Footer_L_img_2(self):
		self._getter_access_tracker["About_Footer_L_img_2"] = {}
		return self._About_Footer_L_img_2
	@About_Footer_L_img_2.setter
	def About_Footer_L_img_2(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_2"] = {}
		global default_state
		self._About_Footer_L_img_2 = Image(new_state, default_state["About_Footer_L_img_2"])

	@property
	def About_Footer_L_img_1(self):
		self._getter_access_tracker["About_Footer_L_img_1"] = {}
		return self._About_Footer_L_img_1
	@About_Footer_L_img_1.setter
	def About_Footer_L_img_1(self, new_state):
		self._setter_access_tracker["About_Footer_L_img_1"] = {}
		global default_state
		self._About_Footer_L_img_1 = Image(new_state, default_state["About_Footer_L_img_1"])

	@property
	def About_Footer_L_Para_Text_(self):
		self._getter_access_tracker["About_Footer_L_Para_Text_"] = {}
		return self._About_Footer_L_Para_Text_
	@About_Footer_L_Para_Text_.setter
	def About_Footer_L_Para_Text_(self, new_state):
		self._setter_access_tracker["About_Footer_L_Para_Text_"] = {}
		global default_state
		self._About_Footer_L_Para_Text_ = TextBox(new_state, default_state["About_Footer_L_Para_Text_"])

	@property
	def About_Footer_L_Head_img_(self):
		self._getter_access_tracker["About_Footer_L_Head_img_"] = {}
		return self._About_Footer_L_Head_img_
	@About_Footer_L_Head_img_.setter
	def About_Footer_L_Head_img_(self, new_state):
		self._setter_access_tracker["About_Footer_L_Head_img_"] = {}
		global default_state
		self._About_Footer_L_Head_img_ = Image(new_state, default_state["About_Footer_L_Head_img_"])

	def _to_json_fields(self):
		return {
			"About_header_": self._About_header_,
			"About_header_Flex_": self._About_header_Flex_,
			"About_header_Flex_Left_": self._About_header_Flex_Left_,
			"About_header_Flex_Left_Items_": self._About_header_Flex_Left_Items_,
			"About_header_Logo": self._About_header_Logo,
			"About_header_Flex_Right_": self._About_header_Flex_Right_,
			"About_story_": self._About_story_,
			"About_story_Left_": self._About_story_Left_,
			"About_story_Right_": self._About_story_Right_,
			"About_second_story_": self._About_second_story_,
			"About_second_story_Left_": self._About_second_story_Left_,
			"About_second_story_Left__companies_": self._About_second_story_Left__companies_,
			"About_companies_Flex_": self._About_companies_Flex_,
			"About_companies_Flex_Left_": self._About_companies_Flex_Left_,
			"About_companies_Flex_Right_": self._About_companies_Flex_Right_,
			"Funder_met_and_first_burger_": self._Funder_met_and_first_burger_,
			"Founder_met_and_first_burger_First_row_": self._Founder_met_and_first_burger_First_row_,
			"Founder_met_and_first_burger_First_row_Left_": self._Founder_met_and_first_burger_First_row_Left_,
			"Founder_met_and_first_burger_First_row_Right_": self._Founder_met_and_first_burger_First_row_Right_,
			"Flex627": self._Flex627,
			"Flex628": self._Flex628,
			"Flex629": self._Flex629,
			"Founder_met_and_first_burger_second_row_": self._Founder_met_and_first_burger_second_row_,
			"Founder_met_and_first_burger_second_row_Left_": self._Founder_met_and_first_burger_second_row_Left_,
			"Flex638": self._Flex638,
			"Flex639": self._Flex639,
			"Flex640": self._Flex640,
			"Flex644": self._Flex644,
			"Founder_met_and_first_burger_second_row_Right_": self._Founder_met_and_first_burger_second_row_Right_,
			"Meet_our_team_": self._Meet_our_team_,
			"Meet_our_team_Flex_": self._Meet_our_team_Flex_,
			"Meet_our_team_Flex_Heading_": self._Meet_our_team_Flex_Heading_,
			"Meet_our_team_Flex_Para_": self._Meet_our_team_Flex_Para_,
			"Meet_our_team_Flex_Pictures_": self._Meet_our_team_Flex_Pictures_,
			"Meet_our_team_Flex_Pictures_1_": self._Meet_our_team_Flex_Pictures_1_,
			"Meet_our_team_Flex_Pictures_1_Name_": self._Meet_our_team_Flex_Pictures_1_Name_,
			"Meet_our_team_Flex_Pictures_1_Post_": self._Meet_our_team_Flex_Pictures_1_Post_,
			"Meet_our_team_Flex_Pictures_1_Post_Msg_": self._Meet_our_team_Flex_Pictures_1_Post_Msg_,
			"Meet_our_team_Flex_Pictures_2_": self._Meet_our_team_Flex_Pictures_2_,
			"Meet_our_team_Flex_Pictures_2_Msg_": self._Meet_our_team_Flex_Pictures_2_Msg_,
			"Meet_our_team_Flex_Pictures_2_Post_": self._Meet_our_team_Flex_Pictures_2_Post_,
			"Meet_our_team_Flex_Pictures_2_Name_": self._Meet_our_team_Flex_Pictures_2_Name_,
			"Meet_our_team_Flex_Pictures_3_": self._Meet_our_team_Flex_Pictures_3_,
			"Meet_our_team_Flex_Pictures_3_Msg_": self._Meet_our_team_Flex_Pictures_3_Msg_,
			"Meet_our_team_Flex_Pictures_3_Post_": self._Meet_our_team_Flex_Pictures_3_Post_,
			"Meet_our_team_Flex_Pictures_3_Name_": self._Meet_our_team_Flex_Pictures_3_Name_,
			"The_value_": self._The_value_,
			"The_value_Heading_": self._The_value_Heading_,
			"The_value_Row_1_": self._The_value_Row_1_,
			"The_value_Row_1_Flex1_": self._The_value_Row_1_Flex1_,
			"The_value_Row_1_Flex1_h1_": self._The_value_Row_1_Flex1_h1_,
			"The_value_Row_1_Flex1_h2_": self._The_value_Row_1_Flex1_h2_,
			"The_value_Row_1_Flex2_": self._The_value_Row_1_Flex2_,
			"The_value_Row_1_Flex2_h2__": self._The_value_Row_1_Flex2_h2__,
			"The_value_Row_1_Flex2_h1_": self._The_value_Row_1_Flex2_h1_,
			"The_value_Row_1_Flex_3_": self._The_value_Row_1_Flex_3_,
			"The_value_Row_1_Flex3_h2_": self._The_value_Row_1_Flex3_h2_,
			"The_value_Row_1_Flex3__h1_": self._The_value_Row_1_Flex3__h1_,
			"The_value_Row_2_": self._The_value_Row_2_,
			"The_value_Row_2_Flex3_": self._The_value_Row_2_Flex3_,
			"The_value_Row_2_Flex3_h1_": self._The_value_Row_2_Flex3_h1_,
			"The_value_Row_2_Flex3_h2_": self._The_value_Row_2_Flex3_h2_,
			"The_value_Row_2_Flex2_": self._The_value_Row_2_Flex2_,
			"The_value_Row_2_Flex2_h1_": self._The_value_Row_2_Flex2_h1_,
			"The_value_Row_2_Flex2_h2__": self._The_value_Row_2_Flex2_h2__,
			"The_value_Row_2_Flex1_": self._The_value_Row_2_Flex1_,
			"The_value_Row_2_Flex1_h2_": self._The_value_Row_2_Flex1_h2_,
			"The_value_Row_2_Flex1_h1_": self._The_value_Row_2_Flex1_h1_,
			"About_our_article_": self._About_our_article_,
			"About_our_article_Images_": self._About_our_article_Images_,
			"About_our_article_Images_Flex": self._About_our_article_Images_Flex,
			"About_our_article_Images_Flex_Rimage_": self._About_our_article_Images_Flex_Rimage_,
			"About_our_article_Images_Flex_Rimage_Row2_": self._About_our_article_Images_Flex_Rimage_Row2_,
			"About_our_article_Images_Flex_Rimage_Row2_21_": self._About_our_article_Images_Flex_Rimage_Row2_21_,
			"About_our_article_Images_Flex_Rimage_Row2_22_": self._About_our_article_Images_Flex_Rimage_Row2_22_,
			"About_our_article_Images_Flex_Rimage_row1_": self._About_our_article_Images_Flex_Rimage_row1_,
			"About_our_article_Images_Flex_Rimage_Row1_12_": self._About_our_article_Images_Flex_Rimage_Row1_12_,
			"About_our_article_Images_Flex_Rimage_Row1_11_": self._About_our_article_Images_Flex_Rimage_Row1_11_,
			"Our_article_Head_": self._Our_article_Head_,
			"Our_article_Head_R_": self._Our_article_Head_R_,
			"Our_article_Head_L_": self._Our_article_Head_L_,
			"About_Footer_": self._About_Footer_,
			"About_Footer_R_": self._About_Footer_R_,
			"About__Footer_R_Head": self._About__Footer_R_Head,
			"About_Footer_M_C1_3__Footer_R_1_": self._About_Footer_M_C1_3__Footer_R_1_,
			"About_Footer_M_C1_3__Footer_R_1_11_": self._About_Footer_M_C1_3__Footer_R_1_11_,
			"About_Footer_M_C1_3__Footer_R_1_12_img_": self._About_Footer_M_C1_3__Footer_R_1_12_img_,
			"About_Footer_M_C1_3__Footer_R_2_": self._About_Footer_M_C1_3__Footer_R_2_,
			"About_Footer_M_C1_3__Footer_R_2_22_img_": self._About_Footer_M_C1_3__Footer_R_2_22_img_,
			"About_Footer_M_C1_3__Footer_R_2_21_img_": self._About_Footer_M_C1_3__Footer_R_2_21_img_,
			"About_Footer_M_": self._About_Footer_M_,
			"About_Footer_M_C2_": self._About_Footer_M_C2_,
			"About_Footer_M_C2_1": self._About_Footer_M_C2_1,
			"About_Footer_Footer_M": self._About_Footer_Footer_M,
			"About_Footer_M_C2_7": self._About_Footer_M_C2_7,
			"About_Footer_M_C2_8": self._About_Footer_M_C2_8,
			"About_Footer_M_C2_5": self._About_Footer_M_C2_5,
			"About_Footer_M_C2_6": self._About_Footer_M_C2_6,
			"About_Footer_M_C2_3": self._About_Footer_M_C2_3,
			"About_Footer_M_C2_4": self._About_Footer_M_C2_4,
			"About_Footer_M_C1_": self._About_Footer_M_C1_,
			"About_Footer_M_C1_4_": self._About_Footer_M_C1_4_,
			"About_Footer_M_C1_3_": self._About_Footer_M_C1_3_,
			"About_Footer_M_C1_6_": self._About_Footer_M_C1_6_,
			"About_Footer_M_C1_5_": self._About_Footer_M_C1_5_,
			"About_Footer_M_C1_8_": self._About_Footer_M_C1_8_,
			"About_Footer_M_C1_7_": self._About_Footer_M_C1_7_,
			"About_Footer_M_C1_2_": self._About_Footer_M_C1_2_,
			"About_Footer_M_C1_1_": self._About_Footer_M_C1_1_,
			"About_Footer_L_": self._About_Footer_L_,
			"About_Footer_L_img_": self._About_Footer_L_img_,
			"About_Footer_L_Para_": self._About_Footer_L_Para_,
			"About_Footer_L_Head_": self._About_Footer_L_Head_,
			"About_header_Flex_Left_Items_Pages_": self._About_header_Flex_Left_Items_Pages_,
			"About_header_Flex_Left_Items_Menu_": self._About_header_Flex_Left_Items_Menu_,
			"About_header_Flex_Left_Items_About_": self._About_header_Flex_Left_Items_About_,
			"About_header_Flex_Left_Items_Home_": self._About_header_Flex_Left_Items_Home_,
			"About_header_Flex_Left_Items_Cart_": self._About_header_Flex_Left_Items_Cart_,
			"About_header_Logo_Image": self._About_header_Logo_Image,
			"About_header_Flex_Right_Btn_color_": self._About_header_Flex_Right_Btn_color_,
			"About_header_Flex_Right_Btn_white_": self._About_header_Flex_Right_Btn_white_,
			"About_story_Left_Heading_": self._About_story_Left_Heading_,
			"About_story_Left_Para_": self._About_story_Left_Para_,
			"About_story_Right_Image_": self._About_story_Right_Image_,
			"About_second_story_Left__second_story_Right_": self._About_second_story_Left__second_story_Right_,
			"About_second_story_Left_Image__": self._About_second_story_Left_Image__,
			"About_companies_Flex_Left_Text_": self._About_companies_Flex_Left_Text_,
			"About_companies_Flex_Right_Doordash_": self._About_companies_Flex_Right_Doordash_,
			"About_companies_Flex_Right_Postmates_": self._About_companies_Flex_Right_Postmates_,
			"About_companies_Flex_Right_Rappi_": self._About_companies_Flex_Right_Rappi_,
			"About_companies_Flex_Right_Uber_eatss__": self._About_companies_Flex_Right_Uber_eatss__,
			"Image145": self._Image145,
			"Button40": self._Button40,
			"TextBox254": self._TextBox254,
			"TextBox256": self._TextBox256,
			"TextBox257": self._TextBox257,
			"TextBox262": self._TextBox262,
			"TextBox263": self._TextBox263,
			"TextBox264": self._TextBox264,
			"Button41": self._Button41,
			"Image147": self._Image147,
			"Meet_our_team_Flex_Heading_Text_": self._Meet_our_team_Flex_Heading_Text_,
			"Meet_our_team_Flex_Para_Text_": self._Meet_our_team_Flex_Para_Text_,
			"Meet_our_team_Flex_Pictures_1_Image_": self._Meet_our_team_Flex_Pictures_1_Image_,
			"TextBox267": self._TextBox267,
			"Meet_our_team_Flex_Pictures_1_Post_Text_": self._Meet_our_team_Flex_Pictures_1_Post_Text_,
			"Meet_our_team_Flex_Pictures_1_Msg_Text_": self._Meet_our_team_Flex_Pictures_1_Msg_Text_,
			"Meet_our_team_Flex_Pictures_2_Image_": self._Meet_our_team_Flex_Pictures_2_Image_,
			"Meet_our_team_Flex_Pictures_2_Msg_Text_": self._Meet_our_team_Flex_Pictures_2_Msg_Text_,
			"Meet_our_team_Flex_Pictures_2_Post_Text_": self._Meet_our_team_Flex_Pictures_2_Post_Text_,
			"Meet_our_team_Flex_Pictures_2_Name_Text_": self._Meet_our_team_Flex_Pictures_2_Name_Text_,
			"Meet_our_team_Flex_Pictures_3_Image_": self._Meet_our_team_Flex_Pictures_3_Image_,
			"Meet_our_team_Flex_Pictures_3_Msg_Text_": self._Meet_our_team_Flex_Pictures_3_Msg_Text_,
			"Meet_our_team_Flex_Pictures_3_Post_Name_": self._Meet_our_team_Flex_Pictures_3_Post_Name_,
			"Meet_our_team_Flex_Pictures_3_Name_Text_": self._Meet_our_team_Flex_Pictures_3_Name_Text_,
			"The_value_Heading_Text_": self._The_value_Heading_Text_,
			"The_value_Row_1_Flex1_Image_": self._The_value_Row_1_Flex1_Image_,
			"The_value_Row_1_Flex1_h1_Text_": self._The_value_Row_1_Flex1_h1_Text_,
			"The_value_Row_1_Flex1_h2_Text_": self._The_value_Row_1_Flex1_h2_Text_,
			"The_value_Row_1_Flex2_Image_": self._The_value_Row_1_Flex2_Image_,
			"The_value_Row_1_Flex2_h2_Text_": self._The_value_Row_1_Flex2_h2_Text_,
			"The_value_Row_1_Flex2_h1_Text_": self._The_value_Row_1_Flex2_h1_Text_,
			"The_value_Row_1_Flex3_Image_": self._The_value_Row_1_Flex3_Image_,
			"The_value_Row_1_Flex3_h2_Text_": self._The_value_Row_1_Flex3_h2_Text_,
			"The_value_Row_1_Flex3_h1_Text_": self._The_value_Row_1_Flex3_h1_Text_,
			"The_value_Row_2_Flex3_Image_": self._The_value_Row_2_Flex3_Image_,
			"The_value_Row_2_Flex3_h1_Text_": self._The_value_Row_2_Flex3_h1_Text_,
			"The_value_Row_2_Flex3_h2_Text_": self._The_value_Row_2_Flex3_h2_Text_,
			"The_value_Row_2_Flex2_Image_": self._The_value_Row_2_Flex2_Image_,
			"The_value_Row_2_Flex2_h1_Text_": self._The_value_Row_2_Flex2_h1_Text_,
			"The_value_Row_2_Flex2_h2_Text_": self._The_value_Row_2_Flex2_h2_Text_,
			"The_value_Row_2_Flex1_Image": self._The_value_Row_2_Flex1_Image,
			"The_value_Row_2_Flex1_h2_Text_": self._The_value_Row_2_Flex1_h2_Text_,
			"The_value_Row_2_Flex1_h1_Text_": self._The_value_Row_2_Flex1_h1_Text_,
			"About_our_article_Images_Flex_Mimage_": self._About_our_article_Images_Flex_Mimage_,
			"About_our_article_Images_Flex_Limage_": self._About_our_article_Images_Flex_Limage_,
			"About_our_article_Images_Flex_Rimage_Row2_21_img_": self._About_our_article_Images_Flex_Rimage_Row2_21_img_,
			"About_our_article_Images_Flex_Rimage_Row2_22_img_": self._About_our_article_Images_Flex_Rimage_Row2_22_img_,
			"About_our_article_Images_Flex_Rimage_Row1_12_img_": self._About_our_article_Images_Flex_Rimage_Row1_12_img_,
			"Menu_our_article_Images_Flex_Rimage_Row1_11_img_": self._Menu_our_article_Images_Flex_Rimage_Row1_11_img_,
			"Our_article_Head_R_Text_": self._Our_article_Head_R_Text_,
			"Our_article_Head_L_Text_": self._Our_article_Head_L_Text_,
			"About_Footer_M_C1_3__Footer_R_Head_Text_": self._About_Footer_M_C1_3__Footer_R_Head_Text_,
			"About_Footer_M_C1_3__Footer_R_1_11_Img": self._About_Footer_M_C1_3__Footer_R_1_11_Img,
			"About_Footer_M_C1_3__Footer_R_1_12_img_Image": self._About_Footer_M_C1_3__Footer_R_1_12_img_Image,
			"About_Footer_M_C1_3__Footer_R_2_22_imgg_": self._About_Footer_M_C1_3__Footer_R_2_22_imgg_,
			"About_Footer_M_C1_3__Footer_R_2_21_imgg_": self._About_Footer_M_C1_3__Footer_R_2_21_imgg_,
			"About_Footer_M_C2_1_Text": self._About_Footer_M_C2_1_Text,
			"About_Footer_Footer_M_Text": self._About_Footer_Footer_M_Text,
			"About_Footer_M_C2_7_Text": self._About_Footer_M_C2_7_Text,
			"About_Footer_M_C2_8_Text": self._About_Footer_M_C2_8_Text,
			"About_Footer_M_C2_5_Text": self._About_Footer_M_C2_5_Text,
			"About_Footer_M_C2_6_txt_": self._About_Footer_M_C2_6_txt_,
			"About_Footer_M_C2_3_Text": self._About_Footer_M_C2_3_Text,
			"About_Footer_M_C2_4_Text": self._About_Footer_M_C2_4_Text,
			"About_Footer_M_C1_4_txt_": self._About_Footer_M_C1_4_txt_,
			"About_Footer_M_C1_3_txt_": self._About_Footer_M_C1_3_txt_,
			"TextBox310": self._TextBox310,
			"TextBox311": self._TextBox311,
			"TextBox312": self._TextBox312,
			"TextBox313": self._TextBox313,
			"About_Footer_M_C1_2_txt_": self._About_Footer_M_C1_2_txt_,
			"About_Footer_M_C1_1_txt_": self._About_Footer_M_C1_1_txt_,
			"About_Footer_L_img_5": self._About_Footer_L_img_5,
			"About_Footer_L_img_4": self._About_Footer_L_img_4,
			"About_Footer_L_img_3": self._About_Footer_L_img_3,
			"About_Footer_L_img_2": self._About_Footer_L_img_2,
			"About_Footer_L_img_1": self._About_Footer_L_img_1,
			"About_Footer_L_Para_Text_": self._About_Footer_L_Para_Text_,
			"About_Footer_L_Head_img_": self._About_Footer_L_Head_img_,
			}


class DivstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.display: str = get_defined_value(state, def_state, "display")
		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def display(self):
		self._getter_access_tracker["display"] = {}
		return self._display
	@display.setter
	def display(self, state):
		self._setter_access_tracker["display"] = {}
		self._display = state
	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"display": self._display,
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class Div:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: DivstylesClass = get_defined_value(state, def_state, "styles")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = DivstylesClass(state, self._def_state["styles"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			}


class FlexstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.display: str = get_defined_value(state, def_state, "display")
		self.flexDirection: str = get_defined_value(state, def_state, "flexDirection")
		self.alignItems: str = get_defined_value(state, def_state, "alignItems")
		self.justifyContent: str = get_defined_value(state, def_state, "justifyContent")
		self.flexWrap: str = get_defined_value(state, def_state, "flexWrap")
		self.alignContent: str = get_defined_value(state, def_state, "alignContent")
		self.rowGap: str = get_defined_value(state, def_state, "rowGap")
		self.columnGap: str = get_defined_value(state, def_state, "columnGap")
		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def display(self):
		self._getter_access_tracker["display"] = {}
		return self._display
	@display.setter
	def display(self, state):
		self._setter_access_tracker["display"] = {}
		self._display = state
	@property
	def flexDirection(self):
		self._getter_access_tracker["flexDirection"] = {}
		return self._flexDirection
	@flexDirection.setter
	def flexDirection(self, state):
		self._setter_access_tracker["flexDirection"] = {}
		self._flexDirection = state
	@property
	def alignItems(self):
		self._getter_access_tracker["alignItems"] = {}
		return self._alignItems
	@alignItems.setter
	def alignItems(self, state):
		self._setter_access_tracker["alignItems"] = {}
		self._alignItems = state
	@property
	def justifyContent(self):
		self._getter_access_tracker["justifyContent"] = {}
		return self._justifyContent
	@justifyContent.setter
	def justifyContent(self, state):
		self._setter_access_tracker["justifyContent"] = {}
		self._justifyContent = state
	@property
	def flexWrap(self):
		self._getter_access_tracker["flexWrap"] = {}
		return self._flexWrap
	@flexWrap.setter
	def flexWrap(self, state):
		self._setter_access_tracker["flexWrap"] = {}
		self._flexWrap = state
	@property
	def alignContent(self):
		self._getter_access_tracker["alignContent"] = {}
		return self._alignContent
	@alignContent.setter
	def alignContent(self, state):
		self._setter_access_tracker["alignContent"] = {}
		self._alignContent = state
	@property
	def rowGap(self):
		self._getter_access_tracker["rowGap"] = {}
		return self._rowGap
	@rowGap.setter
	def rowGap(self, state):
		self._setter_access_tracker["rowGap"] = {}
		self._rowGap = state
	@property
	def columnGap(self):
		self._getter_access_tracker["columnGap"] = {}
		return self._columnGap
	@columnGap.setter
	def columnGap(self, state):
		self._setter_access_tracker["columnGap"] = {}
		self._columnGap = state
	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"display": self._display,
			"flexDirection": self._flexDirection,
			"alignItems": self._alignItems,
			"justifyContent": self._justifyContent,
			"flexWrap": self._flexWrap,
			"alignContent": self._alignContent,
			"rowGap": self._rowGap,
			"columnGap": self._columnGap,
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class Flex:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: FlexstylesClass = get_defined_value(state, def_state, "styles")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = FlexstylesClass(state, self._def_state["styles"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			}


class LinkstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class LinkcustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.text: str = get_defined_value(state, def_state, "text")
		self.url: str = get_defined_value(state, def_state, "url")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def text(self):
		self._getter_access_tracker["text"] = {}
		return self._text
	@text.setter
	def text(self, state):
		self._setter_access_tracker["text"] = {}
		self._text = state
	@property
	def url(self):
		self._getter_access_tracker["url"] = {}
		return self._url
	@url.setter
	def url(self, state):
		self._setter_access_tracker["url"] = {}
		self._url = state
	def _to_json_fields(self):
		return {
			"text": self._text,
			"url": self._url,
			}


class Link:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.styles: LinkstylesClass = get_defined_value(state, def_state, "styles")
		self.custom: LinkcustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = LinkstylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = LinkcustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}


class ImagestylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class ImagecustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alt: str = get_defined_value(state, def_state, "alt")
		self.src: str = get_defined_value(state, def_state, "src")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alt(self):
		self._getter_access_tracker["alt"] = {}
		return self._alt
	@alt.setter
	def alt(self, state):
		self._setter_access_tracker["alt"] = {}
		self._alt = state
	@property
	def src(self):
		self._getter_access_tracker["src"] = {}
		return self._src
	@src.setter
	def src(self, state):
		self._setter_access_tracker["src"] = {}
		self._src = state
	def _to_json_fields(self):
		return {
			"alt": self._alt,
			"src": self._src,
			}


class Image:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: ImagestylesClass = get_defined_value(state, def_state, "styles")
		self.custom: ImagecustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = ImagestylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = ImagecustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}


class ButtonstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class ButtoncustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.text: str = get_defined_value(state, def_state, "text")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def text(self):
		self._getter_access_tracker["text"] = {}
		return self._text
	@text.setter
	def text(self, state):
		self._setter_access_tracker["text"] = {}
		self._text = state
	def _to_json_fields(self):
		return {
			"text": self._text,
			}


class Button:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: ButtonstylesClass = get_defined_value(state, def_state, "styles")
		self.custom: ButtoncustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = ButtonstylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = ButtoncustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}


class TextBoxstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class TextBoxcustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.text: str = get_defined_value(state, def_state, "text")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def text(self):
		self._getter_access_tracker["text"] = {}
		return self._text
	@text.setter
	def text(self, state):
		self._setter_access_tracker["text"] = {}
		self._text = state
	def _to_json_fields(self):
		return {
			"text": self._text,
			}


class TextBox:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: TextBoxstylesClass = get_defined_value(state, def_state, "styles")
		self.custom: TextBoxcustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = TextBoxstylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = TextBoxcustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}

