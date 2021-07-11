import React from "react";
import ContactWidget from "../widgets/ContactWidget";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export default function APISide() {
  return (
    <div>
      <ContactWidget title="Contact" Icon={MoreHorizIcon} />
      <ContactWidget
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Carolyn Duncan"
      />
      <ContactWidget
        src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
        title="Ed Morris"
      />
      <ContactWidget
        src="https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Paul Pinnoc"
      />
      <ContactWidget
        src="https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=675&q=80"
        title="Elizabeth Wong"
      />{" "}
      <ContactWidget
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Jessie Samson"
      />{" "}
      <ContactWidget
        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80"
        title="James Lathrop"
      />
    </div>
  );
}
