import { NextResponse } from "next/server";

const UPSTREAM_ENDPOINT = "https://mekark-mail.onrender.com/api/enquiry-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    if (!body.name || !body.phone) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        {
          status: 400,
        },
      );
    }

    const payload = {
      ...body,
      sourceDomain:
        body.sourceDomain ||
        (origin ? new URL(origin).hostname : undefined) ||
        (referer ? new URL(referer).hostname : undefined),
      sourceUrl:
        body.sourceUrl ||
        body.pageUrl ||
        referer ||
        origin ||
        undefined,
    };

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(origin ? { Origin: origin } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    console.log("UPSTREAM STATUS:", response.status);
    console.log("UPSTREAM RESPONSE:", responseText);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Upstream failed",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
