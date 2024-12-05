// Import the necessary modules from the "@copilotkit/backend" package

import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/backend";



// Define an asynchronous function to handle POST requests

export async function POST(req: Request): Promise<Response> {

  if (!req) {
    return new Response("No request provided", { status: 400 });
  }

  try {

    // Create a new instance of CopilotRuntime

    const copilotKit = new CopilotRuntime({});



    // Use the copilotKit to generate a response using the OpenAIAdapter

    // Pass the incoming request (req) and a new instance of OpenAIAdapter to the response method

    return copilotKit.response(req, new OpenAIAdapter());
  } catch (error) {

    console.error(error);

    return new Response("An error occurred", { status: 500 });
  }

}

