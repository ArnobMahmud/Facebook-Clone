import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import React from "react";
import SideBarWidget from "../widgets/SideBarWidget";
import {
  Chat,
  ExpandMoreOutlined,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";

export default function SideBar() {
  return (
    <div>
      <SideBarWidget
        src="https://lh3.googleusercontent.com/ogw/ADea4I7lvQ9Jg2YIyQ2gPaS3_Dn41a1FjeEDNUmPNO10ZQ=s83-c-mo"
        title="Arnob Mahmud "
      />
      <SideBarWidget
        Icon={LocalHospitalIcon}
        title="Covid19 Information Center"
      />
      <SideBarWidget Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarWidget Icon={People} title="Friends" />
      <SideBarWidget Icon={Chat} title="Messenger" />
      <SideBarWidget Icon={Storefront} title="Marketplace" />
      <SideBarWidget Icon={VideoLibrary} title="Videos" />
      <SideBarWidget Icon={ExpandMoreOutlined} title="" />
    </div>
  );
}
