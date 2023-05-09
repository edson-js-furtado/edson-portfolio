import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { PageInfo } from "../../../../typings";

export async function GET(request: Request) {
  const query = groq`
  *[_type == "pageInfo"][0]
`;

  const pageInfo: PageInfo[] = await sanityClient.fetch(query);

  return NextResponse.json({ pageInfo });
}
