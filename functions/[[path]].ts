import { createPagesFunctionHandler, type createPagesFunctionHandlerParams } from '@react-router/cloudflare'
import type { Env } from 'load-context'

import * as build from '../build/server' assert { type: 'javascript' }

export const onRequest = createPagesFunctionHandler({
  build: build as createPagesFunctionHandlerParams<Env>['build'],
})
