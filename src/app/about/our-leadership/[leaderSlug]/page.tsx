import BlogContent from "@/app/blog/components/blog-content";
import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import ImageContaier from "@/components/ui/image-container";
import { committees, management } from "@/site-data";
import React from "react";
import slugify from "slugify";

const SingleLeaderPage = async ({
  params,
}: {
  params: {
    leaderSlug: string;
  };
}) => {
  let committeeMembers = committees.flatMap((committee) => committee.members);
  let member = [...committeeMembers, ...management].find(
    (member) =>
      slugify(member.name.toLowerCase()) === params.leaderSlug.toLowerCase()
  );

  if (!member) {
    return <div>Member not found</div>;
  }
  return (
    <div>
      <MiniHero
        title={member.name}
        subTitle={member.position ? member.position : "Committee Member"}
      />
      <Container>
        <BlogContent
          content={
            <>
              <div>
                <div className="w-9/12 md:w-1/2 mx-auto">
                  <ImageContaier
                    ratio={1 / 1}
                    alt={member.name + " image"}
                    imageURL={member.image}
                    object="cover"
                  />
                </div>
              </div>
              <ParagraphSection contained title={"Bio"} className="space-y-4">
                {member.bio}
              </ParagraphSection>
            </>
          }
        />
      </Container>
    </div>
  );
};

export default SingleLeaderPage;
