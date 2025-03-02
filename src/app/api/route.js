
import { NextResponse } from 'next/server';
import sai from '#/data/sai.json';

export async function GET() {
  return NextResponse.json(sai);
}