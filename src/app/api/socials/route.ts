import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Social } from "../../../../typings";

export async function GET(request: Request) {
  const query = groq`
    *[_type == "social"]
`;

//   type Data = {
//     socials: Social[];
//   };
  const socials: Social[] = await sanityClient.fetch(query);

  return NextResponse.json({ socials });
}

