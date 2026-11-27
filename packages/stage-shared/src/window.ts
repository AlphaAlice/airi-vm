import { isStageTamagotchi } from './environment'

// Web builds keep this surface so shared code type-checks without Electron packages.
export interface ElectronAPI {
  ipcRenderer: unknown
}

export interface ElectronWindow<CustomApi = unknown> {
  electron: ElectronAPI
  platform: NodeJS.Platform
  api: CustomApi
}

export function isElectronWindow<CustomApi = unknown>(window: Window): window is (Window & ElectronWindow<CustomApi>) {
  return isStageTamagotchi() && typeof window === 'object' && window !== null && 'electron' in window
}
