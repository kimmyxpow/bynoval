import PocketBase from 'pocketbase';
import type { TypedPocketBase } from './generated-types';
import { PB_URL } from '$env/static/private';

export const client = new PocketBase(PB_URL) as TypedPocketBase;
