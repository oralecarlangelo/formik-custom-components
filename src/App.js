import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Field, Form, Formik } from "formik";
import "./App.css";
import * as Yup from "yup";
import MaterialAccordion from "./components/MaterialAccordion";

function App() {
  const [accordionIndex, setAccordionIndex] = React.useState(0);
  const onChangeAccordionIndex = () => {
    setAccordionIndex(accordionIndex + 1);
  };
  const formX = [
    {
      properties: [
        {
          name: "outcome",
          type: "text",
        },
        {
          name: "notes",
          type: "text",
        },
      ],
      initialValues: {
        outcome: "",
        notes: "",
      },
      validationSchema: Yup.object({
        outcome: Yup.string(),
        notes: Yup.string(),
      }),
    },
    {
      properties: [
        {
          name: "outcome1",
          type: "text",
        },
        {
          name: "notes1",
          type: "text",
        },
      ],
      initialValues: {
        outcome1: "",
        notes1: "",
      },
      validationSchema: Yup.object({
        outcome1: Yup.string(),
        notes1: Yup.string(),
      }),
    },
  ];

  const onNext = (data) => {
    onChangeAccordionIndex();
    console.log("SUBMITTING TO DATABASE", data);
  };
  return (
    <MaterialAccordion />
    // <Accordion
    //   index={accordionIndex}
    //   onChange={(data) => setAccordionIndex(data)}
    // >
    //   {formX &&
    //     formX.map((form) => (
    //       <AccordionItem>
    //         <h2>
    //           <AccordionButton>
    //             <Box flex="1" textAlign="left">
    //               Section 1 title
    //             </Box>
    //             <AccordionIcon />
    //           </AccordionButton>
    //         </h2>
    //         <AccordionPanel pb={4}>
    //           <Formik
    //             initialValues={form.initialValues}
    //             onSubmit={onNext}
    //             validationSchema={form.validationSchema}
    //           >
    //             <Form>
    //               {form &&
    //                 form.properties.map((property) => (
    //                   <Field
    //                     type={property.type}
    //                     name={property.name}
    //                     placeholder={property.name}
    //                   />
    //                 ))}

    //               <Button type="submit">Next</Button>
    //             </Form>
    //           </Formik>
    //         </AccordionPanel>
    //       </AccordionItem>
    //     ))}
    // </Accordion>
  );
}

export default App;
