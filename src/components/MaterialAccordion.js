import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SQFormInput from "./SQFormInput";
import SQFormSelect from "./SQFormSelect";

function MaterialAccordion() {
  const [activeAccordion, setActiveAccordion] = React.useState("panel1");

  const formData = [
    {
      name: "introduction",
      initialState: {
        isTrue: undefined,
        notes: "",
      },
      selections: ["-----", "Yes", "No"],
    },
    {
      name: "cancellation",
      initialState: {
        isTrue: undefined,
        notes: "",
      },
      selections: ["-----", "Confirm", "Do Not Confirm"],
    },
    {
      name: "outcome",
      initialState: {
        isTrue: undefined,
        notes: "",
      },
      selections: ["-----", "Yes", "No"],
    },
    {
      name: "outcome",
      initialState: {
        isTrue: undefined,
        notes: "",
      },
      selections: ["-----", "Yes", "No"],
    },
  ];
  return (
    <>
      {formData.map((data) => (
        <Accordion
          expanded={activeAccordion === data.name}
          onChange={() => setActiveAccordion(data.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{data.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SQFormSelect name={data.name} selections={data.selections} />
            <SQFormInput name="notes" />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default MaterialAccordion;
