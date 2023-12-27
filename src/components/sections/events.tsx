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
        "Event one, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      category: "event",
      title:
        "Event two, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      category: "event",
      title:
        "Event three, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  let updates = [
    {
      category: "update",
      title:
        "update one, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      category: "update",
      title:
        "update two, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      category: "update",
      title:
        "update three, dolor sit amet consectetur adipisicing elit. Quidem sed quasi ullam maiores dolore sapiente dolorum ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
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
