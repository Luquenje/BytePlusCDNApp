import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  // Absolute path to the file
  const filePath = path.join(process.cwd(), 'public', 'E15C47ADA04D7937AA71E82628E4798E.txt');
  console.log(filePath)
  try {
    // Read file content
    const fileContent = await fs.readFile(filePath);

    // Create response with appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="E15C47ADA04D7937AA71E82628E4798E.txt"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}