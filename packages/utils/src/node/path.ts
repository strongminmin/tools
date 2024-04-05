import {dirname as _dirname} from 'node:path'
import { fileURLToPath} from 'node:url'
import { isBrowser } from '../env'

export const dirname = () => {
  if (isBrowser()) {
    return ''
  }
  return typeof __dirname !== 'undefined' ? __dirname : _dirname(fileURLToPath(import.meta.url))
}