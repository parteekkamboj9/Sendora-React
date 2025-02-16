import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {

  const data = [
    {
      title: "Getting Started",
      heading: "Step-by-step guide on how users can get started using your services:",
      list: [
        {key: "Sign Up and Login:", value: "Quick guide to account creation and access."},
        {key: "Browse and Select Tools:", value: "How to find and choose the right automation tools."},
        {key: "Implement Code Snippets:", value: "Step-by-step instructions on how to use code snippets in your projects."},
        {key: "Download Modules:", value: "Guide to downloading and integrating open-source modules."},
        {key: "Join the Community:", value: "Learn how to connect with other developers for collaboration and support."},
      ],
    },
    {
      title: "What We Offer?",
      heading: "Each accordion section can provide a brief description of the different services you provide, such as:",
      list: [
        {key: "Automation Tools", value: "Discover tools to automate tasks and boost your productivity."},
        {key: "Code Snippets", value: "Access ready-made code snippets for fast implementation."},
        {key: "Open-Source Modules", value: "Explore a wide range of open-source modules to enhance your projects."},
        {key: "Tutorials & Guides", value: "Get step-by-step instructions for using our tools and snippets."},
        {key: "Community & Support", value: "Join a community of developers for collaboration and support."},
      ],
    },
    {
      title: "Top Resources You Have",
      heading: "Highlight your most popular or useful tools/modules/snippets in collapsible sections, like:",
      list: [
        {key: "Task Automators", value: "Tools designed to help you automate repetitive tasks."},
        {key: "API Integrations", value: "Code snippets for seamless API integrations."},
        {key: "UI Components", value: "Pre-built UI modules to integrate into your projects."},
        {key: "Database Connectors", value: "Ready-to-use database connectors for common platforms."},
        {key: "Security Enhancements", value: "Modules focused on securing your applications."},
      ],
    },
    {
      title: "What Our Users Are Saying",
      heading: "You can expand each accordion to showcase individual testimonials or reviews.",
      list: [
        {key: "Increased My Productivity", value: "User feedback on how the automation tools helped them."},
        {key: "Saved Me Hours", value: "How ready-made code snippets accelerated development."},
        {key: "Streamlined My Workflow", value: "Positive experiences using modules for integration."},
        {key: "Great Community", value: "Feedback on user support and collaborative opportunities."},
        {key: "Must-Have Tools", value: "Endorsements of the platform’s usefulness for developers."},
      ],
    }
  ]
  return (
    <div className='accordion-usage my-5'>
      {data.map((item, index) => (
        <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <>
          <h2 className="text-xl font-bold text-start mb-4">{item.heading}</h2>
          <ul className="space-y-2 text-sm ms-2">
            {item.list?.map((innerItem, index) => (
              <li className="flex items-start" key={index}>
                <span className="!font-medium text-gary-800 mr-2">{innerItem.key}</span>
                <p className='text-gray-600'>{innerItem.value}</p>
              </li>
            ))}
          </ul>
         </>
        </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}