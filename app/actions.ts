'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function logAccess(actionType: string) {
  try {
    // This physically writes a new row into your Supabase database
    await prisma.protocolLog.create({
      data: {
        action: actionType
      }
    });
    console.log(`Successfully logged: ${actionType}`);
  } catch (error) {
    console.error("Vault Error:", error);
  }
}