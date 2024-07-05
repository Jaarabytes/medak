import React from "react";
import Container from "../container";
import SingleEventCard from "../single-event-card";
import { blogPosts, events } from "../../site-data";
import Link from "next/link";
import { slugifyBlogTitle } from "../../lib/utils";
import { CardDescription, CardTitle } from "../ui/card";

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
            {events.slice(0, 3).map((event, index) => (
              <Link key={index} href={`/`}>
                <div className="group hover:shadow-lg py-2 pl-2">
                  <CardDescription className="capitalize text-foreground">
                    {"event"}
                  </CardDescription>
                  <CardTitle className="text-base text-primary group-hover:underline mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* updates section */}
        <div>
          <GroupTitle>Updates</GroupTitle>

          <div className="space-y-2">
            {blogPosts.slice(0, 3).map((update, index) => (
              <SingleEventCard
                category={"blog"}
                title={update.title}
                key={index}
                date={update.date}
                author={update.author}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Events;
