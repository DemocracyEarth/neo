import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    // Send request to the GOV microservice
    const response = await axios.post('http://gov-server-ip:8001/process_request', {
      prompt: prompt
    });

    return NextResponse.json({ result: response.data.response });
  } catch (error) {
    console.error("Error calling GOV:", error);
    return NextResponse.json({ error: "Failed to communicate with GOV microservice" }, { status: 500 });
  }
}
