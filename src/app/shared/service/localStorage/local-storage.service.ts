import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage | undefined;
  constructor() {
    if (typeof window !== 'undefined') {
      this.storage = window.localStorage;
    }
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      if (typeof value === 'string') {
        this.storage.setItem(key, value);
        return true;
      } else {
        this.storage.setItem(key, JSON.stringify(value));
        return true;
      }
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      const itemStorage = this.storage.getItem(key);
      if (itemStorage) {
        return typeof itemStorage === 'string' ? itemStorage : JSON.parse(itemStorage);
      }
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
