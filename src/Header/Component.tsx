import { HeaderClient } from './Component.client'
import { site } from '@/mock/site'
import React from 'react'

/** Track A: chrome from mocks — Payload Header global wired in Track B. */
export function Header() {
  return <HeaderClient site={site} />
}
