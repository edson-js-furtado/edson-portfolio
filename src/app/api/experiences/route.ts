
import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Experience } from "../../../../typings";

export async function GET(request: Request) {
    const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`;

  const experiences: Experience[] = await sanityClient.fetch(query);

  return NextResponse.json({ experiences });
}

