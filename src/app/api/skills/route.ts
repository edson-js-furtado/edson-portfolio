import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Skill } from "../../../../typings";

export async function GET(request: Request) {
  const query = groq`
    *[_type == "skills"]
`;

//   type Data = {
//     socials: Social[];
//   };
  const skills: Skill[] = await sanityClient.fetch(query);

  return NextResponse.json({ skills });
}

