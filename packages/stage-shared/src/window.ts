import type * as EventaElectronRenderer from '@moeru/eventa/adapters/electron/renderer'

import { isStageTamagotchi } from './environment'

type EventaIpcRenderer = Parameters<EventaElectronRenderer.createContext>[0]

// Web builds keep this surface so shared code type-checks without Electron packages.
export interface ElectronAPI {
  ipcRenderer: EventaIpcRenderer
}

export interface ElectronWindow<CustomApi = unknown> {
  electron: ElectronAPI
  platform: string
  api: CustomApi
}

export function isElectronWindow<CustomApi = unknown>(window: Window): window is (Window & ElectronWindow<CustomApi>) {
  return isStageTamagotchi() && typeof window === 'object' && window !== null && 'electron' in window
}
