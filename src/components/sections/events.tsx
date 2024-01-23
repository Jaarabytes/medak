import React from "react";
import Container from "../container";
import SingleEventCard from "../single-event-card";

interface GroupTitleProps {
  children: React.ReactNode;
}

const GroupTitle: React.FC<GroupTitleProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">{children}</h1>
    </>
  );
};

const Events = () => {
  let events = [
    {
      category: "event",
      title:
        "USTDA and CCA : Regulatory Convergence for Pharmaceuticals in East/Central Africa ",
      description: "November 13, 2023 8:00 am - 4:30 pm EAT ",
    },
    {
      category: "event",
      title:
        "USTDA and CCA : Regulatory Convergence for Medical Devices in East/Central Africa ",
      description: "November 14, 2023 8:00 am - 4:30 pm EAT ",
    },
    {
      category: "event",
      title:
        "MDRC / MEDAK Workshop ",
      description: "November 20, 2023 8:00 am - 4:30 pm EAT ",
    },
  ];

  let updates = [
    {
      category: "update",
      title:
        "Regulations and Trade: Shaping Industry through Government and Association Collaboration ",
      description: "January 24, 2024 ",
    },
    {
      category: "update",
      title:
        "Revolutionizing Healthcare: The Impact of IVDs and Medical Devices on Global Health Systems ",
      description: "January 15, 2024 ",
    },
    {
      category: "update",
      title:
        "Transforming African Healthcare: Adaptive Regulatory Assessments for Timely, Customized Medical Innovation ",
      description: "January 3, 2024 ",
    },
  ];

  return (
    <section className="py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* events section */}
        <div>
          <GroupTitle>Events</GroupTitle>

          <div className="space-y-2">
            {events.map((event, index) => (
              <SingleEventCard
                category={event.category}
                description={event.description}
                title={event.title}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* updates section */}
        <div>
          <GroupTitle>Updates</GroupTitle>

          <div className="space-y-2">
            {updates.map((update, index) => (
              <SingleEventCard
                category={update.category}
                description={update.description}
                title={update.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Events;
