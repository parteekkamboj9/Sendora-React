import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div className='accordion-usage my-5'>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Getting Started</Typography>
      </AccordionSummary>
      <AccordionDetails>
          Step-by-step guide on how users can get started using your services:

          Sign Up and Login: Quick guide to account creation and access.
          Browse and Select Tools: How to find and choose the right automation tools.
          Implement Code Snippets: Step-by-step instructions on how to use code snippets in your projects.
          Download Modules: Guide to downloading and integrating open-source modules.
          Join the Community: Learn how to connect with other developers for collaboration and support.
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">What We Offer?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      Each accordion section can provide a brief description of the different services you provide, such as:
        Automation Tools: Discover tools to automate tasks and boost your productivity.
        Code Snippets: Access ready-made code snippets for fast implementation.
        Open-Source Modules: Explore a wide range of open-source modules to enhance your projects.
        Tutorials & Guides: Get step-by-step instructions for using our tools and snippets.
        Community & Support: Join a community of developers for collaboration and support.
      </AccordionDetails>
    </Accordion>
    
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Top Resources You Have</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Highlight your most popular or useful tools/modules/snippets in collapsible sections, like:
          Task Automators: Tools designed to help you automate repetitive tasks.
          API Integrations: Code snippets for seamless API integrations.
          UI Components: Pre-built UI modules to integrate into your projects.
          Database Connectors: Ready-to-use database connectors for common platforms.
          Security Enhancements: Modules focused on securing your applications.
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">What Our Users Are Saying</Typography>
        </AccordionSummary>
        <AccordionDetails>
            You can expand each accordion to showcase individual testimonials or reviews.

            "Increased My Productivity": User feedback on how the automation tools helped them.
            "Saved Me Hours": How ready-made code snippets accelerated development.
            "Streamlined My Workflow": Positive experiences using modules for integration.
            "Great Community": Feedback on user support and collaborative opportunities.
            "Must-Have Tools": Endorsements of the platform’s usefulness for developers.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}