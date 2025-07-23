import PocketBase from 'pocketbase';
import type { TypedPocketBase } from './generated-types';
import { env } from '$env/dynamic/private';

export const client = new PocketBase(env.PB_URL) as TypedPocketBase;
