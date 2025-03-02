
import { NextResponse } from 'next/server';
import featuredMusic from '#/data/featuredMusic.json';

export async function GET() {
  return NextResponse.json(featuredMusic);
}