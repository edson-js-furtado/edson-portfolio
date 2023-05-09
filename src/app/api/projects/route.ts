import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Project } from "../../../../typings";

export async function GET(request: Request) {
  const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
}
`;

//   type Data = {
//     socials: Social[];
//   };
  const project: Project[] = await sanityClient.fetch(query);

  return NextResponse.json({ project });
}

